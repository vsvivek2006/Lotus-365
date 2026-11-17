import { Metadata } from 'next';
import React from 'react';
import { MobileWebAppGuidePage } from "@/views/BlogGuidePages";

export const metadata: Metadata = {
  title: "Mobile Web App Installation Guide (PWA) | Lotus365",
  description: "Learn how to install and add Lotus365 to your Android or iPhone home screen with zero APK file downloads and instant 1-tap gaming.",
  alternates: {
    canonical: "https://lotusplay365.shop/mobile-web-app-guide",
  },
  openGraph: {
    title: "Mobile Web App Installation Guide (PWA) | Lotus365",
    description: "Learn how to install and add Lotus365 to your Android or iPhone home screen with zero APK file downloads and instant 1-tap gaming.",
    url: "https://lotusplay365.shop/mobile-web-app-guide",
    type: "website",
    images: [{ url: "https://lotusplay365.shop/og-banner.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Web App Installation Guide (PWA) | Lotus365",
    description: "Learn how to install and add Lotus365 to your Android or iPhone home screen with zero APK file downloads and instant 1-tap gaming.",
    images: ["https://lotusplay365.shop/og-banner.webp"],
  },
};

export default function Page() {
  return <MobileWebAppGuidePage />;
}
