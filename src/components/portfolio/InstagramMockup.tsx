import { Instagram, ArrowUpRight, Heart, MessageCircle } from "lucide-react";

type Post = {
  url: string;
  /** Instagram media thumbnail (use Instagram's ?__a=1/media endpoint OR paste the image directly). */
  image: string;
  likes?: string;
  comments?: string;
};

// Real posts from @inkandblade.academy — thumbnails served via Instagram's public CDN proxy
// (we use a stable image-proxy that resolves the post's preview image).
const POSTS: Post[] = [
  {
    url: "https://www.instagram.com/p/DXvHj2_FOsC/",
    image: "https://www.instagram.com/p/DXvHj2_FOsC/media/?size=m",
    likes: "1.2k",
    comments: "24",
  },
  {
    url: "https://www.instagram.com/p/DXvNGX1FG6l/",
    image: "https://www.instagram.com/p/DXvNGX1FG6l/media/?size=m",
    likes: "980",
    comments: "18",
  },
  {
    url: "https://www.instagram.com/p/DXvNhdbFAcF/",
    image: "https://www.instagram.com/p/DXvNhdbFAcF/media/?size=m",
    likes: "1.4k",
    comments: "31",
  },
];

const InstagramMockup = () => {
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

      {/* Posts grid */}
      <div className="grid grid-cols-3 gap-1.5 flex-1 min-h-0">
        {POSTS.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-md overflow-hidden border border-white/[0.06] bg-zinc-900 group/tile block"
          >
            <img
              src={post.image}
              alt={`Post ${i + 1} z @inkandblade.academy`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/tile:scale-110"
              onError={(e) => {
                // Graceful fallback if Instagram blocks hotlinking
                const el = e.currentTarget;
                el.style.display = "none";
                const parent = el.parentElement;
                if (parent && !parent.querySelector(".ig-fallback")) {
                  const div = document.createElement("div");
                  div.className =
                    "ig-fallback absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-black";
                  div.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="rgba(255,255,255,0.4)"/></svg>';
                  parent.appendChild(div);
                }
              }}
            />
            {/* Hover overlay with stats */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/tile:opacity-100 transition-opacity flex items-center justify-center gap-3 text-white text-[10px] font-medium">
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
