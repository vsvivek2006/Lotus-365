import { Metadata } from 'next';
import React from 'react';
import { TwoMinuteCashoutPage } from "@/views/PaymentPages";

export const metadata: Metadata = {
  title: "Guaranteed 2-Minute Cashout Guide | Lotus365 Fast Payouts",
  description: "Learn how Lotus365 processes and settles player withdrawals within 120 seconds via direct UPI and IMPS banking with zero deduction fees.",
  alternates: {
    canonical: "https://lotusplay365.shop/2-minute-cashout",
  },
  openGraph: {
    title: "Guaranteed 2-Minute Cashout Guide | Lotus365 Fast Payouts",
    description: "Learn how Lotus365 processes and settles player withdrawals within 120 seconds via direct UPI and IMPS banking with zero deduction fees.",
    url: "https://lotusplay365.shop/2-minute-cashout",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guaranteed 2-Minute Cashout Guide | Lotus365 Fast Payouts",
    description: "Learn how Lotus365 processes and settles player withdrawals within 120 seconds via direct UPI and IMPS banking with zero deduction fees.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <TwoMinuteCashoutPage />;
}
