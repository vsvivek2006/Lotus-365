import { Metadata } from 'next';
import React from 'react';
import { SpeedBaccaratPage } from "@/views/CasinoGamePages";

export const metadata: Metadata = {
  title: "Live Speed Baccarat Online | Fast 27-Second Rounds | Lotus365",
  description: "Experience high-velocity live Speed Baccarat on Lotus365 with professional dealers, Banker/Player side bets, and immediate UPI cashouts.",
  alternates: {
    canonical: "https://lotusplay365.shop/speed-baccarat",
  },
  openGraph: {
    title: "Live Speed Baccarat Online | Fast 27-Second Rounds | Lotus365",
    description: "Experience high-velocity live Speed Baccarat on Lotus365 with professional dealers, Banker/Player side bets, and immediate UPI cashouts.",
    url: "https://lotusplay365.shop/speed-baccarat",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Speed Baccarat Online | Fast 27-Second Rounds | Lotus365",
    description: "Experience high-velocity live Speed Baccarat on Lotus365 with professional dealers, Banker/Player side bets, and immediate UPI cashouts.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <SpeedBaccaratPage />;
}
