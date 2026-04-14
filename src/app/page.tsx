"use client";

import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UnlockingScale from "@/components/UnlockingScale";
import TechnologySection from "@/components/TechnologySection";
import SafetySection from "@/components/SafetySection";
import PartnersSection from "@/components/PartnersSection";
import InsightsSection from "@/components/InsightsSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Navbar />
      <HeroSection />
      <UnlockingScale />
      <TechnologySection />
      <SafetySection />
      <PartnersSection />
      <InsightsSection />
      <CareersSection />
      <Footer />
    </main>
  );
}
