"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function ChipGlyphSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="375"
      height="344"
      viewBox="0 0 375 344"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M374.991 52.5736L152.997 40.9609L0.000604568 97.9977L141.578 138.839L374.991 52.5736Z" fill="url(#paint0_linear_hero)" />
      <path d="M141.576 138.839L197.641 308.447L374.992 52.5755L141.576 138.839Z" fill="url(#paint1_linear_hero)" />
      <path d="M141.58 138.841L197.646 308.448L0.00569372 97.9981L141.58 138.841Z" fill="url(#paint2_linear_hero)" />
      <mask id="mask0_hero" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="141" y="52" width="234" height="257">
        <path d="M141.579 138.839L197.645 308.447L374.996 52.5755L141.579 138.839Z" fill="url(#paint3_linear_hero)" />
      </mask>
      <g mask="url(#mask0_hero)">
        <g filter="url(#filter0_f_hero)">
          <path d="M392.978 23.603L197.988 331.544L227.869 354.874L435.211 49.7194L392.978 23.603Z" fill="#CFC4BA" />
        </g>
      </g>
      <defs>
        <filter id="filter0_f_hero" x="169.44" y="-4.9443" width="294.318" height="388.367" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="14.2739" result="effect1_foregroundBlur_hero" />
        </filter>
        <linearGradient id="paint0_linear_hero" x1="154.628" y1="163.717" x2="140.762" y2="39.7374" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7F3EE" /><stop offset="0.725147" stopColor="#DBD0C6" /><stop offset="1" stopColor="#CCC1B7" />
        </linearGradient>
        <linearGradient id="paint1_linear_hero" x1="140.352" y1="129.459" x2="239.046" y2="224.483" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A99482" /><stop offset="1" />
        </linearGradient>
        <linearGradient id="paint2_linear_hero" x1="159.525" y1="300.748" x2="132.278" y2="157.601" gradientUnits="userSpaceOnUse">
          <stop offset="0.240385" stopColor="#1D130B" /><stop offset="0.956731" stopColor="#352C26" />
        </linearGradient>
        <linearGradient id="paint3_linear_hero" x1="140.356" y1="129.459" x2="239.05" y2="224.483" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A99482" /><stop offset="1" stopColor="#2F2823" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function CHIPHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-[#F7F3EE] p-[10px]">
      <div className="relative w-full h-full overflow-hidden rounded-[21px]">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source
              src="https://player.vimeo.com/progressive_redirect/playback/1183158293/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=6fd7d96d23f018db1ca1755f5be6b77d48d0f96429f23508d097513a803add17"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 top-[80px] z-10 flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative flex-1 flex items-center overflow-hidden">
              <div className="flex items-center justify-between w-full px-20 max-lg:flex-col max-lg:items-start max-lg:px-10 max-sm:px-6 z-[2]">
                {/* Left text */}
                <div className="max-w-[480px]">
                  <h1 className="font-eiko font-light text-[clamp(28px,3.2vw,42px)] text-white leading-[1.08] mb-4">
                    $CHIP scales the interest rate of AI
                  </h1>
                  <p className="text-[17px] text-white/70 max-w-[460px] leading-[1.7] mb-7">
                    CHIP is the governance token of USD.AI, a protocol generating real revenue from AI companies financing GPU infrastructure.
                  </p>
                  <a
                    href="https://usd.ai/chip"
                    className="inline-flex px-5 py-[10px] bg-white/15 border border-white/25 rounded-[6px] text-white text-[14px] font-medium no-underline transition-all hover:bg-white/25 backdrop-blur-sm"
                  >
                    Check $CHIP Eligibility
                  </a>
                </div>

                {/* Glyph */}
                <div className="shrink-0 w-[390px] h-[390px] flex items-center justify-center mr-[120px] max-lg:w-[220px] max-lg:h-[220px] max-lg:mt-10 max-lg:mx-auto max-lg:mr-auto max-sm:w-[180px] max-sm:h-[180px] max-sm:mr-auto">
                  <ChipGlyphSVG
                    className={`w-full h-auto drop-shadow-[0_20px_60px_rgba(47,40,35,0.2)] transition-all duration-[1400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                  />
                </div>
              </div>

              {/* Foreground terrain */}
              <div className="absolute -bottom-[30%] md:-bottom-[40%] lg:-bottom-[30%] xl:-bottom-[20%] z-1 pointer-events-none h-full w-full scale-110">
                <Image src="/images/rocks.png" alt="" fill className="object-cover object-top" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
