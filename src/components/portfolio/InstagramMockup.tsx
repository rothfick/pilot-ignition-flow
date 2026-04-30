import { useEffect } from "react";
import { Instagram, ArrowUpRight } from "lucide-react";

// Replace with real post URLs from @inkandblade.academy
// (Right-click any IG post → "Copy link")
const POSTS: string[] = [
  "https://www.instagram.com/inkandblade.academy/",
  "https://www.instagram.com/inkandblade.academy/",
  "https://www.instagram.com/inkandblade.academy/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const InstagramMockup = () => {
  useEffect(() => {
    const id = "instagram-embed-script";
    const init = () => window.instgrm?.Embeds?.process();
    if (document.getElementById(id)) {
      init();
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    s.onload = init;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-3 shrink-0">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 flex items-center justify-center">
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <a
            href="https://www.instagram.com/inkandblade.academy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs font-light truncate hover:underline flex items-center gap-1"
          >
            @inkandblade.academy <ArrowUpRight className="w-3 h-3" />
          </a>
          <p className="text-white/40 text-[10px] font-light">SMM · Live feed</p>
        </div>
        <span className="text-[9px] text-white/40 uppercase tracking-widest font-light">
          Auto
        </span>
      </div>

      {/* Embeds */}
      <div className="grid grid-cols-3 gap-1 flex-1 min-h-0">
        {POSTS.map((url, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-sm overflow-hidden border border-white/[0.05] bg-white/[0.03] group/tile"
          >
            <iframe
              src={`${url.replace(/\/?$/, "/")}embed`}
              title={`Instagram post ${i + 1}`}
              loading="lazy"
              scrolling="no"
              allowTransparency
              className="absolute inset-0 w-full h-full pointer-events-none scale-[1.8] origin-top-left"
              style={{ border: 0 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/tile:opacity-100 transition-opacity pointer-events-none" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramMockup;
