const EbookMockup = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-white/[0.04] blur-3xl" />
      <div
        className="relative w-[150px] h-[210px] rounded-r-md rounded-l-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-105"
        style={{
          transform: "rotateY(-22deg) rotateX(6deg)",
          transformStyle: "preserve-3d",
          background: "linear-gradient(135deg, #18181b 0%, #0a0a0a 60%, #000 100%)",
        }}
      >
        <div className="absolute inset-0 rounded-r-md rounded-l-sm opacity-30 mix-blend-overlay"
          style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2), transparent 50%)" }}
        />
        <div className="absolute inset-0 p-5 flex flex-col">
          <p className="text-[8px] tracking-[0.4em] text-white/40 uppercase">FlowPilot</p>
          <div className="mt-auto">
            <h3 className="text-white text-xl font-light leading-tight tracking-tight">
              Czarny<br />
              <span className="italic text-white/70">Zeszyt</span>
            </h3>
            <div className="h-px w-8 bg-white/30 my-3" />
            <p className="text-[7px] text-white/50 font-light leading-relaxed">
              15 brutalnych zasad budowania dochodowego studia.
            </p>
          </div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/60 rounded-l-sm border-r border-white/[0.05]" />
        <div className="absolute right-0 top-1 bottom-1 w-1 bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 rounded-r-sm" />
      </div>
    </div>
  );
};

export default EbookMockup;
