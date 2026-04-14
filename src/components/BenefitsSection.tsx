"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Safe",
    description:
      "The combination of advanced AI and neural simulation sets a new standard for the entire industry.",
    video: "https://static.ext.waabi.ai/scene_1_v2_HD_FINAL.mp4",
  },
  {
    title: "Scalable",
    description:
      "A single, verifiable end-to-end AI model capable of reasoning serves as a shared brain powering multiple verticals.",
    video: "https://static.ext.waabi.ai/Scalable.mp4",
  },
  {
    title: "Practical",
    description:
      "Our highway and surface street capabilities enable an unprecedented Direct to Customer trucking model and seamless entry into the robotaxi market.",
    video: "https://static.ext.waabi.ai/scene_3_v5_HD_FINAL-small.mp4",
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === activeIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeIndex]);

  // Scroll-based active index on mobile/desktop
  useEffect(() => {
    const items = document.querySelectorAll("[data-benefit-item]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-benefit-index"));
            if (!isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-white text-dark relative w-full py-[var(--padding-y)]"
      data-theme="light"
    >
      {/* Heading */}
      <div className="w-calc flex flex-col gap-24 md:gap-32 mb-48 md:mb-80">
        <h2 className="type-z-34 md:type-z-60 text-dark text-balance">
          Unlocking scale in the real world.
        </h2>
        <p className="type-s-15 text-black/50 max-w-670">
          We deliver a product that&apos;s faster, safer, more scalable, and
          efficient—unlocking the true potential of autonomous transportation.
        </p>
      </div>

      {/* Split layout */}
      <div className="w-calc flex flex-col md:flex-row md:gap-48 lg:gap-80">
        {/* Left — sticky image/video */}
        <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center md:w-1/2 shrink-0">
          <div className="relative w-full rounded-calc overflow-clip aspect-[525/600]">
            {/* Static image behind */}
            <Image
              src="/images/desert-road.jpg"
              alt="Unlocking scale in the real world."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Active video overlay */}
            {benefits.map((b, i) => (
              <video
                key={b.title}
                ref={(el) => { videoRefs.current[i] = el; }}
                muted
                loop
                playsInline
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <source src={b.video} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>

        {/* Right — scrolling cards */}
        <div
          ref={sectionRef}
          className="md:w-1/2 flex flex-col gap-48 md:gap-0"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              data-benefit-item
              data-benefit-index={index}
              className="md:h-screen md:flex md:items-center"
            >
              <div className="flex flex-col gap-20 py-24 md:py-0">
                {/* Progress bar */}
                <div className="h-[2px] w-full bg-black/15 relative overflow-clip">
                  <div
                    className={`absolute inset-y-0 left-0 bg-pink transition-all duration-1000 ease-snappy ${
                      index === activeIndex ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center gap-8">
                  <button
                    onClick={() =>
                      setActiveIndex(
                        (prev) => (prev - 1 + benefits.length) % benefits.length
                      )
                    }
                    className="group/arrow flex-center size-32 rounded-full border border-current/15 transition-colors duration-300 hover:border-current/0 hover:bg-pink hover:text-white"
                  >
                    <ArrowIcon className="rotate-180" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveIndex((prev) => (prev + 1) % benefits.length)
                    }
                    className="group/arrow flex-center size-32 rounded-full border border-current/15 transition-colors duration-300 hover:border-current/0 hover:bg-pink hover:text-white"
                  >
                    <ArrowIcon />
                  </button>
                  <span className="type-s-12 text-black/50 ml-8">
                    {String(index + 1).padStart(2, "0")} / {String(benefits.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="type-z-34 md:type-z-60 text-dark">
                  {benefit.title}
                </h3>
                <p className="type-s-15 text-black/50 max-w-448">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
