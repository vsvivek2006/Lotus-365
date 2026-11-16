import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Responsible Gaming Policy | Lotus365 Player Safety",
  description: "Lotus365 is committed to safe, responsible gaming. Explore our player protection tools, deposit limits, self-exclusion policy, and strict 18+ verification rules.",
  keywords: "responsible gambling india, lotus365 responsible gaming, safe betting india, problem gambling support, deposit limits betting, self exclusion betting india",
  alternates: {
    canonical: "https://lotusplay365.shop/responsible-gaming",
  },
  openGraph: {
    title: "Responsible Gaming Policy | Lotus365 Player Safety",
    description: "Lotus365 is committed to safe, responsible gaming. Explore our player protection tools, deposit limits, self-exclusion policy, and strict 18+ verification rules.",
    url: "https://lotusplay365.shop/responsible-gaming",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsible Gaming Policy | Lotus365 Player Safety",
    description: "Lotus365 is committed to safe, responsible gaming. Explore our player protection tools, deposit limits, self-exclusion policy, and strict 18+ verification rules.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { ResponsibleGamingPage } from '@/views/ResponsibleGamingPage';

export default function Page() {
  return <ResponsibleGamingPage />;
}
