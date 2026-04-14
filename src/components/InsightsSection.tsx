"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import PillButton from "./PillButton";
import { NavArrowLeft, NavArrowRight } from "./icons";

const articles = [
  {
    title: "Waabi secures $1 Billion in new funding to lead Physical AI revolution",
    tags: ["Company news"],
    date: "January 28, 2026",
    image: "/images/truck-driver-portrait.png",
    href: "https://www.waabi.ai/insights/waabi-secures-1-billion-in-new-funding-to-lead-physical-ai-revolution",
  },
  {
    title: "From closed course to public roads: The path to driverless",
    tags: ["Technology", "Company news"],
    date: "December 19, 2025",
    image: "/images/driverless-cab.png",
    href: "https://www.waabi.ai/insights/from-closed-course-to-public-roads-the-path-to-driverless",
  },
  {
    title: "Waabi unlocks direct-to-customer model with surface street driving capabilities",
    tags: ["Technology", "Company news"],
    date: "November 25, 2025",
    image: "/images/truck-traffic-dusk.jpg",
    href: "https://www.waabi.ai/insights/waabi-unlocks-direct-to-customer-model-enabled-by-industry-leading-surface-street",
  },
  {
    title: "Waabi and Volvo demonstrate the future of autonomous trucking at NVIDIA GTC",
    tags: ["Company news", "Technology"],
    date: "October 28, 2025",
    image: "/images/volvo-partnership-truck.png",
    href: "https://www.waabi.ai/insights/waabi-and-volvo-demonstrate-the-future-of-autonomous-trucking",
  },
  {
    title: "Waabi hires industry veteran, Lior Ron, as Chief Operating Officer",
    tags: ["Company news"],
    date: "August 12, 2025",
    image: "/images/trucks-warehouse.png",
    href: "https://www.waabi.ai/insights/waabi-hires-industry-veteran-lior-ron-as-chief-operating-officer-positioning-the",
  },
  {
    title: "The ultimate driving test for AI: Mixed Reality Testing pushes the boundaries of AV safety",
    tags: ["Technology"],
    date: "July 14, 2025",
    image: "/images/trucks-night.png",
    href: "https://www.waabi.ai/insights/mixed-reality-testing-pushes-the-boundaries-of-av-safety",
  },
  {
    title: "Join us at CVPR 2025",
    tags: ["Research"],
    date: "June 4, 2025",
    image: "/images/pink-gradient.png",
    href: "https://www.waabi.ai/insights/join-us-at-cvpr-2025",
  },
  {
    title: "Simulator realism: The new safety standard for the AV industry",
    tags: ["Technology"],
    date: "March 11, 2025",
    image: "/images/uber-freight-truck.jpg",
    href: "https://www.waabi.ai/insights/simulator-realism-the-new-safety-standard-for-the-av-industry",
  },
  {
    title: "Waabi and Volvo Autonomous Solutions partner to jointly develop and deploy autonomous transportation solutions",
    tags: ["Technology", "Company news"],
    date: "February 4, 2025",
    image: "/images/truck-highway-golden.jpg",
    href: "https://www.waabi.ai/insights/waabi-and-volvo-autonomous-solutions-partner-to-jointly-develop-and-deploy-autonomous-transportation-solutions",
  },
];

export default function InsightsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(updateScrollState, 400);
  };

  return (
    <section
      id="insights"
      className="relative flex w-full flex-col relative w-full overflow-clip bg-cream py-(--padding-y)"
    >
      <div className="debug absolute inset-0 pointer-events-none" />
      <div className="flex flex-col gap-30 md:gap-48">
        {/* Header */}
        <div className="w-calc grid grid-cols-2 gap-y-24 md:gap-y-48">
          <div className="order-1 md:col-span-2">
            <div className="flex w-full justify-center">
              <h2 className="w-calc type-z-34 md:type-z-80 text-balance">
                Insights.
              </h2>
            </div>
          </div>
          <div className="order-3 max-md:col-span-2 md:order-2">
            <p className="type-s-14 md:type-s-15 text-balance text-black/50">
              Explore technology deep dives, behind-the-scenes perspectives, and
              the ideas shaping the future of autonomy.
            </p>
          </div>
          <div className="order-2 flex items-end gap-24 justify-self-end md:order-3">
            <PillButton href="#insights" className="hidden md:flex">
              View all
            </PillButton>
            <div className="flex items-center gap-8 md:gap-12">
              <button
                className="flex-center size-32 rounded-full border-1 border-current/15 md:size-50"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
              >
                <NavArrowLeft />
              </button>
              <button
                className="flex-center size-32 rounded-full border-1 border-current/15 md:size-50"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
              >
                <NavArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Article carousel */}
        <div className="flex flex-col gap-45 md:gap-0">
          <div className="flex w-full flex-nowrap">
            <div
              ref={scrollRef}
              className="px-calc flex snap-x snap-mandatory flex-nowrap gap-28 md:gap-24 overflow-x-auto scrollbar-hide"
              onScroll={updateScrollState}
            >
              {articles.map((article) => (
                <a
                  key={article.href}
                  className="group relative flex shrink-0 snap-start flex-col items-start justify-start gap-16 border-b border-current/15 pb-24 w-[calc(100vw-8rem)] md:w-[44.8rem]"
                  href={article.href}
                >
                  <article className="relative flex w-full flex-col items-start justify-start gap-12 md:gap-16">
                    <div className="rounded-calc relative w-full overflow-clip bg-current flex aspect-[295/221] items-center justify-center md:aspect-[448/336]">
                      <div className="ease-snappy relative h-full w-full transition-transform duration-500 group-hover:scale-110">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="absolute h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="relative flex w-full flex-row flex-wrap items-center justify-start gap-16">
                      <div className="flex flex-wrap items-center gap-6">
                        {article.tags.map((tag) => (
                          <div
                            key={tag}
                            className="flex-center h-26 gap-6 shrink-0 rounded-[4rem] px-11 ease-snappy transition-colors duration-500 group-hover:bg-pink/25 group-hover:text-pink bg-current/5 text-current/50"
                          >
                            <span className="type-s-10">{tag}</span>
                          </div>
                        ))}
                      </div>
                      <span className="type-s-11 md:type-s-12 whitespace-nowrap text-current/50">
                        {article.date}
                      </span>
                    </div>
                    <h2 className="type-z-18 md:type-z-24 group-hover:text-pink ease-snappy max-w-600 text-current transition-colors duration-500">
                      {article.title}
                    </h2>
                  </article>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile view all */}
          <div className="flex items-center justify-center md:hidden">
            <PillButton href="#insights">View all</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
