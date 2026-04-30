import { Link } from "react-router-dom";

const ReelFooter = () => {
  return (
    <footer className="relative z-10 px-6 pb-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="reel-hairline mb-10" />
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="reel-font-display text-xl font-medium">FlowPilot AI Lab</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] reel-text-muted">
              Kreatywne wideo · Od 2026
            </p>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <Link
              to="/"
              className="reel-font-display text-lg italic transition-colors hover:opacity-80"
            >
              flowpilotlaunch.store
            </Link>
            <p className="text-[10px] uppercase tracking-[0.3em] reel-text-muted">
              © 2026 — Wszelkie prawa zastrzeżone
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ReelFooter;