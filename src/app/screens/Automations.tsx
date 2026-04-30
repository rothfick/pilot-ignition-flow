import { Plus, Zap, Pause, Play, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ScreenHeader from "../components/ScreenHeader";
import { automations } from "../data/mockData";
import { useState } from "react";

const Automations = () => {
  const [items, setItems] = useState(automations);

  const toggle = (id: string) => {
    setItems((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: a.status === "active" ? "paused" : "active" }
          : a
      )
    );
  };

  const active = items.filter((a) => a.status === "active").length;

  return (
    <>
      <ScreenHeader eyebrow={`${active} aktywnych z ${items.length}`} title="Automatyzacje" />

      <div className="px-6 space-y-4">
        <Link
          to="/app/automations/new"
          className="flex items-center justify-between border border-white/15 rounded-2xl p-4 hover:bg-white/[0.03] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <Plus className="w-4 h-4" strokeWidth={1.4} />
            </div>
            <div>
              <p className="text-sm font-serif italic">Nowa automatyzacja</p>
              <p className="text-[10px] text-white/40 tracking-widest uppercase mt-0.5">
                Z szablonu lub od zera
              </p>
            </div>
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">Stwórz</span>
        </Link>

        <div className="space-y-2">
          {items.map((a) => (
            <div
              key={a.id}
              className="border border-white/[0.06] rounded-2xl p-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                  {a.status === "draft" ? (
                    <FileText className="w-3.5 h-3.5 text-white/50" strokeWidth={1.4} />
                  ) : (
                    <Zap className="w-3.5 h-3.5 text-white/70" strokeWidth={1.4} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-[13px] font-light truncate">{a.name}</p>
                    <span
                      className={`text-[8px] uppercase tracking-[0.25em] px-2 py-0.5 rounded-full border ${
                        a.status === "active"
                          ? "border-white/40 text-white"
                          : a.status === "paused"
                          ? "border-white/15 text-white/40"
                          : "border-white/10 text-white/30"
                      }`}
                    >
                      {a.status === "active" ? "On" : a.status === "paused" ? "Pauza" : "Draft"}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/45 mt-1 leading-relaxed">{a.description}</p>
                  <div className="flex items-center gap-3 mt-3 text-[9.5px] text-white/40 tracking-wide uppercase">
                    <span>{a.runs.toLocaleString("pl")} uruchomień</span>
                    <span className="w-px h-3 bg-white/15" />
                    <span>{a.successRate}% OK</span>
                    <span className="w-px h-3 bg-white/15" />
                    <span>{a.lastRun}</span>
                  </div>
                </div>
                {a.status !== "draft" && (
                  <button
                    onClick={() => toggle(a.id)}
                    className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 transition-colors shrink-0"
                    aria-label={a.status === "active" ? "Pauzuj" : "Uruchom"}
                  >
                    {a.status === "active" ? (
                      <Pause className="w-3 h-3" strokeWidth={1.4} />
                    ) : (
                      <Play className="w-3 h-3" strokeWidth={1.4} />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Automations;