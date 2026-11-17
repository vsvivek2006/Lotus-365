import { Metadata } from 'next';
import React from 'react';
import { CrashGamesPage } from "@/views/SpecialGamePages";

export const metadata: Metadata = {
  title: "Online Crash Games India | High Multiplier Games | Lotus365",
  description: "Discover top real-money crash games on Lotus365 including Spribe Aviator, Aviatrix, and Space XY with provably fair verification and instant UPI payouts.",
  alternates: {
    canonical: "https://lotusplay365.shop/crash-games",
  },
  openGraph: {
    title: "Online Crash Games India | High Multiplier Games | Lotus365",
    description: "Discover top real-money crash games on Lotus365 including Spribe Aviator, Aviatrix, and Space XY with provably fair verification and instant UPI payouts.",
    url: "https://lotusplay365.shop/crash-games",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Crash Games India | High Multiplier Games | Lotus365",
    description: "Discover top real-money crash games on Lotus365 including Spribe Aviator, Aviatrix, and Space XY with provably fair verification and instant UPI payouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <CrashGamesPage />;
}
