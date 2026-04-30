import { motion } from "framer-motion";
import { ArrowLeft, Download, Share, Plus, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FlowPilotAppUI } from "@/components/PhoneMockup";
import { usePWAInstall } from "@/hooks/usePWAInstall";

const AppPreview = () => {
  const { canInstall, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSHint, setShowIOSHint] = useState(false);

  const handleInstall = async () => {
    if (canInstall) {
      await install();
    } else if (isIOS) {
      setShowIOSHint(true);
    } else {
      setShowIOSHint(true);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* ambient texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03),transparent_50%)]" />

      {/* back link */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 text-xs uppercase tracking-[0.25em] font-light text-white/70 hover:text-white hover:border-white/25 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
        Wróć
      </Link>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT: copy + install */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 border border-white/15 text-white/60 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-light mb-8">
            <span className="w-1 h-1 rounded-full bg-white/60" />
            FlowPilot Command · v1.0
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light -tracking-[0.02em] leading-[0.95] mb-8">
            Twój biznes w{" "}
            <em className="italic text-white/70">kieszeni</em>.
          </h1>

          <p className="text-base text-white/50 font-light leading-relaxed mb-10 max-w-md">
            Live feed automatyzacji, leadów i sprzedaży. Zainstaluj jako
            aplikację — działa offline, bez sklepu z aplikacjami.
          </p>

          {/* Install button */}
          {isInstalled ? (
            <div className="inline-flex items-center gap-4 border border-white/15 bg-white/[0.03] backdrop-blur-md rounded-full px-6 py-4">
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-white/80" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-light text-sm">Aplikacja zainstalowana</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
                  Sprawdź ekran główny telefonu
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={handleInstall}
              className="group inline-flex items-center gap-4 bg-white text-black font-light uppercase tracking-[0.3em] text-xs rounded-full pl-7 pr-3 py-3 hover:bg-white/90 transition-all"
            >
              Zainstaluj aplikację
              <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </button>
          )}

          {/* iOS / fallback hint */}
          {showIOSHint && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 max-w-md"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-light mb-4 flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-white/60" strokeWidth={1.5} />
                {isIOS ? "Instalacja na iPhone" : "Zainstaluj ręcznie"}
              </p>
              <ol className="text-sm text-white/60 font-light space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-white/30 font-serif italic text-base leading-none mt-0.5">01</span>
                  <span className="flex items-center gap-1.5 flex-wrap">
                    Kliknij{" "}
                    <Share className="w-3.5 h-3.5 inline text-white/70" strokeWidth={1.5} />{" "}
                    {isIOS ? "Udostępnij" : "menu przeglądarki"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 font-serif italic text-base leading-none mt-0.5">02</span>
                  <span className="flex items-center gap-1.5 flex-wrap">
                    Wybierz{" "}
                    <Plus className="w-3.5 h-3.5 inline text-white/70" strokeWidth={1.5} />{" "}
                    "Do ekranu początkowego"
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 font-serif italic text-base leading-none mt-0.5">03</span>
                  <span>Uruchom z ekranu głównego.</span>
                </li>
              </ol>
            </motion.div>
          )}

          {/* features list */}
          <ul className="mt-12 space-y-4 border-t border-white/[0.08] pt-8">
            {[
              "Działa offline",
              "Powiadomienia push",
              "Bez sklepu z aplikacjami",
              "Aktualizuje się sama",
            ].map((f, i) => (
              <li
                key={f}
                className="flex items-center gap-4 text-sm text-white/60 font-light"
              >
                <span className="text-[10px] text-white/30 font-light tracking-widest tabular-nums w-6">
                  0{i + 1}
                </span>
                <span className="w-px h-4 bg-white/15" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT: phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* monochrome glow */}
            <div className="absolute inset-0 -z-10 bg-white/[0.06] blur-3xl scale-90" />
            {/* ghost phone for depth */}
            <div className="absolute inset-0 -z-10 w-[280px] sm:w-[320px] aspect-[9/19] mx-auto rounded-[3rem] border border-white/[0.06] rotate-[8deg] translate-x-12 translate-y-6 opacity-50" />

            <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[3rem] border-[3px] border-white/15 bg-black p-2 shadow-[0_50px_140px_-20px_rgba(0,0,0,0.95)]">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black z-20 border border-white/10" />
              <div className="absolute top-1/2 -right-1 w-1 h-16 -translate-y-1/2 rounded-l-sm bg-white/15" />
              <div className="absolute top-1/3 -left-1 w-1 h-10 rounded-r-sm bg-white/15" />
              <div className="absolute top-1/2 -left-1 w-1 h-16 mt-4 rounded-r-sm bg-white/15" />

              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                <FlowPilotAppUI />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AppPreview;