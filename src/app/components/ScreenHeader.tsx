import { ChevronLeft, Bell, Settings as SettingsIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLive } from "../hooks/useLiveSimulation";

interface Props {
  eyebrow?: string;
  title: string;
  back?: boolean;
  trailing?: "bell" | "settings" | "none";
  to?: string;
}

const ScreenHeader = ({ eyebrow, title, back, trailing = "bell", to }: Props) => {
  const navigate = useNavigate();
  const { notifications } = useLive();
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <header className="px-6 pt-4 pb-5 flex items-start justify-between">
      <div className="flex items-start gap-3 min-w-0">
        {back && (
          <button
            onClick={() => (to ? navigate(to) : navigate(-1))}
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 transition-colors -ml-1 mt-0.5 shrink-0"
            aria-label="Wstecz"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
        )}
        <div className="min-w-0">
          {eyebrow && (
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase font-light mb-1">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-serif italic font-light leading-none -tracking-tight truncate">
            {title}
          </h1>
        </div>
      </div>
      {trailing === "bell" && (
        <button
          onClick={() => navigate("/app/notifications")}
          className="relative w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 transition-colors"
          aria-label="Powiadomienia"
        >
          <Bell className="w-4 h-4" strokeWidth={1.5} />
          {unread > 0 && (
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-white" />
          )}
        </button>
      )}
      {trailing === "settings" && (
        <button
          onClick={() => navigate("/app/settings")}
          className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 transition-colors"
          aria-label="Ustawienia"
        >
          <SettingsIcon className="w-4 h-4" strokeWidth={1.5} />
        </button>
      )}
    </header>
  );
};

export default ScreenHeader;