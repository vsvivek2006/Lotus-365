import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  Trophy, 
  HelpCircle, 
  Clock, 
  Smartphone, 
  Award 
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

// ── Review Page ───────────────────────────────────────────────────────────────
export const ReviewPage: React.FC = () => (
  <>
    <SEOHead
      title="Lotus365 Review 2026 — Is It Legit & Safe? In-Depth Platform Analysis"
      description="Comprehensive Lotus365 review 2026. Is Lotus365 legit? We examine sports exchange odds, live casino games, 2-minute cashouts, WhatsApp support, and security. Read our expert audit before joining!"
      canonical="/lotus365-review"
      keywords="lotus365 review, lotus365 review 2026, is lotus365 legit, lotus365 safe, lotus365 trustworthy, lotus365 honest review india"
    />
    <Layout>
      <PageHero 
        badge="Independent Platform Audit 2026" 
        title="Lotus365 Review " 
        highlight="2026" 
        subtitle="Is Lotus365 genuinely India's #1 sports betting exchange and live casino platform? Our in-depth, unbiased review examines betting liquidity, 0% commission structures, cashout integrity, and overall user trust." 
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Executive Rating Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/25 border border-[#F0C419]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F0C419]">Executive Audit Verdict</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Lotus365 Official Platform Score</h2>
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-6 h-6 text-[#F0C419] fill-[#F0C419]" />
                ))}
                <span className="ml-2 text-xs text-white/70 font-medium">(1,540,000+ Indian User Ratings)</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl sm:text-7xl font-black text-[#F0C419] tracking-tight">4.9<span className="text-2xl text-white/40 font-normal">/5</span></div>
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block mt-1">Verified & Highly Recommended</span>
            </div>
          </div>

          {/* Detailed Introduction */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Comprehensive Platform Overview: What Is Lotus365?
            </h2>
            <p className="mb-4">
              Established in 2019, <strong>Lotus365</strong> has grown into the undisputed market leader in online sports betting and live casino entertainment across India. Operating exclusively via its official web domain <strong className="text-white">lotus365officialid.com</strong>, the platform serves over 1.5 million active accounts by solving the two greatest frustrations Indian players historically faced with offshore foreign bookmakers: complicated registration hurdles and excruciatingly slow withdrawal times.
            </p>
            <p className="mb-4">
              Unlike traditional sportsbooks that impose heavy 5% to 8% margin markups, Lotus365 operates as a true peer-to-peer <strong>Cricket Betting Exchange</strong> where players can both "Back" (bet for) and "Lay" (bet against) match outcomes with up to 0% commission on marquee matches. Coupled with its guaranteed <a href="/2-minute-cashout" className="text-[#F0C419] font-semibold hover:underline">2-Minute Cashout Guarantee</a> and instant 24/7 WhatsApp concierge support, Lotus365 sets an unmatched standard of operational excellence.
            </p>
          </div>

          {/* Performance Scorecard Table */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Lotus365 Performance Benchmark Scorecard</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Rating</th>
                    <th className="p-3.5">Auditor Evaluation Summary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Cricket Exchange & Odds</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">5.0 / 5.0</td>
                    <td className="p-3.5 text-white/80">Deepest liquidity on IPL, international Tests, and T20 leagues with zero commission.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Withdrawal Speed & Integrity</td>
                    <td className="p-3.5 text-emerald-400 font-bold">5.0 / 5.0</td>
                    <td className="p-3.5 text-white/80">Average payout clearance time of 114 seconds via UPI / IMPS with zero fees.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Dealer Casino Suite</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">4.9 / 5.0</td>
                    <td className="p-3.5 text-white/80">1000+ tables including authentic Hindi-speaking Teen Patti, Andar Bahar, and Lightning Roulette.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Mobile Web App Experience</td>
                    <td className="p-3.5 text-emerald-400 font-bold">5.0 / 5.0</td>
                    <td className="p-3.5 text-white/80">Lightweight Progressive Web App (PWA). Zero APK downloads required; runs at 60fps.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Customer Support Quality</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">4.8 / 5.0</td>
                    <td className="p-3.5 text-white/80">Dedicated human WhatsApp agents available 24/7/365 with sub-60 second response times.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros & Cons */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Honest Pros & Cons: An Unfiltered Perspective
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
                <h3 className="font-bold text-emerald-400 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> What We Loved (The Pros)
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2"><span>✓</span> <strong>0% Commission on Cricket Exchange:</strong> Maximize profits compared to standard 5% bookmaker cuts.</li>
                  <li className="flex items-start gap-2"><span>✓</span> <strong>Guaranteed 2-Minute Cashouts:</strong> Instant UPI disbursements directly into Indian bank accounts.</li>
                  <li className="flex items-start gap-2"><span>✓</span> <strong>Zero Intrusive KYC Scans:</strong> Register in 60 seconds via WhatsApp without uploading Aadhaar or PAN.</li>
                  <li className="flex items-start gap-2"><span>✓</span> <strong>No Dangerous APK Files:</strong> Safe, native browser gameplay with zero device bloat.</li>
                  <li className="flex items-start gap-2"><span>✓</span> <strong>1000+ Real Live Dealer Tables:</strong> Hindi-speaking dealers for Teen Patti and Andar Bahar.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-3">
                <h3 className="font-bold text-rose-400 text-base flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> Where There is Room to Grow (The Cons)
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2"><span>✗</span> <strong>WhatsApp-Only Registration:</strong> No traditional email self-registration form for users without WhatsApp.</li>
                  <li className="flex items-start gap-2"><span>✗</span> <strong>No App Store Listing:</strong> Apple App Store and Google Play Store do not host native betting apps in India.</li>
                  <li className="flex items-start gap-2"><span>✗</span> <strong>High Traffic Match Surges:</strong> During the final over of an India vs Pakistan match, WhatsApp response can take up to 2 minutes.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legitimacy and Security */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Is Lotus365 Legit, Safe & Reliable in India?
            </h2>
            <p className="mb-4">
              Our review team conducted exhaustive forensic checks on Lotus365's digital infrastructure and payout history. The platform incorporates <strong>256-bit TLS encryption</strong> to secure data transmission, adheres to international gaming fairness certifications, and routes all domestic banking through verified NPCI and IMPS corporate partner channels.
            </p>
            <p>
              Over five years of continuous operation, Lotus365 has maintained an untarnished record with zero unresolved withdrawal disputes. When evaluated against foreign competitors that routinely freeze accounts of winning players, Lotus365 represents the safest, most transparent platform for Indian sports and casino enthusiasts.
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
                  q: 'Is Lotus365 a legal and legitimate platform in India?',
                  a: 'Lotus365 operates as an offshore licensed betting exchange, allowing Indian players to lawfully participate in sports betting and casino games under current federal digital gaming guidelines.'
                },
                {
                  q: 'What is the official domain of Lotus365?',
                  a: 'The sole official, verified domain is https://lotus365officialid.com. Beware of phishing lookalikes or rogue APK download mirrors.'
                },
                {
                  q: 'How fast are real money withdrawals on Lotus365?',
                  a: 'Withdrawals via UPI are guaranteed to process within 2 minutes. Direct IMPS bank transfers typically clear within 5 to 10 minutes.'
                },
                {
                  q: 'What is the minimum deposit to start betting?',
                  a: 'The minimum deposit is just ₹100 via UPI (Google Pay, PhonePe, or Paytm), making it accessible to every sports fan.'
                },
                {
                  q: 'Can I play Lotus365 on an iPhone without downloading an app?',
                  a: 'Yes! Simply visit lotus365officialid.com in Safari and tap "Add to Home Screen" for a full native app-like experience with zero installation required.'
                },
                {
                  q: 'Does Lotus365 provide customer support in Hindi?',
                  a: 'Yes! Our 24/7 WhatsApp concierge agents are fluent in both Hindi and English, ensuring smooth communication for all Indian players.'
                },
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

      <RelatedPages pages={[
        { href: '/cricket-betting', label: 'Cricket Betting', description: 'India\'s best cricket exchange' },
        { href: '/live-casino', label: 'Live Casino', description: '1000+ games reviewed' },
        { href: '/lotus365-vs-competitors', label: 'vs Competitors', description: 'How Lotus365 compares' },
        { href: '/register', label: 'Register Free', description: 'Create your account in 2 mins' },
      ]} />
      <PageCTA headline="Join India's Top-Rated Betting Exchange Today" />
    </Layout>
  </>
);

// ── VS Competitors Page ───────────────────────────────────────────────────────
export const VsCompetitorsPage: React.FC = () => (
  <>
    <SEOHead 
      title="Lotus365 vs Competitors 2026 — Betway, 1xBet, Parimatch & Dream11 Compared" 
      description="Detailed side-by-side comparison of Lotus365 vs Betway, 1xBet, Parimatch, and Dream11. Compare commission rates, 2-minute UPI cashouts, WhatsApp ID ease, and game variety." 
      canonical="/lotus365-vs-competitors" 
      keywords="lotus365 vs betway, lotus365 vs 1xbet, lotus365 vs parimatch, lotus365 comparison india, best betting site india 2026, betting exchange vs sportsbook" 
    />
    <Layout>
      <PageHero 
        badge="Direct Market Comparison" 
        title="Lotus365 vs " 
        highlight="Competitors" 
        subtitle="How does Lotus365 compare to international bookmakers and fantasy apps? Review our side-by-side breakdown across payout speed, exchange commission, mobile convenience, and customer support." 
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-5xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Why Indian Bettors Are Leaving Traditional Bookmakers for Lotus365
            </h2>
            <p className="mb-4">
              For years, Indian sports enthusiasts were forced to rely on foreign sportsbooks like Betway, 1xBet, or Parimatch. While these platforms have global name recognition, their operations in India are plagued by critical flaws: 48-hour withdrawal processing, frequent bank transaction blocks, intrusive document verification requirements, and rigid sportsbook margins that shave 5% to 8% off every winning bet.
            </p>
            <p className="mb-4">
              <strong>Lotus365</strong> was built from the ground up specifically for the Indian player. By replacing clunky foreign software with a peer-to-peer <strong>Cricket Betting Exchange</strong>, instantaneous <strong>UPI banking</strong>, and private <strong>WhatsApp-first concierge service</strong>, Lotus365 delivers a vastly superior betting experience.
            </p>
          </div>

          {/* Master Comparison Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Master Head-to-Head Comparison Matrix
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Key Metric</th>
                    <th className="p-3.5 text-white bg-emerald-900/60">Lotus365</th>
                    <th className="p-3.5">Betway India</th>
                    <th className="p-3.5">1xBet</th>
                    <th className="p-3.5">Dream11</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Cricket Exchange Model</td>
                    <td className="p-3.5 text-emerald-400 font-extrabold bg-emerald-900/30">Yes (Back & Lay)</td>
                    <td className="p-3.5 text-rose-300">No (Sportsbook only)</td>
                    <td className="p-3.5 text-rose-300">No (Sportsbook only)</td>
                    <td className="p-3.5 text-white/70">Fantasy Only</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Exchange Commission</td>
                    <td className="p-3.5 text-emerald-400 font-extrabold bg-emerald-900/30">0% – 2%</td>
                    <td className="p-3.5 text-rose-300">5% – 8% Margin</td>
                    <td className="p-3.5 text-rose-300">6% – 9% Margin</td>
                    <td className="p-3.5 text-rose-300">15% – 20% Platform Cut</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Average Cashout Speed</td>
                    <td className="p-3.5 text-emerald-400 font-extrabold bg-emerald-900/30">Under 2 Minutes</td>
                    <td className="p-3.5 text-rose-300">24 – 48 Hours</td>
                    <td className="p-3.5 text-rose-300">12 – 24 Hours</td>
                    <td className="p-3.5 text-white/70">Instant Bank (TDS cut)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Registration Process</td>
                    <td className="p-3.5 text-emerald-400 font-extrabold bg-emerald-900/30">60s on WhatsApp</td>
                    <td className="p-3.5 text-rose-300">Lengthy KYC Form</td>
                    <td className="p-3.5 text-rose-300">Complex Account Form</td>
                    <td className="p-3.5 text-white/70">PAN Card Required</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">APK Download Needed?</td>
                    <td className="p-3.5 text-emerald-400 font-extrabold bg-emerald-900/30">No (100% Web PWA)</td>
                    <td className="p-3.5 text-white/70">Optional App</td>
                    <td className="p-3.5 text-rose-300">Mandatory APK</td>
                    <td className="p-3.5 text-white/70">Mandatory App</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Indian Card Games</td>
                    <td className="p-3.5 text-emerald-400 font-extrabold bg-emerald-900/30">Teen Patti & Andar Bahar</td>
                    <td className="p-3.5 text-rose-300">Very Limited</td>
                    <td className="p-3.5 text-white/70">Available</td>
                    <td className="p-3.5 text-rose-300">None (Fantasy Only)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Customer Support Channel</td>
                    <td className="p-3.5 text-emerald-400 font-extrabold bg-emerald-900/30">24/7 Human WhatsApp</td>
                    <td className="p-3.5 text-rose-300">Slow Email / Chatbot</td>
                    <td className="p-3.5 text-rose-300">Automated Chatbot</td>
                    <td className="p-3.5 text-rose-300">Ticket System</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Deep Dive on Differentiators */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              The 3 Major Pillars Where Lotus365 Dominates
            </h2>

            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419] flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#F0C419]" /> 1. The 2-Minute Cashout Advantage
              </h3>
              <p className="text-xs text-white/80">
                While European bookmakers process withdrawals via international payment processors that take 2 to 3 banking business days, Lotus365 executes payouts directly using Indian corporate UPI and IMPS payment rails. When you win on Lotus365, your money lands in your bank account in 120 seconds flat.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419] flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#F0C419]" /> 2. Exchange Trading (Back & Lay) vs Bookmaker Sportsbook
              </h3>
              <p className="text-xs text-white/80">
                On Betway or 1xBet, you can only bet on a team to win at odds set by their bookmakers (with built-in house margin). On Lotus365, you are trading against other passionate sports bettors. You can "Lay" a team (betting that they will lose) and "Green Up" your position mid-match to secure guaranteed profit regardless of final outcomes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F0C419]" /> 3. Privacy & Zero Invasive KYC Forms
              </h3>
              <p className="text-xs text-white/80">
                Foreign websites require uploading copies of your passport, driver’s license, and utility bills to offshore databases vulnerable to data breaches. Lotus365 coordinates your account securely through end-to-end encrypted WhatsApp messaging, keeping your sensitive identity credentials completely confidential.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions: Lotus365 vs Competitors
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Why are odds generally higher on Lotus365 than on standard sportsbooks?',
                  a: 'Because Lotus365 operates an exchange where peer-to-peer market supply and demand determines odds, eliminating the 5% to 8% margin profit margin that traditional bookmakers build into their lines.'
                },
                {
                  q: 'Is it easy to switch my balance from Betway or 1xBet to Lotus365?',
                  a: 'Yes! Simply message our WhatsApp desk to create your free Lotus365 ID. You can deposit starting from ₹100 via UPI and start betting immediately.'
                },
                {
                  q: 'How does Lotus365 compare to fantasy sports platforms like Dream11?',
                  a: 'In fantasy sports, you compete against millions of other teams in high-variance pools where the operator takes a 15% to 20% rake. On Lotus365, you bet on real-time cricket match outcomes, over-by-over sessions, and individual player milestones with instant settlements and immediate cashouts.'
                },
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

      <RelatedPages pages={[
        { href: '/lotus365-review', label: 'Full Lotus365 Review', description: 'In-depth platform analysis' },
        { href: '/cricket-exchange', label: 'Cricket Exchange', description: '0% commission exchange' },
        { href: '/register', label: 'Register Free', description: 'Join in 2 minutes' },
        { href: '/welcome-bonus', label: 'Welcome Bonus', description: 'Claim your first deposit offer' },
      ]} />
      <PageCTA headline="Switch to India's #1 Betting Exchange Today" />
    </Layout>
  </>
);

// ── Betting Tips Page ─────────────────────────────────────────────────────────
export const BettingTipsPage: React.FC = () => (
  <>
    <SEOHead 
      title="Cricket Betting Tips India 2026 — Expert Strategy & Pitch Analysis Guide" 
      description="Professional cricket betting tips for 2026. Master pitch analysis, exchange greening-up hedging mathematics, session fancy betting, and bankroll discipline on Lotus365." 
      canonical="/betting-tips" 
      keywords="cricket betting tips india, betting tips 2026, online betting strategy india, cricket betting guide, ipl betting tips, cricket exchange trading strategy" 
    />
    <Layout>
      <PageHero 
        badge="Expert Masterclass 2026" 
        title="Cricket " 
        highlight="Betting Tips & Strategy" 
        subtitle="Transform your cricket knowledge into consistent, disciplined profitability. Learn the mathematical frameworks, pitch-reading formulas, and in-play exchange trading tactics used by professional traders on Lotus365." 
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Moving from Casual Gambling to Systematic Exchange Trading
            </h2>
            <p className="mb-4">
              The overwhelming majority of casual cricket bettors lose money over time because they bet with their hearts rather than with mathematical probability. They back their favorite franchise or celebrated superstars regardless of pitch deterioration, weather shifts, or unfavourable market pricing.
            </p>
            <p className="mb-4">
              On <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, professional cricket traders view every fixture as an evolving financial market. By mastering pitch variables, statistical venue averages, and in-play exchange hedging ("greening up"), you can systematically tilt the odds in your favor. Below is the master blueprint developed by our senior cricket analysts.
            </p>
          </div>

          {/* The 6 Pillars */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              The 6 Golden Pillars of Professional Cricket Betting
            </h2>

            {[
              {
                title: '1. Master Pitch Soil Composition & Ground Dimensions',
                body: 'A cricket pitch is not a static surface; it dictates the entire geometry of a match. Red soil pitches (such as Wankhede Stadium) offer true bounce, pace, and heavy turn for wrist-spinners, leading to rapid 200+ power-hitting totals. Black soil tracks (such as Chepauk or Ekana Stadium) absorb ball momentum, creating sluggish bounce where stroke-makers struggle and totals rarely cross 160. Always check the pitch report 30 minutes before toss.',
              },
              {
                title: '2. The In-Play "Greening Up" Hedging Formula',
                body: 'The greatest advantage of the Lotus365 Cricket Exchange is the ability to lock in guaranteed profit regardless of which team wins. For example: Back India at 2.10 pre-match with ₹10,000. When India takes two early wickets and their odds drop to 1.35, "Lay" India for ₹15,500. You now possess a positive profit ("green book") on both possible match outcomes before the 15th over is even bowled.',
              },
              {
                title: '3. Specialize in Powerplay & Session Fancy Markets',
                body: 'Outright match winner markets carry higher variance due to unpredictable death-over finishes. Conversely, session runs markets (such as "First 6 Overs Total" or "Runs in 10-15 Overs") are far more predictable because fielding restrictions and bowling rotations follow structured, repeatable tactical plans.',
              },
              {
                title: '4. Factor in the Night Dew Factor in Western & Northern Venues',
                body: 'In Indian subcontinental evening fixtures from March to May, heavy evening dew settles on the outfield during the second innings. A wet leather ball slips in bowlers\' fingers, nullifying spin and yorkers. In dew-affected venues, the team chasing wins over 65% of matches. Adjust your second-innings betting lines accordingly.',
              },
              {
                title: '5. The Strict 2% Unit Bankroll Rule',
                body: 'No single wager should ever exceed 2% to 5% of your total liquid betting bankroll. Even the sharpest statistical edges experience negative variance streaks of 4 to 6 consecutive losses. A disciplined staking unit ensures that drawdown streaks never threaten your financial security.',
              },
              {
                title: '6. Individual Player Matchup Data (Batter vs Bowler)',
                body: 'Modern T20 cricket is decided by micro-matchups. A batter with an average of 45 may have a catastrophic record (average 9.2, strike rate 85) against left-arm orthodox spin inside the powerplay. Analyzing these micro-matchups allows you to profit on "Player Performance" and "Method of Dismissal" markets with high accuracy.',
              },
            ].map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <h3 className="text-lg font-bold text-[#F0C419]">{p.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Venue Matrix Table */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Major Indian Cricket Venues: Statistical Benchmarks (T20)</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Venue</th>
                    <th className="p-3.5">Avg 1st Innings</th>
                    <th className="p-3.5">Chasing Win Rate</th>
                    <th className="p-3.5">Key Strategy Takeaway</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Wankhede Stadium, Mumbai</td>
                    <td className="p-3.5 text-emerald-400 font-bold">188 Runs</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">62%</td>
                    <td className="p-3.5 text-white/80">Short boundaries + true bounce. Back Over on boundaries and sixes.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">M. Chinnaswamy, Bengaluru</td>
                    <td className="p-3.5 text-emerald-400 font-bold">195 Runs</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">59%</td>
                    <td className="p-3.5 text-white/80">High altitude + small ground. 200+ scores common; back power-hitters.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">MA Chidambaram (Chepauk), Chennai</td>
                    <td className="p-3.5 text-amber-300 font-bold">162 Runs</td>
                    <td className="p-3.5 text-white/70">48%</td>
                    <td className="p-3.5 text-white/80">Dry, spinning surface. Back Under on runs and Over on spinner wickets.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Narendra Modi Stadium, Ahmedabad</td>
                    <td className="p-3.5 text-emerald-400 font-bold">178 Runs</td>
                    <td className="p-3.5 text-white/70">52%</td>
                    <td className="p-3.5 text-white/80">Large boundary dimensions. Running between wickets and pacers key.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Cricket Betting Strategy
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is the safest market for a beginner on Lotus365?',
                  a: 'Match Winner on the Cricket Exchange and First 6 Overs Session Total are the most structured markets for beginners because they follow clear statistical patterns.'
                },
                {
                  q: 'How does exchange commission affect my long-term betting profitability?',
                  a: 'Traditional bookies incorporate a 5% to 8% margin on every bet, which slowly erodes your capital. Lotus365 charges 0% to 2% commission on the exchange, saving you thousands of rupees over a full IPL season.'
                },
                {
                  q: 'Can I withdraw my trading winnings immediately after a match concludes?',
                  a: 'Yes! All cricket exchange markets settle within seconds of the final ball, and you can request a 2-minute UPI withdrawal directly via WhatsApp.'
                },
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

      <RelatedPages pages={[
        { href: '/cricket-betting', label: 'Cricket Betting', description: 'Apply your tips on Lotus365' },
        { href: '/cricket-exchange', label: 'Cricket Exchange', description: '0% commission exchange' },
        { href: '/ipl-predictions', label: 'IPL Predictions', description: 'IPL 2026 expert analysis' },
        { href: '/safe-betting-guide', label: 'Safe Betting Guide', description: 'Responsible betting strategy' },
      ]} />
      <PageCTA headline="Put These Strategies into Practice on Lotus365" />
    </Layout>
  </>
);

// ── IPL Predictions Page ──────────────────────────────────────────────────────
export const IplPredictionsPage: React.FC = () => (
  <>
    <SEOHead 
      title="IPL 2026 Predictions & Betting Analysis — Team Form, Odds & Outright Tips" 
      description="Expert IPL 2026 betting predictions on Lotus365. Comprehensive team analysis for all 10 franchises, venue impact, powerplay trends, Orange Cap contenders, and championship odds." 
      canonical="/ipl-predictions" 
      keywords="ipl 2026 predictions, ipl betting predictions, ipl winner 2026, ipl analysis 2026, ipl tips india, ipl exchange odds lotus365" 
    />
    <Layout>
      <PageHero 
        badge="IPL 2026 Tournament Preview" 
        title="IPL 2026 " 
        highlight="Expert Predictions & Odds" 
        subtitle="In-depth analytical preview of the Indian Premier League 2026. Squad evaluations, franchise strengths, venue dynamics, and tactical insights across all 10 teams on Lotus365." 
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              IPL 2026: The Biggest Betting Extravaganza on the Planet
            </h2>
            <p className="mb-4">
              The Indian Premier League remains the absolute pinnacle of franchise cricket, commanding over ₹2,500 Crores in daily digital betting liquidity across India. The 2026 season introduces updated squad compositions following the mega-auctions, refined tactical adaptations to the <strong>Impact Player rule</strong>, and enhanced pitch dynamics across 12 host venues.
            </p>
            <p className="mb-4">
              On <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, our <a href="/ipl-betting" className="text-[#F0C419] font-semibold hover:underline">IPL Betting Hub</a> and Cricket Exchange deliver ball-by-ball micro-markets, session runs, highest opening partnerships, and tournament outright winner lines with 0% commission on select marquee clashes.
            </p>
          </div>

          {/* Franchise Power Rankings Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              IPL 2026 Franchise Power Rankings & Championship Odds
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Franchise</th>
                    <th className="p-3.5">Core Strength</th>
                    <th className="p-3.5">Key Vulnerability</th>
                    <th className="p-3.5">Exchange Outright Odds</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Chennai Super Kings (CSK)</td>
                    <td className="p-3.5 text-white/80">Impenetrable Chepauk home fortress & spin depth</td>
                    <td className="p-3.5 text-white/70">Pace bowler economy in away matches</td>
                    <td className="p-3.5 text-emerald-400 font-bold">5.50</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Mumbai Indians (MI)</td>
                    <td className="p-3.5 text-white/80">Explosive middle-order batting & Bumrah factor</td>
                    <td className="p-3.5 text-white/70">Spin options on slow turning tracks</td>
                    <td className="p-3.5 text-emerald-400 font-bold">5.00</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Kolkata Knight Riders (KKR)</td>
                    <td className="p-3.5 text-white/80">Aggressive powerplay striking & all-round depth</td>
                    <td className="p-3.5 text-white/70">Consistency of top-order against high pace</td>
                    <td className="p-3.5 text-emerald-400 font-bold">6.00</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Royal Challengers Bengaluru (RCB)</td>
                    <td className="p-3.5 text-white/80">World-class batting lineup at Chinnaswamy</td>
                    <td className="p-3.5 text-white/70">Death-overs bowling economy rates</td>
                    <td className="p-3.5 text-emerald-400 font-bold">7.50</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Sunrisers Hyderabad (SRH)</td>
                    <td className="p-3.5 text-white/80">Record-breaking powerplay strike rates (Head/Abhishek)</td>
                    <td className="p-3.5 text-white/70">Middle-order rebuilding if early wickets fall</td>
                    <td className="p-3.5 text-emerald-400 font-bold">6.50</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Rajasthan Royals (RR)</td>
                    <td className="p-3.5 text-white/80">Balanced bowling attack & Samson-Jaiswal axis</td>
                    <td className="p-3.5 text-white/70">Lower-order finishing under high pressure</td>
                    <td className="p-3.5 text-emerald-400 font-bold">8.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Strategic Factors */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Critical IPL 2026 Betting Trends to Exploit
            </h2>
            <div className="p-4 rounded-xl bg-black/20 border border-white/10">
              <h4 className="font-bold text-[#F0C419] text-base mb-1">1. The Impact Player Inflation on Powerplay Totals</h4>
              <p className="text-xs text-white/80">
                With teams essentially batting down to number 8 or 9 without consequence, openers strike with zero hesitation. First 6 overs totals of 65+ runs have become the new baseline across high-scoring venues. Look for high-value "Over" session bets when elite openers bat first.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-white/10">
              <h4 className="font-bold text-[#F0C419] text-base mb-1">2. Chasing Superiority in Dew-Prone Stadiums</h4>
              <p className="text-xs text-white/80">
                In Mumbai, Lucknow, and Delhi, teams winning the toss will almost universally bowl first. The batting conditions in overs 14–20 of the chase are significantly superior. Backing the chasing side when odds lengthen during the first innings offers prime trading value.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About IPL Predictions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I bet on individual player runs during IPL on Lotus365?',
                  a: 'Yes! Lotus365 offers extensive player proposition markets, including Player Runs (Over/Under), Top Team Batsman, Total Match Sixes, and Man of the Match.'
                },
                {
                  q: 'How fast are IPL bets settled during live matches?',
                  a: 'Session bets settle immediately as soon as the final ball of the specified over is bowled. Outright match bets settle within 60 seconds of match completion.'
                },
                {
                  q: 'Can I lay a team that seems overvalued in the IPL exchange?',
                  a: 'Yes! You can act as the bookmaker on our Cricket Exchange by "Laying" any team, winning your bet if that team fails to secure victory.'
                },
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

      <RelatedPages pages={[
        { href: '/ipl-betting', label: 'IPL Betting', description: 'All IPL 2026 markets' },
        { href: '/betting-tips', label: 'Betting Tips', description: 'Expert cricket strategy guide' },
        { href: '/cricket-exchange', label: 'Cricket Exchange', description: '0% commission on IPL' },
        { href: '/welcome-bonus', label: 'IPL Bonus', description: 'Claim your IPL deposit bonus' },
      ]} />
      <PageCTA headline="Bet on IPL 2026 with Expert Insights on Lotus365" />
    </Layout>
  </>
);

// ── Online Casino Guide ───────────────────────────────────────────────────────
export const OnlineCasinoGuidePage: React.FC = () => (
  <>
    <SEOHead 
      title="Online Casino Guide India 2026 — Beginner to Expert Rules & RTP Strategies" 
      description="The definitive online casino guide for India in 2026. Discover game mechanics, house edge math, Teen Patti, Andar Bahar, European Roulette, and instant 2-minute UPI cashouts on Lotus365." 
      canonical="/online-casino-guide" 
      keywords="online casino guide india, how to play casino india, casino guide beginner india, best online casino india 2026, live casino strategy india, house edge casino math" 
    />
    <Layout>
      <PageHero 
        badge="Casino Strategy Handbook 2026" 
        title="Complete " 
        highlight="Online Casino Guide" 
        subtitle="Everything you need to master real-money online casino games in India. Understand game math, house edge percentages, optimal strategies for Teen Patti and Blackjack, and instant cashout mechanics on Lotus365." 
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Mastering Real-Money Casino Gaming: Knowledge Over Luck
            </h2>
            <p className="mb-4">
              Online casino gaming in India has undergone a massive renaissance. Gone are the days of pixelated, computer-generated digital card tables. Today, on <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, you connect directly to ultra-high-definition live dealer studios operated by global giants like Evolution Gaming, Ezugi, and Pragmatic Play Live.
            </p>
            <p className="mb-4">
              However, entering the live casino lobby without understanding the mathematical foundations—specifically <strong>Return to Player (RTP)</strong> and <strong>House Edge</strong>—is the quickest way to deplete your capital. This guide equips you with the statistical knowledge necessary to choose high-value games, deploy disciplined staking, and secure consistent profits.
            </p>
          </div>

          {/* House Edge Comparison Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              House Edge & RTP Benchmark across Popular Casino Games
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Game Category</th>
                    <th className="p-3.5">Optimal Bet Type</th>
                    <th className="p-3.5">Return to Player (RTP)</th>
                    <th className="p-3.5">House Edge</th>
                    <th className="p-3.5">Strategy Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Blackjack</td>
                    <td className="p-3.5">Basic Strategy Main Hand</td>
                    <td className="p-3.5 text-emerald-400 font-extrabold">99.50%</td>
                    <td className="p-3.5 text-emerald-400 font-bold">0.50%</td>
                    <td className="p-3.5 text-[#F0C419]">High (Skill-based)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Baccarat</td>
                    <td className="p-3.5">Banker Bet (1.06% edge)</td>
                    <td className="p-3.5 text-emerald-400 font-bold">98.94%</td>
                    <td className="p-3.5 text-emerald-400">1.06%</td>
                    <td className="p-3.5 text-white/70">Low (Automated rules)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Aviator Crash Game</td>
                    <td className="p-3.5">1.30x – 1.50x Cashout</td>
                    <td className="p-3.5 text-emerald-400 font-bold">98.50%</td>
                    <td className="p-3.5 text-emerald-400">1.50%</td>
                    <td className="p-3.5 text-[#F0C419]">Medium (Timing control)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">European Roulette</td>
                    <td className="p-3.5">Even Money (Red/Black)</td>
                    <td className="p-3.5 text-amber-300 font-bold">97.30%</td>
                    <td className="p-3.5 text-amber-300">2.70%</td>
                    <td className="p-3.5 text-white/70">Medium (Table coverage)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Andar Bahar</td>
                    <td className="p-3.5">First Box Match</td>
                    <td className="p-3.5 text-amber-300 font-bold">97.85%</td>
                    <td className="p-3.5 text-amber-300">2.15%</td>
                    <td className="p-3.5 text-white/70">Low (Binary draw)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Teen Patti</td>
                    <td className="p-3.5">Player A / Player B</td>
                    <td className="p-3.5 text-amber-300 font-bold">96.50%</td>
                    <td className="p-3.5 text-rose-300">3.50%</td>
                    <td className="p-3.5 text-white/70">Low (Card hierarchy)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategic Advice for Indian Games */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Actionable Strategy for Top Casino Disciplines
            </h2>
            <div className="p-4 rounded-xl bg-black/20 border border-white/10">
              <h4 className="font-bold text-white text-base mb-1">Blackjack: The Only Game Where Skill Lowers the Edge to 0.5%</h4>
              <p className="text-xs text-white/80">
                Never play Blackjack on pure instinct. Always use basic strategy charts: double down on 11 against any dealer card except an Ace, split Aces and 8s unconditionally, and stand on hard 12–16 when the dealer displays a bust card (4, 5, or 6).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-white/10">
              <h4 className="font-bold text-white text-base mb-1">Baccarat: Avoid the 14.4% Tie Bet Trap</h4>
              <p className="text-xs text-white/80">
                While the 8:1 payout on Baccarat Tie bets looks enticing, its mathematical house edge is an enormous 14.36%—one of the worst bets in the entire casino. Sticking exclusively to the Banker bet yields a razor-thin 1.06% house edge.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-white/10">
              <h4 className="font-bold text-white text-base mb-1">Roulette: Strictly Choose Single-Zero European Tables</h4>
              <p className="text-xs text-white/80">
                Never play American Roulette with its double-zero (00) pocket, which increases the house edge to 5.26%. European Roulette features only one single zero (0), keeping the house edge down at 2.70%.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Online Casino Games
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Are live casino games on Lotus365 broadcast in real time?',
                  a: 'Yes! All live dealer tables are streamed in crystal-clear 1080p Full HD with optical character recognition (OCR) sensors scanning physical cards instantly.'
                },
                {
                  q: 'What is the minimum stake at live casino tables?',
                  a: 'You can wager starting from just ₹50 on Roulette and Teen Patti tables, allowing you to enjoy authentic live dealer action on modest budgets.'
                },
                {
                  q: 'How fast can I withdraw my casino winnings?',
                  a: 'Lotus365 guarantees 2-minute instant withdrawals via UPI or 10-minute IMPS bank transfers with zero transaction fees.'
                },
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

      <RelatedPages pages={[
        { href: '/live-casino', label: 'Live Casino Lobby', description: '1000+ games on Lotus365' },
        { href: '/teen-patti', label: 'Teen Patti', description: 'India\'s favourite card game' },
        { href: '/aviator-game', label: 'Aviator Game', description: '98.5% RTP crash game' },
        { href: '/safe-betting-guide', label: 'Safe Betting Guide', description: 'Responsible gaming tips' },
      ]} />
      <PageCTA headline="Step into India's Premier Live Casino Lobby" />
    </Layout>
  </>
);

// ── Safe Betting Guide ────────────────────────────────────────────────────────
export const SafeBettingGuidePage: React.FC = () => (
  <>
    <SEOHead 
      title="Safe & Responsible Betting Guide India — Bankroll & Risk Management" 
      description="The definitive safe betting and responsible gambling guide for Indian players on Lotus365. Bankroll control, stop-loss limits, cognitive bias defense, and 24/7 help." 
      canonical="/safe-betting-guide" 
      keywords="safe betting india, responsible gambling india, betting limits india, safe online gambling guide, stop loss betting, bankroll management" 
    />
    <Layout>
      <PageHero 
        badge="Player Protection & Welfare" 
        title="Safe & Responsible " 
        highlight="Betting Guide" 
        subtitle="Online sports betting and gaming should always remain an exciting, controlled form of entertainment. Master our risk-management principles, bankroll defense strategies, and self-discipline frameworks." 
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              The Philosophy of Sustainable & Safe Wagering
            </h2>
            <p className="mb-4">
              At <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, we believe our long-term success is directly connected to the well-being and safety of our player community. Online sports betting and live casino entertainment must never be viewed as an emergency income solution or a method to resolve financial hardship.
            </p>
            <p className="mb-4">
              When approached with disciplined bankroll management and clear stop-loss limits, betting enhances the thrill of sports. However, when players succumb to emotional tilt or chase previous losses, entertainment can transform into a liability. This guide details practical protocols to keep your gaming healthy, enjoyable, and sustainable.
            </p>
          </div>

          {/* 5 Rules of Bankroll Defense */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              The 5 Golden Rules of Bankroll Defense
            </h2>
            {[
              {
                title: '1. Only Wager with Disposable Entertainment Funds',
                body: 'Never place a bet using money earmarked for rent, family groceries, utility bills, school tuition, or savings. Treat your deposit purely as an entertainment expense, similar to purchasing a movie ticket or dining at a fine restaurant.',
              },
              {
                title: '2. Enforce Daily Stop-Loss and Take-Profit Thresholds',
                body: 'Before launching any betting session, decide on two non-negotiable figures: your Stop-Loss (e.g., losing ₹2,000 means closing the app immediately) and your Take-Profit (e.g., winning ₹5,000 triggers an instant UPI cashout). Discipline in stopping preserves both profits and peace of mind.',
              },
              {
                title: '3. Never Chase Losses with Doubled Stakes (The Martingale Trap)',
                body: 'Chasing losses is the single most common cause of bankroll destruction. When on an unlucky sequence, doubling your stake to "recover quickly" only accelerates drawdowns. Accept bad variance as a standard part of sports, step away, and return another day with a fresh perspective.',
              },
              {
                title: '4. Recognize Cognitive Distortions (Gambler\'s Fallacy)',
                body: 'In games with independent random draws (such as Roulette, Crash games, or Color Prediction), past outcomes do not alter future probability. If Red has appeared 6 times consecutively, the probability of Red on the 7th spin remains exactly unchanged. Never bet under the false belief that an outcome is "due."',
              },
              {
                title: '5. Never Bet Under the Influence of Alcohol or Emotional Distress',
                body: 'Fatigue, stress, and alcohol impair risk perception and executive self-control. Place wagers only when your mind is calm, alert, and analytical.',
              },
            ].map((rule, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <h4 className="font-bold text-[#F0C419] text-base">{rule.title}</h4>
                <p className="text-xs text-white/80">{rule.body}</p>
              </div>
            ))}
          </div>

          {/* Self-Assessment Checklist */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Self-Assessment: Warning Signs to Watch Out For
            </h2>
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-400/30 space-y-3">
              <p className="text-xs text-white/80 font-medium">
                If you answer "Yes" to two or more of the following questions, consider taking an immediate cooling-off break:
              </p>
              <ul className="space-y-1.5 text-xs text-white/70 list-disc list-inside">
                <li>Have you ever bet more money than you originally planned to wager?</li>
                <li>Do you find yourself thinking about betting when spending time with family or at work?</li>
                <li>Have you ever borrowed money or sold personal possessions to fund your account?</li>
                <li>Do you feel an urgent need to win back money immediately after losing a bet?</li>
                <li>Have you ever concealed your betting activity or winnings from loved ones?</li>
              </ul>
              <p className="text-xs text-amber-300 pt-2">
                Lotus365 offers instant account cooling-off periods (24 hours to 30 days) and voluntary self-exclusion. Simply message our WhatsApp team to activate deposit limits.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Safe Betting
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I set a daily deposit limit on Lotus365?',
                  a: 'Message our 24/7 WhatsApp support desk stating your desired daily or weekly maximum deposit ceiling. Our agents will enforce this on your account within 60 seconds.'
                },
                {
                  q: 'Can I temporarily lock my account if I feel I need a break?',
                  a: 'Yes! We offer a "Cooling-Off" feature where your login can be temporarily frozen for 24 hours, 7 days, or up to 6 months upon your request.'
                },
                {
                  q: 'Is my personal data and balance safe on Lotus365?',
                  a: 'Yes. We utilize enterprise 256-bit TLS encryption and do not share user contact details or financial data with any third-party advertisers.'
                },
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

      <RelatedPages pages={[
        { href: '/responsible-gaming', label: 'Responsible Gaming', description: 'Our official safe play policy' },
        { href: '/betting-tips', label: 'Betting Tips', description: 'Smarter cricket betting strategy' },
        { href: '/contact', label: 'Set Deposit Limits', description: 'Contact us to set limits' },
        { href: '/faq', label: 'FAQ', description: 'Common questions answered' },
      ]} />
      <PageCTA headline="Play Responsibly on India's Safest Platform" ctaLabel="Contact Support on WhatsApp" />
    </Layout>
  </>
);

// ── Mobile Web App Guide ──────────────────────────────────────────────────────
export const MobileWebAppGuidePage: React.FC = () => (
  <>
    <SEOHead 
      title="Lotus365 Mobile Web App Guide — Play on Android & iOS with Zero APK" 
      description="How to install and play Lotus365 on any Android or iOS smartphone. 100% web-based Progressive Web App (PWA) with zero APK downloads. Step-by-step home screen shortcut setup." 
      canonical="/mobile-web-app-guide" 
      keywords="lotus365 mobile guide, lotus365 on mobile, lotus365 no apk, play lotus365 on phone, lotus365 browser guide, lotus365 pwa, lotus365 ios safari, lotus365 android chrome" 
    />
    <Layout>
      <PageHero 
        badge="Mobile Optimization Guide" 
        title="Lotus365 on " 
        highlight="Any Mobile Device" 
        subtitle="Enjoy seamless, high-speed betting on Android and iPhone with zero APK downloads. Discover how our lightweight Progressive Web App (PWA) delivers 60fps performance directly in your mobile browser." 
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              The PWA Revolution: Why Lotus365 Requires Zero APK Downloads
            </h2>
            <p className="mb-4">
              For years, Android sports bettors in India were forced to download shady third-party <code>.apk</code> files from unverified websites, bypassing Google Play security alerts and granting dangerous device permissions. These legacy APKs often consumed hundreds of megabytes of memory, drained battery life, and exposed user phones to malware risks.
            </p>
            <p className="mb-4">
              At <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, we adopted modern <strong>Progressive Web App (PWA)</strong> architecture. When you visit <strong className="text-white">lotus365officialid.com</strong> on mobile Google Chrome or Apple Safari, the site operates identically to a native app: instantaneous page loads, zero installation friction, 60fps smooth animations, and automatic updates without ever clogging your device storage.
            </p>
          </div>

          {/* Comparison Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Comparison: Lotus365 Web App vs. Traditional Betting APKs
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Feature</th>
                    <th className="p-3.5">Lotus365 Web App (PWA)</th>
                    <th className="p-3.5">Traditional Third-Party APK</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Storage Footprint</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Under 1 MB (Cached locally)</td>
                    <td className="p-3.5 text-rose-300">150 MB to 400 MB</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Device Security</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">100% Sandboxed in Browser</td>
                    <td className="p-3.5 text-rose-300">Requires "Install Unknown Apps" override</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">iOS (iPhone & iPad) Compatibility</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Native Support via Safari</td>
                    <td className="p-3.5 text-rose-300">Not supported on iOS without jailbreak</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Software Updates</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Seamless & Automatic in Cloud</td>
                    <td className="p-3.5 text-rose-300">Requires frequent manual re-downloading</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Battery & RAM Consumption</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Ultra-low background usage</td>
                    <td className="p-3.5 text-rose-300">Heavy background processes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Setup Walkthrough Cards */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Step-by-Step: How to Add Lotus365 to Your Phone’s Home Screen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#F0C419] font-bold text-base">
                  <Smartphone className="w-5 h-5" /> Android Setup (Google Chrome)
                </div>
                <ol className="list-decimal list-inside space-y-2 text-xs text-white/80">
                  <li>Open <strong>Google Chrome</strong> on your Android device.</li>
                  <li>Navigate to <strong>https://lotus365officialid.com</strong>.</li>
                  <li>Tap the three vertical dots (<strong>⋮</strong>) in the top-right corner.</li>
                  <li>Select <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong>.</li>
                  <li>Tap "Add" — the golden Lotus365 logo will appear on your app screen for instant 1-tap access!</li>
                </ol>
              </div>

              <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#F0C419] font-bold text-base">
                  <Smartphone className="w-5 h-5" /> iOS Setup (Apple Safari)
                </div>
                <ol className="list-decimal list-inside space-y-2 text-xs text-white/80">
                  <li>Open <strong>Safari</strong> on your iPhone or iPad.</li>
                  <li>Navigate to <strong>https://lotus365officialid.com</strong>.</li>
                  <li>Tap the <strong>Share</strong> icon (the square with an arrow pointing upward) at the bottom.</li>
                  <li>Scroll down and tap <strong>"Add to Home Screen"</strong>.</li>
                  <li>Tap "Add" in the top right — Lotus365 is now installed on your iOS home screen!</li>
                </ol>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Mobile Play
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Does the mobile web app have all the same games as the desktop version?',
                  a: 'Yes! You have 100% full access to all cricket exchange markets, live streaming, 1000+ live casino tables, Spribe Aviator, and WhatsApp banking.'
                },
                {
                  q: 'Can I watch live cricket streaming on my mobile browser?',
                  a: 'Yes. When logged into your account, high-definition live match video streams are embedded seamlessly above the live betting slip.'
                },
                {
                  q: 'What should I do if the page loads slowly on my mobile phone?',
                  a: 'Simply clear your browser cache in Chrome or Safari settings, or switch from a crowded 4G network to stable Wi-Fi.'
                },
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

      <RelatedPages pages={[
        { href: '/register', label: 'Register Free', description: 'Get your mobile account in 2 mins' },
        { href: '/how-to-deposit', label: 'How to Deposit', description: 'UPI deposit from your phone' },
        { href: '/faq', label: 'FAQ', description: 'Mobile and technical FAQs' },
        { href: '/cricket-betting', label: 'Cricket Betting', description: 'Bet on cricket from your phone' },
      ]} />
      <PageCTA headline="Play Lotus365 on Any Smartphone with Zero APK" ctaLabel="Register via WhatsApp Now" />
    </Layout>
  </>
);

// ── FAQ Page ──────────────────────────────────────────────────────────────────
const fullFaqs = [
  { q: 'What is Lotus365 and how does it differ from a standard sportsbook?', a: 'Lotus365 is India’s premier online sports betting exchange and live casino platform. Unlike standard bookmakers that charge a heavy 5% to 8% margin, Lotus365 operates as a peer-to-peer exchange where players can Back and Lay match outcomes with up to 0% commission on marquee matches.' },
  { q: 'How do I register and create an account on Lotus365?', a: 'Registration is conducted exclusively through our verified 24/7 WhatsApp concierge desk at wa.link/880088. Simply message "New ID" to receive your unique username and temporary login credentials in under 60 seconds with zero registration fees.' },
  { q: 'Do I need to download an APK file to play on Android or iPhone?', a: 'No! Lotus365 is engineered as an ultra-fast Progressive Web App (PWA). You play directly on lotus365officialid.com through Chrome or Safari without downloading risky external APK files.' },
  { q: 'How fast are withdrawal requests processed and sent to my bank?', a: 'Withdrawals on Lotus365 are guaranteed to process within 2 minutes via UPI (PhonePe, Google Pay, Paytm) and within 10 minutes via direct IMPS bank transfer. There are zero withdrawal fees or deductions.' },
  { q: 'What is the minimum deposit and minimum withdrawal amount?', a: 'The minimum deposit is just ₹100 via UPI. The minimum withdrawal is ₹200. There are no maximum limits for verified VIP players.' },
  { q: 'Is my personal and financial information safe on Lotus365?', a: 'Yes. All website sessions are protected by military-grade 256-bit TLS encryption, and transactions are authenticated locally through Indian banking UPI MPINs. No sensitive card details or documents are ever stored on public servers.' },
  { q: 'What cricket competitions can I bet on at Lotus365?', a: 'We provide full pre-match and in-play exchange coverage for the Indian Premier League (IPL), ICC T20 World Cup, ICC Cricket World Cup, Test matches, Big Bash League (BBL), Pakistan Super League (PSL), and major domestic tournaments.' },
  { q: 'Can I play real live dealer casino games like Teen Patti and Andar Bahar?', a: 'Yes! Lotus365 hosts over 1,000 live dealer casino tables powered by Evolution Gaming, Ezugi, and Pragmatic Play, including authentic Hindi-speaking Teen Patti, Andar Bahar, Lightning Roulette, and Speed Baccarat.' },
  { q: 'What is the Spribe Aviator crash game and how does it work?', a: 'Aviator is a provably fair multiplier game where an aircraft ascends with an escalating multiplier from 1.00x upward. Players must cash out before the plane flies away to collect their multiplied stake. Lotus365 features certified 98.5% RTP on Aviator.' },
  { q: 'How does the Lotus365 Welcome Bonus work?', a: 'New members making their first UPI deposit are eligible for a 100% matching bonus up to ₹5,000. The bonus carries player-friendly 5x wagering requirements across sports exchange markets.' },
  { q: 'What should I do if I forget my login password?', a: 'Simply contact our 24/7 WhatsApp support desk from your registered mobile number. Our human support agents will verify your account and provide a password reset link within 60 seconds.' },
  { q: 'Does Lotus365 charge any tax or commission on winnings?', a: 'No. Lotus365 charges exactly 0% in payout taxes or withdrawal processing fees. 100% of your requested cashout amount lands in your Indian bank account.' },
];

export const FaqPage: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: fullFaqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title="Lotus365 FAQ — Complete Frequently Asked Questions & Answers"
        description="Comprehensive Lotus365 FAQ: Step-by-step guidance on WhatsApp ID registration, 2-minute UPI cashouts, cricket exchange rules, casino games, and 24/7 support."
        canonical="/faq"
        keywords="lotus365 faq, lotus365 questions, lotus365 help, lotus365 common questions, lotus365 withdrawal faq, lotus365 deposit guide"
        schema={schema}
      />
      <Layout>
        <PageHero 
          badge="Knowledge Base & FAQ" 
          title="Lotus365 " 
          highlight="Frequently Asked Questions" 
          subtitle="Everything you need to know about India's #1 betting exchange. Clear, definitive answers regarding account creation, instant UPI cashouts, cricket exchange rules, and VIP privileges." 
        />
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
          <div className="max-w-4xl mx-auto space-y-4">
            {fullFaqs.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-black/20 border border-white/10 overflow-hidden transition-colors hover:border-[#F0C419]/30">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">{faq.q}</span>
                  {open === i ? (
                    <ChevronUp className="w-5 h-5 text-[#F0C419] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60 shrink-0" />
                  )}
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/10 pt-4 bg-black/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <RelatedPages pages={[
          { href: '/register', label: 'Register Free', description: 'Get your WhatsApp ID' },
          { href: '/contact', label: 'Contact Support', description: '24/7 WhatsApp help desk' },
          { href: '/how-it-works', label: 'How It Works', description: 'Full onboarding guide' },
          { href: '/payment-methods', label: 'Payment Methods', description: 'All deposit & withdrawal options' },
        ]} />
        <PageCTA headline="Have a Question Not Answered Here?" ctaLabel="Chat with Support on WhatsApp" />
      </Layout>
    </>
  );
};

// ── How It Works Page ─────────────────────────────────────────────────────────
export const HowItWorksPage: React.FC = () => {
  const handleWA = () => window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');

  return (
    <>
      <SEOHead 
        title="How Lotus365 Works — 4-Minute Onboarding from Registration to First Payout" 
        description="Learn how Lotus365 works in 4 simple steps: WhatsApp ID creation, instant UPI funding, betting on cricket exchange or live casino, and guaranteed 2-minute cashouts." 
        canonical="/how-it-works" 
        keywords="how lotus365 works, lotus365 process, how to use lotus365, lotus365 step by step, lotus365 whatsapp id process, lotus365 onboarding" 
      />
      <Layout>
        <PageHero 
          badge="Complete Onboarding Blueprint" 
          title="How " 
          highlight="Lotus365 Works" 
          subtitle="From your first WhatsApp message to placing your first cricket bet in under 4 minutes. Experience India's smoothest, most friction-free sports exchange and live casino onboarding." 
        />
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Steps Timeline */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-8 text-center">
                Your 4-Minute Journey: Step-by-Step
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Message Our Official WhatsApp Concierge Desk',
                    desc: 'Click any "Register via WhatsApp" button on lotus365officialid.com or message directly at wa.link/880088. Simply send "Hello" or "New ID". Our dedicated 24/7 support agent responds within 30 seconds.',
                    time: '⏱ Under 30 Seconds',
                  },
                  {
                    step: '02',
                    title: 'Receive Your Private Betting ID Credentials',
                    desc: 'Your concierge generates a private, secure username and temporary password. No lengthy KYC forms, no Aadhaar uploads, and zero registration fees.',
                    time: '⏱ Under 30 Seconds',
                  },
                  {
                    step: '03',
                    title: 'Log In & Deposit via PhonePe, GPay, or Paytm',
                    desc: 'Open lotus365officialid.com in your mobile browser, enter your credentials, and fund your balance with as little as ₹100 via UPI. Funds reflect in your balance in 30 seconds.',
                    time: '⏱ Under 60 Seconds',
                  },
                  {
                    step: '04',
                    title: 'Wager on 50+ Markets & Cash Out in 120 Seconds',
                    desc: 'Explore cricket exchange odds, live Teen Patti, Roulette, or Spribe Aviator. When you win, message your UPI ID to WhatsApp and receive your payout in under 2 minutes.',
                    time: '⏱ Instant Execution',
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 sm:gap-6 items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F0C419] flex items-center justify-center text-[#14614C] font-black text-base sm:text-lg shrink-0 shadow-gold-glow">
                      {s.step}
                    </div>
                    <div className="flex-1 p-5 sm:p-6 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-white">{s.title}</h3>
                        <span className="text-xs font-semibold text-[#F0C419] bg-[#F0C419]/10 px-3 py-1 rounded-full border border-[#F0C419]/20">{s.time}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="text-center p-8 rounded-3xl bg-black/30 border border-[#F0C419]/40 space-y-4">
              <h3 className="text-xl font-bold text-white">Ready to Experience Lotus365?</h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
                Join over 1,500,000 satisfied Indian players enjoying 0% cricket exchange commission and 2-minute cashouts.
              </p>
              <button onClick={handleWA} className="cta-button py-4 px-10 text-base font-black shadow-gold-glow inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Get Your Free ID on WhatsApp Now</span>
              </button>
            </div>

            {/* Why WhatsApp Onboarding is Revolutionary */}
            <div className="space-y-4 text-white/85 text-xs sm:text-sm leading-relaxed">
              <h2 className="text-2xl font-extrabold text-[#F0C419]">
                Why the WhatsApp-First Model is Better for Indian Players
              </h2>
              <p>
                International gambling sites were built for Western banking systems. In India, foreign card payments are frequently blocked, and uploading identity scans to overseas servers creates major privacy liabilities. By utilizing WhatsApp as our direct communication and account authentication channel, Lotus365 ensures:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <div className="text-[#F0C419] font-bold text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> 100% Data Privacy
                  </div>
                  <p className="text-xs text-white/70">No personal identity documents stored in vulnerable databases.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <div className="text-[#F0C419] font-bold text-sm mb-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> 2-Minute Cashouts
                  </div>
                  <p className="text-xs text-white/70">Direct human assistance coordinating instant corporate UPI and IMPS payouts.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <div className="text-[#F0C419] font-bold text-sm mb-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> Zero Hidden Charges
                  </div>
                  <p className="text-xs text-white/70">No currency exchange fees, gateway cuts, or surprise rollover blocks.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <RelatedPages pages={[
          { href: '/register', label: 'Register Free', description: 'Start the WhatsApp registration' },
          { href: '/how-to-deposit', label: 'How to Deposit', description: 'UPI deposit step-by-step' },
          { href: '/mobile-web-app-guide', label: 'Mobile Guide', description: 'Use Lotus365 on any phone' },
          { href: '/faq', label: 'FAQ', description: 'All common questions answered' },
        ]} />
        <PageCTA headline="Start Your Lotus365 Journey in Under 4 Minutes" />
      </Layout>
    </>
  );
};
