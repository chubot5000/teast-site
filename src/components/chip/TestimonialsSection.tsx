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

const testimonialContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const testimonialItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

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

const TESTIMONIALS = [
  {
    quote: "USD.AI gave us access to capital at GPU speed. What used to take months through traditional lenders happened in days - and the terms were transparent from the start.",
    name: "GPU Compute Provider",
    role: "Series B AI Company",
  },
  {
    quote: "The insurance module staking gave us real yield tied to actual lending activity. No emissions farming, no ponzinomics - just protocol revenue flowing to stakers.",
    name: "Early CHIP Holder",
    role: "DeFi Protocol Contributor",
  },
  {
    quote: "As a curator, the governance framework lets me originate quality loans while the community holds me accountable. First-loss positions align incentives perfectly.",
    name: "Institutional Curator",
    role: "Private Credit Fund",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F7F3EE] py-[120px] max-lg:py-20 max-sm:py-16">
      <div className="max-w-[1400px] mx-auto px-20 max-lg:px-10 max-sm:px-6">
        <div
          className="flex flex-row items-end max-lg:flex-col max-lg:items-start max-lg:gap-10"
          style={{ placeContent: "flex-end space-between" }}
        >
          <motion.div
            className="flex flex-col max-lg:max-w-full"
            style={{ flex: "1 0 0", maxWidth: "470px", gap: "20px" }}
            {...fadeInUp}
          >
            <LabelPill>Testimonials</LabelPill>
            <h2 className="font-eiko text-[40px] font-normal leading-[48px] tracking-[-0.8px] text-[#2F2823] max-sm:text-[28px] max-sm:leading-[36px]">
              Trusted by borrowers, stakers &amp; curators.
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-row max-lg:flex-col max-lg:w-full"
            style={{ gap: "15px", flex: "1 0 0" }}
            variants={testimonialContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.name}
                className="flex-1 bg-white rounded-[10px] p-8 flex flex-col justify-between min-h-[220px] border border-[#d6d3d1]"
                variants={testimonialItem}
              >
                <p className="text-[16px] text-[#79716b] leading-[24px] tracking-[-0.32px] mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-medium text-[16px] text-[#2F2823] tracking-[-0.32px]">{t.name}</div>
                  <div className="text-[14px] text-[#79716b] tracking-[-0.28px]">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
