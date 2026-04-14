import NewsBanner from "@/components/NewsBanner";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TechnologySection from "@/components/TechnologySection";
import SafetySection from "@/components/SafetySection";
import PartnersSection from "@/components/PartnersSection";
import InsightsSection from "@/components/InsightsSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NewsBanner />
      <Navigation />
      <main className="relative min-h-svh w-full">
        <HeroSection />
        <IntroSection />
        <BenefitsSection />
        <TechnologySection />
        <SafetySection />
        <PartnersSection />
        <InsightsSection />
        <CareersSection />
      </main>
      <Footer />
    </>
  );
}
