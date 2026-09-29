import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Betting Odds Calculator | Decimal, Fractional & Payouts",
  description: "Convert betting odds and calculate exact payouts on Lotus365. Decimal vs fractional vs American odds formulas, implied probability, and 2-minute cashouts.",
  keywords: "betting odds calculator, decimal odds converter, how to calculate betting payouts, implied probability calculator, cricket odds math, lotus365 calculator",
  alternates: {
    canonical: "https://lotus365officialid.com/betting-odds-calculator"
  }
};

import React from 'react';
import { ResponsibleGamblingToolsPage } from '@/views/StrategyResourcePages';

export default function Page() {
  return <ResponsibleGamblingToolsPage />;
}
