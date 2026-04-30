import ScreenHeader from "../components/ScreenHeader";
import Sparkline from "../components/Sparkline";
import { useLive } from "../hooks/useLiveSimulation";
import { sources, leadsSpark } from "../data/mockData";

const Analytics = () => {
  const { revenue, revenueDelta, sparkline, conversionRate, leadsToday } = useLive();

  return (
    <>
      <ScreenHeader eyebrow="Ostatnie 30 dni" title="Analityka" />

      <div className="px-6 space-y-6">
        {/* Revenue */}
        <div className="border-t border-b border-white/[0.08] py-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase">Przychód</p>
            <span className="text-[10px] text-white/50 tabular-nums">+{revenueDelta.toFixed(1)}%</span>
          </div>
          <p className="text-[44px] font-serif font-light leading-none tabular-nums">
            {(revenue / 1000).toFixed(1)}<span className="text-white/40 text-2xl">k</span>
            <span className="text-white/40 text-xs ml-2 tracking-widest uppercase">PLN</span>
          </p>
          <Sparkline data={sparkline} height={70} className="mt-3" />
        </div>

        {/* Leads volume */}
        <div className="border border-white/[0.06] rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase">Leady · 30 dni</p>
            <span className="text-[10px] text-white/50 tabular-nums">{leadsToday} dziś</span>
          </div>
          <p className="text-3xl font-serif font-light tabular-nums">
            {leadsSpark.reduce((a, b) => a + b, 0)}
          </p>
          <Sparkline data={leadsSpark} height={50} className="mt-3" fillOpacity={0.06} />
        </div>

        {/* Conversion */}
        <div className="grid grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="bg-black p-4">
            <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">Konwersja</p>
            <p className="text-2xl font-serif font-light tabular-nums">{conversionRate.toFixed(1)}%</p>
            <p className="text-[9px] text-white/40 mt-1.5">vs 14.2% poprzedni mies.</p>
          </div>
          <div className="bg-black p-4">
            <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">Avg. wartość</p>
            <p className="text-2xl font-serif font-light tabular-nums">8.4k</p>
            <p className="text-[9px] text-white/40 mt-1.5">+22% mom</p>
          </div>
        </div>

        {/* Sources */}
        <div>
          <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-4 px-1">Źródła leadów</p>
          <div className="space-y-3 border border-white/[0.06] rounded-2xl p-5">
            {sources.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-[12px] font-light">{s.name}</span>
                  <span className="text-[11px] text-white/50 tabular-nums">{s.value}%</span>
                </div>
                <div className="h-px bg-white/10 relative overflow-hidden rounded-full">
                  <div
                    className="absolute inset-y-0 left-0 bg-white"
                    style={{ width: `${s.value}%`, opacity: 0.3 + s.value / 100 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;