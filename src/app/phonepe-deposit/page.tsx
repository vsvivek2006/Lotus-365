import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PhonePe Deposit Guide | Fast UPI Payments & 60s Credit",
  description: "Deposit money using PhonePe on Lotus365. Instant QR code payments, 0% fees, 60-second wallet credit, and guaranteed 2-minute UPI cashouts.",
  keywords: "phonepe deposit, phonepe betting deposit, phonepe upi payment lotus365, how to deposit via phonepe, instant phonepe betting",
  alternates: {
    canonical: "https://lotus365officialid.com/phonepe-deposit",
  },
  openGraph: {
    title: "PhonePe Deposit Guide | Fast UPI Payments & 60s Credit",
    description: "Deposit money using PhonePe on Lotus365. Instant QR code payments, 0% fees, 60-second wallet credit, and guaranteed 2-minute UPI cashouts.",
    url: "https://lotus365officialid.com/phonepe-deposit",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhonePe Deposit Guide | Fast UPI Payments & 60s Credit",
    description: "Deposit money using PhonePe on Lotus365. Instant QR code payments, 0% fees, 60-second wallet credit, and guaranteed 2-minute UPI cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { PhonePeDepositPage } from '@/views/WalletBankingPages';

export default function Page() {
  return <PhonePeDepositPage />;
}
