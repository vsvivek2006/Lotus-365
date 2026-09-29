import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PhonePe Deposit Guide | Fast UPI Payments & 60s Credit",
  description: "Deposit money using PhonePe on Lotus365. Instant QR code payments, 0% fees, 60-second wallet credit, and guaranteed 2-minute UPI cashouts.",
  keywords: "phonepe deposit, phonepe betting deposit, phonepe upi payment lotus365, how to deposit via phonepe, instant phonepe betting",
  alternates: {
    canonical: "https://lotus365officialid.com/phonepe-deposit"
  }
};

import React from 'react';
import { PaytmDepositPage } from '@/views/WalletBankingPages';

export default function Page() {
  return <PaytmDepositPage />;
}
