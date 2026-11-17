import { Metadata } from 'next';
import React from 'react';
import { WelcomeBonusPage } from "@/views/BonusVipPages";

export const metadata: Metadata = {
  title: "Lotus365 Welcome Bonus | 100% First Deposit Match",
  description: "Claim up to ₹10,000 welcome bonus on your first deposit via WhatsApp on Lotus365. Transparent turnover rules and instant wallet credit.",
  alternates: {
    canonical: "https://lotusplay365.shop/welcome-bonus",
  },
  openGraph: {
    title: "Lotus365 Welcome Bonus | 100% First Deposit Match",
    description: "Claim up to ₹10,000 welcome bonus on your first deposit via WhatsApp on Lotus365. Transparent turnover rules and instant wallet credit.",
    url: "https://lotusplay365.shop/welcome-bonus",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 Welcome Bonus | 100% First Deposit Match",
    description: "Claim up to ₹10,000 welcome bonus on your first deposit via WhatsApp on Lotus365. Transparent turnover rules and instant wallet credit.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <WelcomeBonusPage />;
}
