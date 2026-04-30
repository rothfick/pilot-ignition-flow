import { useParams, Navigate } from "react-router-dom";
import { Mail, Phone, Sparkles, Check, X, MessageCircle } from "lucide-react";
import ScreenHeader from "../components/ScreenHeader";
import { useLive } from "../hooks/useLiveSimulation";

const LeadDetail = () => {
  const { id } = useParams();
  const { leads } = useLive();
  const lead = leads.find((l) => l.id === id);

  if (!lead) return <Navigate to="/app/leads" replace />;

  return (
    <>
      <ScreenHeader back to="/app/leads" eyebrow={lead.id} title="Lead" />

      <div className="px-6 space-y-5">
        {/* Identity */}
        <div className="flex items-center gap-4 border-t border-b border-white/[0.08] py-5">
          <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-base font-serif italic">
            {lead.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-2xl font-serif italic font-light leading-none">{lead.name}</p>
            <p className="text-[10px] text-white/40 tracking-widest uppercase mt-2">
              {lead.source} · {lead.createdAt}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-serif tabular-nums leading-none">{lead.score}</p>
            <p className="text-[9px] text-white/40 tracking-widest uppercase mt-1">Score</p>
          </div>
        </div>

        {/* Value & status */}
        <div className="grid grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="bg-black p-4">
            <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">Wartość</p>
            <p className="text-xl font-serif tabular-nums">
              {lead.value > 0 ? `${(lead.value / 1000).toFixed(1)}k PLN` : "—"}
            </p>
          </div>
          <div className="bg-black p-4">
            <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">Status</p>
            <p className="text-xl font-serif italic capitalize">{lead.status}</p>
          </div>
        </div>

        {/* Message */}
        <div className="border border-white/[0.08] rounded-2xl p-5">
          <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase mb-3">Wiadomość</p>
          <p className="text-sm text-white/80 leading-relaxed font-light italic">
            "{lead.message}"
          </p>
        </div>

        {/* AI suggestion */}
        <div className="border border-white/15 rounded-2xl p-5 bg-white/[0.02]">
          <p className="text-[9px] tracking-[0.3em] text-white/40 uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-3 h-3" strokeWidth={1.4} /> AI Sugeruje
          </p>
          <p className="text-sm leading-relaxed font-light mb-4">
            Wyślij ofertę pakietu <em className="font-serif italic">Premium</em> z 7-dniowym oknem. Score {lead.score}/100 wskazuje na wysoką gotowość zakupową.
          </p>
          <button className="w-full bg-white text-black rounded-full py-2.5 text-[10px] uppercase tracking-[0.3em] font-light hover:bg-white/90 transition-colors">
            Zatwierdź i wyślij
          </button>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: Mail, label: "Email" },
            { icon: Phone, label: "Połącz" },
            { icon: MessageCircle, label: "DM" },
            { icon: Check, label: "Wygrany" },
          ].map((a) => (
            <button
              key={a.label}
              className="border border-white/10 rounded-2xl py-3 flex flex-col items-center gap-1.5 hover:bg-white/[0.03] transition-colors"
            >
              <a.icon className="w-4 h-4" strokeWidth={1.4} />
              <span className="text-[8.5px] uppercase tracking-[0.2em] text-white/60">{a.label}</span>
            </button>
          ))}
        </div>

        {/* Activity */}
        <div>
          <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase font-light mb-3 px-1">
            Historia
          </p>
          <div className="border border-white/[0.06] rounded-2xl divide-y divide-white/[0.05]">
            {[
              { time: "12s", text: "Lead przechwycony przez Instagram DM" },
              { time: "8s", text: "AI ocenił score: " + lead.score + "/100" },
              { time: "—", text: "Auto-odpowiedź: w kolejce" },
            ].map((a, i) => (
              <div key={i} className="px-4 py-3 flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <p className="text-[12px] font-light flex-1">{a.text}</p>
                <span className="text-[9px] text-white/30 uppercase tracking-widest">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 border border-white/10 rounded-full py-3 text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white hover:border-white/20 transition-colors">
          <X className="w-3 h-3" strokeWidth={1.5} /> Oznacz jako stracony
        </button>
      </div>
    </>
  );
};

export default LeadDetail;