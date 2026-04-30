import { motion } from "framer-motion";

const inputCls =
  "w-full bg-transparent border-b border-white/15 py-4 px-0 text-white font-light placeholder:text-white/30 focus:border-white outline-none transition-colors";

const LeadForm = () => {
  return (
    <section
      id="kontakt"
      className="relative z-10 py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 font-light mb-6">
            Kontakt
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light -tracking-[0.03em] text-white">
            Zainicjuj swoje <span className="italic text-white/70">wdrożenie</span>.
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          action="https://formspree.io/f/YOUR_ENDPOINT_HERE"
          method="POST"
          className="space-y-2"
        >
          <input
            name="name"
            placeholder="Imię i nazwisko"
            required
            maxLength={100}
            className={inputCls}
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            required
            maxLength={255}
            className={inputCls}
          />
          <textarea
            name="message"
            placeholder="Opisz swój projekt"
            required
            rows={4}
            maxLength={1000}
            className={`${inputCls} resize-none`}
          />
          <div className="pt-10">
            <button
              type="submit"
              className="btn-pill w-full !py-4 uppercase tracking-[0.3em] text-xs"
            >
              Zainicjuj wdrożenie
            </button>
          </div>
          <p className="text-center text-xs text-white/30 pt-6 font-light tracking-wide">
            Odpowiadamy w ciągu 24 godzin.
          </p>
        </motion.form>
      </div>

      <footer className="mt-32 text-center text-xs text-white/30 tracking-[0.3em] uppercase font-light">
        © {new Date().getFullYear()} FlowPilot AI Lab
      </footer>
    </section>
  );
};

export default LeadForm;
