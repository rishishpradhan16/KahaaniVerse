import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Book, Bookmark, ReadingProgress } from '../types/book';

interface BookState {
  books: Book[];
  bookmarks: Bookmark[];
  readingProgress: ReadingProgress[];
  currentBook: Book | null;
  currentPage: number;
}

type BookAction =
  | { type: 'SET_BOOKS'; payload: Book[] }
  | { type: 'SET_CURRENT_BOOK'; payload: Book | null }
  | { type: 'SET_CURRENT_PAGE'; payload: number }
  | { type: 'ADD_BOOKMARK'; payload: Bookmark }
  | { type: 'REMOVE_BOOKMARK'; payload: { bookId: string; pageId: string } }
  | { type: 'UPDATE_READING_PROGRESS'; payload: ReadingProgress };

const BookContext = createContext<{
  state: BookState;
  dispatch: React.Dispatch<BookAction>;
} | null>(null);

const bookReducer = (state: BookState, action: BookAction): BookState => {
  switch (action.type) {
    case 'SET_BOOKS':
      return { ...state, books: action.payload };
    case 'SET_CURRENT_BOOK':
      return { ...state, currentBook: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'ADD_BOOKMARK':
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };
    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          bookmark => 
            bookmark.bookId !== action.payload.bookId || 
            bookmark.pageId !== action.payload.pageId
        )
      };
    case 'UPDATE_READING_PROGRESS':
      const existingIndex = state.readingProgress.findIndex(
        progress => progress.bookId === action.payload.bookId
      );
      
      if (existingIndex >= 0) {
        const updatedProgress = [...state.readingProgress];
        updatedProgress[existingIndex] = action.payload;
        return { ...state, readingProgress: updatedProgress };
      } else {
        return {
          ...state,
          readingProgress: [...state.readingProgress, action.payload]
        };
      }
    default:
      return state;
  }
};

const initialState: BookState = {
  books: [],
  bookmarks: [],
  readingProgress: [],
  currentBook: null,
  currentPage: 0
};

export const BookProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
};
