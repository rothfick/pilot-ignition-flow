import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Card = ({
  title,
  price,
  oldPrice,
  features,
  highlighted,
  delay,
}: {
  title: string;
  price: string;
  oldPrice?: string;
  features: string[];
  highlighted?: boolean;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    className={`relative rounded-2xl p-10 backdrop-blur-md transition-all ${
      highlighted
        ? "bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/20 md:-translate-y-4 shadow-[0_30px_80px_-20px_rgba(255,255,255,0.08)]"
        : "bg-white/[0.02] border border-white/[0.05]"
    }`}
  >
    {highlighted && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-[10px] tracking-[0.3em] uppercase font-medium">
        Najpopularniejszy
      </div>
    )}
    <p className="text-xs uppercase tracking-[0.4em] text-white/50 font-light mb-6">
      {title}
    </p>
    <div className="flex items-baseline gap-3 mb-10">
      <span className="text-5xl sm:text-6xl font-light text-white -tracking-[0.04em]">
        {price}
      </span>
      {oldPrice && (
        <span className="text-lg text-white/30 line-through font-light">
          {oldPrice}
        </span>
      )}
    </div>
    <ul className="space-y-4 mb-10">
      {features.map((f, i) => (
        <li key={i} className="flex gap-3 text-white/80 font-light text-sm">
          <Check className="w-4 h-4 mt-0.5 text-white/50 shrink-0" strokeWidth={1.5} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a href="#kontakt" className="btn-pill w-full">
      Wybieram pakiet
    </a>
  </motion.div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-light -tracking-[0.03em] text-white mb-4"
        >
          Pakiety <span className="italic text-white/70">współpracy</span>
        </motion.h2>
        <p className="text-center text-xs uppercase tracking-[0.4em] text-white/40 font-light mb-20">
          Dwa poziomy. Jedna jakość.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <Card
            title="Pakiet — Boost"
            price="888 zł"
            features={[
              "Strona WWW w 48h",
              "Podstawowa automatyzacja",
              "E-book (Twój temat)",
            ]}
            delay={0}
          />
          <Card
            title="Pakiet — Full System"
            price="4 500 zł"
            oldPrice="8 000 zł"
            features={[
              "Zaawansowane PWA",
              "Aplikacja mobilna",
              "SMM Automaton (3 miesiące w przód)",
              "E-book Premium",
            ]}
            highlighted
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
