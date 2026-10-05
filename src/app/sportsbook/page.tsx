import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Sportsbook India | 40+ Sports Betting Markets",
  description: "Explore India's leading sportsbook covering cricket, football, tennis, kabaddi, and esports. Zero commission exchange options and fast UPI settlements.",
  keywords: "online sportsbook india, sports betting india, best sportsbook india, all sports betting, lotus365 sports, p2p sports exchange",
  alternates: {
    canonical: "https://lotus365officialid.com/sportsbook",
  },
  openGraph: {
    title: "Online Sportsbook India | 40+ Sports Betting Markets",
    description: "Explore India's leading sportsbook covering cricket, football, tennis, kabaddi, and esports. Zero commission exchange options and fast UPI settlements.",
    url: "https://lotus365officialid.com/sportsbook",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Sportsbook India | 40+ Sports Betting Markets",
    description: "Explore India's leading sportsbook covering cricket, football, tennis, kabaddi, and esports. Zero commission exchange options and fast UPI settlements.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { SportsbookPage } from '@/views/OtherSportPages';

export default function Page() {
  return <SportsbookPage />;
}
