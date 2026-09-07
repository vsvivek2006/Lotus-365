import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { 
  ShieldCheck, 
  Lock, 
  HelpCircle, 
  EyeOff 
} from 'lucide-react';

const related = [
  { href: '/terms', label: 'Terms & Conditions', description: 'Our platform rules and policies' },
  { href: '/contact', label: 'Contact Support', description: 'Reach our 24/7 WhatsApp team' },
  { href: '/responsible-gaming', label: 'Responsible Gaming', description: 'Our safe gaming commitment' },
  { href: '/faq', label: 'FAQ', description: 'Frequently asked questions' },
];

export const PrivacyPolicyPage: React.FC = () => (
  <>
    <SEOHead
      title="Privacy Policy — How Lotus365 Protects User Data & Financial Security"
      description="Learn how Lotus365 safeguards user privacy with 256-bit encryption. Strict zero-document data policy, secure WhatsApp communication, and zero third-party data sharing."
      canonical="/privacy-policy"
      keywords="lotus365 privacy policy, lotus365 data protection, lotus365 user data security, betting privacy india, dpdp act compliance, encrypted betting platform"
    />
    <Layout>
      <PageHero 
        badge="Data Protection & Privacy" 
        title="Your Privacy Is " 
        highlight="100% Protected" 
        subtitle="At Lotus365, your personal confidentiality and financial privacy are non-negotiable. Learn how our zero-document data architecture, 256-bit TLS encryption, and secure WhatsApp rails protect your gaming activity." 
        ctaLabel="Contact Privacy Officer" 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Privacy Guarantee Header */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black/25 border border-[#F0C419]/30 flex flex-col sm:flex-row items-center gap-6">
            <ShieldCheck className="w-14 h-14 text-[#F0C419] shrink-0" />
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-xl font-bold text-white">The Lotus365 Zero-Data Leak Promise</h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                We never sell, rent, monetize, or disclose player information to third-party telemarketers or advertising networks. Your gaming history and financial transactions remain strictly confidential between you and our verified operations desk.
              </p>
            </div>
          </div>

          {/* Privacy Articles */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">1. Information We Collect</h2>
              <p className="mb-2">
                To deliver swift 30-second deposits and 2-minute cashouts, Lotus365 collects the minimum necessary technical data:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-white/80">
                <li><strong>Communication Identifier:</strong> Your registered WhatsApp mobile number used to generate credentials and receive customer care.</li>
                <li><strong>Transaction Particulars:</strong> Bank or UPI transaction reference numbers (12-digit UTR) and beneficiary UPI VPAs necessary to disburse payout funds.</li>
                <li><strong>Technical Session Metadata:</strong> Device operating system, browser type (Chrome, Safari), screen resolution, and anonymized IP connection telemetry to ensure session security and prevent account takeover.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">2. Information We Explicitly DO NOT Collect</h2>
              <p className="mb-2">
                Unlike traditional offshore gambling sites that build invasive profiles, Lotus365 operates on a privacy-first model:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-3 items-center">
                  <EyeOff className="w-5 h-5 text-rose-400 shrink-0" />
                  <span className="text-xs text-white/80">No Government Identity Scans (No Aadhaar Card uploads)</span>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-3 items-center">
                  <EyeOff className="w-5 h-5 text-rose-400 shrink-0" />
                  <span className="text-xs text-white/80">No PAN Card Scans or Tax Document Filings</span>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-3 items-center">
                  <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/80">No Credit Card 16-Digit Numbers or CVV Codes</span>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-3 items-center">
                  <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/80">No Net Banking Passwords or Personal Bank MPINs</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">3. The WhatsApp End-to-End Cryptographic Security Layer</h2>
              <p className="mb-2">
                All communications between you and our support agents are transmitted over WhatsApp’s Signal encryption protocol. Neither telecommunication carriers, internet service providers, nor malicious network snoopers can intercept the messages or credentials exchanged between your smartphone and our desk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">4. How We Use Collected Information</h2>
              <p className="mb-2">
                Your data is processed strictly for legitimate operational purposes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-white/80">
                <li>Issuing unique username credentials and facilitating authorized password recovery.</li>
                <li>Reconciling incoming UPI deposit UTRs to fund your real-time wallet balance.</li>
                <li>Executing outbound corporate IMPS and UPI disbursements within our 2-minute SLA.</li>
                <li>Detecting unauthorized multi-accounting, fraudulent bot traffic, or syndicate betting syndicates.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">5. Cookie Policy & Local Browser Storage</h2>
              <p className="mb-2">
                On <strong className="text-white">lotus365officialid.com</strong>, we utilize lightweight, functional cookies exclusively to maintain your authenticated login session and remember your layout preferences. We do not deploy third-party advertising tracking cookies or ad retargeting pixels that monitor your browsing behavior across other websites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">6. User Rights & Data Deletion Requests</h2>
              <p className="mb-2">
                In alignment with contemporary international data privacy standards and Indian Digital Personal Data Protection (DPDP) principles, you maintain full control over your digital footprint:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-white/80">
                <li><strong>Right of Access:</strong> You may request a complete summary of your active balance, betting turnover, and financial ledger at any time.</li>
                <li><strong>Right of Erasure:</strong> Upon requesting account termination or permanent self-exclusion, your personal phone number identifier can be permanently purged from active marketing records.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">7. Cloud Data Center Security & Zero Hardware Exposure</h2>
              <p className="mb-2">
                Lotus365’s backend application architecture is hosted across ISO-27001 and SOC-2 certified cloud server clusters featuring multi-zone failover. All static data, transactional logs, and ledger reconciliations are encrypted at rest using AES-256 bit keys with automated daily cryptographic rotations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">8. Law Enforcement & Regulatory Compliance Protocol</h2>
              <p className="mb-2">
                We cooperate strictly with legitimate international law enforcement directives accompanied by valid court warrants concerning severe financial crimes, money laundering, or terrorist financing. We do not honor arbitrary, informal data harvesting demands from commercial entities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">9. International Data Transfer Mechanisms & Jurisdictional Safeguards</h2>
              <p className="mb-2">
                As a globally distributed peer-to-peer exchange operator, Lotus365 utilizes encrypted transatlantic routing nodes. All international packet routing occurs strictly across secure tunneling protocols (IPsec and WireGuard tunnels) with Perfect Forward Secrecy (PFS). No data routing crosses jurisdictions known for aggressive bulk surveillance without judicial oversight.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">10. Anti-Phishing & Counter-Impersonation Protective Framework</h2>
              <p className="mb-2">
                To protect players against malicious cyber syndicates attempting brand imitation, Lotus365 maintains active trademark and digital asset monitoring. We continually scan domain registries to takedown fraudulent copycat websites attempting to impersonate lotus365officialid.com. Our staff will never reach out via unsolicited SMS, Telegram private bots, or unauthorized email lists.
              </p>
            </div>

            {/* Cryptographic Security Audit Matrix */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-white">Cryptographic Security & System Audit Matrix</h3>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Security Domain</th>
                      <th className="p-3">Standard Implemented</th>
                      <th className="p-3">Player Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-black/20 text-xs">
                    <tr>
                      <td className="p-3 font-bold text-white">Data In Transit</td>
                      <td className="p-3 text-emerald-400 font-mono">TLS 1.3 / AES-256-GCM</td>
                      <td className="p-3 text-white/70">Prevents public Wi-Fi packet interception and ISP connection snooping.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Data At Rest</td>
                      <td className="p-3 text-emerald-400 font-mono">LUKS Volume Encryption (FIPS 140-2)</td>
                      <td className="p-3 text-white/70">Ensures physical server storage cannot be read if detached or decommissioned.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">DDoS Mitigation</td>
                      <td className="p-3 text-emerald-400 font-mono">Cloudflare Enterprise Anycast Engine</td>
                      <td className="p-3 text-white/70">Maintains 99.99% uptime during peak IPL tournament finals without lag.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Credential Auth</td>
                      <td className="p-3 text-emerald-400 font-mono">Argon2id Hash Derivation</td>
                      <td className="p-3 text-white/70">Renders brute-force password cracking mathematically impossible.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Multi-Device Session Security */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-white">Multi-Device Session Security & Active Logins</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Lotus365 allows you to access your account across desktop browsers, mobile phones, and tablets. However, to safeguard your wallet balance against unauthorized access, our security infrastructure enforces automated single-session concurrent locks for live sports betting. If a duplicate login attempt is detected from an unrecognized IP location or suspicious browser fingerprint, our security sentinel triggers an instant session lock and dispatches an alert to your registered WhatsApp number. You can instantly invalidate all other active sessions with a single click or by messaging our support desk.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Privacy & Security
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Will Lotus365 ever share my mobile number with marketing agencies?',
                  a: 'Never. Your contact information is used strictly by our internal customer support team to manage your active betting ID and process transactions.'
                },
                {
                  q: 'Can my local bank see that I am playing on Lotus365?',
                  a: 'UPI transfers are processed using peer-to-peer corporate partner VPAs with standard commercial descriptions, preserving your financial discretion.'
                },
                {
                  q: 'How does Lotus365 protect against hacking or database breaches?',
                  a: 'All website communications use 256-bit TLS encryption. Because we do not store sensitive identity cards or banking passwords, our infrastructure eliminates common database risk vectors.'
                },
                {
                  q: 'How do I request complete deletion of my account history?',
                  a: 'Contact our Data Privacy desk via WhatsApp (wa.link/880088) with your registered number and state "Data Erasure Request." Our compliance team will process your request within 24 hours.'
                },
                {
                  q: 'Does Lotus365 share data with overseas advertising networks like Meta or Google?',
                  a: 'No. We do not run external tracking pixels or sell audience lists to ad exchanges. Your visit to lotus365officialid.com is untracked by third-party social networks.'
                },
                {
                  q: 'How long are my financial transaction logs retained?',
                  a: 'Transactional logs are retained for standard international audit requirements of up to 5 years, after which financial records are permanently purged.'
                },
                {
                  q: 'What happens if I lose my mobile phone?',
                  a: 'If you lose your device, message our 24/7 WhatsApp customer desk immediately from your new SIM or alternate number with your registered username. Our compliance team will immediately freeze the account, invalidate all active sessions, and verify your ownership before releasing access.'
                },
                {
                  q: 'Does Lotus365 use biometric data like fingerprints or facial recognition?',
                  a: 'No. We do not collect or store biometric data. Your mobile device’s native biometrics (such as Apple FaceID or Android Fingerprint) remain localized on your own phone hardware when unlocking your browser.'
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
      <PageCTA headline="Your Confidentiality is Guaranteed on Lotus365" ctaLabel="Message Support on WhatsApp" />
    </Layout>
  </>
);
