"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CloseIcon } from "./icons";

export default function NewsBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 z-999 flex w-full items-center justify-center border-b border-b-black/15 bg-white"
          initial={{ y: 0 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mr-48 flex-1 overflow-hidden">
            <div className="flex py-12 justify-center">
              <div className="flex flex-nowrap items-start gap-4">
                <p className="type-s-11 md:type-s-12 text-dark whitespace-nowrap">
                  Let&apos;s talk autonomous trucking{" "}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to https://tally.so/r/ob9a0M"
                  className="text-dark"
                  href="https://tally.so/r/ob9a0M"
                >
                  <div className="inline-flex flex-nowrap items-center gap-2">
                    <span className="type-s-11 md:type-s-12 under whitespace-nowrap">
                      Get in touch
                    </span>
                    <ArrowUpRight />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-center absolute top-0 right-0 mr-12 h-full">
            <button
              className="p-10"
              aria-label="Close news banner"
              onClick={() => setVisible(false)}
            >
              <CloseIcon />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
