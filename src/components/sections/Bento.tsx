import { motion } from "framer-motion";
import { Instagram, Video, ArrowUpRight, BookOpen } from "lucide-react";

const cardBase =
  "glass-card p-6 sm:p-8 relative overflow-hidden group transition-colors duration-300 hover:border-white/20";

const Bento = () => {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold -tracking-[0.04em] text-white">
            Co <span className="text-gradient-brand">budujemy</span>.
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-xl mx-auto">
            Cztery filary. Jedna prędkość. Zero kompromisów.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 — WWW (span 2) */}
          <motion.a
            href="https://inkblade.site/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`${cardBase} md:col-span-2`}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Strony WWW w 48h
                </h3>
                <p className="text-[#94A3B8]">
                  Responsywne bestie. Zobacz nasz projekt.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-[#00E5FF] group-hover:rotate-45 transition-transform" />
            </div>

            {/* Mock browser */}
            <div className="rounded-xl border border-white/10 bg-[#09090B] overflow-hidden mt-4">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-[#FF5D01]/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-[#00E5FF]/70" />
                <div className="ml-3 flex-1 h-5 rounded bg-white/5 max-w-xs" />
              </div>
              <div className="p-6 space-y-3 h-40 sm:h-44 relative overflow-hidden">
                <div className="h-3 w-2/3 rounded bg-gradient-to-r from-[#FF5D01]/60 to-[#00E5FF]/60" />
                <div className="h-2 w-1/2 rounded bg-white/10" />
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="aspect-square rounded-lg bg-white/5 border border-white/10" />
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-[#FF5D01]/30 to-transparent border border-white/10" />
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-[#00E5FF]/30 to-transparent border border-white/10" />
                </div>
              </div>
            </div>
          </motion.a>

          {/* Card 2 — Apps */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={cardBase}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Aplikacje Mobilne
            </h3>
            <p className="text-[#94A3B8] text-sm mb-8">
              Natywny feel. Skala produktu.
            </p>

            {/* Phone */}
            <div className="flex justify-center">
              <div className="relative w-32 h-56 rounded-[2rem] border-2 border-white/20 bg-[#09090B] p-2 shadow-[0_0_60px_-10px_rgba(255,93,1,0.5)]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-white/20" />
                <div className="w-full h-full rounded-[1.5rem] bg-gradient-to-br from-[#FF5D01]/40 via-[#FF5D01]/10 to-transparent flex items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-[#FF5D01] shadow-[0_0_30px_rgba(255,93,1,0.8)]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — SMM */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={cardBase}
          >
            <h3 className="text-2xl font-bold text-white mb-2">SMM Automaton</h3>
            <p className="text-[#94A3B8] text-sm mb-8">
              Rolki i karuzele na autopilocie.
            </p>

            <div className="relative h-32 flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center -translate-x-8 -translate-y-2 rotate-[-8deg]">
                <Instagram className="w-7 h-7 text-[#00E5FF]" />
              </div>
              <div className="absolute w-16 h-16 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center translate-x-8 translate-y-2 rotate-[10deg]">
                <Video className="w-7 h-7 text-[#00E5FF]" />
              </div>
            </div>
          </motion.div>

          {/* Card 4 — E-book (span 2) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`${cardBase} md:col-span-2`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Architektura E-booków
                </h3>
                <p className="text-[#94A3B8]">Twoja wiedza jako produkt.</p>
                <div className="flex items-center gap-2 mt-4 text-xs text-[#00E5FF] font-mono tracking-widest">
                  <BookOpen className="w-4 h-4" />
                  PDF · EPUB · INTERAKTYWNY
                </div>
              </div>

              {/* 3D Book */}
              <div className="relative perspective-[1000px] mx-auto sm:mx-0">
                <div
                  className="relative w-32 h-44 rounded-r-md rounded-l-sm shadow-2xl"
                  style={{
                    transform: "rotateY(-22deg) rotateX(4deg)",
                    background:
                      "linear-gradient(135deg, #FF5D01 0%, #00E5FF 100%)",
                  }}
                >
                  <div className="absolute inset-0 rounded-r-md rounded-l-sm bg-black/20" />
                  <div className="absolute top-6 left-4 right-4 space-y-2">
                    <div className="h-1.5 w-3/4 bg-white/70 rounded" />
                    <div className="h-1.5 w-1/2 bg-white/40 rounded" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-[8px] font-bold text-white/80 tracking-widest">
                    FLOWPILOT
                  </div>
                  {/* spine */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-black/40 rounded-l-sm" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bento;