import { motion } from "framer-motion";

const stats = [
  { value: "+48h", label: "czas wdrożenia systemu" },
  { value: "x3", label: "wzrost konwersji zakupowej" },
  { value: "-70%", label: "mniej czasu na rutynowe zadania" },
  { value: "24/7", label: "nieprzerwana praca sztucznej inteligencji" },
];

const Stats = () => {
  return (
    <section id="stats" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] border border-white/[0.05] rounded-2xl overflow-hidden">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="bg-black/60 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between min-h-[180px]"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-light -tracking-[0.04em] text-white">
              {s.value}
            </div>
            <div className="text-xs sm:text-sm text-[#A1A1AA] font-light mt-6 leading-relaxed">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
