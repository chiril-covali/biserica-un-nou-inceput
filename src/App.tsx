import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Layout } from "@/components/layout/Layout";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { PageTransition } from "@/components/ui/PageTransition";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Donate = lazy(() => import("./pages/Donate"));
const Bible = lazy(() => import("./pages/Bible"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const { lng } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <Routes>
      <Route path="/" element={<PageTransition><Index /></PageTransition>} />
      <Route path="/despre" element={<PageTransition><About /></PageTransition>} />
      <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      <Route path="/donatii" element={<PageTransition><Donate /></PageTransition>} />
      <Route path="/biblia" element={<PageTransition><Bible /></PageTransition>} />
      <Route path="/lucrari" element={<Navigate to={`/${lng}/#slujiri`} replace />} />
      <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
    </Routes>
  );
}

function RootRedirect() {
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0] || 'ro';
  return <Navigate to={`/${lang}`} replace />;
}

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* <GoogleAnalytics /> */}
            <ScrollToTop />
            <SkipToContent />
            <Routes>
              <Route 
                path="/:lng/*" 
                element={
                  <Layout>
                    <Suspense fallback={<LoadingFallback />}>
                      <AnimatedRoutes />
                    </Suspense>
                  </Layout>
                } 
              />
              <Route path="*" element={<RootRedirect />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
