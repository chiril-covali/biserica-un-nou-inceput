import { ReactNode, useEffect } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Theme Provider — fixat pe tema luminoasă (fără mod întunecat).
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    root.style.colorScheme = 'light';
  }, []);

  return <>{children}</>;
}
