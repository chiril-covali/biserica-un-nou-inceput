import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEOHead } from "@/components/seo/SEOHead";

/**
 * 404 Not Found page with branded design and smooth animations
 * Provides clear navigation back to home
 */
const NotFound = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0] || 'ro';

  return (
    <>
      <SEOHead
        title="Pagina nu a fost găsită"
        description="Pagina pe care o cauți nu există. Revino la pagina principală pentru a continua navigarea."
      />
      
      <main className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-6 bg-[#071a2f]">
        <motion.div
          className="max-w-2xl w-full text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-[120px] md:text-[180px] font-extralight tracking-wider leading-none text-white/10">
              404
            </h1>
          </motion.div>

          {/* Content */}
          <div className="space-y-4 -mt-8">
            <motion.h2
              className="text-3xl md:text-5xl font-light tracking-wide text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Pagina nu a fost găsită
            </motion.h2>
            
            <motion.p
              className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-md mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Pagina pe care o cauți nu există sau a fost mutată.
              Hai să te ducem înapoi.
            </motion.p>
          </div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              to={`/${currentLang}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0d2740] font-bold rounded-full hover:bg-sky-100 transition-all shadow-lg shadow-white/10 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 text-sm tracking-wide duration-300 group"
            >
              <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
              Înapoi la Acasă
            </Link>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            className="pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="h-px w-24 mx-auto bg-white/10" />
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default NotFound;
