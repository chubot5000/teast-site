"use client";

import Image from "next/image";

const articles = [
  {
    title: "Waabi secures $1 Billion in new funding to lead Physical AI revolution",
    slug: "waabi-secures-1-billion-in-new-funding-to-lead-physical-ai-revolution",
    thumbnail: "/images/trucks-facility.png",
    tags: ["Company news"],
    date: "2026-01-28",
  },
  {
    title: "From closed course to public roads: The path to driverless",
    slug: "from-closed-course-to-public-roads-the-path-to-driverless",
    thumbnail: "/images/truck-urban-dallas.jpg",
    tags: ["Technology", "Company news"],
    date: "2025-12-19",
  },
  {
    title: "Waabi unlocks direct-to-customer model with surface street driving capabilities",
    slug: "waabi-unlocks-direct-to-customer-model-enabled-by-industry-leading-surface-street",
    thumbnail: "/images/truck-traffic-dusk.jpg",
    tags: ["Technology", "Company news"],
    date: "2025-11-25",
  },
  {
    title: "Waabi and Volvo demonstrate the future of autonomous trucking at NVIDIA GTC",
    slug: "waabi-and-volvo-demonstrate-the-future-of-autonomous-trucking",
    thumbnail: "/images/volvo-partnership-truck.png",
    tags: ["Company news", "Technology"],
    date: "2025-10-28",
  },
  {
    title: "Waabi hires industry veteran, Lior Ron, as Chief Operating Officer",
    slug: "waabi-hires-industry-veteran-lior-ron-as-chief-operating-officer",
    thumbnail: "/images/fleet-trucks-dusk.jpg",
    tags: ["Company news"],
    date: "2025-08-12",
  },
  {
    title: "The ultimate driving test for AI: Mixed Reality Testing pushes the boundaries of AV safety",
    slug: "mixed-reality-testing-pushes-the-boundaries-of-av-safety",
    thumbnail: "/images/simulation-perception.png",
    tags: ["Technology"],
    date: "2025-07-14",
  },
  {
    title: "Join us at CVPR 2025",
    slug: "join-us-at-cvpr-2025",
    thumbnail: "/images/pink-gradient.png",
    tags: ["Research"],
    date: "2025-06-04",
  },
  {
    title: "Simulator realism: The new safety standard for the AV industry",
    slug: "simulator-realism-the-new-safety-standard-for-the-av-industry",
    thumbnail: "/images/sensor-visualization.gif",
    tags: ["Technology"],
    date: "2025-03-11",
  },
  {
    title: "Waabi and Volvo Autonomous Solutions partner to jointly develop and deploy autonomous transportation solutions",
    slug: "waabi-and-volvo-autonomous-solutions-partner",
    thumbnail: "/images/volvo-truck-highway.jpg",
    tags: ["Technology", "Company news"],
    date: "2025-02-04",
  },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function InsightsSection() {
  return (
    <section
      className="bg-cream-light text-dark relative w-full py-[var(--padding-y)]"
    >
      {/* Heading */}
      <div className="w-calc flex flex-col md:flex-row md:items-end md:justify-between gap-24 mb-48 md:mb-80">
        <div className="flex flex-col gap-24 max-w-700">
          <h2 className="type-z-34 md:type-z-60 text-dark">Insights.</h2>
          <p className="type-s-15 text-black/50">
            Explore technology deep dives, behind-the-scenes perspectives, and
            the ideas shaping the future of autonomy.
          </p>
        </div>
        <a
          href="/insights"
          className="flex-center h-36 px-20 rounded-full border border-current/15 type-s-12 text-dark transition-colors duration-300 hover:bg-pink hover:text-white hover:border-current/0 shrink-0"
        >
          View all
        </a>
      </div>

      {/* Carousel */}
      <div className="flex gap-12 md:gap-16 overflow-x-scroll no-scrollbar px-calc snap-x snap-mandatory">
        {articles.map((article) => (
          <a
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group shrink-0 w-[calc(100vw-8rem)] sm:w-[calc(50%-1.2rem)] md:w-315 lg:w-370 flex flex-col gap-16 snap-start"
          >
            {/* Thumbnail */}
            <div className="relative w-full rounded-calc overflow-clip aspect-[295/221]">
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 90vw, 37rem"
              />
            </div>

            {/* Tags & Date */}
            <div className="flex items-center gap-8 flex-wrap">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="type-s-11 px-10 py-4 rounded-full bg-dark/10 text-dark"
                >
                  {tag}
                </span>
              ))}
              <span className="type-s-11 text-black/50">
                {formatDate(article.date)}
              </span>
            </div>

            {/* Title */}
            <h3 className="type-z-18 md:type-z-24 group-hover:text-pink ease-snappy max-w-600 text-current transition-colors duration-500">
              {article.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
