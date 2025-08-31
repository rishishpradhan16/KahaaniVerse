import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, BookMetadata } from '../types/book';
import { useBooks } from '../context/BookContext';
import { bookService } from '../services/bookService';

interface LibraryGridProps {
  books: BookMetadata[];
  onBookSelect: (book: BookMetadata) => void;
}

export const LibraryGrid: React.FC<LibraryGridProps> = ({ books, onBookSelect }) => {
  const { state } = useBooks();
  const [fullBooks, setFullBooks] = useState<Map<string, Book>>(new Map());
  const [loadingBooks, setLoadingBooks] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Load full book data for books that have reading progress
  useEffect(() => {
    const loadFullBooks = async () => {
      setIsLoading(true);
      const booksWithProgress = books.filter(book => 
        state.readingProgress.some(progress => progress.bookId === book.id)
      );

      if (booksWithProgress.length === 0) {
        setIsLoading(false);
        return;
      }

      const newFullBooks = new Map<string, Book>();
      const newLoadingBooks = new Set<string>();

      for (const book of booksWithProgress) {
        if (!fullBooks.has(book.id)) {
          newLoadingBooks.add(book.id);
          try {
            const fullBook = await bookService.getBookById(book.id);
            if (fullBook) {
              newFullBooks.set(book.id, fullBook);
            }
          } catch (error) {
            console.error(`Failed to load book ${book.id}:`, error);
          } finally {
            newLoadingBooks.delete(book.id);
          }
        }
      }

      setFullBooks(prev => new Map([...prev, ...newFullBooks]));
      setLoadingBooks(newLoadingBooks);
      setIsLoading(false);
    };

    loadFullBooks();
  }, [books, state.readingProgress]);

  const getReadingProgress = (bookId: string) => {
    const progress = state.readingProgress.find(p => p.bookId === bookId);
    if (!progress) return { percentage: 0, pageInfo: 'Not started' };
    
    const fullBook = fullBooks.get(bookId);
    if (!fullBook) {
      return { 
        percentage: 0, 
        pageInfo: loadingBooks.has(bookId) ? 'Loading...' : 'Not started' 
      };
    }
    
    const percentage = (progress.currentPageNumber / fullBook.pages.length) * 100;
    return {
      percentage: Math.round(percentage),
      pageInfo: `Page ${progress.currentPageNumber} of ${fullBook.pages.length}`
    };
  };

  if (isLoading) {
    return (
      <div className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-6">My Library</h2>
        <div className="flex items-center justify-center gap-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          <p className="text-muted-foreground">Loading your library...</p>
        </div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-6">My Library</h2>
        <p className="text-muted-foreground">No books in your library yet. Start reading to see your progress here!</p>
      </div>
    );
  }

  return (
    <div className="px-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">My Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => {
          const progress = getReadingProgress(book.id);
          const isBookLoading = loadingBooks.has(book.id);
          
          return (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-lg p-4 cursor-pointer transition-colors hover:bg-surface-hover"
              onClick={() => onBookSelect(book)}
            >
              <div className="flex gap-4">
                <div className="relative">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-16 h-24 object-cover rounded"
                  />
                  {progress.percentage > 0 && !isBookLoading && (
                    <div className="absolute inset-0 bg-black/50 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{progress.percentage}%</span>
                    </div>
                  )}
                  {isBookLoading && (
                    <div className="absolute inset-0 bg-black/30 rounded flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
                  <p className="text-xs text-primary mt-2 uppercase tracking-wide">{book.genre}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {isBookLoading ? (
                      <span className="flex items-center gap-1">
                        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-primary"></div>
                        Loading progress...
                      </span>
                    ) : (
                      progress.pageInfo
                    )}
                  </p>
                  {progress.percentage > 0 && !isBookLoading && (
                    <div className="mt-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${progress.percentage}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {isBookLoading && (
                    <div className="mt-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '30%' }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};