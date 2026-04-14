import { ReactNode } from "react";

export default function PillButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div>
      <a
        className={`flex h-36 shrink-0 items-center justify-center px-24 md:h-48 bg-pink text-white ${className}`}
        href={href}
        style={{ borderRadius: "50px" }}
      >
        <span className="type-s-11 md:type-s-12 leading-[140%] tracking-[0.024rem]">
          {children}
        </span>
      </a>
    </div>
  );
}
