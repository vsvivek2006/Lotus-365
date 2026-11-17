import { Metadata } from 'next';
import React from 'react';
import { ReviewPage } from "@/views/BlogGuidePages";

export const metadata: Metadata = {
  title: "Lotus365 In-Depth Review 2026 | Ratings, Trust & Legality",
  description: "Unbiased comprehensive review of Lotus365 sports exchange, live casino tables, payment speed, licensing integrity, and player security.",
  alternates: {
    canonical: "https://lotusplay365.shop/lotus365-review",
  },
  openGraph: {
    title: "Lotus365 In-Depth Review 2026 | Ratings, Trust & Legality",
    description: "Unbiased comprehensive review of Lotus365 sports exchange, live casino tables, payment speed, licensing integrity, and player security.",
    url: "https://lotusplay365.shop/lotus365-review",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 In-Depth Review 2026 | Ratings, Trust & Legality",
    description: "Unbiased comprehensive review of Lotus365 sports exchange, live casino tables, payment speed, licensing integrity, and player security.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <ReviewPage />;
}
