import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout wrapper component
 * Provides consistent header and footer across all pages
 * Homepage removes top padding to allow header overlay on hero
 */
export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  // Homepage is either /:lng or /:lng/
  const isHomepage = pathParts.length === 1;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main 
        id="main-content" 
        className={`flex-1 ${isHomepage ? '' : 'pt-24 md:pt-32 px-4 sm:px-6 lg:px-8'}`}
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
