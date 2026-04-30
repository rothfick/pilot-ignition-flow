import { ChevronRight, User, Bell, Shield, Plug, Users, CreditCard, Calendar, HelpCircle, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ScreenHeader from "../components/ScreenHeader";

const groups = [
  {
    label: "Konto",
    items: [
      { icon: User, label: "Profil", to: "/app/profile" },
      { icon: Bell, label: "Powiadomienia", to: "/app/notifications" },
      { icon: Shield, label: "Bezpieczeństwo", to: "/app/settings" },
    ],
  },
  {
    label: "Workspace",
    items: [
      { icon: Plug, label: "Integracje", to: "/app/integrations" },
      { icon: Users, label: "Zespół", to: "/app/team" },
      { icon: Calendar, label: "Kalendarz", to: "/app/calendar" },
      { icon: CreditCard, label: "Rozliczenia", to: "/app/billing" },
    ],
  },
  {
    label: "Pomoc",
    items: [
      { icon: HelpCircle, label: "Wsparcie", to: "/app/settings" },
    ],
  },
];

const Settings = () => {
  const navigate = useNavigate();

  return (
    <>
      <ScreenHeader back to="/app" title="Ustawienia" trailing="none" />
      <div className="px-6 space-y-6">
        {groups.map((g) => (
          <section key={g.label}>
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-3 px-1">{g.label}</p>
            <div className="border border-white/[0.06] rounded-2xl divide-y divide-white/[0.05]">
              {g.items.map((it) => (
                <Link
                  key={it.label}
                  to={it.to}
                  className="px-4 py-3.5 flex items-center gap-3 hover:bg-white/[0.02]"
                >
                  <div className="w-8 h-8 rounded-xl border border-white/15 flex items-center justify-center">
                    <it.icon className="w-3.5 h-3.5" strokeWidth={1.4} />
                  </div>
                  <span className="flex-1 text-[13px] font-light">{it.label}</span>
                  <ChevronRight className="w-4 h-4 text-white/30" strokeWidth={1.4} />
                </Link>
              ))}
            </div>
          </section>
        ))}

        <button
          onClick={() => navigate("/app/login")}
          className="w-full flex items-center justify-center gap-2 border border-white/10 rounded-full py-3 text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white hover:border-white/20 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" strokeWidth={1.5} /> Wyloguj
        </button>

        <p className="text-center text-[10px] text-white/30 tracking-widest uppercase">v1.4 · Demo</p>
      </div>
    </>
  );
};

export default Settings;