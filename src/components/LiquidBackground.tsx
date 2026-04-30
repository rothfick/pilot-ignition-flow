const LiquidBackground = () => {
  return (
    <>
      {/* subtle vignette */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 60%)",
        }}
      />
      {/* the morphing chrome blob */}
      <div
        aria-hidden
        className="liquid-blob fixed top-1/2 left-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] z-0 opacity-40 pointer-events-none"
      />
      {/* fine grain noise via SVG */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </>
  );
};

export default LiquidBackground;