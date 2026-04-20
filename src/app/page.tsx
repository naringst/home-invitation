import Hero from "@/components/Hero";
import PartyInfo from "@/components/PartyInfo";
import MapSection from "@/components/MapSection";
import Confetti from "@/components/Confetti";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Confetti />
      <Hero />
      <PartyInfo />
      <MapSection />
      <Footer />
    </main>
  );
}
