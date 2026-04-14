import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waabi | Built to think. Born to haul.",
  description:
    "Waabi delivers autonomous trucking technology that's faster, safer, more scalable, and efficient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
