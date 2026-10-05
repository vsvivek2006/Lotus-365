import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cricket Toss Prediction | Pitch Reports & Match Impact",
  description: "Analyze cricket toss predictions and pitch reports on Lotus365. Learn how coin toss outcomes impact match odds, dew factor strategies, and cash out in 2 minutes.",
  keywords: "cricket toss prediction, toss betting, pitch report cricket, dew factor betting, match toss odds, coin flip betting cricket",
  alternates: {
    canonical: "https://lotus365officialid.com/cricket-toss-prediction",
  },
  openGraph: {
    title: "Cricket Toss Prediction | Pitch Reports & Match Impact",
    description: "Analyze cricket toss predictions and pitch reports on Lotus365. Learn how coin toss outcomes impact match odds, dew factor strategies, and cash out in 2 minutes.",
    url: "https://lotus365officialid.com/cricket-toss-prediction",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricket Toss Prediction | Pitch Reports & Match Impact",
    description: "Analyze cricket toss predictions and pitch reports on Lotus365. Learn how coin toss outcomes impact match odds, dew factor strategies, and cash out in 2 minutes.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { CricketTossPredictionPage } from '@/views/TournamentSportPages';

export default function Page() {
  return <CricketTossPredictionPage />;
}
