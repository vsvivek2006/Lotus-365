import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "In-Play Cashout Guide | Lock Profits & Hedge Risk",
  description: "Master in-play cashouts on Lotus365. Learn how to green up profits, execute partial cashouts, hedge live cricket matches, and withdraw in under 2 minutes.",
  keywords: "in play cashout guide, how to cashout betting, hedging cricket bets, green up cashout, partial cashout lotus365, early cashout betting",
  alternates: {
    canonical: "https://lotus365officialid.com/in-play-cashout-guide",
  },
  openGraph: {
    title: "In-Play Cashout Guide | Lock Profits & Hedge Risk",
    description: "Master in-play cashouts on Lotus365. Learn how to green up profits, execute partial cashouts, hedge live cricket matches, and withdraw in under 2 minutes.",
    url: "https://lotus365officialid.com/in-play-cashout-guide",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Play Cashout Guide | Lock Profits & Hedge Risk",
    description: "Master in-play cashouts on Lotus365. Learn how to green up profits, execute partial cashouts, hedge live cricket matches, and withdraw in under 2 minutes.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { InPlayCashoutGuidePage } from '@/views/ExchangeGuidePages';

export default function Page() {
  return <InPlayCashoutGuidePage />;
}
