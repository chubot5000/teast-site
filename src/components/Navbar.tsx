"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Safety", href: "#safety" },
  { label: "Research", href: "#technology" },
  { label: "Company", href: "#partners" },
  { label: "Careers", href: "#careers" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-zagma tracking-wide">
          Waabi
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tally.so/r/ob9a0M"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink/90 transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-white text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://tally.so/r/ob9a0M"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink text-white px-5 py-3 rounded-full text-center font-medium mt-2"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
