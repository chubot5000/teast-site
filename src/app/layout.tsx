import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$CHIP - USD.AI Governance Token",
  description: "CHIP is the governance token of USD.AI, a protocol generating real revenue from AI companies financing GPU infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ "--duration": "0.4" } as React.CSSProperties}>
      <body>{children}</body>
    </html>
  );
}
