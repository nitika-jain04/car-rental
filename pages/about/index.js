import Navbar from "@/components/Navbar.jsx";
import PreHeroSection from "@/components/About/PreHeroSection.jsx";
import HeroSection from "@/components/About/HeroSection.jsx";
import Services from "@/components/Services.jsx";
import Support from "@/components/About/Support.jsx";
import Info from "@/components/Info.jsx";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <PreHeroSection />
      <HeroSection />
      <Services />
      <Support />
      <Info />
    </div>
  );
}
