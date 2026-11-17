import { Metadata } from 'next';
import React from 'react';
import { FirstDepositBonusPage } from "@/views/BonusVipPages";

export const metadata: Metadata = {
  title: "First Deposit Bonus Guide | Lotus365 Promotions",
  description: "Double your starting sports betting and live casino bankroll with the Lotus365 First Deposit Bonus package. Instant activation on WhatsApp.",
  alternates: {
    canonical: "https://lotusplay365.shop/first-deposit-bonus",
  },
  openGraph: {
    title: "First Deposit Bonus Guide | Lotus365 Promotions",
    description: "Double your starting sports betting and live casino bankroll with the Lotus365 First Deposit Bonus package. Instant activation on WhatsApp.",
    url: "https://lotusplay365.shop/first-deposit-bonus",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Deposit Bonus Guide | Lotus365 Promotions",
    description: "Double your starting sports betting and live casino bankroll with the Lotus365 First Deposit Bonus package. Instant activation on WhatsApp.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <FirstDepositBonusPage />;
}
