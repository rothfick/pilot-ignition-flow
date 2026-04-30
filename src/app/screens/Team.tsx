import { Plus, Mail } from "lucide-react";
import ScreenHeader from "../components/ScreenHeader";
import { team } from "../data/mockData";

const Team = () => {
  return (
    <>
      <ScreenHeader back title="Zespół" eyebrow={`${team.length} osób`} />
      <div className="px-6 space-y-2">
        {team.map((m) => (
          <div key={m.id} className="border border-white/[0.06] rounded-2xl p-4 flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[12px] font-serif italic">
                {m.initials}
              </div>
              <span
                className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-black ${
                  m.status === "online" ? "bg-white" : m.status === "away" ? "bg-white/40" : "bg-white/10"
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-light truncate">{m.name}</p>
              <p className="text-[10px] text-white/40 tracking-widest uppercase mt-0.5">{m.role}</p>
            </div>
            <button className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Mail className="w-3.5 h-3.5" strokeWidth={1.4} />
            </button>
          </div>
        ))}

        <button className="w-full flex items-center justify-center gap-2 border border-white/15 rounded-full py-3 text-[10px] uppercase tracking-[0.3em] text-white/70 hover:text-white hover:border-white/30 transition-colors mt-4">
          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} /> Zaproś osobę
        </button>
      </div>
    </>
  );
};

export default Team;