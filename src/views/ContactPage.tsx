"use client";
import Link from 'next/link';
import React from 'react';

import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Phone, 
  HelpCircle, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  Headset 
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

const related = [
  { href: '/how-it-works', label: 'How It Works', description: 'Step-by-step guide to getting started' },
  { href: '/how-to-deposit', label: 'Payment Methods', description: 'UPI, IMPS, and other deposit options' },
  { href: '/how-it-works', label: 'FAQ', description: 'Frequently asked questions about Lotus365' },
  { href: '/responsible-gaming', label: 'Responsible Gaming', description: 'Play safely within your limits' },
];

const contactFaqs = [
  {
    q: 'Is Lotus365 customer support available late at night?',
    a: 'Yes! Our support desk operates 24 hours a day, 7 days a week, 365 days a year. Whether it is 3:00 PM or 3:00 AM on Sunday, agents respond within 60 seconds.'
  },
  {
    q: 'Can I speak with a customer care representative in Hindi?',
    a: 'Yes. All our customer concierge agents are bilingual and can communicate fluently in both Hindi and English based on your preference.'
  },
  {
    q: 'What should I do if my WhatsApp message doesn’t deliver?',
    a: 'Check your internet connection or ensure you are clicking the direct official link: wa.link/880088. You can also re-launch the chat from lotusplay365.shop.'
  },
  {
    q: 'Does Lotus365 provide phone call support?',
    a: 'VIP and Black Card members receive dedicated voice call and private phone concierge privileges through their assigned Senior Account Directors.'
  },
  {
    q: 'How do I submit an escalation if my deposit is delayed past 15 minutes?',
    a: 'Simply ask your frontline WhatsApp agent to "Escalate to Finance Shift Manager" and provide the 12-digit UTR. A senior lead will take over the chat within 120 seconds.'
  },
  {
    q: 'Will customer care ever request my bank account password or UPI MPIN?',
    a: 'Never! Our staff will never request your banking passwords, ATM PINs, or UPI MPINs. Any party requesting these is an unauthorized impostor.'
  },
];

export const ContactPage: React.FC = () => {
  const handleWhatsApp = () => window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');

  return (
    <>
      <SEOHead
        title="Contact Lotus365 | 24/7 Official WhatsApp Helpline"
        description="Need help with your Lotus365 ID, deposit, or withdrawal? Contact our verified 24/7 WhatsApp customer support desk for instant human assistance in 30 seconds."
        canonical="/contact"
        keywords="lotus365 contact, lotus365 whatsapp support, lotus365 customer care number, lotus365 helpline, lotus365 official whatsapp, lotus365 support desk india"
        faqItems={contactFaqs}
      />
      <Layout>
        <PageHero
          badge="24/7/365 Dedicated Helpline"
          title="24/7 Official "
          highlight="WhatsApp Support"
          subtitle="Experience white-glove customer assistance. Our dedicated team of human account managers is available round the clock, 365 days a year, delivering sub-60-second responses via secure WhatsApp chat."
          ctaLabel="Open WhatsApp Support Now"
          imageSrc="/images/banners/banner_about_official.webp"
          imageAlt="24/7 Official WhatsApp Helpline Lotus365"
          breadcrumbs={[
            { label: 'Support' },
            { label: 'Contact Us' },
          ]}
        />

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto space-y-16 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* Direct WhatsApp Callout Banner */}
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-[#0c382b] to-[#08261d] border border-[#25D366]/40 shadow-xl space-y-4">
              <Headset className="w-12 h-12 text-[#25D366] mx-auto animate-pulse" />
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Official Lotus365 WhatsApp Helpdesk</h2>
              <p className="text-slate-700 text-xs sm:text-sm max-w-lg mx-auto">
                Direct, end-to-end encrypted connection to our central financial operations and member support team. Average response time: <strong>under 45 seconds</strong>.
              </p>
              <div className="pt-2">
                <button type="button" onClick={handleWhatsApp} className="cta-button py-4 px-10 text-base font-black shadow-gold-glow inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Start WhatsApp Chat (wa.link/880088)</span>
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                100% Free • Multi-Lingual Support (Hindi & English) • Operational 24 Hours a Day
              </p>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Why Lotus365 Chooses WhatsApp for Customer Care
              </h2>
              <p className="mb-4">
                At <Link href="/" className="text-emerald-700 font-semibold hover:underline font-semibold hover:underline" title="Lotus365">Lotus365</Link>, we believe customer support should be immediate, personal, and respectful of your time. Traditional foreign bookmakers force Indian players through clunky, automated chatbots that loop through generic scripted answers, or email ticketing desks that take 24 to 48 hours to resolve urgent withdrawal inquiries.
              </p>
              <p className="mb-4">
                By integrating our entire operations infrastructure directly into <strong>WhatsApp</strong>, we connect you straight to real, senior operations staff. Whether you need a fresh betting ID during a live IPL over, require an instant UPI deposit QR code, or want your winning cashout disbursed in 120 seconds, your personal WhatsApp concierge executes your request immediately without delay.
              </p>
            </div>

            {/* Department SLA Table */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Service Level Agreements (SLAs) by Department</h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-900 font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5">Department</th>
                      <th className="p-3.5">Typical Request</th>
                      <th className="p-3.5">Guaranteed SLA Response</th>
                      <th className="p-3.5">Resolution Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-slate-50 border border-slate-200">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">New ID Desk</td>
                      <td className="p-3.5 text-slate-700">Account registration & credential delivery</td>
                      <td className="p-3.5 text-emerald-800 font-bold font-bold">&lt; 30 Seconds</td>
                      <td className="p-3.5 text-emerald-800 font-bold">Under 60 Seconds</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Cashout Disbursement</td>
                      <td className="p-3.5 text-slate-700">UPI / IMPS withdrawal processing</td>
                      <td className="p-3.5 text-emerald-800 font-bold font-bold">&lt; 45 Seconds</td>
                      <td className="p-3.5 text-emerald-800 font-bold">Under 120 Seconds</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Deposit Reconciliation</td>
                      <td className="p-3.5 text-slate-700">UPI UTR verification & balance top-up</td>
                      <td className="p-3.5 text-emerald-800 font-bold font-bold">&lt; 30 Seconds</td>
                      <td className="p-3.5 text-emerald-800 font-bold">30 – 60 Seconds</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Security & Recovery</td>
                      <td className="p-3.5 text-slate-700">Password reset & locked account unlock</td>
                      <td className="p-3.5 text-emerald-800 font-bold font-bold">&lt; 60 Seconds</td>
                      <td className="p-3.5 text-emerald-800 font-bold">Under 2 Minutes</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">VIP Concierge</td>
                      <td className="p-3.5 text-slate-700">High-stakes limits, RTGS & bespoke promos</td>
                      <td className="p-3.5 text-slate-900 font-bold">Instant Dedicated RM</td>
                      <td className="p-3.5 text-slate-900 font-bold">Immediate Priority</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Department Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <MessageCircle className="w-6 h-6" />, title: 'Instant WhatsApp Chat', desc: 'Send your query directly to our 24/7 verified channel. Our agents communicate fluently in both Hindi and English.' },
                { icon: <Clock className="w-6 h-6" />, title: 'Non-Stop 24/7 Availability', desc: 'No public holidays, Sunday closures, or night shutdowns. We operate with full staffing around the clock.' },
                { icon: <ShieldCheck className="w-6 h-6" />, title: 'End-to-End Encryption', desc: 'All conversations and transaction details are protected by WhatsApp’s military-grade 256-bit encryption.' },
                { icon: <Phone className="w-6 h-6" />, title: 'Account & Password Recovery', desc: 'Forgot your login password? Send a message from your registered phone number for a 60-second reset.' },
              ].map((c, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#F0C419]/20 flex items-center justify-center text-slate-900 mb-2">{c.icon}</div>
                  <h3 className="text-base font-bold text-slate-900">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Security Alert: Impostor Warning */}
            <div className="p-5 rounded-2xl bg-amber-500/15 border border-amber-400/40 flex gap-4 items-start">
              <AlertTriangle className="w-6 h-6 text-[#F0C419] shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <strong className="text-[#F0C419] block text-sm">Critical Security Notice: Beware of Fake Impostor Channels</strong>
                <p className="text-slate-700 leading-relaxed">
                  Always initiate contact exclusively through the official links on <strong className="text-slate-900 font-bold">lotusplay365.shop</strong>. Beware of rogue Telegram groups or Facebook pages claiming to be "Lotus365 Customer Care." Legitimate Lotus365 representatives will <strong>never</strong> ask for your bank ATM PIN, UPI MPIN, or confidential bank passwords.
                </p>
              </div>
            </div>

            {/* How to Prepare Your Query */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                How to Get the Fastest Support Response
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold text-sm block mb-0.5">Include Your Registered Username</strong>
                    <p className="text-xs text-slate-600">Mention your Lotus365 username in your opening message so the agent can load your account profile immediately.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold text-sm block mb-0.5">Share 12-Digit UTR for Deposit Queries</strong>
                    <p className="text-xs text-slate-600">If inquiring about a deposit, attach the payment screenshot showing the 12-digit UTR number for 30-second balance credit.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex gap-3">
                  <Zap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold text-sm block mb-0.5">State Your Withdrawal UPI Handle Clearly</strong>
                    <p className="text-xs text-slate-600">For cashouts, provide your exact PhonePe, Google Pay, or Paytm UPI VPA (e.g., yourname@okhdfcbank) to trigger our 2-minute payout API.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dispute Resolution Framework */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Dispute Escalation & Transparent Resolution Hierarchy
              </h2>
              <p>
                In the rare event of a transactional disagreement—such as an interbank UPI settlement delay or a contested dead-heat exchange settlement—Lotus365 provides a formal, transparent escalation ladder:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <span className="font-bold text-[#F0C419] text-sm">Tier 1: Frontline Agent</span>
                  <p className="text-slate-600">Immediate ledger checks and bank UTR validations within 5 minutes of your initial notification.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <span className="font-bold text-[#F0C419] text-sm">Tier 2: Senior Finance Lead</span>
                  <p className="text-slate-600">Direct communication with our banking partner's node manager to verify NPCI clearing status within 30 minutes.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <span className="font-bold text-[#F0C419] text-sm">Tier 3: Executive Board</span>
                  <p className="text-slate-600">Binding arbitration and balance compensation authorized directly by operations directors within 2 hours.</p>
                </div>
              </div>
            </div>

            {/* Regional Multi-Lingual Coverage */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Regional Multi-Lingual Support Across India
              </h2>
              <p>
                India is a multilingual subcontinent, and we firmly recognize that sports fans feel most confident discussing financial transactions and betting strategies in their mother tongue. Lotus365 deploys dedicated regional desk agents covering major Indian languages:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="font-bold text-[#F0C419] text-sm">Hindi (हिन्दी)</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">24/7 Primary Roster</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="font-bold text-[#F0C419] text-sm">English</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">24/7 International Desk</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="font-bold text-[#F0C419] text-sm">Telugu & Tamil</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">South India Desk</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="font-bold text-[#F0C419] text-sm">Bengali & Marathi</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">East & West Regional Desks</div>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                To request assistance in a specific regional language, simply mention your preferred language in your opening message to the WhatsApp helpline, and our routing system will assign the appropriate team member within 60 seconds.
              </p>
            </div>

            {/* Verification Checklist */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                Official Verification Checklist: How to Ensure You Are Speaking with Legitimate Staff
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Before sending funds or requesting payouts, please review these 3 golden verification rules:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                <li><strong className="text-slate-900 font-bold">Verify Domain Origin:</strong> Always click the WhatsApp link directly from our official portal <Link href="/" className="text-emerald-700 font-semibold hover:underline underline" title="lotusplay365.shop">lotusplay365.shop</Link>. Never trust numbers sent via unsolicited SMS or unofficial Telegram broadcast groups.</li>
                <li><strong className="text-slate-900 font-bold">Confirmed UPI Merchant VPA:</strong> Legitimate Lotus365 deposit accounts will always display confirmed merchant names verified by our desk, and your personal account manager will provide dynamic deposit references matching your exact username.</li>
                <li><strong className="text-slate-900 font-bold">No Sensitive Disclosures:</strong> We will never ask you to click third-party remote screen-sharing tools like AnyDesk or TeamViewer, nor will we ever prompt you to enter your bank ATM PIN or OTP.</li>
              </ul>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#F0C419]" />
                Frequently Asked Questions About Customer Support
              </h2>
              <div className="space-y-4">
                {contactFaqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <h3 className="font-bold text-slate-900 text-sm mb-2">{faq.q}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <RelatedPages pages={related} />
        <PageCTA headline="Connect with Our 24/7 Support Desk on WhatsApp" ctaLabel="Open WhatsApp Now" />
      </Layout>
    </>
  );
};
