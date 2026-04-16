"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

const fadeInUpSmall = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
  viewport: { once: true, margin: "-80px" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ABOUT_KEYWORDS = [
  "Governance", "Revenue", "Staking", "Insurance",
  "Treasury", "Lending", "Decentralized", "GPU-Backed",
];

function LabelPill({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-full py-1 px-3 border bg-white border-[#2F2823]/[0.08] w-fit"
      {...fadeInUpSmall}
    >
      <div className="w-[8px] h-[8px] rounded-full bg-[#655343]" />
      <span className="text-[16px] font-medium tracking-[-0.32px] text-[#A99482]">{children}</span>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="bg-[#F7F3EE] py-[120px] max-lg:py-20 max-sm:py-16">
      <div className="max-w-[1400px] mx-auto px-20 max-lg:px-10 max-sm:px-6">
        <div
          className="flex flex-row items-end max-lg:flex-col max-lg:items-start max-lg:gap-12"
          style={{ gap: "140px", placeContent: "flex-end flex-start" }}
        >
          {/* Left column */}
          <div className="w-[40%] max-lg:w-full shrink-0 flex flex-col" style={{ gap: "40px" }}>
            <motion.div className="flex flex-col gap-5" {...fadeInUp}>
              <LabelPill>About $CHIP</LabelPill>
              <h2 className="font-eiko text-[40px] font-normal leading-[48px] tracking-[-0.8px] text-[#2F2823] max-sm:text-[28px] max-sm:leading-[36px]">
                The only token that captures real AI infrastructure growth.
              </h2>
            </motion.div>
            <motion.div
              className="flex flex-row flex-wrap gap-1"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {ABOUT_KEYWORDS.map((kw) => (
                <motion.span
                  key={kw}
                  variants={staggerItem}
                  className="bg-[#ebebeb] rounded-[6px] px-3 py-1 text-[16px] font-medium text-[#2F2823]/70 tracking-[-0.32px]"
                >
                  {kw}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            className="max-w-[463px] max-lg:max-w-full flex flex-col"
            style={{ gap: "56px" }}
            {...fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-[16px] text-[#79716b] leading-[24px] tracking-[-0.32px]">
              USD.AI finances GPU infrastructure for AI companies, generating real
              lending revenue. $CHIP is the governance token that lets holders
              direct - and benefit from - every dollar the protocol earns.
            </p>
            <div>
              <a
                href="https://usd.ai/chip"
                className="inline-flex items-center justify-center gap-2 bg-[#655343] text-white rounded-[6px] px-5 py-[10px] text-[14px] font-medium no-underline whitespace-nowrap leading-normal transition-opacity hover:opacity-80"
              >
                Check $CHIP Eligibility <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
