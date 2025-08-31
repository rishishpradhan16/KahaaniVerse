import { Book, BookMetadata } from '../types/book';

class BookService {
  private bookMetadata: BookMetadata[] = [];
  private bookCache: Map<string, Book> = new Map();
  private isLoading = false;
  private isLoaded = false;

  async loadBookMetadata(): Promise<BookMetadata[]> {
    if (this.isLoaded) {
      return this.bookMetadata;
    }

    if (this.isLoading) {
      // Wait for the current loading to complete
      while (this.isLoading) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      return this.bookMetadata;
    }

    this.isLoading = true;

    try {
      const response = await fetch('/books/index.json');
      if (!response.ok) {
        throw new Error(`Failed to load book metadata: ${response.statusText}`);
      }
      
      this.bookMetadata = await response.json();
      this.isLoaded = true;
      return this.bookMetadata;
    } catch (error) {
      console.error('Error loading book metadata:', error);
      // Return empty array if loading fails
      return [];
    } finally {
      this.isLoading = false;
    }
  }

  async getBookMetadata(): Promise<BookMetadata[]> {
    return this.loadBookMetadata();
  }

  async getBookById(id: string): Promise<Book | undefined> {
    // Check cache first
    if (this.bookCache.has(id)) {
      return this.bookCache.get(id);
    }

    try {
      const response = await fetch(`/books/book-${id}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load book ${id}: ${response.statusText}`);
      }
      
      const book: Book = await response.json();
      
      // Cache the book
      this.bookCache.set(id, book);
      
      return book;
    } catch (error) {
      console.error(`Error loading book ${id}:`, error);
      return undefined;
    }
  }

  async getBooksByGenre(genre: string): Promise<BookMetadata[]> {
    const metadata = await this.loadBookMetadata();
    return metadata.filter(book => book.genre === genre);
  }

  async searchBooks(query: string): Promise<BookMetadata[]> {
    const metadata = await this.loadBookMetadata();
    const lowerQuery = query.toLowerCase();
    
    return metadata.filter(book =>
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery) ||
      book.genre.toLowerCase().includes(lowerQuery) ||
      book.description.toLowerCase().includes(lowerQuery)
    );
  }

  getGenres(): string[] {
    const genres = new Set(this.bookMetadata.map(book => book.genre));
    return Array.from(genres).sort();
  }

  // Clear cache when needed (e.g., for memory management)
  clearCache(): void {
    this.bookCache.clear();
  }

  // Get cache size for monitoring
  getCacheSize(): number {
    return this.bookCache.size;
  }
}

// Export a singleton instance
export const bookService = new BookService();
