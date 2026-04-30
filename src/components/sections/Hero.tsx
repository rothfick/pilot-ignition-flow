import { motion } from "framer-motion";
import { User } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section
      id="top"
      className="relative z-10 min-h-screen flex items-center pt-40 pb-32 px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-16 items-center">
        <div>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] uppercase text-white/40 mb-8 font-light"
          >
            FlowPilot AI Lab
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-light -tracking-[0.03em] leading-[1.05] text-white mb-8"
          >
            Ekskluzywna architektura{" "}
            <span className="italic text-white/70">systemów AI</span>.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-[#A1A1AA] font-light max-w-xl leading-relaxed mb-12"
          >
            Precyzja nigdy nie jest dziełem przypadku.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <a href="#kontakt" className="btn-pill">
              Rozpocznij współpracę
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full border border-white/5" />
            <div className="absolute -inset-10 rounded-full border border-white/[0.03]" />
            <div className="rounded-full w-48 h-48 md:w-56 md:h-56 border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent backdrop-blur-md flex items-center justify-center overflow-hidden">
              <User className="w-20 h-20 text-white/20" strokeWidth={1} />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/10 text-[10px] tracking-[0.3em] uppercase text-white/60">
              Founder
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
