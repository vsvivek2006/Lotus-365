import { Metadata } from 'next';
import React from 'react';
import { DragonTigerPage } from "@/views/CasinoGamePages";

export const metadata: Metadata = {
  title: "Live Dragon Tiger Real Cash | 2-Card Fast Action | Lotus365",
  description: "Play live Dragon Tiger online with Hindi-speaking dealers on Lotus365. Instant 25-second rounds, side bets, and guaranteed 2-minute cashouts.",
  alternates: {
    canonical: "https://lotusplay365.shop/dragon-tiger",
  },
  openGraph: {
    title: "Live Dragon Tiger Real Cash | 2-Card Fast Action | Lotus365",
    description: "Play live Dragon Tiger online with Hindi-speaking dealers on Lotus365. Instant 25-second rounds, side bets, and guaranteed 2-minute cashouts.",
    url: "https://lotusplay365.shop/dragon-tiger",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Dragon Tiger Real Cash | 2-Card Fast Action | Lotus365",
    description: "Play live Dragon Tiger online with Hindi-speaking dealers on Lotus365. Instant 25-second rounds, side bets, and guaranteed 2-minute cashouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <DragonTigerPage />;
}
