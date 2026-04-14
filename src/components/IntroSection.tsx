"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// 4 columns of cream circles with parallax, matching source layout
function CirclesBackground() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds for each column
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const circleClass =
    "bg-cream relative h-133 w-133 overflow-clip rounded-full md:h-[calc(133/1440*100vw)] md:w-[calc(133/1440*100vw)]";

  return (
    <div ref={sectionRef} className="absolute inset-0 overflow-clip">
      {/* Column 1 — far left */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[calc(calc(100%-47vw))] flex flex-col justify-between h-[150vh] will-change-transform"
      >
        <div className={circleClass} />
        <div className={circleClass} />
        <div className={circleClass} />
        <div className={circleClass} />
        <div className={circleClass} />
      </motion.div>

      {/* Column 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute left-[calc(calc(100%-(47vw+(39vw*0.5))))] flex flex-col justify-between h-[150vh] will-change-transform"
      >
        <div className={circleClass} />
        <div className={circleClass} />
        <div className={circleClass} />
        <div className={circleClass} />
      </motion.div>

      {/* Column 3 */}
      <motion.div
        style={{ y: y3 }}
        className="absolute left-[calc(calc(100%-(47vw+(39vw*0.5)+(31vw*0.5))))] flex flex-col justify-between h-[150vh] will-change-transform"
      >
        <div className={circleClass} />
        <div className={circleClass} />
        <div className={circleClass} />
        <div className={circleClass} />
        <div className={circleClass} />
      </motion.div>

      {/* Column 4 — far right */}
      <motion.div
        style={{ y: y4 }}
        className="absolute -right-140 flex flex-col justify-between h-[150vh] will-change-transform"
      >
        <div className={circleClass} />
        <div className={circleClass} />
        <div className={circleClass} />
      </motion.div>
    </div>
  );
}

export default function IntroSection() {
  return (
    <section className="relative z-10 bg-background w-full" data-theme="light">
      {/* Circles parallax area */}
      <div className="bg-background relative w-full overflow-clip h-[150vh]">
        <CirclesBackground />

        {/* Centered text overlay */}
        <div className="flex-center absolute inset-0 flex-col">
          <p className="type-z-18 md:type-z-24 relative text-black/50">
            Our revolutionary Physical AI Platform enables—for the first
            time ever—true scale.
          </p>
          <p className="type-z-18 md:type-z-24 text-dark relative max-w-558">
            We deliver a product that&apos;s faster, safer, more scalable, and
            efficient—unlocking the true potential of autonomous transportation.
          </p>
        </div>
      </div>

      {/* "Unlocking scale" section below circles */}
      <div className="w-calc pointer-events-auto relative py-[var(--padding-y)]">
        <div className="flex flex-col gap-48 md:gap-80">
          <h2 className="type-z-28 md:type-z-60 text-balance text-dark">
            Unlocking scale in the real world.
          </h2>
          <p className="type-s-15 text-black/50 max-w-670">
            This breakthrough is powered by the same AI model acting as a shared
            brain for both autonomous trucks and robotaxis.
          </p>
        </div>
      </div>
    </section>
  );
}
