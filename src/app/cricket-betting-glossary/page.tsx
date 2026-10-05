import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cricket Betting Glossary A-Z | Khai, Lagai, Lambi Terms",
  description: "Master Indian cricket betting terminology on Lotus365. Comprehensive A-Z definitions: Khai, Lagai, Lambi, Session, Back, Lay, and DLS rules explained.",
  keywords: "cricket betting glossary, khai lagai meaning, lambi pari definition, cricket betting terms a-z, dabba rate cricket, betting exchange terminology",
  alternates: {
    canonical: "https://lotus365officialid.com/cricket-betting-glossary",
  },
  openGraph: {
    title: "Cricket Betting Glossary A-Z | Khai, Lagai, Lambi Terms",
    description: "Master Indian cricket betting terminology on Lotus365. Comprehensive A-Z definitions: Khai, Lagai, Lambi, Session, Back, Lay, and DLS rules explained.",
    url: "https://lotus365officialid.com/cricket-betting-glossary",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricket Betting Glossary A-Z | Khai, Lagai, Lambi Terms",
    description: "Master Indian cricket betting terminology on Lotus365. Comprehensive A-Z definitions: Khai, Lagai, Lambi, Session, Back, Lay, and DLS rules explained.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { CricketBettingGlossaryPage } from '@/views/StrategyResourcePages';

export default function Page() {
  return <CricketBettingGlossaryPage />;
}
