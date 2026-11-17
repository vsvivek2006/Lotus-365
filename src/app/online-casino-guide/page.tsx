import { Metadata } from 'next';
import React from 'react';
import { OnlineCasinoGuidePage } from "@/views/BlogGuidePages";

export const metadata: Metadata = {
  title: "Complete Indian Online Casino Guide 2026 | Lotus365",
  description: "Master online casino games in India: Teen Patti, Andar Bahar, European Roulette, Blackjack, and Baccarat with optimal RTP strategies.",
  alternates: {
    canonical: "https://lotusplay365.shop/online-casino-guide",
  },
  openGraph: {
    title: "Complete Indian Online Casino Guide 2026 | Lotus365",
    description: "Master online casino games in India: Teen Patti, Andar Bahar, European Roulette, Blackjack, and Baccarat with optimal RTP strategies.",
    url: "https://lotusplay365.shop/online-casino-guide",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Indian Online Casino Guide 2026 | Lotus365",
    description: "Master online casino games in India: Teen Patti, Andar Bahar, European Roulette, Blackjack, and Baccarat with optimal RTP strategies.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <OnlineCasinoGuidePage />;
}
