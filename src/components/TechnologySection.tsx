"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const techCards = [
  {
    label: "Experience",
    title: "Waabi World",
    video: "https://static.ext.waabi.ai/intersection-trimmed.mp4",
  },
  {
    label: "Dive into",
    title: "Mixed Reality Testing",
    video: "https://static.ext.waabi.ai/Crash_variant_1.mp4",
  },
  {
    label: "Meet the",
    title: "Waabi Driver",
    video:
      "https://static.ext.waabi.ai/Copy_of_Copy_of_Full_Video_-_Solution_Ready_Blog-VEED__1_.mp4",
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="bg-cream text-dark py-20 md:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <ScrollReveal>
            <h2 className="font-zagma text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              The technology
              <br />
              behind Waabi.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a
              href="#"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              Explore the tech
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

        {/* Large hero image */}
        <ScrollReveal className="mb-12">
          <div className="rounded-card overflow-hidden aspect-[21/9] relative">
            <Image
              src="/images/truck-bridge.png"
              alt="Waabi truck on bridge"
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          </div>
        </ScrollReveal>

        {/* 3 tech cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {techCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="rounded-card overflow-hidden bg-white group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>
                </div>
                <div className="p-6">
                  <p className="text-dark/50 text-sm mb-1">{card.label}</p>
                  <h3 className="font-zagma text-2xl">{card.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
