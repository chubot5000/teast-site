"use client";

import { SmoothScroll } from "@/lib/smooth-scroll";
import Nav from "@/components/chip/Nav";
import CHIPHero from "@/components/chip/CHIPHero";
import AboutSection from "@/components/chip/AboutSection";
import StatsSection from "@/components/chip/StatsSection";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SustainabilitySection from "@/components/chip/SustainabilitySection";
import WhyChipSection from "@/components/chip/WhyChipSection";
import TestimonialsSection from "@/components/chip/TestimonialsSection";
import CTASection from "@/components/chip/CTASection";
import ChipFooter from "@/components/chip/ChipFooter";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="relative min-h-svh w-full">
        <div className="flex flex-col">
          <CHIPHero />
          <AboutSection />
          <StatsSection />
          <section id="video-zoom" className="relative flex w-full flex-col">
            <HeroSection />
            <IntroSection />
          </section>
          <SustainabilitySection />
          <WhyChipSection />
          <TestimonialsSection />
          <CTASection />
        </div>
      </main>
      <ChipFooter />
    </>
  );
}
