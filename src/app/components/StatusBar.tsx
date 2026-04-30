import { Signal, Wifi, BatteryFull } from "lucide-react";
import { useEffect, useState } from "react";

const StatusBar = () => {
  const [time, setTime] = useState("9:41");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(`${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")}`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 flex items-center justify-between px-6 pt-2 pb-1 text-[11px] text-white/60 font-light tracking-tight bg-gradient-to-b from-black via-black/90 to-transparent">
      <span className="tabular-nums">{time}</span>
      <div className="flex items-center gap-1.5">
        <Signal className="w-3 h-3" strokeWidth={2} />
        <Wifi className="w-3 h-3" strokeWidth={2} />
        <BatteryFull className="w-4 h-4" strokeWidth={1.8} />
      </div>
    </div>
  );
};

export default StatusBar;