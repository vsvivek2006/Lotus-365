import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Horse Racing Betting India | Mumbai & Pune Derby Odds",
  description: "Bet on live Indian horse racing in Mumbai, Pune, Bangalore, and Kolkata. Win, Place, and Forecast pool betting with instant race settlement on Lotus365.",
  keywords: "horse racing betting india, indian derby betting, rwitc mumbai odds, pune horse racing, bangalore turf club betting, thoroughbred odds india",
  alternates: {
    canonical: "https://lotus365officialid.com/horse-racing-betting",
  },
  openGraph: {
    title: "Horse Racing Betting India | Mumbai & Pune Derby Odds",
    description: "Bet on live Indian horse racing in Mumbai, Pune, Bangalore, and Kolkata. Win, Place, and Forecast pool betting with instant race settlement on Lotus365.",
    url: "https://lotus365officialid.com/horse-racing-betting",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horse Racing Betting India | Mumbai & Pune Derby Odds",
    description: "Bet on live Indian horse racing in Mumbai, Pune, Bangalore, and Kolkata. Win, Place, and Forecast pool betting with instant race settlement on Lotus365.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { HorseRacingPage } from '@/views/OtherSportPages';

export default function Page() {
  return <HorseRacingPage />;
}
