import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PSL Betting 2026 | Pakistan Super League Live Odds",
  description: "Bet on Pakistan Super League (PSL) cricket on Lotus365. High liquidity exchange odds, live ball-by-ball session trading, and instant 2-minute UPI withdrawals.",
  keywords: "psl betting, pakistan super league betting, psl live odds, psl cricket exchange, psl match odds, lahore qalandars betting",
  alternates: {
    canonical: "https://lotus365officialid.com/psl-betting",
  },
  openGraph: {
    title: "PSL Betting 2026 | Pakistan Super League Live Odds",
    description: "Bet on Pakistan Super League (PSL) cricket on Lotus365. High liquidity exchange odds, live ball-by-ball session trading, and instant 2-minute UPI withdrawals.",
    url: "https://lotus365officialid.com/psl-betting",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PSL Betting 2026 | Pakistan Super League Live Odds",
    description: "Bet on Pakistan Super League (PSL) cricket on Lotus365. High liquidity exchange odds, live ball-by-ball session trading, and instant 2-minute UPI withdrawals.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { PslBettingPage } from '@/views/TournamentSportPages';

export default function Page() {
  return <PslBettingPage />;
}
