import { Play } from "lucide-react";

const ReelMockup = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        src="/videos/featured-cut.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Amber glow overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(36 70% 55% / 0.25), transparent 60%)",
        }}
      />

      {/* Play badge */}
      <div className="absolute right-4 top-4">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md border"
          style={{
            background: "hsl(0 0% 100% / 0.06)",
            borderColor: "hsl(36 50% 65% / 0.4)",
          }}
        >
          <Play
            className="h-3.5 w-3.5 translate-x-0.5"
            style={{ fill: "hsl(36 60% 70%)", color: "hsl(36 60% 70%)" }}
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Category chip */}
      <div className="absolute left-4 top-4">
        <span
          className="rounded-full backdrop-blur-md px-3 py-1 text-[9px] font-medium uppercase tracking-[0.25em] border"
          style={{
            background: "hsl(0 0% 100% / 0.04)",
            borderColor: "hsl(36 50% 65% / 0.25)",
            color: "hsl(36 60% 75%)",
          }}
        >
          Reel · 2026
        </span>
      </div>
    </div>
  );
};

export default ReelMockup;