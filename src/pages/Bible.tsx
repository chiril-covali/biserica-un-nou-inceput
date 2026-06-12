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
  ru: 'rst'
};

export default function Bible() {
  const { t, i18n } = useTranslation();
  const langCode = i18n.language.split('-')[0];
  const currentLang = (langCode as 'ro' | 'en' | 'ru') || 'ro';
  
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
      // Find the book in the passage
      const foundBook = ALL_BOOKS.find(b => 
        passage.toLowerCase().startsWith(b.name.ro.toLowerCase()) ||
        passage.toLowerCase().startsWith(b.name.en.toLowerCase()) ||
        passage.toLowerCase().startsWith(b.name.ru.toLowerCase())
      );

      const translation = TRANSLATIONS[currentLang] || TRANSLATIONS.ro;

      if (currentLang === 'ru') {
        // Use justbible.ru API for Russian
        let chapter = 1;
        if (foundBook) {
          const rest = passage.substring(foundBook.name[currentLang].length).trim();
          chapter = parseInt(rest) || 1;
        } else {
          const parts = passage.split(' ');
          chapter = parseInt(parts[parts.length - 1]) || 1;
        }

        const bookIndex = foundBook ? foundBook.index : 1;
        const res = await fetch(
          `https://justbible.ru/api/bible?translation=${translation}&book=${bookIndex}&chapter=${chapter}`
        );
        const json = await res.json();

        if (json.error || !json.info) {
          setError(json.error || t('bible.error_load'));
          setData(null);
        } else {
          const verses: Verse[] = Object.keys(json)
            .filter(key => !isNaN(Number(key)))
            .map(key => ({
              book_name: json.info.book,
              chapter: json.info.chapter,
              verse: parseInt(key),
              text: json[key]
            }))
            .sort((a, b) => a.verse - b.verse);

          const bibleData: BibleResponse = {
            reference: `${json.info.book} ${json.info.chapter}`,
            verses: verses,
            text: verses.map(v => v.text).join(' '),
            translation_name: json.info.translation
          };

          setData(bibleData);
          setQuery(bibleData.reference);
          setShowBooks(false);
          setSelectedBook(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        let apiPassage = passage;
        if (foundBook) {
          const restOfPassage = passage.substring(foundBook.name[currentLang].length).trim();
          apiPassage = `${foundBook.id} ${restOfPassage}`;
        }

        const res = await fetch(
          `https://bible-api.com/${encodeURIComponent(apiPassage)}?translation=${translation}`
        );
        const json = await res.json();
        if (json.error) {
          setError(json.error);
          setData(null);
        } else {
          if (foundBook) {
             const apiBookName = json.reference.split(' ')[0];
             json.reference = json.reference.replace(apiBookName, foundBook.name[currentLang]);
          }
          setData(json);
          setQuery(json.reference);
          setShowBooks(false);
          setSelectedBook(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
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

  const getBookNameShort = (book: BibleBook) => book.name[currentLang] || book.name.ro;

  const filteredBooks = ALL_BOOKS.filter(b => 
    getBookNameShort(b).toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  return (
    <>
      <SEOHead
        title={t('bible.title')}
        description={t('bible.description')}
      />

      <div className="min-h-screen pb-20">
        {/* Page Header */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-gradient-to-b from-[#F3EFF5] to-[#FAF8F5] border-b border-slate-200/60">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <BookOpen className="size-10 mx-auto mb-4 text-sky-600/60" strokeWidth={1.2} />
              <p className="text-xs tracking-[0.3em] uppercase text-sky-600 font-bold mb-3">
                {t('bible.holy_scripture')}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-[#0F1E36] mb-4">
                {t('bible.title')}
              </h1>
              <p className="text-base md:text-lg text-slate-500 font-light">
                {t('bible.holy_scripture_desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="bg-[#FAF8F5] border-b border-slate-200 py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3">
            <form onSubmit={onSubmit} className="flex-1 flex gap-2 relative">
              <div className="relative flex-1 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <Input
                  ref={searchInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('bible.search_placeholder')}
                  className="pl-10 h-11 text-base bg-white border-slate-250 text-slate-800 placeholder:text-slate-400 focus-visible:ring-sky-500/30 focus-visible:border-sky-500/50"
                  aria-label="Search"
                />
                
                {query.length > 1 && !loading && !data && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 shadow-xl rounded-lg overflow-hidden z-50">
                    {filteredBooks.length > 0 ? (
                      filteredBooks.map(book => (
                        <button
                          key={book.id}
                          type="button"
                          onClick={() => {
                            setQuery(getBookNameShort(book) + " ");
                            handleBookClick(book);
                            searchInputRef.current?.focus();
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-slate-100 transition-colors border-b border-slate-100 last:border-0 flex justify-between items-center text-slate-700 cursor-pointer"
                        >
                          <span className="font-semibold text-slate-900">{getBookNameShort(book)}</span>
                          <span className="text-xs text-slate-400">{book.chapters} {t('bible.chapters_count')}</span>
                        </button>
                      ))
                    ) : null}
                  </div>
                )}
              </div>
              <Button type="submit" disabled={loading} className="h-11 px-6 shadow-sm bg-[#0F1E36] text-white hover:bg-slate-800 font-bold rounded-full cursor-pointer">
                {loading ? <Loader2 className="size-4 animate-spin" /> : t('common.search')}
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
                className={cn("h-11 px-4 flex-1 md:flex-none border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer", showBooks && !selectedBook && "bg-slate-100 text-slate-900")}
              >
                <ListIcon className="size-4 mr-2" />
                {t('bible.all_books')}
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[#FAF8F5]">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {showBooks && !data ? (
                <motion.div
                  key={selectedBook ? 'chapters-list' : 'books-list'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-2xl bg-white border border-slate-200 shadow-md p-6 md:p-10"
                >
                  {selectedBook ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => setSelectedBook(null)}
                          className="rounded-full text-slate-800 hover:bg-slate-100 cursor-pointer"
                        >
                          <ChevronLeft className="size-6" />
                        </Button>
                        <h2 className="text-2xl md:text-3xl font-light text-[#0F1E36]">{getBookNameShort(selectedBook)}</h2>
                      </div>
                      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                        {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(chapter => (
                          <button
                            key={chapter}
                            onClick={() => handleChapterClick(selectedBook, chapter)}
                            className="aspect-square flex items-center justify-center text-lg border border-slate-200 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-all rounded-xl font-light text-slate-700 cursor-pointer"
                          >
                            {chapter}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold border-b border-slate-200 pb-2 text-sky-600">
                          {t('bible.old_testament')}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {OLD_TESTAMENT.map(book => (
                            <button
                              key={book.id}
                              onClick={() => handleBookClick(book)}
                              className="text-left text-sm py-1.5 px-2 hover:bg-slate-50 hover:text-sky-700 text-slate-600 transition-colors rounded font-medium cursor-pointer"
                            >
                              {getBookNameShort(book)}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold border-b border-slate-200 pb-2 text-sky-600">
                          {t('bible.new_testament')}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {NEW_TESTAMENT.map(book => (
                            <button
                              key={book.id}
                              onClick={() => handleBookClick(book)}
                              className="text-left text-sm py-1.5 px-2 hover:bg-slate-50 hover:text-sky-700 text-slate-600 transition-colors rounded font-medium cursor-pointer"
                            >
                              {getBookNameShort(book)}
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
                    <div className="p-4 border border-red-200 bg-red-50 text-red-600 text-sm rounded-lg text-center">
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
                      <header className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-200 pb-6">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handlePrevChapter}
                          className="size-12 rounded-full border border-slate-250 hover:bg-slate-50 text-slate-800 cursor-pointer"
                          title="Anterior"
                        >
                          <ChevronLeft className="size-6" />
                        </Button>
                        
                        <div className="text-center group cursor-pointer" onClick={() => setShowBooks(true)}>
                          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-[#0F1E36] flex items-center gap-2">
                            {data.reference}
                            <ChevronDown className="size-5 text-slate-400 group-hover:text-sky-600 transition-colors" />
                          </h2>
                        </div>

                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handleNextChapter}
                          className="size-12 rounded-full border border-slate-250 hover:bg-slate-50 text-slate-800 cursor-pointer"
                          title="Următor"
                        >
                          <ChevronRight className="size-6" />
                        </Button>
                      </header>

                      <div className="space-y-6 text-lg md:text-xl font-serif leading-relaxed max-w-2xl mx-auto px-4 text-slate-800">
                        {data.verses.map((v, i) => (
                          <p key={i} className="relative pl-8 text-slate-800 leading-relaxed">
                            <span className="absolute left-0 top-1 text-xs font-bold text-sky-600/60 tabular-nums">
                              {v.verse}
                            </span>
                            {v.text.trim()}
                          </p>
                        ))}
                      </div>

                      <footer className="flex justify-center gap-4 pt-10 border-t border-slate-200">
                        <Button variant="outline" onClick={handlePrevChapter} className="gap-2 font-light border-slate-250 text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer">
                          <ChevronLeft className="size-4" /> {t('bible.previous')}
                        </Button>
                        <Button variant="outline" onClick={handleNextChapter} className="gap-2 font-light border-slate-250 text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer">
                          {t('bible.next')} <ChevronRight className="size-4" />
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
