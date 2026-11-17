import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Lotus365 Official | Cricket Exchange & Live Casino",
  description: "Learn about Lotus365 Official – India's cricket betting exchange & live casino platform. 24/7 WhatsApp concierge, instant ID activation, 2-min cashouts.",
  keywords: "about lotus365, lotus365 official platform, lotus365 company history, lotus365 trusted, lotus365 license, lotus365 owner, best betting exchange india",
  alternates: {
    canonical: "https://lotusplay365.shop/about",
  },
  openGraph: {
    title: "About Lotus365 Official | Cricket Exchange & Live Casino",
    description: "Learn about Lotus365 Official – India's cricket betting exchange & live casino platform. 24/7 WhatsApp concierge, instant ID activation, 2-min cashouts.",
    url: "https://lotusplay365.shop/about",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lotus365 Official | Cricket Exchange & Live Casino",
    description: "Learn about Lotus365 Official – India's cricket betting exchange & live casino platform. 24/7 WhatsApp concierge, instant ID activation, 2-min cashouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { AboutPage } from '@/views/AboutPage';

export default function Page() {
  return <AboutPage />;
}
