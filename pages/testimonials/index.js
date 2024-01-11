import PreHeroSection from "@/components/Testimonials/PreHeroSection";
import Testimonials from "@/components/Testimonials";
import Support from "@/components/About/Support.jsx";
import Info from "@/components/Info.jsx";

export default function TestimonialsPage() {
  return (
    <div>
      <PreHeroSection />

      <Testimonials />
      <Support />
      <Info />
    </div>
  );
}
