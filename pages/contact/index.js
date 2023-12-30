import Navbar from "@/components/Navbar";
import PreHeroSection from "@/components/Contact/Preherosection";
import ContactCard from "@/components/Contact/ContactCard";
import Support from "@/components/About/Support";
import Info from "@/components/Info";

export default function Contactpage() {
  return (
    <div>
      <Navbar />
      <PreHeroSection />
      <ContactCard />
      <Support />
      <Info />
    </div>
  );
}
