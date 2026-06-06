import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function About() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as 'ro' | 'en' | 'ru') || 'ro';

  return (
    <>
      <SEOHead
        title={t('about.title')}
        description={t('about.pastor_word')}
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
                {t('nav.about')}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                {t('about.pastor_word')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                {t('about.pastor_subtitle')}
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
                    {t('about.pastor_greeting')}
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    {t('about.pastor_welcome_1')}
                    <span className="font-bold text-foreground">{t('about.pastor_welcome_2')}</span>
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    {t('about.pastor_text_1')}
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    {t('about.pastor_text_2')}
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    {t('about.pastor_text_3')}
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    {t('about.pastor_closing')}
                  </p>
                  
                  <div className="pt-4">
                    <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground italic">
                      {t('about.pastor_signoff')}
                    </p>
                    <p className="text-lg font-bold text-foreground mt-1">
                      Vitalie Fedula
                    </p>
                    <p className="text-base font-medium text-muted-foreground">
                      {t('about.pastor_role')}
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
