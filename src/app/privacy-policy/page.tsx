import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Lotus365 Data Protection & Security",
  description: "Read the Lotus365 Privacy Policy. Discover how we protect your personal credentials, UPI details, and transaction history using 256-bit bank-grade SSL encryption.",
  keywords: "lotus365 privacy policy, lotus365 data protection, lotus365 user data security, betting privacy india, dpdp act compliance, encrypted betting platform",
  alternates: {
    canonical: "https://lotus365officialid.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Lotus365 Data Protection & Security",
    description: "Read the Lotus365 Privacy Policy. Discover how we protect your personal credentials, UPI details, and transaction history using 256-bit bank-grade SSL encryption.",
    url: "https://lotus365officialid.com/privacy-policy",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Lotus365 Data Protection & Security",
    description: "Read the Lotus365 Privacy Policy. Discover how we protect your personal credentials, UPI details, and transaction history using 256-bit bank-grade SSL encryption.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { PrivacyPolicyPage } from '@/views/PrivacyPolicyPage';

export default function Page() {
  return <PrivacyPolicyPage />;
}
