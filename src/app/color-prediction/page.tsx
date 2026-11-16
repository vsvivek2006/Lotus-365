import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Color Prediction Game India | Fast Parity & Colour Wiz",
  description: "Predict Red, Green, or Violet in 30-second color prediction games on Lotus365. High payout multipliers, zero lag, and instant UPI cashouts 24/7.",
  keywords: "color prediction game india, colour prediction game, colour wiz india, colour betting game online, fast parity game, win go color game, daman game alternative",
  alternates: {
    canonical: "https://lotusplay365.shop/color-prediction",
  },
  openGraph: {
    title: "Color Prediction Game India | Fast Parity & Colour Wiz",
    description: "Predict Red, Green, or Violet in 30-second color prediction games on Lotus365. High payout multipliers, zero lag, and instant UPI cashouts 24/7.",
    url: "https://lotusplay365.shop/color-prediction",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Prediction Game India | Fast Parity & Colour Wiz",
    description: "Predict Red, Green, or Violet in 30-second color prediction games on Lotus365. High payout multipliers, zero lag, and instant UPI cashouts 24/7.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

import React from 'react';
import { ColorPredictionPage } from '@/views/SpecialGamePages';

export default function Page() {
  return <ColorPredictionPage />;
}
