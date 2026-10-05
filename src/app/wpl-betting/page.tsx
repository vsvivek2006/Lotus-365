import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WPL Betting 2026 | Women's Premier League Live Odds",
  description: "Bet on Women's Premier League (WPL) cricket on Lotus365. Real-time exchange odds, 6-over powerplay session markets, and instant 2-minute UPI cashouts.",
  keywords: "wpl betting, womens premier league betting, wpl cricket odds, wpl live exchange, wpl session betting, wpl match prediction",
  alternates: {
    canonical: "https://lotus365officialid.com/wpl-betting",
  },
  openGraph: {
    title: "WPL Betting 2026 | Women's Premier League Live Odds",
    description: "Bet on Women's Premier League (WPL) cricket on Lotus365. Real-time exchange odds, 6-over powerplay session markets, and instant 2-minute UPI cashouts.",
    url: "https://lotus365officialid.com/wpl-betting",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WPL Betting 2026 | Women's Premier League Live Odds",
    description: "Bet on Women's Premier League (WPL) cricket on Lotus365. Real-time exchange odds, 6-over powerplay session markets, and instant 2-minute UPI cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { WplBettingPage } from '@/views/TournamentSportPages';

export default function Page() {
  return <WplBettingPage />;
}
