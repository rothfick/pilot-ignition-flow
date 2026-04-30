import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative pt-40 pb-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center"
      >
        <div className="inline-block border border-[#00E5FF]/30 text-[#00E5FF] bg-[#00E5FF]/10 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-8">
          Automatyzacja, której boi się konkurencja.
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold -tracking-[0.04em] leading-[0.95] text-white mb-8">
          Buduję systemy AI w{" "}
          <span className="text-gradient-brand">48 godzin</span>
          .<br className="hidden sm:block" /> Reszta to strata czasu.
        </h1>

        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          Nie jestem agencją. Jestem Twoją przewagą technologiczną. Wdrażam WWW,
          E-booki, SMM i Aplikacje, które skalują biznes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="max-w-4xl mx-auto mt-12 rounded-2xl overflow-hidden border border-white/10 relative group cursor-pointer transition-all duration-500 hover:border-[#00E5FF]/50 hover:shadow-[0_0_60px_-10px_rgba(0,229,255,0.4)]"
      >
        <div className="aspect-video w-full relative bg-[radial-gradient(ellipse_at_center,_#1a1a2e_0%,_#09090B_70%)] flex items-center justify-center">
          {/* abstract gradient overlay */}
          <div className="absolute inset-0 opacity-40 bg-[conic-gradient(from_180deg_at_50%_50%,_#FF5D0133_0deg,_#00E5FF22_120deg,_#09090B_240deg,_#FF5D0133_360deg)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />

          <button
            aria-label="Odtwórz wideo"
            className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FF5D01] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_50px_rgba(255,93,1,0.6)]"
          >
            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
          </button>

          <div className="absolute bottom-4 left-4 text-xs text-white/60 font-mono tracking-widest z-10">
            VSL · 02:47
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;