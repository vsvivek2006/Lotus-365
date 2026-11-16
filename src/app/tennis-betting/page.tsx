import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tennis Betting India | ATP, WTA & Grand Slam Live Odds",
  description: "Bet live on Wimbledon, US Open, ATP, and WTA tennis circuits. Enjoy real-time set winner odds, game handicap markets, and fast payouts on Lotus365.",
  keywords: "tennis betting india, atp tennis betting, wimbledon betting india, grand slam odds, live tennis betting, set betting tennis, us open tennis odds",
  alternates: {
    canonical: "https://lotusplay365.shop/tennis-betting",
  },
  openGraph: {
    title: "Tennis Betting India | ATP, WTA & Grand Slam Live Odds",
    description: "Bet live on Wimbledon, US Open, ATP, and WTA tennis circuits. Enjoy real-time set winner odds, game handicap markets, and fast payouts on Lotus365.",
    url: "https://lotusplay365.shop/tennis-betting",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tennis Betting India | ATP, WTA & Grand Slam Live Odds",
    description: "Bet live on Wimbledon, US Open, ATP, and WTA tennis circuits. Enjoy real-time set winner odds, game handicap markets, and fast payouts on Lotus365.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { TennisBettingPage } from '@/views/FootballTennisBettingPage';

export default function Page() {
  return <TennisBettingPage />;
}
