import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, HandHeart, Users } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Donate() {
  return (
    <>
      <SEOHead
        title="Donații"
        description="Susține lucrarea Bisericii Un Nou Început — răspândirea Evangheliei, lucrarea cu copiii, tinerii, familiile și proiectele misionare."
      />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Heart className="size-12 mx-auto mb-6 text-red-400 fill-red-50" strokeWidth={1.2} />
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-4">
                Poți dărui
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Susține lucrarea lui Dumnezeu
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                Prin dărnicia noastră participăm la răspândirea Evangheliei și la slujirea
                semenilor noștri.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal>
              <blockquote className="border-l-2 border-foreground/30 pl-6 md:pl-8 py-2">
                <p className="text-xl md:text-2xl font-light leading-relaxed italic text-foreground">
                  „Pe fiecare să-l lase inima să dea cum a hotărât, nu cu părere de rău sau de
                  silă, căci Dumnezeu iubește pe cine dă cu bucurie."
                </p>
                <footer className="mt-4 text-sm font-light tracking-wide text-muted-foreground">
                  — 2 Corinteni 9:7
                </footer>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                <p>
                  Prin dărnicia noastră participăm la răspândirea Evangheliei, la dezvoltarea
                  lucrării cu copiii, tinerii și familiile, precum și la susținerea proiectelor
                  misionare și sociale ale bisericii.
                </p>
                <p>
                  Mulțumim pentru inima ta darnică și pentru parteneriatul tău în lucrarea
                  Domnului. Fiecare dar, mic sau mare, contribuie la creșterea Împărăției lui
                  Dumnezeu.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <ScrollReveal delay={0.15}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <HandHeart className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-light tracking-wide">Răspândirea Evangheliei</h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    Susții vestirea Cuvântului în comunitate și online.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <Users className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-light tracking-wide">Lucrarea cu copiii și tinerii</h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    Contribui la formarea generației următoare.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <Heart className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-light tracking-wide">Misiune și proiecte sociale</h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    Ajuți la susținerea celor în nevoi și a misionarilor.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 p-8 md:p-10 bg-accent/40 border border-border space-y-4 text-center">
                <h3 className="text-2xl font-light tracking-wide">Cum poți dărui</h3>
                <p className="text-base font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  Pentru detalii bancare sau alte modalități de a contribui, te rugăm să ne
                  contactezi direct. Vom fi bucuroși să-ți răspundem.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-foreground text-background font-light tracking-wide hover:bg-foreground/90 transition-colors"
                >
                  Contactează-ne
                </Link>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm font-light text-muted-foreground tracking-wide">
                    În curând va fi posibil să donezi și direct online prin card bancar.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
