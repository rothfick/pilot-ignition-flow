import { Phone, Users, Check, AlertCircle, Plus } from "lucide-react";
import ScreenHeader from "../components/ScreenHeader";
import { calendar } from "../data/mockData";

const iconFor = (t: string) => {
  switch (t) {
    case "call": return Phone;
    case "meeting": return Users;
    case "task": return Check;
    default: return AlertCircle;
  }
};

const CalendarScreen = () => {
  const days = ["Dziś", "Jutro", "Pt", "Pn"];

  return (
    <>
      <ScreenHeader back title="Kalendarz" eyebrow="Najbliższe 7 dni" />
      <div className="px-6">
        {/* Mini week strip */}
        <div className="flex justify-between mb-6 border-y border-white/[0.08] py-4">
          {["pn", "wt", "śr", "cz", "pt", "sb", "nd"].map((d, i) => (
            <div key={d} className="text-center">
              <p className="text-[8.5px] tracking-[0.3em] uppercase text-white/30 mb-2">{d}</p>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-serif italic ${
                  i === 2 ? "bg-white text-black" : "text-white/70"
                }`}
              >
                {12 + i}
              </div>
              {[0, 2, 5].includes(i) && <span className="block w-1 h-1 rounded-full bg-white/40 mx-auto mt-1.5" />}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {days.map((d) => {
            const dayEvents = calendar.filter((e) => e.date === d);
            if (dayEvents.length === 0) return null;
            return (
              <div key={d}>
                <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-3">{d}</p>
                <div className="space-y-2">
                  {dayEvents.map((e) => {
                    const Icon = iconFor(e.type);
                    return (
                      <div key={e.id} className="border border-white/[0.06] rounded-2xl p-4 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" strokeWidth={1.4} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-light truncate">{e.title}</p>
                          <p className="text-[10px] text-white/40 tracking-widest uppercase mt-0.5">
                            {e.time}{e.with ? ` · ${e.with}` : ""}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <button className="mt-6 w-full flex items-center justify-center gap-2 border border-white/15 rounded-full py-3 text-[10px] uppercase tracking-[0.3em] text-white/70 hover:text-white hover:border-white/30 transition-colors">
          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} /> Nowe wydarzenie
        </button>
      </div>
    </>
  );
};

export default CalendarScreen;