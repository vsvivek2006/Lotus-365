import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "UPI Betting Deposit India | PhonePe, GPay & Paytm Guide",
  description: "Deposit funds instantly using any Indian UPI app: PhonePe, Google Pay, or Paytm. Enjoy instant wallet updates and zero transaction charges on Lotus365.",
  keywords: "upi deposit betting, upi betting india, google pay betting deposit, phonepe betting deposit, paytm betting india, bhim upi betting, instant upi deposit lotus365",
  alternates: {
    canonical: "https://lotus365officialid.com/upi-deposit",
  },
  openGraph: {
    title: "UPI Betting Deposit India | PhonePe, GPay & Paytm Guide",
    description: "Deposit funds instantly using any Indian UPI app: PhonePe, Google Pay, or Paytm. Enjoy instant wallet updates and zero transaction charges on Lotus365.",
    url: "https://lotus365officialid.com/upi-deposit",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPI Betting Deposit India | PhonePe, GPay & Paytm Guide",
    description: "Deposit funds instantly using any Indian UPI app: PhonePe, Google Pay, or Paytm. Enjoy instant wallet updates and zero transaction charges on Lotus365.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { UpiDepositPage } from '@/views/PaymentPages';

export default function Page() {
  return <UpiDepositPage />;
}
