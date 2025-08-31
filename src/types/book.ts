export interface BookMetadata {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  genre: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  pages: BookPage[];
  genre: string;
  languages: {
    [key: string]: {
      title: string;
      description: string;
      pages: BookPage[];
    };
  };
}

export interface BookPage {
  id: string;
  content: string;
  pageNumber: number;
}

export interface Bookmark {
  bookId: string;
  pageId: string;
  pageNumber: number;
  timestamp: number;
}

export interface ReadingProgress {
  bookId: string;
  currentPageId: string;
  currentPageNumber: number;
  lastReadAt: number;
}

export interface LibraryBook {
  bookId: string;
  title: string;
  author: string;
  cover: string;
  firstReadAt: number;
}

export type Language = 'english' | 'hindi' | 'hinglish';
