"use client";

import Image from "next/image";

const teamImages = [
  { src: "/images/team-portrait-woman.jpg", alt: "Team portrait" },
  { src: "/images/team-mechanic.jpg", alt: "Team mechanic" },
  { src: "/images/team-brainstorm-man.jpg", alt: "Team collaboration" },
  { src: "/images/sensor-inspection.jpg", alt: "Sensor inspection" },
  { src: "/images/team-planning.jpg", alt: "Team planning" },
  { src: "/images/team-whiteboard.jpg", alt: "Team whiteboard" },
];

export default function CareersSection() {
  return (
    <section className="overflow-clip bg-white py-[var(--padding-y)] lg:min-h-screen">
      <div className="flex flex-col gap-65 md:gap-96">
        {/* Heading */}
        <div className="flex flex-col gap-32 w-calc">
          <h2 className="type-z-34 md:type-z-60 text-dark text-balance">
            Build Physical AI with us.
          </h2>
          <a
            href="/careers"
            className="flex-center h-36 w-fit px-20 rounded-full bg-pink text-white type-s-12 transition-colors duration-300 hover:bg-pink/80"
          >
            Join the team
          </a>
        </div>

        {/* Image Carousel */}
        <div
          className="flex gap-12 md:gap-16 overflow-x-scroll no-scrollbar px-calc"
        >
          {teamImages.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-262 md:w-370 lg:w-448 relative rounded-calc overflow-clip"
            >
              <div className="relative aspect-[448/336]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 26rem, 45rem"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
