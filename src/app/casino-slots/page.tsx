import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Casino Slots India | 500+ Megaways & Jackpots",
  description: "Spin 500+ real money video slots on Lotus365. Enjoy Pragmatic Play, Megaways, progressive jackpots, high RTP slot machines, and instant 2-minute cashouts.",
  keywords: "online slots india, casino slots real money, megaways slots india, gates of olympus lotus365, sweet bonanza india, best online slots india",
  alternates: {
    canonical: "https://lotusplay365.shop/casino-slots",
  },
  openGraph: {
    title: "Online Casino Slots India | 500+ Megaways & Jackpots",
    description: "Spin 500+ real money video slots on Lotus365. Enjoy Pragmatic Play, Megaways, progressive jackpots, high RTP slot machines, and instant 2-minute cashouts.",
    url: "https://lotusplay365.shop/casino-slots",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Casino Slots India | 500+ Megaways & Jackpots",
    description: "Spin 500+ real money video slots on Lotus365. Enjoy Pragmatic Play, Megaways, progressive jackpots, high RTP slot machines, and instant 2-minute cashouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { CasinoSlotsPage } from '@/views/CasinoGamePages';

export default function Page() {
  return <CasinoSlotsPage />;
}
