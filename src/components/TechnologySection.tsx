"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const techCards = [
  {
    eyebrow: "Experience",
    title: "Waabi World",
    video: "https://static.ext.waabi.ai/intersection-trimmed.mp4",
    href: "/insights/simulator-realism-the-new-safety-standard-for-the-av-industry",
  },
  {
    eyebrow: "Dive into",
    title: "Mixed Reality Testing",
    video: "https://static.ext.waabi.ai/Crash_variant_1.mp4",
    href: "/insights/mixed-reality-testing-pushes-the-boundaries-of-av-safety",
  },
  {
    eyebrow: "Meet the",
    title: "Waabi Driver",
    video:
      "https://static.ext.waabi.ai/Copy_of_Copy_of_Full_Video_-_Solution_Ready_Blog-VEED__1_.mp4",
    href: "/insights/introducing-the-waabi-driver",
  },
];

function TechCard({
  card,
}: {
  card: (typeof techCards)[0];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(30% round 12px)", "inset(0% round 12px)"]
  );

  return (
    <motion.div
      ref={cardRef}
      className="group relative w-full overflow-clip rounded-calc"
    >
      <a href={card.href} className="block relative">
        <motion.div
          style={{ clipPath }}
          className="relative aspect-[351/221] md:aspect-[448/336] overflow-clip rounded-calc"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={card.video} type="video/mp4" />
          </video>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </motion.div>

        {/* Text overlay */}
        <div className="absolute bottom-20 left-20 md:bottom-24 md:left-24 z-10 text-white">
          <p className="type-s-12 text-white/60 mb-4">{card.eyebrow}</p>
          <h3 className="type-z-24 md:type-z-40 text-white">{card.title}</h3>
        </div>
      </a>
    </motion.div>
  );
}

export default function TechnologySection() {
  return (
    <section
      className="bg-background text-dark relative w-full py-[var(--padding-y)]"
      data-theme="light"
    >
      {/* Header */}
      <div className="w-calc flex flex-col md:flex-row md:items-end md:justify-between gap-24 mb-48 md:mb-80">
        <h2 className="type-z-28 md:type-z-60 text-balance text-dark max-w-700">
          The technology behind Waabi.
        </h2>
        <a
          href="/insights"
          className="flex-center h-36 px-20 rounded-full border border-current/15 type-s-12 text-dark transition-colors duration-300 hover:bg-pink hover:text-white hover:border-current/0 shrink-0"
        >
          Explore the tech
        </a>
      </div>

      {/* Hero Image */}
      <div className="w-calc mb-48 md:mb-80">
        <div className="relative w-full rounded-calc overflow-clip aspect-[375/620] md:aspect-[1440/860]">
          <Image
            src="/images/truck-highway-golden.jpg"
            alt="The technology behind Waabi."
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Triple Cards */}
      <div className="w-calc grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {techCards.map((card) => (
          <TechCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
