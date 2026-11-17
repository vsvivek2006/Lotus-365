import { Metadata } from 'next';
import React from 'react';
import { ImpsWithdrawalPage } from "@/views/PaymentPages";

export const metadata: Metadata = {
  title: "IMPS Interbank Instant Withdrawal Guide | Lotus365",
  description: "Withdraw large winnings directly to State Bank of India, HDFC, ICICI, Axis, and 140+ Indian commercial banks via 24/7 IMPS transfer.",
  alternates: {
    canonical: "https://lotusplay365.shop/imps-withdrawal",
  },
  openGraph: {
    title: "IMPS Interbank Instant Withdrawal Guide | Lotus365",
    description: "Withdraw large winnings directly to State Bank of India, HDFC, ICICI, Axis, and 140+ Indian commercial banks via 24/7 IMPS transfer.",
    url: "https://lotusplay365.shop/imps-withdrawal",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMPS Interbank Instant Withdrawal Guide | Lotus365",
    description: "Withdraw large winnings directly to State Bank of India, HDFC, ICICI, Axis, and 140+ Indian commercial banks via 24/7 IMPS transfer.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <ImpsWithdrawalPage />;
}
