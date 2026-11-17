import { Metadata } from 'next';
import React from 'react';
import { SafeBettingGuidePage } from "@/views/BlogGuidePages";

export const metadata: Metadata = {
  title: "Safe Betting & Responsible Gaming Handbook | Lotus365",
  description: "Essential guidelines for bankroll allocation, stop-loss discipline, and responsible entertainment on Lotus365 India.",
  alternates: {
    canonical: "https://lotusplay365.shop/safe-betting-guide",
  },
  openGraph: {
    title: "Safe Betting & Responsible Gaming Handbook | Lotus365",
    description: "Essential guidelines for bankroll allocation, stop-loss discipline, and responsible entertainment on Lotus365 India.",
    url: "https://lotusplay365.shop/safe-betting-guide",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Betting & Responsible Gaming Handbook | Lotus365",
    description: "Essential guidelines for bankroll allocation, stop-loss discipline, and responsible entertainment on Lotus365 India.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <SafeBettingGuidePage />;
}
