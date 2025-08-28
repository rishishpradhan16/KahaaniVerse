import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Bookmark, Clock, Library, Grid3X3 } from 'lucide-react';
import { Button } from './ui/button';

type ViewState = 'home' | 'book-cover' | 'reading' | 'bookmarks' | 'latest' | 'library' | 'categories';

interface MobileNavProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onDrawerToggle?: (isOpen: boolean) => void; // optional callback to inform parent of drawer state
}

const MobileNav: React.FC<MobileNavProps> = ({ currentView, onNavigate, onDrawerToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close drawer on scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  // Inform parent about drawer open state
  useEffect(() => {
    if (onDrawerToggle) {
      onDrawerToggle(isOpen);
    }
  }, [isOpen, onDrawerToggle]);

  const navItems = [
    { id: 'home' as ViewState, label: 'Home', icon: Home },
    { id: 'bookmarks' as ViewState, label: 'Bookmarks', icon: Bookmark },
    { id: 'latest' as ViewState, label: 'Latest', icon: Clock },
    { id: 'library' as ViewState, label: 'My Library', icon: Library },
    { id: 'categories' as ViewState, label: 'Categories', icon: Grid3X3 },
  ];

  const handleNavigate = (view: ViewState) => {
    onNavigate(view);
    setIsOpen(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Menu Trigger - Fixed 44x44 size */}
      <div className="md:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="w-11 h-11 p-0 bg-background/90 backdrop-blur-sm border shadow-lg flex items-center justify-center"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer - Opens under hamburger */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={drawerRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-16 right-4 w-48 bg-card border border-border rounded-lg shadow-xl z-50 md:hidden max-h-[70vh] overflow-y-auto"
          >
            <div className="p-2">
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavigate(item.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm min-h-[44px] ${
                        currentView === item.id
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-foreground hover:bg-surface-hover'
                      }`}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="font-medium truncate">{item.label}</span>
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
