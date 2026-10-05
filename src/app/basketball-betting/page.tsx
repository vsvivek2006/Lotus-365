import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Basketball Betting India | NBA & EuroLeague Live Odds",
  description: "Wager on NBA, EuroLeague, and FIBA basketball tournaments. Spread betting, over/under point totals, player props, and 2-minute UPI cashouts on Lotus365.",
  keywords: "basketball betting india, nba betting india, online basketball betting, nba odds india, point spread basketball, euroleague betting",
  alternates: {
    canonical: "https://lotus365officialid.com/basketball-betting",
  },
  openGraph: {
    title: "Basketball Betting India | NBA & EuroLeague Live Odds",
    description: "Wager on NBA, EuroLeague, and FIBA basketball tournaments. Spread betting, over/under point totals, player props, and 2-minute UPI cashouts on Lotus365.",
    url: "https://lotus365officialid.com/basketball-betting",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basketball Betting India | NBA & EuroLeague Live Odds",
    description: "Wager on NBA, EuroLeague, and FIBA basketball tournaments. Spread betting, over/under point totals, player props, and 2-minute UPI cashouts on Lotus365.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { BasketballBettingPage } from '@/views/OtherSportPages';

export default function Page() {
  return <BasketballBettingPage />;
}
