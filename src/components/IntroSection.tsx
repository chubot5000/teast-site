"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const CIRCLE_SIZE = "h-133 w-133 md:h-[calc(133/1440*100vw)] md:w-[calc(133/1440*100vw)]";

const CHIP_IMAGES = [
  "/images/carousel/card-1.jpg",
  "/images/carousel/card-2.jpg",
  "/images/carousel/card-3.jpg",
  "/images/carousel/card-4.jpg",
  "/images/carousel/card-5.jpg",
  "/images/carousel/card-6.jpg",
  "/images/carousel/card-7.jpg",
  "/images/carousel/card-8.jpg",
  "/images/carousel/card-9.jpg",
  "/images/carousel/card-10.jpg",
  "/images/carousel/card-11.jpg",
  "/images/carousel/card-12.jpg",
  "/images/carousel/card-13.jpg",
  "/images/carousel/card-14.jpg",
  "/images/carousel/card-15.jpg",
  "/images/carousel/card-16.jpg",
];

const parallaxImages = {
  left: [
    { type: "image" as const, src: CHIP_IMAGES[0] },
    { type: "image" as const, src: CHIP_IMAGES[1] },
    { type: "image" as const, src: CHIP_IMAGES[2] },
    { type: "image" as const, src: CHIP_IMAGES[3] },
  ],
  centerLeft: [
    { type: "image" as const, src: CHIP_IMAGES[4] },
    { type: "image" as const, src: CHIP_IMAGES[5] },
    { type: "image" as const, src: CHIP_IMAGES[6] },
    { type: "image" as const, src: CHIP_IMAGES[7], extraClass: "md:opacity-0" },
  ],
  centerRight: [
    { type: "image" as const, src: CHIP_IMAGES[8] },
    { type: "image" as const, src: CHIP_IMAGES[9] },
    { type: "image" as const, src: CHIP_IMAGES[10] },
    { type: "image" as const, src: CHIP_IMAGES[11] },
  ],
  right: [
    { type: "image" as const, src: CHIP_IMAGES[12] },
    { type: "image" as const, src: CHIP_IMAGES[13] },
    { type: "image" as const, src: CHIP_IMAGES[14] },
    { type: "image" as const, src: CHIP_IMAGES[15] },
  ],
};

function MediaCircle({
  item,
  extraClass = "",
}: {
  item: { type: "image" | "video"; src: string; extraClass?: string };
  extraClass?: string;
}) {
  const cls = `relative ${CIRCLE_SIZE} overflow-clip ${extraClass} ${item.extraClass || ""}`;
  return (
    <div className={cls} style={{ borderRadius: "3px", border: "1px solid rgba(255,255,255,0.12)", background: "#1D1A17" }}>
      {item.type === "video" ? (
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
      ) : (
        <Image
          alt=""
          loading="lazy"
          fill
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 266px, 18.472222vw"
          src={item.src}
        />
      )}
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
      className="bg-[#2F2823] relative w-full overflow-clip h-[150vh]"
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
                <div className="absolute size-full rounded-full bg-[#2F2823] blur-3xl opacity-90" />
              </div>
              <p className="font-eiko relative text-[18px] md:text-[24px] leading-[1.1] text-white/50">
                CHIP Governance
              </p>
              <p className="font-eiko relative text-[18px] md:text-[24px] leading-[1.25] max-w-[558px] text-white">
                From governance rights to insurance staking, CHIP gives holders
                control over every layer of the protocol.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Transition circle */}
      <div className={`relative ${CIRCLE_SIZE} max-md:hidden absolute bottom-0 left-1/2 -translate-x-1/2`} style={{ borderRadius: "3px", border: "1px solid rgba(255,255,255,0.12)", background: "#1D1A17" }}>
        <Image
          alt=""
          fill
          className="h-full w-full object-cover"
          src="/images/carousel/card-3.jpg"
          sizes="(max-width: 768px) 266px, 18.472222vw"
        />
      </div>
    </section>
  );
}
