import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowUpRight,
} from "lucide-react";

/**
 * The actual mock UI of the FlowPilot Command app — used both inside
 * the phone frame on the landing page and as the standalone /app screen.
 */
export const FlowPilotAppUI = () => {
  return (
    <div className="w-full h-full bg-[#09090B] text-white flex flex-col overflow-hidden relative">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-20 -left-10 w-64 h-64 rounded-full bg-[#FF5D01]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 w-64 h-64 rounded-full bg-[#00E5FF]/20 blur-3xl" />

      {/* status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[10px] text-white/70 font-medium tracking-wider relative z-10">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-2 rounded-sm border border-white/60" />
          <span className="w-1 h-1 rounded-full bg-[#00E5FF]" />
        </span>
      </div>

      {/* header */}
      <div className="px-5 pt-3 pb-4 relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#94A3B8]">
              Witaj
            </p>
            <h1 className="text-xl font-extrabold -tracking-[0.03em]">
              Pilot <span className="text-gradient-brand">Command</span>
            </h1>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF5D01] to-[#00E5FF] flex items-center justify-center text-[11px] font-bold">
            JK
          </div>
        </div>
      </div>

      {/* hero metric */}
      <div className="mx-5 rounded-2xl p-4 bg-gradient-to-br from-[#FF5D01] to-[#FF5D01]/70 relative overflow-hidden z-10">
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
        <p className="text-[10px] uppercase tracking-widest text-white/80">
          Automatyzacje aktywne
        </p>
        <div className="flex items-end justify-between mt-1">
          <span className="text-3xl font-extrabold -tracking-[0.04em]">
            12
          </span>
          <span className="flex items-center gap-1 text-[10px] bg-white/20 rounded-full px-2 py-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> +3 dziś
          </span>
        </div>
        {/* mini chart */}
        <div className="flex items-end gap-1 mt-3 h-8">
          {[40, 60, 35, 75, 50, 90, 70, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: "easeOut" }}
              className="flex-1 rounded-sm bg-white/80"
            />
          ))}
        </div>
      </div>

      {/* stats row */}
      <div className="grid grid-cols-2 gap-2 px-5 mt-3 relative z-10">
        <div className="rounded-xl bg-white/5 border border-white/10 p-3">
          <Zap className="w-3.5 h-3.5 text-[#00E5FF]" />
          <p className="text-lg font-bold mt-1">847</p>
          <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider">
            Zadania / dzień
          </p>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-3">
          <Activity className="w-3.5 h-3.5 text-[#FF5D01]" />
          <p className="text-lg font-bold mt-1">99.9%</p>
          <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider">
            Uptime
          </p>
        </div>
      </div>

      {/* feed */}
      <div className="px-5 mt-4 flex-1 overflow-hidden relative z-10">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] uppercase tracking-widest text-[#94A3B8]">
            Live feed
          </p>
          <span className="flex items-center gap-1 text-[9px] text-[#00E5FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] pulse-dot" />
            ON-AIR
          </span>
        </div>

        <div className="space-y-2">
          {[
            { icon: Bot, color: "#00E5FF", title: "Lead przechwycony", sub: "marek@…  · 12s" },
            { icon: Sparkles, color: "#FF5D01", title: "Reel wygenerowany", sub: "IG · 1m" },
            { icon: ArrowUpRight, color: "#00E5FF", title: "Sprzedaż domknięta", sub: "+ 1 290 zł · 4m" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-2.5"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `${item.color}1A`,
                  border: `1px solid ${item.color}40`,
                }}
              >
                <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold truncate">
                  {item.title}
                </p>
                <p className="text-[9px] text-[#94A3B8] truncate">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* bottom nav */}
      <div className="px-5 pb-4 pt-3 relative z-10">
        <div className="rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex justify-around py-2">
          {[Activity, Bot, Sparkles, Zap].map((Icon, i) => (
            <button
              key={i}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                i === 0
                  ? "bg-gradient-to-br from-[#FF5D01] to-[#00E5FF] text-white"
                  : "text-[#94A3B8]"
              }`}
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Phone frame wrapper for use inside the Bento grid card.
 */
const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[180px] h-[360px] rounded-[2.2rem] border-2 border-white/20 bg-[#09090B] p-1.5 shadow-[0_30px_80px_-20px_rgba(255,93,1,0.4),0_0_60px_-10px_rgba(0,229,255,0.25)]">
      {/* notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black z-20 border border-white/10" />
      <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
        <FlowPilotAppUI />
      </div>
    </div>
  );
};

export default PhoneMockup;