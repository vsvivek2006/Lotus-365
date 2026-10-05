import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bet Slip & Order Routing Guide | Matched vs Unmatched",
  description: "Master the Lotus365 exchange bet slip. Learn how to manage matched, unmatched, and partially matched orders, cancel slips instantly, and cash out in 2 minutes.",
  keywords: "bet slip guide, matched vs unmatched bets, cancel unmatched bet, exchange bet slip tutorial, keep in play bets, lotus365 order routing",
  alternates: {
    canonical: "https://lotus365officialid.com/bet-slip-guide",
  },
  openGraph: {
    title: "Bet Slip & Order Routing Guide | Matched vs Unmatched",
    description: "Master the Lotus365 exchange bet slip. Learn how to manage matched, unmatched, and partially matched orders, cancel slips instantly, and cash out in 2 minutes.",
    url: "https://lotus365officialid.com/bet-slip-guide",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bet Slip & Order Routing Guide | Matched vs Unmatched",
    description: "Master the Lotus365 exchange bet slip. Learn how to manage matched, unmatched, and partially matched orders, cancel slips instantly, and cash out in 2 minutes.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { BetSlipGuidePage } from '@/views/ExchangeGuidePages';

export default function Page() {
  return <BetSlipGuidePage />;
}
