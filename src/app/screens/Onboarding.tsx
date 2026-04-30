import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Users, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    icon: Activity,
    eyebrow: "Krok 01",
    title: "Live feed",
    body: "Każdy lead, każda automatyzacja, każda płatność — w jednym miejscu, w czasie rzeczywistym.",
  },
  {
    icon: Sparkles,
    eyebrow: "Krok 02",
    title: "AI Asystent",
    body: "Przygotowuje oferty, ocenia leady, pisze maile. Ty zatwierdzasz jednym tapnięciem.",
  },
  {
    icon: Users,
    eyebrow: "Krok 03",
    title: "Zespół w kieszeni",
    body: "Marta widzi nowego leada zanim wstaniesz od stolika. Bartosz wdraża automatyzację z plaży.",
  },
];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const slide = slides[step];
  const Icon = slide.icon;

  const next = () => {
    if (step < slides.length - 1) setStep(step + 1);
    else navigate("/app");
  };

  return (
    <div className="min-h-[100dvh] flex flex-col px-8 pt-20 pb-10 max-w-md mx-auto">
      <button
        onClick={() => navigate("/app")}
        className="self-end text-[10px] uppercase tracking-[0.3em] text-white/40 font-light"
      >
        Pomiń
      </button>

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-16 h-16 rounded-full border border-white/15 flex items-center justify-center mb-10">
              <Icon className="w-6 h-6" strokeWidth={1.4} />
            </div>
            <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-light mb-3">
              {slide.eyebrow}
            </p>
            <h1 className="text-5xl font-serif italic font-light leading-[0.95] -tracking-tight mb-6">
              {slide.title}.
            </h1>
            <p className="text-base text-white/55 leading-relaxed max-w-[300px]">
              {slide.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all ${
                i === step ? "w-8 bg-white" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="group flex items-center gap-3 bg-white text-black rounded-full pl-6 pr-2 py-2 hover:bg-white/90 transition-all"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-light">
            {step === slides.length - 1 ? "Start" : "Dalej"}
          </span>
          <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="w-3 h-3 text-white" strokeWidth={1.5} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Onboarding;