"use client";

import { WaabiLogoLarge, LinkedInIcon, YouTubeIcon, XIcon } from "./icons";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Safety", href: "#safety" },
  { label: "Research", href: "#research" },
  { label: "Company", href: "#company" },
  { label: "Careers", href: "#careers" },
  { label: "Insights", href: "#insights" },
];

const socialLinks = [
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/waabi/" },
  { icon: <YouTubeIcon />, href: "https://www.youtube.com/channel/UCNJWh6U6vfTz77SJCeWZloQ" },
  { icon: <XIcon />, href: "https://x.com/waabi_ai?lang=en" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-clip">
      <div className="relative w-full bg-pink text-white lg:h-[60rem]">
        {/* Background video */}
        <div className="absolute inset-0 size-full">
          <div className="absolute inset-0 size-full">
            <div className="absolute inset-0">
              <video
                autoPlay
                playsInline
                loop
                muted
                className="size-full object-fill"
                src="https://static.ext.waabi.ai/Waabi_System_LightTunnel_1.mp4"
              />
            </div>
          </div>
        </div>

        <div className="relative flex size-full flex-col justify-between gap-64 pt-60 pb-30 lg:gap-0 lg:pt-80 lg:pb-80">
          {/* Top content */}
          <div className="w-calc relative flex flex-col gap-30 lg:flex-row lg:justify-between lg:gap-0">
            <div className="flex w-full flex-col gap-30 lg:w-[68.4rem] lg:gap-32">
              <div className="flex flex-col gap-16">
                <h2 className="text-[2.4rem] leading-[110%] tracking-[-0.072rem] text-balance md:max-w-[40%] md:text-[4rem] md:tracking-[-0.12rem]">
                  We&apos;re just{"\n"}getting started
                </h2>
                <div className="w-full">
                  <p className="font-neue text-[1.4rem] leading-[140%] tracking-[0.028rem] md:text-[1.5rem] md:tracking-[0.015rem]">
                    Follow along or reach out directly at
                    <br />
                    <a
                      className="text-current/60 underline decoration-solid underline-offset-auto transition-colors hover:text-current"
                      href="mailto:press@waabi.ai"
                    >
                      press@waabi.ai
                    </a>
                    <span className="px-6 text-current/60">|</span>
                    <a
                      className="text-current/60 underline decoration-solid underline-offset-auto transition-colors hover:text-current"
                      href="mailto:info@waabi.ai"
                    >
                      info@waabi.ai
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Links column */}
            <div className="flex w-full flex-col gap-12 lg:w-[32.5rem] lg:gap-24">
              <div className="type-s-11 md:type-s-12 text-current/60">
                About us
              </div>
              <nav className="flex flex-col gap-4">
                <ul>
                  {footerLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        className="type-z-20 inline-flex transition-colors hover:text-current/80"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Social icons */}
          <div className="w-calc flex items-start gap-12">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                className="h-[3.6rem] w-[3.6rem] rounded-full bg-white text-black lg:h-[5rem] lg:w-[5rem] flex cursor-pointer items-center justify-center"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="w-calc relative flex flex-col gap-30 lg:flex-row lg:items-end lg:justify-between lg:gap-0">
            <div className="order-1 flex h-[8rem] w-full items-center justify-start lg:order-2 lg:h-[14rem] lg:w-[52.6rem] lg:justify-end">
              <WaabiLogoLarge className="h-auto w-[12rem] lg:w-[20rem] text-white" />
            </div>
            <div className="order-2 flex flex-col gap-8 lg:order-1">
              <div className="type-s-11 lg:type-s-11 md:type-s-12 text-current/60">
                © 2026 Waabi. All Rights Reserved.
              </div>
              <div className="type-s-11 lg:type-s-11 md:type-s-12 flex gap-12 lg:gap-24">
                <a
                  className="transition-colors hover:text-current/80"
                  href="https://waabi.ai/privacy-policy"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
