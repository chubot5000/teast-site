"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const SUSTAINABILITY_ITEMS = [
  {
    title: "GPU-Speed Lending",
    description: "Instant, on-chain financing that moves at the tempo hardware demands.",
  },
  {
    title: "Tokenized Collateral",
    description: "GPU hardware becomes liquid collateral with transparent, real-time valuation.",
  },
];

export default function SustainabilitySection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const inView = rect.top < vh * 0.5 && rect.bottom > 0;
      const past = rect.bottom < 0;
      setIsDark(inView || past);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`relative py-[180px] max-lg:py-28 max-sm:py-20 transition-colors duration-500 ${
        isDark ? "bg-[#2F2823]" : "bg-[#F7F3EE]"
      }`}
    >
      <div ref={triggerRef} />
      <div className="max-w-[1400px] mx-auto px-20 max-lg:px-10 max-sm:px-6">
        <div
          className="flex flex-row max-lg:flex-col relative overflow-hidden"
          style={{ placeContent: "center space-between", alignItems: "center", gap: "40px" }}
        >
          {/* Left Content */}
          <div
            className="flex flex-col items-start max-lg:w-full relative z-10"
            style={{ flex: "1 0 0", maxWidth: "470px", gap: "70px" }}
          >
            <div className="flex flex-col items-start w-full" style={{ gap: "40px" }}>
              <motion.div
                className="flex flex-col items-start w-full"
                style={{ gap: "20px" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2
                  className={`font-eiko font-normal text-[42px] leading-[1.1] tracking-[-0.84px] max-sm:text-[28px] transition-colors duration-700 ${
                    isDark ? "text-white" : "text-[#2F2823]"
                  }`}
                >
                  Capital can&apos;t keep pace with compute.
                </h2>
                <p
                  className={`text-[16px] leading-[24px] tracking-[-0.32px] transition-colors duration-700 ${
                    isDark ? "text-white/60" : "text-[#655343]/80"
                  }`}
                  style={{ maxWidth: "500px" }}
                >
                  GPUs depreciate at 20% per year, but traditional credit moves too slow for hardware obsolete in three years.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-start w-full"
                style={{ gap: "20px" }}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {SUSTAINABILITY_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    className="flex flex-col w-full"
                    style={{
                      gap: "4px",
                      padding: "0 0 20px",
                      borderBottom:
                        i < SUSTAINABILITY_ITEMS.length - 1
                          ? isDark
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "1px solid rgba(47,40,35,0.12)"
                          : "none",
                    }}
                  >
                    <h4
                      className={`text-[20px] font-semibold tracking-[-0.4px] transition-colors duration-700 ${
                        isDark ? "text-white" : "text-[#2F2823]"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-[14px] leading-[20px] transition-colors duration-700 ${
                        isDark ? "text-white/60" : "text-[#655343]/70"
                      }`}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <a
                href="https://usd.ai/chip"
                className={`inline-flex items-center gap-2 rounded-[6px] px-5 py-[10px] text-[14px] font-medium no-underline transition-all duration-700 hover:opacity-80 ${
                  isDark ? "bg-[#655343] text-white" : "bg-[#2F2823] text-white"
                }`}
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Right — Video */}
          <motion.div
            className="relative max-lg:w-full max-lg:min-h-[400px] z-10"
            style={{
              flex: "1 0 0",
              maxWidth: "45%",
              minHeight: "635px",
              borderRadius: "8px",
              alignSelf: "stretch",
              overflow: "hidden",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ borderRadius: "inherit" }}
            >
              <source
                src="https://player.vimeo.com/progressive_redirect/playback/1183157930/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=14da81373e4f940176cef153412025449d736a86f7b88f71c5359ba25e9d1651"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
