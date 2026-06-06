import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Book as BookIcon, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo/SEOHead';
import { bibleBooks } from '@/data/bible-books';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Bible() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [chapterContent, setChapterContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const filteredBooks = useMemo(() => {
    return bibleBooks.filter((book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleBookSelect = (bookName: string) => {
    setSelectedBook(bookName);
    setSelectedChapter(null);
    setChapterContent('');
  };

  const handleChapterSelect = async (bookName: string, chapter: number) => {
    setIsLoading(true);
    setSelectedChapter(chapter);
    try {
      const response = await fetch(`https://bible-api.com/${bookName}+${chapter}?translation=boroz`);
      const data = await response.json();
      setChapterContent(data.text);
    } catch (error) {
      console.error('Error fetching Bible chapter:', error);
      setChapterContent('Eroare la încărcarea capitolului. Te rugăm să încerci din nou mai târziu.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevChapter = () => {
    if (selectedBook && selectedChapter && selectedChapter > 1) {
      handleChapterSelect(selectedBook, selectedChapter - 1);
    }
  };

  const handleNextChapter = () => {
    if (selectedBook && selectedChapter) {
      const book = bibleBooks.find(b => b.name === selectedBook);
      if (book && selectedChapter < book.chapters) {
        handleChapterSelect(selectedBook, selectedChapter + 1);
      }
    }
  };

  return (
    <>
      <SEOHead
        title={t('bible.title')}
        description={t('bible.description')}
      />

      <div className="min-h-screen pt-20">
        <section className="py-20 px-6 lg:px-8 bg-accent/5 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <BookIcon className="size-12 mx-auto mb-6 text-muted-foreground" strokeWidth={1.2} />
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-4">
                {t('bible.holy_scripture')}
              </p>
              <h1 className="text-5xl md:text-6xl font-light tracking-wide">
                {t('bible.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                {t('bible.holy_scripture_desc')}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {!selectedBook ? (
              <div className="space-y-12">
                <div className="max-w-md mx-auto relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within:text-foreground transition-colors" />
                  <input
                    type="text"
                    placeholder={t('bible.search_placeholder')}
                    className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-sm font-light focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="space-y-16">
                  <ScrollReveal>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-border" />
                        <h2 className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light px-4">
                          {t('bible.all_books')}
                        </h2>
                        <div className="h-px flex-1 bg-border" />
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filteredBooks.map((book) => (
                          <motion.button
                            key={book.name}
                            onClick={() => handleBookSelect(book.name)}
                            className="p-4 border border-border bg-background hover:bg-accent transition-all text-center space-y-2 group"
                            whileHover={{ y: -2 }}
                          >
                            <span className="block text-sm font-light tracking-wide group-hover:font-medium transition-all">
                              {book.name}
                            </span>
                            <span className="text-xs text-muted-foreground">{book.chapters} {t('bible.chapters_count')}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  <div className="grid md:grid-cols-2 gap-12">
                    <ScrollReveal delay={0.1}>
                      <div className="space-y-6 p-8 bg-accent/5 border border-border rounded-sm">
                        <h3 className="text-xl font-light tracking-wide flex items-center gap-3">
                          <div className="size-2 bg-foreground/20 rounded-full" />
                          {t('bible.old_testament')}
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-sm font-light text-muted-foreground">
                          <p>Geneza – Maleahi</p>
                          <p>39 cărți</p>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                      <div className="space-y-6 p-8 bg-accent/5 border border-border rounded-sm">
                        <h3 className="text-xl font-light tracking-wide flex items-center gap-3">
                          <div className="size-2 bg-foreground/20 rounded-full" />
                          {t('bible.new_testament')}
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-sm font-light text-muted-foreground">
                          <p>Matei – Apocalipsa</p>
                          <p>27 cărți</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <button
                  onClick={() => {
                    setSelectedBook(null);
                    setSelectedChapter(null);
                    setChapterContent('');
                  }}
                  className="flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                  {t('bible.back_to_books')}
                </button>

                <div className="grid lg:grid-cols-[280px,1fr] gap-12 items-start">
                  <div className="space-y-8 sticky top-32">
                    <div className="p-6 bg-accent/5 border border-border rounded-sm space-y-6">
                      <h2 className="text-2xl font-light tracking-wide">{selectedBook}</h2>
                      <div className="h-px bg-border" />
                      <div className="grid grid-cols-5 gap-2">
                        {Array.from(
                          { length: bibleBooks.find((b) => b.name === selectedBook)?.chapters || 0 },
                          (_, i) => i + 1
                        ).map((chapter) => (
                          <button
                            key={chapter}
                            onClick={() => handleChapterSelect(selectedBook, chapter)}
                            className={`size-10 flex items-center justify-center text-sm font-light transition-all border ${
                              selectedChapter === chapter
                                ? 'bg-foreground text-background border-foreground'
                                : 'border-border hover:border-foreground/30 hover:bg-accent'
                            }`}
                          >
                            {chapter}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="min-h-[600px] border border-border bg-background p-8 md:p-12 lg:p-16 relative rounded-sm shadow-sm">
                    <AnimatePresence mode="wait">
                      {!selectedChapter ? (
                        <motion.div
                          key="no-chapter"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
                        >
                          <BookOpen className="size-12 text-muted-foreground/30" strokeWidth={1} />
                          <p className="text-muted-foreground font-light italic">
                            {t('bible.select_chapter')}
                          </p>
                        </motion.div>
                      ) : isLoading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10"
                        >
                          <div className="size-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="space-y-12"
                        >
                          <div className="flex justify-between items-center pb-8 border-b border-border/50">
                            <h3 className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                              {selectedBook} {selectedChapter}
                            </h3>
                            <div className="flex gap-2">
                              <button
                                onClick={handlePrevChapter}
                                disabled={selectedChapter === 1}
                                className="p-2 border border-border hover:bg-accent transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                                title={t('bible.previous')}
                              >
                                <ChevronLeft className="size-4" />
                              </button>
                              <button
                                onClick={handleNextChapter}
                                disabled={selectedChapter === bibleBooks.find(b => b.name === selectedBook)?.chapters}
                                className="p-2 border border-border hover:bg-accent transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                                title={t('bible.next')}
                              >
                                <ChevronRight className="size-4" />
                              </button>
                            </div>
                          </div>

                          <div className="prose prose-zinc max-w-none">
                            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground whitespace-pre-wrap first-letter:text-5xl first-letter:font-light first-letter:mr-3 first-letter:float-left first-letter:mt-2">
                              {chapterContent}
                            </p>
                          </div>

                          <div className="flex justify-between items-center pt-12 border-t border-border/50">
                            <button
                              onClick={handlePrevChapter}
                              disabled={selectedChapter === 1}
                              className="flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
                            >
                              <ChevronLeft className="size-4" /> {t('bible.previous')}
                            </button>
                            <button
                              onClick={handleNextChapter}
                              disabled={selectedChapter === bibleBooks.find(b => b.name === selectedBook)?.chapters}
                              className="flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
                            >
                              {t('bible.next')} <ChevronRight className="size-4" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
