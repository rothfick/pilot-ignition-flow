import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Bento from "@/components/sections/Bento";
import WallOfLove from "@/components/sections/WallOfLove";
import LeadForm from "@/components/sections/LeadForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#09090B] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Bento />
      <WallOfLove />
      <LeadForm />
    </main>
  );
};

export default Index;
