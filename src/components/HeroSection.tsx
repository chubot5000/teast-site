"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// ScrollDownIcon removed - using CHIP content

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
      className="relative z-50 mb-[-75vh] h-[250vh] w-full md:h-[250vh] bg-[#2F2823]"
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
                        src="https://player.vimeo.com/progressive_redirect/playback/1181739594/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5b213b7c14c572a56089e4bbaf6db817c19d321bdb40dbb18fb449a1e5095e2a"
                        type="video/mp4"
                      />
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
            className="absolute top-0 left-0 flex w-full items-end justify-start px-10 max-sm:px-4"
            style={{ height: "100vh", paddingBottom: "4rem", opacity: textOpacity }}
          >
            <motion.div className="relative">
              <h2 className="font-eiko font-normal text-white text-[24px] md:text-[40px] leading-[1.25] tracking-[-0.072rem] max-w-[500px] text-balance">
                Governing the future of GPU-backed lending.
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
