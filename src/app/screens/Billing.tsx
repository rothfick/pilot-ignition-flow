import { Check, Download } from "lucide-react";
import ScreenHeader from "../components/ScreenHeader";

const invoices = [
  { id: "FV/2026/0341", date: "30.04.2026", amount: 18900, paid: true },
  { id: "FV/2026/0312", date: "01.04.2026", amount: 22500, paid: true },
  { id: "FV/2026/0287", date: "01.03.2026", amount: 12400, paid: true },
  { id: "FV/2026/0231", date: "01.02.2026", amount: 8700, paid: true },
];

const Billing = () => {
  return (
    <>
      <ScreenHeader back title="Rozliczenia" eyebrow="Plan Premium · 990 PLN/m-c" />
      <div className="px-6 space-y-5">
        {/* Plan card */}
        <div className="border border-white/15 rounded-2xl p-5 bg-white/[0.02]">
          <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-3">Aktualny plan</p>
          <p className="text-3xl font-serif italic font-light">Premium</p>
          <p className="text-[11px] text-white/50 mt-2">Odnowienie: 30 maja 2026</p>

          <ul className="mt-4 space-y-2">
            {["Nielimitowane automatyzacje", "AI Asystent z GPT-5", "5 stanowisk", "Priorytetowe wsparcie"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[11.5px] font-light text-white/70">
                <Check className="w-3 h-3" strokeWidth={1.6} /> {f}
              </li>
            ))}
          </ul>

          <button className="mt-5 w-full border border-white/20 rounded-full py-2.5 text-[10px] uppercase tracking-[0.3em] text-white/80 hover:bg-white/5 transition-colors">
            Zarządzaj subskrypcją
          </button>
        </div>

        {/* Invoices */}
        <div>
          <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-3 px-1">Faktury</p>
          <div className="border border-white/[0.06] rounded-2xl divide-y divide-white/[0.05]">
            {invoices.map((inv) => (
              <div key={inv.id} className="px-4 py-3.5 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-light">{inv.id}</p>
                  <p className="text-[10px] text-white/40 mt-0.5 tracking-widest uppercase">{inv.date}</p>
                </div>
                <p className="text-[13px] font-serif tabular-nums">{inv.amount.toLocaleString("pl")} PLN</p>
                <button className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Download className="w-3 h-3" strokeWidth={1.4} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;