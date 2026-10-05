import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pro Kabaddi Betting India | PKL Live Odds & Markets",
  description: "Bet on Pro Kabaddi League (PKL) matches on Lotus365. Live raid points, tackle counts, match winners, and instant UPI withdrawals 24/7 across India.",
  keywords: "kabaddi betting india, pkl betting, pro kabaddi betting, kabaddi online betting, pkl live odds, raid points betting, tackle points pkl",
  alternates: {
    canonical: "https://lotus365officialid.com/kabaddi-betting",
  },
  openGraph: {
    title: "Pro Kabaddi Betting India | PKL Live Odds & Markets",
    description: "Bet on Pro Kabaddi League (PKL) matches on Lotus365. Live raid points, tackle counts, match winners, and instant UPI withdrawals 24/7 across India.",
    url: "https://lotus365officialid.com/kabaddi-betting",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Kabaddi Betting India | PKL Live Odds & Markets",
    description: "Bet on Pro Kabaddi League (PKL) matches on Lotus365. Live raid points, tackle counts, match winners, and instant UPI withdrawals 24/7 across India.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { KabaddiBettingPage } from '@/views/OtherSportPages';

export default function Page() {
  return <KabaddiBettingPage />;
}
