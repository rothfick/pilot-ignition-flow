export interface VideoItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  src: string;
  span: string;
}

export const videos: VideoItem[] = [
  {
    id: "featured-cut",
    title: "Hero Cut",
    category: "Wyróżnione",
    client: "FlowPilot Reel",
    year: "2026",
    src: "/videos/featured-cut.mp4",
    span: "md:col-span-6 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    id: "truth-ink",
    title: "The Truth Ink",
    category: "Wirusowy hook",
    client: "Independent",
    year: "2026",
    src: "/videos/truth-ink.mp4",
    span: "md:col-span-3 aspect-[9/16]",
  },
  {
    id: "focusflow",
    title: "FocusFlow",
    category: "Historia produktu",
    client: "FocusFlow App",
    year: "2026",
    src: "/videos/focusflow.mp4",
    span: "md:col-span-3 aspect-[9/16]",
  },
  {
    id: "zen-professional",
    title: "The Zen Professional",
    category: "Film marki",
    client: "Mindful Co.",
    year: "2026",
    src: "/videos/zen-professional.mp4",
    span: "md:col-span-3 aspect-[9/16]",
  },
  {
    id: "flow-pilot",
    title: "Flow Pilot AI Lab",
    category: "Tech reel",
    client: "Flow Pilot",
    year: "2026",
    src: "/videos/flow-pilot.mp4",
    span: "md:col-span-5 aspect-[4/5]",
  },
  {
    id: "ai-productivity",
    title: "AI Productivity Hack",
    category: "Social cut",
    client: "Internal",
    year: "2026",
    src: "/videos/ai-productivity.mp4",
    span: "md:col-span-4 aspect-[9/16]",
  },
  {
    id: "psi-bohater",
    title: "Psi Bohater",
    category: "Short form",
    client: "Pet Stories",
    year: "2026",
    src: "/videos/psi-bohater.mp4",
    span: "md:col-span-6 aspect-video",
  },
  {
    id: "weekend-glitch",
    title: "The Weekend Glitch",
    category: "Mood piece",
    client: "FlowPilot Originals",
    year: "2026",
    src: "/videos/weekend-glitch.mp4",
    span: "md:col-span-6 aspect-video",
  },
];