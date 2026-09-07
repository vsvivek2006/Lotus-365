import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { 
  FileText, 
  HelpCircle 
} from 'lucide-react';

const related = [
  { href: '/privacy-policy', label: 'Privacy Policy', description: 'How we protect your personal data' },
  { href: '/responsible-gaming', label: 'Responsible Gaming', description: 'Our safe gaming commitment' },
  { href: '/contact', label: 'Contact Support', description: '24/7 WhatsApp support desk' },
  { href: '/faq', label: 'FAQ', description: 'Frequently asked questions' },
];

export const TermsPage: React.FC = () => (
  <>
    <SEOHead
      title="Terms & Conditions — Lotus365 Official Platform Operating Rules"
      description="Official Terms and Conditions for Lotus365 India. Comprehensive operating rules covering account eligibility, 18+ age mandate, 2-minute cashout protocols, exchange trading, and fair play standards."
      canonical="/terms"
      keywords="lotus365 terms conditions, lotus365 rules, lotus365 terms of service, betting rules india, exchange betting terms, lotus365 legal agreement"
    />
    <Layout>
      <PageHero 
        badge="Legal & Operational Charter" 
        title="Lotus365 " 
        highlight="Terms & Conditions" 
        subtitle="Please review these operational terms and conditions carefully before accessing lotus365officialid.com. By generating an account ID via WhatsApp or wagering on our platform, you agree to be bound by these provisions." 
        ctaLabel="Contact Legal Desk on WhatsApp" 
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Header Notice */}
          <div className="p-6 rounded-2xl bg-black/25 border border-white/10 flex items-center gap-4">
            <FileText className="w-10 h-10 text-[#F0C419] shrink-0" />
            <div>
              <h2 className="text-base font-bold text-white mb-1">Binding Legal Agreement</h2>
              <p className="text-xs text-white/70">
                These terms govern all user interactions, sports exchange wagers, casino gaming sessions, and financial settlements executed on <strong className="text-white">lotus365officialid.com</strong>. Last revised: September 2026.
              </p>
            </div>
          </div>

          {/* Section Breakdown */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">1. Eligibility, Jurisdiction & Age Verification (18+)</h2>
              <p className="mb-2">
                Access to Lotus365 is strictly limited to individuals who are at least 18 years of age or the legal age of majority in their applicable jurisdiction. By opening an account, you affirm under penalty of forfeiture that you meet all age qualifications.
              </p>
              <p>
                Lotus365 operates in compliance with international offshore digital gaming standards. Players are individually responsible for verifying that accessing online sports exchanges and skill-based digital gaming conforms to their local municipal and provincial guidelines.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">2. Single-Account Policy & WhatsApp Identity Binding</h2>
              <p className="mb-2">
                Each participant is entitled to strictly <strong>one (1) unique account</strong> tied to their verified personal WhatsApp mobile number and Indian banking details.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-white/80">
                <li>Creating multiple duplicate accounts to exploit welcome promotions, circumvent deposit limits, or conduct syndicate trading is strictly forbidden.</li>
                <li>If duplicate accounts are identified, Lotus365 reserves the right to void promotional balances, combine active positions, and close redundant registrations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">3. Financial Deposits, UTR Validation & 2-Minute Cashouts</h2>
              <p className="mb-2">
                All financial top-ups must be executed through approved payment channels (UPI via PhonePe, Google Pay, Paytm, BHIM, or direct IMPS bank transfer).
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-white/80">
                <li><strong>UTR Requirement:</strong> Deposits are credited upon receipt of the authentic 12-digit Unique Transaction Reference (UTR) issued by NPCI banking partners.</li>
                <li><strong>1x Anti-Money Laundering Turnover:</strong> To prevent financial cycling and comply with international anti-money laundering (AML) laws, all deposited funds must be wagered at least once (1x turnover) before cashout authorization.</li>
                <li><strong>2-Minute Cashout Guarantee:</strong> Withdrawal requests submitted through official WhatsApp support between 9:00 AM and 11:00 PM IST will be executed within 120 seconds, subject to bank gateway availability.</li>
                <li><strong>Zero Fee Commitment:</strong> Lotus365 absorbs all transaction fees; no deduction is ever levied on player deposits or cashouts.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">4. Cricket Exchange Wagering & Market Settlement Rules</h2>
              <p className="mb-2">
                Bets placed on the <a href="/cricket-exchange" className="text-[#F0C419] underline">Cricket Exchange</a> represent peer-to-peer contracts between participating members.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-white/80">
                <li><strong>Matched Bets:</strong> A bet is only binding once fully or partially "Matched" by an opposing player. Unmatched bets can be cancelled at any time prior to match commencement.</li>
                <li><strong>Rain Delays & DLS:</strong> In shortened limited-overs fixtures, official Duckworth-Lewis-Stern (DLS) match results stand. If a match is abandoned without official result, match-winner markets are voided and stakes refunded in full.</li>
                <li><strong>Session Fancy Markets:</strong> Session runs markets (e.g., 6 Over Total) are settled strictly based on official broadcast scorecard statistics. Subsequent off-field penalties or administrative score adjustments after session close do not alter settled bets.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">5. Live Casino Tables & Provably Fair Multipliers</h2>
              <p className="mb-2">
                Live casino tables (including Teen Patti, Andar Bahar, Roulette, and Blackjack) are powered by certified B2B game providers such as Evolution Gaming and Ezugi.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-white/80">
                <li>Optical character recognition (OCR) readings on live dealer cards are definitive. In rare instances of hardware scanner discrepancies, the physical card dealt by the human dealer governs settlement.</li>
                <li>Crash games such as Spribe Aviator operate on cryptographic SHA-512 Provably Fair algorithms. Server and client seeds are mathematically immutable once a flight initiates.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">6. Promotional Bonuses, Rollover & Fair Play Integrity</h2>
              <p className="mb-2">
                All promotional offers, including the 100% Welcome Bonus, First Deposit Booster, and Weekly Cashback, carry transparent wagering criteria:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-white/80">
                <li>Bonus balances cannot be cashed out until the communicated turnover (e.g., 5x on sports markets) is fully met within 30 days.</li>
                <li>Opposite-market arbitrage betting (e.g., simultaneously backing and laying the identical outcome to synthetically churn turnover without financial risk) will result in bonus revocation.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">7. Prohibited Practices & Account Termination</h2>
              <p className="mb-2">
                Lotus365 strictly prohibits:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-white/80">
                <li>Utilization of automated API scrapers, high-frequency execution bots, or latency arbitrage software.</li>
                <li>Collusive syndicate play between multiple accounts to distort exchange liquidity.</li>
                <li>Sharing account login credentials with third parties or unverified syndicates.</li>
              </ul>
              <p className="pt-2 text-xs text-rose-300">
                Any violation of these prohibited standards will lead to immediate account termination and permanent blacklisting.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">8. Limitation of Liability & Arbitration</h2>
              <p>
                Lotus365 shall not be held liable for losses arising from localized telecommunication dropouts, user hardware malfunctions, or unexpected third-party banking downtime. In the event of any contractual dispute, parties agree to pursue good-faith amicable resolution via our senior WhatsApp executive desk prior to formal arbitration.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">9. Intellectual Property, Trademarks & Domain Branding</h2>
              <p>
                All visual design elements, proprietary odds calculation routines, software logos, typography, and promotional layouts hosted on <strong className="text-white">lotus365officialid.com</strong> constitute exclusive intellectual property. Unauthorized cloning, automated scraping, or deployment of lookalike mirror domains targeting Indian users will be met with immediate legal cease-and-desist actions and domain takedown procedures.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">10. Terms Governing Anti-Fraud & Syndicate Collision Detection</h2>
              <p className="mb-2">
                Lotus365 deploys continuous algorithmic telemetry to detect abnormal wagering collusion, latency arbitrage exploitation, and multi-accounting schemes designed to bypass platform exposure limits. Any betting pattern determined by our risk desk to originate from syndicate operation, proxy execution, or automated bots constitutes a material breach of this agreement.
              </p>
              <p className="text-xs text-white/80">
                In such occurrences, Lotus365 reserves the unilateral right to freeze pending settlement, void illegitimate wagers, and return principal deposits strictly after full audit clearance. Users agree to maintain honest gaming ethics at all times across all sports markets and live casino tables.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">11. Policy Amendments & Continuous Compliance</h2>
              <p>
                Lotus365 reserves the right to update these terms to align with evolving digital entertainment regulations and international banking standards. Continued usage of our services following policy updates represents full legal concurrence with modified provisions.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Platform Terms
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I withdraw my deposit immediately without placing any bets?',
                  a: 'Under standard international anti-money laundering regulations, all deposited funds must be wagered at least once (1x turnover) before withdrawal to prevent illicit banking churn.'
                },
                {
                  q: 'What happens if a cricket match is interrupted by rain?',
                  a: 'If a match concludes with an official DLS result, bets stand. If a match is abandoned with no official winner declared, all match-winner bets are voided and 100% of stakes are refunded.'
                },
                {
                  q: 'Can I change my registered withdrawal bank account?',
                  a: 'Yes. You can update your registered bank details or UPI ID at any time by messaging our 24/7 WhatsApp verification desk from your primary phone number.'
                },
                {
                  q: 'What should I do if I suspect unauthorized access to my ID?',
                  a: 'Message our WhatsApp security desk immediately to freeze active sessions, update your password, and protect your wallet balance.'
                },
                {
                  q: 'What is the policy regarding dead heat settlements in horse racing or golf?',
                  a: 'In the event of a dead heat where two competitors tie for first place, the stake is divided proportionately across the winning selections in accordance with international exchange rules.'
                },
                {
                  q: 'How does Lotus365 prevent fraudulent syndicate betting?',
                  a: 'Our algorithmic risk monitoring tracks IP clusters, transaction timing, and correlated market stakes to ensure that all exchange liquidity represents independent player trading.'
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
      <RelatedPages pages={related} />
      <PageCTA headline="Questions Regarding Our Terms of Service?" ctaLabel="Ask Legal Desk on WhatsApp" />
    </Layout>
  </>
);
