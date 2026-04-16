"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const HARVEST_STATS = [
  {
    number: "$7.7B+",
    title: "sUSDai Traded in 2025",
    description: "Efficient capital deployment across lending markets, supporting AI infrastructure financing with reliability and precision at unprecedented scale.",
  },
  {
    number: "$1.5B+",
    title: "Pipeline",
    description: "Our GPU-backed lending solutions are trusted by AI companies worldwide, spanning diverse hardware configurations to deliver consistent, reliable financing.",
  },
  {
    number: "$1.2B",
    title: "Approved Facilities",
    description: "We underwrite responsible GPU financing across over a billion in approved credit facilities, implementing precision risk assessment that optimizes every dollar deployed.",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#F7F3EE] py-[120px] max-lg:py-20 max-sm:py-16">
      <div className="max-w-[1400px] mx-auto px-20 max-lg:px-10 max-sm:px-6">
        <motion.div
          className="bg-white rounded-[10px] overflow-hidden border border-[#d6d3d1]"
          style={{ padding: "60px 60px" }}
          {...fadeInUp}
        >
          <motion.div
            className="flex flex-row items-start max-lg:flex-col"
            style={{ gap: "74px" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {HARVEST_STATS.map((stat) => (
              <motion.div
                key={stat.title}
                className="flex flex-col"
                style={{ flex: "1 0 0", gap: "8px" }}
                variants={staggerItem}
              >
                <div className="font-eiko text-[48px] font-bold text-[#2F2823] leading-none tracking-[-1px]">
                  {stat.number}
                </div>
                <h3 className="text-[18px] font-semibold text-[#2F2823] tracking-[-0.36px]">
                  {stat.title}
                </h3>
                <p className="text-[14px] text-[#79716b] leading-[20px]">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
