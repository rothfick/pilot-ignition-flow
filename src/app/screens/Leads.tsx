import { Search, Filter, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLive } from "../hooks/useLiveSimulation";
import ScreenHeader from "../components/ScreenHeader";
import { LeadStatus } from "../data/mockData";
import { motion, AnimatePresence } from "framer-motion";

const statusLabel: Record<LeadStatus, string> = {
  new: "Nowy",
  contacted: "Kontakt",
  qualified: "Kwalifikowany",
  won: "Wygrany",
  lost: "Stracony",
};

const statusDot: Record<LeadStatus, string> = {
  new: "bg-white",
  contacted: "bg-white/60",
  qualified: "bg-white/80",
  won: "bg-white",
  lost: "bg-white/20",
};

const filters: (LeadStatus | "all")[] = ["all", "new", "qualified", "won"];

const Leads = () => {
  const { leads } = useLive();
  const [filter, setFilter] = useState<LeadStatus | "all">("all");
  const [query, setQuery] = useState("");

  const visible = leads.filter((l) => {
    if (filter !== "all" && l.status !== filter) return false;
    if (query && !l.name.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <ScreenHeader eyebrow={`${leads.length} kontaktów`} title="Leady" />

      <div className="px-6 space-y-4">
        <div className="flex items-center gap-2 border border-white/10 rounded-full px-4 py-2.5">
          <Search className="w-3.5 h-3.5 text-white/40" strokeWidth={1.5} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Szukaj leada..."
            className="flex-1 bg-transparent text-sm font-light placeholder:text-white/30 focus:outline-none"
          />
          <Filter className="w-3.5 h-3.5 text-white/40" strokeWidth={1.5} />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`shrink-0 text-[10px] uppercase tracking-[0.25em] font-light px-3.5 py-1.5 rounded-full border transition-colors ${
                filter === f
                  ? "bg-white text-black border-white"
                  : "border-white/15 text-white/60 hover:text-white"
              }`}
            >
              {f === "all" ? "Wszystkie" : statusLabel[f]}
            </button>
          ))}
        </div>

        <div className="border border-white/[0.06] rounded-2xl divide-y divide-white/[0.05] overflow-hidden">
          <AnimatePresence initial={false}>
            {visible.map((l) => (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0 }}
              >
                <Link to={`/app/leads/${l.id}`} className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/[0.02]">
                  <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[11px] font-serif italic shrink-0">
                    {l.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[13px] font-light truncate">{l.name}</p>
                      <span className={`w-1 h-1 rounded-full ${statusDot[l.status]}`} />
                      <span className="text-[8.5px] uppercase tracking-[0.2em] text-white/40">
                        {statusLabel[l.status]}
                      </span>
                    </div>
                    <p className="text-[10.5px] text-white/40 tracking-wide truncate mt-0.5">
                      {l.source} · {l.createdAt}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[12px] font-serif tabular-nums">
                      {l.value > 0 ? `${(l.value / 1000).toFixed(1)}k` : "—"}
                    </p>
                    <p className="text-[9px] text-white/40 mt-0.5">{l.score}</p>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-white/30 ml-1" strokeWidth={1.4} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>

          {visible.length === 0 && (
            <div className="px-6 py-10 text-center text-[11px] text-white/30 tracking-widest uppercase">
              Brak wyników
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Leads;