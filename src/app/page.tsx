import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lotus365 Official — Cricket Betting Exchange & Live Casino",
  description: "Join Lotus365, India",
  keywords: "lotus365, lotus365 login, lotus365 sign up, cricket betting, live casino india, online betting india",
  alternates: {
    canonical: "https://lotusplay365.shop/",
  },
  openGraph: {
    title: "Lotus365 Official — Cricket Betting Exchange & Live Casino",
    description: "Join Lotus365, India",
    url: "https://lotusplay365.shop/",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 Official — Cricket Betting Exchange & Live Casino",
    description: "Join Lotus365, India",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { HomePage } from '@/views/HomePage';

export default function Page() {
  return <HomePage />;
}
