import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ICC ODI World Cup Betting | 50-Over Cricket Odds",
  description: "Bet on the ICC Cricket World Cup on Lotus365. Comprehensive 50-over exchange odds, session runs, outright tournament favorites, and 2-minute cashouts.",
  keywords: "icc world cup betting, odi world cup odds, cricket world cup betting, 50 over cricket betting, world cup outright odds, team india world cup betting",
  alternates: {
    canonical: "https://lotus365officialid.com/icc-odi-world-cup",
  },
  openGraph: {
    title: "ICC ODI World Cup Betting | 50-Over Cricket Odds",
    description: "Bet on the ICC Cricket World Cup on Lotus365. Comprehensive 50-over exchange odds, session runs, outright tournament favorites, and 2-minute cashouts.",
    url: "https://lotus365officialid.com/icc-odi-world-cup",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICC ODI World Cup Betting | 50-Over Cricket Odds",
    description: "Bet on the ICC Cricket World Cup on Lotus365. Comprehensive 50-over exchange odds, session runs, outright tournament favorites, and 2-minute cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { IccOdiWorldCupPage } from '@/views/TournamentSportPages';

export default function Page() {
  return <IccOdiWorldCupPage />;
}
