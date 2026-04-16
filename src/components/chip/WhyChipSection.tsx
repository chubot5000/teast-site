"use client";

import { useRef, useState, useEffect } from "react";
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

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Speed & Certainty",
    desc: "First call to close in less than 30 days. Funds escrowed upon your PO downpayment, released at install.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Built for GPUs",
    desc: "Standardized docs and execution process. Faster underwriting than traditional lenders. USD.AI exists solely to finance GPUs.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" /><path d="M9 3v18" />
      </svg>
    ),
    title: "Non-Recourse",
    desc: "Bankruptcy-remote SPV holds the assets. Asset-backed, not corporate-level; your parent balance sheet stays clean.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Covenant Lite",
    desc: "1.15x DSCR, no financial covenants on the parent. Operator-friendly terms from a lender that understands GPU economics.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Refinanceable",
    desc: "Refinance into lower interest rate if offtake counterparty credit improves during life of loan.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Reach",
    desc: "Able to service deployments across North America, Europe, Australia, and Southeast Asia.",
  },
];

function QuoteVideo() {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const toggle = () => {
    if (vidRef.current) {
      vidRef.current.muted = !vidRef.current.muted;
      setMuted(vidRef.current.muted);
    }
  };
  return (
    <div
      className="max-lg:max-w-full max-lg:h-[300px] relative cursor-pointer"
      style={{ flex: "1 0 0", maxWidth: "530px", alignSelf: "stretch" }}
      onClick={toggle}
    >
      <div
        className="w-full h-full min-h-[500px] max-lg:min-h-[300px] relative overflow-hidden"
        style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}
      >
        <video
          ref={vidRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/1183861660/rendition/720p/file.mp4?loc=external&log_user=0&signature=ba3a354546cb2beb4df072cbd2bd565988a06327e4d085574a7df390886e588c"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-6 left-6 z-10">
          <a
            href="https://docs.usd.ai"
            className="inline-flex items-center gap-2 bg-white/20 text-white rounded-[6px] px-5 py-[10px] text-[14px] font-medium no-underline whitespace-nowrap leading-normal transition-opacity hover:opacity-80"
          >
            Read the Whitepaper <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)", height: "120px" }}
        />
      </div>
    </div>
  );
}

export default function WhyChipSection() {
  const whyRef = useRef<HTMLDivElement>(null);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!whyRef.current) return;
      const rect = whyRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const inView = rect.top < vh * 0.5 && rect.bottom > 0;
      const past = rect.bottom < 0;
      setIsLight(inView || past);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`pt-[120px] pb-0 max-lg:pt-20 max-sm:pt-16 transition-colors duration-500 ${
        isLight ? "bg-[#F7F3EE]" : "bg-[#2F2823]"
      }`}
    >
      <div ref={whyRef} />
      <div
        className="max-w-[1400px] mx-auto px-20 max-lg:px-10 max-sm:px-6 transition-opacity duration-500"
        style={{ opacity: isLight ? 1 : 0 }}
      >
        <div className="flex flex-col items-center" style={{ gap: "50px" }}>
          <motion.div className="max-w-[600px] text-center flex flex-col items-center gap-5" {...fadeInUp}>
            <LabelPill>Why $CHIP</LabelPill>
            <h2 className="font-eiko text-[40px] font-normal leading-[48px] tracking-[-0.8px] text-[#2F2823] max-sm:text-[28px] max-sm:leading-[36px]">
              More than governance - a stake in AI&apos;s financial infrastructure.
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 w-full max-lg:grid-cols-2 max-sm:grid-cols-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-[12px] p-7 flex flex-col gap-3 border border-[#E8E6E3]"
                variants={staggerItem}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[6px] bg-[#F7F3EE] flex items-center justify-center text-[#655343]">
                    {feature.icon}
                  </div>
                  <h4 className="font-eiko text-[18px] font-medium tracking-[-0.36px] text-[#2F2823]">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-[14px] leading-[20px] text-[#655343]/80">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Founder Quote */}
        <div className="pt-[80px] pb-[120px] max-lg:pt-16 max-lg:pb-20 max-sm:pt-12 max-sm:pb-16">
          <motion.div
            className="flex flex-row max-lg:flex-col rounded-[10px] overflow-hidden"
            style={{ gap: "0px" }}
            {...fadeInUp}
          >
            <QuoteVideo />

            <div
              className="bg-[#2F2823] flex flex-col max-lg:p-10 max-sm:p-6"
              style={{ flex: "1 0 0", padding: "60px 60px 48px", gap: "160px" }}
            >
              <motion.div
                className="flex flex-row max-sm:gap-6"
                style={{ gap: "40px" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="shrink-0" style={{ width: "28px", height: "24px" }}>
                  <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                    <path d="M12 0C7 0 4 4 4 9V20H12V10H7C7 5 9 2 12 1V0ZM24 0C19 0 16 4 16 9V20H24V10H19C19 5 21 2 24 1V0Z" fill="rgba(255,255,255,0.3)" />
                  </svg>
                </div>
                <p className="text-[26px] font-medium text-white leading-[36px] tracking-[-0.52px] max-sm:text-[20px] max-sm:leading-[28px]">
                  AI companies are paying real interest on actual hardware, but where does that yield go? It goes back to you.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col"
                style={{ placeContent: "flex-end", gap: "8px" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                viewport={{ once: true }}
              >
                <div>
                  <div
                    className="font-eiko text-white leading-[1] max-sm:text-[42px]"
                    style={{ fontSize: "70px", fontWeight: 500, letterSpacing: "-1.4px" }}
                  >
                    David Choi
                  </div>
                </div>
                <div className="text-[16px] text-white/50 tracking-[-0.32px]">CEO of USD.AI</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
