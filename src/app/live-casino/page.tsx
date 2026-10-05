import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Casino India | 1000+ Real Dealer Casino Tables",
  description: "Play at India's top live casino on Lotus365. Enjoy Teen Patti, Andar Bahar, Roulette, and Blackjack with Hindi-speaking dealers and instant 2-minute payouts.",
  keywords: "live casino india, online casino india, live dealer casino, teen patti online, andar bahar live, lightning roulette india, live blackjack india, best casino platform india",
  alternates: {
    canonical: "https://lotus365officialid.com/live-casino",
  },
  openGraph: {
    title: "Live Casino India | 1000+ Real Dealer Casino Tables",
    description: "Play at India's top live casino on Lotus365. Enjoy Teen Patti, Andar Bahar, Roulette, and Blackjack with Hindi-speaking dealers and instant 2-minute payouts.",
    url: "https://lotus365officialid.com/live-casino",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Casino India | 1000+ Real Dealer Casino Tables",
    description: "Play at India's top live casino on Lotus365. Enjoy Teen Patti, Andar Bahar, Roulette, and Blackjack with Hindi-speaking dealers and instant 2-minute payouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { LiveCasinoPage } from '@/views/LiveCasinoPage';

export default function Page() {
  return <LiveCasinoPage />;
}
