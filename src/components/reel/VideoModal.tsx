import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { VideoItem } from "./videos.data";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

const VideoModal = ({ video, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    setTimeout(() => videoRef.current?.play().catch(() => {}), 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 reel-fade-in"
      onClick={onClose}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "hsl(240 20% 3% / 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />

      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full reel-glass-strong transition-all hover:scale-110 md:right-8 md:top-8"
        aria-label="Zamknij"
      >
        <X className="h-5 w-5" strokeWidth={1.5} />
      </button>

      <div
        className="relative z-10 flex w-full max-w-5xl flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-end justify-between gap-3 px-1">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "hsl(36 50% 65% / 0.8)" }}>
              {video.category}
            </p>
            <h3 className="mt-1 reel-font-display text-2xl font-medium md:text-3xl">
              {video.title}
            </h3>
          </div>
          <p className="text-xs reel-text-muted">
            {video.client} · {video.year}
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl reel-glass-strong reel-shadow-glow">
          <video
            ref={videoRef}
            src={video.src}
            controls
            playsInline
            className="h-auto max-h-[75vh] w-full bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;