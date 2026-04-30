import { useState } from "react";
import { Sparkles, Zap, Mail, Instagram, Check, ArrowRight, Bot, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScreenHeader from "../components/ScreenHeader";

const triggers = [
  { icon: Instagram, label: "Nowy DM Instagram" },
  { icon: Mail, label: "Nowy email" },
  { icon: Bot, label: "Nowy lead w CRM" },
  { icon: Calendar, label: "O konkretnej godzinie" },
];

const actions = [
  { icon: Sparkles, label: "AI: napisz odpowiedź" },
  { icon: Mail, label: "Wyślij email z szablonu" },
  { icon: Zap, label: "Dodaj do pipeline" },
  { icon: Bot, label: "Powiadom zespół na Slack" },
];

const AutomationBuilder = () => {
  const [step, setStep] = useState(0);
  const [trigger, setTrigger] = useState<number | null>(null);
  const [action, setAction] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <>
      <ScreenHeader back to="/app/automations" eyebrow={`Krok ${step + 1} z 3`} title="Kreator" />

      <div className="px-6 space-y-6">
        {/* Stepper */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-0.5 flex-1 rounded-full ${i <= step ? "bg-white" : "bg-white/15"}`}
            />
          ))}
        </div>

        {step === 0 && (
          <section>
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase font-light mb-4">
              Wybierz wyzwalacz
            </p>
            <div className="space-y-2">
              {triggers.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setTrigger(i)}
                  className={`w-full flex items-center gap-3 border rounded-2xl p-4 transition-colors ${
                    trigger === i ? "border-white bg-white/[0.04]" : "border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center">
                    <t.icon className="w-4 h-4" strokeWidth={1.4} />
                  </div>
                  <span className="flex-1 text-left text-sm font-light">{t.label}</span>
                  {trigger === i && <Check className="w-4 h-4" strokeWidth={1.4} />}
                </button>
              ))}
            </div>
          </section>
        )}

        {step === 1 && (
          <section>
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase font-light mb-4">
              Wybierz akcję
            </p>
            <div className="space-y-2">
              {actions.map((a, i) => (
                <button
                  key={i}
                  onClick={() => setAction(i)}
                  className={`w-full flex items-center gap-3 border rounded-2xl p-4 transition-colors ${
                    action === i ? "border-white bg-white/[0.04]" : "border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center">
                    <a.icon className="w-4 h-4" strokeWidth={1.4} />
                  </div>
                  <span className="flex-1 text-left text-sm font-light">{a.label}</span>
                  {action === i && <Check className="w-4 h-4" strokeWidth={1.4} />}
                </button>
              ))}
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="space-y-4">
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase font-light">
              Podsumowanie
            </p>
            <div className="border border-white/[0.08] rounded-2xl p-5 space-y-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-2">Gdy</p>
                <p className="text-base font-serif italic">{trigger !== null ? triggers[trigger].label : "—"}</p>
              </div>
              <div className="border-t border-white/[0.08] pt-4">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-2">Wtedy</p>
                <p className="text-base font-serif italic">{action !== null ? actions[action].label : "—"}</p>
              </div>
            </div>
            <div>
              <label className="text-[9px] tracking-[0.3em] text-white/40 uppercase">Nazwa</label>
              <input
                defaultValue="Moja automatyzacja"
                className="w-full bg-transparent border-b border-white/15 py-2 text-base font-light focus:outline-none focus:border-white/50"
              />
            </div>
          </section>
        )}

        <button
          onClick={() => {
            if (step < 2) setStep(step + 1);
            else navigate("/app/automations");
          }}
          disabled={(step === 0 && trigger === null) || (step === 1 && action === null)}
          className="group w-full flex items-center justify-between bg-white text-black rounded-full pl-6 pr-2 py-2.5 hover:bg-white/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-light">
            {step === 2 ? "Uruchom" : "Dalej"}
          </span>
          <span className="w-9 h-9 rounded-full bg-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
          </span>
        </button>
      </div>
    </>
  );
};

export default AutomationBuilder;