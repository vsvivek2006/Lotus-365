import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cricket Exchange India | 0% Commission Back & Lay Odds",
  description: "Experience true peer-to-peer cricket trading on Lotus365 Exchange. Back and lay live match outcomes with 0% commission, deep liquidity, and 2-minute cashouts.",
  keywords: "cricket exchange online, cricket exchange india, p2p cricket betting, back and lay cricket, best cricket exchange, 0 commission cricket exchange, cricket trading india",
  alternates: {
    canonical: "https://lotusplay365.shop/cricket-exchange",
  },
  openGraph: {
    title: "Cricket Exchange India | 0% Commission Back & Lay Odds",
    description: "Experience true peer-to-peer cricket trading on Lotus365 Exchange. Back and lay live match outcomes with 0% commission, deep liquidity, and 2-minute cashouts.",
    url: "https://lotusplay365.shop/cricket-exchange",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricket Exchange India | 0% Commission Back & Lay Odds",
    description: "Experience true peer-to-peer cricket trading on Lotus365 Exchange. Back and lay live match outcomes with 0% commission, deep liquidity, and 2-minute cashouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { CricketExchangePage } from '@/views/CricketExchangePage';

export default function Page() {
  return <CricketExchangePage />;
}
