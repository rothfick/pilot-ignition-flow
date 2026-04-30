import { ArrowDown, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ReelHero = () => {
  const scrollToWork = () => {
    document.getElementById("reel-work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative z-10 flex min-h-screen flex-col px-6 py-8 md:px-12 lg:px-20">
      <nav className="flex items-start justify-between reel-fade-in">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full reel-glass-strong">
            <Sparkles className="h-4 w-4 reel-text-primary" strokeWidth={1.5} />
          </div>
          <div className="leading-tight">
            <p className="reel-font-display text-lg font-medium tracking-tight">FlowPilot</p>
            <p className="text-[10px] uppercase tracking-[0.25em] reel-text-muted">
              AI Lab · Kreatywnie
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="hidden md:flex items-center gap-2 rounded-full reel-glass px-4 py-2 text-xs uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="h-3 w-3" strokeWidth={1.5} />
            Powrót
          </Link>
          <div className="hidden items-center gap-2 rounded-full reel-glass px-4 py-2 md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: "hsl(36 50% 65%)" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "hsl(36 50% 65%)" }} />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "hsl(40 38% 94% / 0.8)" }}>
              Dostępni · 2026
            </span>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 items-center">
        <div className="max-w-5xl">
          <p
            className="mb-8 text-xs uppercase tracking-[0.4em] reel-text-primary reel-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0.8 }}
          >
            — Reel 2026 / Wybrane realizacje
          </p>

          <h1
            className="reel-font-display font-light leading-[0.95] tracking-tight reel-fade-up"
            style={{ fontSize: "clamp(2.75rem, 9vw, 8rem)", animationDelay: "0.25s" }}
          >
            Tworzymy historie,
            <br />
            które <em className="reel-text-gold font-medium not-italic">zatrzymują</em>{" "}
            <span className="italic font-light" style={{ color: "hsl(40 38% 94% / 0.9)" }}>scroll.</span>
          </h1>

          <p
            className="mt-10 max-w-xl text-base leading-relaxed reel-text-muted md:text-lg reel-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Butikowa agencja kreatywna produkująca kinowe short-formy, wirusowe hooki
            i filmy marek dla ambitnych zespołów. Tworzone klatka po klatce.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center gap-4 reel-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-3 rounded-full reel-bg-gold px-7 py-3.5 text-sm font-medium reel-shadow-glow transition-all hover:scale-[1.02]"
            >
              Zobacz reel
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={2} />
            </button>

            <Link
              to="/"
              className="rounded-full reel-glass px-7 py-3.5 text-sm font-medium transition-all hover:opacity-80"
              style={{ color: "hsl(40 38% 94% / 0.9)" }}
            >
              Wróć do FlowPilot →
            </Link>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col gap-6 reel-fade-up md:flex-row md:items-end md:justify-between"
        style={{ animationDelay: "0.9s" }}
      >
        <div className="grid grid-cols-3 gap-8 md:gap-14">
          <div>
            <p className="reel-font-display text-3xl font-medium reel-text-gold md:text-4xl">08</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] reel-text-muted">Produkcji</p>
          </div>
          <div>
            <p className="reel-font-display text-3xl font-medium reel-text-gold md:text-4xl">∞</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] reel-text-muted">Klatek stworzonych</p>
          </div>
          <div>
            <p className="reel-font-display text-3xl font-medium reel-text-gold md:text-4xl">2026</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] reel-text-muted">Aktualny reel</p>
          </div>
        </div>

        <button
          onClick={scrollToWork}
          className="group flex items-center gap-3 self-start text-xs uppercase tracking-[0.3em] reel-text-muted transition-colors hover:opacity-80 md:self-end"
          aria-label="Przewiń do realizacji"
        >
          Przewiń
          <span className="flex h-10 w-10 items-center justify-center rounded-full transition-all" style={{ border: "1px solid hsl(36 50% 65% / 0.3)" }}>
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
        </button>
      </div>
    </header>
  );
};

export default ReelHero;