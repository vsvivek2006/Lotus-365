import { Metadata } from 'next';
import React from 'react';
import { LightningRoulettePage } from "@/views/CasinoGamePages";

export const metadata: Metadata = {
  title: "Lightning Roulette Live | Up to 500x Multipliers | Lotus365",
  description: "Play Evolution Lightning Roulette on Lotus365 India. Experience high-payout RNG lightning strikes up to 500x on straight-up bets with 2-minute payouts.",
  alternates: {
    canonical: "https://lotusplay365.shop/lightning-roulette",
  },
  openGraph: {
    title: "Lightning Roulette Live | Up to 500x Multipliers | Lotus365",
    description: "Play Evolution Lightning Roulette on Lotus365 India. Experience high-payout RNG lightning strikes up to 500x on straight-up bets with 2-minute payouts.",
    url: "https://lotusplay365.shop/lightning-roulette",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightning Roulette Live | Up to 500x Multipliers | Lotus365",
    description: "Play Evolution Lightning Roulette on Lotus365 India. Experience high-payout RNG lightning strikes up to 500x on straight-up bets with 2-minute payouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <LightningRoulettePage />;
}
