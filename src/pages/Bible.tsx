import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Shuffle, Loader2, ChevronLeft, ChevronRight, List as ListIcon } from 'lucide-react';
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

const TRANSLATION = 'rccv';

export default function Bible() {
  const [query, setQuery] = useState('Ioan 3');
  const [data, setData] = useState<BibleResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showBooks, setShowBooks] = useState(true);

  async function fetchPassage(passage: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://bible-api.com/${encodeURIComponent(passage)}?translation=${TRANSLATION}`
      );
      const json = await res.json();
      if (json.error) {
        setError(json.error);
        setData(null);
      } else {
        setData(json);
        setQuery(json.reference);
      }
    } catch (e) {
      setError('Nu am putut încărca pasajul. Încearcă din nou.');
    } finally {
      setLoading(false);
      setShowBooks(false);
    }
  }

  async function fetchRandom() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://bible-api.com/data/${TRANSLATION}/random`);
      const json = await res.json();
      const v = json.random_verse;
      if (v) {
        setQuery(`${v.book} ${v.chapter}:${v.verse}`);
        setData({
          reference: `${v.book} ${v.chapter}:${v.verse}`,
          verses: [
            { book_name: v.book, chapter: v.chapter, verse: v.verse, text: v.text },
          ],
          text: v.text,
          translation_name: json.translation_name || 'Cornilescu',
        });
      }
    } catch {
      setError('Nu am putut încărca un verset aleatoriu.');
    } finally {
      setLoading(false);
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) fetchPassage(query.trim());
  };

  useEffect(() => {
    // Initial state is already showBooks: true
    // We don't fetch anything to avoid switching to article view automatically
  }, []);

  const handleNextChapter = () => {
    if (!data || data.verses.length === 0) return;
    const v = data.verses[0];
    const currentBook = ALL_BOOKS.find(b => b.name === v.book_name);
    if (!currentBook) return;

    if (v.chapter < currentBook.chapters) {
      fetchPassage(`${v.book_name} ${v.chapter + 1}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const currentIndex = ALL_BOOKS.findIndex(b => b.name === v.book_name);
      if (currentIndex < ALL_BOOKS.length - 1) {
        const nextBook = ALL_BOOKS[currentIndex + 1];
        fetchPassage(`${nextBook.name} 1`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePrevChapter = () => {
    if (!data || data.verses.length === 0) return;
    const v = data.verses[0];
    
    if (v.chapter > 1) {
      fetchPassage(`${v.book_name} ${v.chapter - 1}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const currentIndex = ALL_BOOKS.findIndex(b => b.name === v.book_name);
      if (currentIndex > 0) {
        const prevBook = ALL_BOOKS[currentIndex - 1];
        fetchPassage(`${prevBook.name} ${prevBook.chapters}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Biblia"
        description="Citește și caută în Sfânta Scriptură — Biserica Un Nou Început."
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
                Sfânta Scriptură
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4">
                Biblia
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-light">
                Cuvântul lui Dumnezeu pentru viața ta.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3">
            <form onSubmit={onSubmit} className="flex-1 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="ex: Ioan 3 sau Psalmi 23"
                  className="pl-10 h-11 text-base bg-accent/20 border-none focus-visible:ring-1 ring-primary/20"
                  aria-label="Caută verset sau pasaj"
                />
              </div>
              <Button type="submit" disabled={loading} className="h-11 px-6 shadow-sm">
                {loading ? <Loader2 className="size-4 animate-spin" /> : "Caută"}
              </Button>
            </form>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowBooks(!showBooks)}
                className={cn("h-11 px-4 flex-1 md:flex-none", showBooks && "bg-accent")}
              >
                <ListIcon className="size-4 mr-2" />
                Cărți
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={fetchRandom}
                disabled={loading}
                className="h-11 px-4 flex-1 md:flex-none"
              >
                <Shuffle className="size-4 mr-2" />
                Aleator
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {showBooks ? (
                <motion.div
                  key="books-list"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden space-y-8 bg-accent/10 p-6 md:p-10 border border-border rounded-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium border-b border-border pb-2 text-primary/70">Vechiul Testament</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {OLD_TESTAMENT.map(book => (
                          <button
                            key={book.name}
                            onClick={() => fetchPassage(`${book.name} 1`)}
                            className="text-left text-sm py-1.5 px-2 hover:bg-primary/5 hover:text-primary transition-colors rounded"
                          >
                            {book.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium border-b border-border pb-2 text-primary/70">Noul Testament</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {NEW_TESTAMENT.map(book => (
                          <button
                            key={book.name}
                            onClick={() => fetchPassage(`${book.name} 1`)}
                            className="text-left text-sm py-1.5 px-2 hover:bg-primary/5 hover:text-primary transition-colors rounded"
                          >
                            {book.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
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
                          title="Capitolul anterior"
                        >
                          <ChevronLeft className="size-6" />
                        </Button>
                        
                        <div className="text-center">
                          <h2 className="text-3xl md:text-4xl font-light tracking-wide">{data.reference}</h2>
                        </div>

                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handleNextChapter}
                          className="size-12 rounded-full border border-border hover:bg-accent"
                          title="Capitolul următor"
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
                        <Button variant="outline" onClick={handlePrevChapter} className="gap-2">
                          <ChevronLeft className="size-4" /> Anterior
                        </Button>
                        <Button variant="outline" onClick={handleNextChapter} className="gap-2">
                          Următor <ChevronRight className="size-4" />
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
