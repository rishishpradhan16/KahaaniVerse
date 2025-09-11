import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import { MobileNavProvider } from "./context/MobileNavContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import React, { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Stack to track navigation views - starting with homepage "/"
  const [viewStack, setViewStack] = useState(["/"]);

  useEffect(() => {
    // Replace initial state with index 0 to start history
    window.history.replaceState({ idx: 0 }, "");

    const onPopState = () => {
      setViewStack((stack) => {
        if (stack.length > 1) {
          return stack.slice(0, -1); // Pop last view on back button
        }
        return stack;
      });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Custom navigation function to push new views
  const navigateTo = (path: string) => {
    setViewStack((stack) => {
      const newStack = [...stack, path];
      window.history.pushState({ idx: newStack.length - 1 }, "");
      return newStack;
    });
  };

  // Render component based on current top of the stack
  const currentView = viewStack[viewStack.length - 1];

  // Render routes manually based on currentView path,
  // to avoid using <Routes> for navigation purposes, but not removing it
  // so existing routes remain unaffected.

  let RenderedPage;
  switch (currentView) {
    case "/":
      RenderedPage = <Index navigateTo={navigateTo} />;
      break;
    case "/about":
      RenderedPage = <About navigateTo={navigateTo} />;
      break;
    case "/contact":
      RenderedPage = <Contact navigateTo={navigateTo} />;
      break;
    case "/privacy":
      RenderedPage = <Privacy navigateTo={navigateTo} />;
      break;
    case "/disclaimer":
      RenderedPage = <Disclaimer navigateTo={navigateTo} />;
      break;
    default:
      RenderedPage = <NotFound navigateTo={navigateTo} />;
      break;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <MobileNavProvider>
        <BookProvider>
          <TooltipProvider>
            <div className="dark">
              <Toaster />
              <Sonner />
              {/* Keep BrowserRouter and Routes for non-navigation parts - does not affect manual navigation */}
              <BrowserRouter>
                <Routes>
                  {/* Keeping your existing routes for completeness */}
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
              {/* Manually render current view based on custom stack */}
              {RenderedPage}
            </div>
          </TooltipProvider>
        </BookProvider>
      </MobileNavProvider>
    </QueryClientProvider>
  );
};

export default App;
