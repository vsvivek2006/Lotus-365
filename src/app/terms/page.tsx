import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms & Conditions | Official Lotus365 Platform Rules",
  description: "Review official Terms & Conditions for Lotus365. Read our exchange wagering rules, 2-minute cashout guidelines, account security, and fair-play standards.",
  keywords: "lotus365 terms conditions, lotus365 rules, lotus365 terms of service, betting rules india, exchange betting terms, lotus365 legal agreement",
  alternates: {
    canonical: "https://lotusplay365.shop/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Official Lotus365 Platform Rules",
    description: "Review official Terms & Conditions for Lotus365. Read our exchange wagering rules, 2-minute cashout guidelines, account security, and fair-play standards.",
    url: "https://lotusplay365.shop/terms",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Official Lotus365 Platform Rules",
    description: "Review official Terms & Conditions for Lotus365. Read our exchange wagering rules, 2-minute cashout guidelines, account security, and fair-play standards.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { TermsPage } from '@/views/TermsPage';

export default function Page() {
  return <TermsPage />;
}
