import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { VideoItem } from "./videos.data";

interface VideoCardProps {
  video: VideoItem;
  className?: string;
  onOpen: (video: VideoItem) => void;
}

const VideoCard = ({ video, className = "", onOpen }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={containerRef}
      onClick={() => onOpen(video)}
      className={`group relative overflow-hidden rounded-3xl reel-glass reel-shadow-card-hover transition-all duration-500 hover:-translate-y-1 focus:outline-none ${className}`}
      aria-label={`Odtwórz ${video.title}`}
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={video.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(240 16% 5% / 0.95), hsl(240 16% 5% / 0.3) 50%, hsl(240 16% 5% / 0.1))" }} />
        {!isVisible && <div className="absolute inset-0" style={{ background: "hsl(240 10% 12% / 0.4)" }} />}
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: "inset 0 0 0 1px hsl(36 70% 65% / 0.4), inset 0 0 80px hsl(36 70% 55% / 0.15)",
        }}
      />

      <div className="absolute right-5 top-5 z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full reel-glass-strong opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
          <Play className="h-4 w-4 translate-x-0.5" style={{ fill: "hsl(36 50% 65%)", color: "hsl(36 50% 65%)" }} strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute left-5 top-5 z-10">
        <span className="rounded-full reel-glass px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em]" style={{ color: "hsl(36 50% 65% / 0.9)" }}>
          {video.category}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-7 text-left">
        <h3 className="reel-font-display text-xl font-medium leading-tight md:text-2xl lg:text-3xl">
          {video.title}
        </h3>
        <div className="mt-3 flex items-center gap-3 text-xs reel-text-muted">
          <span>{video.client}</span>
          <span className="h-px w-6" style={{ background: "hsl(36 50% 65% / 0.4)" }} />
          <span className="uppercase tracking-wider">{video.year}</span>
        </div>
      </div>
    </button>
  );
};

export default VideoCard;