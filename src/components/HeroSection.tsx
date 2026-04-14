"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollDownIcon } from "./icons";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Video starts fullscreen, shrinks as you scroll down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.19]);
  const borderRadius = useTransform(scale, (s) => `${16 / s}px`);
  // Text visible at start, fades out as video shrinks
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="text-background relative z-50 mb-[-75vh] h-[250vh] w-full md:h-[250vh]"
    >
      <div className="absolute top-[100vh] left-0 h-[50vh] w-30" />
      <div className="absolute top-[75vh] left-35 h-[25vh] w-30" />
      <div className="relative h-full w-full">
        <div className="sticky top-0 left-0 h-svh w-full">
          <div className="absolute top-0 left-0 h-dvh w-full">
            {/* Zoom video container */}
            <motion.div
              className="absolute inset-0 will-change-transform"
              style={{
                scale,
                borderRadius,
                overflow: "hidden",
              }}
            >
              <div>
                <div className="absolute inset-0 size-full">
                  <div className="absolute inset-0">
                    <video
                      autoPlay
                      playsInline
                      loop
                      muted
                      className="size-full object-cover"
                    >
                      <source
                        src="https://static.ext.waabi.ai/WAABI_27s_2K_antinomy_export_250823.mp4"
                        media="(min-width: 768px)"
                      />
                      <source src="https://static.ext.waabi.ai/Hero_27Sec_responsive.mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-black/20"
                style={{ opacity: overlayOpacity }}
              />
            </motion.div>
          </div>

          {/* Scroll text overlay */}
          <motion.div
            className="px-calc absolute top-0 flex h-svh w-full items-end justify-start pb-40 md:pb-90"
            style={{ opacity: textOpacity }}
          >
            <motion.div className="relative">
              <p className="type-z-24 md:type-z-40 max-w-295 text-balance md:max-w-495">
                Waabi is pioneering the future of Physical AI.
              </p>
            </motion.div>
          </motion.div>

          {/* Big heading overlay */}
          <div className="w-calc pointer-events-auto relative mt-[-100lvh] mb-[100lvh] flex h-lvh items-end justify-start py-[var(--padding-y)]">
            <div className="flex w-full pointer-events-auto">
              <h1 className="text-[7.2rem] leading-[85%] tracking-[-0.288rem] md:text-[min(14vw,15rem)] md:tracking-[min(-0.5vw,-0.6rem)] text-balance">
                <span className="flex flex-col">
                  <span className="text-left">Built to think.</span>
                  <span className="text-left">Born to haul.</span>
                </span>
              </h1>
            </div>
            <div className="relative flex">
              <div className="pointer-events-auto flex w-full items-center justify-end">
                <button
                  aria-label="Scroll Down"
                  className="flex-center bg-pink h-24 w-24 cursor-pointer rounded-full"
                >
                  <ScrollDownIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
