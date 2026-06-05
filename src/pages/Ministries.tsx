import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ministries, churchValues } from '@/data/church';

export default function Ministries() {
  return (
    <>
      <SEOHead
        title="Lucrări"
        description="Slujirile Bisericii Un Nou Început — locuri în care poți crește în credință, sluji și fi parte din familia bisericii."
      />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-4">
                Implică-te
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Slujirile noastre
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                Locuri în care poți crește în credință, sluji pe alții și fi parte din familia
                bisericii.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {ministries.map((m, index) => (
              <ScrollReveal key={m.id} delay={index * 0.05}>
                <div className="h-full p-8 md:p-10 border border-border hover:border-foreground/30 transition-colors space-y-4 bg-background">
                  {m.schedule && (
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-light">
                      {m.schedule}
                    </p>
                  )}
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide">{m.title}</h3>
                  <p className="text-base font-light leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                  Valorile noastre
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  Ce ne ghidează în tot ceea ce facem
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {churchValues.map((value, index) => (
                <ScrollReveal key={value.id} delay={index * 0.1}>
                  <div className="space-y-4 text-center md:text-left">
                    <div className="text-5xl font-extralight text-muted-foreground">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-light tracking-wide">{value.title}</h3>
                    <p className="text-base font-light leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
