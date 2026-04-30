import { useEffect } from "react";
import { Check, AlertCircle, Info } from "lucide-react";
import ScreenHeader from "../components/ScreenHeader";
import { useLive } from "../hooks/useLiveSimulation";

const Notifications = () => {
  const { notifications, markAllNotificationsRead } = useLive();

  useEffect(() => {
    const id = setTimeout(markAllNotificationsRead, 800);
    return () => clearTimeout(id);
  }, [markAllNotificationsRead]);

  return (
    <>
      <ScreenHeader back to="/app" title="Powiadomienia" trailing="settings" />
      <div className="px-6 space-y-2">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`border rounded-2xl p-4 flex gap-3 ${
              n.read ? "border-white/[0.06] opacity-60" : "border-white/15 bg-white/[0.02]"
            }`}
          >
            <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center shrink-0">
              {n.type === "success" ? (
                <Check className="w-3.5 h-3.5" strokeWidth={1.4} />
              ) : n.type === "alert" ? (
                <AlertCircle className="w-3.5 h-3.5" strokeWidth={1.4} />
              ) : (
                <Info className="w-3.5 h-3.5" strokeWidth={1.4} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] font-light truncate">{n.title}</p>
                <span className="text-[9px] text-white/40 tracking-widest uppercase whitespace-nowrap">
                  {n.time}
                </span>
              </div>
              <p className="text-[11px] text-white/50 mt-1 leading-relaxed">{n.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notifications;