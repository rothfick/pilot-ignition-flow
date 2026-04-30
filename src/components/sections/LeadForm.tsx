import { motion } from "framer-motion";

const inputCls =
  "w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] text-white outline-none transition-all placeholder:text-[#94A3B8]/70";

const LeadForm = () => {
  return (
    <section id="kontakt" className="bg-black py-24 sm:py-32 px-6 border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block border border-[#FF5D01]/30 text-[#FF5D01] bg-[#FF5D01]/10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6">
            Wolne sloty: 2/5
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold -tracking-[0.04em] text-white mb-4">
            Wstąp do <span className="text-gradient-brand">Labu</span>.
          </h2>
          <p className="text-[#94A3B8] max-w-md mx-auto">
            Filtrujemy zgłoszenia. Odpowiadamy w &lt; 24h tylko jeśli pasujemy.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          action="https://formspree.io/f/YOUR_ENDPOINT_HERE"
          method="POST"
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Imię / Pseudonim"
            required
            maxLength={100}
            className={inputCls}
          />
          <input
            name="email"
            type="email"
            placeholder="Twój najlepszy E-mail"
            required
            maxLength={255}
            className={inputCls}
          />
          <textarea
            name="message"
            placeholder="Opisz swój problem (co mamy zautomatyzować?)"
            required
            rows={4}
            maxLength={1000}
            className={`${inputCls} resize-none`}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF5D01] to-[#00E5FF] text-white font-bold w-full uppercase tracking-widest rounded-xl py-4 hover:opacity-90 transition-opacity"
          >
            Inicjuj Wdrożenie
          </button>
          <p className="text-center text-xs text-[#94A3B8]/70 pt-2">
            Twoje dane są szyfrowane. Zero spamu.
          </p>
        </motion.form>
      </div>

      <footer className="mt-24 text-center text-xs text-[#94A3B8]/60 tracking-widest uppercase">
        © {new Date().getFullYear()} FlowPilot AI Lab · Made at warp speed
      </footer>
    </section>
  );
};

export default LeadForm;