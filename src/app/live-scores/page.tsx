import { Metadata } from 'next';
import React from 'react';
import { LiveScoresPage } from '@/views/LiveScoresPage';

export const metadata: Metadata = {
  title: "Lotus365 Live Scores | Real-Time Cricket Match Centre & Exchange Odds",
  description: "Get instant ball-by-ball cricket scores, full scorecards and live exchange trading odds with the Lotus365 Live Score Centre. IPL live scores, match updates and 0% commission trading.",
  keywords: "lotus365 live scores, lotus 365 live cricket, lotus365 live score centre, lotus365 match updates, ipl live score lotus365, real time cricket scorecard",
  alternates: {
    canonical: "https://lotusplay365.shop/live-scores",
  },
  openGraph: {
    title: "Lotus365 Live Scores | Real-Time Cricket Match Centre & Exchange Odds",
    description: "Get instant ball-by-ball cricket scores, full scorecards and live exchange trading odds with the Lotus365 Live Score Centre. IPL live scores, match updates and 0% commission trading.",
    url: "https://lotusplay365.shop/live-scores",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/images/banners/hero_banner_bet_sports.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 Live Scores | Real-Time Cricket Match Centre & Exchange Odds",
    description: "Get instant ball-by-ball cricket scores, full scorecards and live exchange trading odds with the Lotus365 Live Score Centre.",
    images: ["https://lotusplay365.shop/images/banners/hero_banner_bet_sports.webp"],
  },
};

export default function Page() {
  return <LiveScoresPage />;
}
