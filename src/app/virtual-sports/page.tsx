import { Metadata } from 'next';
import React from 'react';
import { VirtualSportsPage } from "@/views/SpecialGamePages";

export const metadata: Metadata = {
  title: "Virtual Sports 24/7 Betting | Virtual Cricket & Football | Lotus365",
  description: "Experience 24/7 virtual cricket leagues, virtual premier football, and greyhound racing with instant round settlements on Lotus365.",
  alternates: {
    canonical: "https://lotusplay365.shop/virtual-sports",
  },
  openGraph: {
    title: "Virtual Sports 24/7 Betting | Virtual Cricket & Football | Lotus365",
    description: "Experience 24/7 virtual cricket leagues, virtual premier football, and greyhound racing with instant round settlements on Lotus365.",
    url: "https://lotusplay365.shop/virtual-sports",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Sports 24/7 Betting | Virtual Cricket & Football | Lotus365",
    description: "Experience 24/7 virtual cricket leagues, virtual premier football, and greyhound racing with instant round settlements on Lotus365.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <VirtualSportsPage />;
}
