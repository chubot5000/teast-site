"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import PillButton from "./PillButton";

const techCards = [
  {
    label: "Experience",
    title: "Waabi World",
    href: "https://www.waabi.ai/insights/simulator-realism-the-new-safety-standard-for-the-av-industry",
    video: "https://static.ext.waabi.ai/intersection-trimmed.mp4",
  },
  {
    label: "Dive into",
    title: "Mixed Reality Testing",
    href: "https://www.waabi.ai/insights/mixed-reality-testing-pushes-the-boundaries-of-av-safety",
    video: "https://static.ext.waabi.ai/Crash_variant_1.mp4",
  },
  {
    label: "Meet the",
    title: "Waabi Driver",
    href: "https://www.waabi.ai/insights/introducing-the-waabi-driver#waabi-driver",
    video: "https://static.ext.waabi.ai/Copy_of_Copy_of_Full_Video_-_Solution_Ready_Blog-VEED__1_.mp4",
  },
];

function TechCard({
  card,
  index,
}: {
  card: (typeof techCards)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="group flex-center aspect-[351/221] w-full overflow-clip rounded-[1.2rem] lg:aspect-[448/620]"
      animate={{
        clipPath: isInView
          ? "inset(0% 0% 0% 0% round 12px)"
          : "inset(0% 0% 100% 0% round 12px)",
      }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <a
        className="group/arrow group relative flex h-full w-full flex-col justify-end bg-black"
        href={card.href}
      >
        <div className="absolute inset-0 h-full w-full object-cover ease-snappy object-cover transition-transform duration-500 group-hover:scale-110">
          <div className="absolute inset-0 size-full">
            <div className="absolute inset-0">
              <video
                src={card.video}
                autoPlay
                playsInline
                loop
                muted
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative z-2 px-28 pb-24 text-white md:px-48 md:pb-36">
          <div className="relative flex flex-col gap-4 md:gap-8">
            <p className="type-s-11 md:type-s-12">{card.label}</p>
            <h2 className="type-z-24 md:type-z-40 text-balance md:pr-50">
              {card.title}
            </h2>
            <button className="flex-center size-32 rounded-full border-1 border-current/15 md:size-50 group-hover/arrow:bg-pink group-hover/arrow:border-pink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.78105 8.00047L6.46967 5.6891C6.37612 5.5955 6.32812 5.48534 6.32568 5.35862C6.32324 5.2319 6.37124 5.12174 6.46967 5.02814C6.56327 4.92971 6.67343 4.88049 6.80015 4.88049C6.92687 4.88049 7.03703 4.92971 7.13063 5.02814L9.6913 7.5888C9.73467 7.6322 9.76636 7.68064 9.78636 7.73411C9.80636 7.78758 9.81636 7.84302 9.81636 7.90047C9.81636 7.95791 9.80636 8.01335 9.78636 8.06682C9.76636 8.12029 9.73467 8.16874 9.6913 8.21214L7.12843 10.7749C7.04487 10.8585 6.94274 10.9003 6.82204 10.9003C6.70134 10.9003 6.59682 10.8585 6.50839 10.7749C6.41479 10.6814 6.36799 10.5712 6.36799 10.4444C6.36799 10.3178 6.41479 10.2076 6.50839 10.114L8.78105 8.00047Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function TechnologySection() {
  return (
    <section id="technology" className="relative flex w-full flex-col">
      <div className="debug absolute inset-0 pointer-events-none" />

      {/* Hero image with heading */}
      <section className="relative h-svh w-full overflow-clip px-24">
        <div className="relative h-full w-full">
          <div className="rounded-calc absolute inset-0 h-full w-full overflow-clip text-white">
            <div className="absolute inset-0" style={{ transform: "translateY(-12%)" }}>
              <Image
                src="/images/card-3.jpg"
                alt="The technology behind Waabi."
                fill
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative flex h-full w-full flex-col items-start justify-end gap-24 pb-40 md:gap-48 md:pb-105">
              <div className="flex w-full justify-center">
                <h2 className="w-calc text-[5.5rem] leading-[90%] tracking-[-0.22rem] md:text-[max(9rem,min(9vw,13rem))] md:tracking-[max(-0.6rem,min(-0.36vw,-0.52rem))]">
                  <span className="flex flex-col">
                    <span className="text-left">
                      The technology behind Waabi.
                    </span>
                  </span>
                </h2>
              </div>
              <div className="w-calc flex justify-start">
                <PillButton href="#insights">Explore the tech</PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three tech cards */}
      <section className="flex w-full gap-24 p-24 max-lg:flex-col">
        {techCards.map((card, i) => (
          <TechCard key={card.title} card={card} index={i} />
        ))}
      </section>
    </section>
  );
}
