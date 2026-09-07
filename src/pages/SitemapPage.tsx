import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageCTA } from '../components/layout/PageCTA';
import { MapPin, HelpCircle, Network, Layers } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

const sitemapData = [
  { category: 'Core Corporate & Legal Authority', pages: [
    { href: '/', label: 'Lotus365 Home — India\'s #1 Betting Exchange' },
    { href: '/about', label: 'About Lotus365 Corporate Heritage' },
    { href: '/contact', label: 'Contact 24/7 Official WhatsApp Desk' },
    { href: '/responsible-gaming', label: 'Responsible Gaming Policy & 18+ Verification' },
    { href: '/terms', label: 'Terms & Conditions of Service' },
    { href: '/privacy-policy', label: 'Privacy Policy & Zero-Data Leak Promise' },
    { href: '/sitemap', label: 'Lotus365 Official HTML Sitemap & Directory' },
  ]},
  { category: 'Sportsbook & Cricket Exchange Markets', pages: [
    { href: '/cricket-betting', label: 'Cricket Betting Hub India' },
    { href: '/cricket-exchange', label: 'Cricket Exchange Online (Back & Lay)' },
    { href: '/ipl-betting', label: 'IPL Betting 2026 Live Markets' },
    { href: '/t20-world-cup-betting', label: 'ICC T20 World Cup Betting' },
    { href: '/football-betting', label: 'Football Betting & Premier League Odds' },
    { href: '/tennis-betting', label: 'Tennis Betting & Grand Slam Markets' },
    { href: '/kabaddi-betting', label: 'Pro Kabaddi League (PKL) Betting' },
    { href: '/basketball-betting', label: 'NBA & World Basketball Betting' },
    { href: '/horse-racing-betting', label: 'Horse Racing Betting India' },
    { href: '/sportsbook', label: 'Online Sportsbook Multi-Sport Portal' },
  ]},
  { category: 'Live Dealer Casino Suite', pages: [
    { href: '/live-casino', label: 'Live Casino Lobby (1000+ Tables)' },
    { href: '/teen-patti', label: 'Teen Patti Cash Online Live' },
    { href: '/andar-bahar', label: 'Andar Bahar Real Money Live' },
    { href: '/roulette', label: 'European Roulette Online India' },
    { href: '/blackjack', label: 'Live Dealer Blackjack 21' },
    { href: '/baccarat', label: 'Live Baccarat Real Money' },
    { href: '/dragon-tiger', label: 'Dragon Tiger Live Card Game' },
    { href: '/speed-baccarat', label: 'Speed Baccarat Fast Rounds' },
    { href: '/lightning-roulette', label: 'Lightning Roulette 500x Multipliers' },
    { href: '/casino-slots', label: 'Online Slots & Megaways Jackpots' },
  ]},
  { category: 'Crash & High-Speed Multiplier Games', pages: [
    { href: '/aviator-game', label: 'Spribe Aviator Crash Game 98.5% RTP' },
    { href: '/crash-games', label: 'Crash Games Hub (JetX, Spaceman)' },
    { href: '/color-prediction', label: 'Color Prediction Online (Colour Wiz, Parity)' },
    { href: '/virtual-sports', label: '24/7 Virtual Sports (Cricket, Football, Horses)' },
  ]},
  { category: 'Account Administration & Express Banking', pages: [
    { href: '/register', label: 'Register Free — Get Instant WhatsApp ID' },
    { href: '/login', label: 'Official Lotus365 Login Guide' },
    { href: '/how-to-deposit', label: 'How to Deposit on Lotus365' },
    { href: '/how-to-withdraw', label: 'How to Withdraw from Lotus365' },
    { href: '/upi-deposit', label: 'UPI Instant Deposit Guide (PhonePe, GPay, Paytm)' },
    { href: '/imps-withdrawal', label: 'IMPS Bank Transfer Withdrawal' },
    { href: '/payment-methods', label: 'All Supported Payment Methods' },
    { href: '/2-minute-cashout', label: 'Guaranteed 2-Minute Cashout Guide' },
  ]},
  { category: 'Promotional Bonuses & VIP Loyalty Hierarchy', pages: [
    { href: '/welcome-bonus', label: '100% Matching Welcome Bonus up to ₹5,000' },
    { href: '/first-deposit-bonus', label: 'First Deposit Bonus Brackets' },
    { href: '/referral-bonus', label: 'Referral Bonus Program (Earn by Inviting Friends)' },
    { href: '/cashback-offers', label: 'Weekly Loss Cashback Rebates' },
    { href: '/vip-club', label: 'Lotus365 VIP Club & Rewards' },
    { href: '/vip-black-card', label: 'VIP Black Card Elite Membership' },
  ]},
  { category: 'Strategic Blog Guides & Technical Knowledge Base', pages: [
    { href: '/lotus365-review', label: 'Lotus365 Independent Review 2026' },
    { href: '/lotus365-vs-competitors', label: 'Lotus365 vs Competitors (Betway, 1xBet, Dream11)' },
    { href: '/betting-tips', label: 'Cricket Betting Tips & Exchange Trading Strategies' },
    { href: '/ipl-predictions', label: 'IPL 2026 Expert Predictions & Tournament Odds' },
    { href: '/online-casino-guide', label: 'Online Casino Handbook: Rules, RTP & House Edge' },
    { href: '/safe-betting-guide', label: 'Safe & Responsible Online Betting Guide' },
    { href: '/mobile-web-app-guide', label: 'Mobile Gaming & Fast Smartphone Play Guide' },
    { href: '/faq', label: 'Lotus365 Frequently Asked Questions' },
    { href: '/how-it-works', label: 'How Lotus365 Works: Complete 4-Minute Onboarding' },
  ]},
];

export const SitemapPage: React.FC = () => (
  <>
    <SEOHead
      title="Sitemap — Complete Directory of All Lotus365 Pages & Guides"
      description="Complete structural sitemap of Lotus365. Explore all 54 official pages across cricket betting, live casino tables, crash games, payment guides, VIP perks, and tutorials."
      canonical="/sitemap"
      keywords="lotus365 sitemap, all lotus365 pages, lotus365 directory, lotus365 navigation, betting site sitemap india"
    />
    <Layout>
      <section className="pt-10 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0b3b2d] to-[#14614C]">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0C419]/20 text-[#F0C419] text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" /> Complete Platform Architecture
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Lotus365 Official <span className="text-[#F0C419]">HTML Sitemap</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-3xl leading-relaxed">
              Navigate the complete architecture of India's #1 peer-to-peer sports betting exchange, live casino suite, and digital entertainment platform. All 54 official directories, market guides, and banking portals are listed below for transparent, frictionless navigation.
            </p>
          </div>

          {/* Architecture Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-3 items-center">
              <Network className="w-6 h-6 text-[#F0C419] shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">7 Thematic Clusters</div>
                <div className="text-xs text-white/60">Organized topic authority silos</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-3 items-center">
              <Layers className="w-6 h-6 text-[#F0C419] shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">54 Verified Endpoints</div>
                <div className="text-xs text-white/60">100% crawlable internal links</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-3 items-center">
              <MapPin className="w-6 h-6 text-[#F0C419] shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">Instant WhatsApp Onboarding</div>
                <div className="text-xs text-white/60">Unified wallet across all portals</div>
              </div>
            </div>
          </div>

          {/* Comprehensive Architecture Overview */}
          <div className="p-6 rounded-2xl bg-black/25 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Full Information Architecture & Topic Cluster Index
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Our 54 platform routes are categorized into six core thematic silos to deliver an intuitive user experience and clear semantic signals to search engines. The Sports Betting exchange silo provides comprehensive market depth for cricket, IPL, football, and tennis. The Live Casino cluster contains dedicated guides for Indian classics like Teen Patti and Andar Bahar alongside Evolution Gaming roulette, blackjack, and baccarat. The Banking hub covers step-by-step 2-minute UPI deposits and instant IMPS cashouts, while the VIP & Promotions directory details cashback tiers, referral bonuses, and high-roller privileges.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Every page on lotus365officialid.com operates under HTTPS SSL encryption, complies with Google mobile-first indexing standards, and offers direct access to our 24/7 human WhatsApp concierge service at https://wa.link/880088 with direct 1-tap mobile access.
            </p>
          </div>

          {/* Categorized Link Grid */}
          <div className="space-y-10">
            {sitemapData.map((cat) => (
              <div key={cat.category} className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
                <h2 className="text-lg font-bold text-[#F0C419] border-b border-white/10 pb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F0C419]" />
                  {cat.category} ({cat.pages.length} Pages)
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.pages.map((p) => (
                    <li key={p.href}>
                      <Link 
                        to={p.href} 
                        className="text-xs sm:text-sm text-white/80 hover:text-[#F0C419] transition-colors flex items-center gap-2 py-1 group"
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
          <div className="p-6 rounded-2xl bg-black/30 border border-white/10 space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-[#F0C419]">
              How Lotus365's Unified Ecosystem Operates
            </h2>
            <p>
              Every endpoint documented in this sitemap connects into our unified cloud-based account ledger. When you generate an account via WhatsApp at <a href={OFFICIAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#F0C419] underline">WhatsApp Support</a>, that single login unlocks access to all 54 gaming verticals, betting exchanges, live dealer suites, and payment channels without needing to register separate accounts.
            </p>
            <p>
              Whether you are hedging match positions on the <Link to="/cricket-exchange" className="text-[#F0C419] underline">Cricket Exchange</Link>, riding multiplier curves in <Link to="/aviator-game" className="text-[#F0C419] underline">Spribe Aviator</Link>, or requesting a 2-minute instant UPI cashout to your bank account, Lotus365 delivers zero-friction, state-of-the-art gaming performance.
            </p>
          </div>

          {/* Detailed Topic Silo Strategy Breakdown */}
          <div className="space-y-6 text-xs sm:text-sm text-white/80 leading-relaxed">
            <h2 className="text-xl font-bold text-[#F0C419]">
              The 7 Core Thematic Silos of Lotus365 Explained
            </h2>
            <p>
              Our website architecture is purposefully segmented into seven thematic information silos. Each cluster serves both the enthusiastic Indian bettor and automated search engine web-crawlers with comprehensive, mathematically verified, and transparent data:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 1: Core Corporate & Legal Transparency</h3>
                <p className="text-xs text-white/70">
                  Houses our verified corporate history, international licensing disclosures, 24/7 customer care SLAs, strict 18+ minor protection charters, and digital personal data protection protocols. These pages validate our standing as India's safest peer-to-peer exchange operator.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 2: Sportsbook & Peer-to-Peer Exchange</h3>
                <p className="text-xs text-white/70">
                  Contains the analytical heart of Lotus365. Offers ball-by-ball cricket liquidity, back & lay exchange tutorials, IPL powerplay forecasting models, ICC tournament schedules, football handicap matrices, and multi-sport tournament wagering calendars.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 3: Authentic Indian & International Live Casino</h3>
                <p className="text-xs text-white/70">
                  Explores hundreds of real-time live video tables streamed in crystal-clear HD. Covers rules, side-bet mathematical odds, hand hierarchies, and strategy blueprints for Teen Patti, Andar Bahar, European Roulette, Blackjack 21, and Speed Baccarat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 4: Provably Fair Crash & High-Velocity Games</h3>
                <p className="text-xs text-white/70">
                  Details next-generation cryptographic entertainment headlined by Spribe Aviator (98.5% RTP). Explains SHA-256 seed verification, dual-bet automated cashout configurations, JetX multipliers, and round-the-clock virtual cricket engines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 5: Express Banking & 2-Minute Cashout Rails</h3>
                <p className="text-xs text-white/70">
                  Guides players through zero-fee UPI deposit transactions via PhonePe, Google Pay, and Paytm, as well as our automated 2-minute IMPS withdrawal rails. Outlines transaction boundaries, deposit verification steps, and zero-fee policies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-[#F0C419] font-bold text-sm">Silo 6: Promotional Bonus & VIP Prestige Tiers</h3>
                <p className="text-xs text-white/70">
                  Outlines welcome matching incentives, rollover wagering formulas, recurring weekly turnover cashback rebates, lifetime referral commissions, and VIP Black Card perks including private liquidity managers and unlimited withdrawal thresholds.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-[#F0C419] font-bold text-sm">Silo 7: Strategic Blog Guides & Technical Knowledge Base</h3>
              <p className="text-xs text-white/70">
                A rich educational library containing honest independent platform evaluations, head-to-head competitor comparisons, professional cricket exchange trading techniques, bankroll preservation manuals, and high-speed smartphone browser guides.
              </p>
            </div>
          </div>

          {/* Semantic Internal Linking & SEO Cluster Architecture */}
          <div className="space-y-3 text-xs sm:text-sm text-white/80 leading-relaxed">
            <h2 className="text-lg font-bold text-[#F0C419]">
              Search Engine Optimization & Topic Cluster Hierarchy
            </h2>
            <p>
              Lotus365’s web architecture follows Google Search’s helpful content guidelines, organizing 54 unique high-authority destinations into interconnected clusters. By linking specialized tournament guides (such as IPL 2026 and T20 World Cup) directly to our central Cricket Betting Exchange, Indian sports fans and automated crawlers discover clean, lightning-fast semantic pathways across all digital betting markets.
            </p>
            <p>
              Every URL has been constructed with clean semantic permalinks, canonical self-referencing headers, open-graph social previews, and structured JSON-LD Schema markup. This guarantees flawless indexation across Google, Bing, DuckDuckGo, and mobile search aggregators.
            </p>
          </div>

          {/* Navigation Protocols */}
          <div className="p-6 rounded-2xl bg-[#0b3b2d]/40 border border-white/10 space-y-3">
            <h2 className="text-xl font-extrabold text-[#F0C419]">
              Comprehensive Platform Navigation & Security Verification Protocols
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Navigating across Lotus365 is designed to be seamless across both mobile devices and desktop computers. Every link cataloged in this directory connects directly to our verified domain lotus365officialid.com. Players enjoy immediate, secure access directly on any smartphone, tablet, or PC.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              All financial deposits and cashouts are channeled through authorized WhatsApp verification desks with end-to-end encryption. Bookmark this sitemap as your permanent navigational compass for real-time cricket odds, live dealer tables, VIP reward tiers, and 2-minute UPI settlement guides.
            </p>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F0C419] mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#F0C419]" />
              Frequently Asked Questions About Site Navigation
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: 'Are all pages in this sitemap accessible on mobile phones?',
                  a: 'Yes! Lotus365 is completely mobile-optimized. Every page, live stream, and casino game runs natively in Chrome, Safari, and other browsers with instant load times and fluid 60 FPS graphics.'
                },
                {
                  q: 'Where can I find the XML sitemap for search engine crawlers?',
                  a: 'Our machine-readable XML sitemap is maintained at https://lotus365officialid.com/sitemap.xml and indexed directly with Google Search Console.'
                },
                {
                  q: 'How frequently is this directory updated?',
                  a: 'This sitemap is updated in real time whenever new sports tournaments, live casino games, or promotional bonuses are introduced to the Lotus365 platform.'
                },
                {
                  q: 'Can I bookmark individual game pages like Aviator or Roulette directly?',
                  a: 'Yes. Every page in this sitemap possesses a dedicated canonical URL that you can bookmark on your mobile or desktop browser for direct one-tap access.'
                },
                {
                  q: 'Do I need separate login credentials for the sports exchange and live casino?',
                  a: 'No! Your single Lotus365 WhatsApp ID grants universal access to every directory and game featured in this sitemap with a unified wallet balance.'
                },
                {
                  q: 'How do I report a broken link or page issue?',
                  a: 'Message our 24/7 WhatsApp customer care desk at wa.link/880088. Our web engineering team resolves technical inquiries within minutes.'
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <h4 className="font-bold text-white text-xs sm:text-sm mb-1">{faq.q}</h4>
                  <p className="text-xs text-white/70">{faq.a}</p>
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
