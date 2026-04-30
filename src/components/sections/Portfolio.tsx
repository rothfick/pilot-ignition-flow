import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Inkblade Academy",
    tag: "WWW · Identyfikacja",
    grad: "linear-gradient(135deg, #1f1f23 0%, #0a0a0a 100%)",
  },
  {
    title: "FlowPilot Command",
    tag: "PWA · Aplikacja",
    grad: "linear-gradient(135deg, #2a2a2e 0%, #111 70%, #000 100%)",
  },
  {
    title: "Atelier Privé",
    tag: "E-book · Premium",
    grad: "linear-gradient(160deg, #18181b 0%, #27272a 50%, #09090b 100%)",
  },
  {
    title: "Noir Automation",
    tag: "SMM · System",
    grad: "linear-gradient(135deg, #0f0f10 0%, #1f1f22 100%)",
  },
];

const Portfolio = () => {
  return (
    <section className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-light -tracking-[0.03em] text-white mb-4"
        >
          Wybrane <span className="italic text-white/70">realizacje</span>
        </motion.h2>
        <p className="text-center text-xs uppercase tracking-[0.4em] text-white/40 font-light mb-20">
          Cisza, precyzja, rezultat
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href="#kontakt"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.05] bg-white/[0.02] backdrop-blur-md"
            >
              <div
                className="aspect-[4/3] w-full relative"
                style={{ background: p.grad }}
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_60%)]" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-light text-lg">{p.title}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-1 font-light">
                    {p.tag}
                  </p>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
