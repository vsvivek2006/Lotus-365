import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { 
  ShieldCheck, 
  Trophy, 
  Zap, 
  Globe, 
  Users, 
  Award, 
  Clock, 
  HelpCircle, 
  Lock 
} from 'lucide-react';

const related = [
  { href: '/lotus365-review', label: 'Lotus365 Review 2026', description: 'Full honest review of the Lotus365 platform' },
  { href: '/cricket-betting', label: 'Cricket Betting', description: 'Bet on live IPL and T20 cricket matches' },
  { href: '/live-casino', label: 'Live Casino', description: 'Teen Patti, Roulette, Blackjack & more' },
  { href: '/vip-club', label: 'VIP Club', description: 'Exclusive rewards for high-value members' },
  { href: '/how-it-works', label: 'How It Works', description: 'Step-by-step WhatsApp ID guide' },
  { href: '/responsible-gaming', label: 'Responsible Gaming', description: 'Our commitment to safe betting' },
];

export const AboutPage: React.FC = () => (
  <>
    <SEOHead
      title="About Lotus365 — India's Most Trusted Betting Exchange & Live Casino"
      description="Learn about Lotus365 — India's premier peer-to-peer sports betting exchange and licensed live casino platform. Operating since 2019 with over 1.5 million active players, guaranteed 2-minute cashouts, and 0% exchange commission."
      canonical="/about"
      keywords="about lotus365, lotus365 official platform, lotus365 company history, lotus365 trusted, lotus365 license, lotus365 owner, best betting exchange india"
    />
    <Layout>
      <PageHero
        badge="Corporate Authority & Heritage"
        title="India's Most Trusted "
        highlight="Betting Exchange"
        subtitle="Founded in 2019, Lotus365 has redefined digital sports betting and live gaming in India. Built on the principles of peer-to-peer fairness, cryptographic transparency, and guaranteed 2-minute UPI cashouts."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Executive Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <Users className="w-6 h-6 text-[#F0C419]" />, val: '1,500,000+', label: 'Active Indian Bettors' },
              { icon: <Clock className="w-6 h-6 text-[#F0C419]" />, val: '120 Seconds', label: 'Guaranteed Cashout' },
              { icon: <Trophy className="w-6 h-6 text-[#F0C419]" />, val: '0% Commission', label: 'On Select Cricket Markets' },
              { icon: <ShieldCheck className="w-6 h-6 text-[#F0C419]" />, val: '100% Licensed', label: 'B2B Fair Play Audited' },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-black/20 border border-white/10 text-center">
                <div className="flex justify-center mb-2">{s.icon}</div>
                <div className="text-xl sm:text-2xl font-black text-white">{s.val}</div>
                <div className="text-[11px] text-white/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Company History & Genesis */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Our Journey: Solving the Broken Indian Online Betting Experience
            </h2>
            <p className="mb-4">
              Prior to 2019, Indian sports lovers seeking to wager on international cricket or the Indian Premier League faced an exploitative marketplace. Traditional European sportsbooks treated Indian users as secondary citizens: depositing money required navigating complex foreign forex cards that banks routinely declined, customer service was handled by automated English-only bots, and withdrawing legitimate winnings took 48 to 72 hours while foreign operators demanded invasive passport scans.
            </p>
            <p className="mb-4">
              <strong>Lotus365</strong> was established with a singular, revolutionary vision: to build a homegrown, high-performance betting platform tailored specifically to the technological and cultural realities of Indian players. We engineered direct, zero-fee integration with India’s <strong>Unified Payments Interface (UPI)</strong>, pioneered the legendary <strong>2-Minute Cashout Guarantee</strong>, and replaced slow, impersonal web ticket queues with private, 24/7 human concierge desks on <strong>WhatsApp</strong>.
            </p>
            <p>
              Today, operating exclusively through our verified domain <strong className="text-white">lotus365officialid.com</strong>, Lotus365 is recognized across Mumbai, Delhi, Bengaluru, Hyderabad, and Kolkata as the gold standard in digital wagering trust.
            </p>
          </div>

          {/* Core Corporate Pillars */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              The 4 Foundational Pillars of Lotus365
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#F0C419]" /> 1. Peer-to-Peer Exchange Integrity
                </h3>
                <p className="text-xs text-white/70">
                  Unlike traditional sportsbooks that profit when you lose, our <a href="/cricket-exchange" className="text-[#F0C419] underline">Cricket Exchange</a> is a true marketplace where players trade against one another. We simply provide the secure matching engine and charge our industry-low 0% to 2% commission.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#F0C419]" /> 2. Radical Cashout Velocity
                </h3>
                <p className="text-xs text-white/70">
                  We believe that holding player winnings hostage behind arbitrary verification checks is unacceptable. When you win on Lotus365, your balance is disbursed to your UPI ID or bank account within 120 seconds, guaranteed.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#F0C419]" /> 3. Absolute Privacy & Confidentiality
                </h3>
                <p className="text-xs text-white/70">
                  We maintain a strict zero-document onboarding protocol. By coordinating accounts through encrypted WhatsApp channels, your sensitive financial documents and identity cards remain completely confidential.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#F0C419]" /> 4. Instant Browser Performance
                </h3>
                <p className="text-xs text-white/70">
                  Play smoothly on any smartphone with zero storage consumed. Lotus365 runs at fluid 60fps directly in your mobile browser with lightning response times.
                </p>
              </div>
            </div>
          </div>

          {/* Historical Growth Timeline */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Historical Milestones: 2019 to 2026
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Year</th>
                    <th className="p-3.5">Strategic Milestone</th>
                    <th className="p-3.5">Impact on Indian Players</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-[#F0C419]">2019</td>
                    <td className="p-3.5 font-semibold text-white">Platform Launch</td>
                    <td className="p-3.5 text-white/70">Introduced peer-to-peer cricket exchange trading with direct WhatsApp customer onboarding.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#F0C419]">2021</td>
                    <td className="p-3.5 font-semibold text-white">Instant UPI Automation</td>
                    <td className="p-3.5 text-white/70">Integrated NPCI banking rails, dropping average deposit confirmation time to under 30 seconds.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#F0C419]">2023</td>
                    <td className="p-3.5 font-semibold text-white">Live Indian Gaming Suites</td>
                    <td className="p-3.5 text-white/70">Partnered with Evolution Gaming and Ezugi to deploy authentic Hindi-speaking Teen Patti and Andar Bahar tables.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#F0C419]">2025</td>
                    <td className="p-3.5 font-semibold text-white">2-Minute Cashout Guarantee</td>
                    <td className="p-3.5 text-white/70">Established pre-funded corporate banking reserves, guaranteeing 120-second cashouts across India.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#F0C419]">2026</td>
                    <td className="p-3.5 font-semibold text-white">1.5M+ Player Community</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Lotus365 solidifies position as India’s #1 trusted digital gaming destination.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Responsible Corporate Commitment */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Commitment to Fair Play & Responsible Entertainment
            </h2>
            <p className="mb-4">
              We hold the view that a healthy gaming ecosystem depends on customer welfare. Lotus365 enforces strict age verification (18+ only), certified cryptographic Random Number Generators (RNG) for all virtual games, and proactive responsible gambling tools. Players may at any time request cooling-off breaks, deposit ceilings, or account self-exclusion through our dedicated <a href="/responsible-gaming" className="text-[#F0C419] font-semibold hover:underline">Responsible Gaming Desk</a>.
            </p>
          </div>

          {/* High-Performance Tech & Corporate Liquidity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Enterprise Technology Infrastructure & Banking Liquidity
            </h2>
            <p>
              To maintain sub-50ms odds latency during the final over of an IPL match, Lotus365 operates redundant cloud server clusters distributed across low-latency data hubs in Mumbai, Singapore, and Frankfurt. Our automated order-matching engine processes over 15,000 bets per second without freezing or order slippage. Every exchange match undergoes cryptographic ledger recording, eliminating discrepancies between back and lay transactions.
            </p>
            <p>
              Financially, Lotus365 maintains segregated escrow reserves across leading Indian tier-1 corporate banking partners. Player deposits are never mixed with company operational capital. This strict financial separation ensures that regardless of market volatility or massive accumulator payouts, 100% of player balances remain fully backed and instantly withdrawable within 120 seconds.
            </p>
            <p>
              Our cybersecurity posture adheres to ISO/IEC 27001 data protection standards. All browser transmissions are wrapped in end-to-end TLS 1.3 encryption with 256-bit Advanced Encryption Standard (AES) keys, shielding user sessions from eavesdropping, DNS hijacking, and man-in-the-middle attacks.
            </p>
          </div>

          {/* Customer Service SLA Matrix */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Customer Service Service Level Agreement (SLA)
            </h2>
            <p>
              At Lotus365, customer satisfaction is evaluated through concrete metrics, not hollow marketing slogans. We publish our binding customer service benchmarks openly for all members:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h3 className="font-bold text-white text-sm mb-1">WhatsApp Response Time</h3>
                <p className="text-emerald-400 font-extrabold text-lg">&lt; 30 Seconds</p>
                <p className="text-xs text-white/60 mt-1">Live human concierge connects on WhatsApp 24 hours a day, 365 days a year with zero queue delays.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h3 className="font-bold text-white text-sm mb-1">Deposit Crediting Speed</h3>
                <p className="text-[#F0C419] font-extrabold text-lg">Instant (&lt; 60s)</p>
                <p className="text-xs text-white/60 mt-1">Funds are posted to your player wallet the moment your UPI 12-digit UTR confirmation is transmitted.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h3 className="font-bold text-white text-sm mb-1">Withdrawal Disbursement</h3>
                <p className="text-emerald-400 font-extrabold text-lg">120 Seconds</p>
                <p className="text-xs text-white/60 mt-1">Automated IMPS banking rails ensure net winnings reach your registered Indian bank account in 2 minutes.</p>
              </div>
            </div>
          </div>

          {/* Our Core Philosophy: Player-First Fair Play */}
          <div className="p-5 rounded-2xl bg-[#F0C419]/10 border border-[#F0C419]/30 space-y-3">
            <h3 className="text-base font-black text-[#F0C419]">
              The Lotus365 Player-First Pledge
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              We operate under the firm conviction that Indian bettors deserve the highest tier of international sportsbook engineering combined with transparent local banking. We will never introduce predatory rollover traps, hidden transaction deductions, or deceptive software throttling. When you bet on Lotus365, you are trading on the most technologically advanced, mathematically fair, and financially secure platform in South Asia.
            </p>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Lotus365
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Who owns and operates the Lotus365 platform?',
                  a: 'Lotus365 is operated by an offshore gaming enterprise licensed under international regulatory jurisdictions, providing a secure, compliant environment for Indian sports and casino enthusiasts.'
                },
                {
                  q: 'How does Lotus365 ensure games are not rigged?',
                  a: 'All casino tables are broadcast live from licensed international studios with physical card decks and optical sensors. Crash games like Spribe Aviator use public SHA-512 cryptographic Provably Fair algorithms that anyone can independently audit.'
                },
                {
                  q: 'Why does Lotus365 operate through WhatsApp rather than a public registration form?',
                  a: 'WhatsApp allows us to provide instant, personalized human assistance, deliver rapid 2-minute cashouts, and protect your privacy without storing unencrypted identity documents on web servers.'
                },
                {
                  q: 'Is Lotus365 accessible across all states in India?',
                  a: 'Lotus365 is accessible via web browsers throughout India, complying with international digital entertainment standards.'
                },
                {
                  q: 'What makes Lotus365 different from European bookmakers like Bet365 or Betway?',
                  a: 'Unlike European bookmakers that impose severe account limits on winning players, Lotus365 operates as a true exchange where winners are welcomed. Additionally, European platforms frequently reject Indian bank cards and take days to process payouts, whereas Lotus365 settles within 2 minutes via UPI.'
                },
                {
                  q: 'Can I access Lotus365 on an iPhone, iPad, or Android phone?',
                  a: 'Yes! Lotus365 is completely optimized for all mobile screens. Simply visit lotus365officialid.com on Safari or Chrome and bookmark or add to home screen for 1-tap gaming anytime.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-2">{faq.q}</h4>
                  <p className="text-xs text-white/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <RelatedPages pages={related} />
      <PageCTA headline="Join India's Most Trusted Betting Family" />
    </Layout>
  </>
);
