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
  { code: 'ro', name: 'RO' },
  { code: 'en', name: 'EN' },
  { code: 'ru', name: 'РУ' },
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
            "h-9 w-12 p-0 font-medium tracking-widest hover:bg-white/10 active:bg-white/10 transition-colors",
            className
          )}
        >
          <span className="text-xs uppercase">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border-border min-w-[4rem] p-1">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={cn(
              "flex items-center justify-center text-xs font-medium tracking-widest cursor-pointer py-2.5 px-2 hover:bg-accent focus:bg-accent",
              i18n.language === lang.code ? "bg-accent" : ""
            )}
            onClick={() => {
              if (i18n.language !== lang.code) {
                i18n.changeLanguage(lang.code);
              }
            }}
          >
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
