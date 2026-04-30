import { useState } from "react";
import { Check, Plus } from "lucide-react";
import ScreenHeader from "../components/ScreenHeader";
import { integrations as initial } from "../data/mockData";

const Integrations = () => {
  const [items, setItems] = useState(initial);

  const toggle = (id: string) => {
    setItems((p) => p.map((i) => (i.id === id ? { ...i, connected: !i.connected } : i)));
  };

  return (
    <>
      <ScreenHeader back title="Integracje" eyebrow={`${items.filter((i) => i.connected).length} podłączonych`} />
      <div className="px-6 grid grid-cols-2 gap-3">
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => toggle(it.id)}
            className={`text-left border rounded-2xl p-4 transition-colors ${
              it.connected ? "border-white/25 bg-white/[0.03]" : "border-white/[0.08] hover:bg-white/[0.02]"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-xl border border-white/15 flex items-center justify-center text-[10px] font-serif italic">
                {it.name.slice(0, 2)}
              </div>
              {it.connected ? (
                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
                  <Check className="w-3 h-3" strokeWidth={2} />
                </div>
              ) : (
                <Plus className="w-4 h-4 text-white/40" strokeWidth={1.4} />
              )}
            </div>
            <p className="text-[13px] font-light">{it.name}</p>
            <p className="text-[9.5px] text-white/40 tracking-widest uppercase mt-1">{it.category}</p>
            <p className="text-[10.5px] text-white/50 mt-2 leading-snug">{it.description}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default Integrations;