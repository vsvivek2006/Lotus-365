import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Cricket Score & Odds | Real-Time Match Exchange",
  description: "Track live cricket scores and real-time betting odds on Lotus365. Sub-second ball-by-ball odds updates, live scorecard data, and 2-minute UPI cashouts.",
  keywords: "live cricket score odds, real time cricket betting, ball by ball odds, live match odds cricket, fast cricket exchange odds, lotus365 live score",
  alternates: {
    canonical: "https://lotus365officialid.com/live-cricket-score-odds",
  },
  openGraph: {
    title: "Live Cricket Score & Odds | Real-Time Match Exchange",
    description: "Track live cricket scores and real-time betting odds on Lotus365. Sub-second ball-by-ball odds updates, live scorecard data, and 2-minute UPI cashouts.",
    url: "https://lotus365officialid.com/live-cricket-score-odds",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Cricket Score & Odds | Real-Time Match Exchange",
    description: "Track live cricket scores and real-time betting odds on Lotus365. Sub-second ball-by-ball odds updates, live scorecard data, and 2-minute UPI cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { LiveCricketScoreOddsPage } from '@/views/TournamentSportPages';

export default function Page() {
  return <LiveCricketScoreOddsPage />;
}
