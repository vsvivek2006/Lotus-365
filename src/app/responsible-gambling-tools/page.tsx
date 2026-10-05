import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Responsible Gambling Tools | Deposit Limits & Self-Exclusion",
  description: "Protect your play on Lotus365. Learn how to set daily deposit ceilings, cooling-off breaks, reality checks, and activate permanent self-exclusion.",
  keywords: "responsible gambling tools, deposit limits betting, self exclusion lotus365, cooling off period betting, safe betting tools, 18+ betting safety",
  alternates: {
    canonical: "https://lotus365officialid.com/responsible-gambling-tools",
  },
  openGraph: {
    title: "Responsible Gambling Tools | Deposit Limits & Self-Exclusion",
    description: "Protect your play on Lotus365. Learn how to set daily deposit ceilings, cooling-off breaks, reality checks, and activate permanent self-exclusion.",
    url: "https://lotus365officialid.com/responsible-gambling-tools",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsible Gambling Tools | Deposit Limits & Self-Exclusion",
    description: "Protect your play on Lotus365. Learn how to set daily deposit ceilings, cooling-off breaks, reality checks, and activate permanent self-exclusion.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { ResponsibleGamblingToolsPage } from '@/views/StrategyResourcePages';

export default function Page() {
  return <ResponsibleGamblingToolsPage />;
}
