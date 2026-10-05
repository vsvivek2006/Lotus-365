import '../index.css';
import type { Metadata } from 'next';
import { Poppins, Outfit } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const outfit = Outfit({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lotus365officialid.com'),
  title: 'Lotus365 Official Website – Cricket Exchange & Live Casino',
  description: 'Explore Lotus365 official sports exchange, live cricket odds, Aviator, Teen Patti & 1000+ casino tables.',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Lotus365 Official',
    images: [{ url: 'https://lotus365officialid.com/og-banner.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lotus365official',
    creator: '@lotus365official',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning className={`dark scroll-smooth ${poppins.variable} ${outfit.variable}`}>
      <head>
        <meta name="theme-color" content="#14614C" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning className="selection:bg-brand-gold selection:text-brand-dark min-h-screen overflow-x-hidden font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
