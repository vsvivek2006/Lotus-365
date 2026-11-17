import { Metadata } from 'next';
import React from 'react';
import { VipBlackCardPage } from "@/views/BonusVipPages";

export const metadata: Metadata = {
  title: "VIP Black Card Tier | Exclusive High-Roller Privileges | Lotus365",
  description: "Unlock dedicated personal account management, zero-limit instant withdrawals, and private luxury rewards with the Lotus365 VIP Black Card.",
  alternates: {
    canonical: "https://lotusplay365.shop/vip-black-card",
  },
  openGraph: {
    title: "VIP Black Card Tier | Exclusive High-Roller Privileges | Lotus365",
    description: "Unlock dedicated personal account management, zero-limit instant withdrawals, and private luxury rewards with the Lotus365 VIP Black Card.",
    url: "https://lotusplay365.shop/vip-black-card",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIP Black Card Tier | Exclusive High-Roller Privileges | Lotus365",
    description: "Unlock dedicated personal account management, zero-limit instant withdrawals, and private luxury rewards with the Lotus365 VIP Black Card.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <VipBlackCardPage />;
}
