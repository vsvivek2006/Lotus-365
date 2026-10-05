import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lotus365 Blue Edition | High Performance Cricket Exchange",
  description: "Discover Lotus365 Blue edition. High-speed low-data trading interface, unified wallet access, dark mode UX, and guaranteed 2-minute UPI cashouts.",
  keywords: "lotus365 blue, lotus365 blue login, lotus 365 blue app, lotus365 blue edition, high speed cricket exchange, dark mode lotus365",
  alternates: {
    canonical: "https://lotus365officialid.com/lotus365-blue",
  },
  openGraph: {
    title: "Lotus365 Blue Edition | High Performance Cricket Exchange",
    description: "Discover Lotus365 Blue edition. High-speed low-data trading interface, unified wallet access, dark mode UX, and guaranteed 2-minute UPI cashouts.",
    url: "https://lotus365officialid.com/lotus365-blue",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 Blue Edition | High Performance Cricket Exchange",
    description: "Discover Lotus365 Blue edition. High-speed low-data trading interface, unified wallet access, dark mode UX, and guaranteed 2-minute UPI cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { Lotus365BluePage } from '@/views/StrategyResourcePages';

export default function Page() {
  return <Lotus365BluePage />;
}
