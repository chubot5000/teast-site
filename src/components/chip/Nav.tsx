"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Deposit", href: "https://app.usd.ai" },
  { label: "Borrow", href: "https://www.gpuloans.com/loans" },
  { label: "Protocol", href: "https://docs.usd.ai" },
  { label: "Insights", href: "https://usd.ai/insights" },
  { label: "Resources", href: "https://docs.usd.ai" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 md:px-[60px] lg:px-[100px] py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="https://usd.ai" className="flex items-center gap-2 no-underline">
          <Image
            src="/images/logo-full-lockup.svg"
            alt="USD.AI"
            width={120}
            height={28}
            className="hidden sm:block"
          />
          <Image
            src="/images/logo-circle.svg"
            alt="USD.AI"
            width={28}
            height={28}
            className="sm:hidden"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[14px] tracking-[0.07px] leading-[1.5] hover:opacity-70 transition-opacity no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://usd.ai/chip"
            className="inline-flex items-center justify-center bg-[#655343] text-white rounded-[6px] px-5 py-[10px] text-[14px] font-medium no-underline whitespace-nowrap transition-opacity hover:opacity-80"
          >
            Get $CHIP
          </a>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 bg-black/80 backdrop-blur-md rounded-[10px] p-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[16px] no-underline hover:opacity-70 transition-opacity"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
