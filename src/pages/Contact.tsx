import { motion } from 'framer-motion';
import { Mail, Facebook, Instagram } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Contactează Biserica Un Nou Început — suntem aici pentru tine."
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
                Vorbește cu noi
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Contact
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Ne-ar plăcea să te cunoaștem și să ne rugăm împreună cu tine.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Trimite-ne un mesaj
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Completează formularul de mai jos și îți vom răspunde cât mai curând posibil.
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Informații de contact
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Preferi să ne contactezi direct? Iată cum ne poți găsi.
                  </p>
                </div>

                <Separator />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <Mail className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${photographerInfo.email}`}
                        className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors break-all"
                      >
                        {photographerInfo.email}
                      </a>
                    </div>
                  </div>

                  {photographerInfo.socialLinks.facebook && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-sm bg-accent">
                        <Facebook className="size-5 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-light tracking-wide text-muted-foreground">
                          Facebook
                        </p>
                        <a
                          href={photographerInfo.socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                        >
                          Biserica Un Nou Început
                        </a>
                      </div>
                    </div>
                  )}

                  {photographerInfo.socialLinks.instagram && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-sm bg-accent">
                        <Instagram className="size-5 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-light tracking-wide text-muted-foreground">
                          Instagram
                        </p>
                        <a
                          href={photographerInfo.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                        >
                          @biserica.unnouinceput
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
