import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lotus365 Official – Cricket Betting Exchange & Casino India",
  description: "Lotus365 Official – cricket betting exchange & live casino India. Instant WhatsApp ID, 30-sec UPI deposits, 2-min cashouts. Trusted platform for fast payouts.",
  keywords: "lotus365, lotus365 login, lotus365 sign up, cricket betting, live casino india, online betting india",
  alternates: {
    canonical: "https://lotusplay365.shop/",
  },
  openGraph: {
    title: "Lotus365 Official – Cricket Betting Exchange & Casino India",
    description: "Lotus365 Official – cricket betting exchange & live casino India. Instant WhatsApp ID, 30-sec UPI deposits, 2-min cashouts. Trusted platform for fast payouts.",
    url: "https://lotusplay365.shop/",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 Official – Cricket Betting Exchange & Casino India",
    description: "Lotus365 Official – cricket betting exchange & live casino India. Instant WhatsApp ID, 30-sec UPI deposits, 2-min cashouts. Trusted platform for fast payouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { HomePage } from '@/views/HomePage';

export default function Page() {
  return <HomePage />;
}
