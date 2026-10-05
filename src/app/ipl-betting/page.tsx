import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPL Betting 2026 | Live Indian Premier League Odds",
  description: "Bet on IPL 2026 matches live with Lotus365. Get top match odds, toss predictions, session runs (Khado/Lambi), and instant UPI payouts on every Indian match.",
  keywords: "ipl betting, ipl betting 2026, ipl online betting india, ipl match odds, ipl live betting, ipl session runs, ipl exchange odds, ipl winner odds 2026",
  alternates: {
    canonical: "https://lotus365officialid.com/ipl-betting",
  },
  openGraph: {
    title: "IPL Betting 2026 | Live Indian Premier League Odds",
    description: "Bet on IPL 2026 matches live with Lotus365. Get top match odds, toss predictions, session runs (Khado/Lambi), and instant UPI payouts on every Indian match.",
    url: "https://lotus365officialid.com/ipl-betting",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPL Betting 2026 | Live Indian Premier League Odds",
    description: "Bet on IPL 2026 matches live with Lotus365. Get top match odds, toss predictions, session runs (Khado/Lambi), and instant UPI payouts on every Indian match.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { IplBettingPage } from '@/views/IplBettingPage';

export default function Page() {
  return <IplBettingPage />;
}
