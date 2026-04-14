"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const CIRCLE_SIZE = "h-133 w-133 md:h-[calc(133/1440*100vw)] md:w-[calc(133/1440*100vw)]";

const parallaxImages = {
  left: [
    { type: "image" as const, src: "/images/card-5.jpg" },
    { type: "video" as const, src: "https://static.ext.waabi.ai/Scenario_3_4k_FINAL.mp4" },
    { type: "image" as const, src: "/images/card-4.jpg" },
    { type: "image" as const, src: "/images/card-9.jpg" },
  ],
  centerLeft: [
    { type: "image" as const, src: "/images/card-19.jpg" },
    { type: "video" as const, src: "https://static.ext.waabi.ai/Sim_demo_scenario_4_slow_camera-SUDDEN_BRAKE_FINAL.mp4" },
    { type: "image" as const, src: "/images/card-1.jpg" },
    { type: "image" as const, src: "/images/card-1.jpg", extraClass: "md:opacity-0" },
  ],
  centerRight: [
    { type: "image" as const, src: "/images/card-2.jpg" },
    { type: "image" as const, src: "/images/card-18.jpg" },
    { type: "video" as const, src: "https://static.ext.waabi.ai/Sim_construction_camera_slow_trimmed_w_actors_FINAL.mp4" },
    { type: "image" as const, src: "/images/card-20.jpg" },
  ],
  right: [
    { type: "image" as const, src: "/images/card-6.jpg" },
    { type: "video" as const, src: "https://static.ext.waabi.ai/Scenario_1_4k_FINAL.mp4" },
    { type: "image" as const, src: "/images/card-7.jpg" },
    { type: "image" as const, src: "/images/card-15.jpg" },
  ],
};

function MediaCircle({
  item,
  extraClass = "",
}: {
  item: { type: "image" | "video"; src: string; extraClass?: string };
  extraClass?: string;
}) {
  const cls = `rounded-calc bg-cream relative ${CIRCLE_SIZE} overflow-clip ${extraClass} ${item.extraClass || ""}`;
  if (item.type === "video") {
    return (
      <div className={cls}>
        <div className="absolute inset-0 size-full">
          <div className="absolute inset-0">
            <video
              src={item.src}
              autoPlay
              playsInline
              loop
              muted
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={cls}>
      <Image
        alt="Image parallax"
        loading="lazy"
        fill
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 266px, 18.472222vw"
        src={item.src}
      />
    </div>
  );
}

function ParallaxColumn({
  items,
  className,
  yOffset,
}: {
  items: typeof parallaxImages.left;
  className: string;
  yOffset: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);

  return (
    <motion.div
      ref={ref}
      className={`absolute flex-col justify-between flex ${className} h-[150vh] will-change-transform`}
      style={{ y }}
    >
      {items.map((item, i) => (
        <MediaCircle key={i} item={item} />
      ))}
    </motion.div>
  );
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const centerY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section
      ref={sectionRef}
      className="bg-background relative w-full overflow-clip h-[150vh]"
    >
      <div className="absolute top-0 left-0 w-30 h-[150vh]" />
      <div className="absolute inset-0 origin-top">
        <ParallaxColumn
          items={parallaxImages.left}
          className="-left-340 md:left-24"
          yOffset={600}
        />
        <ParallaxColumn
          items={parallaxImages.centerLeft}
          className="-left-110 md:left-[calc(16.667%)]"
          yOffset={0}
        />
        <ParallaxColumn
          items={parallaxImages.centerRight}
          className="-right-110 md:right-[calc(16.667%)]"
          yOffset={0}
        />
        <ParallaxColumn
          items={parallaxImages.right}
          className="-right-340 md:right-24"
          yOffset={600}
        />

        {/* Center text */}
        <div className="flex-center absolute inset-0 flex-col">
          <div className="flex-center relative">
            <motion.div
              className="relative flex max-w-295 flex-col items-center justify-center gap-18 text-center md:max-w-full"
              style={{ y: centerY }}
            >
              <div className="absolute aspect-square w-full rounded-full">
                <div className="absolute size-full rounded-full bg-white blur-2xl" />
              </div>
              <p className="type-z-18 md:type-z-24 relative text-black/50">
                We built our own road.
              </p>
              <p className="type-z-18 md:type-z-24 text-dark relative max-w-558 overflow-clip">
                Our revolutionary Physical AI Platform enables—for the first time
                ever—true scale, generalizing to different form factors,
                geographies, and environments. This breakthrough is powered by the
                same AI model acting as a shared brain for both autonomous trucks
                and robotaxis.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Transition circle */}
      <div className={`rounded-calc bg-cream relative ${CIRCLE_SIZE} max-md:hidden absolute bottom-0 left-1/2 -translate-x-1/2`}>
        <Image
          alt="Image parallax"
          fill
          className="h-full w-full object-cover"
          src="/images/card-3.jpg"
          sizes="(max-width: 768px) 266px, 18.472222vw"
        />
      </div>
    </section>
  );
}
