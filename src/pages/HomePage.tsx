import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { TopBar } from '../sections/TopBar';
import { Header } from '../components/Header';
import { HeroSection } from '../sections/HeroSection';
import { LiveTickerSection } from '../sections/LiveTickerSection';
import { WhyChooseSection } from '../sections/WhyChooseSection';
import { GameHubSection } from '../sections/GameHubSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { VipClubSection } from '../sections/VipClubSection';
import { ComparisonSection } from '../sections/ComparisonSection';
import { MobileAppSection } from '../sections/MobileAppSection';
import { GuidesSection } from '../sections/GuidesSection';
import { SeoContentSection } from '../sections/SeoContentSection';
import { FaqSection } from '../sections/FaqSection';
import { FinalCtaSection } from '../sections/FinalCtaSection';
import { Footer } from '../components/Footer';
import { MobileBottomNav } from '../components/MobileBottomNav';
import { FloatingActions } from '../components/FloatingActions';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://lotus365officialid.com/#website',
      name: 'Lotus365 Official',
      url: 'https://lotus365officialid.com',
      description: "India's #1 cricket betting exchange and live casino. Instant WhatsApp ID, 2-minute cashouts, and 24/7 dedicated support.",
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://lotus365officialid.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SportsWagering',
      '@id': 'https://lotus365officialid.com/#organization',
      name: 'Lotus365 Official',
      url: 'https://lotus365officialid.com',
      logo: 'https://lotus365officialid.com/lotus-logo.png',
      image: 'https://lotus365officialid.com/og-banner.webp',
      description: "India's premier cricket betting exchange, live casino, and instant UPI cashout platform with 24/7 WhatsApp concierge.",
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '18450',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
    },
  ],
};

export const HomePage: React.FC = () => {
  const handleOpenAuth = () => {
    window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEOHead
        title="Lotus365 — India's #1 Cricket Betting Exchange & Live Casino"
        description="Lotus365 is India's most trusted online betting platform. Get instant WhatsApp ID, bet on live cricket, IPL, Teen Patti & 1000+ games. 2-minute UPI cashout. Register free!"
        canonical="/"
        keywords="lotus365, lotus365 login, lotus365 sign up, cricket betting, live casino india, online betting india"
        schema={homeSchema}
      />
      <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col selection:bg-brand-gold selection:text-black">
        <TopBar />
        <Header onOpenAuth={handleOpenAuth} />
        <main className="flex-1 pb-16 md:pb-0">
          <HeroSection onOpenAuth={handleOpenAuth} />
          <LiveTickerSection onOpenAuth={handleOpenAuth} />
          <WhyChooseSection onOpenAuth={handleOpenAuth} />
          <GameHubSection onOpenAuth={handleOpenAuth} />
          <HowItWorksSection onOpenAuth={handleOpenAuth} />
          <TestimonialsSection onOpenAuth={handleOpenAuth} />
          <VipClubSection onOpenAuth={handleOpenAuth} />
          <ComparisonSection onOpenAuth={handleOpenAuth} />
          <MobileAppSection />
          <GuidesSection onOpenAuth={handleOpenAuth} />
          <SeoContentSection onOpenAuth={handleOpenAuth} />
          <FaqSection onOpenAuth={handleOpenAuth} />
          <FinalCtaSection onOpenAuth={handleOpenAuth} />
        </main>
        <Footer onOpenAuth={handleOpenAuth} />
        <MobileBottomNav onOpenAuth={handleOpenAuth} />
        <FloatingActions />
      </div>
    </>
  );
};
