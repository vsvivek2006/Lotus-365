import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Exchange Commission Rates | Transparent 0-2% Pricing",
  description: "Understand Lotus365 exchange commission rates. Pay only 0% to 2% on net winnings, 0% on losses, 0% on deposits and withdrawals, with instant UPI cashouts.",
  keywords: "exchange commission rates, lotus365 commission, betting exchange fees, low commission cricket betting, net winnings commission, zero fee deposit betting",
  alternates: {
    canonical: "https://lotus365officialid.com/exchange-commission-rates",
  },
  openGraph: {
    title: "Exchange Commission Rates | Transparent 0-2% Pricing",
    description: "Understand Lotus365 exchange commission rates. Pay only 0% to 2% on net winnings, 0% on losses, 0% on deposits and withdrawals, with instant UPI cashouts.",
    url: "https://lotus365officialid.com/exchange-commission-rates",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exchange Commission Rates | Transparent 0-2% Pricing",
    description: "Understand Lotus365 exchange commission rates. Pay only 0% to 2% on net winnings, 0% on losses, 0% on deposits and withdrawals, with instant UPI cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { ExchangeCommissionRatesPage } from '@/views/ExchangeGuidePages';

export default function Page() {
  return <ExchangeCommissionRatesPage />;
}
