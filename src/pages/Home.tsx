import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { churchValues, ministries } from '@/data/church';

export default function Home() {
  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1920&q=80"
              alt="Comunitate la închinare"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.p
                className="text-sm md:text-base tracking-[0.4em] text-white/80 font-light uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                Biserica
              </motion.p>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                UN NOU ÎNCEPUT
              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl font-light tracking-wide text-white/90 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Glorificăm pe Isus. Suntem transformați prin Cuvânt. Slujim prin puterea Duhului Sfânt.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center pt-4"
              >
                <Link
                  to="/despre"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/60 text-white font-light tracking-wide hover:bg-white hover:text-foreground transition-colors"
                >
                  Cuvântul păstorului
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/lucrari"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground font-light tracking-wide hover:bg-white/90 transition-colors"
                >
                  Slujirile noastre
                  <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* Bun venit */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                Bine ai venit
              </p>
              <h2 className="text-3xl md:text-5xl font-light tracking-wide mt-4">
                O comunitate transformată de Isus Hristos
              </h2>
              <div className="space-y-5 text-lg font-light leading-relaxed text-muted-foreground mt-8">
                <p>
                  O comunitate de oameni transformați de Isus Hristos, ancorați în Cuvântul lui Dumnezeu
                  și împuterniciți de Duhul Sfânt.
                </p>
                <p>
                  Ne dorim să-L glorificăm pe Domnul Isus în tot ceea ce facem, să fim transformați zilnic
                  prin adevărul Scripturii și să slujim lui Dumnezeu și semenilor noștri prin puterea
                  Duhului Sfânt.
                </p>
                <p>
                  Indiferent unde te afli în călătoria ta spirituală, te invităm să descoperi împreună cu
                  noi bucuria unei vieți trăite pentru Hristos.
                </p>
              </div>
              <Link
                to="/despre"
                className="inline-flex items-center gap-2 mt-8 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
              >
                <span>Citește cuvântul păstorului</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Valori */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  Valorile noastre
                </p>
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">Pe ce zidim</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {churchValues.map((value, index) => (
                <ScrollReveal key={value.id} delay={index * 0.1}>
                  <div className="space-y-4 text-center md:text-left">
                    <div className="text-5xl font-extralight text-muted-foreground">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-light tracking-wide">{value.title}</h3>
                    <p className="text-base font-light leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Slujiri preview */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  Implică-te
                </p>
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                  Slujirile noastre
                </h2>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                  Locuri în care poți crește, sluji și fi parte din familia bisericii.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministries.slice(0, 6).map((m, index) => (
                <ScrollReveal key={m.id} delay={index * 0.05}>
                  <div className="h-full p-8 border border-border bg-background hover:border-foreground/30 transition-colors space-y-3">
                    {m.schedule && (
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-light">
                        {m.schedule}
                      </p>
                    )}
                    <h3 className="text-xl font-light tracking-wide">{m.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground line-clamp-4">
                      {m.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="flex justify-center mt-12">
                <Link
                  to="/lucrari"
                  className="group inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
                >
                  <span>Vezi toate slujirile</span>
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Donație CTA */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <Heart className="size-10 mx-auto mb-2 opacity-80" strokeWidth={1.2} />
              <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                Susține lucrarea lui Dumnezeu
              </h2>
              <p className="text-lg font-light leading-relaxed opacity-80 max-w-2xl mx-auto">
                Prin dărnicia noastră participăm la răspândirea Evangheliei, la dezvoltarea lucrării
                cu copiii, tinerii și familiile, precum și la susținerea proiectelor misionare și
                sociale ale bisericii.
              </p>
              <Link
                to="/donatii"
                className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-background text-foreground font-light tracking-wide hover:bg-background/90 transition-colors"
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
