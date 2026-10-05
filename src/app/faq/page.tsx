import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lotus365 FAQ | Complete Questions & Answers Hub",
  description: "Get instant answers to all frequent questions about Lotus365: account creation, login troubleshooting, deposit rules, 2-minute cashouts, and VIP benefits.",
  keywords: "lotus365 faq, lotus365 questions, lotus365 help, lotus365 common questions, lotus365 withdrawal faq, lotus365 deposit guide",
  alternates: {
    canonical: "https://lotus365officialid.com/faq",
  },
  openGraph: {
    title: "Lotus365 FAQ | Complete Questions & Answers Hub",
    description: "Get instant answers to all frequent questions about Lotus365: account creation, login troubleshooting, deposit rules, 2-minute cashouts, and VIP benefits.",
    url: "https://lotus365officialid.com/faq",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 FAQ | Complete Questions & Answers Hub",
    description: "Get instant answers to all frequent questions about Lotus365: account creation, login troubleshooting, deposit rules, 2-minute cashouts, and VIP benefits.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { FaqPage } from '@/views/BlogGuidePages';

export default function Page() {
  return <FaqPage />;
}
