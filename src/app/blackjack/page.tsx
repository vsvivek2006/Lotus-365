import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Blackjack India | Real Dealer 21 with 99.5% RTP",
  description: "Play real money Blackjack 21 online with 99.5% RTP. Enjoy side bets like Perfect Pairs and 21+3 with professional live dealers and fast UPI settlements.",
  keywords: "blackjack online india, live blackjack india, play blackjack 21, real money blackjack, online 21 card game, blackjack strategy india",
  alternates: {
    canonical: "https://lotus365officialid.com/blackjack",
  },
  openGraph: {
    title: "Live Blackjack India | Real Dealer 21 with 99.5% RTP",
    description: "Play real money Blackjack 21 online with 99.5% RTP. Enjoy side bets like Perfect Pairs and 21+3 with professional live dealers and fast UPI settlements.",
    url: "https://lotus365officialid.com/blackjack",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Blackjack India | Real Dealer 21 with 99.5% RTP",
    description: "Play real money Blackjack 21 online with 99.5% RTP. Enjoy side bets like Perfect Pairs and 21+3 with professional live dealers and fast UPI settlements.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { BlackjackPage } from '@/views/CasinoGamePages';

export default function Page() {
  return <BlackjackPage />;
}
