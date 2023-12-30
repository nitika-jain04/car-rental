import Navbar from "@/components/Navbar";
import PreHeroSection from "@/components/Team/PreHeroSection";
import TeamMembers from "@/components/Team/TeamMembers";
import Support from "@/components/About/Support.jsx";
import Info from "@/components/Info.jsx";

export default function TeamPage() {
  return (
    <div>
      <Navbar />
      <PreHeroSection />
      <TeamMembers />
      <Support />
      <Info />
    </div>
  );
}
