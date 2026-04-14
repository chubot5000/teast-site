import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Waabi is pioneering the future of Physical AI.",
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
