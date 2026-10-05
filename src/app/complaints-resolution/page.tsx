import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Complaints & Dispute Resolution | Official Support Desk",
  description: "Official Lotus365 complaints and dispute resolution desk. Rapid 60-second response, senior supervisor escalation, and fair settlement guarantees.",
  keywords: "lotus365 complaints, dispute resolution betting, lotus365 customer redressal, betting settlement dispute, lotus365 support escalation",
  alternates: {
    canonical: "https://lotus365officialid.com/complaints-resolution",
  },
  openGraph: {
    title: "Complaints & Dispute Resolution | Official Support Desk",
    description: "Official Lotus365 complaints and dispute resolution desk. Rapid 60-second response, senior supervisor escalation, and fair settlement guarantees.",
    url: "https://lotus365officialid.com/complaints-resolution",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complaints & Dispute Resolution | Official Support Desk",
    description: "Official Lotus365 complaints and dispute resolution desk. Rapid 60-second response, senior supervisor escalation, and fair settlement guarantees.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { ComplaintsResolutionPage } from '@/views/StrategyResourcePages';

export default function Page() {
  return <ComplaintsResolutionPage />;
}
