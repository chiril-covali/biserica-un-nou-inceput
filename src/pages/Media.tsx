import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Play, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialFeeds = [
  {
    id: 'ig-biserica',
    platform: 'instagram',
    title: 'Instagram Biserica',
    handle: '@biserica.unnouinceput',
    url: 'https://www.instagram.com/biserica.unnouinceput/',
    icon: Instagram,
    color: 'hover:text-pink-500'
  },
  {
    id: 'ig-tineret',
    platform: 'instagram',
    title: 'Instagram Tineret',
    handle: '@tineret.unnouinceput',
    url: 'https://www.instagram.com/tineret.unnouinceput/',
    icon: Instagram,
    color: 'hover:text-pink-600'
  },
  {
    id: 'fb-biserica',
    platform: 'facebook',
    title: 'Facebook Biserica',
    handle: 'Biserica Un Nou Început',
    url: 'https://www.facebook.com/p/Biserica-Un-Nou-%C3%8Enceput-61586237546172/',
    icon: Facebook,
    color: 'hover:text-blue-600'
  }
];

export default function Media() {
  return (
    <>
      <SEOHead 
        title="Media" 
        description="Imagini și noutăți de la Biserica Un Nou Început — fii la curent cu tot ce se întâmplă în comunitatea noastră."
      />

      <div className="min-h-screen pb-20">
        <section className="py-20 md:py-28 px-6 lg:px-8 border-b border-border bg-accent/5">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center gap-4 mb-6">
                <ImageIcon className="size-8 text-primary/40" />
                <Play className="size-8 text-primary/40" />
              </div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-3">
                Resurse Multimedia
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-wide mb-4">
                Media
              </h1>
              <p className="text-base md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                Descoperă ultimele imagini, video-uri și noutăți direct de pe paginile noastre de social media.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
              {socialFeeds.map((feed) => (
                <motion.div
                  key={feed.id}
                  whileHover={{ y: -5 }}
                  className="p-8 border border-border bg-background rounded-sm flex flex-col items-center text-center space-y-6 group transition-all"
                >
                  <div className={cn("p-4 rounded-full bg-accent/50 group-hover:bg-accent transition-colors", feed.color)}>
                    <feed.icon className="size-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-light tracking-wide">{feed.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{feed.handle}</p>
                  </div>
                  <Button asChild variant="outline" className="w-full font-light tracking-wide">
                    <a href={feed.url} target="_blank" rel="noopener noreferrer">
                      Vezi postările
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <div className="inline-block p-8 border border-dashed border-border rounded-xl bg-accent/5 max-w-2xl">
                <p className="text-base md:text-lg text-muted-foreground font-light italic">
                  "Credem că tehnologia este un instrument prin care putem duce Evanghelia mai aproape de oameni. 
                  Te invităm să ne urmărești online pentru a vedea cum lucrează Dumnezeu în biserica noastră."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import { cn } from '@/lib/utils';
