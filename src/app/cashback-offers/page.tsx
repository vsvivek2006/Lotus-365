import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Weekly Betting Cashback | Up to 15% Loss Protection",
  description: "Play with confidence on Lotus365. Enjoy up to 15% weekly loss cashback credited automatically to your account every Monday with zero turnover hurdles.",
  keywords: "cashback betting india, lotus365 cashback, weekly cashback betting, cricket cashback offer india, casino loss rebate, betting insurance india",
  alternates: {
    canonical: "https://lotus365officialid.com/cashback-offers",
  },
  openGraph: {
    title: "Weekly Betting Cashback | Up to 15% Loss Protection",
    description: "Play with confidence on Lotus365. Enjoy up to 15% weekly loss cashback credited automatically to your account every Monday with zero turnover hurdles.",
    url: "https://lotus365officialid.com/cashback-offers",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly Betting Cashback | Up to 15% Loss Protection",
    description: "Play with confidence on Lotus365. Enjoy up to 15% weekly loss cashback credited automatically to your account every Monday with zero turnover hurdles.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { CashbackOffersPage } from '@/views/BonusVipPages';

export default function Page() {
  return <CashbackOffersPage />;
}
