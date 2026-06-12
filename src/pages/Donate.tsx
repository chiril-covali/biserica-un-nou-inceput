import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, HandHeart, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Donate() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0] || 'ro';

  return (
    <>
      <SEOHead
        title={t('nav.donate')}
        description={t('nav.donate')}
      />

      <div className="min-h-screen">
        {/* Page Header */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-gradient-to-b from-[#F3EFF5] to-[#FAF8F5] border-b border-slate-200/60">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Heart className="size-12 mx-auto mb-6 text-red-500 fill-red-100" strokeWidth={1.2} />
              <p className="text-xs tracking-[0.3em] uppercase text-sky-600 font-bold mb-4">
                {t('donate.subtitle')}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-[#0F1E36] mb-8">
                {t('donate.title')}
              </h1>
              <p className="text-lg md:text-xl text-slate-500 font-normal leading-[1.8] max-w-2xl mx-auto">
                {t('donate.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#FAF5EC]">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Scripture quote */}
            <ScrollReveal>
              <blockquote className="border-l-2 border-amber-400 pl-6 md:pl-8 py-2">
                <p className="text-xl md:text-2xl font-normal leading-relaxed italic text-slate-800">
                  {t('donate.verse')}
                </p>
                <footer className="mt-4 text-sm font-normal tracking-wide text-slate-500">
                  — {t('donate.verse_ref')}
                </footer>
              </blockquote>
            </ScrollReveal>

            {/* Descriptive text */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-lg font-normal leading-relaxed text-slate-600">
                <p>{t('donate.text_1')}</p>
                <p>{t('donate.text_2')}</p>
              </div>
            </ScrollReveal>

            {/* Impact cards */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <ScrollReveal delay={0.15}>
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 h-full hover:shadow-md hover:border-slate-300 transition-all duration-500">
                  <HandHeart className="size-7 text-sky-600" strokeWidth={1.2} />
                  <h3 className="text-lg font-semibold tracking-wide text-[#0F1E36]">{t('donate.mission_title')}</h3>
                  <p className="text-base font-normal leading-relaxed text-slate-500">
                    {t('donate.mission_desc')}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 h-full hover:shadow-md hover:border-slate-300 transition-all duration-500">
                  <Users className="size-7 text-sky-600" strokeWidth={1.2} />
                  <h3 className="text-lg font-semibold tracking-wide text-[#0F1E36]">{t('donate.youth_title')}</h3>
                  <p className="text-base font-normal leading-relaxed text-slate-500">
                    {t('donate.youth_desc')}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 h-full hover:shadow-md hover:border-slate-300 transition-all duration-500">
                  <Heart className="size-7 text-sky-600" strokeWidth={1.2} />
                  <h3 className="text-lg font-semibold tracking-wide text-[#0F1E36]">{t('donate.social_title')}</h3>
                  <p className="text-base font-normal leading-relaxed text-slate-500">
                    {t('donate.social_desc')}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Bank Transfer Card */}
            <ScrollReveal delay={0.28}>
              <div className="max-w-xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-md p-8 space-y-6 mt-12">
                <div className="space-y-2 text-center">
                  <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">
                    {currentLang === 'ro' ? 'Transfer Bancar' : currentLang === 'ru' ? 'Банковский Перевод' : 'Bank Transfer'}
                  </span>
                  <h4 className="text-2xl font-extrabold text-[#0F1E36] tracking-tight">
                    {currentLang === 'ro' ? 'Detalii Cont' : currentLang === 'ru' ? 'Реквизиты' : 'Account Details'}
                  </h4>
                </div>
                <div className="space-y-4 text-sm font-light text-slate-500">
                  <p className="font-semibold text-slate-800 text-center">BC „Moldova Agroindbank" S.A.</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">IBAN MDL</p>
                      <p className="font-mono text-xs md:text-sm font-bold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200 break-all select-all text-center">
                        MD24AG0000002254128XXX
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">IBAN EUR</p>
                      <p className="font-mono text-xs md:text-sm font-bold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200 break-all select-all text-center">
                        MD24AG0000002254128EURX
                      </p>
                    </div>
                  </div>
                  <p className="text-xs italic text-center pt-2 text-slate-400">
                    {currentLang === 'ro' 
                      ? 'Cod Fiscal (CUI): 25846669 — Asociația Religioasă Biserica UN NOU ÎNCEPUT' 
                      : 'Fiscal Code (CUI): 25846669 — UN NOU ÎNCEPUT Religious Association'}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.3}>
              <div className="mt-12 p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-center">
                <h3 className="text-2xl font-bold tracking-wide text-[#0F1E36]">{t('donate.how_title')}</h3>
                <p className="text-lg font-normal leading-relaxed text-slate-500 max-w-2xl mx-auto">
                  {t('donate.how_desc')}
                </p>
                <Link
                  to={`/${currentLang}/contact`}
                  className="inline-flex items-center gap-2 mt-4 px-8 py-3.5 bg-[#0F1E36] text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-md shadow-slate-200/50 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-xs uppercase tracking-wider duration-300"
                >
                  {t('nav.contact')}
                  <ArrowRight className="size-4" />
                </Link>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-base font-normal text-slate-400 tracking-wide">
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
