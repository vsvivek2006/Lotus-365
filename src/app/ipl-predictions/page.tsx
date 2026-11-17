import { Metadata } from 'next';
import React from 'react';
import { IplPredictionsPage } from "@/views/BlogGuidePages";

export const metadata: Metadata = {
  title: "IPL 2026 Match Predictions & Winner Odds | Lotus365",
  description: "Deep-dive statistical match predictions, team form guides, and pitch trends for all 74 fixtures of TATA IPL 2026 on Lotus365.",
  alternates: {
    canonical: "https://lotusplay365.shop/ipl-predictions",
  },
  openGraph: {
    title: "IPL 2026 Match Predictions & Winner Odds | Lotus365",
    description: "Deep-dive statistical match predictions, team form guides, and pitch trends for all 74 fixtures of TATA IPL 2026 on Lotus365.",
    url: "https://lotusplay365.shop/ipl-predictions",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPL 2026 Match Predictions & Winner Odds | Lotus365",
    description: "Deep-dive statistical match predictions, team form guides, and pitch trends for all 74 fixtures of TATA IPL 2026 on Lotus365.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <IplPredictionsPage />;
}
