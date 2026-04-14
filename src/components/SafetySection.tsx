"use client";

import Image from "next/image";

export default function SafetySection() {
  return (
    <section className="relative h-svh w-full overflow-clip px-24">
      <div className="relative h-full w-full">
        <div className="rounded-calc absolute inset-0 h-full w-full overflow-clip text-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/truck-sunset-closeup.jpg"
              alt="Setting new standards for AV safety."
              fill
              className="absolute inset-0 h-full w-full object-cover"
              sizes="100vw"
              priority
            />
          </div>

          {/* Content — bottom-left aligned */}
          <div className="relative flex h-full w-full flex-col items-start justify-end gap-24 pb-40 md:gap-48 md:pb-105">
            {/* Heading with inline text sizes matching source */}
            <div className="w-calc text-[5.5rem] leading-[90%] tracking-[-0.22rem] md:text-[max(9rem,min(9vw,13rem))] md:tracking-[max(-0.6rem,min(-0.3vw,-0.52rem))]">
              Setting new standards for AV safety.
            </div>

            {/* Pink CTA button */}
            <div className="w-calc flex justify-start">
              <a
                href="/safety"
                className="flex h-36 shrink-0 items-center justify-center rounded-full px-24 md:h-48 bg-pink text-white type-s-12 transition-colors duration-300 hover:bg-pink/80"
              >
                Explore our approach
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
