import { Instagram, Heart, MessageCircle } from "lucide-react";

const tiles = [
  "linear-gradient(135deg, #18181b, #0a0a0a)",
  "linear-gradient(160deg, #1f1f23, #000)",
  "linear-gradient(135deg, #27272a, #09090b)",
  "linear-gradient(135deg, #0a0a0a, #1f1f23)",
  "linear-gradient(160deg, #18181b, #27272a)",
  "linear-gradient(135deg, #000, #18181b)",
];

const InstagramMockup = () => {
  return (
    <div className="absolute inset-0 overflow-hidden p-4 flex flex-col">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 flex items-center justify-center">
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-light truncate">@inkandblade.academy</p>
          <p className="text-white/40 text-[10px] font-light">SMM · Live</p>
        </div>
        <span className="text-[9px] text-white/40 uppercase tracking-widest font-light">Auto</span>
      </div>
      <div className="grid grid-cols-3 gap-1 flex-1">
        {tiles.map((bg, i) => (
          <div
            key={i}
            className="relative rounded-sm overflow-hidden border border-white/[0.05] group/tile"
            style={{ background: bg }}
          >
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
            <div className="absolute inset-0 flex items-end justify-between p-1.5 opacity-0 group-hover/tile:opacity-100 transition-opacity">
              <span className="flex items-center gap-0.5 text-[8px] text-white">
                <Heart className="w-2 h-2" /> 1.{i + 2}k
              </span>
              <span className="flex items-center gap-0.5 text-[8px] text-white">
                <MessageCircle className="w-2 h-2" /> {12 + i * 3}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramMockup;
