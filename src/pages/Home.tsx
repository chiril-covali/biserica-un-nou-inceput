import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, MapPin, Calendar as CalendarIcon, Instagram, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { MapEmbed } from '@/components/MapEmbed';
import { churchValues, ministries } from '@/data/church';
import { format, nextDay, startOfToday } from 'date-fns';
import { ro, enUS, ru } from 'date-fns/locale';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ThinCross = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3v18M8 9h8" />
  </svg>
);

export default function Home() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as 'ro' | 'en' | 'ru') || 'ro';
  
  const today = startOfToday();
  const [activeGallery, setActiveGallery] = useState<Record<string, number>>({});
  
  const getNextServiceDate = (dayIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
    const next = nextDay(today, dayIndex);
    const locales = { ro, en: enUS, ru };
    const locale = locales[currentLang as keyof typeof locales] || ro;
    return format(next, 'd MMMM', { locale });
  };

  const nextSunday = getNextServiceDate(0);
  const nextWednesday = getNextServiceDate(3);
  const nextSaturday = getNextServiceDate(6);

  const handleNextImage = (id: string, max: number) => {
    setActiveGallery(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % max
    }));
  };

  const handlePrevImage = (id: string, max: number) => {
    setActiveGallery(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + max) % max
    }));
  };

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[100svh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1920&q=80"
              alt="Comunitate la închinare"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
          </div>

          <div className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 py-24">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className="text-sm sm:text-base md:text-xl tracking-[0.6em] text-white font-bold uppercase">
                {t('home.hero.subtitle')}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white">
                {t('home.hero.title')}
              </h1>
              <div className="space-y-2">
                <p className="text-base sm:text-lg md:text-2xl font-light tracking-wide text-white/90 max-w-3xl mx-auto leading-relaxed">
                  {t('home.hero.description')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium tracking-wide hover:bg-white/90 transition-colors shadow-lg"
                >
                  {t('home.hero.cta_main')}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/despre"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-colors"
                >
                  {t('home.hero.cta_secondary')}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* Bun venit */}
        <section className="py-16 sm:py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                {t('about.title')}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-wide mt-4">
                {t('home.hero.transformed_by')} <br className="hidden sm:block" /> {t('home.hero.jesus_hristos')}
              </h2>
              <div className="space-y-4 text-base sm:text-lg font-light leading-relaxed text-muted-foreground mt-6">
                <p>
                  {t('home.hero.description')}
                </p>
              </div>
              <Link
                to="/despre"
                className="inline-flex items-center gap-2 mt-6 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
              >
                <span>{t('home.hero.cta_secondary')}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Valori */}
        <section className="py-16 sm:py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-accent/5">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 sm:mb-20 space-y-3">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  {t('home.values.subtitle')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-wide">{t('home.values.title')}</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {churchValues.map((value, index) => (
                <ScrollReveal key={value.id} delay={index * 0.1}>
                  <div className="group p-10 border border-border bg-background rounded-xl space-y-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                    <div className="size-16 rounded-2xl bg-accent/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                      {index === 0 ? <ThinCross className="size-8" /> : (value.icon && <value.icon className="size-8" strokeWidth={1.5} />)}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light tracking-wide">{value.title[currentLang as keyof TranslatedString]}</h3>
                      <p className="text-base font-light leading-relaxed text-muted-foreground">
                        {value.description[currentLang as keyof TranslatedString]}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Program */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16 space-y-3">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  {t('home.program.subtitle')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
                  {t('home.program.title')}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { day: t('home.program.sunday'), date: nextSunday, time: t('home.program.sunday_time'), title: t('home.program.sunday_event'), subtitle: currentLang === 'ro' ? 'Închinare și Cuvânt' : currentLang === 'ru' ? 'Поклонение и Слово' : 'Worship and Word' },
                { day: t('home.program.youth'), date: nextWednesday, time: t('home.program.youth_time'), title: t('home.program.youth_event'), subtitle: currentLang === 'ro' ? 'Părtășie și creștere' : currentLang === 'ru' ? 'Общение и рост' : 'Fellowship and growth' },
                { day: t('home.program.men'), date: nextSaturday, time: t('home.program.men_time'), title: t('home.program.men_event'), subtitle: currentLang === 'ro' ? 'Micul dejun cu rugăciune' : currentLang === 'ru' ? 'Молитвенный завтрак' : 'Prayer breakfast' },
              ].map((item, index) => (
                <ScrollReveal key={item.day} delay={index * 0.1}>
                  <div className="p-10 border border-border bg-background rounded-xl space-y-6 text-center group hover:border-primary/30 transition-all duration-300">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold tracking-widest text-primary uppercase">{item.day}</h3>
                      <p className="text-sm font-light text-muted-foreground">{item.date}</p>
                    </div>
                    <div className="h-px w-12 bg-primary/20 mx-auto" />
                    <div className="space-y-2">
                      <p className="text-3xl font-light tracking-tighter text-foreground">{item.time}</p>
                      <p className="text-lg font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground font-light">{item.subtitle}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Slujiri — TOATE */}
        <section id="slujiri" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-border scroll-mt-20 bg-accent/5">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-20 space-y-3">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  {t('home.ministries.subtitle')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-wide">
                  {t('home.ministries.title')}
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                  {t('home.ministries.description')}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministries.map((m, index) => {
                const currentImages = m.images || [m.image];
                const currentIndex = activeGallery[m.id] || 0;
                
                return (
                  <ScrollReveal key={m.id} delay={index * 0.04}>
                    <div className="h-full border border-border bg-background hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group/card rounded-xl">
                      <div className="aspect-video bg-accent/40 overflow-hidden relative">
                        <img
                          src={currentImages[currentIndex]}
                          alt={m.title[currentLang as keyof TranslatedString]}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700"
                        />
                        
                        {currentImages.length > 1 && (
                          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                            <button 
                              onClick={() => handlePrevImage(m.id, currentImages.length)}
                              className="p-1.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                            >
                              <ChevronLeft className="size-4" />
                            </button>
                            <button 
                              onClick={() => handleNextImage(m.id, currentImages.length)}
                              className="p-1.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                            >
                              <ChevronLeft className="size-4 rotate-180" />
                            </button>
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                              {currentImages.map((_, i) => (
                                <div 
                                  key={i} 
                                  className={cn(
                                    "size-1.5 rounded-full transition-all",
                                    i === currentIndex ? "bg-white w-3" : "bg-white/50"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {m.link && (
                          <a 
                            href={m.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                          >
                            <Instagram className="size-4" />
                          </a>
                        )}
                      </div>
                      <div className="p-8 space-y-4 flex-1">
                        {m.schedule && (
                          <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                            {m.schedule[currentLang as keyof TranslatedString]}
                          </p>
                        )}
                        <h3 className="text-xl font-light tracking-wide">{m.title[currentLang as keyof TranslatedString]}</h3>
                        <p className="text-sm font-light leading-relaxed text-muted-foreground">
                          {m.description[currentLang as keyof TranslatedString]}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hartă */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-8 sm:mb-12 space-y-3">
                <MapPin className="size-8 mx-auto text-muted-foreground" strokeWidth={1.2} />
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  {t('home.cta_visit.we_wait')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
                  {t('home.cta_visit.visit_us')}
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="h-[320px] sm:h-[420px] md:h-[500px] border border-border bg-background rounded-2xl overflow-hidden shadow-inner">
                <MapEmbed className="h-full" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Donație CTA */}
        <section className="py-16 sm:py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-zinc-950 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <Heart className="size-16 mx-auto mb-4 text-red-500 fill-red-500" strokeWidth={1.2} />
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-wide mb-6">
                {t('home.donate_cta.title')}
              </h2>
              <p className="text-lg md:text-xl font-light leading-[1.8] opacity-80 max-w-2xl mx-auto mb-10">
                {t('home.donate_cta.description')}
              </p>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-bold tracking-widest uppercase hover:bg-primary/90 transition-all shadow-xl hover:scale-105"
              >
                {t('home.donate_cta.button')}
                <ArrowRight className="size-4" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
