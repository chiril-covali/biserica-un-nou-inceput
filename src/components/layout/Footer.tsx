import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & Info */}
          <div className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block group">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold tracking-[0.3em] text-white leading-none">
                  BISERICA
                </span>
                <span className="text-sm tracking-[0.2em] text-white/60 font-light mt-1 uppercase">
                  Un Nou Început
                </span>
              </div>
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-xs text-zinc-400">
              Suntem o comunitate creștină dedicată răspândirii Evangheliei și transformării vieților prin puterea lui Isus Hristos.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/p/Biserica-Un-Nou-%C3%8Enceput-61586237546172/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a 
                href="https://www.instagram.com/biserica.unnouinceput/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-white font-medium tracking-widest uppercase text-xs">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="size-5 text-primary shrink-0" />
                <span className="text-sm font-light">Strada Exemplu 123, Oraș, Țară</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="size-5 text-primary shrink-0" />
                <span className="text-sm font-light">+40 123 456 789</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="size-5 text-primary shrink-0" />
                <span className="text-sm font-light">contact@biserica.ro</span>
              </li>
            </ul>
          </div>

          {/* Navigare Rapidă */}
          <div className="space-y-8">
            <h4 className="text-white font-medium tracking-widest uppercase text-xs">Navigare</h4>
            <ul className="space-y-4">
              {[
                { name: 'Acasă', path: '/' },
                { name: 'Despre', path: '/despre' },
                { name: 'Biblia', path: '/biblia' },
                { name: 'Media', path: '/media' },
                { name: 'Contact', path: '/contact' },
                { name: 'Donații', path: '/donatii' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm font-light hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Orar */}
          <div className="space-y-8">
            <h4 className="text-white font-medium tracking-widest uppercase text-xs">Program Servicii</h4>
            <ul className="space-y-4">
              <li className="space-y-1">
                <p className="text-sm font-medium text-white">Duminică</p>
                <p className="text-xs font-light">10:00 — Serviciu Divin</p>
              </li>
              <li className="space-y-1">
                <p className="text-sm font-medium text-white">Miercuri</p>
                <p className="text-xs font-light">18:00 — Seară de tineret</p>
              </li>
              <li className="space-y-1">
                <p className="text-sm font-medium text-white">Sâmbătă</p>
                <p className="text-xs font-light">07:00 — Rugăciunea bărbaților</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Biserica Un Nou Început. Toate drepturile rezervate.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors group"
          >
            Sus <ArrowUp className="size-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
