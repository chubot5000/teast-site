"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { NavArrowLeft, NavArrowRight } from "./icons";

const cards = [
  {
    title: "Safe",
    description:
      "The combination of advanced AI and neural simulation sets a new standard for the entire industry.",
    video: "https://static.ext.waabi.ai/scene_1_v2_HD_FINAL.mp4",
  },
  {
    title: "Scalable",
    description:
      "A single, verifiable end-to-end AI model capable of reasoning serves as a shared brain powering multiple verticals.",
    video: "https://static.ext.waabi.ai/Scalable.mp4",
  },
  {
    title: "Practical",
    description:
      "Our highway and surface street capabilities enable an unprecedented Direct to Customer trucking model and seamless entry into the robotaxi market.",
    video: "https://static.ext.waabi.ai/scene_3_v5_HD_FINAL-small.mp4",
  },
];

export default function UnlockingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState(2);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Card stack transforms for desktop
  const card1Y = useTransform(scrollYProgress, [0, 0.33], ["100vh", "0vh"]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.33, 0.66], [0.9, 0.9, 0.9]);
  const card1Overlay = useTransform(scrollYProgress, [0, 0.33, 0.66], [1, 1, 1]);
  const card2Y = useTransform(scrollYProgress, [0.33, 0.66], ["100vh", "0vh"]);
  const card2Scale = useTransform(scrollYProgress, [0.33, 0.66, 1], [0.95, 0.95, 0.95]);
  const card2Overlay = useTransform(scrollYProgress, [0.33, 0.66, 1], [1, 1, 1]);
  const card3Y = useTransform(scrollYProgress, [0.66, 1], ["100vh", "0vh"]);

  const cardTransforms = [
    { y: card1Y, scale: card1Scale, overlay: card1Overlay, z: 2 },
    { y: card2Y, scale: card2Scale, overlay: card2Overlay, z: 3 },
    { y: card3Y, scale: undefined, overlay: undefined, z: 4 },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-background text-foreground relative w-full max-md:py-(--padding-y) md:h-[200vh]"
    >
      <div className="absolute top-[25vh] left-0 h-[25vh] w-30" />
      <div className="absolute top-[100vh] left-0 h-[200vh] w-30" />

      <div className="w-calc relative md:h-full md:px-90">
        <div className="flex w-full gap-40 max-md:flex-col md:h-full md:justify-between">
          {/* Left side - Image stack (desktop) */}
          <div className="relative flex flex-1 flex-col md:h-full md:max-w-527">
            <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center">
              <div className="relative w-full">
                <div className="flex-center relative size-full">
                  {/* Base image */}
                  <div className="rounded-calc relative aspect-square w-full overflow-clip">
                    <Image
                      src="/images/waabi-truck-bridge.png"
                      alt="Unlocking scale in the real world."
                      fill
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" style={{ opacity: 0 }} />
                  </div>
                  {/* Stacked video cards */}
                  {cards.map((card, i) => (
                    <motion.div
                      key={card.title}
                      className="rounded-calc absolute inset-0 overflow-clip max-md:hidden"
                      style={{
                        zIndex: cardTransforms[i].z,
                        y: cardTransforms[i].y,
                        scale: cardTransforms[i].scale,
                      }}
                    >
                      <div className="h-full w-full object-cover">
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
                      <motion.div
                        className="absolute inset-0 bg-black/50"
                        style={{ opacity: i < 2 ? cardTransforms[i].overlay : 0 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="relative flex flex-1 flex-col md:h-[200vh] md:max-w-370">
            <div className="md:flex md:h-screen md:flex-wrap md:items-center">
              <div className="flex w-full flex-col gap-20 md:gap-24">
                <div className="flex w-full justify-center">
                  <h2 className="w-calc type-z-28 md:type-z-60 text-balance">
                    <span className="flex flex-col md:max-w-[max(60%,91.8rem)]">
                      <span className="text-left">
                        Unlocking scale in the real world.
                      </span>
                    </span>
                  </h2>
                </div>
                <p className="text-s-14 md:text-s-15 text-pretty text-black/50">
                  We deliver a product that&apos;s faster, safer, more scalable,
                  and efficient—unlocking the true potential of autonomous
                  transportation.
                </p>
              </div>
            </div>

            {/* Desktop card labels */}
            <div className="sticky top-0 hidden md:flex md:h-screen md:flex-col md:items-start md:justify-center md:gap-20 pointer-events-none -mt-[100vh]">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="pointer-events-auto flex w-full cursor-pointer flex-col gap-20 max-md:hidden"
                  style={{ opacity: activeCard === i ? 1 : 0.3 }}
                  onClick={() => setActiveCard(i)}
                >
                  <p className="type-z-24 md:type-z-40">{card.title}</p>
                  {activeCard === i && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <p className="text-s-14 md:text-s-15 text-pretty text-black/50">
                        {card.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile carousel */}
          <div className="w-full py-(--padding-y) md:hidden">
            <div className="w-calc flex flex-col gap-40">
              <div className="rounded-calc relative aspect-square overflow-clip">
                <div>
                  <div className="absolute inset-0 size-full">
                    <div className="absolute inset-0">
                      <video
                        src={cards[activeCard].video}
                        autoPlay
                        playsInline
                        loop
                        muted
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-20">
                <p className="type-z-24">{cards[activeCard].title}</p>
                <div className="grid">
                  <p className="area text-s-14 text-pretty text-black/50">
                    {cards[activeCard].description}
                  </p>
                </div>
                <div className="relative h-1 w-full overflow-clip bg-black/15">
                  <div
                    className="bg-pink absolute bottom-0 left-0 h-2 w-full"
                    style={{
                      transform: `scaleX(${(activeCard + 1) / cards.length})`,
                      transformOrigin: "left",
                    }}
                  />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex gap-8">
                    <button
                      className="flex-center size-32 rounded-full border-1 border-current/15"
                      onClick={() =>
                        setActiveCard((p) => (p - 1 + cards.length) % cards.length)
                      }
                    >
                      <NavArrowLeft />
                    </button>
                    <button
                      className="flex-center size-32 rounded-full border-1 border-current/15"
                      onClick={() =>
                        setActiveCard((p) => (p + 1) % cards.length)
                      }
                    >
                      <NavArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
