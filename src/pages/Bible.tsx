import { useState, FormEvent, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Loader2, ChevronLeft, ChevronRight, List as ListIcon, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { OLD_TESTAMENT, NEW_TESTAMENT, ALL_BOOKS, BibleBook } from '@/data/bible-books';
import { cn } from '@/lib/utils';

interface Verse {
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

interface BibleResponse {
  reference: string;
  verses: Verse[];
  text: string;
  translation_name: string;
  error?: string;
}

const TRANSLATIONS: Record<string, string> = {
  ro: 'rccv',
  en: 'web',
  ru: 'sz-rusbt'
};

export default function Bible() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as 'ro' | 'en' | 'ru') || 'ro';
  
  const [query, setQuery] = useState('');
  const [data, setData] = useState<BibleResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<BibleBook | null>(null);
  const [showBooks, setShowBooks] = useState(true);
  
  const searchInputRef = useRef<HTMLInputElement>(null);

  const getBookName = (book: BibleBook) => book.name[currentLang] || book.name.ro;

  async function fetchPassage(passage: string) {
    setLoading(true);
    setError(null);
    try {
      // Find the book in the passage to replace it with the English name for the API call
      // The passage usually looks like "Book Name Chapter" or "Book Name Chapter:Verse"
      let apiPassage = passage;
      const foundBook = ALL_BOOKS.find(b => 
        passage.toLowerCase().startsWith(b.name.ro.toLowerCase()) ||
        passage.toLowerCase().startsWith(b.name.en.toLowerCase()) ||
        passage.toLowerCase().startsWith(b.name.ru.toLowerCase())
      );

      if (foundBook) {
        const restOfPassage = passage.substring(foundBook.name[currentLang].length).trim();
        apiPassage = `${foundBook.name.en} ${restOfPassage}`;
      }

      const translation = TRANSLATIONS[currentLang] || TRANSLATIONS.ro;
      const res = await fetch(
        `https://bible-api.com/${encodeURIComponent(apiPassage)}?translation=${translation}`
      );
      const json = await res.json();
      if (json.error) {
        setError(json.error);
        setData(null);
      } else {
        // If we found the book, ensure we use the localized name for the reference
        if (foundBook) {
           json.reference = json.reference.replace(foundBook.name.en, foundBook.name[currentLang]);
        }
        setData(json);
        setQuery(json.reference);
        setShowBooks(false);
        setSelectedBook(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (e) {
      setError(t('bible.error_load'));
    } finally {
      setLoading(false);
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) fetchPassage(query.trim());
  };

  const handleNextChapter = () => {
    if (!data || data.verses.length === 0) return;
    const v = data.verses[0];
    const currentBook = ALL_BOOKS.find(b => 
      b.name.en === v.book_name || 
      b.name.ro === v.book_name || 
      b.name.ru === v.book_name
    );
    if (!currentBook) return;

    if (v.chapter < currentBook.chapters) {
      fetchPassage(`${currentBook.name[currentLang]} ${v.chapter + 1}`);
    } else {
      const currentIndex = ALL_BOOKS.findIndex(b => b.id === currentBook.id);
      if (currentIndex < ALL_BOOKS.length - 1) {
        const nextBook = ALL_BOOKS[currentIndex + 1];
        fetchPassage(`${nextBook.name[currentLang]} 1`);
      }
    }
  };

  const handlePrevChapter = () => {
    if (!data || data.verses.length === 0) return;
    const v = data.verses[0];
    const currentBook = ALL_BOOKS.find(b => 
      b.name.en === v.book_name || 
      b.name.ro === v.book_name || 
      b.name.ru === v.book_name
    );
    
    if (v.chapter > 1) {
      fetchPassage(`${currentBook ? currentBook.name[currentLang] : v.book_name} ${v.chapter - 1}`);
    } else {
      const currentIndex = ALL_BOOKS.findIndex(b => b.id === (currentBook?.id || ''));
      if (currentIndex > 0) {
        const prevBook = ALL_BOOKS[currentIndex - 1];
        fetchPassage(`${prevBook.name[currentLang]} ${prevBook.chapters}`);
      }
    }
  };

  const handleBookClick = (book: BibleBook) => {
    setSelectedBook(book);
  };

  const handleChapterClick = (book: BibleBook, chapter: number) => {
    fetchPassage(`${book.name[currentLang]} ${chapter}`);
  };

  const filteredBooks = ALL_BOOKS.filter(b => 
    getBookName(b).toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  return (
    <>
      <SEOHead
        title={t('bible.title')}
        description={t('bible.description')}
      />

      <div className="min-h-screen pb-20">
        <section className="py-20 md:py-28 px-6 lg:px-8 border-b border-border bg-accent/5">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <BookOpen className="size-10 mx-auto mb-4 text-primary/60" strokeWidth={1.2} />
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-3">
                {currentLang === 'ro' ? 'Sfânta Scriptură' : currentLang === 'ru' ? 'Священное Писание' : 'Holy Scripture'}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4">
                {t('bible.title')}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-light">
                {currentLang === 'ro' ? 'Cuvântul lui Dumnezeu pentru viața ta.' : currentLang === 'ru' ? 'Слово Божье для твоей жизни.' : 'The Word of God for your life.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="sticky top-[96px] md:top-[112px] z-30 bg-background/80 backdrop-blur-md border-b border-border py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3">
            <form onSubmit={onSubmit} className="flex-1 flex gap-2 relative">
              <div className="relative flex-1 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  ref={searchInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('bible.search_placeholder')}
                  className="pl-10 h-11 text-base bg-accent/20 border-none focus-visible:ring-1 ring-primary/20"
                  aria-label="Search"
                />
                
                {query.length > 1 && !loading && !data && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border shadow-xl rounded-lg overflow-hidden z-50">
                    {filteredBooks.length > 0 ? (
                      filteredBooks.map(book => (
                        <button
                          key={book.id}
                          type="button"
                          onClick={() => {
                            setQuery(getBookName(book) + " ");
                            handleBookClick(book);
                            searchInputRef.current?.focus();
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-accent transition-colors border-b border-border last:border-0 flex justify-between items-center"
                        >
                          <span className="font-medium">{getBookName(book)}</span>
                          <span className="text-xs text-muted-foreground">{book.chapters} {currentLang === 'ro' ? 'capitole' : currentLang === 'ru' ? 'глав' : 'chapters'}</span>
                        </button>
                      ))
                    ) : null}
                  </div>
                )}
              </div>
              <Button type="submit" disabled={loading} className="h-11 px-6 shadow-sm">
                {loading ? <Loader2 className="size-4 animate-spin" /> : (currentLang === 'ro' ? 'Caută' : currentLang === 'ru' ? 'Поиск' : 'Search')}
              </Button>
            </form>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowBooks(true);
                  setSelectedBook(null);
                  setData(null);
                }}
                className={cn("h-11 px-4 flex-1 md:flex-none", showBooks && !selectedBook && "bg-accent")}
              >
                <ListIcon className="size-4 mr-2" />
                {currentLang === 'ro' ? 'Toate Cărțile' : currentLang === 'ru' ? 'Все Книги' : 'All Books'}
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {showBooks && !data ? (
                <motion.div
                  key={selectedBook ? 'chapters-list' : 'books-list'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-accent/10 p-6 md:p-10 border border-border rounded-xl"
                >
                  {selectedBook ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 border-b border-border pb-6">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => setSelectedBook(null)}
                          className="rounded-full"
                        >
                          <ChevronLeft className="size-6" />
                        </Button>
                        <h2 className="text-2xl md:text-3xl font-light">{getBookName(selectedBook)}</h2>
                      </div>
                      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                        {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(chapter => (
                          <button
                            key={chapter}
                            onClick={() => handleChapterClick(selectedBook, chapter)}
                            className="aspect-square flex items-center justify-center text-lg border border-border hover:bg-primary hover:text-primary-foreground transition-all rounded-md font-light"
                          >
                            {chapter}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium border-b border-border pb-2 text-primary/70">
                          {currentLang === 'ro' ? 'Vechiul Testament' : currentLang === 'ru' ? 'Ветхий Завет' : 'Old Testament'}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {OLD_TESTAMENT.map(book => (
                            <button
                              key={book.id}
                              onClick={() => handleBookClick(book)}
                              className="text-left text-sm py-1.5 px-2 hover:bg-primary/5 hover:text-primary transition-colors rounded"
                            >
                              {getBookName(book)}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium border-b border-border pb-2 text-primary/70">
                          {currentLang === 'ro' ? 'Noul Testament' : currentLang === 'ru' ? 'Новый Завет' : 'New Testament'}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {NEW_TESTAMENT.map(book => (
                            <button
                              key={book.id}
                              onClick={() => handleBookClick(book)}
                              className="text-left text-sm py-1.5 px-2 hover:bg-primary/5 hover:text-primary transition-colors rounded"
                            >
                              {getBookName(book)}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="space-y-8">
                  {error && (
                    <div className="p-4 border border-destructive/30 bg-destructive/5 text-destructive text-sm rounded-lg text-center">
                      {error}
                    </div>
                  )}

                  {data && !error && (
                    <motion.article
                      key={data.reference}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-10"
                    >
                      <header className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-border pb-6">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handlePrevChapter}
                          className="size-12 rounded-full border border-border hover:bg-accent"
                          title="Anterior"
                        >
                          <ChevronLeft className="size-6" />
                        </Button>
                        
                        <div className="text-center group cursor-pointer" onClick={() => setShowBooks(true)}>
                          <h2 className="text-3xl md:text-4xl font-light tracking-wide flex items-center gap-2">
                            {data.reference}
                            <ChevronDown className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </h2>
                        </div>

                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handleNextChapter}
                          className="size-12 rounded-full border border-border hover:bg-accent"
                          title="Următor"
                        >
                          <ChevronRight className="size-6" />
                        </Button>
                      </header>

                      <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto px-4">
                        {data.verses.map((v, i) => (
                          <p key={i} className="relative pl-8">
                            <span className="absolute left-0 top-1 text-xs font-bold text-primary/40 tabular-nums">
                              {v.verse}
                            </span>
                            {v.text.trim()}
                          </p>
                        ))}
                      </div>

                      <footer className="flex justify-center gap-4 pt-10 border-t border-border">
                        <Button variant="outline" onClick={handlePrevChapter} className="gap-2 font-light">
                          <ChevronLeft className="size-4" /> {currentLang === 'ro' ? 'Anterior' : currentLang === 'ru' ? 'Назад' : 'Previous'}
                        </Button>
                        <Button variant="outline" onClick={handleNextChapter} className="gap-2 font-light">
                          {currentLang === 'ro' ? 'Următor' : currentLang === 'ru' ? 'Далее' : 'Next'} <ChevronRight className="size-4" />
                        </Button>
                      </footer>
                    </motion.article>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </>
  );
}
