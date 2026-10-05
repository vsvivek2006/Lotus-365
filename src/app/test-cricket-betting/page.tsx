import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Test Cricket Betting | Live Session & Match Odds",
  description: "Bet on Test cricket on Lotus365. World Test Championship, Border-Gavaskar Trophy, morning session runs, draw-no-bet, and 2-minute instant cashouts.",
  keywords: "test cricket betting, test match odds, world test championship betting, border gavaskar trophy odds, test session betting, draw no bet test cricket",
  alternates: {
    canonical: "https://lotus365officialid.com/test-cricket-betting",
  },
  openGraph: {
    title: "Test Cricket Betting | Live Session & Match Odds",
    description: "Bet on Test cricket on Lotus365. World Test Championship, Border-Gavaskar Trophy, morning session runs, draw-no-bet, and 2-minute instant cashouts.",
    url: "https://lotus365officialid.com/test-cricket-betting",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Cricket Betting | Live Session & Match Odds",
    description: "Bet on Test cricket on Lotus365. World Test Championship, Border-Gavaskar Trophy, morning session runs, draw-no-bet, and 2-minute instant cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { TestCricketBettingPage } from '@/views/TournamentSportPages';

export default function Page() {
  return <TestCricketBettingPage />;
}
