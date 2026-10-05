import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BBL Betting 2026 | Big Bash League Odds & Exchange",
  description: "Bet on the Big Bash League (BBL) on Lotus365. Australian T20 cricket odds, Power Surge session markets, Perth Scorchers odds, and instant 2-minute cashouts.",
  keywords: "bbl betting, big bash league betting, bbl cricket odds, bbl exchange, perth scorchers odds, sydney sixers betting, australian t20 betting",
  alternates: {
    canonical: "https://lotus365officialid.com/bbl-betting",
  },
  openGraph: {
    title: "BBL Betting 2026 | Big Bash League Odds & Exchange",
    description: "Bet on the Big Bash League (BBL) on Lotus365. Australian T20 cricket odds, Power Surge session markets, Perth Scorchers odds, and instant 2-minute cashouts.",
    url: "https://lotus365officialid.com/bbl-betting",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BBL Betting 2026 | Big Bash League Odds & Exchange",
    description: "Bet on the Big Bash League (BBL) on Lotus365. Australian T20 cricket odds, Power Surge session markets, Perth Scorchers odds, and instant 2-minute cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { BblBettingPage } from '@/views/TournamentSportPages';

export default function Page() {
  return <BblBettingPage />;
}
