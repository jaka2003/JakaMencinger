import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personal } from "@/lib/data";

const inter = Inter({
  subsets: ["latin", "latin-ext"], // latin-ext = šumniki č, š, ž
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(personal.siteUrl),
  title: `${personal.name} – ${personal.title}`,
  description: personal.heroText,
  keywords: [
    "Jaka Mencinger",
    "Junior Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Slovenija",
    "Lesce",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} – ${personal.title}`,
    description: personal.heroText,
    url: personal.siteUrl,
    siteName: personal.name,
    type: "website",
    locale: "sl_SI",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} – ${personal.title}`,
    description: personal.heroText,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
