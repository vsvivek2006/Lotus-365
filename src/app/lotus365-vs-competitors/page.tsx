import { Metadata } from 'next';
import React from 'react';
import { VsCompetitorsPage } from "@/views/BlogGuidePages";

export const metadata: Metadata = {
  title: "Lotus365 vs Traditional Bookmakers | Comparison Matrix",
  description: "See how Lotus365 0% commission exchange beats traditional bookmakers like Betway, Parimatch, and 1xBet in cashout speed and odds liquidity.",
  alternates: {
    canonical: "https://lotusplay365.shop/lotus365-vs-competitors",
  },
  openGraph: {
    title: "Lotus365 vs Traditional Bookmakers | Comparison Matrix",
    description: "See how Lotus365 0% commission exchange beats traditional bookmakers like Betway, Parimatch, and 1xBet in cashout speed and odds liquidity.",
    url: "https://lotusplay365.shop/lotus365-vs-competitors",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 vs Traditional Bookmakers | Comparison Matrix",
    description: "See how Lotus365 0% commission exchange beats traditional bookmakers like Betway, Parimatch, and 1xBet in cashout speed and odds liquidity.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <VsCompetitorsPage />;
}
