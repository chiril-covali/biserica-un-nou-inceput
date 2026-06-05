import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Shuffle, Loader2 } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

const SUGGESTIONS = [
  'Ioan 3:16',
  'Psalmi 23',
  'Romani 8:28',
  'Filipeni 4:13',
  'Matei 11:28-30',
  '1 Corinteni 13',
];

export default function Bible() {
  const [query, setQuery] = useState('Ioan 3:16');
  const [data, setData] = useState<BibleResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      }
    } catch (e) {
      setError('Nu am putut încărca pasajul. Încearcă din nou.');
    } finally {
      setLoading(false);
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

  return (
    <>
      <SEOHead
        title="Biblia"
        description="Caută versete și pasaje biblice în traducerea Cornilescu — Biserica Un Nou Început."
      />

      <div className="min-h-screen">
        <section className="py-20 md:py-28 px-6 lg:px-8 border-b border-border">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <BookOpen className="size-10 mx-auto mb-4 text-muted-foreground" strokeWidth={1.2} />
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-3">
                Cuvântul lui Dumnezeu
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4">
                Biblia
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-light">
                Caută orice verset sau capitol — traducerea Cornilescu.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ex: Ioan 3:16 sau Psalmi 23"
                className="flex-1 h-12 text-base"
                aria-label="Caută verset sau pasaj"
              />
              <Button type="submit" disabled={loading} className="h-12 px-6">
                {loading ? <Loader2 className="size-4 animate-spin" /> : <Search className="size-4" />}
                <span className="ml-2">Caută</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={fetchRandom}
                disabled={loading}
                className="h-12 px-4"
              >
                <Shuffle className="size-4" />
                <span className="ml-2 sm:hidden md:inline">Aleator</span>
              </Button>
            </form>

            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setQuery(s);
                    fetchPassage(s);
                  }}
                  className="text-xs md:text-sm px-3 py-1.5 border border-border hover:bg-accent transition-colors font-light"
                >
                  {s}
                </button>
              ))}
            </div>

            {error && (
              <div className="p-4 border border-destructive/30 bg-destructive/5 text-destructive text-sm">
                {error}
              </div>
            )}

            {data && !error && (
              <motion.article
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="border border-border p-6 md:p-10 bg-accent/20 space-y-6"
              >
                <header className="space-y-1 border-b border-border pb-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-light">
                    {data.translation_name}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light tracking-wide">{data.reference}</h2>
                </header>
                <div className="space-y-3 text-base md:text-lg font-light leading-relaxed">
                  {data.verses.map((v, i) => (
                    <p key={i}>
                      <sup className="text-xs text-muted-foreground mr-2 font-medium">{v.verse}</sup>
                      {v.text.trim()}
                    </p>
                  ))}
                </div>
              </motion.article>
            )}

            <p className="text-xs text-muted-foreground font-light text-center">
              Date oferite de bible-api.com — Cornilescu Corrected Romanian Version.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
