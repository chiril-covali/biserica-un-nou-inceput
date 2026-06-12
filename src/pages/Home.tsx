import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Book, Flame, Clock, Users, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { MapEmbed } from '@/components/MapEmbed';
import { UnderwaterEffect } from '@/components/ui/UnderwaterEffect';
import { churchValues, TranslatedString } from '@/data/church';
import { format, nextDay, startOfToday } from 'date-fns';
import { ro, enUS, ru } from 'date-fns/locale';


const ThinCross = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3v18M8 9h8" />
  </svg>
);

export default function Home() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as 'ro' | 'en' | 'ru') || 'ro';
  
  const today = startOfToday();
  
  const getNextServiceDate = (dayIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
    const next = nextDay(today, dayIndex);
    const locales = { ro, en: enUS, ru };
    const locale = locales[currentLang as keyof typeof locales] || ro;
    return format(next, 'd MMMM', { locale });
  };

  const nextSunday = getNextServiceDate(0);
  const nextWednesday = getNextServiceDate(3);
  const nextSaturday = getNextServiceDate(6);

  const valueIcons = [
    <ThinCross className="size-8" />,
    <Book className="size-8" strokeWidth={1.5} />,
    <Flame className="size-8" strokeWidth={1.5} />,
  ];

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* Hero — KEPT AS-IS */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[100svh] w-full overflow-hidden">
          <UnderwaterEffect />

          <div className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 py-24">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className="text-lg sm:text-xl md:text-2xl tracking-[0.4em] sm:tracking-[0.5em] text-white/90 font-bold uppercase">
                {t('home.hero.subtitle')}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase leading-none">
                {t('home.hero.title')}
              </h1>
              <div className="space-y-2">
                <p className="text-lg sm:text-xl md:text-2xl font-normal tracking-wide text-white/95 max-w-3xl mx-auto leading-relaxed">
                  {t('home.hero.description')}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* Program / Schedule */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 bg-[#FAF9F6] overflow-hidden">
          {/* Subtle dot texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0)', backgroundSize: '24px 24px' }} />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20 space-y-6">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-100 border border-slate-200">
                  <Clock className="size-4 text-sky-600" strokeWidth={1.5} />
                  <span className="text-xs tracking-[0.3em] uppercase text-sky-600 font-bold">
                    {t('home.program.subtitle')}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0F1E36] leading-[0.95]">
                  {currentLang === 'ro' ? <>Un loc pentru tine<br />și familia ta!</> : currentLang === 'ru' ? <>Место для вас<br />и вашей семьи!</> : <>A place for you<br />and your family!</>}
                </h2>
                <p className="text-lg text-slate-500 font-normal max-w-xl mx-auto">
                  {t('home.program.title')}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  day: t('home.program.sunday'),
                  date: nextSunday,
                  time: t('home.program.sunday_time'),
                  title: t('home.program.sunday_event'),
                  subtitle: currentLang === 'ro' ? 'Închinare și Cuvânt' : currentLang === 'ru' ? 'Поклонение и Слово' : 'Worship and Word',
                  image: '/poze/intampin.JPG-optimized.webp',
                },
                {
                  day: t('home.program.youth'),
                  date: nextWednesday,
                  time: t('home.program.youth_time'),
                  title: t('home.program.youth_event'),
                  subtitle: currentLang === 'ro' ? 'Părtășie și creștere' : currentLang === 'ru' ? 'Общение и рост' : 'Fellowship and growth',
                  image: '/poze/copii3.JPG-optimized.webp',
                },
                {
                  day: t('home.program.men'),
                  date: nextSaturday,
                  time: t('home.program.men_time'),
                  title: t('home.program.men_event'),
                  subtitle: currentLang === 'ro' ? 'Rugăciune Bărbați' : currentLang === 'ru' ? 'Мужская молитва' : "Men's Prayer",
                  image: '/poze/pastor1-optimized.webp',
                },
              ].map((item, index) => (
                <ScrollReveal key={item.day} delay={index * 0.12}>
                  <div className="relative rounded-2xl overflow-hidden h-[440px] group cursor-default shadow-xl border border-slate-200/50">
                    {/* Background image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                    {/* Top badge */}
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1.5 rounded-full bg-white/95 text-[#0F1E36] text-[10px] font-bold uppercase tracking-[0.15em] shadow-sm backdrop-blur-sm">
                        {item.date}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-7 space-y-3">
                      <h3 className="text-[11px] font-black tracking-[0.35em] text-amber-400 font-bold uppercase">
                        {item.day}
                      </h3>
                      <p className="text-4xl font-light tracking-tighter text-white leading-none">
                        {item.time}
                      </p>
                      <div className="h-px w-10 bg-white/20" />
                      <p className="text-xl font-extrabold text-white leading-tight">
                        {item.title}
                      </p>
                      <p className="text-sm text-white/70 font-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* Values */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-[#F0F5F1] text-slate-800 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20 space-y-4">
                <p className="text-xs tracking-[0.4em] uppercase text-emerald-700 font-bold">
                  {t('home.values.subtitle')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F1E36] leading-tight">
                  {t('home.values.title')}
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-0">
              {churchValues.map((value, index) => (
                <ScrollReveal key={value.id} delay={index * 0.1}>
                  <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-12 py-12 md:py-14 ${index < churchValues.length - 1 ? 'border-b border-slate-200' : ''}`}>
                    {/* Icon */}
                    <div className="shrink-0 size-16 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-emerald-600 shadow-sm">
                      {valueIcons[index]}
                    </div>
                    {/* Text */}
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#0F1E36] leading-snug">
                        {value.title[currentLang as keyof TranslatedString]}
                      </h3>
                      <p className="text-base md:text-lg font-normal leading-relaxed text-slate-600 max-w-2xl">
                        {value.description[currentLang as keyof TranslatedString]}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* Discover — editorial grid */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-[#EEF3F6] text-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0)', backgroundSize: '24px 24px' }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20 space-y-4">
                <p className="text-xs tracking-[0.35em] uppercase text-sky-600 font-bold">
                  {currentLang === 'ro' ? 'Explorează' : currentLang === 'ru' ? 'Исследуйте' : 'Explore'}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F1E36] leading-tight">
                  {currentLang === 'ro' ? 'Ce poți descoperi' : currentLang === 'ru' ? 'Что вы можете открыть' : 'What you can discover'}
                </h2>
              </div>
            </ScrollReveal>

            {/* Top row — 2 large cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <ScrollReveal delay={0}>
                <Link
                  to={`/${currentLang}/despre`}
                  className="group block rounded-2xl bg-white border border-slate-200 text-slate-800 p-8 md:p-10 h-full min-h-[280px] relative overflow-hidden transition-all duration-500 hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/5 rounded-full blur-[60px] pointer-events-none" />
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="size-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <Users className="size-6 text-sky-600" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0F1E36] leading-tight">
                        {currentLang === 'ro' ? 'Despre noi' : currentLang === 'ru' ? 'О нас' : 'About us'}
                      </h3>
                      <p className="text-slate-500 text-base font-normal leading-relaxed max-w-sm">
                        {currentLang === 'ro' ? 'Cunoaște echipa, pastorul și misiunea noastră. Suntem o comunitate care crește împreună.' : currentLang === 'ru' ? 'Познакомьтесь с командой, пастором и нашей миссией.' : 'Meet the team, pastor, and our mission.'}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-sky-600 group-hover:text-sky-700 transition-colors text-sm font-semibold">
                      <span>{currentLang === 'ro' ? 'Descoperă' : currentLang === 'ru' ? 'Открыть' : 'Discover'}</span>
                      <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Link
                  to={`/${currentLang}/biblia`}
                  className="group block rounded-2xl bg-white border border-slate-200 text-slate-800 p-8 md:p-10 h-full min-h-[280px] relative overflow-hidden transition-all duration-500 hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
                >
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="size-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <Book className="size-6 text-amber-600" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0F1E36] leading-tight">
                        {currentLang === 'ro' ? 'Citește Biblia' : currentLang === 'ru' ? 'Читайте Библию' : 'Read the Bible'}
                      </h3>
                      <p className="text-slate-500 text-base font-normal leading-relaxed max-w-sm">
                        {currentLang === 'ro' ? 'Cuvântul lui Dumnezeu — fundația credinței noastre. Citește în română, engleză sau rusă.' : currentLang === 'ru' ? 'Слово Boga — основа нашей веры.' : "God's Word — the foundation of our faith."}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-amber-600 group-hover:text-amber-700 transition-colors text-sm font-semibold">
                      <span>{currentLang === 'ro' ? 'Deschide' : currentLang === 'ru' ? 'Открыть' : 'Open'}</span>
                      <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>

            {/* Bottom row — 2 smaller cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              <ScrollReveal delay={0.15}>
                <Link
                  to={`/${currentLang}/donatii`}
                  className="group block rounded-2xl bg-white border border-slate-200 p-7 md:p-8 transition-all duration-500 hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="size-11 rounded-lg bg-emerald-5 border border-emerald-100 flex items-center justify-center">
                      <Heart className="size-5 text-emerald-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-extrabold tracking-tight text-[#0F1E36] leading-tight">
                      {currentLang === 'ro' ? 'Susține lucrarea' : currentLang === 'ru' ? 'Поддержите служение' : 'Support the ministry'}
                    </h3>
                    <p className="text-sm text-slate-500 font-normal leading-relaxed">
                      {currentLang === 'ro' ? 'Participă la răspândirea Evangheliei prin dărnicie.' : currentLang === 'ru' ? 'Участвуйте в распространении Евангелия через щедрость.' : 'Participate in spreading the Gospel through generosity.'}
                    </p>
                    <div className="flex items-center gap-2 text-emerald-600 group-hover:text-emerald-700 transition-colors text-sm font-semibold pt-1">
                      <span>{currentLang === 'ro' ? 'Descoperă' : currentLang === 'ru' ? 'Открыть' : 'Discover'}</span>
                      <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Link
                  to={`/${currentLang}/contact`}
                  className="group block rounded-2xl bg-white border border-slate-200 p-7 md:p-8 transition-all duration-500 hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="size-11 rounded-lg bg-orange-5 border border-orange-100 flex items-center justify-center">
                      <MapPin className="size-5 text-orange-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-extrabold tracking-tight text-[#0F1E36] leading-tight">
                      {currentLang === 'ro' ? 'Vizitează-ne' : currentLang === 'ru' ? 'Посетите нас' : 'Visit us'}
                    </h3>
                    <p className="text-sm text-slate-500 font-normal leading-relaxed">
                      {currentLang === 'ro' ? 'Vino la o întâlnire sau trimite-ne un mesaj.' : currentLang === 'ru' ? 'Приходите на встречу или напишите нам.' : 'Come to a service or send us a message.'}
                    </p>
                    <div className="flex items-center gap-2 text-orange-600 group-hover:text-orange-700 transition-colors text-sm font-semibold pt-1">
                      <span>{currentLang === 'ro' ? 'Descoperă' : currentLang === 'ru' ? 'Открыть' : 'Discover'}</span>
                      <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* Map + Visit CTA */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-[#FAF8F5] text-slate-800 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16 space-y-4">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-100 border border-slate-200">
                  <MapPin className="size-4 text-sky-600" strokeWidth={1.5} />
                  <span className="text-xs tracking-[0.3em] uppercase text-sky-600 font-bold">
                    {t('home.cta_visit.we_wait')}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F1E36] leading-tight">
                  {t('home.cta_visit.visit_us')}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="h-[300px] sm:h-[380px] md:h-[460px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md">
                <MapEmbed className="h-full" />
              </div>
            </ScrollReveal>

            {/* CTA below map */}
            <ScrollReveal delay={0.2}>
              <div className="mt-16 md:mt-20 text-center space-y-8">
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  {t('home.cta_visit.description')}
                </p>
                <Link
                  to={`/${currentLang}/contact`}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0F1E36] text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-md shadow-slate-200/50 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-xs uppercase tracking-wider duration-300"
                >
                  {currentLang === 'ro' ? 'Nevoie de rugăciune' : currentLang === 'ru' ? 'Нужда в молитве' : 'Prayer Request'}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
