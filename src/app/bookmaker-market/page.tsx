import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bookmaker Market Guide | Instant Liquidity & Zero Delay",
  description: "Master the Bookmaker Market on Lotus365. Enjoy instant order execution, 100% guaranteed liquidity, tight 2% margins, and sub-2-minute UPI cashouts.",
  keywords: "bookmaker market betting, bookmaker odds cricket, instant matching betting, bookmaker vs exchange, lotus365 bookmaker market",
  alternates: {
    canonical: "https://lotus365officialid.com/bookmaker-market",
  },
  openGraph: {
    title: "Bookmaker Market Guide | Instant Liquidity & Zero Delay",
    description: "Master the Bookmaker Market on Lotus365. Enjoy instant order execution, 100% guaranteed liquidity, tight 2% margins, and sub-2-minute UPI cashouts.",
    url: "https://lotus365officialid.com/bookmaker-market",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookmaker Market Guide | Instant Liquidity & Zero Delay",
    description: "Master the Bookmaker Market on Lotus365. Enjoy instant order execution, 100% guaranteed liquidity, tight 2% margins, and sub-2-minute UPI cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { BookmakerMarketPage } from '@/views/ExchangeGuidePages';

export default function Page() {
  return <BookmakerMarketPage />;
}
