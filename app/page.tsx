import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import TrustSection from "./components/TrustSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative z-10 w-full flex-grow flex flex-col">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TrustSection />
      <Footer />
    </div>
  );
}
