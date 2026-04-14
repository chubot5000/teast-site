"use client";

export default function NewsBanner() {
  const text = "Let's talk autonomous trucking ";

  return (
    <div className="fixed top-0 left-0 z-999 flex w-full items-center justify-center border-b border-b-black/15 bg-white">
      <div className="relative flex h-[2.4rem] w-full items-center overflow-clip">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="type-s-11 mx-24 inline-flex items-center gap-6 whitespace-nowrap text-dark">
              {text}
              <a
                href="https://tally.so/r/ob9a0M"
                target="_blank"
                rel="noopener noreferrer"
                className="type-s-11 text-pink underlined"
              >
                Get in touch
              </a>
            </span>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={`b-${i}`} className="type-s-11 mx-24 inline-flex items-center gap-6 whitespace-nowrap text-dark">
              {text}
              <a
                href="https://tally.so/r/ob9a0M"
                target="_blank"
                rel="noopener noreferrer"
                className="type-s-11 text-pink underlined"
              >
                Get in touch
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
