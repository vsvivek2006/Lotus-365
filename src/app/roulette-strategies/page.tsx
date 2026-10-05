import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Roulette Strategies & Tips | Martingale, Fibonacci Guide",
  description: "Master live European roulette strategies on Lotus365. Learn Martingale, D",
  keywords: "roulette strategies, martingale roulette system, european roulette tips, fibonacci roulette strategy, dalembert system, lotus365 roulette",
  alternates: {
    canonical: "https://lotus365officialid.com/roulette-strategies",
  },
  openGraph: {
    title: "Roulette Strategies & Tips | Martingale, Fibonacci Guide",
    description: "Master live European roulette strategies on Lotus365. Learn Martingale, D",
    url: "https://lotus365officialid.com/roulette-strategies",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roulette Strategies & Tips | Martingale, Fibonacci Guide",
    description: "Master live European roulette strategies on Lotus365. Learn Martingale, D",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { RouletteStrategiesPage } from '@/views/AsianCasinoPages';

export default function Page() {
  return <RouletteStrategiesPage />;
}
