import { Metadata } from 'next';
import React from 'react';
import { PaymentMethodsPage } from "@/views/PaymentPages";

export const metadata: Metadata = {
  title: "Payment Methods & Banking Directory | Lotus365 Official",
  description: "Comprehensive directory of supported payment methods on Lotus365: UPI (PhonePe, GPay, Paytm), IMPS interbank transfer, and USDT crypto.",
  alternates: {
    canonical: "https://lotusplay365.shop/payment-methods",
  },
  openGraph: {
    title: "Payment Methods & Banking Directory | Lotus365 Official",
    description: "Comprehensive directory of supported payment methods on Lotus365: UPI (PhonePe, GPay, Paytm), IMPS interbank transfer, and USDT crypto.",
    url: "https://lotusplay365.shop/payment-methods",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Methods & Banking Directory | Lotus365 Official",
    description: "Comprehensive directory of supported payment methods on Lotus365: UPI (PhonePe, GPay, Paytm), IMPS interbank transfer, and USDT crypto.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <PaymentMethodsPage />;
}
