import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { BookCarousel } from '../components/BookCarousel';
import { BookCover } from '../components/BookCover';
import { BookReader } from '../components/BookReader';
import { BookGrid } from '../components/BookGrid';
import { LibraryGrid } from '../components/LibraryGrid';
import CategoriesView from '../components/CategoriesView';
import HorizontalBookScroll from '../components/HorizontalBookScroll';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useBooks } from '../context/BookContext';
import { localStorage } from '../utils/localStorage';
import { Book } from '../types/book';
import { sampleBooks } from '../data/sampleBooks';
import { Input } from '../components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type ViewState = 'home' | 'book-cover' | 'reading' | 'bookmarks' | 'latest' | 'library' | 'categories';
type SearchState = 'idle' | 'searching' | 'results';

const Index = () => {
  const { state, dispatch } = useBooks();
  const [viewState, setViewState] = useState<ViewState>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchState, setSearchState] = useState<SearchState>('idle');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    dispatch({ type: 'SET_BOOKS', payload: sampleBooks });
  }, [dispatch]);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchState('idle');
      setFilteredBooks([]);
      return;
    }

    setSearchState('searching');
    const filtered = sampleBooks.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredBooks(filtered);
    setSearchState('results');
  }, [searchQuery]);

  const getBookmarkedBooks = () => {
    const bookmarks = localStorage.getBookmarks();
    const bookmarkedBookIds = Object.keys(bookmarks);
    return sampleBooks.filter(book => bookmarkedBookIds.includes(book.id));
  };

  const getLatestBooks = () => {
    // Sort by id (assuming higher id = newer book) since publishedDate doesn't exist
    return [...sampleBooks].sort((a, b) => parseInt(b.id) - parseInt(a.id));
  };

  const getLibraryBooks = () => {
    const storageLibrary = localStorage.getLibrary();
    const contextLibrary = state.readingProgress.map(progress => {
      const book = sampleBooks.find(b => b.id === progress.bookId);
      return book || null;
    }).filter(Boolean) as Book[];
    
    // Combine storage and context library, removing duplicates
    const allLibraryBookIds = new Set([
      ...storageLibrary.map(b => b.bookId),
      ...contextLibrary.map(b => b.id)
    ]);
    
    return sampleBooks.filter(book => allLibraryBookIds.has(book.id));
  };

  const getBooksByCategory = (category: string) => {
    return sampleBooks.filter(book => book.genre === category);
  };

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
    setViewState('book-cover');
  };

  const handleStartReading = () => {
    if (selectedBook) {
      dispatch({ type: 'SET_CURRENT_BOOK', payload: selectedBook });
      setViewState('reading');
    }
  };

  const handleBackToHome = () => {
    setViewState('home');
    setSelectedBook(null);
  };

  const handleBackToCover = () => {
    setViewState('book-cover');
  };

  const handleNavigation = (view: ViewState) => {
    setViewState(view);
    setSelectedBook(null);
    setSearchQuery('');
  };

  const renderHeader = () => (
    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between p-4 md:p-6 max-w-6xl mx-auto">
        {/* Mobile Header Layout */}
        <div className="flex items-center gap-2 md:gap-6 flex-1 md:hidden">
          <h1 
            className="text-lg font-bold text-primary cursor-pointer whitespace-nowrap" 
            onClick={() => handleNavigation('home')}
          >
            KahaaniVerse
          </h1>
          
          <div className="relative flex-1 max-w-[60%]">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Search books…"
              className="pl-8 h-8 text-sm bg-surface border-border focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Mobile Search Results Dropdown */}
            {searchState === 'results' && filteredBooks.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-50 max-h-[70vh] overflow-y-auto">
                {filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    className="flex items-center gap-2 p-2 hover:bg-surface-hover cursor-pointer border-b border-border last:border-b-0"
                    onClick={() => {
                      handleBookSelect(book);
                      setSearchQuery('');
                    }}
                  >
                    <img src={book.cover} alt={book.title} className="w-8 h-10 object-cover rounded" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-xs truncate">{book.title}</h4>
                      <p className="text-xs text-muted-foreground truncate">{book.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop/Tablet Header */}
        {/* ... (rest of your header code stays same, untouched) */}
        
        <MobileNav currentView={viewState} onNavigate={handleNavigation} />
        {/* Desktop Navigation */}
        {/* ... unchanged */}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (viewState) {
      case 'home':
        return (
          <div className="pt-8 max-w-6xl mx-auto">
            <BookCarousel books={sampleBooks} onBookSelect={handleBookSelect} />
            
            <div className="px-4 md:px-6 mt-12">
              <HorizontalBookScroll 
                title="Trending Now" 
                books={sampleBooks} 
                onBookSelect={handleBookSelect} 
              />
            </div>

            {/* Category-wise Books */}
            <div className="px-4 md:px-6 mt-16">
              {/* All categories unchanged */}
              <HorizontalBookScroll title="Mystery Thriller" books={getBooksByCategory('Mystery Thriller')} onBookSelect={handleBookSelect} />
              <HorizontalBookScroll title="Horror" books={getBooksByCategory('Horror')} onBookSelect={handleBookSelect} />
              <HorizontalBookScroll title="Romance" books={getBooksByCategory('Romance')} onBookSelect={handleBookSelect} />
              <HorizontalBookScroll title="Sci-Fi" books={getBooksByCategory('Sci-Fi')} onBookSelect={handleBookSelect} />
              <HorizontalBookScroll title="Fantasy" books={getBooksByCategory('Fantasy')} onBookSelect={handleBookSelect} />
              <HorizontalBookScroll title="Short Stories" books={getBooksByCategory('Short Stories')} onBookSelect={handleBookSelect} />
              <HorizontalBookScroll title="Drama / Philosophy" books={getBooksByCategory('Drama / Philosophy')} onBookSelect={handleBookSelect} />
              <HorizontalBookScroll title="True Crime / Realistic Fiction" books={getBooksByCategory('True Crime / Realistic Fiction')} onBookSelect={handleBookSelect} />
            </div>
          </div>
        );
        
      case 'bookmarks':
        return (
          <div className="pt-8 max-w-6xl mx-auto">
            <BookGrid 
              books={getBookmarkedBooks()} 
              onBookSelect={handleBookSelect} 
              title="Bookmarked Books"
              emptyMessage="No bookmarked books yet."
            />
          </div>
        );
        
      case 'latest':
        return (
          <div className="pt-8 max-w-6xl mx-auto">
            <BookGrid 
              books={getLatestBooks()} 
              onBookSelect={handleBookSelect} 
              title="Latest Releases"
              emptyMessage="No latest books available."
            />
          </div>
        );
        
      case 'library':
        return (
          <div className="pt-8 max-w-6xl mx-auto">
            <LibraryGrid books={getLibraryBooks()} onBookSelect={handleBookSelect} />
          </div>
        );
        
      case 'categories':
        return (
          <div className="pt-8 max-w-6xl mx-auto">
            <CategoriesView onBookSelect={handleBookSelect} />
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <AnimatePresence mode="wait">
        {(viewState === 'home' || viewState === 'bookmarks' || viewState === 'latest' || viewState === 'library' || viewState === 'categories') && (
          <motion.div key={viewState} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen">
            {renderHeader()}
            {renderContent()}
            <Footer />
          </motion.div>
        )}

        {viewState === 'book-cover' && selectedBook && (
          <motion.div key="book-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <BookCover book={selectedBook} onBack={handleBackToHome} onStartReading={handleStartReading} />
          </motion.div>
        )}

        {viewState === 'reading' && selectedBook && (
          <motion.div key="reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <BookReader book={selectedBook} onBack={handleBackToHome} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
