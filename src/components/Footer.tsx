"use client";

import ScrollReveal from "./ScrollReveal";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Safety", href: "#safety" },
  { label: "Research", href: "#technology" },
  { label: "Company", href: "#partners" },
  { label: "Careers", href: "#careers" },
  { label: "Insights", href: "#insights" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-32">
        <ScrollReveal>
          <h2 className="font-zagma text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            We&apos;re just
            <br />
            getting started
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-white/60 text-lg mb-16">
            Follow along or reach out directly at{" "}
            <a
              href="mailto:press@waabi.ai"
              className="text-white hover:text-pink transition-colors"
            >
              press@waabi.ai
            </a>{" "}
            |{" "}
            <a
              href="mailto:info@waabi.ai"
              className="text-white hover:text-pink transition-colors"
            >
              info@waabi.ai
            </a>
          </p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-10 border-t border-white/10">
          <div className="flex flex-wrap gap-6 mb-6 md:mb-0">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <span>© 2025 Waabi. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
