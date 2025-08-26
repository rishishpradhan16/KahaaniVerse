import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types/book';
import { useBooks } from '../context/BookContext';

interface LibraryGridProps {
  books: Book[];
  onBookSelect: (book: Book) => void;
}

export const LibraryGrid: React.FC<LibraryGridProps> = ({ books, onBookSelect }) => {
  const { state } = useBooks();

  const getReadingProgress = (bookId: string) => {
    const progress = state.readingProgress.find(p => p.bookId === bookId);
    if (!progress) return { percentage: 0, pageInfo: 'Not started' };
    
    const book = books.find(b => b.id === bookId);
    if (!book) return { percentage: 0, pageInfo: 'Not started' };
    
    const percentage = (progress.currentPageNumber / book.pages.length) * 100;
    return {
      percentage: Math.round(percentage),
      pageInfo: `Page ${progress.currentPageNumber} of ${book.pages.length}`
    };
  };

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
                  {progress.percentage > 0 && (
                    <div className="absolute inset-0 bg-black/50 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{progress.percentage}%</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
                  <p className="text-xs text-primary mt-2 uppercase tracking-wide">{book.genre}</p>
                  <p className="text-xs text-muted-foreground mt-2">{progress.pageInfo}</p>
                  {progress.percentage > 0 && (
                    <div className="mt-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${progress.percentage}%` }}
                        />
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