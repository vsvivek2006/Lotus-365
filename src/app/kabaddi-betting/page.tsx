import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pro Kabaddi Betting India | PKL Live Odds & Markets",
  description: "Bet on Pro Kabaddi League (PKL) matches on Lotus365. Live raid points, tackle counts, match winners, and instant UPI withdrawals 24/7 across India.",
  keywords: "kabaddi betting india, pkl betting, pro kabaddi betting, kabaddi online betting, pkl live odds, raid points betting, tackle points pkl",
  alternates: {
    canonical: "https://lotus365officialid.com/kabaddi-betting"
  }
};

import React from 'react';
import { KabaddiBettingPage } from '@/views/OtherSportPages';

export default function Page() {
  return <KabaddiBettingPage />;
}
