import HomePage from "../components/HomePage.jsx";
import CarBooking from "@/components/CarBooking.jsx";
import Services from "@/components/Services.jsx";
import Vehicle from "@/components/Vehicle.jsx";
import Support from "@/components/Support.jsx";
import Deals from "@/components/Deals.jsx";
import Testimonials from "@/components/Testimonials.jsx";
import Faq from "@/components/Faq.jsx";
import Download from "@/components/Download.jsx";
import Info from "@/components/Info.jsx";

export default function Home() {
  return (
    <div className="font-sans">
      <HomePage />
      <CarBooking />
      <Services />
      <Vehicle />
      <Support />
      <Deals />
      <Testimonials />
      <Faq />
      <Download />
      <Info />
    </div>
  );
}
