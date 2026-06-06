import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { LanguageSelector } from './LanguageSelector';
import { cn } from '@/lib/utils';

export function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentLang = i18n.language.split('-')[0] || 'ro';
  const pathParts = location.pathname.split('/').filter(Boolean);
  const isTransparent = pathParts.length === 1 && !isScrolled;

  const navLinks = [
    { name: t('nav.home'), path: `/${currentLang}` },
    { name: t('nav.about'), path: `/${currentLang}/despre` },
    { name: t('nav.bible'), path: `/${currentLang}/biblia` },
    { name: t('nav.media'), path: `/${currentLang}/media` },
    { name: t('nav.contact'), path: `/${currentLang}/contact` },
    { name: t('nav.donate'), path: `/${currentLang}/donatii` },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isTransparent
          ? 'bg-transparent border-transparent'
          : 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link
            to={`/${currentLang}`}
            className="flex items-center gap-3 transition-all duration-300"
          >
            <div className="relative size-12 md:size-14 flex items-center justify-center shrink-0">
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
            
            <div className="flex flex-col items-start leading-none">
              <span className={cn(
                'text-xl md:text-2xl font-bold tracking-[0.2em] transition-colors',
                isTransparent ? 'text-white' : 'text-foreground'
              )}>
                BISERICA
              </span>
              <span className={cn(
                'text-[11px] md:text-sm font-semibold tracking-[0.3em] mt-1 transition-colors',
                isTransparent ? 'text-white/90' : 'text-muted-foreground'
              )}>
                UN NOU ÎNCEPUT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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
                {(location.pathname === link.path || (link.path === `/${currentLang}` && location.pathname === `/${currentLang}/`)) && (
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
            
            <LanguageSelector 
              className={cn(
                "ml-4 border-l border-white/10 pl-4",
                isTransparent ? "text-white" : "text-foreground"
              )} 
            />
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector 
              className={cn(
                isTransparent ? "text-white" : "text-foreground"
              )} 
            />
            
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
              <SheetContent side="right" className="w-full sm:w-80 border-l border-border bg-background/98 backdrop-blur-lg">
                <SheetTitle className="sr-only">Meniu de navigare</SheetTitle>
                <SheetDescription className="sr-only">
                  Accesează paginile principale ale bisericii.
                </SheetDescription>
                
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col gap-6 mt-12 flex-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl leading-7 font-light tracking-widest text-foreground hover:text-muted-foreground transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="pb-12 border-t border-border pt-8 flex items-center justify-between">
                     <span className="text-xs font-light tracking-widest uppercase opacity-50">Limbă / Language</span>
                     <LanguageSelector />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
