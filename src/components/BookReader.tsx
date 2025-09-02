import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, X, Languages } from 'lucide-react';
import { Book, Language } from '../types/book';
import { useBooks } from '../context/BookContext';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { localStorage } from '../utils/localStorage';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useIsMobile } from '../hooks/use-mobile';

interface BookReaderProps {
  book: Book;
  onBack: () => void;
}

export const BookReader: React.FC<BookReaderProps> = ({ book, onBack }) => {
  const { dispatch } = useBooks();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [currentLanguage, setCurrentLanguage] = useState<Language>('english');
  const [isFlipping, setIsFlipping] = useState(false);
  const [isLanguagePopoverOpen, setIsLanguagePopoverOpen] = useState(false);

  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const readerRef = useRef<HTMLDivElement>(null);

  const savedBookmark = localStorage.getBookmark(book.id);
  const initialPageIndex = savedBookmark ? Math.max(0, savedBookmark - 1) : 0;
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPageIndex);

  const currentBookContent = book.languages[currentLanguage] || book.languages.english;
  const currentPage = currentBookContent.pages[currentPageIndex];
  const isBookmarked = localStorage.getBookmark(book.id) === currentPage?.pageNumber;

  useEffect(() => {
    const library = localStorage.getLibrary();
    const existingBook = library.find(b => b.bookId === book.id);
    if (!existingBook) {
      const newLibraryBook = {
        bookId: book.id,
        title: book.title,
        author: book.author,
        cover: book.cover,
        firstReadAt: Date.now()
      };
      localStorage.setLibrary([...library, newLibraryBook]);
    }
    const savedLanguage = localStorage.getLanguagePreference();
    setCurrentLanguage(savedLanguage);
  }, [book.id]);

  const currentPageIndexRef = useRef(currentPageIndex);
  const currentBookContentRef = useRef(currentBookContent);
  const flipTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    currentPageIndexRef.current = currentPageIndex;
  }, [currentPageIndex]);

  useEffect(() => {
    currentBookContentRef.current = currentBookContent;
  }, [currentBookContent]);

  const nextPageStable = useCallback(() => {
    const currentIndex = currentPageIndexRef.current;
    const totalPages = currentBookContentRef.current.pages.length;
    if (currentIndex < totalPages - 1) {
      if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
      setCurrentPageIndex(currentIndex + 1);
      setIsFlipping(true);
      flipTimeoutRef.current = setTimeout(() => setIsFlipping(false), 300);
    }
  }, []);

  const prevPageStable = useCallback(() => {
    const currentIndex = currentPageIndexRef.current;
    if (currentIndex > 0) {
      if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
      setCurrentPageIndex(currentIndex - 1);
      setIsFlipping(true);
      flipTimeoutRef.current = setTimeout(() => setIsFlipping(false), 300);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (activeElement?.tagName === 'INPUT' || activeElement?.tagName === 'TEXTAREA') return;
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevPageStable();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextPageStable();
          break;
        case 'Escape':
          e.preventDefault();
          onBack();
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [nextPageStable, prevPageStable, onBack]);

  useEffect(() => {
    if (currentPage) {
      const newProgress = {
        bookId: book.id,
        currentPageId: currentPage.id,
        currentPageNumber: currentPage.pageNumber,
        lastReadAt: Date.now(),
      };
      dispatch({ type: 'UPDATE_READING_PROGRESS', payload: newProgress });
      const allProgress = localStorage.getReadingProgress();
      const existingIndex = allProgress.findIndex(p => p.bookId === book.id);
      if (existingIndex >= 0) allProgress[existingIndex] = newProgress;
      else allProgress.push(newProgress);
      localStorage.setReadingProgress(allProgress);
    }
  }, [currentPageIndex, currentPage, book.id, dispatch]);

  const toggleBookmark = () => {
    if (!currentPage) return;
    const currentPageNumber = currentPage.pageNumber;
    if (isBookmarked) {
      localStorage.clearBookmark(book.id);
      dispatch({ type: 'REMOVE_BOOKMARK', payload: { bookId: book.id, pageId: currentPage.id } });
      toast({ title: "Bookmark removed", description: `Removed bookmark from page ${currentPageNumber}` });
    } else {
      if (currentPageNumber >= 1 && currentPageNumber <= currentBookContent.pages.length) {
        localStorage.setBookmark(book.id, currentPageNumber);
        const newBookmark = {
          bookId: book.id,
          pageId: currentPage.id,
          pageNumber: currentPageNumber,
          timestamp: Date.now()
        };
        dispatch({ type: 'ADD_BOOKMARK', payload: newBookmark });
        toast({ title: "Bookmark saved", description: `Bookmarked page ${currentPageNumber}` });
      }
    }
    setCurrentPageIndex(currentPageIndex);
  };

  const nextPage = () => nextPageStable();
  const prevPage = () => prevPageStable();
  const goToPage = (index: number) => {
    if (index >= 0 && index < currentBookContent.pages.length) {
      if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
      setCurrentPageIndex(index);
      setIsFlipping(true);
      flipTimeoutRef.current = setTimeout(() => setIsFlipping(false), 300);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) nextPageStable(); // left swipe
      else prevPageStable(); // right swipe
    }
  };

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setLanguagePreference(language);
    setCurrentPageIndex(0);
    setIsLanguagePopoverOpen(false);
    toast({ title: "Language changed", description: `Switched to ${language}` });
  };

  if (!currentPage) return null;

  return (
    <div
      ref={readerRef}
      className="min-h-screen bg-background flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="relative flex items-center justify-between p-6 border-b border-border">
        <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <X className="h-5 w-5" />
          <span className="hidden md:inline">Close Book</span>
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 text-center md:static md:transform-none">
          <h1 className="text-base leading-snug font-semibold text-foreground md:text-lg md:leading-normal">{book.title}</h1>
          <p className="text-xs text-muted-foreground md:text-sm">
            Page {currentPage.pageNumber} of {currentBookContent.pages.length}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Popover open={isLanguagePopoverOpen} onOpenChange={setIsLanguagePopoverOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm">
                <Languages className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40">
              <div className="space-y-2">
                <button
                  onClick={() => changeLanguage('english')}
                  className={`w-full text-left px-2 py-1 rounded text-sm ${
                    currentLanguage === 'english' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('hindi')}
                  className={`w-full text-left px-2 py-1 rounded text-sm ${
                    currentLanguage === 'hindi' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                  }`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => changeLanguage('hinglish')}
                  className={`w-full text-left px-2 py-1 rounded text-sm ${
                    currentLanguage === 'hinglish' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                  }`}
                >
                  Hinglish
                </button>
              </div>
            </PopoverContent>
          </Popover>
          <Button
            onClick={toggleBookmark}
            variant="ghost"
            size="sm"
            className={`${isBookmarked ? 'text-primary' : 'text-muted-foreground'} hover:text-primary`}
          >
            {isBookmarked ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Reader */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full relative">
          {/* Page Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentLanguage}-${currentPageIndex}`}
              initial={{ opacity: 0, rotateY: isFlipping ? 90 : 0 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: isFlipping ? -90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-card rounded-lg p-8 shadow-page min-h-[600px] flex flex-col justify-center"
              style={{ perspective: '1000px' }}
            >
              <div className="prose prose-lg max-w-none text-foreground">
                <div className="whitespace-pre-line leading-relaxed text-justify">
                  {currentPage.content}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <Button onClick={prevPage} disabled={currentPageIndex === 0 || isFlipping} variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            {/* Fixed Pagination with Ellipsis */}
            <div className="flex items-center gap-1 flex-wrap justify-center">
              {currentBookContent.pages.length > 20 ? (
                <>
                  {/* First Page */}
                  <button
                    onClick={() => goToPage(0)}
                    disabled={isFlipping}
                    className={`min-w-[32px] h-8 px-2 rounded text-sm font-medium transition-colors ${
                      currentPageIndex === 0
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground'
                    }`}
                  >
                    1
                  </button>

                  {/* Left Ellipsis */}
                  {currentPageIndex > 4 && <span className="px-2">…</span>}

                  {/* Middle Pages (skip first & last page) */}
                  {Array.from({ length: currentBookContent.pages.length }, (_, i) => i)
                    .filter(
                      i =>
                        i !== 0 &&
                        i !== currentBookContent.pages.length - 1 &&
                        (i === currentPageIndex || (i >= currentPageIndex - 2 && i <= currentPageIndex + 2))
                    )
                    .map(i => (
                      <button
                        key={i}
                        onClick={() => goToPage(i)}
                        disabled={isFlipping}
                        className={`min-w-[32px] h-8 px-2 rounded text-sm font-medium transition-colors ${
                          i === currentPageIndex
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}

                  {/* Right Ellipsis */}
                  {currentPageIndex < currentBookContent.pages.length - 5 && <span className="px-2">…</span>}

                  {/* Last Page */}
                  <button
                    onClick={() => goToPage(currentBookContent.pages.length - 1)}
                    disabled={isFlipping}
                    className={`min-w-[32px] h-8 px-2 rounded text-sm font-medium transition-colors ${
                      currentPageIndex === currentBookContent.pages.length - 1
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground'
                    }`}
                  >
                    {currentBookContent.pages.length}
                  </button>
                </>
              ) : (
                currentBookContent.pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    disabled={isFlipping}
                    className={`min-w-[32px] h-8 px-2 rounded text-sm font-medium transition-colors ${
                      index === currentPageIndex
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))
              )}
            </div>

            <Button
              onClick={nextPage}
              disabled={currentPageIndex === currentBookContent.pages.length - 1 || isFlipping}
              variant="outline"
              className="flex items-center gap-2"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center mt-4 text-sm text-muted-foreground">
            {isMobile ? 'Use swipe gestures to navigate' : 'Use arrow keys to navigate • ESC to close'}
          </div>
        </div>
      </div>
    </div>
  );
};
