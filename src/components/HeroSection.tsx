"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.65, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], [12, 0]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="text-white relative z-50 mb-[-75vh] h-[250vh] w-full md:h-[250vh]"
    >
      <div className="sticky top-0 left-0 h-svh w-full overflow-clip">
        <motion.div
          style={{ scale, borderRadius }}
          className="absolute inset-0 h-full w-full overflow-clip origin-center"
        >
          {/* Desktop Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover hidden md:block"
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
            className="absolute inset-0 h-full w-full object-cover md:hidden"
          >
            <source
              src="https://static.ext.waabi.ai/Hero_27Sec_responsive.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-60 left-20 md:bottom-48 md:left-48 z-10 flex flex-col gap-16"
        >
          <h1 className="type-z-40 md:type-z-80 text-white max-w-[80%]">
            Built to think.
          </h1>
          <p className="type-z-24 md:type-z-40 text-white/60">
            Born to haul.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
