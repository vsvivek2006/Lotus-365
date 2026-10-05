import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPL 2026 Predictions | Live Match Form & Odds Tips",
  description: "Get daily expert IPL 2026 match predictions, head-to-head records, toss analysis, and player prop picks with the best live betting odds on Lotus365.",
  keywords: "ipl 2026 predictions, ipl betting predictions, ipl winner 2026, ipl analysis 2026, ipl tips india, ipl exchange odds lotus365",
  alternates: {
    canonical: "https://lotus365officialid.com/ipl-predictions",
  },
  openGraph: {
    title: "IPL 2026 Predictions | Live Match Form & Odds Tips",
    description: "Get daily expert IPL 2026 match predictions, head-to-head records, toss analysis, and player prop picks with the best live betting odds on Lotus365.",
    url: "https://lotus365officialid.com/ipl-predictions",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPL 2026 Predictions | Live Match Form & Odds Tips",
    description: "Get daily expert IPL 2026 match predictions, head-to-head records, toss analysis, and player prop picks with the best live betting odds on Lotus365.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { IplPredictionsPage } from '@/views/BlogGuidePages';

export default function Page() {
  return <IplPredictionsPage />;
}
