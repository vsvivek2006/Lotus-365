import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cricket Betting India | Live Match Odds & IPL Betting",
  description: "Bet on live cricket matches with Lotus365 India. Enjoy 0% commission, ball-by-ball odds, session markets, and instant 2-minute UPI cashouts. Register now!",
  keywords: "cricket betting india, online cricket betting, cricket exchange live, best cricket odds, ipl betting 2026, session runs betting, live cricket match odds india",
  alternates: {
    canonical: "https://lotus365officialid.com/cricket-betting",
  },
  openGraph: {
    title: "Cricket Betting India | Live Match Odds & IPL Betting",
    description: "Bet on live cricket matches with Lotus365 India. Enjoy 0% commission, ball-by-ball odds, session markets, and instant 2-minute UPI cashouts. Register now!",
    url: "https://lotus365officialid.com/cricket-betting",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricket Betting India | Live Match Odds & IPL Betting",
    description: "Bet on live cricket matches with Lotus365 India. Enjoy 0% commission, ball-by-ball odds, session markets, and instant 2-minute UPI cashouts. Register now!",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { CricketBettingPage } from '@/views/CricketBettingPage';

export default function Page() {
  return <CricketBettingPage />;
}
