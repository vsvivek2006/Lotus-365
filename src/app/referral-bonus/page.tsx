import { Metadata } from 'next';
import React from 'react';
import { ReferralBonusPage } from "@/views/BonusVipPages";

export const metadata: Metadata = {
  title: "Refer a Friend & Earn Cash | Lotus365 Referral Program",
  description: "Invite friends to Lotus365 and earn real cash bonuses on every active registration and deposit. Unlimited referral payouts with zero caps.",
  alternates: {
    canonical: "https://lotusplay365.shop/referral-bonus",
  },
  openGraph: {
    title: "Refer a Friend & Earn Cash | Lotus365 Referral Program",
    description: "Invite friends to Lotus365 and earn real cash bonuses on every active registration and deposit. Unlimited referral payouts with zero caps.",
    url: "https://lotusplay365.shop/referral-bonus",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refer a Friend & Earn Cash | Lotus365 Referral Program",
    description: "Invite friends to Lotus365 and earn real cash bonuses on every active registration and deposit. Unlimited referral payouts with zero caps.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <ReferralBonusPage />;
}
