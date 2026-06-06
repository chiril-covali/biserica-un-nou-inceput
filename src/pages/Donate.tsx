import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, HandHeart, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Donate() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('nav.donate')}
        description={t('nav.donate')}
      />

      <div className="min-h-screen">
        <section className="py-20 md:py-28 px-6 lg:px-8 border-b border-border bg-accent/5">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Heart className="size-12 mx-auto mb-6 text-red-500 fill-red-500/10" strokeWidth={1.2} />
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-4">
                {t('donate.subtitle')}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-8">
                {t('donate.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-[1.8] max-w-2xl mx-auto">
                {t('donate.description')}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal>
              <blockquote className="border-l-2 border-foreground/30 pl-6 md:pl-8 py-2">
                <p className="text-xl md:text-2xl font-light leading-relaxed italic text-foreground">
                   {t('donate.verse')}
                </p>
                <footer className="mt-4 text-sm font-light tracking-wide text-muted-foreground">
                  — {t('donate.verse_ref')}
                </footer>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                <p>
                  {t('donate.text_1')}
                </p>
                <p>
                  {t('donate.text_2')}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <ScrollReveal delay={0.15}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <HandHeart className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-light tracking-wide">{t('donate.mission_title')}</h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {t('donate.mission_desc')}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <Users className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-light tracking-wide">{t('donate.youth_title')}</h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {t('donate.youth_desc')}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <Heart className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-light tracking-wide">{t('donate.social_title')}</h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {t('donate.social_desc')}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 p-8 md:p-10 bg-accent/40 border border-border space-y-4 text-center">
                <h3 className="text-2xl font-light tracking-wide">{t('donate.how_title')}</h3>
                <p className="text-base font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  {t('donate.how_desc')}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-foreground text-background font-light tracking-wide hover:bg-foreground/90 transition-colors"
                >
                  {t('nav.contact')}
                </Link>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm font-light text-muted-foreground tracking-wide">
                    {t('donate.online_soon')}
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
