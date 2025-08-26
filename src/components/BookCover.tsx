import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play } from 'lucide-react';
import { Book } from '../types/book';
import { Button } from './ui/button';

interface BookCoverProps {
  book: Book;
  onBack: () => void;
  onStartReading: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ book, onBack, onStartReading }) => {
  const handleStartReading = () => {
    // Scroll to top before starting reading to ensure proper positioning
    window.scrollTo({ top: 0, behavior: 'instant' });
    onStartReading();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="max-w-4xl w-full flex flex-col lg:flex-row gap-6 md:gap-8 items-center"
      >
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Library</span>
        </motion.button>

        {/* Book Cover - Mobile optimized sizing */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="w-48 h-[45vh] md:w-80 md:h-[480px] max-h-[300px] md:max-h-none rounded-lg overflow-hidden shadow-book hover:shadow-glow transition-shadow duration-500">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Book Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 max-w-lg text-center lg:text-left"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">{book.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">by {book.author}</p>
          <p className="text-sm text-primary mb-6 uppercase tracking-wide">{book.genre}</p>
          
          <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
            {book.description}
          </p>

          <div className="space-y-4">
            {/* Start Reading CTA - Always visible on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={handleStartReading}
                size="lg"
                className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 flex items-center gap-3 shadow-glow hover:shadow-glow"
              >
                <Play className="h-5 w-5" />
                Start Reading
              </Button>
            </motion.div>
            
            <div className="text-sm text-muted-foreground">
              {book.pages.length} pages • Estimated read time: {Math.ceil(book.pages.length * 2)} minutes
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};