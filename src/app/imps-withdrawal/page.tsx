import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IMPS Bank Withdrawal India | 24/7 Transfers on Lotus365",
  description: "Withdraw large gaming winnings directly to any Indian bank account via 24/7 IMPS. High transaction limits, bank-grade encryption, and zero hidden fees.",
  keywords: "imps withdrawal betting, imps payout india, imps betting withdrawal, instant bank transfer betting india, netbanking betting withdrawal, lotus365 imps cashout",
  alternates: {
    canonical: "https://lotus365officialid.com/imps-withdrawal",
  },
  openGraph: {
    title: "IMPS Bank Withdrawal India | 24/7 Transfers on Lotus365",
    description: "Withdraw large gaming winnings directly to any Indian bank account via 24/7 IMPS. High transaction limits, bank-grade encryption, and zero hidden fees.",
    url: "https://lotus365officialid.com/imps-withdrawal",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMPS Bank Withdrawal India | 24/7 Transfers on Lotus365",
    description: "Withdraw large gaming winnings directly to any Indian bank account via 24/7 IMPS. High transaction limits, bank-grade encryption, and zero hidden fees.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { ImpsWithdrawalPage } from '@/views/PaymentPages';

export default function Page() {
  return <ImpsWithdrawalPage />;
}
