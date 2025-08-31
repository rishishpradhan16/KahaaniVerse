import React from 'react';
import { motion } from 'framer-motion';
import { Book, BookMetadata } from '../types/book';

interface CategoryBooksProps {
  title: string;
  books: BookMetadata[];
  onBookSelect: (book: BookMetadata) => void;
}

const CategoryBooks: React.FC<CategoryBooksProps> = ({ title, books, onBookSelect }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {books.map((book) => (
          <motion.div
            key={book.id}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => onBookSelect(book)}
          >
            <div className="w-40 space-y-3">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-muted-foreground">{book.author}</p>
                <p className="text-xs text-primary uppercase tracking-wide">{book.genre}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoryBooks;