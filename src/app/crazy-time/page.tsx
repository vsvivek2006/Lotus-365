import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Crazy Time Live Game Show | 25,000x Bonus Multipliers",
  description: "Play Crazy Time live by Evolution Gaming on Lotus365. Enjoy Cash Hunt, Pachinko, Coin Flip, 25,000x multipliers, and guaranteed 2-minute UPI cashouts.",
  keywords: "crazy time live, crazy time casino, crazy time evolution gaming, crazy time tracker, crazy time bonus game, lotus365 crazy time",
  alternates: {
    canonical: "https://lotus365officialid.com/crazy-time",
  },
  openGraph: {
    title: "Crazy Time Live Game Show | 25,000x Bonus Multipliers",
    description: "Play Crazy Time live by Evolution Gaming on Lotus365. Enjoy Cash Hunt, Pachinko, Coin Flip, 25,000x multipliers, and guaranteed 2-minute UPI cashouts.",
    url: "https://lotus365officialid.com/crazy-time",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crazy Time Live Game Show | 25,000x Bonus Multipliers",
    description: "Play Crazy Time live by Evolution Gaming on Lotus365. Enjoy Cash Hunt, Pachinko, Coin Flip, 25,000x multipliers, and guaranteed 2-minute UPI cashouts.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { CrazyTimePage } from '@/views/AsianCasinoPages';

export default function Page() {
  return <CrazyTimePage />;
}
