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
                  <h2 className="text-2xl font-light tracking-tight">Instagram Updates</h2>
                </div>
                <div className="space-y-6">
                  {/* Since IG doesn't have a simple feed iframe, we show recent curated posts with real links */}
                  {[
                    {
                      id: 'ig-1',
                      image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=80',
                      desc: 'Duminica aceasta ne vedem la ora 10:00! Vă așteptăm să ne închinăm împreună.',
                      url: 'https://www.instagram.com/biserica.unnouinceput/'
                    },
                    {
                      id: 'ig-2',
                      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80',
                      desc: 'Timpul de tineret este unul plin de viață și bucurie. Te așteptăm miercuri!',
                      url: 'https://www.instagram.com/tineret.unnouinceput/'
                    }
                  ].map((post) => (
                    <motion.div 
                      key={post.id}
                      whileHover={{ scale: 1.01 }}
                      className="bg-background border border-border rounded-xl overflow-hidden group shadow-sm"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img src={post.image} alt="Instagram Post" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <Instagram className="size-8 text-white" />
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <p className="text-sm font-light text-muted-foreground leading-relaxed italic">
                          "{post.desc}"
                        </p>
                        <Button asChild variant="outline" size="sm" className="w-full gap-2 font-light">
                          <a href={post.url} target="_blank" rel="noopener noreferrer">
                            Vezi pe Instagram <ExternalLink className="size-3" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-8 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-2xl border border-pink-500/20 text-center space-y-4">
                  <p className="text-base font-light">Vizitează profilul nostru pentru toate postările</p>
                  <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8">
                    <a href="https://www.instagram.com/biserica.unnouinceput/" target="_blank" rel="noopener noreferrer">
                      @biserica.unnouinceput
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
