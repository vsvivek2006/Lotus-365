import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Match Odds Trading | Cricket Exchange Scalping & Swings",
  description: "Learn professional Match Odds Trading on Lotus365. Master scalping, swing trading cricket matches, placing limit orders, and fast 2-minute cashouts.",
  keywords: "match odds trading, cricket scalping guide, swing trading cricket, exchange order book trading, cricket price movements, cricket trading strategies",
  alternates: {
    canonical: "https://lotus365officialid.com/match-odds-trading",
  },
  openGraph: {
    title: "Match Odds Trading | Cricket Exchange Scalping & Swings",
    description: "Learn professional Match Odds Trading on Lotus365. Master scalping, swing trading cricket matches, placing limit orders, and fast 2-minute cashouts.",
    url: "https://lotus365officialid.com/match-odds-trading",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Match Odds Trading | Cricket Exchange Scalping & Swings",
    description: "Learn professional Match Odds Trading on Lotus365. Master scalping, swing trading cricket matches, placing limit orders, and fast 2-minute cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { MatchOddsTradingPage } from '@/views/ExchangeGuidePages';

export default function Page() {
  return <MatchOddsTradingPage />;
}
