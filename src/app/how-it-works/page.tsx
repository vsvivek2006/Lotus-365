import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How Lotus365 Works | Complete Onboarding Guide",
  description: "Follow our 4-minute onboarding guide to get your Lotus365 ID on WhatsApp, deposit funds with UPI, place live cricket bets, and cash out winnings in 2 minutes.",
  keywords: "how lotus365 works, lotus365 process, how to use lotus365, lotus365 step by step, lotus365 whatsapp id process, lotus365 onboarding",
  alternates: {
    canonical: "https://lotus365officialid.com/how-it-works",
  },
  openGraph: {
    title: "How Lotus365 Works | Complete Onboarding Guide",
    description: "Follow our 4-minute onboarding guide to get your Lotus365 ID on WhatsApp, deposit funds with UPI, place live cricket bets, and cash out winnings in 2 minutes.",
    url: "https://lotus365officialid.com/how-it-works",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Lotus365 Works | Complete Onboarding Guide",
    description: "Follow our 4-minute onboarding guide to get your Lotus365 ID on WhatsApp, deposit funds with UPI, place live cricket bets, and cash out winnings in 2 minutes.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { HowItWorksPage } from '@/views/BlogGuidePages';

export default function Page() {
  return <HowItWorksPage />;
}
