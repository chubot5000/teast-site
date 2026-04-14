"use client";

import { SmoothScroll } from "@/lib/smooth-scroll";
import NewsBanner from "@/components/NewsBanner";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import UnlockingSection from "@/components/UnlockingSection";
import TechnologySection from "@/components/TechnologySection";
import SafetySection from "@/components/SafetySection";
import PartnersSection from "@/components/PartnersSection";
import InsightsSection from "@/components/InsightsSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <NewsBanner />
      <Navigation />
      <main className="relative min-h-svh w-full">
        <div className="flex flex-col">
          <section id="overview" className="relative flex w-full flex-col">
            <div className="debug absolute inset-0 pointer-events-none" />
            <HeroSection />
            <IntroSection />
          </section>
          <UnlockingSection />
          <TechnologySection />
          <SafetySection />
          <PartnersSection />
          <InsightsSection />
          <CareersSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
