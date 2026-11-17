import { Metadata } from 'next';
import React from 'react';
import { CashbackOffersPage } from "@/views/BonusVipPages";

export const metadata: Metadata = {
  title: "Weekly 10% Net Loss Cashback | Lotus365 VIP Rewards",
  description: "Recover up to 10% of weekly net turnover with Lotus365 Cashback Offers. Automatic Monday credits with zero rollover requirements.",
  alternates: {
    canonical: "https://lotusplay365.shop/cashback-offers",
  },
  openGraph: {
    title: "Weekly 10% Net Loss Cashback | Lotus365 VIP Rewards",
    description: "Recover up to 10% of weekly net turnover with Lotus365 Cashback Offers. Automatic Monday credits with zero rollover requirements.",
    url: "https://lotusplay365.shop/cashback-offers",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly 10% Net Loss Cashback | Lotus365 VIP Rewards",
    description: "Recover up to 10% of weekly net turnover with Lotus365 Cashback Offers. Automatic Monday credits with zero rollover requirements.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <CashbackOffersPage />;
}
