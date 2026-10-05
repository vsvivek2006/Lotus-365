import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Virtual Sports Betting India | 24/7 Cricket & Football",
  description: "Never wait for match day! Bet on 24/7 virtual cricket, virtual football leagues, and greyhound racing with rapid 3-minute match resolutions on Lotus365.",
  keywords: "virtual sports betting india, virtual cricket betting, virtual football india, virtual horse racing india, rng sports betting, betradar virtuals",
  alternates: {
    canonical: "https://lotus365officialid.com/virtual-sports",
  },
  openGraph: {
    title: "Virtual Sports Betting India | 24/7 Cricket & Football",
    description: "Never wait for match day! Bet on 24/7 virtual cricket, virtual football leagues, and greyhound racing with rapid 3-minute match resolutions on Lotus365.",
    url: "https://lotus365officialid.com/virtual-sports",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Sports Betting India | 24/7 Cricket & Football",
    description: "Never wait for match day! Bet on 24/7 virtual cricket, virtual football leagues, and greyhound racing with rapid 3-minute match resolutions on Lotus365.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { VirtualSportsPage } from '@/views/SpecialGamePages';

export default function Page() {
  return <VirtualSportsPage />;
}
