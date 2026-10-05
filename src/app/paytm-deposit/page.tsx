import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Paytm Deposit Guide | Instant UPI & Wallet Payments",
  description: "Deposit money using Paytm UPI on Lotus365. Enjoy instant QR code transfers, 0% fees, 60-second wallet credit, and guaranteed 2-minute UPI cashouts.",
  keywords: "paytm deposit, paytm betting deposit, paytm upi lotus365, how to deposit with paytm, instant paytm betting",
  alternates: {
    canonical: "https://lotus365officialid.com/paytm-deposit",
  },
  openGraph: {
    title: "Paytm Deposit Guide | Instant UPI & Wallet Payments",
    description: "Deposit money using Paytm UPI on Lotus365. Enjoy instant QR code transfers, 0% fees, 60-second wallet credit, and guaranteed 2-minute UPI cashouts.",
    url: "https://lotus365officialid.com/paytm-deposit",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paytm Deposit Guide | Instant UPI & Wallet Payments",
    description: "Deposit money using Paytm UPI on Lotus365. Enjoy instant QR code transfers, 0% fees, 60-second wallet credit, and guaranteed 2-minute UPI cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { PaytmDepositPage } from '@/views/WalletBankingPages';

export default function Page() {
  return <PaytmDepositPage />;
}
