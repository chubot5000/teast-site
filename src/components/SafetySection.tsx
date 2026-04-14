"use client";

import ScrollReveal from "./ScrollReveal";

export default function SafetySection() {
  return (
    <section
      id="safety"
      className="relative min-h-[80vh] flex items-center px-6 lg:px-10 py-20 md:py-32"
      style={{
        backgroundImage: "url(/images/truck-traffic-dusk.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <ScrollReveal>
          <h2 className="font-zagma text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 max-w-3xl">
            Setting new standards for AV safety.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10">
            For us, safety isn&apos;t a box to check—it&apos;s a commitment we
            strengthen daily with a simulation-first approach, rigorous
            validation, and a culture where safety is everyone&apos;s job.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-dark px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Explore our approach
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-1"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
