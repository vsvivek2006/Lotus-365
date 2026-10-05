import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Football Betting India | Premier League & ISL Match Odds",
  description: "Bet on international football, UEFA Champions League, and ISL matches at Lotus365. Live Asian handicap, goal totals, and instant 2-minute UPI cashouts.",
  keywords: "football betting india, online football betting, premier league betting india, champions league betting, isl betting, both teams to score odds, asian handicap india",
  alternates: {
    canonical: "https://lotus365officialid.com/football-betting",
  },
  openGraph: {
    title: "Football Betting India | Premier League & ISL Match Odds",
    description: "Bet on international football, UEFA Champions League, and ISL matches at Lotus365. Live Asian handicap, goal totals, and instant 2-minute UPI cashouts.",
    url: "https://lotus365officialid.com/football-betting",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Football Betting India | Premier League & ISL Match Odds",
    description: "Bet on international football, UEFA Champions League, and ISL matches at Lotus365. Live Asian handicap, goal totals, and instant 2-minute UPI cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { FootballBettingPage } from '@/views/FootballTennisBettingPage';

export default function Page() {
  return <FootballBettingPage />;
}
