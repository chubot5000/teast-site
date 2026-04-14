"use client";

import Image from "next/image";

export default function SafetySection() {
  return (
    <section className="relative h-svh w-full overflow-clip px-0 md:px-24 py-0 md:py-24">
      <div className="rounded-calc relative h-full w-full overflow-clip text-white">
        {/* Background Image */}
        <Image
          src="/images/truck-sunset-closeup.jpg"
          alt="Setting new standards for AV safety."
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/18 to-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-24 md:p-48 lg:p-80 gap-24 md:gap-32">
          <h2 className="type-z-34 md:type-z-80 text-pretty text-white max-w-[80%]">
            Setting new standards for AV safety.
          </h2>
          <p className="type-s-15 text-white/70 max-w-525">
            For us, safety isn&apos;t a box to check—it&apos;s a commitment we
            strengthen daily with a simulation-first approach, rigorous
            validation, and a culture where safety is everyone&apos;s job.
          </p>
          <a
            href="/safety"
            className="flex-center h-36 w-fit px-20 rounded-full border border-white/25 type-s-12 text-white transition-colors duration-300 hover:bg-white hover:text-dark"
          >
            Explore our approach
          </a>
        </div>
      </div>
    </section>
  );
}
