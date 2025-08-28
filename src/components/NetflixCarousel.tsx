import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Book } from '../types/book';
import { Button } from './ui/button';

interface NetflixCarouselProps {
  title: string;
  books: Book[];
  onBookSelect: (book: Book) => void;
}

const NetflixCarousel: React.FC<NetflixCarouselProps> = ({ title, books, onBookSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1; // mobile: 1 item
    if (window.innerWidth < 768) return 2; // tablet: 2 items
    if (window.innerWidth < 1024) return 3; // small desktop: 3 items
    return 4; // large desktop: 4 items
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCanScrollLeft(currentIndex > 0);
    setCanScrollRight(currentIndex < books.length - itemsPerView);
  }, [currentIndex, itemsPerView, books.length]);

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(Math.max(0, currentIndex - itemsPerView));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(Math.min(books.length - itemsPerView, currentIndex + itemsPerView));
    }
  };

  // Touch/swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance && canScrollRight) {
      scrollRight();
    } else if (distance < -minSwipeDistance && canScrollLeft) {
      scrollLeft();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && canScrollLeft) {
        scrollLeft();
      }
      if (e.key === 'ArrowRight' && canScrollRight) {
        scrollRight();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canScrollLeft, canScrollRight]);

  if (books.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
      <div className="relative">
        {canScrollLeft && (
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollLeft}
            className="absolute left-3 top-1/2 z-20 p-2 rounded-full hover:bg-surface-hover transform -translate-y-1/2"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
        {canScrollRight && (
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollRight}
            className="absolute right-3 top-1/2 z-20 p-2 rounded-full hover:bg-surface-hover transform -translate-y-1/2"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
        <div
          ref={scrollRef}
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: `-${(currentIndex * (100 / itemsPerView))}%` }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          >
            {books.map((book) => (
              <motion.div
                key={book.id}
                className={`flex-shrink-0 ${
                  itemsPerView === 1
                    ? 'w-full'
                    : itemsPerView === 2
                    ? 'w-1/2'
                    : itemsPerView === 3
                    ? 'w-1/3'
                    : 'w-1/4'
                } px-2`}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="cursor-pointer group h-full" onClick={() => onBookSelect(book)}>
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 aspect-[3/4]">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium truncate">{book.title}</p>
                      <p className="text-xs opacity-90 truncate">{book.author}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">{book.author}</p>
                    <p className="text-xs text-primary uppercase tracking-wide font-medium">{book.genre}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="md:hidden flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(books.length / itemsPerView) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerView) === index ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="sr-only" aria-live="polite">
        Showing books {currentIndex + 1} to {Math.min(currentIndex + itemsPerView, books.length)} of {books.length}
      </div>
    </section>
  );
};

export default NetflixCarousel;
