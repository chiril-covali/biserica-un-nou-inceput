import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo/SEOHead';
import { photographerInfo } from '@/data/photographer';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('nav.about')}
        description={t('about.pastor_subtitle')}
      />

      <div className="min-h-screen pt-20">
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                className="space-y-8 sticky top-32"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[4/5] bg-accent/5 border border-border rounded-sm overflow-hidden relative group">
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
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">{t('about.pastor_greeting')}</p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">{t('about.pastor_welcome_1')}<span className="font-bold text-foreground">{t('about.pastor_welcome_2')}</span></p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">{t('about.pastor_text_1')}</p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">{t('about.pastor_text_2')}</p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">{t('about.pastor_text_3')}</p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">{t('about.pastor_closing')}</p>

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
