import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-50 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 flex justify-between items-center"
    >
      <a href="#top" className="text-sm font-light tracking-[0.25em] text-white uppercase">
        FlowPilot<span className="text-white/40"> · </span>AI Lab
      </a>

      <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/50 font-light">
        <a href="#stats" className="hover:text-white transition-colors">Liczby</a>
        <a href="#trust" className="hover:text-white transition-colors">Zaufanie</a>
        <a href="#plan" className="hover:text-white transition-colors">Plan</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pakiety</a>
      </div>

      <a href="#kontakt" className="btn-pill !py-2 !px-5 text-xs uppercase tracking-[0.2em]">
        Kontakt
      </a>
    </motion.nav>
  );
};

export default Navbar;
