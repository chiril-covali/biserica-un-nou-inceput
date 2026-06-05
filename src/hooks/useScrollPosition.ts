import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * Optimized to only trigger re-renders when the scrolled state changes
 */
export const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 50;
      
      setIsScrolled((prev) => {
        if (prev !== scrolled) return scrolled;
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled };
};
