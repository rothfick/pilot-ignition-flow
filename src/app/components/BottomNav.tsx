import { NavLink } from "react-router-dom";
import { Activity, Users, Zap, BarChart3, Sparkles } from "lucide-react";

const items = [
  { to: "/app", end: true, icon: Activity, label: "Dashboard" },
  { to: "/app/leads", icon: Users, label: "Leady" },
  { to: "/app/ai", icon: Sparkles, label: "AI" },
  { to: "/app/automations", icon: Zap, label: "Auto" },
  { to: "/app/analytics", icon: BarChart3, label: "Stats" },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 px-4 pb-4 pt-2">
      <div className="rounded-full border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between px-2 py-1.5">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                `flex-1 flex flex-col items-center gap-0.5 py-2 rounded-full transition-all ${
                  isActive ? "bg-white text-black" : "text-white/50 hover:text-white"
                }`
              }
            >
              <it.icon className="w-4 h-4" strokeWidth={1.6} />
              <span className="text-[8.5px] uppercase tracking-[0.2em] font-light">{it.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <div className="w-28 h-[3px] rounded-full bg-white/40" />
      </div>
    </nav>
  );
};

export default BottomNav;