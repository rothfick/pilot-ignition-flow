import { useRef, useState } from "react";
import { Camera, ImagePlus, Loader2, Download, RefreshCw, Sparkles, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

const STYLES = [
  {
    id: "corporate",
    label: "Corporate Grey",
    sub: "Formal · Studio",
    prompt:
      "corporate headshot, formal business attire, neutral grey seamless studio background, soft flattering studio lighting, photorealistic",
  },
  {
    id: "tech",
    label: "Modern Tech Office",
    sub: "Smart Casual · Bokeh",
    prompt:
      "smart casual attire, modern tech office background with blurred depth of field, bright natural lighting, approachable and professional",
  },
  {
    id: "outdoor",
    label: "Outdoor Natural Light",
    sub: "Urban · Golden Hour",
    prompt:
      "business casual attire, outdoor modern urban setting background with natural bokeh, golden hour natural lighting, professional portrait",
  },
  {
    id: "creative",
    label: "Creative Studio",
    sub: "Trendy · Warm",
    prompt:
      "trendy stylish smart casual attire, creative design studio background, warm inviting atmosphere with subtle accent lighting",
  },
];

const Headshot = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState(STYLES[0].id);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const readFile = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Plik za duży (max 10MB)");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setOriginalImage(reader.result as string);
      setGeneratedImage(null);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) readFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) readFile(file);
  };

  const generate = async () => {
    if (!originalImage) return;
    setIsGenerating(true);
    setGeneratedImage(null);
    try {
      const style = STYLES.find((s) => s.id === selectedStyle)!;
      const { data, error } = await supabase.functions.invoke("generate-headshot", {
        body: { imageDataUrl: originalImage, stylePrompt: style.prompt },
      });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      const img = (data as any)?.image;
      if (!img) throw new Error("Brak obrazu w odpowiedzi");
      setGeneratedImage(img);
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Generowanie nie powiodło się");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-neutral-950 text-neutral-100">
      <header className="h-16 border-b border-neutral-800 sticky top-0 bg-neutral-950/80 backdrop-blur-md z-10">
        <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4 text-neutral-950" />
            </div>
            <span className="text-lg font-serif italic font-semibold">AI Headshot Pro</span>
          </div>
          <Link
            to="/"
            className="text-xs text-neutral-400 hover:text-neutral-100 flex items-center gap-1.5 uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Powrót
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif italic mb-3 leading-tight">The Preview</h1>
          <p className="text-neutral-500 text-sm italic">
            Wgraj selfie, wybierz styl. AI wygeneruje profesjonalny headshot.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="space-y-8">
            <section>
              <h2 className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-3">
                Krok 1: Twoje zdjęcie
              </h2>
              {!originalImage ? (
                <div
                  className="border-2 border-dashed border-neutral-700 rounded-xl p-10 flex flex-col items-center justify-center text-center bg-neutral-900 hover:border-amber-500/50 cursor-pointer h-[280px] transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
                    <ImagePlus className="w-7 h-7 text-neutral-400" />
                  </div>
                  <p className="text-sm text-neutral-300 font-medium">Kliknij lub przeciągnij selfie</p>
                  <p className="text-[10px] text-neutral-500 mt-1 uppercase">JPG / PNG · max 10MB</p>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="relative group rounded-xl overflow-hidden border border-neutral-800 h-[280px] bg-neutral-900">
                  <img src={originalImage} alt="Twoje zdjęcie" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => {
                        setOriginalImage(null);
                        setGeneratedImage(null);
                      }}
                      className="px-5 py-2 bg-neutral-100 text-neutral-950 rounded-full text-xs font-bold flex items-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" /> Zmień zdjęcie
                    </button>
                  </div>
                </div>
              )}
            </section>

            <AnimatePresence>
              {originalImage && (
                <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-3">
                    Krok 2: Wybierz styl
                  </h2>
                  <div className="flex flex-col gap-2">
                    {STYLES.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setSelectedStyle(style.id)}
                        className={`text-left rounded-lg p-3 border transition-all flex items-center gap-3 ${
                          selectedStyle === style.id
                            ? "border-amber-500/60 bg-amber-500/5"
                            : "border-neutral-800 hover:border-neutral-600 bg-neutral-900"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            selectedStyle === style.id ? "bg-amber-500" : "bg-neutral-700"
                          }`}
                        />
                        <div>
                          <p className="text-sm font-semibold">{style.label}</p>
                          <p className="text-[10px] text-neutral-500 mt-0.5 uppercase tracking-wider">
                            {style.sub}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={generate}
                    disabled={isGenerating}
                    className="mt-6 w-full py-4 bg-amber-500 text-neutral-950 font-bold rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-amber-500/10 hover:bg-amber-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Generuję...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" /> Wygeneruj headshot
                      </>
                    )}
                  </button>
                </motion.section>
              )}
            </AnimatePresence>
          </div>

          {/* Right */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 min-h-[480px] flex flex-col relative overflow-hidden">
              <h2 className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-4 flex items-center justify-between">
                <span>Wynik</span>
                {generatedImage && (
                  <span className="text-[10px] font-bold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-1 rounded flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Gotowe
                  </span>
                )}
              </h2>

              <div className="flex-1 flex flex-col items-center justify-center min-h-[380px]">
                {isGenerating ? (
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-4" />
                    <p className="text-amber-500 font-bold uppercase text-[10px] tracking-widest">
                      Renderuję 4K...
                    </p>
                  </div>
                ) : generatedImage ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-800 max-w-xs mx-auto">
                      <img src={generatedImage} alt="Wygenerowany headshot" className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-6 flex justify-center">
                      <a
                        href={generatedImage}
                        download={`headshot-${selectedStyle}.png`}
                        className="px-5 py-2 border border-neutral-700 bg-neutral-900 text-neutral-100 rounded-full text-xs font-semibold hover:bg-neutral-800 flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" /> Pobierz PNG
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center px-6">
                    <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-3 border border-neutral-700">
                      <Sparkles className="w-5 h-5 text-neutral-500" />
                    </div>
                    <p className="text-neutral-500 text-sm italic font-serif">
                      Twój profesjonalny headshot pojawi się tutaj.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Headshot;