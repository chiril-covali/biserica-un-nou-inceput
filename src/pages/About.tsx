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
                {currentLang === 'ro' ? 'Un mesaj de bun venit din partea pastorului Vitalie Fedula' : currentLang === 'ru' ? 'Приветственное послание пастора Виталия Федула' : 'A welcome message from Pastor Vitalie Fedula'}
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
                  {currentLang === 'ro' ? (
                    <>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Drag prieten,</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Bine ai venit la <span className="font-bold text-foreground">Biserica UN NOU ÎNCEPUT!</span></p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Te invităm să fii parte dintr-o comunitate de oameni care Îl iubesc pe Dumnezeu, sunt ancorați în Cuvântul Său și doresc să-L urmeze cu credincioșie pe Domnul Isus Hristos.</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Aici este locul unde credința prinde viață, oamenii găsesc speranță, relațiile sunt zidite pe dragostea lui Hristos, iar Dumnezeu este glorificat în tot ceea ce facem. Ne dorim să creștem împreună în credință, să ne slujim unii pe alții cu dragoste și să fim o lumină pentru comunitatea noastră.</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Indiferent de trecutul tău sau de etapa în care te afli, te încurajez să faci un pas spre Dumnezeu și să descoperi împreună cu noi bucuria unei vieți transformate prin Evanghelie. Cu ajutorul lui Dumnezeu, fiecare zi poate fi un nou început.</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Te așteptăm cu drag!</p>
                    </>
                  ) : currentLang === 'ru' ? (
                    <>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Дорогой друг,</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Добро пожаловать в <span className="font-bold text-foreground">церковь НОВОЕ НАЧАЛО!</span></p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Мы приглашаем вас стать частью сообщества людей, которые любят Бога, укоренены в Его Слове и желают верно следовать за Господом Иисусом Христом.</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Это место, где вера оживает, люди находят надежду, отношения строятся на любви Христовой, а Бог прославляется во всем, что мы делаем. Мы хотим вместе расти в вере, служить друг другу с любовью и быть светом для нашего общества.</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Независимо от вашего прошлого или этапа, на котором вы находитесь, я призываю вас сделать шаг к Богу и открыть вместе с нами радость жизни, преображенной Евангелием. С Божьей помощью каждый день может стать новым началом.</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Мы ждем вас с любовью!</p>
                    </>
                  ) : (
                    <>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Dear friend,</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Welcome to <span className="font-bold text-foreground">A NEW BEGINNING Church!</span></p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">We invite you to be part of a community of people who love God, are anchored in His Word, and desire to faithfully follow the Lord Jesus Christ.</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">This is the place where faith comes to life, people find hope, relationships are built on the love of Christ, and God is glorified in everything we do. We want to grow together in faith, serve one another with love, and be a light for our community.</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">Regardless of your past or the stage you are in, I encourage you to take a step toward God and discover with us the joy of a life transformed by the Gospel. With God's help, every day can be a new beginning.</p>
                      <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">We look forward to seeing you!</p>
                    </>
                  )}
                  
                  <div className="pt-4">
                    <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground italic">
                      {currentLang === 'ro' ? 'Cu dragoste în Hristos,' : currentLang === 'ru' ? 'С любовью во Христе,' : 'With love in Christ,'}
                    </p>
                    <p className="text-lg font-bold text-foreground mt-1">
                      Vitalie Fedula
                    </p>
                    <p className="text-base font-medium text-muted-foreground">
                      {currentLang === 'ro' ? 'Pastor — Biserica UN NOU ÎNCEPUT' : currentLang === 'ru' ? 'Пастор — церковь НОВОЕ НАЧАЛО' : 'Pastor — A NEW BEGINNING Church'}
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
