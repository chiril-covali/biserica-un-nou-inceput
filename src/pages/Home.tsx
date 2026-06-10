import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, MapPin, Calendar as CalendarIcon, Instagram, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { MapEmbed } from '@/components/MapEmbed';
import { UnderwaterEffect } from '@/components/ui/UnderwaterEffect';
import { churchValues, ministries, TranslatedString } from '@/data/church';
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
          <UnderwaterEffect />

          <div className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 py-24">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className="text-lg sm:text-xl md:text-2xl tracking-[0.4em] sm:tracking-[0.5em] text-white/90 font-bold uppercase">
                {t('home.hero.subtitle')}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase leading-none">
                {t('home.hero.title')}
              </h1>
              <div className="space-y-2">
                <p className="text-lg sm:text-xl md:text-2xl font-normal tracking-wide text-white/95 max-w-3xl mx-auto leading-relaxed">
                  {t('home.hero.description')}
                </p>
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

        {/* Bun venit + Campus & Doneaza (Overlapping card style) */}
        <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto bg-background rounded-t-[3rem] md:rounded-t-[4rem] shadow-2xl mt-0 p-6 sm:p-8 md:p-16 border-t border-x border-border text-center space-y-12">
            <ScrollReveal>
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#1872B9] font-bold">
                {t('about.title')}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mt-4 text-[#104E8B] leading-none">
                {t('home.hero.transformed_by')} <br className="hidden sm:block" /> {t('home.hero.jesus_hristos')}
              </h2>
              <div className="space-y-4 text-lg sm:text-xl font-normal leading-relaxed text-muted-foreground mt-6 max-w-3xl mx-auto">
                <p>
                  {t('about.pastor_text_1')}
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to={`/${currentLang}/despre`}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1872B9] text-white font-semibold tracking-wide rounded-full hover:bg-[#104E8B] transition-all hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-[#1872B9]/30 hover:shadow-xl hover:shadow-[#1872B9]/50 group duration-300"
                >
                  <span>{t('home.hero.cta_secondary')}</span>
                  <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Campus & Donations Card Grid (BBSO style) */}
            <ScrollReveal delay={0.1}>
              <div className="grid md:grid-cols-2 gap-8 items-stretch pt-12 text-left max-w-5xl mx-auto">
                {/* Left: Campus card */}
                <div className="bg-[#1872B9] text-white rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 relative">
                      <img
                        src="/poze/intampin.JPG-optimized.webp"
                        alt="Campus UN NOU ÎNCEPUT"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                      {currentLang === 'ro' ? 'Te așteptăm la Campus' : currentLang === 'ru' ? 'Ждем вас в Капусе' : 'Welcome to our Campus'}
                    </h3>
                    <p className="text-base font-normal opacity-95 leading-relaxed">
                      {currentLang === 'ro' 
                        ? 'Ne întâlnim în fiecare duminică de la ora 10:00 pe strada Alba Iulia 75 F, Chișinău.' 
                        : currentLang === 'ru' 
                        ? 'Мы встречаемся каждое воскресенье в 10:00 по адресу ул. Алба-Юлия 75 F, Кишинев.' 
                        : 'We meet every Sunday at 10:00 at 75 F Alba Iulia St, Chișinău.'}
                    </p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Biserica UN NOU ÎNCEPUT, Alba Iulia 75 F, Chisinau')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3.5 border-2 border-white/60 hover:border-white text-white font-bold rounded-full transition-all text-xs uppercase tracking-wider hover:bg-white hover:text-[#1872B9] bg-transparent shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 duration-200"
                  >
                    Google Maps
                  </a>
                </div>

                {/* Right: Donation Card */}
                <div className="border border-border bg-card text-card-foreground p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-[#1872B9] tracking-widest uppercase">
                      {t('donate.subtitle')}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-extrabold text-[#104E8B] tracking-tight">
                      {t('donate.title')}
                    </h4>
                    <p className="text-base font-normal text-muted-foreground leading-relaxed">
                      {t('donate.description')}
                    </p>
                  </div>
                  <Link
                    to={`/${currentLang}/donatii`}
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1872B9] text-white font-bold rounded-full hover:bg-[#104E8B] transition-all text-xs uppercase tracking-wider self-start shadow-lg shadow-[#1872B9]/30 hover:shadow-xl hover:shadow-[#1872B9]/50 hover:-translate-y-0.5 active:scale-95 duration-300"
                  >
                    {t('home.hero.cta_main')}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Valori */}
        <section className="py-20 md:py-28 px-6 lg:px-8 border-y border-border bg-[#F4F6F9] dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 sm:mb-20 space-y-3">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#1872B9] font-bold">
                  {t('home.values.subtitle')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-[#104E8B] leading-none">
                  {t('home.values.title')}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {churchValues.map((value, index) => (
                <ScrollReveal key={value.id} delay={index * 0.1}>
                  <div className="group p-10 border border-border/60 bg-background rounded-3xl space-y-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 text-left">
                    <div className="size-16 rounded-2xl bg-[#1872B9]/10 text-[#1872B9] flex items-center justify-center group-hover:bg-[#1872B9] group-hover:text-white transition-colors duration-500">
                      {index === 0 ? <ThinCross className="size-8" /> : (value.icon && <value.icon className="size-8" strokeWidth={1.5} />)}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-extrabold tracking-tight text-[#104E8B]">
                        {value.title[currentLang as keyof TranslatedString]}
                      </h3>
                      <p className="text-base font-normal leading-relaxed text-muted-foreground">
                        {value.description[currentLang as keyof TranslatedString]}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Program / Schedule Section (BBSO dark style) */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-gradient-to-br from-[#07162C] via-[#0B2545] to-[#103460] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-6xl mx-auto relative z-10 text-center space-y-12">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="relative size-16 md:size-20 mx-auto flex items-center justify-center shrink-0 mb-6 bg-white/10 rounded-full border border-white/20 p-2">
                  <img
                    src="/logo.png"
                    alt="Logo Biserica UN NOU ÎNCEPUT"
                    className="size-full object-cover scale-150 rounded-full"
                  />
                </div>
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-sky-400 font-bold">
                  {t('home.program.subtitle')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                  {currentLang === 'ro' ? 'Un loc pentru tine și familia ta!' : currentLang === 'ru' ? 'Место для вас и вашей семьи!' : 'A place for you and your family!'}
                </h2>
                <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto pt-2">
                  {t('home.program.title')}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { day: t('home.program.sunday'), date: nextSunday, time: t('home.program.sunday_time'), title: t('home.program.sunday_event'), subtitle: currentLang === 'ro' ? 'Închinare și Cuvânt' : currentLang === 'ru' ? 'Поклонение и Слово' : 'Worship and Word' },
                { day: t('home.program.youth'), date: nextWednesday, time: t('home.program.youth_time'), title: t('home.program.youth_event'), subtitle: currentLang === 'ro' ? 'Părtășie și creștere' : currentLang === 'ru' ? 'Общение и рост' : 'Fellowship and growth' },
                { day: t('home.program.men'), date: nextSaturday, time: t('home.program.men_time'), title: t('home.program.men_event'), subtitle: currentLang === 'ro' ? 'Micul dejun cu rugăciune' : currentLang === 'ru' ? 'Молитвенный завтрак' : 'Prayer breakfast' },
              ].map((item, index) => (
                <ScrollReveal key={item.day} delay={index * 0.1}>
                  <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl space-y-6 text-center group hover:border-white/30 transition-all duration-300">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black tracking-widest text-sky-400 uppercase">{item.day}</h3>
                      <p className="text-xs font-normal text-white/70">{item.date}</p>
                    </div>
                    <div className="h-px w-12 bg-white/20 mx-auto" />
                    <div className="space-y-2">
                      <p className="text-3xl font-light tracking-tighter text-white">{item.time}</p>
                      <p className="text-lg font-bold">{item.title}</p>
                      <p className="text-xs text-white/70 font-normal">{item.subtitle}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Slujiri — TOATE */}
        <section id="slujiri" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-border scroll-mt-20 bg-background text-foreground">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 sm:mb-20 space-y-3">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#1872B9] font-bold">
                  {t('home.ministries.subtitle')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-[#104E8B] leading-none">
                  {t('home.ministries.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto pt-2">
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
                    <div className="h-full border border-border bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col group/card rounded-3xl">
                      <div className="aspect-video bg-accent/40 overflow-hidden relative">
                        <img
                          src={currentImages[currentIndex]}
                          alt={m.title[currentLang as keyof TranslatedString]}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
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
                      <div className="p-8 space-y-4 flex-1 flex flex-col justify-between text-left">
                        <div className="space-y-3">
                          {m.schedule && (
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#1872B9] font-bold">
                              {m.schedule[currentLang as keyof TranslatedString]}
                            </p>
                          )}
                          <h3 className="text-xl font-extrabold tracking-tight text-[#104E8B]">{m.title[currentLang as keyof TranslatedString]}</h3>
                          <p className="text-base font-normal leading-relaxed text-muted-foreground">
                            {m.description[currentLang as keyof TranslatedString]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hartă */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-border bg-[#F4F6F9] dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto space-y-8">
            <ScrollReveal>
              <div className="text-center mb-8 sm:mb-12 space-y-3">
                <MapPin className="size-8 mx-auto text-[#1872B9]" strokeWidth={1.2} />
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#1872B9] font-bold">
                  {t('home.cta_visit.we_wait')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#104E8B] leading-none">
                  {t('home.cta_visit.visit_us')}
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="h-[320px] sm:h-[420px] md:h-[500px] border border-border bg-background rounded-3xl overflow-hidden shadow-lg">
                <MapEmbed className="h-full" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vizitează-ne CTA */}
        <section className="py-20 md:py-28 px-6 lg:px-8 border-t border-border bg-gradient-to-br from-[#07162C] to-[#0B2545] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
                {t('home.cta_visit.title')}
              </h2>
              <p className="text-base sm:text-lg font-light opacity-80 max-w-2xl mx-auto pt-2">
                {t('home.cta_visit.description')}
              </p>
              <div className="pt-8">
                <Link
                  to={`/${currentLang}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1872B9] text-white font-bold rounded-full hover:bg-white hover:text-[#1872B9] transition-all shadow-lg shadow-[#1872B9]/35 hover:shadow-xl hover:shadow-[#1872B9]/55 hover:-translate-y-0.5 active:scale-95 text-xs uppercase tracking-wider duration-300"
                >
                  {t('home.cta_visit.button')}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
