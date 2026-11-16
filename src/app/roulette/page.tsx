import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Roulette Online India | Live European & French Tables",
  description: "Play European and French Roulette live with crystal-clear 4K streams. Place inside/outside bets with high table limits and instant 2-minute cashouts.",
  keywords: "roulette online india, live roulette india, european roulette india, play roulette online, roulette real money india, roulette wheel odds",
  alternates: {
    canonical: "https://lotusplay365.shop/roulette",
  },
  openGraph: {
    title: "Roulette Online India | Live European & French Tables",
    description: "Play European and French Roulette live with crystal-clear 4K streams. Place inside/outside bets with high table limits and instant 2-minute cashouts.",
    url: "https://lotusplay365.shop/roulette",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roulette Online India | Live European & French Tables",
    description: "Play European and French Roulette live with crystal-clear 4K streams. Place inside/outside bets with high table limits and instant 2-minute cashouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { RoulettePage } from '@/views/CasinoGamePages';

export default function Page() {
  return <RoulettePage />;
}
