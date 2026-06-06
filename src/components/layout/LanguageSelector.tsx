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
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
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
            "h-9 w-auto px-3 gap-2 font-medium tracking-wide hover:bg-white/10 active:bg-white/10 transition-colors",
            className
          )}
        >
          <span className="text-xs uppercase">{currentLanguage.code}</span>
          <span className="text-base leading-none">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border-border w-36">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={cn(
              "flex items-center justify-between text-xs font-light tracking-wide cursor-pointer py-2.5 px-3 hover:bg-accent focus:bg-accent",
              i18n.language === lang.code ? "bg-accent" : ""
            )}
            onClick={() => i18n.changeLanguage(lang.code)}
          >
            <span>{lang.name}</span>
            <span className="text-base">{lang.flag}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
