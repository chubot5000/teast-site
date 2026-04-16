"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#F7F3EE] p-[10px]">
      <div className="relative w-full h-[500px] sm:h-[650px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-[21px]">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-[17px] overflow-hidden">
          <Image src="/images/cta-bg.webp" alt="Data center" fill className="object-cover rounded-[17px]" />
          <div className="absolute inset-0 bg-black/30 rounded-[17px]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/40 rounded-[17px]" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-8">
          <h2
            className={`font-eiko text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-white text-center leading-normal max-w-[900px] mb-3.5 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The interest rate of AI, governed by its holders.
          </h2>
          <p
            className={`text-[15px] text-white/60 mb-9 max-w-[460px] text-center leading-[1.7] transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            CHIP tokenholders shape the protocol that defines GPU-backed lending.
          </p>
          <div className="flex gap-3.5 justify-center max-sm:flex-col max-sm:items-center">
            <a
              href="https://usd.ai/chip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-[10px] bg-white/15 border border-white/25 rounded-[6px] text-white text-[14px] font-medium no-underline transition-all hover:bg-white/25 backdrop-blur-sm"
            >
              Check $CHIP Eligibility &rarr;
            </a>
            <a
              href="https://docs.usd.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-[10px] bg-[#A99482] rounded-[6px] text-white text-[14px] font-medium no-underline transition-opacity hover:opacity-80"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
