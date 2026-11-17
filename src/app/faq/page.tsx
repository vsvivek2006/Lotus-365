import { Metadata } from 'next';
import React from 'react';
import { FaqPage } from "@/views/BlogGuidePages";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Lotus365 Official Help",
  description: "Find fast answers to all your questions about Lotus365 account creation, UPI deposits, 2-minute cashouts, cricket exchange rules, and VIP rewards.",
  alternates: {
    canonical: "https://lotusplay365.shop/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | Lotus365 Official Help",
    description: "Find fast answers to all your questions about Lotus365 account creation, UPI deposits, 2-minute cashouts, cricket exchange rules, and VIP rewards.",
    url: "https://lotusplay365.shop/faq",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions (FAQ) | Lotus365 Official Help",
    description: "Find fast answers to all your questions about Lotus365 account creation, UPI deposits, 2-minute cashouts, cricket exchange rules, and VIP rewards.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <FaqPage />;
}
