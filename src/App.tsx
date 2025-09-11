// App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import { MobileNavProvider } from "./context/MobileNavContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const AppWithBackHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      if (window.history.length > 1) {
        // ✅ use react-router navigate instead of raw window.history
        navigate(-1);
      } else {
        // fallback rules when no previous history exists
        if (location.pathname.startsWith("/book/")) {
          const bookId = location.pathname.split("/book/")[1];
          navigate(`/preview/${bookId}`, { replace: true });
        } else if (location.pathname.startsWith("/preview/")) {
          navigate("/bookmarks", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MobileNavProvider>
      <BookProvider>
        <TooltipProvider>
          <div className="dark">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppWithBackHandler />
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </BookProvider>
    </MobileNavProvider>
  </QueryClientProvider>
);

export default App;
