"use client";

import Image from "next/image";
import PillButton from "./PillButton";

const teamPhotos = [
  {
    src: "/images/team-truck-maintenance.jpg",
    width: "23vw",
    height: "17vw",
    left: "0",
  },
  {
    src: "/images/team-planning-woman.jpg",
    width: "31vw",
    height: "23vw",
    left: "calc(100% - (47vw + (39vw*0.5) + (31vw*0.5)))",
  },
  {
    src: "/images/team-engineer-thinking.jpg",
    width: "39vw",
    height: "29vw",
    left: "calc(100% - (47vw + (39vw*0.5)))",
  },
  {
    src: "/images/team-whiteboard.jpg",
    width: "47vw",
    height: "35vw",
    left: "calc(100% - 47vw)",
  },
];

export default function CareersSection() {
  return (
    <section
      id="careers"
      className="relative flex w-full flex-col overflow-clip bg-white py-[var(--padding-y)] lg:min-h-screen"
    >
      <div className="debug absolute inset-0 pointer-events-none" />
      <div className="flex flex-col gap-65 md:gap-96">
        {/* Heading */}
        <div className="flex flex-col gap-32">
          <div className="flex w-full justify-center text-balance">
            <h2 className="w-calc text-[5.5rem] leading-[90%] tracking-[-0.22rem] md:text-[max(9rem,min(9vw,13rem))] md:tracking-[max(-0.6rem,min(-0.36vw,-0.52rem))]">
              <span className="flex flex-col">
                <span className="text-left">Build Physical AI with us.</span>
              </span>
            </h2>
          </div>
          <div className="w-calc flex">
            <PillButton href="#careers">Join the team</PillButton>
          </div>
        </div>

        {/* Team photo carousel */}
        <div className="relative flex w-full px-24">
          <div className="rounded-calc relative flex h-[35vw] w-full items-center overflow-clip">
            {teamPhotos.map((photo, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: photo.left,
                  width: photo.width,
                  height: photo.height,
                }}
              >
                <div
                  className="size-full overflow-clip bg-gray-300"
                  style={{ borderRadius: "12px" }}
                >
                  <div className="size-full">
                    <Image
                      src={photo.src}
                      alt="Team photo"
                      fill
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
