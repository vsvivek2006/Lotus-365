import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lotus365 Login | Official Portal & Account Access",
  description: "Official Lotus365 login portal. Securely access your sports exchange account on mobile or desktop with 24/7 WhatsApp password reset and instant support.",
  keywords: "lotus365 login, lotus365 log in, lotus365 account login, lotus365 official login, lotus365 id login, lotus365 password reset, lotus365 login link",
  alternates: {
    canonical: "https://lotus365officialid.com/login",
  },
  openGraph: {
    title: "Lotus365 Login | Official Portal & Account Access",
    description: "Official Lotus365 login portal. Securely access your sports exchange account on mobile or desktop with 24/7 WhatsApp password reset and instant support.",
    url: "https://lotus365officialid.com/login",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus365 Login | Official Portal & Account Access",
    description: "Official Lotus365 login portal. Securely access your sports exchange account on mobile or desktop with 24/7 WhatsApp password reset and instant support.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { LoginPage } from '@/views/AccountPages';

export default function Page() {
  return <LoginPage />;
}
