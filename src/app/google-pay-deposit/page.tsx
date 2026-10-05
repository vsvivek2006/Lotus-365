import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Google Pay Deposit Guide | Fast GPay UPI Payments",
  description: "Deposit money using Google Pay (GPay) on Lotus365. Enjoy instant UPI transfers, 0% fees, 60-second wallet credit, and guaranteed 2-minute cashouts.",
  keywords: "google pay deposit, gpay betting deposit, google pay upi lotus365, how to deposit with gpay, instant gpay betting",
  alternates: {
    canonical: "https://lotus365officialid.com/google-pay-deposit",
  },
  openGraph: {
    title: "Google Pay Deposit Guide | Fast GPay UPI Payments",
    description: "Deposit money using Google Pay (GPay) on Lotus365. Enjoy instant UPI transfers, 0% fees, 60-second wallet credit, and guaranteed 2-minute cashouts.",
    url: "https://lotus365officialid.com/google-pay-deposit",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Pay Deposit Guide | Fast GPay UPI Payments",
    description: "Deposit money using Google Pay (GPay) on Lotus365. Enjoy instant UPI transfers, 0% fees, 60-second wallet credit, and guaranteed 2-minute cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { GooglePayDepositPage } from '@/views/WalletBankingPages';

export default function Page() {
  return <GooglePayDepositPage />;
}
