import { ArrowUpRight, Plus, Sparkles, Bot, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useLive } from "../hooks/useLiveSimulation";
import Sparkline from "../components/Sparkline";
import ScreenHeader from "../components/ScreenHeader";
import { motion, AnimatePresence } from "framer-motion";

const iconFor = (type: string) => {
  switch (type) {
    case "lead":
      return <span className="w-1.5 h-1.5 rounded-full bg-white" />;
    case "automation":
      return <Bot className="w-3 h-3 text-white/60" strokeWidth={1.4} />;
    case "ai":
      return <Sparkles className="w-3 h-3 text-white/60" strokeWidth={1.4} />;
    case "payment":
      return <Check className="w-3 h-3 text-white/60" strokeWidth={1.6} />;
    default:
      return <span className="w-1.5 h-1.5 rounded-full bg-white/40" />;
  }
};

const Dashboard = () => {
  const { revenue, revenueDelta, sparkline, leadsToday, automationsActive, uptime, conversionRate, feed } = useLive();

  return (
    <>
      <ScreenHeader eyebrow="FlowPilot" title="Command" />

      <div className="px-6 space-y-5">
        {/* HERO METRIC */}
        <div className="border-t border-b border-white/[0.08] py-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase font-light">
              Przychód · 30 dni
            </p>
            <span className="text-[10px] text-white/50 font-light tabular-nums">
              +{revenueDelta.toFixed(1)}%
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <motion.span
              key={revenue}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              className="text-[56px] font-serif font-light leading-none -tracking-tight tabular-nums"
            >
              {(revenue / 1000).toFixed(1)}
            </motion.span>
            <span className="text-white/40 text-2xl font-serif">k</span>
            <span className="text-white/40 text-xs ml-2 tracking-widest uppercase">PLN</span>
          </div>
          <Sparkline data={sparkline} height={68} className="mt-3" />
        </div>

        {/* METRIC GRID */}
        <div className="grid grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          <Metric label="Leady · dziś" value={leadsToday.toString()} delta="+3" />
          <Metric label="Automatyzacje" value={automationsActive.toString()} delta="aktywne" />
          <Metric label="Konwersja" value={`${conversionRate.toFixed(1)}%`} delta={`uptime ${uptime}%`} />
        </div>

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/app/ai"
            className="border border-white/10 rounded-2xl p-4 hover:bg-white/[0.03] transition-colors flex items-center justify-between"
          >
            <div>
              <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">AI Asystent</p>
              <p className="text-sm font-serif italic">Zapytaj</p>
            </div>
            <Sparkles className="w-4 h-4 text-white/40" strokeWidth={1.4} />
          </Link>
          <Link
            to="/app/automations/new"
            className="border border-white/10 rounded-2xl p-4 hover:bg-white/[0.03] transition-colors flex items-center justify-between"
          >
            <div>
              <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">Nowa</p>
              <p className="text-sm font-serif italic">Automatyzacja</p>
            </div>
            <Plus className="w-4 h-4 text-white/40" strokeWidth={1.4} />
          </Link>
        </div>

        {/* LIVE FEED */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase font-light">
              Live feed
            </p>
            <span className="flex items-center gap-1.5 text-[9px] tracking-[0.3em] text-white/50 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white pulse-dot" />
              On-air
            </span>
          </div>

          <div className="border border-white/[0.06] rounded-2xl divide-y divide-white/[0.05] overflow-hidden">
            <AnimatePresence initial={false}>
              {feed.slice(0, 8).map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3 px-4 py-3"
                >
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    {iconFor(event.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-light truncate">{event.title}</p>
                    <p className="text-[10px] text-white/40 tracking-wide truncate">{event.meta}</p>
                  </div>
                  <span className="text-[9px] text-white/30 tracking-widest uppercase whitespace-nowrap">
                    {event.time}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-white/30" strokeWidth={1.4} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

const Metric = ({ label, value, delta }: { label: string; value: string; delta: string }) => (
  <div className="bg-black p-4">
    <p className="text-[8px] tracking-[0.3em] text-white/30 uppercase mb-2 font-light truncate">
      {label}
    </p>
    <p className="text-2xl font-serif font-light leading-none tabular-nums">{value}</p>
    <p className="text-[9px] text-white/40 mt-2 tracking-wide truncate">{delta}</p>
  </div>
);

export default Dashboard;