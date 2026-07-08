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
  metadataBase: new URL("https://kanghyeok.dev"),
  title: "Kanghyeok Lee | Frontend Developer Portfolio",
  description:
    "A job-focused personal portfolio for frontend and full-stack roles, with selected projects, skills, resume, and contact information.",
  openGraph: {
    title: "Kanghyeok Lee | Frontend Developer Portfolio",
    description:
      "Selected projects, skills, resume, and hire-ready frontend engineering evidence.",
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
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
