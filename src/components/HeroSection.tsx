"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background video - desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg hidden md:block"
        poster="/images/truck-city-skyline.png"
      >
        <source
          src="https://static.ext.waabi.ai/WAABI_27s_2K_antinomy_export_250823.mp4"
          type="video/mp4"
        />
      </video>
      {/* Background video - mobile */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg md:hidden"
        poster="/images/truck-city-skyline.png"
      >
        <source
          src="https://static.ext.waabi.ai/Hero_27Sec_responsive.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center text-white px-6 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-zagma text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6"
        >
          Built to think.
          <br />
          Born to haul.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl font-zagma-italic italic opacity-80"
        >
          We built our own road.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
