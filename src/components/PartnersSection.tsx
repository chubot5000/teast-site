"use client";

import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const partners = [
  {
    name: "Volvo",
    logo: "VOLVO",
    quote:
      "Waabi's AI-first approach to autonomous driving aligns perfectly with our vision for the future of transportation. Together, we're making autonomous trucking a reality.",
    author: "Nils Jaeger",
    title: "CEO of Volvo Autonomous Solutions",
    bg: "/images/volvo-truck-highway.jpg",
  },
  {
    name: "Uber",
    logo: "Uber",
    quote:
      "Waabi represents the cutting edge of autonomous vehicle technology. Their simulation-first approach is exactly what the industry needs to scale safely.",
    author: "Dara Khosrowshahi",
    title: "CEO of Uber",
    bg: "/images/truck-highway-golden.jpg",
  },
  {
    name: "Uber Freight",
    logo: "Uber Freight",
    quote:
      "Working with Waabi has been transformative. Their technology is not just impressive—it delivers real commercial value for our freight operations.",
    author: "Olivia Hu",
    title: "Head of Autonomous Trucking",
    bg: "/images/uber-freight-truck.jpg",
  },
  {
    name: "NVIDIA",
    logo: "NVIDIA",
    quote:
      "Waabi's foundation model approach to autonomous driving is a breakthrough. It's the kind of innovation that will define the next era of AI.",
    author: "Jensen Huang",
    title: "Founder and CEO of NVIDIA",
    bg: "/images/waabi-nvidia-logos.png",
  },
];

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="partners"
      className="bg-dark text-white py-20 md:py-32 px-6 lg:px-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <h2 className="font-zagma text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Trusted by the best
            <br />
            in the industry.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-12">
            From hardware providers and OEMs to retailers, logistics providers
            and carriers, the best in the business count on Waabi to deliver real
            results.
          </p>
        </ScrollReveal>

        {/* Navigation buttons */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3l-5 5 5 5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 3l5 5-5 5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {partners.map((partner, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              className="flex-none w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] snap-start"
            >
              <div className="rounded-card overflow-hidden relative h-[500px] md:h-[550px] group">
                <Image
                  src={partner.bg}
                  alt={partner.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-white text-xl font-zagma mb-1">
                    {partner.logo}
                  </p>
                  <p className="text-white/80 text-base leading-relaxed mb-6 line-clamp-4">
                    &ldquo;{partner.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {partner.author}
                    </p>
                    <p className="text-white/60 text-sm">{partner.title}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
