import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead
        title="Despre"
        description="Cuvântul păstorului Vitalie Fedula către Biserica Un Nou Început — o invitație la o viață transformată prin Evanghelie."
        image={photographerInfo.portraitImage}
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
                Despre noi
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Cuvântul păstorului
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Un mesaj de bun venit din partea pastorului Vitalie Fedula
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
                  <img
                    src={photographerInfo.portraitImage}
                    alt="Biserica Un Nou Început"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-4">
                  {photographerInfo.pastorSocialLinks?.facebook && (
                    <a
                      href={photographerInfo.pastorSocialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="size-5" />
                    </a>
                  )}
                  {photographerInfo.pastorSocialLinks?.instagram && (
                    <a
                      href={photographerInfo.pastorSocialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Vitalie Fedula
                  </h2>
                </div>

                <Separator />

                <div className="space-y-4">
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    Drag prieten,
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    Bine ai venit la <span className="font-bold text-foreground">Biserica UN NOU ÎNCEPUT!</span>
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    Te invităm să fii parte dintr-o comunitate de oameni care Îl iubesc pe Dumnezeu, sunt ancorați în Cuvântul Său și doresc să-L urmeze cu credincioșie pe Domnul Isus Hristos.
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    Aici este locul unde credința prinde viață, oamenii găsesc speranță, relațiile sunt zidite pe dragostea lui Hristos, iar Dumnezeu este glorificat în tot ceea ce facem. Ne dorim să creștem împreună în credință, să ne slujim unii pe alții cu dragoste și să fim o lumină pentru comunitatea noastră.
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    Indiferent de trecutul tău sau de etapa în care te afli, te încurajez să faci un pas spre Dumnezeu și să descoperi împreună cu noi bucuria unei vieți transformate prin Evanghelie. Cu ajutorul lui Dumnezeu, fiecare zi poate fi un nou început.
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    Te așteptăm cu drag!
                  </p>
                  <div className="pt-4">
                    <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground italic">
                      Cu dragoste în Hristos,
                    </p>
                    <p className="text-lg font-bold text-foreground mt-1">
                      Vitalie Fedula
                    </p>
                    <p className="text-base font-medium text-muted-foreground">
                      Pastor — Biserica UN NOU ÎNCEPUT
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
