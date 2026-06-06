import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Play, Image as ImageIcon, ExternalLink, Calendar, Heart, Share2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
                <div className="p-3 rounded-full bg-pink-500/10 text-pink-600">
                  <Instagram className="size-6" />
                </div>
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-600">
                  <Facebook className="size-6" />
                </div>
              </div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-3">
                Social Media Hub
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Media
              </h1>
              <p className="text-base md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                Urmărește activitatea noastră în timp real prin feed-urile oficiale de Facebook și Instagram.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Facebook Feed Column */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <Facebook className="size-6 text-blue-600" />
                  <h2 className="text-2xl font-light tracking-tight">Facebook Feed</h2>
                </div>
                <div className="bg-accent/5 rounded-2xl p-4 flex justify-center overflow-hidden min-h-[600px] border border-border">
                  <iframe 
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FBiserica-Un-Nou-%25C3%258Enceput-61586237546172%2F&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    width="500" 
                    height="800" 
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="max-w-full"
                  />
                </div>
              </div>

              {/* Instagram Feed Column */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <Instagram className="size-6 text-pink-600" />
                  <h2 className="text-2xl font-light tracking-tight">Instagram</h2>
                </div>
                
                <div className="grid gap-6">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-8 bg-gradient-to-br from-pink-500/5 to-purple-500/5 border border-pink-500/20 rounded-2xl space-y-6 transition-all"
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-light">Pagina Bisericii</h3>
                      <p className="text-sm text-muted-foreground font-light">Urmărește activitatea duminicală și noutățile bisericii.</p>
                    </div>
                    <Button asChild className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-xl h-12">
                      <a href="https://www.instagram.com/biserica.unnouinceput/" target="_blank" rel="noopener noreferrer" className="gap-2">
                        @biserica.unnouinceput <ExternalLink className="size-4" />
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-8 bg-gradient-to-br from-orange-500/5 to-pink-500/5 border border-orange-500/20 rounded-2xl space-y-6 transition-all"
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-light">Grupul de Tineret</h3>
                      <p className="text-sm text-muted-foreground font-light">Imagini și momente de la întâlnirile tinerilor noștri.</p>
                    </div>
                    <Button asChild className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white rounded-xl h-12 border-none">
                      <a href="https://www.instagram.com/tineret.unnouinceput/" target="_blank" rel="noopener noreferrer" className="gap-2">
                        @tineret.unnouinceput <ExternalLink className="size-4" />
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <div className="p-10 border border-dashed border-border rounded-2xl text-center space-y-4">
                  <p className="text-sm text-muted-foreground font-light italic">
                    "Instagram nu permite momentan afișarea automată a pozelor fără autentificare. Te invităm să ne urmărești direct pe aplicație pentru cele mai noi postări!"
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
