import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lotus365 Referral Program | Refer & Earn Real Cash",
  description: "Earn unlimited real cash bonuses by referring friends to Lotus365! Get cash rewards for every active referral with instant withdrawal eligibility via UPI.",
  keywords: "lotus365 referral bonus, lotus365 refer a friend, lotus365 affiliate, invite friends betting india, earn money betting referral, betting affiliate program india",
  alternates: {
    canonical: "https://lotus365officialid.com/referral-bonus",
  },
  openGraph: {
    title: "Lotus365 Referral Program | Refer & Earn Real Cash",
    description: "Earn unlimited real cash bonuses by referring friends to Lotus365! Get cash rewards for every active referral with instant withdrawal eligibility via UPI.",
    url: "https://lotus365officialid.com/referral-bonus",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 Referral Program | Refer & Earn Real Cash",
    description: "Earn unlimited real cash bonuses by referring friends to Lotus365! Get cash rewards for every active referral with instant withdrawal eligibility via UPI.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { ReferralBonusPage } from '@/views/BonusVipPages';

export default function Page() {
  return <ReferralBonusPage />;
}
