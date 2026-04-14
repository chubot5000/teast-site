"use client";

import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const articles = [
  {
    title: "Waabi and Volvo Autonomous Solutions Partner to Deploy Autonomous Trucks",
    tag: "Partnership",
    date: "2024",
    image: "/images/volvo-partnership-truck.png",
  },
  {
    title: "Inside Waabi World: How Neural Simulation is Changing Everything",
    tag: "Technology",
    date: "2024",
    image: "/images/simulation-perception.png",
  },
  {
    title: "The Future of Direct-to-Customer Autonomous Trucking",
    tag: "Industry",
    date: "2024",
    image: "/images/truck-car-render.png",
  },
  {
    title: "Waabi Driver: A Foundation Model for Autonomous Vehicles",
    tag: "Research",
    date: "2024",
    image: "/images/driverless-cab.png",
  },
  {
    title: "How Waabi's Simulation-First Approach Ensures Safety at Scale",
    tag: "Safety",
    date: "2024",
    image: "/images/sensor-visualization.gif",
  },
  {
    title: "Waabi Expands Fleet Operations Across Major Freight Corridors",
    tag: "Operations",
    date: "2024",
    image: "/images/fleet-trucks-dusk.jpg",
  },
  {
    title: "Mixed Reality Testing: Bridging Virtual and Physical Worlds",
    tag: "Technology",
    date: "2024",
    image: "/images/trucks-warehouse.png",
  },
  {
    title: "Building the Next Generation of Autonomous Vehicle Sensors",
    tag: "Engineering",
    date: "2024",
    image: "/images/sensor-inspection.jpg",
  },
  {
    title: "Waabi's AI Model: From Research to Real-World Deployment",
    tag: "Research",
    date: "2024",
    image: "/images/truck-urban-dallas.jpg",
  },
];

export default function InsightsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="insights" className="bg-cream text-dark py-20 md:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6">
          <div>
            <ScrollReveal>
              <h2 className="font-zagma text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
                Insights.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-dark/60 text-lg md:text-xl max-w-2xl">
                Explore technology deep dives, behind-the-scenes perspectives,
                and the ideas shaping the future of autonomy.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <a
              href="#"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              View all
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

        {/* Navigation */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-dark/30 flex items-center justify-center hover:bg-dark/10 transition-colors"
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3l-5 5 5 5" stroke="#191818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-dark/30 flex items-center justify-center hover:bg-dark/10 transition-colors"
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="#191818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {articles.map((article, i) => (
            <ScrollReveal
              key={i}
              delay={Math.min(i * 0.08, 0.4)}
              className="flex-none w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] snap-start"
            >
              <a href="#" className="group block">
                <div className="rounded-card overflow-hidden mb-4">
                  <div className="aspect-[3/2] relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 80vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-pink uppercase tracking-wider">
                    {article.tag}
                  </span>
                  <span className="text-xs text-dark/40">{article.date}</span>
                </div>
                <h3 className="text-base font-medium leading-snug group-hover:text-pink transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
