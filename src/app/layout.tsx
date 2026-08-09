import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/seed75"),
  title: "Kanghyeok Lee | Junior Frontend, Full-stack & AI Developer",
  description:
    "My portfolio as a Sydney-based junior developer building React, Next.js, full-stack, and practical AI projects.",
  openGraph: {
    title: "Kanghyeok Lee | Junior Frontend, Full-stack & AI Developer",
    description:
      "Projects I built, the choices I made, and the tools I use as a junior frontend, full-stack, and AI developer.",
    images: ["/images/portfolio-command-center.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
