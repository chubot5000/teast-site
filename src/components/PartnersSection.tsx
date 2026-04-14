"use client";

import { useRef } from "react";
import Image from "next/image";

const partners = [
  {
    name: "Volvo",
    author: "Nils Jaeger",
    authorTitle: "CEO of Volvo Autonomous Solutions",
    review:
      "Partnerships like the one between Volvo Autonomous Solutions and Waabi play an important role not only in advancing autonomous technology, but also in building the broader ecosystem required to support commercial deployment.",
    image: "/images/volvo-partnership-truck.png",
    logo: "/images/nvidia-logo.svg",
  },
  {
    name: "Uber",
    author: "Dara Khosrowshahi",
    authorTitle: "CEO of Uber",
    review:
      "Waabi's expanded focus on robotaxis marks an important milestone for their team and the AV industry more broadly. We're very excited to deepen our partnership with Waabi as they significantly scale their Physical AI Platform and enter a new phase of an already remarkable journey.",
    image: "/images/driverless-cab.png",
    logo: null,
  },
  {
    name: "Uber Freight",
    author: "Olivia Hu",
    authorTitle:
      "Head of Autonomous Trucking & Electrification at Uber Freight",
    review:
      "Our partnership with Waabi represents the power of combining cutting-edge technology with a vast logistics network to drive meaningful industry impact. By advancing operational excellence and scaling real-world applications, this collaboration underscores our joint commitment to transforming autonomous freight.",
    image: "/images/uber-freight-truck.jpg",
    logo: null,
  },
  {
    name: "NVIDIA",
    author: "Jensen Huang",
    authorTitle: "Founder and CEO of NVIDIA",
    review:
      "Waabi represents a true breakthrough by treating autonomy as a scalable intelligence problem. Built on NVIDIA compute, Waabi is unlocking real deployment—and we're proud to support them as one of the future giants of AI.",
    image: "/images/waabi-nvidia-logos.png",
    logo: "/images/nvidia-logo.svg",
  },
];

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="bg-background text-dark relative w-full py-[var(--padding-y)]"
      data-theme="light"
    >
      {/* Heading */}
      <div className="w-calc flex flex-col md:flex-row md:items-end md:justify-between gap-24 mb-48 md:mb-80">
        <div className="flex flex-col gap-24 max-w-700">
          <h2 className="type-z-34 md:type-z-60 text-dark text-balance">
            Trusted by the best in the industry.
          </h2>
          <p className="type-s-15 text-black/50">
            From hardware providers and OEMs to retailers, logistics providers
            and carriers, the best in the business count on Waabi to deliver real
            results.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div
        ref={scrollRef}
        className="flex gap-12 md:gap-16 overflow-x-scroll no-scrollbar px-calc snap-x snap-mandatory"
      >
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="group relative shrink-0 w-[calc(100vw-8rem)] md:w-[44.7rem] rounded-calc overflow-clip snap-start"
          >
            {/* Background Image */}
            <div className="relative aspect-[351/221] md:aspect-[448/336]">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 90vw, 45rem"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50" />
            </div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-20 md:p-24 text-white flex flex-col gap-16">
              <p className="type-z-18 text-white italic leading-[125%]">
                &ldquo;{partner.review}&rdquo;
              </p>
              <div className="flex flex-col gap-4">
                <p className="type-s-12 text-white font-neue">
                  {partner.author}
                </p>
                <p className="type-s-11 text-white/60 font-neue">
                  {partner.authorTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
