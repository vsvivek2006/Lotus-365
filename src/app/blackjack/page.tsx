import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Blackjack India | Real Dealer 21 with 99.5% RTP",
  description: "Play real money Blackjack 21 online with 99.5% RTP. Enjoy side bets like Perfect Pairs and 21+3 with professional live dealers and fast UPI settlements.",
  keywords: "blackjack online india, live blackjack india, play blackjack 21, real money blackjack, online 21 card game, blackjack strategy india",
  alternates: {
    canonical: "https://lotusplay365.shop/blackjack",
  },
  openGraph: {
    title: "Live Blackjack India | Real Dealer 21 with 99.5% RTP",
    description: "Play real money Blackjack 21 online with 99.5% RTP. Enjoy side bets like Perfect Pairs and 21+3 with professional live dealers and fast UPI settlements.",
    url: "https://lotusplay365.shop/blackjack",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Blackjack India | Real Dealer 21 with 99.5% RTP",
    description: "Play real money Blackjack 21 online with 99.5% RTP. Enjoy side bets like Perfect Pairs and 21+3 with professional live dealers and fast UPI settlements.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { BlackjackPage } from '@/views/CasinoGamePages';

export default function Page() {
  return <BlackjackPage />;
}
