import { motion } from "framer-motion";

const steps = [
  { t: "Wypełnij formularz", d: "Sprawdzimy jak możemy Ci pomóc." },
  { t: "Konsultacja", d: "Opracujemy architekturę Twojego systemu." },
  { t: "Wdrożenie WWW", d: "Stworzymy konwertującą stronę." },
  { t: "AI SMM & E-book", d: "Zautomatyzujemy Twój content i wiedzę." },
  { t: "Testy i Skalowanie", d: "Maszyna zaczyna pracować dla Ciebie." },
  { t: "Pełna Dominacja", d: "Twoja firma staje się liderem w niszy." },
];

const Plan = () => {
  return (
    <section id="plan" className="relative z-10 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-light -tracking-[0.03em] text-white mb-4"
        >
          6 etapowy plan <span className="italic text-white/70">współpracy</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-xs uppercase tracking-[0.4em] text-white/40 font-light mb-16"
        >
          Od idei do dominacji
        </motion.p>

        <div className="glass-luxe p-4 sm:p-8">
          <ol className="divide-y divide-white/5">
            {steps.map((s, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="flex items-center gap-6 sm:gap-8 py-6 sm:py-7 px-2 sm:px-4 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-sm font-light text-white/80 group-hover:border-white/40 group-hover:text-white transition-colors">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl text-white font-light tracking-tight">
                    {s.t}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] font-light mt-1">{s.d}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Plan;
