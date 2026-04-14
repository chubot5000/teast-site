"use client";

import WaabiLogo from "./WaabiLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Safety", href: "/safety" },
  { label: "Research", href: "/research" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
];

export default function Footer() {
  return (
    <footer
      className="bg-dark text-white relative w-full py-[var(--padding-y)]"
      data-theme="dark"
    >
      <div className="w-calc flex flex-col gap-80 md:gap-120">
        {/* Big headline */}
        <div className="flex flex-col gap-32">
          <h2
            className="type-z-60 md:type-z-80 text-white whitespace-pre-line"
            style={{ lineHeight: "90%" }}
          >
            {"We're just\ngetting started"}
          </h2>
          <div className="flex flex-col gap-8">
            <p className="type-s-15 text-white/60">
              Follow along or reach out directly at
            </p>
            <div className="flex flex-wrap gap-12">
              <a
                href="mailto:press@waabi.ai"
                className="type-s-15 text-white underlined"
              >
                press@waabi.ai
              </a>
              <a
                href="mailto:info@waabi.ai"
                className="type-s-15 text-white underlined"
              >
                info@waabi.ai
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-32 pt-32 border-t border-t-white/15">
          {/* Logo and links */}
          <div className="flex flex-col gap-24">
            <WaabiLogo className="w-58 h-auto text-white" />
            <div className="flex flex-wrap gap-12 md:gap-16">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="type-s-12 text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-8 md:items-end">
            <a
              href="https://waabi.ai/privacy-policy"
              className="type-s-11 text-white/60 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>
            <p className="type-s-11 text-white/60">
              © 2025 Waabi. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
