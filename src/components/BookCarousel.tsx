import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types/book';
import { useBooks } from '../context/BookContext';

interface BookCarouselProps {
  books: Book[];
  onBookSelect: (book: Book) => void;
}

export const BookCarousel: React.FC<BookCarouselProps> = ({ books, onBookSelect }) => {
  const { state } = useBooks();

  const getLastReadPage = (bookId: string) => {
    const progress = state.readingProgress.find(p => p.bookId === bookId);
    return progress ? progress.currentPageNumber : 1;
  };

  return (
    <div className="px-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Continue Reading</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => onBookSelect(book)}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-48 h-72 rounded-lg overflow-hidden shadow-book transition-transform duration-300 group-hover:shadow-glow"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Continue from page {getLastReadPage(book.id)}</p>
                </div>
              </motion.div>
            </div>
            <div className="mt-4 max-w-48">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                {book.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 truncate">{book.author}</p>
              <p className="text-xs text-muted-foreground mt-1">{book.genre}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};