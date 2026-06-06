import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Acasă', path: '/' },
  { name: 'Despre', path: '/despre' },
  { name: 'Biblia', path: '/biblia' },
  { name: 'Media', path: '/media' },
  { name: 'Contact', path: '/contact' },
  { name: 'Donații', path: '/donatii' },
];

export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTransparent = location.pathname === '/' && !isScrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isTransparent
          ? 'bg-transparent py-4'
          : 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link
            to="/"
            className="flex items-center transition-all duration-300"
          >
            <div className="relative size-12 md:size-14 flex items-center justify-center">
              {!isTransparent && (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 rounded-full overflow-hidden"
                >
                  <img
                    src="/logo.png"
                    alt="Logo Biserica Un Nou Început"
                    className="size-full object-cover scale-150"
                  />
                </motion.div>
              )}
            </div>
            
            <div
              className={cn(
                "flex flex-col items-start leading-none transition-all duration-300",
                !isTransparent ? "ml-3" : "ml-0"
              )}
            >
              <span className={cn(
                'text-xl md:text-2xl font-bold tracking-[0.2em]',
                isTransparent ? 'text-white' : 'text-foreground'
              )}>
                BISERICA
              </span>
              <span className={cn(
                'text-[11px] md:text-sm font-semibold tracking-[0.3em] mt-1',
                isTransparent ? 'text-white/90' : 'text-muted-foreground'
              )}>
                UN NOU ÎNCEPUT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative text-base leading-7 font-light tracking-wide transition-colors duration-200',
                  isTransparent
                    ? 'text-white hover:text-white/80'
                    : 'text-foreground hover:text-foreground/70'
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className={cn(
                      'absolute -bottom-1 left-0 right-0 h-px',
                      isTransparent ? 'bg-white' : 'bg-foreground'
                    )}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn('size-10', isTransparent && 'text-white hover:bg-white/10')}
                  aria-label="Deschide meniul"
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 border-l border-border">
                <SheetTitle className="sr-only">Meniu de navigare</SheetTitle>
                <SheetDescription className="sr-only">
                  Accesează paginile principale ale bisericii.
                </SheetDescription>
                <nav className="flex flex-col gap-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl leading-7 font-medium tracking-wide text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
