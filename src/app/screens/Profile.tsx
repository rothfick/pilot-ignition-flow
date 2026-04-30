import ScreenHeader from "../components/ScreenHeader";
import { useLive } from "../hooks/useLiveSimulation";

const Profile = () => {
  const { revenue, leadsToday, automationsActive } = useLive();

  return (
    <>
      <ScreenHeader back to="/app/settings" title="Profil" />
      <div className="px-6 space-y-6">
        {/* Identity */}
        <div className="border-t border-b border-white/[0.08] py-6 text-center">
          <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center text-2xl font-serif italic mx-auto">
            JK
          </div>
          <p className="mt-4 text-2xl font-serif italic font-light">Jan Kowal</p>
          <p className="text-[10px] text-white/40 tracking-widest uppercase mt-2">Founder · FlowPilot AI Lab</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          <Stat label="Przychód" value={`${(revenue / 1000).toFixed(1)}k`} />
          <Stat label="Leady · dziś" value={leadsToday.toString()} />
          <Stat label="Auto" value={automationsActive.toString()} />
        </div>

        {/* Bio */}
        <div className="border border-white/[0.06] rounded-2xl p-5">
          <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase mb-3">O mnie</p>
          <p className="text-[13px] font-light leading-relaxed">
            Buduję ekskluzywną architekturę systemów AI dla biznesów premium. Precyzja nigdy nie jest dziełem przypadku.
          </p>
        </div>

        {/* Links */}
        <div className="border border-white/[0.06] rounded-2xl divide-y divide-white/[0.05]">
          {[
            { label: "Email", value: "jan@flowpilot.ai" },
            { label: "Telefon", value: "+48 600 000 000" },
            { label: "Strefa", value: "Europe/Warsaw" },
          ].map((r) => (
            <div key={r.label} className="px-4 py-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">{r.label}</span>
              <span className="text-[12px] font-light">{r.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-black p-4 text-center">
    <p className="text-xl font-serif font-light tabular-nums">{value}</p>
    <p className="text-[8px] tracking-[0.3em] text-white/30 uppercase mt-2">{label}</p>
  </div>
);

export default Profile;