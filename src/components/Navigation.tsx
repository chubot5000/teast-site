"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WaabiLogo, MenuIcon } from "./icons";

export default function Navigation() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setBannerVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="css-header fixed right-0 left-0 z-500 mx-auto flex flex-col items-center justify-center sm:top-34 sm:w-338 sm:gap-10 top-24 w-[calc(100vw-2.4rem)]"
      style={{ transform: bannerVisible ? "translateY(42px)" : "translateY(0)" }}
    >
      <div
        className="relative flex w-full items-start overflow-clip sm:bg-black/15 sm:p-1 bg-black/15 p-1"
        style={{ borderRadius: "12px" }}
      >
        <div
          className="relative h-full w-full bg-white pt-0"
          style={{ borderRadius: "11px" }}
        >
          <div className="item-start relative flex h-full w-full pr-13 pl-28">
            <div className="flex w-full justify-between">
              <div className="flex gap-25 [@media(max-width:320px)]:gap-15">
                <a
                  aria-label="Waabi Logo"
                  target="_self"
                  className="flex h-53 w-auto items-center"
                  href="/"
                >
                  <WaabiLogo className="mt-[-0.4rem] h-auto w-56 sm:w-75" />
                </a>
                <div className="relative mt-[1.4rem] flex h-fit w-156 [@media(max-width:320px)]:mt-[1.7rem]">
                  <span className="font-neue inline-flex cursor-pointer text-[1.5rem] leading-[160%] tracking-[0.015rem] capitalize [@media(max-width:320px)]:text-[1.25rem]">
                    Home
                  </span>
                </div>
              </div>
              <button
                aria-label="Menu"
                className="flex-center mt-[0.95rem] h-36 w-36 rounded-full"
                name="Menu"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
          <motion.div
            className="bg-pink absolute right-25 bottom-0 left-25 h-2 origin-left"
            style={{ scaleX: progressWidth }}
          />
        </div>
      </div>
    </header>
  );
}
