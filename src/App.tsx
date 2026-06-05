import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Layout } from "@/components/layout/Layout";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { PageTransition } from "@/components/ui/PageTransition";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Donate = lazy(() => import("./pages/Donate"));
const Bible = lazy(() => import("./pages/Bible"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageTransition><Index /></PageTransition>} />
      <Route path="/despre" element={<PageTransition><About /></PageTransition>} />
      <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      <Route path="/donatii" element={<PageTransition><Donate /></PageTransition>} />
      <Route path="/biblia" element={<PageTransition><Bible /></PageTransition>} />
      <Route path="/lucrari" element={<Navigate to="/#slujiri" replace />} />
      <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
    </Routes>
  );
}

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <SkipToContent />
            <Layout>
              <Suspense fallback={<LoadingFallback />}>
                <AnimatedRoutes />
              </Suspense>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
