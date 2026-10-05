import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Dealer Casino Games | Evolution, Ezugi & Pragmatic",
  description: "Play live dealer casino games on Lotus365. Enjoy Hindi dealers, Teen Patti, Roulette, Blackjack, Baccarat, and guaranteed 2-minute instant UPI cashouts.",
  keywords: "live dealer games, evolution gaming india, ezugi live casino, pragmatic play live, hindi live dealer, online live casino real cash",
  alternates: {
    canonical: "https://lotus365officialid.com/live-dealer-games",
  },
  openGraph: {
    title: "Live Dealer Casino Games | Evolution, Ezugi & Pragmatic",
    description: "Play live dealer casino games on Lotus365. Enjoy Hindi dealers, Teen Patti, Roulette, Blackjack, Baccarat, and guaranteed 2-minute instant UPI cashouts.",
    url: "https://lotus365officialid.com/live-dealer-games",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Dealer Casino Games | Evolution, Ezugi & Pragmatic",
    description: "Play live dealer casino games on Lotus365. Enjoy Hindi dealers, Teen Patti, Roulette, Blackjack, Baccarat, and guaranteed 2-minute instant UPI cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { LiveDealerGamesPage } from '@/views/AsianCasinoPages';

export default function Page() {
  return <LiveDealerGamesPage />;
}
