import { useState } from "react";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import { videos, type VideoItem } from "./videos.data";

const BentoGallery = () => {
  const [active, setActive] = useState<VideoItem | null>(null);

  return (
    <section
      id="reel-work"
      className="relative z-10 px-6 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto mb-14 flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between md:mb-20">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] reel-text-primary" style={{ opacity: 0.8 }}>
            — Wybrane realizacje
          </p>
          <h2
            className="reel-font-display font-light leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
          >
            <em className="reel-text-gold font-medium">Archiwum</em>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed reel-text-muted md:text-base">
          Osiem kinowych produkcji — od wirusowych hooków po filmy marek. Kliknij
          dowolny kafelek, aby odtworzyć z dźwiękiem.
        </p>
      </div>

      <div className="reel-hairline mx-auto mb-14 max-w-7xl" />

      <div className="mx-auto grid max-w-7xl auto-rows-[minmax(0,auto)] grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        {videos.map((v) => (
          <VideoCard
            key={v.id}
            video={v}
            className={v.span}
            onOpen={setActive}
          />
        ))}
      </div>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default BentoGallery;