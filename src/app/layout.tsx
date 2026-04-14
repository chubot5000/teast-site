import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homepage | Waabi",
  description:
    "Waabi is pioneering Physical AI, starting with autonomous trucks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ "--duration": "0.4" } as React.CSSProperties}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
