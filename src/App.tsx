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
import { useForceBackHome } from "./hooks/useForceBackHome"; // 👈 import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MobileNavProvider>
      <BookProvider>
        <TooltipProvider>
          <div className="dark">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <BackHandlerWrapper />   {/* 👈 yaha se hook call hoga */}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </BookProvider>
    </MobileNavProvider>
  </QueryClientProvider>
);

export default App;

// 👇 Ek chhota wrapper component jo BrowserRouter ke andar hai
function BackHandlerWrapper() {
  useForceBackHome();
  return null;
}
