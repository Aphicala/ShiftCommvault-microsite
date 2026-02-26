import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const galanoGrotesque = localFont({
  src: [
    { path: "../public/fonts/GalanoGrotesqueAltRegular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/GalanoGrotesqueAltMedium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/GalanoGrotesqueAltBold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-galano",
});

export const metadata: Metadata = {
  title: "SHIFT 2026 - Commvault Cyber Resilience Event",
  description: "Join us on May 7, 2026, as we explore a new era of cyber resilience. Discover Commvault Cloud Unity™ and hear from global cyber resilience visionaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${galanoGrotesque.variable} ${galanoGrotesque.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
