import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Betting Odds Calculator | Decimal, Fractional & Payouts",
  description: "Convert betting odds and calculate exact payouts on Lotus365. Decimal vs fractional vs American odds formulas, implied probability, and 2-minute cashouts.",
  keywords: "betting odds calculator, decimal odds converter, how to calculate betting payouts, implied probability calculator, cricket odds math, lotus365 calculator",
  alternates: {
    canonical: "https://lotus365officialid.com/betting-odds-calculator",
  },
  openGraph: {
    title: "Betting Odds Calculator | Decimal, Fractional & Payouts",
    description: "Convert betting odds and calculate exact payouts on Lotus365. Decimal vs fractional vs American odds formulas, implied probability, and 2-minute cashouts.",
    url: "https://lotus365officialid.com/betting-odds-calculator",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Betting Odds Calculator | Decimal, Fractional & Payouts",
    description: "Convert betting odds and calculate exact payouts on Lotus365. Decimal vs fractional vs American odds formulas, implied probability, and 2-minute cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { BettingOddsCalculatorPage } from '@/views/StrategyResourcePages';

export default function Page() {
  return <BettingOddsCalculatorPage />;
}
