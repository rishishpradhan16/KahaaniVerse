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
  const [isLanguagePopoverOpen, setIsLanguagePopoverOpen] = useState(false);

  // ✅ Touch gesture handling
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const readerRef = useRef<HTMLDivElement>(null);

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

  // ✅ Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPageIndex]);

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

  // Navigation shortcuts
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

  // ✅ Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        nextPageStable();
      } else {
        prevPageStable();
      }
    }
  };

  // ✅ Updated Language Selector
  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setLanguagePreference(language);
    setCurrentPageIndex(0);
    setIsLanguagePopoverOpen(false);
    toast({
      title: "Language changed",
      description: `Switched to ${language}`,
    });
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
      ...
      {/* [rest of first version’s render code stays EXACTLY AS IS] */}
    </div>
  );
};
