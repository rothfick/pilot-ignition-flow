import { Instagram, ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import post1 from "@/assets/ig-post-1.jpg";
import post2 from "@/assets/ig-post-2.jpg";
import post3 from "@/assets/ig-post-3.jpg";

const POSTS = [
  { url: "https://www.instagram.com/p/DXvHj2_FOsC/", image: post1, likes: "1.2k", comments: "24" },
  { url: "https://www.instagram.com/p/DXvNGX1FG6l/", image: post2, likes: "980", comments: "18" },
  { url: "https://www.instagram.com/p/DXvNhdbFAcF/", image: post3, likes: "1.4k", comments: "31" },
];

const InstagramMockup = () => {
  return (
    <div className="absolute inset-0 overflow-hidden p-4 flex flex-col">
      <div className="flex items-center gap-2.5 mb-3 shrink-0">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 flex items-center justify-center">
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <a
            href="https://www.instagram.com/inkandblade.academy/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-white text-xs font-light truncate hover:underline inline-flex items-center gap-1"
          >
            @inkandblade.academy <ArrowUpRight className="w-3 h-3" />
          </a>
          <p className="text-white/40 text-[10px] font-light">SMM · Live feed</p>
        </div>
        <span className="text-[9px] text-white/40 uppercase tracking-widest font-light">
          Auto
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 flex-1 min-h-0">
        {POSTS.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-md overflow-hidden border border-white/[0.06] bg-zinc-900 group/tile block aspect-[4/5]"
          >
            <img
              src={post.image}
              alt={`Post ${i + 1} z @inkandblade.academy`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/tile:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/tile:opacity-100 transition-opacity flex items-center justify-center gap-3 text-white text-[11px] font-medium">
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3 fill-white" /> {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3 fill-white" /> {post.comments}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramMockup;
