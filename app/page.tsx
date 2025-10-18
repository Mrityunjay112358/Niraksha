import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import TechBehind from "@/components/TechBehind";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Endorsements from "@/components/Endorsements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Mission />
      <TechBehind />
      <Team />
      <Gallery />
      <Endorsements />
      <Footer />
    </main>
  );
}
