"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -150]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-white py-[var(--padding-y)] overflow-clip"
      data-theme="light"
    >
      {/* Decorative Circles */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-133 -left-110 rounded-calc bg-cream h-133 w-133 overflow-clip opacity-60 hidden md:block"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[25vh] -right-110 rounded-calc bg-cream h-133 w-133 overflow-clip opacity-60 hidden md:block"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-30svh] -left-340 rounded-calc bg-cream h-133 w-133 overflow-clip opacity-60 hidden md:block"
      />

      <div className="w-calc flex flex-col items-center text-center gap-48 md:gap-80">
        {/* Subtitle */}
        <p className="type-z-18 md:type-z-24 relative text-black/50">
          We built our own road.
        </p>

        {/* Main Copy */}
        <div className="flex flex-col gap-32 max-w-980 mx-auto">
          <p className="type-s-15 md:type-s-15 text-black/50 max-w-670 mx-auto text-balance">
            Our revolutionary Physical AI Platform enables—for the first time
            ever—true scale, generalizing to different form factors, geographies,
            and environments.
          </p>
          <h2 className="type-z-34 md:type-z-60 text-dark text-balance">
            This breakthrough is powered by the same AI model acting as a shared
            brain for both autonomous trucks and robotaxis.
          </h2>
        </div>
      </div>
    </section>
  );
}
