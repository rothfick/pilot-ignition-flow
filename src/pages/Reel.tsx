import { useEffect } from "react";
import "@/components/reel/reel.css";
import BackgroundOrbs from "@/components/reel/BackgroundOrbs";
import ReelHero from "@/components/reel/ReelHero";
import BentoGallery from "@/components/reel/BentoGallery";
import ReelFooter from "@/components/reel/ReelFooter";

const Reel = () => {
  useEffect(() => {
    // Load Fraunces display font for this page
    const id = "reel-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <main className="reel-scope reel-grain relative min-h-screen overflow-x-hidden">
      <BackgroundOrbs />
      <ReelHero />
      <BentoGallery />
      <ReelFooter />
    </main>
  );
};

export default Reel;