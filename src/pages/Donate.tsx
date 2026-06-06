import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, HandHeart, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Donate() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'ro';

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
                {currentLang === 'ro' ? 'Poți dărui' : currentLang === 'ru' ? 'Вы можете пожертвовать' : 'You can give'}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-8">
                {currentLang === 'ro' ? 'Susține lucrarea lui Dumnezeu' : currentLang === 'ru' ? 'Поддержите Божье дело' : 'Support God\'s work'}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-[1.8] max-w-2xl mx-auto">
                {currentLang === 'ro' ? 'Prin dărnicia noastră participăm la răspândirea Evangheliei și la dezvoltarea lucrării cu copiii, tinerii și familiile.' : currentLang === 'ru' ? 'Благодаря нашей щедрости мы участвуем в распространении Евангелия и развитии служения детям, молодежи и семьям.' : 'Through our generosity, we participate in spreading the Gospel and developing the work with children, youth, and families.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal>
              <blockquote className="border-l-2 border-foreground/30 pl-6 md:pl-8 py-2">
                <p className="text-xl md:text-2xl font-light leading-relaxed italic text-foreground">
                   {currentLang === 'ro' ? '„Pe fiecare să-l lase inima să dea cum a hotărât, nu cu părere de rău sau de silă, căci Dumnezeu iubește pe cine dă cu bucurie."' : currentLang === 'ru' ? '„Каждый уделяй по расположению сердца, не с огорчением и не с принуждением; ибо доброхотно дающего любит Бог."' : '„Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver."'}
                </p>
                <footer className="mt-4 text-sm font-light tracking-wide text-muted-foreground">
                  — {currentLang === 'ro' ? '2 Corinteni 9:7' : currentLang === 'ru' ? '2 Коринфянам 9:7' : '2 Corinthians 9:7'}
                </footer>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                <p>
                  {currentLang === 'ro' ? 'Prin dărnicia noastră participăm la răspândirea Evangheliei, la dezvoltarea lucrării cu copiii, tinerii și familiile, precum și la susținerea proiectelor misionare și sociale ale bisericii.' : currentLang === 'ru' ? 'Своей щедростью мы участвуем в распространении Евангелия, развитии служения детям, молодежи и семьям, а также в поддержке миссионерских и социальных проектов церкви.' : 'Through our generosity, we participate in spreading the Gospel, developing the work with children, youth, and families, as well as supporting the missionary and social projects of the church.'}
                </p>
                <p>
                  {currentLang === 'ro' ? 'Mulțumim pentru inima ta darnică și pentru parteneriatul tău în lucrarea Domnului. Fiecare dar, mic sau mare, contribuie la creșterea Împărăției lui Dumnezeu.' : currentLang === 'ru' ? 'Благодарим вас за ваше щедрое сердце и за ваше партнерство в Господнем деле. Каждое пожертвование, малое или большое, способствует созиданию Царства Божьего.' : 'Thank you for your generous heart and for your partnership in the Lord\'s work. Every gift, small or large, contributes to the growth of the Kingdom of God.'}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <ScrollReveal delay={0.15}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <HandHeart className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-light tracking-wide">{currentLang === 'ro' ? 'Răspândirea Evangheliei' : currentLang === 'ru' ? 'Распространение Евангелия' : 'Spreading the Gospel'}</h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {currentLang === 'ro' ? 'Susții vestirea Cuvântului în comunitate și online.' : currentLang === 'ru' ? 'Вы поддерживаете проповедь Слова в обществе и в Интернете.' : 'You support the preaching of the Word in the community and online.'}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <Users className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-light tracking-wide">{currentLang === 'ro' ? 'Lucrarea cu copiii și tinerii' : currentLang === 'ru' ? 'Служение детям и молодежи' : 'Children and Youth Work'}</h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {currentLang === 'ro' ? 'Contribui la formarea generației următoare.' : currentLang === 'ru' ? 'Вы вносите вклад в формирование следующего поколения.' : 'You contribute to forming the next generation.'}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="p-8 border border-border bg-background space-y-3 h-full">
                  <Heart className="size-7 text-muted-foreground" strokeWidth={1.2} />
                  <h3 className="text-lg font-light tracking-wide">{currentLang === 'ro' ? 'Misiune și proiecte sociale' : currentLang === 'ru' ? 'Миссия и социальные проекты' : 'Mission and Social Projects'}</h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {currentLang === 'ro' ? 'Ajuți la susținerea celor în nevoi și a misionarilor.' : currentLang === 'ru' ? 'Вы помогаете поддерживать нуждающихся и миссионеров.' : 'You help support those in need and missionaries.'}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 p-8 md:p-10 bg-accent/40 border border-border space-y-4 text-center">
                <h3 className="text-2xl font-light tracking-wide">{currentLang === 'ro' ? 'Cum poți dărui' : currentLang === 'ru' ? 'Как вы можете пожертвовать' : 'How you can give'}</h3>
                <p className="text-base font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  {currentLang === 'ro' ? 'Pentru detalii bancare sau alte modalități de a contribui, te rugăm să ne contactezi direct. Vom fi bucuroși să-ți răspundem.' : currentLang === 'ru' ? 'Для получения банковских реквизитов или других способов пожертвования, пожалуйста, свяжитесь с нами напрямую. Мы будем рады вам ответить.' : 'For bank details or other ways to contribute, please contact us directly. We will be happy to answer you.'}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-foreground text-background font-light tracking-wide hover:bg-foreground/90 transition-colors"
                >
                  {t('nav.contact')}
                </Link>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm font-light text-muted-foreground tracking-wide">
                    {currentLang === 'ro' ? 'În curând va fi posibil să donezi și direct online prin card bancar.' : currentLang === 'ru' ? 'Вскоре можно будет пожертвовать напрямую онлайн с помощью банковской карты.' : 'Soon it will be possible to donate directly online via bank card.'}
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

