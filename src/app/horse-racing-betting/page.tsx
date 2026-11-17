import { Metadata } from 'next';
import React from 'react';
import { HorseRacingPage } from "@/views/OtherSportPages";

export const metadata: Metadata = {
  title: "Horse Racing Betting India | Live Turf Club Odds | Lotus365",
  description: "Wager on Mumbai Mahalaxmi, Bangalore, Kolkata, and international horse racecards with certified starting odds and 2-minute UPI cashouts.",
  alternates: {
    canonical: "https://lotusplay365.shop/horse-racing-betting",
  },
  openGraph: {
    title: "Horse Racing Betting India | Live Turf Club Odds | Lotus365",
    description: "Wager on Mumbai Mahalaxmi, Bangalore, Kolkata, and international horse racecards with certified starting odds and 2-minute UPI cashouts.",
    url: "https://lotusplay365.shop/horse-racing-betting",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horse Racing Betting India | Live Turf Club Odds | Lotus365",
    description: "Wager on Mumbai Mahalaxmi, Bangalore, Kolkata, and international horse racecards with certified starting odds and 2-minute UPI cashouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <HorseRacingPage />;
}
