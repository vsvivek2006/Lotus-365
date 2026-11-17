import { Metadata } from 'next';
import React from 'react';
import { BasketballBettingPage } from "@/views/OtherSportPages";

export const metadata: Metadata = {
  title: "NBA & International Basketball Betting | Lotus365",
  description: "Trade live NBA, EuroLeague, and FIBA basketball odds on Lotus365. Point spreads, over/under totals, quarter betting, and fast withdrawals.",
  alternates: {
    canonical: "https://lotusplay365.shop/basketball-betting",
  },
  openGraph: {
    title: "NBA & International Basketball Betting | Lotus365",
    description: "Trade live NBA, EuroLeague, and FIBA basketball odds on Lotus365. Point spreads, over/under totals, quarter betting, and fast withdrawals.",
    url: "https://lotusplay365.shop/basketball-betting",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NBA & International Basketball Betting | Lotus365",
    description: "Trade live NBA, EuroLeague, and FIBA basketball odds on Lotus365. Point spreads, over/under totals, quarter betting, and fast withdrawals.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <BasketballBettingPage />;
}
