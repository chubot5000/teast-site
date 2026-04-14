"use client";

import { useRef, useState, useEffect } from "react";

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

  // Scroll-based active index
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
      className="bg-background text-dark relative w-full py-[var(--padding-y)]"
      data-theme="light"
    >
      {/* Split layout */}
      <div className="w-calc flex flex-col md:flex-row md:gap-48 lg:gap-80">
        {/* Left — sticky video */}
        <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center md:w-1/2 shrink-0">
          <div className="rounded-calc relative aspect-square w-full overflow-clip">
            {/* Active video overlay */}
            {benefits.map((b, i) => (
              <video
                key={b.title}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
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
        <div className="md:w-1/2 flex flex-col gap-48 md:gap-0">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              data-benefit-item
              data-benefit-index={index}
              className="md:h-screen md:flex md:items-center"
            >
              <div
                onClick={() => setActiveIndex(index)}
                className="pointer-events-auto flex w-full cursor-pointer flex-col gap-20"
              >
                {/* Progress bar */}
                <div className="relative h-1 w-full overflow-clip bg-black/15">
                  <div
                    className={`bg-pink absolute bottom-0 left-0 h-2 w-full transition-transform duration-1000 ease-snappy origin-left ${
                      index === activeIndex
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  />
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center gap-8">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(
                        (prev) =>
                          (prev - 1 + benefits.length) % benefits.length
                      );
                    }}
                    className="group/arrow flex-center size-32 rounded-full border border-current/15 transition-colors duration-300 hover:border-current/0 group-hover/arrow:bg-pink"
                  >
                    <ArrowIcon className="rotate-180" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(
                        (prev) => (prev + 1) % benefits.length
                      );
                    }}
                    className="group/arrow flex-center size-32 rounded-full border border-current/15 transition-colors duration-300 hover:border-current/0 group-hover/arrow:bg-pink"
                  >
                    <ArrowIcon />
                  </button>
                  <span className="type-s-12 text-black/50 ml-8">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(benefits.length).padStart(2, "0")}
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
