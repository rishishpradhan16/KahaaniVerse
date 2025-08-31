import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Book, BookMetadata } from '../types/book';
import { Button } from './ui/button';
import { useMobileNav } from '../context/MobileNavContext';

interface NetflixCarouselProps {
  title: string;
  books: BookMetadata[];
  onBookSelect: (book: BookMetadata) => void;
}

const NetflixCarousel: React.FC<NetflixCarouselProps> = ({ title, books, onBookSelect }) => {
  const { isMobileMenuOpen } = useMobileNav();
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
    updateScrollButtons();
  }, [currentIndex, itemsPerView]);

  const updateScrollButtons = () => {
    setCanScrollLeft(currentIndex > 0);
    setCanScrollRight(currentIndex < books.length - itemsPerView);
  };

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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && canScrollRight) {
      scrollRight();
    }
    if (isRightSwipe && canScrollLeft) {
      scrollLeft();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && canScrollLeft) {
        scrollLeft();
      } else if (e.key === 'ArrowRight' && canScrollRight) {
        scrollRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canScrollLeft, canScrollRight]);

  if (books.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Netflix-style overlay arrows - hide when mobile menu is open */}
        {canScrollLeft && !isMobileMenuOpen && (
          <Button
            variant="outline"
            size="sm"
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 p-0 bg-black/70 border-white/20 text-white hover:bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}
        
        {canScrollRight && !isMobileMenuOpen && (
          <Button
            variant="outline"
            size="sm"
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 p-0 bg-black/70 border-white/20 text-white hover:bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronRight className="h-6 w-6" />
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
            animate={{
              x: `-${(currentIndex * (100 / itemsPerView))}%`,
            }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 100,
            }}
          >
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                className={`flex-shrink-0 ${
                  itemsPerView === 1 ? 'w-full' :
                  itemsPerView === 2 ? 'w-1/2' :
                  itemsPerView === 3 ? 'w-1/3' :
                  'w-1/4'
                } px-2`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="cursor-pointer group h-full"
                  onClick={() => onBookSelect(book)}
                >
                  {/* Book Cover */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 aspect-[3/4]">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium truncate">{book.title}</p>
                      <p className="text-xs opacity-90 truncate">{book.author}</p>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">{book.author}</p>
                    <p className="text-xs text-primary uppercase tracking-wide font-medium">
                      {book.genre}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(books.length / itemsPerView) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-primary'
                  : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Accessibility hint for keyboard users */}
      <div className="sr-only" aria-live="polite">
        Showing books {currentIndex + 1} to {Math.min(currentIndex + itemsPerView, books.length)} of {books.length}
      </div>
    </section>
  );
};

export default NetflixCarousel;
