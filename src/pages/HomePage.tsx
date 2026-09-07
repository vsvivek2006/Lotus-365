import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { TopBar } from '../sections/TopBar';
import { Header } from '../components/Header';
import { HeroSection } from '../sections/HeroSection';
import { LiveTickerSection } from '../sections/LiveTickerSection';
import { WhyChooseSection } from '../sections/WhyChooseSection';
import { GameHubSection } from '../sections/GameHubSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
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
  '@type': 'WebSite',
  name: 'Lotus365 Official',
  url: 'https://lotus365officialid.com',
  description: 'India\'s #1 cricket betting exchange and live casino. Instant WhatsApp ID, 2-minute cashouts, zero APK download required.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://lotus365officialid.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
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
          <VipClubSection onOpenAuth={handleOpenAuth} />
          <ComparisonSection onOpenAuth={handleOpenAuth} />
          <MobileAppSection />
          <GuidesSection onOpenAuth={handleOpenAuth} />
          <SeoContentSection onOpenAuth={handleOpenAuth} />
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0d4a3a]/60 border-t border-white/10 text-white/85 text-xs sm:text-sm leading-relaxed">
            <div className="max-w-7xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                India’s Most Trusted Sports Betting Exchange & Live Casino Ecosystem
              </h2>
              <p>
                Welcome to <strong className="text-white">Lotus365</strong> (<a href="/" className="text-[#F0C419] font-bold hover:underline">lotus365officialid.com</a>), the gold standard in Indian online sports betting and real-money live casino entertainment. Founded on principles of complete financial transparency, lightning-fast payouts, and peer-to-peer exchange freedom, Lotus365 empowers over 1,000,000 active Indian bettors with an unbeatable wagering experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">Peer-to-Peer Cricket Exchange</h3>
                  <p className="text-xs text-white/75">
                    Unlike traditional corporate bookmakers with heavy house vig, our cricket exchange allows you to back and lay outcomes directly against fellow players. Bet on IPL, T20 World Cups, Test series, and international bilateral tours with the tightest spreads and highest market liquidity in South Asia.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">Authentic Live Dealer Casino</h3>
                  <p className="text-xs text-white/75">
                    Immerse yourself in authentic Indian card gaming with real human dealers streamed in crystal-clear HD. Play Teen Patti Cash, Andar Bahar, Speed Baccarat, Lightning Roulette, and high-payout Aviator crash games with verified cryptographic fairness and instant round settlements.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">2-Minute UPI Cashouts (Zero APK)</h3>
                  <p className="text-xs text-white/75">
                    Experience unmatched banking velocity. Deposit in 30 seconds via PhonePe, Google Pay, or Paytm and withdraw your winnings in under two minutes straight into your bank account. No risky APK downloads required—our Progressive Web App runs smoothly on any smartphone browser.
                  </p>
                </div>
              </div>
              <p className="text-xs text-white/70">
                Join India's premier gaming community today. Connect with our official 24/7 human WhatsApp desk at <strong className="text-emerald-400">https://wa.link/880088</strong> to generate your secure betting ID in under 60 seconds with zero paperwork and instant welcome bonuses.
              </p>
            </div>
          </section>
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0b3b2d]/80 border-t border-white/10 text-white/85 text-xs sm:text-sm leading-relaxed">
            <div className="max-w-7xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                Comprehensive Indian Betting & Cricket Exchange Master Guide
              </h2>
              <p>
                Online sports betting in India has experienced a monumental transformation over the past decade. Where once Indian sports fans were relegated to predatory offshore foreign sportsbooks charging punitive 8% bookmaker margins, the rise of the peer-to-peer <strong>Cricket Betting Exchange</strong> on <strong className="text-white">lotus365officialid.com</strong> has handed complete wagering autonomy back to the player.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">The Architecture of the Cricket Exchange</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    On a standard sportsbook, you bet against the bookmaker who dictates the odds and limits your winning stakes. On the Lotus365 Cricket Exchange, you trade outcomes against other enthusiasts. If you believe a team will win, you <strong>Back</strong> the selection; if you believe they will falter, you <strong>Lay</strong> the selection. This peer-to-peer marketplace format unlocks true market pricing with up to 0% commission on high-profile Indian Premier League (IPL) and ICC World Cup matches.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">Guaranteed 2-Minute UPI Cashout Velocity</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Financial speed defines platform trust. Lotus365 maintains segregated liquidity reserves across India's leading commercial banking rails. When you request a payout via WhatsApp, our automated disbursement engine clears the funds via high-priority UPI (PhonePe, Google Pay, Paytm) directly into your bank account in under two minutes with zero transaction fees or hidden deductions.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-black/30 border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-[#F0C419]">Zero APK Download: Lightweight Progressive Web App (PWA)</h3>
                <p className="text-xs text-white/75 leading-relaxed">
                  We firmly reject the practice of distributing risky, unverified third-party Android APK files that consume smartphone battery life and compromise personal user privacy. Lotus365 operates as a state-of-the-art Progressive Web App (PWA). You can launch the platform instantly from Google Chrome or Apple Safari, bookmark it directly to your home screen, and enjoy responsive 60fps live streaming and sub-second bet matching on any smartphone device.
                </p>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Whether you want to back your favorite cricket franchise, trade in-play session overs, or experience live dealer Teen Patti with professional human dealers, Lotus365 provides India's most dependable, secure, and rewarding wagering ecosystem. Connect with our official 24/7 human WhatsApp concierge at <strong className="text-emerald-400">https://wa.link/880088</strong> to receive your verified betting ID in under 60 seconds!
              </p>
            </div>
          </section>
          <FaqSection onOpenAuth={handleOpenAuth} />
          <FinalCtaSection onOpenAuth={handleOpenAuth} />
                  <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10 text-white/85 text-xs sm:text-sm leading-relaxed">
            <div className="max-w-7xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                Complete Architectural FAQ & Indian Player Guide
              </h2>
              <p>
                Lotus365 stands alone as India's most transparent, technologically advanced gaming exchange. Here are the core pillars that define our service:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-black/30 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">Zero APK Guarantee</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Unlike unregulated foreign platforms that force players to install risky unsigned Android APK packages from unknown web servers, Lotus365 is 100% web-based. Operating as an ultra-fast Progressive Web App (PWA), you access every feature smoothly in Google Chrome or Apple Safari without compromising device battery life or private smartphone storage.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-black/30 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">True Peer-to-Peer Exchange</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Experience genuine betting freedom. Rather than wagering against bookmakers who manipulate odds and ban successful players, our cricket exchange matches you directly against other fans with up to 0% commission on marquee IPL encounters. Back, lay, and hedge your positions with total autonomy.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-black/30 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">2-Minute UPI Payouts</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Say goodbye to agonizing 48-hour withdrawal waits. Lotus365 maintains segregated liquid banking reserves with India's tier-one banking partners, allowing us to disburse payouts in under two minutes straight into your PhonePe, Google Pay, or Paytm bank account 24/7/365.
                  </p>
                </div>
              </div>
              <p className="text-xs text-white/70">
                To create your free ID or claim your 100% welcome bonus, connect with our official WhatsApp verification desk at <strong className="text-emerald-400">https://wa.link/880088</strong> today!
              </p>
            </div>
          </section>
        </main>
        <Footer onOpenAuth={handleOpenAuth} />
        <MobileBottomNav onOpenAuth={handleOpenAuth} />
        <FloatingActions />
      </div>
    </>
  );
};
