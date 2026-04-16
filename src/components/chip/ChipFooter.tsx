"use client";

import Image from "next/image";

const socials = [
  {
    name: "X",
    href: "https://x.com/USDai_Official",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/usd-ai/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/usdaiofficial",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

function FooterLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-[#a99482] text-[14px] leading-[1.5] hover:text-white transition-colors no-underline"
    >
      {children}
    </a>
  );
}

export default function ChipFooter() {
  return (
    <footer className="w-full bg-[#2f2823] border-t border-[#3f3f3f] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20 sm:top-24 md:top-32 w-[300px] h-[280px] sm:w-[400px] sm:h-[360px] md:w-[504px] md:h-[450px] opacity-50 md:opacity-100">
        <Image src="/images/footer-bg-pattern.svg" alt="" fill className="object-contain" />
      </div>

      <div className="max-w-[1440px] mx-auto relative px-4 sm:px-8 md:px-[60px] lg:px-[100px] py-12 md:py-[80px] lg:py-[118px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 mb-12 md:mb-[120px]">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-[50px] h-[50px] mb-3">
              <Image src="/images/logo-circle.svg" alt="USD.AI" fill className="object-contain" />
            </div>
            <p className="text-[#a99482] text-[13px] md:text-[14px] leading-[1.5] text-center md:text-left">
              © 2026 USD.AI. All Rights reserved
            </p>
          </div>

          <div className="flex justify-center md:justify-end gap-12 md:gap-[80px]">
            <div className="text-center md:text-right">
              <h4 className="font-bold text-white text-[16px] md:text-[18px] mb-5 md:mb-[30px]">Ecosystem</h4>
              <ul className="flex flex-col gap-4 md:gap-5 list-none p-0 m-0">
                <li><FooterLink href="https://dune.com/entropy_advisors/usdai-usdai" external>Dune Data</FooterLink></li>
                <li><FooterLink href="https://usd.ai/insights" external>Blog</FooterLink></li>
                <li><FooterLink href="https://usd.ai/brand-kit" external>Brand Kit</FooterLink></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h4 className="font-bold text-white text-[16px] md:text-[18px] mb-5 md:mb-[30px]">Developers</h4>
              <ul className="flex flex-col gap-3 md:gap-4 list-none p-0 m-0">
                <li><FooterLink href="https://docs.usd.ai" external>Docs</FooterLink></li>
                <li><FooterLink href="https://github.com/metastreet-labs" external>Github</FooterLink></li>
                <li><FooterLink href="https://cantina.xyz/bounties/32e64f2e-5f01-4a0b-bbe3-76f32c17b99f" external>Bounties</FooterLink></li>
                <li><FooterLink href="https://api.usd.ai/api/openapi.json" external>API</FooterLink></li>
                <li><FooterLink href="https://docs.usd.ai/terms-of-service/usd.ai-terms-of-service" external>Terms</FooterLink></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center md:justify-start">
          <div className="flex items-center gap-2 md:gap-[10px]">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className="flex items-center justify-center w-10 h-10 md:w-[42px] md:h-[42px] rounded-[6px] bg-[#655343] hover:bg-[#a99482] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
