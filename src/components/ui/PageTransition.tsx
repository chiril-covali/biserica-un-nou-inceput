import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Page transition wrapper for smooth route changes
 * Provides consistent fade and slide animations
 */
export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.1,
        ease: 'linear'
      }}
    >
      {children}
    </motion.div>
  );
}
