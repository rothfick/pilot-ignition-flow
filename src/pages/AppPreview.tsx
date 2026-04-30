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
    <main className="min-h-screen bg-[#09090B] text-white relative overflow-x-hidden">
      {/* back link */}
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm hover:border-white/20 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Wróć
      </Link>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: copy + install */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-block border border-[#00E5FF]/30 text-[#00E5FF] bg-[#00E5FF]/10 rounded-full px-4 py-1.5 text-xs font-medium mb-6">
            FlowPilot Command · v1.0
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold -tracking-[0.04em] leading-[0.95] mb-6">
            Twój biznes w{" "}
            <span className="text-gradient-brand">kieszeni</span>.
          </h1>

          <p className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-md">
            Live feed automatyzacji, leadów i sprzedaży. Zainstaluj jako
            aplikację — działa offline, bez sklepu z aplikacjami.
          </p>

          {/* Install button */}
          {isInstalled ? (
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
              <div className="w-10 h-10 rounded-full bg-[#00E5FF]/20 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div>
                <p className="font-semibold text-sm">Aplikacja zainstalowana</p>
                <p className="text-xs text-[#94A3B8]">
                  Sprawdź ekran główny telefonu
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={handleInstall}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FF5D01] to-[#00E5FF] text-white font-bold uppercase tracking-widest rounded-xl px-6 py-4 hover:opacity-90 transition-opacity"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              Zainstaluj aplikację
            </button>
          )}

          {/* iOS / fallback hint */}
          {showIOSHint && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 glass-card p-5 max-w-md"
            >
              <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#00E5FF]" />
                {isIOS ? "Instalacja na iPhone" : "Zainstaluj ręcznie"}
              </p>
              <ol className="text-sm text-[#94A3B8] space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5D01] font-bold">1.</span>
                  <span className="flex items-center gap-1.5">
                    Kliknij{" "}
                    <Share className="w-4 h-4 inline text-[#00E5FF]" />{" "}
                    {isIOS ? "Udostępnij" : "menu przeglądarki"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5D01] font-bold">2.</span>
                  <span className="flex items-center gap-1.5">
                    Wybierz{" "}
                    <Plus className="w-4 h-4 inline text-[#00E5FF]" />{" "}
                    "Do ekranu początkowego"
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5D01] font-bold">3.</span>
                  <span>Uruchom z ekranu głównego ⚡</span>
                </li>
              </ol>
            </motion.div>
          )}

          {/* features list */}
          <ul className="mt-10 space-y-3">
            {[
              "Działa offline",
              "Powiadomienia push",
              "Bez sklepu z aplikacjami",
              "Aktualizuje się sama",
            ].map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-sm text-[#94A3B8]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF5D01] to-[#00E5FF]" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT: phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FF5D01]/30 to-[#00E5FF]/30 blur-3xl scale-90" />

            <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[3rem] border-[3px] border-white/15 bg-[#09090B] p-2 shadow-[0_40px_120px_-20px_rgba(255,93,1,0.5),0_0_80px_-10px_rgba(0,229,255,0.3)]">
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