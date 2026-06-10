import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, HandHeart, Users } from 'lucide-react';
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
        <section className="py-20 md:py-28 px-6 lg:px-8 border-b border-border bg-accent/5">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Heart className="size-12 mx-auto mb-6 text-red-500 fill-red-500/10" strokeWidth={1.2} />
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-semibold mb-4">
                {t('donate.subtitle')}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-8">
                {t('donate.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-normal leading-[1.8] max-w-2xl mx-auto">
                {t('donate.description')}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal>
              <blockquote className="border-l-2 border-foreground/30 pl-6 md:pl-8 py-2">
                <p className="text-xl md:text-2xl font-normal leading-relaxed italic text-foreground">
                   {t('donate.verse')}
                </p>
                <footer className="mt-4 text-sm font-normal tracking-wide text-muted-foreground">
                  — {t('donate.verse_ref')}
                </footer>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-lg font-normal leading-relaxed text-muted-foreground">
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
                  <h3 className="text-lg font-semibold tracking-wide">{t('donate.mission_title')}</h3>
                  <p className="text-base font-normal leading-relaxed text-muted-foreground">
                    {t('donate.mission_desc')}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <Users className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-semibold tracking-wide">{t('donate.youth_title')}</h3>
                  <p className="text-base font-normal leading-relaxed text-muted-foreground">
                    {t('donate.youth_desc')}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <Heart className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-semibold tracking-wide">{t('donate.social_title')}</h3>
                  <p className="text-base font-normal leading-relaxed text-muted-foreground">
                    {t('donate.social_desc')}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Card Transfer Bancar pe pagina de Donații */}
            <ScrollReveal delay={0.28}>
              <div className="max-w-xl mx-auto border border-border bg-card text-card-foreground p-8 rounded-3xl shadow-xl space-y-6 mt-12">
                <div className="space-y-2 text-center">
                  <span className="text-xs font-bold text-[#1872B9] tracking-widest uppercase">
                    {currentLang === 'ro' ? 'Transfer Bancar' : currentLang === 'ru' ? 'Банковский Перевод' : 'Bank Transfer'}
                  </span>
                  <h4 className="text-2xl font-extrabold text-[#104E8B] tracking-tight">
                    {currentLang === 'ro' ? 'Detalii Cont' : currentLang === 'ru' ? 'Реквизиты' : 'Account Details'}
                  </h4>
                </div>
                <div className="space-y-4 text-sm font-light text-muted-foreground">
                  <p className="font-semibold text-foreground text-center">BC „Moldova Agroindbank” S.A.</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">IBAN MDL</p>
                      <p className="font-mono text-xs md:text-sm font-bold text-[#104E8B] bg-accent/60 p-2.5 rounded-xl border border-border break-all select-all text-center">
                        MD24AG0000002254128XXX
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">IBAN EUR</p>
                      <p className="font-mono text-xs md:text-sm font-bold text-[#104E8B] bg-accent/60 p-2.5 rounded-xl border border-border break-all select-all text-center">
                        MD24AG0000002254128EURX
                      </p>
                    </div>
                  </div>
                  <p className="text-xs italic text-center pt-2">
                    {currentLang === 'ro' 
                      ? 'Cod Fiscal (CUI): 25846669 — Asociația Religioasă Biserica UN NOU ÎNCEPUT' 
                      : 'Fiscal Code (CUI): 25846669 — UN NOU ÎNCEPUT Religious Association'}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 p-8 md:p-10 bg-accent/40 border border-border space-y-4 text-center rounded-3xl shadow-md">
                <h3 className="text-2xl font-bold tracking-wide">{t('donate.how_title')}</h3>
                <p className="text-lg font-normal leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  {t('donate.how_desc')}
                </p>
                <Link
                  to={`/${currentLang}/contact`}
                  className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-[#1872B9] text-white font-bold rounded-full hover:bg-[#104E8B] transition-all shadow-lg shadow-[#1872B9]/30 hover:shadow-xl hover:shadow-[#1872B9]/50 hover:-translate-y-0.5 active:scale-95 text-xs uppercase tracking-wider duration-300"
                >
                  {t('nav.contact')}
                </Link>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-base font-normal text-muted-foreground tracking-wide">
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

