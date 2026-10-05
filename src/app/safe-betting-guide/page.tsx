import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Safe Betting Guide India | Bankroll & Risk Control",
  description: "Learn how to protect your funds and bet responsibly. Explore proven bankroll management strategies, loss-limit discipline, and safe online betting practices.",
  keywords: "safe betting india, responsible gambling india, betting limits india, safe online gambling guide, stop loss betting, bankroll management",
  alternates: {
    canonical: "https://lotus365officialid.com/safe-betting-guide",
  },
  openGraph: {
    title: "Safe Betting Guide India | Bankroll & Risk Control",
    description: "Learn how to protect your funds and bet responsibly. Explore proven bankroll management strategies, loss-limit discipline, and safe online betting practices.",
    url: "https://lotus365officialid.com/safe-betting-guide",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Betting Guide India | Bankroll & Risk Control",
    description: "Learn how to protect your funds and bet responsibly. Explore proven bankroll management strategies, loss-limit discipline, and safe online betting practices.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { SafeBettingGuidePage } from '@/views/BlogGuidePages';

export default function Page() {
  return <SafeBettingGuidePage />;
}
