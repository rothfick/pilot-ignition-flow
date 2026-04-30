import { Outlet, useLocation } from "react-router-dom";
import { LiveSimulationProvider } from "../hooks/useLiveSimulation";
import BottomNav from "./BottomNav";
import StatusBar from "./StatusBar";
import { motion, AnimatePresence } from "framer-motion";

const AppLayout = () => {
  const location = useLocation();
  const hideChrome =
    location.pathname === "/app/login" ||
    location.pathname === "/app/onboarding";

  return (
    <LiveSimulationProvider>
      <div className="min-h-[100dvh] bg-black text-white relative overflow-hidden font-light">
        {/* Ambient texture — same vibe as landing */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.04),transparent_50%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.025),transparent_50%)]" />
        <div className="pointer-events-none fixed inset-0 opacity-[0.015] [background-image:repeating-linear-gradient(0deg,#fff_0,#fff_1px,transparent_1px,transparent_4px)]" />

        {!hideChrome && <StatusBar />}

        <main className={`relative ${hideChrome ? "" : "pt-10 pb-24"} max-w-md mx-auto`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        {!hideChrome && <BottomNav />}
      </div>
    </LiveSimulationProvider>
  );
};

export default AppLayout;