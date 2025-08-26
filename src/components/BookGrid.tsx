import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types/book';

interface BookGridProps {
  books: Book[];
  onBookSelect: (book: Book) => void;
  title: string;
  emptyMessage?: string;
}

export const BookGrid: React.FC<BookGridProps> = ({ 
  books, 
  onBookSelect, 
  title, 
  emptyMessage = "No books found" 
}) => {
  if (books.length === 0) {
    return (
      <div className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="px-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book, index) => (
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
              <img
                src={book.cover}
                alt={book.title}
                className="w-16 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
                <p className="text-xs text-primary mt-2 uppercase tracking-wide">{book.genre}</p>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {book.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};