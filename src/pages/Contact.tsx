import { motion } from 'framer-motion';
import { Mail, Facebook, Instagram, HandHeart, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { photographerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { SEOHead } from '@/components/seo/SEOHead';
import { MapEmbed } from '@/components/MapEmbed';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('contact.title')}
        description={t('contact.description')}
      />

      <div className="min-h-screen">
        {/* Page Header */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-[#0a2240] border-b border-white/8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-sky-400 font-bold mb-3">
                {t('contact.subtitle')}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-white mb-4">
                {t('contact.title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/50 font-normal tracking-wide">
                {t('contact.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Highlighted Prayer Request Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#071a2f]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white/[0.04] border border-white/8 p-8 md:p-10"
            >
              <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-8 items-center">
                <div className="flex md:block justify-center">
                  <div className="size-16 md:size-20 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-sky-300">
                    <HandHeart className="size-8 md:size-10" strokeWidth={1.2} />
                  </div>
                </div>
                <div className="space-y-3 text-center md:text-left">
                  <p className="text-xs tracking-[0.3em] uppercase text-sky-400 font-bold">
                    {t('common.phone') === 'Phone' ? 'IN DIFFICULTY?' : t('common.phone') === 'Телефон' ? 'В ТРУДНОСТИ?' : 'EȘTI ÎN DIFICULTATE?'}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">
                    {t('contact.prayer_request_title')}
                  </h2>
                  <p className="text-lg font-normal leading-relaxed text-white/55">
                    {t('contact.prayer_request_desc')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a2240]">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">
                    {t('contact.form_title')}
                  </h2>
                  <p className="text-sm sm:text-base text-white/50 font-normal">
                    {t('contact.form_subtitle')}
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">
                    {t('contact.info_title')}
                  </h2>
                </div>

                <div className="h-px bg-white/10" />

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/8 shrink-0">
                      <Phone className="size-5 text-sky-300" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">{t('common.phone')}</p>
                      <a
                        href={`tel:${photographerInfo.phone}`}
                        className="text-base font-normal text-white/70 hover:text-white transition-colors"
                      >
                        {photographerInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/8 shrink-0">
                      <Mail className="size-5 text-sky-300" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">{t('common.email')}</p>
                      <a
                        href={`mailto:${photographerInfo.email}`}
                        className="text-base font-normal text-white/70 hover:text-white transition-colors break-all"
                      >
                        {photographerInfo.email}
                      </a>
                    </div>
                  </div>

                  {photographerInfo.socialLinks.facebook && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/8 shrink-0">
                        <Facebook className="size-5 text-sky-300" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">
                          {t('common.facebook')}
                        </p>
                        <a
                          href={photographerInfo.socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-normal text-white/70 hover:text-white transition-colors"
                        >
                          Biserica UN NOU ÎNCEPUT
                        </a>
                      </div>
                    </div>
                  )}

                  {photographerInfo.socialLinks.instagram && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/8 shrink-0">
                        <Instagram className="size-5 text-sky-300" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">
                          {t('common.instagram')}
                        </p>
                        <a
                          href={photographerInfo.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-normal text-white/70 hover:text-white transition-colors"
                        >
                          @biserica.unnouinceput
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#0a2240]">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="size-5" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white">{t('contact.find_us')}</h2>
            </div>
            <div className="h-[320px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/30">
              <MapEmbed className="h-full" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
