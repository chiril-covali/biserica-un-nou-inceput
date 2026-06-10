import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { photographerInfo } from '@/data/photographer';
import { teamMembers } from '@/data/team';
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
                    alt="Biserica UN NOU ÎNCEPUT"
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

        {/* Echipa de slujire Section */}
        <section className="py-20 md:py-28 px-6 lg:px-8 border-t border-border bg-slate-50/50 dark:bg-zinc-900/30 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                {t('about.team_title')}
              </p>
              <h2 className="text-3xl md:text-5xl font-light tracking-wide text-foreground">
                {t('about.team_title')}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                {t('about.team_description')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0.8, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col h-full border border-border bg-background hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 rounded-xl overflow-hidden"
                >
                  {/* Photo Container */}
                  <div className="aspect-[3/4] w-full overflow-hidden bg-muted relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Social Overlay on Hover */}
                    {member.socialLinks && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        {member.socialLinks.facebook && member.socialLinks.facebook !== '#' && (
                          <a
                            href={member.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground rounded-full transition-colors duration-300 shadow-md"
                            aria-label="Facebook"
                          >
                            <Facebook className="size-5" />
                          </a>
                        )}
                        {member.socialLinks.instagram && member.socialLinks.instagram !== '#' && (
                          <a
                            href={member.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground rounded-full transition-colors duration-300 shadow-md"
                            aria-label="Instagram"
                          >
                            <Instagram className="size-5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Info Container */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-primary font-bold">
                        {t(member.roleKey)}
                      </p>
                      <h3 className="text-xl font-light tracking-wide text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {t(member.detailsKey)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
