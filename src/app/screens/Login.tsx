import { motion } from "framer-motion";
import { ArrowRight, Fingerprint } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const enterDemo = () => {
    setLoading(true);
    setTimeout(() => navigate("/app"), 700);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col px-8 pt-20 pb-10 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col justify-center"
      >
        <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-light mb-6">
          FlowPilot · Command
        </p>
        <h1 className="text-5xl font-serif font-light italic leading-[0.95] -tracking-tight mb-6">
          Witaj <br />
          z powrotem.
        </h1>
        <p className="text-sm text-white/50 leading-relaxed mb-12 max-w-[280px]">
          Twój biznes operacyjnie żyje dalej, gdy Ciebie nie ma. Zaloguj się, by zobaczyć co zdarzyło się dziś.
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-[9px] tracking-[0.3em] text-white/40 uppercase font-light">Email</label>
            <input
              defaultValue="jan@flowpilot.ai"
              className="w-full bg-transparent border-b border-white/15 py-3 text-base font-light focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>
          <div>
            <label className="text-[9px] tracking-[0.3em] text-white/40 uppercase font-light">Hasło</label>
            <input
              type="password"
              defaultValue="••••••••••"
              className="w-full bg-transparent border-b border-white/15 py-3 text-base font-light focus:outline-none focus:border-white/50 transition-colors tracking-widest"
            />
          </div>
        </div>

        <button
          onClick={enterDemo}
          disabled={loading}
          className="mt-10 group flex items-center justify-between w-full bg-white text-black rounded-full pl-7 pr-3 py-3 hover:bg-white/90 transition-all disabled:opacity-60"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-light">
            {loading ? "Logowanie..." : "Wejdź jako demo"}
          </span>
          <span className="w-9 h-9 rounded-full bg-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
          </span>
        </button>

        <button className="mt-6 flex items-center justify-center gap-3 w-full border border-white/15 rounded-full py-3 text-xs uppercase tracking-[0.3em] font-light text-white/70 hover:text-white hover:border-white/30 transition-colors">
          <Fingerprint className="w-4 h-4" strokeWidth={1.5} />
          Face ID
        </button>
      </motion.div>

      <p className="text-center text-[10px] text-white/30 tracking-widest uppercase font-light">
        v1.4 · Tryb demonstracyjny
      </p>
    </div>
  );
};

export default Login;