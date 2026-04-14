"use client";

import Image from "next/image";
import PillButton from "./PillButton";

export default function SafetySection() {
  return (
    <section className="relative min-h-svh w-full overflow-clip text-white">
      <div
        className="absolute inset-0 overflow-clip"
        style={{ transform: "translateY(-12%)" }}
      >
        <Image
          src="/images/card-14.jpg"
          alt="Safety visualization"
          fill
          className="h-full w-full object-cover"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="relative z-2 px-40 py-60 md:p-103">
        <div className="w-calc">
          <div className="flex w-full flex-col items-start gap-24 md:max-w-525 md:gap-48">
            <h2 className="type-z-34 md:type-z-80 text-pretty">
              Setting new standards for AV safety.
            </h2>
            <p className="type-z-18 md:type-z-24 text-current/60">
              For us, safety isn&apos;t a box to check—it&apos;s a commitment we
              strengthen daily with a simulation-first approach, rigorous
              validation, and a culture where safety is everyone&apos;s job.
            </p>
            <PillButton href="#safety">Explore our approach</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
