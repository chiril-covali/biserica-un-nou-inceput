import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'ro', name: 'Română' },
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
];

export function LanguageSelector({ className }: { className?: string }) {
  const { i18n } = useTranslation();

  const currentLanguage = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-9 w-auto px-4 font-medium tracking-wide hover:bg-white/10 active:bg-white/10 transition-all text-inherit",
            className
          )}
        >
          <span className="text-xs uppercase tracking-widest">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border-border min-w-[10rem] p-1.5 shadow-2xl">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={cn(
              "flex items-center justify-center text-xs font-medium tracking-[0.15em] cursor-pointer py-3 px-4 rounded-md transition-colors outline-none",
              "focus:bg-foreground/10 focus:text-foreground hover:bg-foreground/10 hover:text-foreground",
              i18n.language === lang.code ? "bg-foreground/10 text-foreground font-bold" : "text-muted-foreground"
            )}
            onClick={() => {
              if (i18n.language !== lang.code) {
                i18n.changeLanguage(lang.code);
              }
            }}
          >
            <span className="uppercase">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
