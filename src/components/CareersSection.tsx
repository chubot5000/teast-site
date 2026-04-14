"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const teamImages = [
  { src: "/images/team-group-social.jpg", alt: "Team social gathering" },
  { src: "/images/team-portrait-woman.jpg", alt: "Team member portrait" },
  { src: "/images/team-brainstorm-man.jpg", alt: "Team member brainstorming" },
  { src: "/images/team-whiteboard.jpg", alt: "Team at whiteboard" },
  { src: "/images/team-mechanic.jpg", alt: "Team mechanic at work" },
  { src: "/images/team-planning.jpg", alt: "Team planning session" },
];

export default function CareersSection() {
  return (
    <section id="careers" className="bg-dark text-white py-20 md:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <ScrollReveal>
            <h2 className="font-zagma text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Build Physical AI
              <br />
              with us.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a
              href="#"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-pink text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-pink/90 transition-colors"
            >
              Join the team
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {teamImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`rounded-card overflow-hidden relative ${
                  i === 0 ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
