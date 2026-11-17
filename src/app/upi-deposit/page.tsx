import { Metadata } from 'next';
import React from 'react';
import { UpiDepositPage } from "@/views/PaymentPages";

export const metadata: Metadata = {
  title: "Instant UPI Deposit Guide (30 Seconds) | Lotus365 Banking",
  description: "Deposit INR funds instantly via PhonePe, Google Pay, Paytm, or BHIM UPI on Lotus365. Min deposit ₹100 with 12-digit UTR validation.",
  alternates: {
    canonical: "https://lotusplay365.shop/upi-deposit",
  },
  openGraph: {
    title: "Instant UPI Deposit Guide (30 Seconds) | Lotus365 Banking",
    description: "Deposit INR funds instantly via PhonePe, Google Pay, Paytm, or BHIM UPI on Lotus365. Min deposit ₹100 with 12-digit UTR validation.",
    url: "https://lotusplay365.shop/upi-deposit",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant UPI Deposit Guide (30 Seconds) | Lotus365 Banking",
    description: "Deposit INR funds instantly via PhonePe, Google Pay, Paytm, or BHIM UPI on Lotus365. Min deposit ₹100 with 12-digit UTR validation.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <UpiDepositPage />;
}
