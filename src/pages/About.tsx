import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { photographerInfo } from '@/data/photographer';
import { teamMembers } from '@/data/team';
import { ministries, TranslatedString } from '@/data/church';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function About() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as 'ro' | 'en' | 'ru') || 'ro';
  const [activeGallery, setActiveGallery] = useState<Record<string, number>>({});

  const handleNextImage = (id: string, max: number) => {
    setActiveGallery(prev => ({ ...prev, [id]: ((prev[id] || 0) + 1) % max }));
  };
  const handlePrevImage = (id: string, max: number) => {
    setActiveGallery(prev => ({ ...prev, [id]: ((prev[id] || 0) - 1 + max) % max }));
  };

  return (
    <>
      <SEOHead
        title={t('about.title')}
        description={t('about.pastor_word')}
        image={photographerInfo.portraitImage}
      />

      <div className="min-h-screen">
        {/* Page Header */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-[#0a2240] border-b border-white/8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-sky-400 font-bold mb-4">
                {t('nav.about')}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-white mb-4">
                {t('about.pastor_word')}
              </h1>
              <p className="text-lg md:text-xl text-white/50 font-normal tracking-wide">
                {t('about.pastor_subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pastor Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#071a2f]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-white/5 border border-white/8">
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
                      className="p-3 rounded-xl bg-white/[0.04] border border-white/8 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
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
                      className="p-3 rounded-xl bg-white/[0.04] border border-white/8 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
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
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white">
                    Vitalie Fedula
                  </h2>
                </div>

                <div className="h-px bg-white/10" />

                <div className="space-y-4">
                  <p className="text-lg font-normal leading-relaxed text-white/55">
                    {t('about.pastor_greeting')}
                  </p>
                  <p className="text-lg font-normal leading-relaxed text-white/55">
                    {t('about.pastor_welcome_1')}
                    <span className="font-bold text-white">{t('about.pastor_welcome_2')}</span>
                  </p>
                  <p className="text-lg font-normal leading-relaxed text-white/55">
                    {t('about.pastor_text_1')}
                  </p>
                  <p className="text-lg font-normal leading-relaxed text-white/55">
                    {t('about.pastor_text_2')}
                  </p>
                  <p className="text-lg font-normal leading-relaxed text-white/55">
                    {t('about.pastor_text_3')}
                  </p>
                  <p className="text-lg font-normal leading-relaxed text-white/55">
                    {t('about.pastor_closing')}
                  </p>
                  
                  <div className="pt-4">
                    <p className="text-lg font-normal leading-relaxed text-white/55 italic">
                      {t('about.pastor_signoff')}
                    </p>
                    <p className="text-lg font-bold text-white mt-1">
                      Vitalie Fedula
                    </p>
                    <p className="text-base font-medium text-white/50">
                      {t('about.pastor_role')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Slujire și Comunitate */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a2240] border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 sm:mb-20 space-y-4">
                <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-sky-400 font-bold">
                  {currentLang === 'ro' ? 'Slujire și Comunitate' : currentLang === 'ru' ? 'Служение и Общность' : 'Ministry & Community'}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                  {currentLang === 'ro' ? 'Lucrările noastre' : currentLang === 'ru' ? 'Наши служения' : 'Our ministries'}
                </h2>
                <p className="text-base sm:text-lg text-white/45 font-light max-w-2xl mx-auto pt-1">
                  {currentLang === 'ro' ? 'Locuri în care poți crește, sluji și fi parte din familia bisericii.' : currentLang === 'ru' ? 'Места, где ты можешь расти, служить и стать частью семьи церкви.' : 'Places where you can grow, serve, and be part of the church family.'}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministries.map((m, index) => {
                const currentImages = m.images || [m.image];
                const currentIndex = activeGallery[m.id] || 0;
                return (
                  <ScrollReveal key={m.id} delay={index * 0.06}>
                    <div className="h-full bg-white/[0.04] border border-white/8 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-500 overflow-hidden flex flex-col group/card rounded-2xl">
                      <div className="aspect-video bg-white/5 overflow-hidden relative">
                        <img
                          src={currentImages[currentIndex]}
                          alt={m.title[currentLang as keyof TranslatedString]}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                        />
                        {currentImages.length > 1 && (
                          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                            <button onClick={() => handlePrevImage(m.id, currentImages.length)} className="p-1.5 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white transition-colors shadow">
                              <ChevronLeft className="size-4" />
                            </button>
                            <button onClick={() => handleNextImage(m.id, currentImages.length)} className="p-1.5 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white transition-colors shadow">
                              <ChevronLeft className="size-4 rotate-180" />
                            </button>
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                              {currentImages.map((_, i) => (
                                <div key={i} className={cn('size-1.5 rounded-full transition-all', i === currentIndex ? 'bg-white w-3' : 'bg-white/50')} />
                              ))}
                            </div>
                          </div>
                        )}
                        {m.link && (
                          <a href={m.link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full hover:bg-black/60 text-white transition-colors shadow">
                            <Instagram className="size-4" />
                          </a>
                        )}
                      </div>
                      <div className="p-7 space-y-3 flex-1 flex flex-col text-left">
                        {m.schedule && (
                          <p className="text-[10px] uppercase tracking-[0.2em] text-sky-400 font-bold">
                            {m.schedule[currentLang as keyof TranslatedString]}
                          </p>
                        )}
                        <h3 className="text-xl font-extrabold tracking-tight text-white leading-tight">
                          {m.title[currentLang as keyof TranslatedString]}
                        </h3>
                        <p className="text-base font-normal leading-relaxed text-white/45 flex-1">
                          {m.description[currentLang as keyof TranslatedString]}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Echipa de slujire Section */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-[#071a2f] border-t border-white/8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-sky-400 font-bold">
                {t('about.team_title')}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-white">
                {t('about.team_title')}
              </h2>
              <p className="text-lg text-white/50 font-normal leading-relaxed">
                {t('about.team_description')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0.8, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col h-full bg-white/[0.04] border border-white/8 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-500 rounded-2xl overflow-hidden"
                >
                  {/* Photo Container */}
                  <div className="aspect-[3/4] w-full overflow-hidden bg-white/5 relative">
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
                            className="p-3 bg-white/90 text-[#071a2f] hover:bg-white rounded-full transition-colors duration-300 shadow-md"
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
                            className="p-3 bg-white/90 text-[#071a2f] hover:bg-white rounded-full transition-colors duration-300 shadow-md"
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
                      <p className="text-[10px] tracking-[0.2em] uppercase text-sky-400 font-bold">
                        {t(member.roleKey)}
                      </p>
                      {member.name && (
                        <h3 className="text-xl font-semibold tracking-wide text-white">
                          {member.name}
                        </h3>
                      )}
                      {t(member.detailsKey) && (
                        <p className="text-base font-normal leading-relaxed text-white/50">
                          {t(member.detailsKey)}
                        </p>
                      )}
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
