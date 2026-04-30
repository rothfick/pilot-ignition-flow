import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const reviews = [
  {
    name: "Marek K.",
    handle: "@founder",
    text: "FlowPilot postawił mój sklep w 2 dni. System sam domyka sprzedaż.",
  },
  {
    name: "Ania W.",
    handle: "@coach",
    text: "Nikt nie wierzył w e-booka w 48h, dopóki nie zobaczyłem gotowego pliku.",
  },
  {
    name: "Tomasz R.",
    handle: "@ceo",
    text: "Aplikacja wygląda lepiej niż u konkurencji za 50k.",
  },
  {
    name: "Kasia M.",
    handle: "@creator",
    text: "Moje zasięgi wzrosły o 300% dzięki automatyzacji SMM.",
  },
];

const WallOfLove = () => {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold -tracking-[0.04em] text-white mb-16"
        >
          Przechwycone <span className="text-gradient-brand">Transmisje</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-card p-6 sm:p-7 ${i % 3 === 0 ? "md:translate-y-4" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF5D01] to-[#00E5FF] flex items-center justify-center text-white text-sm font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">
                    {r.name}
                  </div>
                  <div className="text-[#94A3B8] text-xs">{r.handle}</div>
                </div>
              </div>
              <p className="text-white/90 text-base leading-relaxed">
                "{r.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#94A3B8] mb-4 text-sm">Sprawdź na żywo:</p>
          <a
            href="https://www.instagram.com/inkandblade.academy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-card px-6 py-3 hover:border-[#FF5D01]/50 transition-colors"
          >
            <Instagram className="w-5 h-5 text-[#FF5D01]" />
            <span className="text-white font-medium">
              @inkandblade.academy
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WallOfLove;