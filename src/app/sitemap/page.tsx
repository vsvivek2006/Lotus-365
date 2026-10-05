import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HTML Sitemap | Complete Directory of Lotus365 Pages",
  description: "Navigate the complete directory of Lotus365 pages. Find quick links to cricket betting, live casino, Aviator crash games, bonuses, and banking guides.",
  keywords: "lotus365 sitemap, all lotus365 pages, lotus365 directory, lotus365 navigation, betting site sitemap india",
  alternates: {
    canonical: "https://lotus365officialid.com/sitemap",
  },
  openGraph: {
    title: "HTML Sitemap | Complete Directory of Lotus365 Pages",
    description: "Navigate the complete directory of Lotus365 pages. Find quick links to cricket betting, live casino, Aviator crash games, bonuses, and banking guides.",
    url: "https://lotus365officialid.com/sitemap",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Sitemap | Complete Directory of Lotus365 Pages",
    description: "Navigate the complete directory of Lotus365 pages. Find quick links to cricket betting, live casino, Aviator crash games, bonuses, and banking guides.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { SitemapPage } from '@/views/SitemapPage';

export default function Page() {
  return <SitemapPage />;
}
