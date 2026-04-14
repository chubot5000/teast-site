"use client";

import { useState } from "react";
import Image from "next/image";
import PillButton from "./PillButton";

const partners = [
  {
    name: "Volvo",
    quote: "",
    author: "",
    authorTitle: "",
    logo: "",
    link: "",
  },
  {
    name: "Uber",
    quote: "",
    author: "",
    authorTitle: "",
    logo: "",
    link: "",
  },
  {
    name: "Uber Freight",
    quote: "",
    author: "",
    authorTitle: "",
    logo: "",
    link: "",
  },
  {
    name: "NVIDIA",
    quote:
      "Waabi represents a true breakthrough by treating autonomy as a scalable intelligence problem. Built on NVIDIA compute, Waabi is unlocking real deployment—and we're proud to support them as one of the future giants of AI.",
    author: "Jensen Huang",
    authorTitle: "Founder and CEO of NVIDIA",
    logo: "/images/nvidia-logo.svg",
    link: "https://www.waabi.ai/insights/nvidia-drivethor",
  },
];

export default function PartnersSection() {
  const [activeTab, setActiveTab] = useState(3);

  const active = partners[activeTab];

  return (
    <section id="partnerships" className="relative flex w-full flex-col">
      <div className="debug absolute inset-0 pointer-events-none" />
      <section className="relative min-h-screen w-full overflow-clip bg-white py-[var(--padding-y)]">
        <div className="flex flex-col items-center gap-48 md:gap-96">
          {/* Header */}
          <div className="w-calc flex gap-30 max-lg:flex-col md:gap-48 xl:gap-240">
            <div className="flex flex-col gap-y-48">
              <div className="flex w-full text-balance">
                <h2 className="type-z-34 md:type-z-80 text-balance">
                  Trusted by the best in the industry.
                </h2>
              </div>
            </div>
            <div className="max-lg:w-calc flex flex-col justify-end gap-30 lg:max-w-[44.7rem] lg:gap-48 lg:pl-48">
              <p className="type-z-18 md:type-z-24 text-current/50">
                From hardware providers and OEMs to retailers, logistics
                providers and carriers, the best in the business count on Waabi
                to deliver real results.
              </p>
            </div>
          </div>

          {/* Partner card */}
          <div
            className="w-calc relative flex flex-col items-center justify-between md:flex-row"
            style={{ "--padding": "2.4rem" } as React.CSSProperties}
          >
            <div className="relative aspect-square w-full overflow-clip rounded-t-[var(--rounded-unit)] md:aspect-[unset] md:h-[80.7rem] md:w-10/12">
              <div className="absolute inset-0" style={{ transform: "translateY(-12%) scale(1.1)" }}>
                <Image
                  src="/images/waabi-nvidia-partnership.png"
                  alt="Partnership"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Testimonial card overlay */}
            <div className="rounded-calc relative mt-[-2.8rem] flex w-full flex-col items-start justify-center bg-[var(--color-cream)] px-28 py-32 md:absolute md:right-0 md:bottom-40 md:w-[48rem] md:px-48 md:py-48">
              {/* Tab navigation */}
              <div className="relative flex h-32 w-full items-center gap-24 border-b border-current/10">
                {partners.map((partner, i) => (
                  <button
                    key={partner.name}
                    className={`relative h-33 shrink-0 items-center border-b-2 px-10 ${
                      activeTab === i
                        ? "border-pink text-current"
                        : "border-transparent text-current/25"
                    }`}
                    onClick={() => setActiveTab(i)}
                  >
                    <span className="type-s-14 md:type-s-15">{partner.name}</span>
                  </button>
                ))}
              </div>

              {/* Quote content */}
              <div className="relative flex flex-col md:gap-90">
                <div className="relative flex w-full flex-col items-start justify-start gap-30 md:gap-34">
                  <div className="relative flex w-full shrink-0 grow basis-0 flex-col items-start justify-between gap-24 md:justify-start">
                    {active.quote && (
                      <div className="flex flex-col gap-24 pt-24">
                        <p className="type-h-18 md:type-z-24">{active.quote}</p>
                        <div className="relative flex flex-col">
                          <span className="type-s-11 md:type-s-12">
                            {active.author}
                          </span>
                          <span className="type-s-11 md:type-s-12">
                            {active.authorTitle}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Logo + CTA */}
                <div className="flex items-center justify-between self-stretch pt-24">
                  {active.logo && (
                    <div className="hidden md:flex">
                      <div className="flex-center relative h-80 w-80">
                        <div className="flex-center absolute inset-0">
                          <div className="flex-center relative w-40">
                            <Image
                              src={active.logo}
                              alt={`${active.name}-logo`}
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {active.link && (
                    <PillButton href={active.link}>See the details</PillButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
