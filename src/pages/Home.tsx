import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, MapPin, Calendar as CalendarIcon, Instagram, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { MapEmbed } from '@/components/MapEmbed';
import { churchValues, ministries } from '@/data/church';
import { format, nextDay, startOfToday } from 'date-fns';
import { ro } from 'date-fns/locale';
import { useState } from 'react';

export default function Home() {
  const today = startOfToday();
  const [activeGallery, setActiveGallery] = useState<Record<string, number>>({});
  
  const getNextServiceDate = (dayIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
    const next = nextDay(today, dayIndex);
    return format(next, 'd MMMM', { locale: ro });
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>

          <div className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 py-24">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className="text-sm sm:text-base md:text-xl tracking-[0.6em] text-white font-bold uppercase">
                Biserica
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white">
                UN NOU ÎNCEPUT
              </h1>
              <div className="space-y-2">
                <p className="text-base sm:text-lg md:text-2xl font-light tracking-wide text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Glorificăm pe Isus.
                </p>
                <p className="text-base sm:text-lg md:text-2xl font-light tracking-wide text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Suntem transformați prin Cuvânt.
                </p>
                <p className="text-base sm:text-lg md:text-2xl font-light tracking-wide text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Slujim prin puterea Duhului Sfânt.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-foreground font-light tracking-wide hover:bg-white/90 transition-colors"
                >
                  Contactează-ne
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="#slujiri"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/60 text-white font-light tracking-wide hover:bg-white hover:text-foreground transition-colors"
                >
                  Slujirile noastre
                  <ArrowRight className="size-4" />
                </a>
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
                Bine ai venit
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-wide mt-4">
                O comunitate transformată de <br className="hidden sm:block" /> Isus Hristos
              </h2>
              <div className="space-y-4 text-base sm:text-lg font-light leading-relaxed text-muted-foreground mt-6">
                <p>
                  Ne dorim să-L glorificăm pe Domnul Isus în tot ceea ce facem, să fim transformați
                  zilnic prin adevărul Scripturii și să slujim lui Dumnezeu și semenilor noștri prin
                  puterea Duhului Sfânt.
                </p>
                <p>
                  Indiferent unde te afli în călătoria ta spirituală, te invităm să descoperi
                  împreună cu noi bucuria unei vieți trăite pentru Hristos.
                </p>
              </div>
              <Link
                to="/despre"
                className="inline-flex items-center gap-2 mt-6 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group underline underline-offset-4"
              >
                <span>Citește cuvântul păstorului</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Valori */}
        <section className="py-16 sm:py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16 space-y-3">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  Valorile noastre
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">Pe ce zidim</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {churchValues.map((value, index) => (
                <ScrollReveal key={value.id} delay={index * 0.1}>
                  <div className="space-y-3 text-center md:text-left">
                    <div className="text-4xl sm:text-5xl font-extralight text-muted-foreground">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light tracking-wide">{value.title}</h3>
                    <p className="text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Program */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16 space-y-3">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  Vino cu noi
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
                  Programul bisericii
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="p-8 border border-border bg-background space-y-4 text-center group hover:border-primary/30 transition-colors">
                  <div className="flex flex-col items-center gap-2">
                    <CalendarIcon className="size-5 text-primary/60" />
                    <h3 className="text-xl font-bold tracking-wide text-primary uppercase">Duminică</h3>
                    <p className="text-sm font-semibold text-muted-foreground">{nextSunday}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">10:00 — Serviciu Divin</p>
                    <p className="text-sm text-muted-foreground font-light">Închinare și Cuvânt</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 border border-border bg-background space-y-4 text-center group hover:border-primary/30 transition-colors">
                  <div className="flex flex-col items-center gap-2">
                    <CalendarIcon className="size-5 text-primary/60" />
                    <h3 className="text-xl font-bold tracking-wide text-primary uppercase">Miercuri</h3>
                    <p className="text-sm font-semibold text-muted-foreground">{nextWednesday}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">18:00 — Seară de tineret</p>
                    <p className="text-sm text-muted-foreground font-light">Părtășie și creștere</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="p-8 border border-border bg-background space-y-4 text-center group hover:border-primary/30 transition-colors">
                  <div className="flex flex-col items-center gap-2">
                    <CalendarIcon className="size-5 text-primary/60" />
                    <h3 className="text-xl font-bold tracking-wide text-primary uppercase">Sâmbătă</h3>
                    <p className="text-sm font-semibold text-muted-foreground">{nextSaturday}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">07:00 — Rugăciunea bărbaților</p>
                    <p className="text-sm text-muted-foreground font-light">Micul dejun cu rugăciune</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Slujiri — TOATE */}
        <section id="slujiri" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-border scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16 space-y-3">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  Implică-te
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
                  Slujirile noastre
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                  Locuri în care poți crește, sluji și fi parte din familia bisericii.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {ministries.map((m, index) => {
                const currentImages = m.images || [m.image];
                const currentIndex = activeGallery[m.id] || 0;
                
                return (
                  <ScrollReveal key={m.id} delay={index * 0.04}>
                    <div className="h-full border border-border bg-background hover:border-foreground/30 transition-colors overflow-hidden flex flex-col group/card">
                      <div className="aspect-[4/3] bg-accent/40 overflow-hidden relative">
                        <img
                          src={currentImages[currentIndex] || `https://images.unsplash.com/photo-${
                            [
                              '1529070538774-1843cb3265df',
                              '1511632765486-a01980e01a18',
                              '1573497019940-1c28c88b4f3e',
                              '1507692049790-de58290a4334',
                              '1510915361894-db8b60106cb1',
                              '1529390079861-591de354faf5',
                              '1532635241-17e820acc59f',
                            ][index % 7]
                          }?auto=format&fit=crop&w=800&q=70`}
                          alt={m.title}
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
                      <div className="p-6 space-y-2 flex-1">
                        {m.schedule && (
                          <p className="text-xs uppercase tracking-widest text-muted-foreground font-light">
                            {m.schedule}
                          </p>
                        )}
                        <h3 className="text-lg sm:text-xl font-light tracking-wide">{m.title}</h3>
                        <p className="text-sm font-light leading-relaxed text-muted-foreground">
                          {m.description}
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
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-8 sm:mb-12 space-y-3">
                <MapPin className="size-8 mx-auto text-muted-foreground" strokeWidth={1.2} />
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  Te așteptăm
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
                  Vino să ne vizitezi
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="h-[320px] sm:h-[420px] md:h-[500px] border border-border bg-background">
                <MapEmbed className="h-full" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Donație CTA */}
        <section className="py-16 sm:py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <Heart className="size-12 mx-auto mb-4 text-red-500 fill-red-500" strokeWidth={1.2} />
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-light tracking-wide mb-6">
                Susține lucrarea lui Dumnezeu
              </h2>
              <p className="text-lg sm:text-xl font-light leading-relaxed opacity-80 max-w-2xl mx-auto mb-10">
                Prin dărnicia noastră participăm la răspândirea Evangheliei și la dezvoltarea
                lucrării cu copiii, tinerii și familiile.
              </p>
              <Link
                to="/donatii"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-light tracking-wide hover:bg-background/90 transition-colors"
              >
                Vreau să dăruiesc
                <ArrowRight className="size-4" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}

import { cn } from '@/lib/utils';
