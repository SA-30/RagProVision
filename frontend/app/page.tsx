import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative py-5 sm:px-20 px-5">
      <Navbar />
      <HeroSection />
    </div>
  );
}
