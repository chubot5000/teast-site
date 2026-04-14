"use client";

import { useState } from "react";
import WaabiLogo from "./WaabiLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Safety", href: "/safety" },
  { label: "Research", href: "/research" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="css-header fixed right-0 left-0 z-500 mx-auto flex flex-col items-center justify-center sm:top-34 sm:w-338 sm:gap-10 top-24 w-[calc(100vw-2.4rem)]">
      <div className="sm:bg-black/15 sm:p-1 bg-black/15 p-1 rounded-full backdrop-blur-[22px] w-full">
        <div className="relative h-full w-full bg-white rounded-full pt-0">
          <nav className="flex items-center justify-between px-6 h-[3.6rem]">
            {/* Logo */}
            <a href="/" className="flex items-center pl-5">
              <WaabiLogo className="w-58 h-auto text-dark" />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="type-s-12 px-10 py-6 text-dark transition-colors duration-300 hover:text-pink rounded-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://tally.so/r/ob9a0M"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-center h-[2.8rem] px-16 rounded-full bg-pink text-white type-s-12 transition-colors duration-300 hover:bg-pink/80 shrink-0"
            >
              Get in touch
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-[0.4rem] ml-8"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <span className="w-20 h-[2px] bg-dark block transition-transform" />
              <span className="w-20 h-[2px] bg-dark block transition-transform" />
            </button>
          </nav>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden flex flex-col px-16 pb-16 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="type-s-14 py-8 text-dark border-b border-b-black/15"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
