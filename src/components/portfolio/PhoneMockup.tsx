import { motion } from "framer-motion";
import { Sparkles, Activity, ArrowUpRight } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="absolute w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      <div className="relative w-[170px] h-[340px] rounded-[34px] bg-gradient-to-b from-zinc-700 via-zinc-900 to-black p-[3px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] rotate-[-6deg] group-hover:rotate-[-3deg] transition-transform duration-500">
        <div className="w-full h-full rounded-[31px] bg-black relative overflow-hidden border border-white/10">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20 border border-white/10" />
          <div className="absolute top-1.5 left-3 right-3 flex justify-between text-[7px] text-white/70 font-light z-10">
            <span>9:41</span>
            <span>●●●</span>
          </div>
          <div className="pt-8 px-3 pb-3 h-full flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] tracking-[0.2em] text-white/40 uppercase">Command</p>
                <p className="text-white text-[11px] font-light">Dzień dobry</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/15" />
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5">
              <div className="flex items-center gap-1 text-[7px] text-white/40 uppercase tracking-widest">
                <Activity className="w-2 h-2" /> Aktywność
              </div>
              <div className="text-white text-lg font-light mt-0.5 -tracking-tight">+128</div>
              <div className="flex items-end gap-0.5 mt-1.5 h-6">
                {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-white/30 to-white rounded-sm"
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/30 to-white/5 border border-white/15 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[8px] font-light truncate">Nowy lead · A.K.</p>
                <p className="text-white/40 text-[7px]">2 min temu</p>
              </div>
              <ArrowUpRight className="w-2.5 h-2.5 text-white/40" />
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/30 to-white/5 border border-white/15" />
              <div className="flex-1 min-w-0">
                <p className="text-white text-[8px] font-light truncate">Auto-odpowiedź wysłana</p>
                <p className="text-white/40 text-[7px]">5 min temu</p>
              </div>
            </div>
            <div className="mt-auto rounded-full bg-white text-black text-[8px] py-1.5 text-center font-medium tracking-wider uppercase">
              Otwórz panel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
