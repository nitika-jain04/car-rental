import Navbar from "@/components/Navbar.jsx";
import PreHeroSection from "@/components/VehicleModels/PreHeroSection.jsx";
import HeroSection from "@/components/VehicleModels/HeroSection";
import Support from "@/components/About/Support.jsx";
import Info from "@/components/Info.jsx";

export default function ModelsPage() {
  return (
    <div>
      <Navbar />
      <PreHeroSection />
      <HeroSection />
      <Support />
      <Info />
    </div>
  );
}
