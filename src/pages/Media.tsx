import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Play, Image as ImageIcon, ExternalLink, Calendar, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const posts = [
  {
    id: 'post-1',
    platform: 'instagram',
    type: 'image',
    title: 'Serviciu de Duminică',
    date: '2 Iunie 2026',
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=80',
    description: 'Un timp binecuvântat de închinare și părtășie în prezența Domnului. Vă așteptăm cu drag în fiecare duminică de la ora 10:00!',
    likes: '124',
    url: 'https://www.instagram.com/biserica.unnouinceput/'
  },
  {
    id: 'post-2',
    platform: 'facebook',
    type: 'video',
    title: 'Mesajul de Duminică - Pastor Vitalie Fedula',
    date: '31 Mai 2026',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    description: 'Urmăriți mesajul complet din această duminică despre "Puterea Rugăciunii". Dumnezeu să vă binecuvânteze!',
    likes: '89',
    url: 'https://www.facebook.com/p/Biserica-Un-Nou-%C3%8Enceput-61586237546172/'
  },
  {
    id: 'post-3',
    platform: 'instagram',
    type: 'gallery',
    title: 'Întâlnire Tineret',
    date: '28 Mai 2026',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80',
    description: 'O seară de neuitat alături de tinerii noștri. Părtășie, jocuri și studiu biblic.',
    likes: '156',
    url: 'https://www.instagram.com/tineret.unnouinceput/'
  },
  {
    id: 'post-4',
    platform: 'facebook',
    type: 'image',
    title: 'Micul Dejun al Bărbaților',
    date: '25 Mai 2026',
    image: '/poze/rug.JPG-optimized.webp',
    description: 'Bărbații s-au adunat pentru un timp de rugăciune și încurajare reciprocă. Ne vedem sâmbăta viitoare!',
    likes: '45',
    url: 'https://www.facebook.com/p/Biserica-Un-Nou-%C3%8Enceput-61586237546172/'
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
                <div className="p-3 rounded-full bg-pink-500/10 text-pink-600">
                  <Instagram className="size-6" />
                </div>
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-600">
                  <Facebook className="size-6" />
                </div>
              </div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-3">
                Feed Social Media
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Media
              </h1>
              <p className="text-base md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                Fii la curent cu viața bisericii noastre. Urmărește-ne pe Instagram și Facebook pentru a vedea cum lucrează Dumnezeu în fiecare zi.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8 bg-accent/5">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-20">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold rounded-full flex items-center gap-1.5 border border-white/10">
                        {post.platform === 'instagram' ? <Instagram className="size-3" /> : <Facebook className="size-3" />}
                        {post.platform}
                      </span>
                    </div>
                    {post.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 text-white">
                          <Play className="size-8 fill-current ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between space-y-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="size-4" />
                        <span className="text-xs font-light tracking-wide">{post.date}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-light tracking-tight">{post.title}</h2>
                      <p className="text-base font-light leading-relaxed text-muted-foreground italic">
                        "{post.description}"
                      </p>
                    </div>

                    <div className="pt-8 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-6 text-muted-foreground">
                        <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                          <Heart className="size-5" />
                          <span className="text-xs">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-primary transition-colors">
                          <Share2 className="size-5" />
                        </button>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="font-light gap-2 hover:bg-accent group/btn">
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                          Vezi pe {post.platform}
                          <ExternalLink className="size-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            <div className="text-center pt-10">
              <Button asChild variant="outline" size="lg" className="rounded-full px-12 border-primary/20 hover:border-primary transition-all font-light tracking-[0.2em] uppercase h-14">
                <a href="https://www.instagram.com/biserica.unnouinceput/" target="_blank" rel="noopener noreferrer">
                  Vezi mai multe postări
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
