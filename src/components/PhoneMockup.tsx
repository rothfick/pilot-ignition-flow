import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  Sparkles,
  Zap,
  ArrowUpRight,
  Plus,
} from "lucide-react";

/**
 * The actual mock UI of the FlowPilot Command app — used both inside
 * the phone frame on the landing page and as the standalone /app screen.
 */
export const FlowPilotAppUI = () => {
  return (
    <div className="w-full h-full bg-black text-white flex flex-col overflow-hidden relative">
      {/* ambient glow — monochrome */}
      <div className="pointer-events-none absolute -top-20 -left-10 w-64 h-64 rounded-full bg-white/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 w-64 h-64 rounded-full bg-white/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.04),transparent_60%)]" />

      {/* status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[10px] text-white/60 font-light tracking-wider relative z-10">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-2 rounded-sm border border-white/40" />
          <span className="w-1 h-1 rounded-full bg-white/60" />
        </span>
      </div>

      {/* header — editorial */}
      <div className="px-5 pt-4 pb-5 relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/30 font-light">
              FlowPilot
            </p>
            <h1 className="text-2xl font-serif italic font-light leading-none mt-1">
              Command
            </h1>
          </div>
          <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-light tracking-widest text-white/70">
            JK
          </div>
        </div>
      </div>

      {/* hero metric — silent luxury */}
      <div className="mx-5 border-y border-white/[0.08] py-5 relative z-10">
        <p className="text-[9px] uppercase tracking-[0.35em] text-white/30 font-light mb-2">
          Przychód · 30 dni
        </p>
        <div className="flex items-baseline justify-between">
          <span className="text-4xl font-serif font-light leading-none -tracking-tight">
            47.2<span className="text-white/40 text-2xl">k</span>
            <span className="text-white/40 text-base ml-1">PLN</span>
          </span>
          <span className="text-[10px] text-white/50 font-light tracking-wider">
            +12.4%
          </span>
        </div>
        {/* sparkline */}
        <svg viewBox="0 0 100 20" className="w-full h-6 mt-3" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            d="M0,15 L12,12 L25,14 L38,8 L50,10 L62,5 L75,7 L88,3 L100,5"
            fill="none"
            stroke="white"
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* stats row — minimal */}
      <div className="grid grid-cols-2 px-5 mt-5 relative z-10 gap-px bg-white/[0.06]">
        <div className="bg-black p-3 pl-0 pr-3">
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-light">
            Automatyzacje
          </p>
          <p className="text-xl font-serif font-light mt-1.5 -tracking-tight">12</p>
        </div>
        <div className="bg-black p-3 pl-3">
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-light">
            Uptime
          </p>
          <p className="text-xl font-serif font-light mt-1.5 -tracking-tight">99.9%</p>
        </div>
      </div>

      {/* feed */}
      <div className="px-5 mt-5 flex-1 overflow-hidden relative z-10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/30 font-light">
            Live feed
          </p>
          <span className="flex items-center gap-1.5 text-[9px] text-white/50 uppercase tracking-widest font-light">
            <span className="w-1 h-1 rounded-full bg-white pulse-dot" />
            On-air
          </span>
        </div>

        <div className="space-y-px bg-white/[0.06]">
          {[
            { icon: Bot, title: "Lead przechwycony", sub: "marek@… · 12s" },
            { icon: Sparkles, title: "Reel wygenerowany", sub: "IG · 1m" },
            { icon: ArrowUpRight, title: "Sprzedaż domknięta", sub: "+1 290 zł · 4m" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="flex items-center gap-3 bg-black py-3"
            >
              <item.icon className="w-3.5 h-3.5 text-white/60 shrink-0" strokeWidth={1.2} />
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-light truncate">{item.title}</p>
                <p className="text-[9px] text-white/40 truncate tracking-wide">{item.sub}</p>
              </div>
              <ArrowUpRight className="w-3 h-3 text-white/30" strokeWidth={1.2} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* bottom nav — minimal outline */}
      <div className="px-5 pb-5 pt-4 relative z-10">
        <div className="rounded-full border border-white/15 backdrop-blur-xl flex justify-around py-2">
          {[Activity, Bot, Sparkles, Plus].map((Icon, i) => (
            <button
              key={i}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                i === 0
                  ? "bg-white text-black"
                  : "text-white/40 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={1.4} />
            </button>
          ))}
        </div>
        <div className="mt-3 mx-auto w-24 h-[3px] rounded-full bg-white/30" />
      </div>
    </div>
  );
};

/**
 * Phone frame wrapper for use inside the Bento grid card.
 */
const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[180px] h-[360px] rounded-[2.2rem] border-2 border-white/15 bg-black p-1.5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]">
      {/* notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black z-20 border border-white/10" />
      <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
        <FlowPilotAppUI />
      </div>
    </div>
  );
};

export default PhoneMockup;