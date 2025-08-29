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
        <div className="flex items-center gap-4 md:gap-6 flex-1">
          <h1
            className="text-xl md:text-2xl font-bold text-primary cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            KahaaniVerse
          </h1>
          {/* Search + MobileNav: flex for spacing */}
          <div className="flex items-center gap-3 w-full max-w-md md:max-w-80">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              {/* Desktop/Tablet input */}
              <Input
                placeholder="Search books, authors, genres..."
                className="pl-10 bg-surface border-border focus:border-primary hidden sm:block"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* Mobile input */}
              <Input
                placeholder="Search..."
                className="pl-10 bg-surface border-border focus:border-primary block sm:hidden"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* Search Results Dropdown */}
              {searchState === 'results' && filteredBooks.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                  {filteredBooks.map((book) => (
                    <div
                      key={book.id}
                      className="flex items-center gap-3 p-3 hover:bg-surface-hover cursor-pointer border-b border-border last:border-b-0"
                      onClick={() => {
                        handleBookSelect(book);
                        setSearchQuery('');
                      }}
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{book.title}</h4>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                        <p className="text-xs text-primary uppercase">{book.genre}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {searchState === 'results' && filteredBooks.length === 0 && searchQuery.trim() !== '' && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-50 p-4">
                  <p className="text-muted-foreground text-center">No books found for "{searchQuery}"</p>
                </div>
              )}
            </div>
            {/* Mobile Nav button, with gap (handled by flex gap-3 above) */}
            <MobileNav currentView={viewState} onNavigate={handleNavigation} />
          </div>
        </div>
        {/* Desktop Navigation with More Dropdown */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${viewState === 'home' ? 'bg-accent/50 text-accent-foreground' : 'bg-background'}`}
                  onClick={() => handleNavigation('home')}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${viewState === 'bookmarks' ? 'bg-accent/50 text-accent-foreground' : 'bg-background'}`}
                  onClick={() => handleNavigation('bookmarks')}
                >
                  Bookmarks
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${viewState === 'latest' ? 'bg-accent/50 text-accent-foreground' : 'bg-background'}`}
                  onClick={() => handleNavigation('latest')}
                >
                  Latest
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${viewState === 'library' ? 'bg-accent/50 text-accent-foreground' : 'bg-background'}`}
                  onClick={() => handleNavigation('library')}
                >
                  My Library
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${viewState === 'categories' ? 'bg-accent/50 text-accent-foreground' : 'bg-background'}`}
                  onClick={() => handleNavigation('categories')}
                >
                  Categories
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Tablet Navigation with More Dropdown */}
        <div className="hidden md:block lg:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${viewState === 'home' ? 'bg-accent/50 text-accent-foreground' : 'bg-background'}`}
                  onClick={() => handleNavigation('home')}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10">More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    <NavigationMenuLink
                      className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer ${viewState === 'bookmarks' ? 'bg-accent/50' : ''}`}
                      onClick={() => handleNavigation('bookmarks')}
                    >
                      Bookmarks
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer ${viewState === 'latest' ? 'bg-accent/50' : ''}`}
                      onClick={() => handleNavigation('latest')}
                    >
                      Latest
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer ${viewState === 'library' ? 'bg-accent/50' : ''}`}
                      onClick={() => handleNavigation('library')}
                    >
                      My Library
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer ${viewState === 'categories' ? 'bg-accent/50' : ''}`}
                      onClick={() => handleNavigation('categories')}
                    >
                      Categories
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (viewState) {
      case 'home':
        return (
          <div className="pt-8 max-w-6xl mx-auto">
            <div className="px-4 md:px-6">
              <HorizontalBookScroll
                title="Trending Now"
                books={sampleBooks}
                onBookSelect={handleBookSelect}
              />
              <HorizontalBookScroll
                title="Mystery Thriller"
                books={getBooksByCategory('Mystery Thriller')}
                onBookSelect={handleBookSelect}
              />
              <HorizontalBookScroll
                title="Horror"
                books={getBooksByCategory('Horror')}
                onBookSelect={handleBookSelect}
              />
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
              emptyMessage="No bookmarked books yet. Start reading and bookmark pages to see them here!"
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
            <LibraryGrid
              books={getLibraryBooks()}
              onBookSelect={handleBookSelect}
            />
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
          <motion.div
            key={viewState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            {renderHeader()}
            {renderContent()}
            <Footer />
          </motion.div>
        )}
        {viewState === 'book-cover' && selectedBook && (
          <motion.div
            key="book-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BookCover
              book={selectedBook}
              onBack={handleBackToHome}
              onStartReading={handleStartReading}
            />
          </motion.div>
        )}
        {viewState === 'reading' && selectedBook && (
          <motion.div
            key="reading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BookReader
              book={selectedBook}
              onBack={handleBackToHome}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
