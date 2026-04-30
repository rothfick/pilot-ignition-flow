import { motion } from "framer-motion";
import { Check, Infinity as InfinityIcon } from "lucide-react";

const Card = ({
  title,
  price,
  oldPrice,
  priceNote,
  features,
  highlighted,
  custom,
  ctaLabel,
  delay,
}: {
  title: string;
  price: string;
  oldPrice?: string;
  priceNote?: string;
  features: string[];
  highlighted?: boolean;
  custom?: boolean;
  ctaLabel?: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    className={`relative rounded-2xl p-10 backdrop-blur-md transition-all flex flex-col ${
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
    {custom && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full border border-white/30 bg-black text-white/80 text-[10px] tracking-[0.3em] uppercase font-light">
        Indywidualnie
      </div>
    )}
    <p className="text-xs uppercase tracking-[0.4em] text-white/50 font-light mb-6">
      {title}
    </p>
    <div className="flex items-baseline gap-3 mb-10">
      <span className="text-4xl sm:text-5xl font-light text-white -tracking-[0.04em] font-serif italic">
        {price}
      </span>
      {oldPrice && (
        <span className="text-lg text-white/30 line-through font-light">
          {oldPrice}
        </span>
      )}
      {priceNote && (
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-light">
          {priceNote}
        </span>
      )}
    </div>
    <ul className="space-y-4 mb-10 flex-1">
      {features.map((f, i) => (
        <li key={i} className="flex gap-3 text-white/80 font-light text-sm">
          {custom ? (
            <InfinityIcon className="w-4 h-4 mt-0.5 text-white/50 shrink-0" strokeWidth={1.5} />
          ) : (
            <Check className="w-4 h-4 mt-0.5 text-white/50 shrink-0" strokeWidth={1.5} />
          )}
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a href="#kontakt" className="btn-pill w-full">
      {ctaLabel ?? "Wybieram pakiet"}
    </a>
  </motion.div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
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
          Trzy poziomy. Jedna jakość.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
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
          <Card
            title="Abonament — Atelier"
            price="Wycena"
            priceNote="indywidualna"
            features={[
              "Zakres dopasowany do Twojego biznesu",
              "Stała opieka i rozwój systemu",
              "Priorytetowy SLA i wsparcie 1:1",
              "Elastyczna ilość usług co miesiąc",
              "Rozliczenie miesięczne, bez umowy na czas",
            ]}
            custom
            ctaLabel="Umów rozmowę"
            delay={0.3}
          />
        </div>

        <p className="text-center text-[11px] uppercase tracking-[0.35em] text-white/30 font-light mt-12 max-w-2xl mx-auto">
          Abonament ustalamy indywidualnie — w zależności od ilości usług,
          tempa rozwoju i predyspozycji klienta.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
