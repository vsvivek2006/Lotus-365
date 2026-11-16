import Link from 'next/link';
import React from 'react';

import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { MapPin, HelpCircle, Network, Layers } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

const sitemapData = [
  {
    category: 'Cricket & Major Tournament Betting',
    pages: [
      { href: '/cricket-betting', label: 'Cricket Betting Hub India' },
      { href: '/cricket-exchange', label: 'Cricket Exchange Online (Back & Lay)' },
      { href: '/ipl-betting', label: 'IPL Betting 2026 Live Markets' },
      { href: '/cricket-betting', label: 'ICC T20 World Cup Betting' },
      { href: '/wpl-betting', label: 'Women\'s Premier League (WPL) Betting' },
      { href: '/psl-betting', label: 'Pakistan Super League (PSL) Betting' },
      { href: '/bbl-betting', label: 'Big Bash League (BBL) Betting' },
      { href: '/cpl-betting', label: 'Caribbean Premier League (CPL) Betting' },
      { href: '/asia-cup-betting', label: 'Asia Cup Cricket Betting' },
      { href: '/icc-odi-world-cup', label: 'ICC ODI Cricket World Cup' },
      { href: '/test-cricket-betting', label: 'Test Match Cricket Trading' },
      { href: '/live-cricket-score-odds', label: 'Live Cricket Score & In-Play Odds' },
      { href: '/cricket-session-betting', label: 'Cricket Session & Fancy Betting (6-Over, Lambi)' },
      { href: '/cricket-toss-prediction', label: 'Match Toss Prediction & Market Odds' },
    ],
  },
  {
    category: 'Regional Cricket Communities',
    pages: [
      { href: '/cricket-betting-delhi', label: 'Delhi NCR Cricket Betting & Exchange' },
      { href: '/cricket-betting-mumbai', label: 'Mumbai Cricket Betting & Wankhede Odds' },
      { href: '/cricket-betting-punjab', label: 'Punjab Cricket Betting & Mohali Markets' },
      { href: '/cricket-betting-bangalore', label: 'Bangalore Cricket Betting & Chinnaswamy Odds' },
      { href: '/cricket-betting-hyderabad', label: 'Hyderabad Cricket Betting & Uppal Odds' },
      { href: '/cricket-betting-kolkata', label: 'Kolkata Cricket Betting & Eden Gardens Odds' },
    ],
  },
  {
    category: 'Multi-Sport Sportsbook',
    pages: [
      { href: '/sportsbook', label: 'Online Sportsbook Multi-Sport Portal' },
      { href: '/football-betting', label: 'Football Betting & Premier League Odds' },
      { href: '/tennis-betting', label: 'Tennis Betting & Grand Slam Markets' },
      { href: '/kabaddi-betting', label: 'Pro Kabaddi League (PKL) Betting' },
      { href: '/basketball-betting', label: 'NBA & World Basketball Betting' },
      { href: '/sportsbook', label: 'Horse Racing Betting India' },
    ],
  },
  {
    category: 'Exchange Trading & Mechanics',
    pages: [
      { href: '/cricket-exchange', label: 'Back & Lay Betting Masterclass' },
      { href: '/cricket-exchange', label: 'Transparent 0-2% Commission Rates' },
      { href: '/cricket-exchange', label: 'Betting Exchange vs Sportsbook Comparison' },
      { href: '/cricket-exchange', label: 'Zero-Delay Bookmaker Market' },
      { href: '/cricket-exchange', label: 'In-Play Cashout & Hedging Guide' },
      { href: '/cricket-exchange', label: 'Match Odds Scalping & Swing Trading' },
      { href: '/tied-match-rules', label: 'Tied Match, Super Over & Dead Heat Settlement Rules' },
      { href: '/bet-slip-guide', label: 'Bet Slip & Order Routing Guide' },
    ],
  },
  {
    category: 'Live Dealer Casino & Indian Card Games',
    pages: [
      { href: '/live-casino', label: 'Live Casino Lobby (1000+ Tables)' },
      { href: '/teen-patti', label: 'Teen Patti Cash Online Live' },
      { href: '/andar-bahar', label: 'Andar Bahar Real Money Live' },
      { href: '/color-prediction', label: 'Lucky 7 Live Card Game' },
      { href: '/32-cards-casino', label: '32 Cards Live Casino' },
      { href: '/super-over-game', label: 'Super Over Casino Game' },
      { href: '/muflis-teen-patti', label: 'Muflis (Low Card) Teen Patti' },
      { href: '/ak47-teen-patti', label: 'AK47 Variation Teen Patti' },
      { href: '/joker-teen-patti', label: 'Joker Teen Patti Live' },
      { href: '/roulette', label: 'European Roulette Online' },
      { href: '/roulette-strategies', label: 'Roulette Betting Strategies & Martingale Guide' },
      { href: '/blackjack', label: 'Live Dealer Blackjack 21' },
      { href: '/baccarat', label: 'Live Baccarat Real Money' },
      { href: '/speed-baccarat', label: 'Speed Baccarat Fast Dealing' },
      { href: '/baccarat', label: 'Dragon Tiger Two-Card Battle' },
      { href: '/lightning-roulette', label: 'Lightning Roulette 500x Multipliers' },
      { href: '/casino-slots', label: 'Online Slots & Megaways Jackpots' },
      { href: '/live-dealer-games', label: 'Professional Live Dealer Studio Games' },
      { href: '/live-casino', label: 'Crazy Time Live Game Show' },
      { href: '/mega-wheel', label: 'Mega Wheel Multiplier Game Show' },
    ],
  },
  {
    category: 'Crash & High-Speed Multipliers',
    pages: [
      { href: '/aviator-game', label: 'Spribe Aviator Crash Game 98.5% RTP' },
      { href: '/aviator-game', label: 'Crash Games Hub (JetX, Spaceman)' },
      { href: '/color-prediction', label: 'Color Prediction Online (Colour Wiz, Parity)' },
      { href: '/virtual-sports', label: '24/7 Virtual Sports (Cricket, Football, Horses)' },
    ],
  },
  {
    category: 'Payments, Deposits & Express Cashout',
    pages: [
      { href: '/how-to-deposit', label: 'How to Deposit on Lotus365' },
      { href: '/how-to-withdraw', label: 'How to Withdraw from Lotus365' },
      { href: '/how-to-deposit', label: 'UPI Instant Deposit Guide' },
      { href: '/phonepe-deposit', label: 'PhonePe Instant Deposit Guide' },
      { href: '/google-pay-deposit', label: 'Google Pay (GPay) Deposit Guide' },
      { href: '/paytm-deposit', label: 'Paytm Wallet & UPI Deposit Guide' },
      { href: '/bank-transfer-neft-rtgs', label: 'Bank Transfer NEFT & RTGS Guide' },
      { href: '/how-to-deposit', label: 'Crypto Deposit USDT (TRC-20 & ERC-20)' },
      { href: '/how-to-withdraw', label: 'IMPS Bank Transfer Withdrawal Guide' },
      { href: '/how-to-deposit', label: 'All Supported Payment Methods' },
      { href: '/how-to-withdraw', label: 'Guaranteed 2-Minute Cashout Guide' },
      { href: '/withdrawal-proof-times', label: 'Live Withdrawal Proof & Payout Times' },
      { href: '/kyc-verification-guide', label: 'Fast KYC Verification & Account Whitelisting' },
    ],
  },
  {
    category: 'VIP Loyalty & Promotional Bonuses',
    pages: [
      { href: '/vip-club', label: '100% Matching Welcome Bonus up to ₹5,000' },
      { href: '/first-deposit-bonus', label: 'First Deposit Bonus Brackets' },
      { href: '/vip-club', label: 'Referral Bonus Program (Earn by Inviting Friends)' },
      { href: '/vip-club', label: 'Weekly Loss Cashback Rebates (Up to 10%)' },
      { href: '/vip-club', label: 'Lotus365 VIP Club & Royalty Rewards' },
      { href: '/vip-club', label: 'VIP Black Card Elite Invitation' },
    ],
  },
  {
    category: 'Trading Calculators & Strategy Resources',
    pages: [
      { href: '/cricket-exchange', label: 'Betting Odds Calculator & Implied Probability' },
      { href: '/cricket-exchange', label: 'Dutching Calculator & Multi-Runner Hedging' },
      { href: '/ipl-teams-betting-odds', label: 'IPL Teams Outright Championship Odds' },
      { href: '/cricket-betting', label: 'Cricket Betting Glossary A-Z Terminology' },
      { href: '/lotus365-blue', label: 'Lotus365 Blue High-Speed Edition' },
      { href: '/lotus365-partner-program', label: 'Lotus365 Partner & Affiliate Program (Up to 35% RevShare)' },
    ],
  },
  {
    category: 'Guides, Reviews & Player Welfare',
    pages: [
      { href: '/blog', label: 'Lotus365 Official Insights & Betting News Blog' },
      { href: '/about', label: 'Lotus365 Independent Platform Review 2026' },
      { href: '/lotus365-vs-competitors', label: 'Lotus365 vs Competitors (Betway, 1xBet, Dream11)' },
      { href: '/betting-tips', label: 'Cricket Betting Tips & Trading Strategies' },
      { href: '/ipl-predictions', label: 'IPL 2026 Expert Predictions & Tournament Odds' },
      { href: '/online-casino-guide', label: 'Online Casino Handbook: Rules, RTP & House Edge' },
      { href: '/safe-betting-guide', label: 'Safe & Responsible Online Betting Guide' },
      { href: '/mobile-web-app-guide', label: 'Mobile Gaming & Fast Smartphone Play Guide' },
      { href: '/how-it-works', label: 'Lotus365 Frequently Asked Questions Hub' },
      { href: '/how-it-works', label: 'How Lotus365 Works: Complete 4-Minute Onboarding' },
      { href: '/account-security-tips', label: 'Account Security Tips & Anti-Phishing Guide' },
      { href: '/complaints-resolution', label: 'Complaints & Dispute Redressal Desk' },
      { href: '/responsible-gambling-tools', label: 'Responsible Gambling Tools & Deposit Limits' },
    ],
  },
  {
    category: 'Core Corporate & Legal Authority',
    pages: [
      { href: '/', label: 'Lotus365 Home — India\'s #1 Betting Exchange' },
      { href: '/about', label: 'About Lotus365 Corporate Heritage' },
      { href: '/contact', label: 'Contact 24/7 Official WhatsApp Desk' },
      { href: '/responsible-gaming', label: 'Responsible Gaming Policy & 18+ Verification' },
      { href: '/terms', label: 'Terms & Conditions of Service' },
      { href: '/privacy-policy', label: 'Privacy Policy & Zero-Data Leak Promise' },
      { href: '/sitemap', label: 'Lotus365 Official HTML Sitemap & Directory' },
    ],
  },
];

const totalPagesCount = sitemapData.reduce((acc, cat) => acc + cat.pages.length, 0);

const sitemapFaqs = [
  {
    q: 'Are all pages in this sitemap accessible on mobile phones?',
    a: 'Yes! Lotus365 is completely mobile-optimized. Every page, live stream, and casino game runs natively in Chrome, Safari, and other browsers with instant load times and fluid 60 FPS graphics.',
  },
  {
    q: 'Where can I find the XML sitemap for search engine crawlers?',
    a: 'Our machine-readable XML sitemap is maintained at https://lotusplay365.shop/sitemap.xml and indexed directly with Google Search Console.',
  },
  {
    q: 'How frequently is this directory updated?',
    a: 'This sitemap is updated in real time whenever new sports tournaments, live casino games, or promotional bonuses are introduced to the Lotus365 platform.',
  },
  {
    q: 'Can I bookmark individual game pages like Aviator or Roulette directly?',
    a: 'Yes. Every page in this sitemap possesses a dedicated canonical URL that you can bookmark on your mobile or desktop browser for direct one-tap access.',
  },
  {
    q: 'Do I need separate login credentials for the sports exchange and live casino?',
    a: 'No! Your single Lotus365 WhatsApp ID grants universal access to every directory and game featured in this sitemap with a unified wallet balance.',
  },
  {
    q: 'How do I report a broken link or page issue?',
    a: 'Message our 24/7 WhatsApp customer care desk at wa.link/880088. Our web engineering team resolves technical inquiries within minutes.',
  },
];

export const SitemapPage: React.FC = () => (
  <>
    <SEOHead
      title="HTML Sitemap | Complete Directory of Lotus365 Pages"
      description="Navigate the complete directory of Lotus365 pages. Find quick links to cricket betting, live casino, Aviator crash games, bonuses, and banking guides."
      canonical="/sitemap"
      keywords="lotus365 sitemap, all lotus365 pages, lotus365 directory, lotus365 navigation, betting site sitemap india"
      faqItems={sitemapFaqs}
    />
    <Layout>
      <PageHero
        badge="Complete Platform Architecture"
        title="Lotus365 Official "
        highlight="HTML Sitemap & Directory"
        subtitle={`Navigate the complete architecture of India's #1 peer-to-peer sports betting exchange, live casino suite, and digital entertainment platform. All ${totalPagesCount} verified endpoints, market guides, and banking portals listed for transparent, frictionless navigation.`}
        imageSrc="/images/banners/hero-cricket-stadium.svg"
        imageAlt="Lotus365 Official Sitemap Architecture"
        breadcrumbs={[
          { label: 'Directory' },
          { label: 'HTML Sitemap' },
        ]}
      />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Architecture Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex gap-3 items-center">
              <Network className="w-6 h-6 text-[#F0C419] shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">{sitemapData.length} Thematic Clusters</div>
                <div className="text-xs text-slate-500">Organized topic authority silos</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex gap-3 items-center">
              <Layers className="w-6 h-6 text-[#F0C419] shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">{totalPagesCount} Verified Endpoints</div>
                <div className="text-xs text-slate-500">100% crawlable internal links</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex gap-3 items-center">
              <MapPin className="w-6 h-6 text-[#F0C419] shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">Instant WhatsApp Onboarding</div>
                <div className="text-xs text-slate-500">Unified wallet across all portals</div>
              </div>
            </div>
          </div>

          {/* Comprehensive Architecture Overview */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Full Information Architecture & Topic Cluster Index
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Our {totalPagesCount} platform routes are categorized into {sitemapData.length} core thematic silos to deliver an intuitive user experience and clear semantic signals to search engines. The Sports Betting exchange silo provides comprehensive market depth for cricket, IPL, football, tennis, and regional communities. The Live Casino cluster contains dedicated guides for Indian classics like Teen Patti and Andar Bahar alongside Evolution Gaming roulette, blackjack, and baccarat. The Banking hub covers step-by-step 2-minute UPI deposits and instant IMPS cashouts, while the VIP & Promotions directory details cashback tiers, referral bonuses, and high-roller privileges.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every page on lotusplay365.shop operates under HTTPS SSL encryption, complies with Google mobile-first indexing standards, and offers direct access to our 24/7 human WhatsApp concierge service at https://wa.link/880088 with direct 1-tap mobile access.
            </p>
          </div>

          {/* Categorized Link Grid */}
          <div className="space-y-10">
            {sitemapData.map((cat) => (
              <div key={cat.category} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-[#F0C419] border-b border-slate-200 pb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F0C419]" />
                  {cat.category} ({cat.pages.length} Pages)
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.pages.map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="text-xs sm:text-sm text-slate-700 hover:text-[#F0C419] transition-colors flex items-center gap-2 py-1 group"
                        title={p.label}
                      >
                        <span className="text-[#F0C419] font-bold group-hover:translate-x-1 transition-transform">›</span>
                        <span className="group-hover:underline">{p.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Architectural Notes & Value */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-[#F0C419]">
              How Lotus365's Unified Ecosystem Operates
            </h2>
            <p>
              Every endpoint documented in this sitemap connects into our unified cloud-based account ledger. When you generate an account via WhatsApp at{' '}
              <a href={OFFICIAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#F0C419] underline" title="WhatsApp Support">
                WhatsApp Support
              </a>
              , that single login unlocks access to all gaming verticals, betting exchanges, live dealer suites, and payment channels without needing to register separate accounts.
            </p>
            <p>
              Whether you are hedging match positions on the{' '}
              <Link href="/cricket-exchange" className="text-[#F0C419] underline" title="Cricket Exchange">
                Cricket Exchange
              </Link>
              , riding multiplier curves in{' '}
              <Link href="/aviator-game" className="text-[#F0C419] underline" title="Spribe Aviator">
                Spribe Aviator
              </Link>
              , or requesting a 2-minute instant UPI cashout to your bank account, Lotus365 delivers zero-friction, state-of-the-art gaming performance.
            </p>
          </div>

          {/* Detailed Topic Silo Strategy Breakdown */}
          <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h2 className="text-xl font-bold text-[#F0C419]">
              The Core Thematic Silos of Lotus365 Explained
            </h2>
            <p>
              Our website architecture is purposefully segmented into thematic information silos. Each cluster serves both the enthusiastic Indian bettor and automated search engine web-crawlers with comprehensive, mathematically verified, and transparent data:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 1: Core Corporate & Legal Transparency</h3>
                <p className="text-xs text-slate-600">
                  Houses our verified corporate history, international licensing disclosures, 24/7 customer care SLAs, strict 18+ minor protection charters, and digital personal data protection protocols.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 2: Sportsbook & Peer-to-Peer Exchange</h3>
                <p className="text-xs text-slate-600">
                  Contains the analytical heart of Lotus365. Offers ball-by-ball cricket liquidity, back & lay exchange tutorials, IPL powerplay forecasting models, ICC tournament schedules, and regional community hubs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 3: Authentic Indian & International Live Casino</h3>
                <p className="text-xs text-slate-600">
                  Explores hundreds of real-time live video tables streamed in crystal-clear HD. Covers rules, side-bet mathematical odds, hand hierarchies, and strategy blueprints for Teen Patti, Andar Bahar, European Roulette, Blackjack 21, and Speed Baccarat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 4: Provably Fair Crash & High-Velocity Games</h3>
                <p className="text-xs text-slate-600">
                  Details next-generation cryptographic entertainment headlined by Spribe Aviator (98.5% RTP). Explains SHA-256 seed verification, dual-bet automated cashout configurations, JetX multipliers, and round-the-clock virtual cricket engines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 5: Express Banking & 2-Minute Cashout Rails</h3>
                <p className="text-xs text-slate-600">
                  Guides players through zero-fee UPI deposit transactions via PhonePe, Google Pay, and Paytm, as well as our automated 2-minute IMPS withdrawal rails.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 6: Promotional Bonus & VIP Prestige Tiers</h3>
                <p className="text-xs text-slate-600">
                  Outlines welcome matching incentives, rollover wagering formulas, recurring weekly turnover cashback rebates, lifetime referral commissions, and VIP Black Card perks.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <h3 className="text-[#F0C419] font-bold text-sm">Silo 7: Strategic Blog Guides & Technical Knowledge Base</h3>
              <p className="text-xs text-slate-600">
                A rich educational library containing honest independent platform evaluations, head-to-head competitor comparisons, professional cricket exchange trading techniques, and bankroll preservation manuals.
              </p>
            </div>
          </div>

          {/* Semantic Internal Linking & SEO Cluster Architecture */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-[#F0C419]">
              Search Engine Optimization & Topic Cluster Hierarchy
            </h2>
            <p>
              Lotus365’s web architecture follows Google Search’s helpful content guidelines, organizing all {totalPagesCount} unique high-authority destinations into interconnected clusters. By linking specialized tournament guides (such as IPL 2026 and T20 World Cup) directly to our central Cricket Betting Exchange, Indian sports fans and automated crawlers discover clean, lightning-fast semantic pathways across all digital betting markets.
            </p>
            <p>
              Every URL has been constructed with clean semantic permalinks, canonical self-referencing headers, open-graph social previews, and structured JSON-LD Schema markup. This guarantees flawless indexation across Google, Bing, DuckDuckGo, and mobile search aggregators.
            </p>
          </div>

          {/* Navigation Protocols */}
          <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 space-y-3">
            <h2 className="text-xl font-extrabold text-[#F0C419]">
              Comprehensive Platform Navigation & Security Verification Protocols
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Navigating across Lotus365 is designed to be seamless across both mobile devices and desktop computers. Every link cataloged in this directory connects directly to our verified domain lotusplay365.shop. Players enjoy immediate, secure access directly on any smartphone, tablet, or PC.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All financial deposits and cashouts are channeled through authorized WhatsApp verification desks with end-to-end encryption. Bookmark this sitemap as your permanent navigational compass for real-time cricket odds, live dealer tables, VIP reward tiers, and 2-minute UPI settlement guides.
            </p>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#F0C419]" />
              Frequently Asked Questions About Site Navigation
            </h2>
            <div className="space-y-3">
              {sitemapFaqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{faq.q}</h3>
                  <p className="text-xs text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PageCTA headline="Navigate, Bet & Win on India's #1 Platform" />
    </Layout>
  </>
);
