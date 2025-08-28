import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, X, Languages } from 'lucide-react';
import { Book, Language } from '../types/book';
import { useBooks } from '../context/BookContext';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { localStorage } from '../utils/localStorage';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface BookReaderProps {
  book: Book;
  onBack: () => void;
}

export const BookReader: React.FC<BookReaderProps> = ({ book, onBack }) => {
  const { dispatch } = useBooks();
  const { toast } = useToast();

  const [currentLanguage, setCurrentLanguage] = useState<Language>('english');
  const [isFlipping, setIsFlipping] = useState(false);
  const [isLanguagePopoverOpen, setIsLanguagePopoverOpen] = useState(false); // ✅ added from v1

  // Initialize page from bookmark 
  const savedBookmark = localStorage.getBookmark(book.id);
  const initialPageIndex = savedBookmark ? Math.max(0, savedBookmark - 1) : 0;
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPageIndex);

  const currentBookContent = book.languages[currentLanguage] || book.languages.english;
  const currentPage = currentBookContent.pages[currentPageIndex];

  const isBookmarked = localStorage.getBookmark(book.id) === currentPage?.pageNumber;

  // Load saved state from localStorage
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

  // Stable Refs
  const currentPageIndexRef = useRef(currentPageIndex);
  const currentBookContentRef = useRef(currentBookContent);
  const flipTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    currentPageIndexRef.current = currentPageIndex;
  }, [currentPageIndex]);

  useEffect(() => {
    currentBookContentRef.current = currentBookContent;
  }, [currentBookContent]);

  // Navigation (stable)
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (activeElement?.tagName === 'INPUT' || activeElement?.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          e.stopPropagation();
          prevPageStable();
          break;
        case 'ArrowRight':
          e.preventDefault();
          e.stopPropagation();
          nextPageStable();
          break;
        case 'Escape':
          if (!e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            onBack();
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [nextPageStable, prevPageStable, onBack]);

  // Update reading progress
  useEffect(() => {
    if (currentPage) {
      const newProgress = {
        bookId: book.id,
        currentPageId: currentPage.id,
        currentPageNumber: currentPage.pageNumber,
        lastReadAt: Date.now()
      };
      dispatch({
        type: 'UPDATE_READING_PROGRESS',
        payload: newProgress
      });

      const allProgress = localStorage.getReadingProgress();
      const existingIndex = allProgress.findIndex(p => p.bookId === book.id);
      if (existingIndex >= 0) {
        allProgress[existingIndex] = newProgress;
      } else {
        allProgress.push(newProgress);
      }
      localStorage.setReadingProgress(allProgress);
    }
  }, [currentPageIndex, currentPage, book.id, dispatch]);

  // Bookmark toggle
  const toggleBookmark = () => {
    if (!currentPage) return;
    const currentPageNumber = currentPage.pageNumber;

    if (isBookmarked) {
      localStorage.clearBookmark(book.id);
      dispatch({
        type: 'REMOVE_BOOKMARK',
        payload: { bookId: book.id, pageId: currentPage.id }
      });
      toast({
        title: "Bookmark removed",
        description: `Removed bookmark from page ${currentPageNumber}`,
      });
    } else {
      if (currentPageNumber >= 1 && currentPageNumber <= currentBookContent.pages.length) {
        localStorage.setBookmark(book.id, currentPageNumber);

        const newBookmark = {
          bookId: book.id,
          pageId: currentPage.id,
          pageNumber: currentPageNumber,
          timestamp: Date.now()
        };

        dispatch({
          type: 'ADD_BOOKMARK',
          payload: newBookmark
        });

        toast({
          title: "Bookmark saved",
          description: `Bookmarked page ${currentPageNumber}`,
        });
      }
    }
    setCurrentPageIndex(currentPageIndex);
  };

  // Navigation
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

  // ✅ Updated Language Selector - closes popover properly like version 1
  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setLanguagePreference(language);
    setCurrentPageIndex(0);
    setIsLanguagePopoverOpen(false); // ✅ Correctly close popover
    toast({
      title: "Language changed",
      description: `Switched to ${language}`,
    });
  };

  if (!currentPage) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <X className="h-5 w-5" />
          <span className="hidden md:inline">Close Book</span>
        </button>

        <div className="text-center">
          <h1 className="text-lg font-semibold text-foreground">{currentBookContent.title}</h1>
          <p className="text-sm text-muted-foreground">
            Page {currentPage.pageNumber} of {currentBookContent.pages.length}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* ✅ Controlled Language Popover */}
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
            {isBookmarked ? (
              <BookmarkCheck className="h-5 w-5" />
            ) : (
              <Bookmark className="h-5 w-5" />
            )}
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
            <Button
              onClick={prevPage}
              disabled={currentPageIndex === 0 || isFlipping}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-1">
              {currentBookContent.pages.map((_, index) => (
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
              ))}
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
            Use arrow keys to navigate • ESC to close
          </div>
        </div>
      </div>
    </div>
  );
};
