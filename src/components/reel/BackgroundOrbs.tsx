const BackgroundOrbs = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -top-[20%] -left-[10%] h-[55vw] w-[55vw] rounded-full opacity-60 blur-3xl reel-float-slow"
        style={{
          background:
            "radial-gradient(circle, hsl(36 70% 50% / 0.55), hsl(30 60% 35% / 0.2) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[30%] -right-[15%] h-[50vw] w-[50vw] rounded-full opacity-50 blur-3xl reel-float-mid"
        style={{
          background:
            "radial-gradient(circle, hsl(41 75% 60% / 0.45), hsl(36 50% 45% / 0.15) 55%, transparent 75%)",
        }}
      />
      <div
        className="absolute -bottom-[20%] left-[20%] h-[45vw] w-[45vw] rounded-full opacity-50 blur-3xl reel-float-fast"
        style={{
          background:
            "radial-gradient(circle, hsl(30 55% 40% / 0.5), hsl(240 20% 5% / 0.1) 60%, transparent 80%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsl(240 20% 3% / 0.7) 100%)",
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;