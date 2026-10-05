import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Lotus365 | India",
  description: "Learn about Lotus365, India",
  keywords: "about lotus365, lotus365 official platform, lotus365 company history, lotus365 trusted, lotus365 license, lotus365 owner, best betting exchange india",
  alternates: {
    canonical: "https://lotus365officialid.com/about",
  },
  openGraph: {
    title: "About Lotus365 | India",
    description: "Learn about Lotus365, India",
    url: "https://lotus365officialid.com/about",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lotus365 | India",
    description: "Learn about Lotus365, India",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { AboutPage } from '@/views/AboutPage';

export default function Page() {
  return <AboutPage />;
}
