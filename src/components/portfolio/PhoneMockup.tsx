import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Plus } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-white/[0.04] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.03),transparent_60%)]" />

      {/* Ghost phone behind for depth */}
      <div className="absolute w-[150px] h-[310px] rounded-[32px] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] rotate-[8deg] translate-x-16 translate-y-4 blur-[1px] opacity-60" />

      {/* Main phone */}
      <div className="relative w-[178px] h-[358px] rounded-[36px] bg-gradient-to-b from-zinc-600 via-zinc-900 to-black p-[2px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] rotate-[-7deg] group-hover:rotate-[-4deg] transition-transform duration-700 ease-out">
        <div className="w-full h-full rounded-[34px] bg-black relative overflow-hidden border border-white/10">
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20 border border-white/10" />
          {/* Status bar */}
          <div className="absolute top-1.5 left-4 right-4 flex justify-between text-[7px] text-white/60 font-light z-10 tracking-tight">
            <span>9:41</span>
            <span className="tracking-widest">●●●</span>
          </div>

          {/* Subtle vertical sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-white/[0.02] pointer-events-none" />

          <div className="pt-7 px-3.5 pb-3 h-full flex flex-col">
            {/* Header — editorial */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[6.5px] tracking-[0.3em] text-white/30 uppercase font-light">FlowPilot</p>
                <p className="text-white text-[13px] font-serif italic mt-0.5 leading-none">Command</p>
              </div>
              <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                <Plus className="w-2.5 h-2.5 text-white/60" strokeWidth={1.5} />
              </div>
            </div>

            {/* Hero metric — silent luxury */}
            <div className="border-t border-b border-white/[0.08] py-3 mb-3">
              <p className="text-[6.5px] tracking-[0.3em] text-white/30 uppercase font-light mb-1.5">Przychód · 30d</p>
              <div className="flex items-baseline justify-between">
                <span className="text-white text-[26px] font-serif font-light leading-none -tracking-tight">
                  47.2<span className="text-white/40 text-[14px]">k</span>
                </span>
                <span className="text-[8px] text-white/50 font-light">+12.4%</span>
              </div>
              {/* Sparkline */}
              <svg viewBox="0 0 100 20" className="w-full h-5 mt-2" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                  d="M0,15 L15,12 L30,14 L45,8 L60,10 L75,5 L90,7 L100,3"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </div>

            {/* Activity rows */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-1 rounded-full bg-white/70" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[8.5px] font-light truncate">Nowy lead · A.K.</p>
                  <p className="text-white/30 text-[7px] tracking-wide">przed chwilą</p>
                </div>
                <ArrowUpRight className="w-2.5 h-2.5 text-white/30" strokeWidth={1.2} />
              </div>
              <div className="h-px bg-white/[0.06]" />
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-[8.5px] font-light truncate">Auto-odpowiedź wysłana</p>
                  <p className="text-white/30 text-[7px] tracking-wide">5 min temu</p>
                </div>
              </div>
              <div className="h-px bg-white/[0.06]" />
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-2.5 h-2.5 text-white/50" strokeWidth={1.2} />
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-[8.5px] font-light truncate">Pipeline zoptymalizowany</p>
                  <p className="text-white/30 text-[7px] tracking-wide">wczoraj</p>
                </div>
              </div>
            </div>

            {/* CTA — minimal outline */}
            <div className="mt-auto">
              <div className="rounded-full border border-white/20 text-white text-[8px] py-2 text-center font-light tracking-[0.3em] uppercase backdrop-blur-sm hover:bg-white hover:text-black transition-colors">
                Otwórz panel
              </div>
              <div className="mt-2 flex justify-center">
                <div className="w-20 h-[3px] rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
