import type { Metadata } from "next";
import { Barlow_Condensed, Geist } from "next/font/google";
import { profile } from "@/lib/portfolio-data";
import "./globals.css";
import "./portfolio.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: "Kanghyeok Lee | Frontend, Full-stack & AI Developer", template: "%s | Kanghyeok Lee" },
  description:
    "My portfolio as a Sydney-based junior developer building React, Next.js, full-stack, and practical AI projects.",
  openGraph: {
    title: "Kanghyeok Lee | Junior Frontend, Full-stack & AI Developer",
    description:
      "Projects I built, the choices I made, and the tools I use as a junior frontend, full-stack, and AI developer.",
    images: [{ url: "/images/work/incidentdesk.webp", alt: "IncidentDesk guest workspace showing a sample report and a source runbook" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
