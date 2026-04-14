"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale from small (zoomed out) to full as user scrolls through the 250vh section
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.2, 1]);

  return (
    <section
      ref={containerRef}
      className="text-background relative z-50 mb-[-75vh] h-[250vh] w-full md:h-[250vh]"
    >
      <div className="relative h-full w-full">
        <div className="sticky top-0 left-0 h-svh w-full">
          {/* Video container with scale animation */}
          <div className="absolute top-0 left-0 h-dvh w-full">
            <motion.div
              style={{
                scale,
              }}
              className="absolute inset-0 will-change-transform"
            >
              <div className="absolute inset-0 size-full">
                {/* Desktop Video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover hidden md:block"
                >
                  <source
                    src="https://static.ext.waabi.ai/WAABI_27s_2K_antinomy_export_250823.mp4"
                    type="video/mp4"
                  />
                </video>
                {/* Mobile Video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover md:hidden"
                >
                  <source
                    src="https://static.ext.waabi.ai/Hero_27Sec_responsive.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </motion.div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Hero Text — bottom-left aligned */}
          <div className="px-calc absolute top-0 flex h-svh w-full items-end justify-start pb-40 md:pb-90">
            <p className="type-z-24 md:type-z-40 max-w-295 text-balance md:max-w-495">
              We built our own road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
