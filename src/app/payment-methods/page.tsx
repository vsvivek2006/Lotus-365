import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lotus365 Payment Methods | UPI, IMPS & Net Banking",
  description: "Explore all accepted payment methods on Lotus365: UPI (GPay, PhonePe, Paytm), IMPS NetBanking, and Crypto. Fast deposits and sub-2-minute cashouts 24/7.",
  keywords: "lotus365 payment methods, lotus365 deposit options, lotus365 withdrawal methods, upi imps betting india, crypto betting india, fastest betting payments",
  alternates: {
    canonical: "https://lotus365officialid.com/payment-methods",
  },
  openGraph: {
    title: "Lotus365 Payment Methods | UPI, IMPS & Net Banking",
    description: "Explore all accepted payment methods on Lotus365: UPI (GPay, PhonePe, Paytm), IMPS NetBanking, and Crypto. Fast deposits and sub-2-minute cashouts 24/7.",
    url: "https://lotus365officialid.com/payment-methods",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 Payment Methods | UPI, IMPS & Net Banking",
    description: "Explore all accepted payment methods on Lotus365: UPI (GPay, PhonePe, Paytm), IMPS NetBanking, and Crypto. Fast deposits and sub-2-minute cashouts 24/7.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { PaymentMethodsPage } from '@/views/PaymentPages';

export default function Page() {
  return <PaymentMethodsPage />;
}
