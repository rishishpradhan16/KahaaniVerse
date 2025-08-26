import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types/book';
import { sampleBooks } from '../data/sampleBooks';

interface CategoriesViewProps {
  onBookSelect: (book: Book) => void;
}

const CategoriesView: React.FC<CategoriesViewProps> = ({ onBookSelect }) => {
  const categories = [
    'Mystery Thriller',
    'Horror',
    'Romance',
    'Sci-Fi',
    'Fantasy',
    'Short Stories',
    'Drama / Philosophy',
    'True Crime / Realistic Fiction'
  ];

  const getBooksByCategory = (category: string) => {
    return sampleBooks.filter(book => book.genre === category);
  };

  return (
    <div className="px-6 space-y-12">
      <h1 className="text-3xl font-bold text-foreground mb-8">Browse by Category</h1>
      
      {categories.map((category) => {
        const books = getBooksByCategory(category);
        
        if (books.length === 0) return null;
        
        return (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {books.map((book) => (
                <motion.div
                  key={book.id}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer group"
                  onClick={() => onBookSelect(book)}
                >
                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{book.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default CategoriesView;