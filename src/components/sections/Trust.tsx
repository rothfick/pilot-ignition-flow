import { motion } from "framer-motion";

const items = [
  "Z przeciętnej firmy zrobimy firmę premium",
  "Wzrost nowych klientów i zapytań",
  "Zdecydowanie wyróżnisz się na tle konkurencji",
  "Zaokszczędzisz setki godzin pracy",
];

const Bar = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div className="flex justify-between text-xs uppercase tracking-[0.25em] text-white/50 font-light mb-3">
      <span>{label}</span>
      <span className="text-white">{value}%</span>
    </div>
    <div className="h-px w-full bg-white/10 relative overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-white/40 to-white"
      />
    </div>
  </div>
);

const Trust = () => {
  return (
    <section id="trust" className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-xs sm:text-sm tracking-[0.4em] uppercase text-white/50 font-light mb-4"
        >
          Dlaczego warto nam zaufać
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-light -tracking-[0.03em] text-white mb-20"
        >
          Cztery powody, dla których jesteśmy <span className="italic text-white/70">inni</span>.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] rounded-2xl overflow-hidden mb-20">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-black/60 backdrop-blur-md p-10 flex gap-6 items-start min-h-[160px]"
            >
              <div className="text-4xl font-light text-white/30 -tracking-[0.05em] leading-none">
                0{i + 1}
              </div>
              <p className="text-lg text-white font-light leading-snug">{t}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-luxe p-10 space-y-10"
        >
          <Bar label="Automatyzacja procesów" value={95} />
          <Bar label="Skuteczność AI" value={99} />
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
