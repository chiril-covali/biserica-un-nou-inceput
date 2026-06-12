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
    { name: t('nav.contact'), path: `/${currentLang}/contact` },
    { name: t('nav.donate'), path: `/${currentLang}/donatii` },
  ];

  return (
    <header
      className={cn(
        'fixed left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 transition-all duration-300 rounded-full border shadow-lg px-4 md:px-6',
        isTransparent
          ? 'top-4 md:top-6 bg-[#07162C]/50 backdrop-blur-md border-white/10 text-white'
          : 'top-2 md:top-4 bg-[#0a2240]/85 backdrop-blur-md border-white/10 text-white'
      )}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link
            to={`/${currentLang}`}
            className="flex items-center gap-3 transition-all duration-300"
          >
            <div className="relative size-10 md:size-12 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Logo Biserica UN NOU ÎNCEPUT"
                  className="size-full object-cover scale-150"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-start leading-none">
              <span className="text-base md:text-lg font-bold tracking-[0.2em] text-white">
                BISERICA
              </span>
              <span className="text-[9px] md:text-xs font-semibold tracking-[0.3em] mt-1 text-white/80">
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
                className="relative text-base leading-7 font-light tracking-wide text-white/90 hover:text-white transition-colors duration-200"
              >
                {link.name}
                {(location.pathname === link.path || (link.path === `/${currentLang}` && location.pathname === `/${currentLang}/`)) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <LanguageSelector 
              className="ml-4 border-l border-white/20 pl-4 text-white" 
            />
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector className="text-white" />
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-10 text-white hover:bg-white/10"
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
