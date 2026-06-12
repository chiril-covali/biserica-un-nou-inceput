import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t, i18n } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLang = i18n.language.split('-')[0] || 'ro';

  const navLinks = [
    { name: t('nav.home'), path: `/${currentLang}` },
    { name: t('nav.about'), path: `/${currentLang}/despre` },
    { name: t('nav.bible'), path: `/${currentLang}/biblia` },
    { name: t('nav.contact'), path: `/${currentLang}/contact` },
    { name: t('nav.donate'), path: `/${currentLang}/donatii` }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#FAF8F5] to-[#EAE6DF] text-slate-600 py-20 px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & Info */}
          <div className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
            <Link to={`/${currentLang}`} className="inline-block group">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold tracking-[0.3em] text-slate-800 leading-none">
                  BISERICA
                </span>
                <span className="text-sm tracking-[0.2em] text-slate-500 font-light mt-1 uppercase">
                  UN NOU ÎNCEPUT
                </span>
              </div>
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-xs text-slate-500">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/p/Biserica-Un-Nou-%C3%8Enceput-61586237546172/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-10 rounded-full bg-slate-200/50 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all text-slate-700"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a 
                href="https://www.instagram.com/biserica.unnouinceput/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-10 rounded-full bg-slate-200/50 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all text-slate-700"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-slate-800 font-bold tracking-widest uppercase text-xs">{t('footer.contact')}</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="size-5 text-slate-700 shrink-0" />
                <span className="text-sm font-light text-slate-600">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="size-5 text-slate-700 shrink-0" />
                <span className="text-sm font-light text-slate-600">+373 68 254 128</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="size-5 text-slate-700 shrink-0" />
                <span className="text-sm font-light text-slate-600">bisericaunnouinceput@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Navigare Rapidă */}
          <div className="space-y-8">
            <h4 className="text-slate-800 font-bold tracking-widest uppercase text-xs">{t('footer.rapid_nav')}</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm font-light text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Orar */}
          <div className="space-y-8">
            <h4 className="text-slate-800 font-bold tracking-widest uppercase text-xs">{t('home.program.title')}</h4>
            <ul className="space-y-4">
              <li className="space-y-1">
                <p className="text-sm font-semibold text-slate-800">{t('home.program.sunday')}</p>
                <p className="text-xs font-light text-slate-600">{t('home.program.sunday_time')} — {t('home.program.sunday_event')}</p>
              </li>
              <li className="space-y-1">
                <p className="text-sm font-semibold text-slate-800">{t('home.program.youth')}</p>
                <p className="text-xs font-light text-slate-600">{t('home.program.youth_time')} — {t('home.program.youth_event')}</p>
              </li>
              <li className="space-y-1">
                <p className="text-sm font-semibold text-slate-800">{t('home.program.men')}</p>
                <p className="text-xs font-light text-slate-600">{t('home.program.men_time')} — {t('home.program.men_event')}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-light tracking-wide uppercase text-slate-500">
            © {new Date().getFullYear()} BISERICA UN NOU ÎNCEPUT
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-colors group"
          >
            {t('common.phone') === 'Phone' ? 'Up' : t('common.phone') === 'Телефон' ? 'Вверх' : 'Sus'} <ArrowUp className="size-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
