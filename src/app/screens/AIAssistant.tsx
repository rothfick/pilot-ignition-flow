import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import ScreenHeader from "../components/ScreenHeader";
import { ChatMessage, initialChat } from "../data/mockData";
import { motion, AnimatePresence } from "framer-motion";

const suggestions = [
  "Pokaż top 3 leady tygodnia",
  "Napisz ofertę dla A. Kowalskiej",
  "Streszcz wyniki tego miesiąca",
  "Zaproponuj nową automatyzację",
];

const aiReply = (q: string): string => {
  if (q.toLowerCase().includes("top")) return "Top 3 leady (score): Magda Sikora 97 · Jan W. 95 · Anna K. 92. Łączna wartość 46.2k PLN. Chcesz, żebym wysłał wszystkim spersonalizowane oferty?";
  if (q.toLowerCase().includes("ofert")) return "Gotowe. Treść skupia się na ROI w 30 dni i zawiera case study Brand House. Wartość: 4 800 PLN, deadline 7 dni. Wysłać teraz, czy podejrzeć?";
  if (q.toLowerCase().includes("stres") || q.toLowerCase().includes("wyni")) return "Listopad 2026: 47.2k PLN przychodu (+12.4%), 142 leady, konwersja 18.4%. Najlepszy kanał: Instagram (42%). Słaby punkt: cold email pauzowany od 3 dni.";
  if (q.toLowerCase().includes("automat")) return "Sugeruję: gdy lead ze score >85 nie odpisze w 24h — wysyłaj follow-up SMS. Estymowany +6% konwersji. Stworzyć?";
  return "Sprawdzam dane... Twój pipeline ma 18 aktywnych leadów wartych 86.4k PLN. Najpilniejszy: Tomasz Wiśniewski czeka na umowę od 32 minut.";
};

const AIAssistant = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChat);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
    const userMsg: ChatMessage = { id: `M-${Date.now()}`, role: "user", text, time };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply: ChatMessage = { id: `M-${Date.now() + 1}`, role: "ai", text: aiReply(text), time };
      setMessages((p) => [...p, reply]);
      setTyping(false);
    }, 1100);
  };

  return (
    <div className="flex flex-col min-h-[calc(100dvh-104px)]">
      <ScreenHeader eyebrow="GPT-5 · uczy się Twojego biznesu" title="Asystent" />

      <div className="flex-1 px-6 pb-4 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  m.role === "user"
                    ? "bg-white text-black rounded-tr-sm"
                    : "border border-white/10 bg-white/[0.02] text-white/90 rounded-tl-sm"
                }`}
              >
                {m.role === "ai" && (
                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/40 mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-2.5 h-2.5" strokeWidth={1.4} /> AI
                  </p>
                )}
                <p className="text-[13px] font-light leading-relaxed">{m.text}</p>
                <p className={`text-[9px] mt-1.5 tracking-widest ${m.role === "user" ? "text-black/40" : "text-white/30"}`}>
                  {m.time}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {typing && (
          <div className="flex justify-start">
            <div className="border border-white/10 rounded-2xl px-4 py-3 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/60"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="px-6 pb-2">
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="shrink-0 text-[10px] uppercase tracking-[0.2em] font-light px-3 py-1.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 border border-white/15 rounded-full pl-5 pr-1 py-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Zapytaj asystenta..."
            className="flex-1 bg-transparent py-2 text-sm font-light placeholder:text-white/30 focus:outline-none"
          />
          <button
            onClick={() => send(input)}
            className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors"
            aria-label="Wyślij"
          >
            <Send className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;