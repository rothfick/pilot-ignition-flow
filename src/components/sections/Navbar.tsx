import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 rounded-full bg-[#09090B]/80 backdrop-blur-md border border-white/10 px-4 sm:px-6 py-3 flex justify-between items-center gap-3"
    >
      <a href="#top" className="text-sm sm:text-base font-bold text-white glow-turquoise whitespace-nowrap">
        FlowPilot <span className="text-[#00E5FF]">AI</span> Lab
      </a>

      <div className="hidden sm:flex items-center gap-2 bg-[#FF5D01]/10 text-[#FF5D01] border border-[#FF5D01]/30 rounded-full px-3 py-1 text-xs font-semibold tracking-wider">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF5D01] opacity-75 pulse-dot"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5D01]"></span>
        </span>
        STATUS: ONLINE
      </div>

      <a
        href="#kontakt"
        className="bg-[#FF5D01] text-white text-xs sm:text-sm font-semibold rounded-full px-3 sm:px-5 py-2 hover:scale-105 transition-transform whitespace-nowrap"
      >
        Rozpocznij Projekt
      </a>
    </motion.nav>
  );
};

export default Navbar;