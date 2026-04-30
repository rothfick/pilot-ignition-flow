import inkbladePreview from "@/assets/inkblade-preview.png";

const InkbladeMockup = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-7 bg-black/60 backdrop-blur border-b border-white/10 flex items-center px-3 gap-1.5 z-10">
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <div className="ml-3 flex-1 h-3 rounded bg-white/5 max-w-[140px] flex items-center px-2">
          <span className="text-[8px] text-white/40 tracking-wider">inkblade.site</span>
        </div>
      </div>
      <img
        src={inkbladePreview}
        alt="Inkblade Academy — strona internetowa"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-top pt-7 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default InkbladeMockup;
