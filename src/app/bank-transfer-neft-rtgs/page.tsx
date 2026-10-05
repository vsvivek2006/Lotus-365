import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NEFT & RTGS Bank Transfers | High Roller Deposits",
  description: "Deposit and withdraw large amounts via NEFT & RTGS on Lotus365. High limits, zero fees, dedicated VIP escrow accounts, and rapid bank settlements.",
  keywords: "neft deposit betting, rtgs betting deposit, bank transfer lotus365, high roller betting deposit, large amount betting withdrawal",
  alternates: {
    canonical: "https://lotus365officialid.com/bank-transfer-neft-rtgs",
  },
  openGraph: {
    title: "NEFT & RTGS Bank Transfers | High Roller Deposits",
    description: "Deposit and withdraw large amounts via NEFT & RTGS on Lotus365. High limits, zero fees, dedicated VIP escrow accounts, and rapid bank settlements.",
    url: "https://lotus365officialid.com/bank-transfer-neft-rtgs",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEFT & RTGS Bank Transfers | High Roller Deposits",
    description: "Deposit and withdraw large amounts via NEFT & RTGS on Lotus365. High limits, zero fees, dedicated VIP escrow accounts, and rapid bank settlements.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { BankTransferNeftRtgsPage } from '@/views/WalletBankingPages';

export default function Page() {
  return <BankTransferNeftRtgsPage />;
}
