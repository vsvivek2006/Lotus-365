import { Metadata } from 'next';
import React from 'react';
import { KabaddiBettingPage } from "@/views/OtherSportPages";

export const metadata: Metadata = {
  title: "Pro Kabaddi League (PKL) Betting Odds | Lotus365 India",
  description: "Bet on live Pro Kabaddi League matches with Lotus365. Enjoy live raid-by-raid markets, super tackle odds, and instant 2-minute UPI cashouts.",
  alternates: {
    canonical: "https://lotusplay365.shop/kabaddi-betting",
  },
  openGraph: {
    title: "Pro Kabaddi League (PKL) Betting Odds | Lotus365 India",
    description: "Bet on live Pro Kabaddi League matches with Lotus365. Enjoy live raid-by-raid markets, super tackle odds, and instant 2-minute UPI cashouts.",
    url: "https://lotusplay365.shop/kabaddi-betting",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Kabaddi League (PKL) Betting Odds | Lotus365 India",
    description: "Bet on live Pro Kabaddi League matches with Lotus365. Enjoy live raid-by-raid markets, super tackle odds, and instant 2-minute UPI cashouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <KabaddiBettingPage />;
}
