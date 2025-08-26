import { Bookmark, ReadingProgress, LibraryBook, Language } from '../types/book';

const STORAGE_KEYS = {
  BOOKMARKS: 'kv.bookmarks',
  READING_PROGRESS: 'kv.reading_progress', 
  LIBRARY: 'kv.library',
  LANGUAGE_PREFERENCE: 'kv.lang'
};

export const localStorage = {
  // Simplified Bookmarks Schema: { [bookId]: pageNumber }
  getBookmarks(): Record<string, number> {
    try {
      const data = window.localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },
  
  setBookmarks(bookmarks: Record<string, number>): void {
    try {
      window.localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    } catch (error) {
      console.error('Failed to save bookmarks:', error);
    }
  },

  // Helper functions for bookmarks
  getBookmark(bookId: string): number | null {
    const bookmarks = this.getBookmarks();
    return bookmarks[bookId] || null;
  },

  setBookmark(bookId: string, pageNumber: number): void {
    const bookmarks = this.getBookmarks();
    bookmarks[bookId] = pageNumber;
    this.setBookmarks(bookmarks);
  },

  clearBookmark(bookId: string): void {
    const bookmarks = this.getBookmarks();
    delete bookmarks[bookId];
    this.setBookmarks(bookmarks);
  },

  // Legacy bookmarks for context compatibility
  getLegacyBookmarks(): Bookmark[] {
    try {
      const data = window.localStorage.getItem('kahaaniverse_bookmarks');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  // Reading Progress
  getReadingProgress(): ReadingProgress[] {
    try {
      const data = window.localStorage.getItem(STORAGE_KEYS.READING_PROGRESS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
  
  setReadingProgress(progress: ReadingProgress[]): void {
    try {
      window.localStorage.setItem(STORAGE_KEYS.READING_PROGRESS, JSON.stringify(progress));
    } catch (error) {
      console.error('Failed to save reading progress:', error);
    }
  },

  // Library
  getLibrary(): LibraryBook[] {
    try {
      const data = window.localStorage.getItem(STORAGE_KEYS.LIBRARY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
  
  setLibrary(library: LibraryBook[]): void {
    try {
      window.localStorage.setItem(STORAGE_KEYS.LIBRARY, JSON.stringify(library));
    } catch (error) {
      console.error('Failed to save library:', error);
    }
  },

  // Language Preference
  getLanguagePreference(): Language {
    try {
      const data = window.localStorage.getItem(STORAGE_KEYS.LANGUAGE_PREFERENCE);
      return (data as Language) || 'english';
    } catch {
      return 'english';
    }
  },
  
  setLanguagePreference(language: Language): void {
    try {
      window.localStorage.setItem(STORAGE_KEYS.LANGUAGE_PREFERENCE, language);
    } catch (error) {
      console.error('Failed to save language preference:', error);
    }
  }
};
