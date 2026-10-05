import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lotus365 Official — Cricket Betting Exchange & Live Casino",
  description: "Join Lotus365, India",
  keywords: "lotus365, lotus365 login, lotus365 sign up, cricket betting, live casino india, online betting india",
  alternates: {
    canonical: "https://lotus365officialid.com/",
  },
  openGraph: {
    title: "Lotus365 Official — Cricket Betting Exchange & Live Casino",
    description: "Join Lotus365, India",
    url: "https://lotus365officialid.com/",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 Official — Cricket Betting Exchange & Live Casino",
    description: "Join Lotus365, India",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { HomePage } from '@/views/HomePage';

export default function Page() {
  return <HomePage />;
}
