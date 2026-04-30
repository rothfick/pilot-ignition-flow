import { Camera, Sparkles } from "lucide-react";

const HeadshotMockup = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      {/* Before / After cards */}
      <div className="relative w-full max-w-[320px] grid grid-cols-2 gap-3">
        {/* Before */}
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.18), transparent 55%), linear-gradient(180deg, #1f1f22 0%, #0a0a0a 100%)",
            }}
          />
          {/* silhouette */}
          <div className="absolute left-1/2 top-[28%] -translate-x-1/2 w-12 h-12 rounded-full bg-white/15 blur-[1px]" />
          <div className="absolute left-1/2 top-[55%] -translate-x-1/2 w-24 h-20 rounded-t-[3rem] bg-white/10" />
          <div className="absolute top-2 left-2 text-[8px] uppercase tracking-[0.25em] text-white/40 font-light">
            Before
          </div>
        </div>

        {/* After */}
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-amber-500/30 bg-zinc-900 shadow-[0_10px_40px_-10px_rgba(245,158,11,0.25)]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, rgba(245,158,11,0.25), transparent 55%), linear-gradient(180deg, #2a221a 0%, #0a0a0a 100%)",
            }}
          />
          <div className="absolute left-1/2 top-[26%] -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-b from-amber-200/80 to-amber-600/40" />
          <div className="absolute left-1/2 top-[53%] -translate-x-1/2 w-24 h-20 rounded-t-[3rem] bg-gradient-to-b from-zinc-200/70 to-zinc-500/20" />
          <div className="absolute top-2 left-2 text-[8px] uppercase tracking-[0.25em] text-amber-400/80 font-light flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" /> After
          </div>
          <div className="absolute bottom-2 right-2 text-[7px] uppercase tracking-[0.2em] text-white/50 font-light">
            8K · AI
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md">
        <Camera className="w-3 h-3 text-amber-400" strokeWidth={1.5} />
        <span className="text-[8px] uppercase tracking-[0.25em] text-white/70 font-light">
          AI Headshot Pro
        </span>
      </div>
    </div>
  );
};

export default HeadshotMockup;