import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ImageIcon } from 'lucide-react';
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


  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero */}
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

        {/* Program / Schedule Section */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-gradient-to-b from-[#0d4a8a] via-[#1565c0] to-[#1872B9] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-6xl mx-auto relative z-10 text-center space-y-16">
            <ScrollReveal>
              <div className="space-y-5">
                <div className="relative size-16 md:size-20 mx-auto flex items-center justify-center shrink-0 mb-6 bg-white/10 rounded-full border border-white/20 p-2">
                  <img
                    src="/logo.png"
                    alt="Logo Biserica UN NOU ÎNCEPUT"
                    className="size-full object-cover scale-150 rounded-full"
                  />
                </div>
                <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-sky-300 font-bold">
                  {t('home.program.subtitle')}
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                  {currentLang === 'ro' ? <>Un loc pentru tine<br />și familia ta!</> : currentLang === 'ru' ? <>Место для вас<br />и вашей семьи!</> : <>A place for you<br />and your family!</>}
                </h2>
                <p className="text-lg sm:text-xl text-white/75 font-light max-w-2xl mx-auto pt-1">
                  {t('home.program.title')}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
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
                <ScrollReveal key={item.day} delay={index * 0.15}>
                  <div className="relative rounded-3xl overflow-hidden h-[420px] group cursor-default">
                    {/* Background image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020e1a] via-[#061629]/70 to-transparent" />
                    {/* Top badge */}
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sky-300 text-[10px] font-bold uppercase tracking-[0.2em]">
                        {item.date}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-7 space-y-3">
                      <h3 className="text-[11px] font-black tracking-[0.35em] text-sky-400 uppercase">
                        {item.day}
                      </h3>
                      <p className="text-4xl font-light tracking-tighter text-white leading-none">
                        {item.time}
                      </p>
                      <div className="h-px w-10 bg-white/25" />
                      <p className="text-xl font-extrabold text-white leading-tight">
                        {item.title}
                      </p>
                      <p className="text-sm text-white/65 font-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Valori — mid-blue range */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-gradient-to-b from-[#0a2040] via-[#0e3060] to-[#174a85] text-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 sm:mb-20 space-y-3">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-sky-300 font-bold">
                  {t('home.values.subtitle')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                  {t('home.values.title')}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {churchValues.map((value, index) => (
                <ScrollReveal key={value.id} delay={index * 0.1}>
                  <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/8 backdrop-blur-sm hover:border-white/25 transition-all duration-500 hover:-translate-y-2 text-left">
                    {/* Image placeholder */}
                    <div className="w-full h-52 bg-white/5 flex flex-col items-center justify-center border-b border-white/10 gap-3">
                      <ImageIcon className="size-10 text-white/20" strokeWidth={1} />
                      <span className="text-[11px] uppercase tracking-[0.3em] text-white/25 font-medium">Imagine</span>
                    </div>
                    {/* Content */}
                    <div className="p-8 space-y-5">
                      <div className="size-14 rounded-2xl bg-sky-400/20 text-sky-300 flex items-center justify-center group-hover:bg-sky-400 group-hover:text-white transition-colors duration-500">
                        {index === 0 ? <ThinCross className="size-7" /> : (value.icon && <value.icon className="size-7" strokeWidth={1.5} />)}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-extrabold tracking-tight text-white">
                          {value.title[currentLang as keyof TranslatedString]}
                        </h3>
                        <p className="text-base font-normal leading-relaxed text-sky-100/80">
                          {value.description[currentLang as keyof TranslatedString]}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Nav CTA Section — lightening blues */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#174a85] via-[#1e5fa0] to-[#c8dff5]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 sm:mb-20 space-y-4">
                <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-sky-200 font-bold">
                  {currentLang === 'ro' ? 'Explorează' : currentLang === 'ru' ? 'Исследуйте' : 'Explore'}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                  {currentLang === 'ro' ? 'Ce poți descoperi' : currentLang === 'ru' ? 'Что вы можете открыть' : 'What you can discover'}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  to: `/${currentLang}/despre`,
                  label: currentLang === 'ro' ? 'Despre noi' : currentLang === 'ru' ? 'О нас' : 'About us',
                  desc: currentLang === 'ro' ? 'Cunoaște echipa, pastorul și misiunea noastră.' : currentLang === 'ru' ? 'Познакомьтесь с командой, пастором и нашей миссией.' : 'Meet the team, pastor, and our mission.',
                  icon: '👥',
                  accent: 'from-sky-500/20 to-sky-600/10',
                  border: 'border-sky-400/30 hover:border-sky-300/60',
                },
                {
                  to: `/${currentLang}/donatii`,
                  label: currentLang === 'ro' ? 'Susține lucrarea' : currentLang === 'ru' ? 'Поддержите служение' : 'Support the ministry',
                  desc: currentLang === 'ro' ? 'Participă la răspândirea Evangheliei prin dărnicie.' : currentLang === 'ru' ? 'Участвуйте в распространении Евангелия через щедрость.' : 'Participate in spreading the Gospel through generosity.',
                  icon: '🤝',
                  accent: 'from-emerald-500/20 to-emerald-600/10',
                  border: 'border-emerald-400/30 hover:border-emerald-300/60',
                },
                {
                  to: `/${currentLang}/contact`,
                  label: currentLang === 'ro' ? 'Vizitează-ne' : currentLang === 'ru' ? 'Посетите нас' : 'Visit us',
                  desc: currentLang === 'ro' ? 'Vino la o întâlnire sau trimite-ne un mesaj.' : currentLang === 'ru' ? 'Приходите на встречу или напишите нам.' : 'Come to a service or send us a message.',
                  icon: '📍',
                  accent: 'from-orange-500/20 to-orange-600/10',
                  border: 'border-orange-400/30 hover:border-orange-300/60',
                },
                {
                  to: `/${currentLang}/biblia`,
                  label: currentLang === 'ro' ? 'Citește Biblia' : currentLang === 'ru' ? 'Читайте Библию' : 'Read the Bible',
                  desc: currentLang === 'ro' ? 'Cuvântul lui Dumnezeu — fundația credinței noastre.' : currentLang === 'ru' ? 'Слово Бога — основа нашей веры.' : "God's Word — the foundation of our faith.",
                  icon: '📖',
                  accent: 'from-purple-500/20 to-purple-600/10',
                  border: 'border-purple-400/30 hover:border-purple-300/60',
                },
              ].map((card, index) => (
                <ScrollReveal key={card.to} delay={index * 0.1}>
                  <Link
                    to={card.to}
                    className={`group flex flex-col h-full rounded-3xl border overflow-hidden ${card.border} transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20`}
                  >
                    {/* Image placeholder */}
                    <div className={`w-full h-40 bg-gradient-to-br ${card.accent} flex flex-col items-center justify-center gap-2 border-b border-white/10`}>
                      <ImageIcon className="size-8 text-white/25" strokeWidth={1} />
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Imagine</span>
                    </div>
                    {/* Content */}
                    <div className={`flex flex-col flex-1 p-7 bg-gradient-to-br backdrop-blur-sm ${card.accent}`}>
                      <div className="text-3xl mb-4">{card.icon}</div>
                      <h3 className="text-lg font-extrabold text-white mb-2 leading-tight">{card.label}</h3>
                      <p className="text-sm text-white/65 font-normal leading-relaxed flex-1">{card.desc}</p>
                      <div className="mt-5 flex items-center gap-2 text-white/50 group-hover:text-white/90 transition-colors text-sm font-semibold">
                        <span>{currentLang === 'ro' ? 'Descoperă' : currentLang === 'ru' ? 'Открыть' : 'Discover'}</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Hartă — pale to mid-blue */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#c8dff5] via-[#dbeeff] to-[#1a4a80] text-slate-900">
          <div className="max-w-6xl mx-auto space-y-8">
            <ScrollReveal>
              <div className="text-center mb-8 sm:mb-12 space-y-3">
                <MapPin className="size-8 mx-auto text-[#1872B9]" strokeWidth={1.2} />
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-sky-700 font-bold">
                  {t('home.cta_visit.we_wait')}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0d3b6e] leading-none">
                  {t('home.cta_visit.visit_us')}
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="h-[320px] sm:h-[420px] md:h-[500px] border border-slate-200/80 bg-white rounded-3xl overflow-hidden shadow-lg">
                <MapEmbed className="h-full" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vizitează-ne CTA — deep blue */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-gradient-to-b from-[#1a4a80] via-[#0a2040] to-[#061629] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <ScrollReveal>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/95 max-w-2xl mx-auto leading-relaxed">
                {t('home.cta_visit.description')}
              </p>
              <div className="pt-8">
                <Link
                  to={`/${currentLang}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1872B9] text-white font-bold rounded-full hover:bg-white hover:text-[#1872B9] transition-all shadow-lg shadow-[#1872B9]/35 hover:shadow-xl hover:shadow-[#1872B9]/55 hover:-translate-y-0.5 active:scale-95 text-xs uppercase tracking-wider duration-300"
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
