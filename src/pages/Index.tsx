import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Trust from "@/components/sections/Trust";
import Plan from "@/components/sections/Plan";
import Pricing from "@/components/sections/Pricing";
import Portfolio from "@/components/sections/Portfolio";
import LeadForm from "@/components/sections/LeadForm";
import LiquidBackground from "@/components/LiquidBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <LiquidBackground />
      <Navbar />
      <Hero />
      <Stats />
      <Trust />
      <Plan />
      <Pricing />
      <Portfolio />
      <LeadForm />
    </main>
  );
};

export default Index;
