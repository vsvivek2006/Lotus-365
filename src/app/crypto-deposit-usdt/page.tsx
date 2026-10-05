import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "USDT Crypto Deposits | Fast TRC20 & BEP20 Transfers",
  description: "Deposit and withdraw USDT cryptocurrency on Lotus365. Enjoy TRC20 speed, near-zero gas fees, maximum financial privacy, and 2-minute withdrawals.",
  keywords: "usdt betting deposit, crypto betting india, tether trc20 betting, usdt deposit lotus365, bitcoin betting exchange, crypto sports betting",
  alternates: {
    canonical: "https://lotus365officialid.com/crypto-deposit-usdt",
  },
  openGraph: {
    title: "USDT Crypto Deposits | Fast TRC20 & BEP20 Transfers",
    description: "Deposit and withdraw USDT cryptocurrency on Lotus365. Enjoy TRC20 speed, near-zero gas fees, maximum financial privacy, and 2-minute withdrawals.",
    url: "https://lotus365officialid.com/crypto-deposit-usdt",
    type: "website",
    images: [{ url: "https://lotus365officialid.com/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "USDT Crypto Deposits | Fast TRC20 & BEP20 Transfers",
    description: "Deposit and withdraw USDT cryptocurrency on Lotus365. Enjoy TRC20 speed, near-zero gas fees, maximum financial privacy, and 2-minute withdrawals.",
    images: ["https://lotus365officialid.com/og-banner.webp"],
  },
};

import React from 'react';
import { CryptoDepositUsdtPage } from '@/views/WalletBankingPages';

export default function Page() {
  return <CryptoDepositUsdtPage />;
}
