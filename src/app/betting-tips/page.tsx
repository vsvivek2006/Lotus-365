import { Metadata } from 'next';
import React from 'react';
import { BettingTipsPage } from "@/views/BlogGuidePages";

export const metadata: Metadata = {
  title: "Expert Cricket Betting Tips & Match Analysis | Lotus365",
  description: "Free expert cricket betting tips, pitch reports, weather analyses, and tactical trading strategies for IPL 2026 and international tournaments.",
  alternates: {
    canonical: "https://lotusplay365.shop/betting-tips",
  },
  openGraph: {
    title: "Expert Cricket Betting Tips & Match Analysis | Lotus365",
    description: "Free expert cricket betting tips, pitch reports, weather analyses, and tactical trading strategies for IPL 2026 and international tournaments.",
    url: "https://lotusplay365.shop/betting-tips",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Cricket Betting Tips & Match Analysis | Lotus365",
    description: "Free expert cricket betting tips, pitch reports, weather analyses, and tactical trading strategies for IPL 2026 and international tournaments.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <BettingTipsPage />;
}
