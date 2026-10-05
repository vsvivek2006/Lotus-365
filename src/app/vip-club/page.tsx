import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lotus365 VIP Club | Elite Rewards & Personal Manager",
  description: "Join the exclusive Lotus365 VIP Club. Enjoy dedicated 24/7 WhatsApp relationship managers, sub-60-second priority cashouts, and luxury high-roller perks.",
  keywords: "lotus365 vip club, lotus365 vip, lotus365 premium membership, vip betting india, vip casino india, high roller betting india",
  alternates: {
    canonical: "https://lotus365officialid.com/vip-club",
  },
  openGraph: {
    title: "Lotus365 VIP Club | Elite Rewards & Personal Manager",
    description: "Join the exclusive Lotus365 VIP Club. Enjoy dedicated 24/7 WhatsApp relationship managers, sub-60-second priority cashouts, and luxury high-roller perks.",
    url: "https://lotus365officialid.com/vip-club",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 VIP Club | Elite Rewards & Personal Manager",
    description: "Join the exclusive Lotus365 VIP Club. Enjoy dedicated 24/7 WhatsApp relationship managers, sub-60-second priority cashouts, and luxury high-roller perks.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { VipClubPage } from '@/views/BonusVipPages';

export default function Page() {
  return <VipClubPage />;
}
