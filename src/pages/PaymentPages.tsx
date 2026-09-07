import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  AlertTriangle, 
  DollarSign 
} from 'lucide-react';

const paymentRelated = [
  { href: '/how-to-withdraw', label: 'How to Withdraw', description: '2-minute guaranteed cashout guide' },
  { href: '/upi-deposit', label: 'UPI Deposit', description: 'Instant UPI deposit step-by-step' },
  { href: '/imps-withdrawal', label: 'IMPS Withdrawal', description: 'IMPS bank transfer guide' },
  { href: '/payment-methods', label: 'All Payment Methods', description: 'Full list of supported methods' },
  { href: '/2-minute-cashout', label: '2-Min Cashout', description: 'Our guaranteed withdrawal speed' },
];

export const HowToDepositPage: React.FC = () => (
  <>
    <SEOHead 
      title="How to Deposit on Lotus365 — Instant UPI & IMPS Funding Guide" 
      description="Step-by-step guide to depositing money on Lotus365 India. Instant UPI funding via PhonePe, Google Pay, and Paytm. Minimum ₹100, zero transaction fees, instant wallet credit." 
      canonical="/how-to-deposit" 
      keywords="lotus365 deposit, how to deposit lotus365, lotus365 upi deposit, lotus365 add money, lotus365 fund account, lotus365 payment, instant betting deposit india" 
    />
    <Layout>
      <PageHero 
        badge="Instant Wallet Top-Up" 
        title="Deposit on " 
        highlight="Lotus365" 
        subtitle="Add funds to your Lotus365 balance in under 60 seconds using UPI, PhonePe, Google Pay, Paytm, or direct IMPS bank transfer. Minimum deposit is just ₹100 with zero transaction fees." 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Fast, Seamless & Zero-Fee Deposits on Lotus365
            </h2>
            <p className="mb-4">
              At <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, we understand that when a high-voltage IPL match or an intense live casino table is underway, you cannot afford to wait 30 minutes for your deposit to reflect. That is why our proprietary payment routing network is directly integrated with India’s Unified Payments Interface (UPI) and NPCI banking rails, guaranteeing that 99.4% of deposits reflect in your wallet balance in under 60 seconds.
            </p>
            <p className="mb-4">
              Whether you prefer depositing via <strong>PhonePe, Google Pay, Paytm, BHIM, CRED UPI</strong>, or instant <strong>IMPS net banking</strong>, our process eliminates confusing third-party payment gateways that trigger bank declines. Lotus365 charges exactly 0% in deposit fees, meaning 100% of your hard-earned rupees go straight toward your betting bankroll.
            </p>
            <p>
              New to Lotus365? Make sure to ask our WhatsApp concierge about our current <a href="/welcome-bonus" className="text-[#F0C419] font-semibold hover:underline">100% First Deposit Welcome Bonus</a> to double your initial playing balance up to ₹5,000!
            </p>
          </div>

          {/* Quick Method Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <Smartphone className="w-6 h-6" />, label: 'UPI Direct', time: 'Under 30 Sec', min: 'Min ₹100' },
              { icon: <Zap className="w-6 h-6" />, label: 'PhonePe / GPay', time: 'Instant QR', min: 'Min ₹100' },
              { icon: <CreditCard className="w-6 h-6" />, label: 'IMPS Bank', time: 'Under 3 Min', min: 'Min ₹500' },
              { icon: <ShieldCheck className="w-6 h-6" />, label: 'Crypto (USDT)', time: 'Under 5 Min', min: 'Min ₹1,000' },
            ].map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-black/20 border border-white/10 text-center hover:border-[#F0C419]/40 transition-colors">
                <div className="text-[#F0C419] flex justify-center mb-2">{m.icon}</div>
                <div className="text-sm font-bold text-white mb-0.5">{m.label}</div>
                <div className="text-xs text-emerald-400 font-medium">{m.time}</div>
                <div className="text-[11px] text-white/50 mt-1">{m.min}</div>
              </div>
            ))}
          </div>

          {/* Step by Step Guide */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Step-by-Step: How to Deposit via UPI in Under 60 Seconds
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Connect with Your WhatsApp Support Concierge',
                  desc: 'Message our official 24/7 WhatsApp desk (wa.link/880088) with your registered Lotus365 username and state your intended deposit amount (e.g., "Deposit ₹2,000").',
                },
                {
                  step: '02',
                  title: 'Receive Official Active UPI ID / Dynamic QR',
                  desc: 'Your dedicated agent will generate an active, high-volume verified merchant UPI ID or dynamic payment QR code specifically created for your session.',
                },
                {
                  step: '03',
                  title: 'Complete Payment via Your Favourite UPI App',
                  desc: 'Open Google Pay, PhonePe, Paytm, or BHIM. Scan the QR code or paste the UPI handle and authorize the transfer using your confidential UPI PIN.',
                },
                {
                  step: '04',
                  title: 'Share the 12-Digit UTR / Transaction ID',
                  desc: 'Once the payment displays "Success," copy the 12-digit UTR / Reference number from your payment receipt and send the screenshot or number to your WhatsApp agent.',
                },
                {
                  step: '05',
                  title: 'Instant Balance Credit & Confirmation',
                  desc: 'Our automated reconciliation system validates the UTR against the banking ledger and updates your lotus365officialid.com balance in under 30 seconds.',
                },
              ].map((item) => (
                <div key={item.step} className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                  <span className="text-2xl font-black text-[#F0C419] shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deposit Limits Table */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Deposit Limits & Processing Specifications</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Method</th>
                    <th className="p-3.5">Min Deposit</th>
                    <th className="p-3.5">Max Deposit</th>
                    <th className="p-3.5">Speed</th>
                    <th className="p-3.5">Deduction Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Google Pay / PhonePe / Paytm</td>
                    <td className="p-3.5">₹100</td>
                    <td className="p-3.5">₹1,00,000 per transaction</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Instant (30s)</td>
                    <td className="p-3.5 text-emerald-400">0% (Free)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">IMPS Instant Bank Transfer</td>
                    <td className="p-3.5">₹500</td>
                    <td className="p-3.5">₹5,00,000 per transaction</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">1 – 3 Minutes</td>
                    <td className="p-3.5 text-emerald-400">0% (Free)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">NEFT / RTGS (Corporate)</td>
                    <td className="p-3.5">₹50,000</td>
                    <td className="p-3.5">Unlimited VIP Tier</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">10 – 20 Minutes</td>
                    <td className="p-3.5 text-emerald-400">0% (Free)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Cryptocurrency (USDT TRC-20)</td>
                    <td className="p-3.5">₹1,000 ($12)</td>
                    <td className="p-3.5">Unlimited</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">3 – 5 Minutes</td>
                    <td className="p-3.5">Network gas only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Security Alert */}
          <div className="p-4 rounded-xl bg-amber-500/15 border border-amber-400/40 flex gap-3 items-start">
            <AlertTriangle className="w-5 h-5 text-[#F0C419] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F0C419] block text-sm mb-1">Crucial Deposit Rule: Always Request a Fresh QR / UPI ID</strong>
              <p className="text-xs text-white/80">
                To protect against Indian banking daily limits and account saturation, Lotus365 updates merchant UPI handles regularly. <strong>Never make a payment to an old UPI address or saved QR code from a previous transaction.</strong> Always ping our official WhatsApp desk to fetch the active account handle before sending funds.
              </p>
            </div>
          </div>

          {/* Troubleshooting */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Troubleshooting Deposit Delays: What to Check
            </h2>
            <p className="mb-4">
              While 99.4% of payments resolve instantly, occasional banking bottlenecks can happen during national peak hours. If your deposit has not reflected within 3 minutes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-white/80">
              <li><strong>Verify UTR Accuracy:</strong> Confirm that the 12-digit number shared with your agent matches the UTR / Ref No on your banking receipt without transposed digits.</li>
              <li><strong>Check Debited Status:</strong> Confirm in your banking app that the money was actually debited rather than held in a "Payment Pending" clearing state by NPCI.</li>
              <li><strong>Avoid Duplicate Messages:</strong> Keep your inquiry within your existing WhatsApp chat thread so our financial managers can resolve your balance adjustment immediately.</li>
            </ul>
          </div>

          {/* Common Deposit Mistakes to Avoid */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#F0C419]">
                Common Deposit Mistakes & How to Prevent Them
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                To guarantee your deposit reflects within 30 seconds every time, avoid these common operational pitfalls:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                  <span className="font-bold text-rose-400">1. Paying Expired QR Codes</span>
                  <p className="text-white/70">Never save old UPI QR codes to your phone gallery. Always request a fresh, active dynamic QR code from WhatsApp before each transfer.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                  <span className="font-bold text-rose-400">2. Cropped UTR Numbers</span>
                  <p className="text-white/70">Always ensure your payment confirmation screenshot shows the complete 12-digit UTR / UPI Reference Number clearly visible.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                  <span className="font-bold text-rose-400">3. Adding Third-Party Remarks</span>
                  <p className="text-white/70">Do not include gambling-related remarks in your UPI transfer note. Simply use standard remarks or leave the note blank.</p>
                </div>
              </div>
            </div>

            {/* Anti-Fraud & Banking Escrow */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Segregated Escrow Accounts for Total Deposit Security
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Lotus365 operates strictly on pre-funded corporate banking reserves. When you deposit rupees via UPI, your funds are credited directly to your playable balance backed by tier-1 Indian commercial bank escrow reserves. Player balances are never utilized for operational overhead, ensuring 100% of your funds are permanently withdrawable within 120 seconds.
              </p>
            </div>

{/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Lotus365 Deposits
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is the minimum deposit amount on Lotus365?',
                  a: 'The minimum deposit is just ₹100 INR when using UPI (PhonePe, Google Pay, or Paytm). This makes Lotus365 accessible for all Indian sports fans and casual gamers.'
                },
                {
                  q: 'Does Lotus365 charge any deposit tax or transaction commission?',
                  a: 'No. Lotus365 absorbs 100% of all gateway, banking, and merchant processing fees. When you deposit ₹1,000, your betting wallet receives exactly ₹1,000.'
                },
                {
                  q: 'How fast do deposits reflect in my Lotus365 account?',
                  a: 'UPI deposits reflect within 30 to 60 seconds once you send the 12-digit UTR receipt to our WhatsApp support desk. IMPS transfers usually clear in 1 to 3 minutes.'
                },
                {
                  q: 'Can I deposit using a friend’s UPI or bank account?',
                  a: 'For account security and smooth withdrawals, we strongly advise depositing from a bank account or UPI handle registered in your own name.'
                },
                {
                  q: 'What should I do if my bank account was debited but the deposit failed?',
                  a: 'Do not panic. Share your payment screenshot displaying the 12-digit UTR with our WhatsApp desk. If the payment reached our system, we credit it manually; if your bank held it, NPCI automatically returns the funds within 2 to 24 hours.'
                },
                {
                  q: 'Are high-roller deposits supported for VIP players?',
                  a: 'Yes! For deposits exceeding ₹5,00,000, contact our VIP desk via WhatsApp to receive dedicated corporate RTGS bank accounts and priority concierge processing.'
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

      <RelatedPages pages={paymentRelated} />
      <PageCTA 
        headline="Ready to Fund Your Account? Deposit in 60 Seconds" 
        subtext="Message our 24/7 WhatsApp desk to get your verified UPI deposit handle and claim your 100% first deposit bonus!" 
        ctaLabel="Deposit via WhatsApp Now" 
      />
    </Layout>
  </>
);

export const HowToWithdrawPage: React.FC = () => (
  <>
    <SEOHead 
      title="How to Withdraw from Lotus365 — Instant 2-Minute UPI & IMPS Cashout Guide" 
      description="Withdraw your Lotus365 winnings instantly to any Indian bank account via UPI or IMPS. Guaranteed 2-minute processing, zero deductions, minimum ₹200 cashout." 
      canonical="/how-to-withdraw" 
      keywords="lotus365 withdrawal, lotus365 cashout, how to withdraw lotus365, lotus365 payout guide, lotus365 2 minute withdrawal, instant betting cashout india" 
    />
    <Layout>
      <PageHero 
        badge="Guaranteed 2-Minute Cashouts" 
        title="Lotus365 " 
        highlight="Withdrawal Guide" 
        subtitle="Enjoy the fastest withdrawal execution in the Indian betting industry. Cash out your sports and casino winnings to your UPI ID or bank account in under 2 minutes with zero withdrawal fees." 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Lightning-Fast Withdrawals: Your Money in Your Bank in 120 Seconds
            </h2>
            <p className="mb-4">
              The true hallmark of a trusted online betting exchange is not how smoothly it accepts deposits, but how swiftly and respectfully it honors customer payouts. Offshore betting sites frequently delay player withdrawals by 48 to 72 hours, demanding repetitive passport scans, notarized documents, and imposing hidden rollover penalties.
            </p>
            <p className="mb-4">
              On <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, we operate on a strict <a href="/2-minute-cashout" className="text-[#F0C419] font-semibold hover:underline">2-Minute Cashout Guarantee</a>. When you win big on a cricket match or live blackjack table, your earnings belong to you immediately. Our dedicated 24/7 financial disbursement desk processes payouts continuously around the clock, delivering funds straight to your <strong>Google Pay, PhonePe, Paytm UPI, or IMPS bank account</strong> in 120 seconds.
            </p>
            <p>
              Best of all, there are <strong>zero transaction deductions or withdrawal service fees</strong>. Every single rupee you cash out arrives intact in your bank balance.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-black/20 border border-white/10 text-center">
              <Clock className="w-8 h-8 text-[#F0C419] mx-auto mb-2" />
              <div className="text-2xl font-black text-white mb-1">Under 2 Mins</div>
              <div className="text-xs text-white/70">Average execution time for UPI cashout requests</div>
            </div>
            <div className="p-5 rounded-xl bg-black/20 border border-white/10 text-center">
              <DollarSign className="w-8 h-8 text-[#F0C419] mx-auto mb-2" />
              <div className="text-2xl font-black text-white mb-1">₹200</div>
              <div className="text-xs text-white/70">Accessible minimum withdrawal threshold</div>
            </div>
            <div className="p-5 rounded-xl bg-black/20 border border-white/10 text-center">
              <ShieldCheck className="w-8 h-8 text-[#F0C419] mx-auto mb-2" />
              <div className="text-2xl font-black text-white mb-1">100% Free</div>
              <div className="text-xs text-white/70">Zero processing cuts or hidden commission deductions</div>
            </div>
          </div>

          {/* Step by Step */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Step-by-Step: How to Request an Instant Cashout
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Verify Your Unlocked Balance',
                  desc: 'Log in to lotus365officialid.com and ensure your winnings are not tied up in active, unclosed sports bets or ongoing casino rounds.',
                },
                {
                  step: '02',
                  title: 'Message WhatsApp Financial Support',
                  desc: 'Send a message to our official 24/7 WhatsApp desk (wa.link/880088) stating: "Withdrawal Request" along with your username and desired amount.',
                },
                {
                  step: '03',
                  title: 'Provide Your Bank or UPI Handle',
                  desc: 'Provide your PhonePe/GPay/Paytm UPI ID (e.g., yourname@okhdfcbank) or your bank account number with IFSC code.',
                },
                {
                  step: '04',
                  title: 'Receive Direct IMPS / UPI Credit in 120 Seconds',
                  desc: 'Our automated payment API dispatches the funds. A bank SMS notification will confirm the credit in your account within 2 minutes.',
                },
              ].map((item) => (
                <div key={item.step} className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                  <span className="text-2xl font-black text-[#F0C419] shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Limits Table */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Withdrawal Limits & Channel Specifications</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Method</th>
                    <th className="p-3.5">Min Payout</th>
                    <th className="p-3.5">Max Single Payout</th>
                    <th className="p-3.5">Processing Time</th>
                    <th className="p-3.5">Daily Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">UPI (Google Pay, PhonePe, Paytm)</td>
                    <td className="p-3.5">₹200</td>
                    <td className="p-3.5">₹1,00,000</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Under 2 Minutes</td>
                    <td className="p-3.5">Up to ₹5,00,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">IMPS Instant Bank Transfer</td>
                    <td className="p-3.5">₹500</td>
                    <td className="p-3.5">₹5,00,000</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">5 – 10 Minutes</td>
                    <td className="p-3.5">Up to ₹10,00,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">VIP Corporate RTGS</td>
                    <td className="p-3.5">₹2,00,000</td>
                    <td className="p-3.5">₹25,00,000+</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">15 – 30 Minutes</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">Custom VIP Limit</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Crypto (USDT TRC-20)</td>
                    <td className="p-3.5">₹2,000</td>
                    <td className="p-3.5">₹10,00,000</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">5 – 10 Minutes</td>
                    <td className="p-3.5">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Compliance and Fair Play */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Fair Play & Fair Wagering Guidelines for Smooth Withdrawals
            </h2>
            <p className="mb-4">
              To prevent financial fraud, illicit money cycling, and comply with international anti-money laundering (AML) standards, Lotus365 maintains transparent, player-friendly conditions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  1x Turnover Rule
                </h4>
                <p className="text-xs text-white/70">Deposited funds must be wagered at least once (1x rollover) across any sports or casino market before being eligible for cashout.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Bonus Wagering Completion
                </h4>
                <p className="text-xs text-white/70">If you opted into a promotional bonus (such as a 100% welcome match), ensure bonus turnover conditions are satisfied before requesting withdrawal.</p>
              </div>
            </div>
          </div>

          {/* The 1x AML Turnover Rule */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                The Anti-Money Laundering (AML) 1x Turnover Standard Explained
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                In strict compliance with international digital gaming standards and financial integrity guidelines, Lotus365 enforces a simple <strong>1x turnover requirement</strong> before withdrawing deposited funds. This means if you deposit ₹2,000, you must place wagers totaling at least ₹2,000 across sports or casino markets before requesting a cashout.
              </p>
              <p className="text-xs text-white/70">
                Unlike deceptive bookmakers that impose 20x to 40x rollover traps, our 1x turnover is purely an anti-money laundering safeguard. Once you have played through your deposit once, 100% of your net profits and remaining principal are fully unlocked for instant 2-minute UPI cashout.
              </p>
            </div>

            {/* Withdrawal Limits Table */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Withdrawal Limit Matrix by Player Status</h3>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Player Tier</th>
                      <th className="p-3">Minimum Cashout</th>
                      <th className="p-3">Daily Maximum Limit</th>
                      <th className="p-3">Processing SLA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-black/20 text-xs">
                    <tr>
                      <td className="p-3 font-bold text-white">Standard / Silver</td>
                      <td className="p-3 text-[#F0C419]">₹500</td>
                      <td className="p-3 text-white/80">₹2,00,000 per day</td>
                      <td className="p-3 text-emerald-400 font-bold">&lt; 120 Seconds (UPI)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Gold / Platinum</td>
                      <td className="p-3 text-[#F0C419]">₹500</td>
                      <td className="p-3 text-white/80">₹10,00,000 per day</td>
                      <td className="p-3 text-emerald-400 font-bold">&lt; 90 Seconds Priority</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">VIP Black Card</td>
                      <td className="p-3 text-[#F0C419]">₹500</td>
                      <td className="p-3 text-emerald-400 font-bold">Uncapped / Unlimited</td>
                      <td className="p-3 text-[#F0C419] font-bold">Instant RTGS / IMPS Concierge</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

{/* Large Withdrawal Protocols */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                High-Volume Cashouts: VIP Protocols for Winnings Over ₹5,00,000
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                For major jackpot winners and high-rolling exchange traders cashing out ₹5,00,000 or more in a single session, Lotus365 provides dedicated VIP financial handling. You can split the payout across multiple UPI IDs, receive single-transaction high-speed RTGS transfers, or utilize multi-bank splitting to ensure full compliance with personal banking thresholds while maintaining the 2-minute SLA.
              </p>
            </div>

{/* Reconciliation Guidelines */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Detailed Bank Reconciliation & Instant Settlement Protocol
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                When you initiate a withdrawal request on Lotus365, our automated disbursement engine immediately cross-references your wagering turnover and account balance against our real-time liquidity reserves. Once validated by our senior finance desk on WhatsApp, payout instructions are dispatched via high-priority IMPS or instant UPI merchant nodes, ensuring your funds reflect in your bank statement within 120 seconds.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                We maintain direct integrations with India’s leading commercial banking partners including HDFC Bank, ICICI Bank, State Bank of India (SBI), Axis Bank, and Kotak Mahindra Bank. This dedicated banking infrastructure guarantees that your winnings bypass common retail payment gateway bottlenecks, granting you frictionless access to your profits 24 hours a day, 365 days a year.
              </p>
            </div>

            {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Lotus365 Withdrawals
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is the fastest withdrawal method on Lotus365?',
                  a: 'UPI (PhonePe, Google Pay, Paytm) is the fastest method, with funds landing in your account in under 2 minutes. IMPS bank transfer is equally dependable, settling within 5 to 10 minutes.'
                },
                {
                  q: 'Can I withdraw my money at night or on bank holidays?',
                  a: 'Yes! Both UPI and IMPS operate 24 hours a day, 7 days a week, 365 days a year. Lotus365’s disbursement team works round-the-clock without holiday interruptions.'
                },
                {
                  q: 'Is there any withdrawal fee or TDS deduction?',
                  a: 'Lotus365 charges zero withdrawal fees and zero commission cuts on cashouts. You receive the exact amount you requested.'
                },
                {
                  q: 'What is the maximum amount I can withdraw in a single day?',
                  a: 'Standard player accounts can withdraw up to ₹10,00,000 INR per day. For VIP and Black Card holders, withdrawal limits can be raised higher upon request.'
                },
                {
                  q: 'Why hasn’t my withdrawal arrived after 5 minutes?',
                  a: 'In 99% of rare delays, the cause is temporary NPCI or recipient bank maintenance. Message our 24/7 WhatsApp team with your reference number, and our finance leads will track and expedite the transaction immediately.'
                },
                {
                  q: 'Do I have to upload my PAN or Aadhaar card before withdrawing?',
                  a: 'No invasive document scans are required for standard withdrawals. Your verified WhatsApp account identity is sufficient to process cashouts quickly and securely.'
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

      <RelatedPages pages={paymentRelated} />
      <PageCTA 
        headline="Win Big & Cash Out in 2 Minutes" 
        subtext="Experience India's most dependable, fee-free payout system. Message our WhatsApp desk to cash out your balance now!" 
        ctaLabel="Request Cashout on WhatsApp" 
      />
    </Layout>
  </>
);

export const UpiDepositPage: React.FC = () => (
  <>
    <SEOHead 
      title="UPI Betting Deposit India — Instant PhonePe, GPay & Paytm on Lotus365" 
      description="Deposit money on Lotus365 using any Indian UPI app. Google Pay, PhonePe, Paytm, and BHIM supported with 30-second balance credit, zero fees, and minimum ₹100." 
      canonical="/upi-deposit" 
      keywords="upi deposit betting, upi betting india, google pay betting deposit, phonepe betting deposit, paytm betting india, bhim upi betting, instant upi deposit lotus365" 
    />
    <Layout>
      <PageHero 
        badge="Instant UPI Rail" 
        title="Instant " 
        highlight="UPI Deposit" 
        subtitle="Experience the gold standard in Indian sports betting payments. Fund your Lotus365 wallet in 30 seconds using Google Pay, PhonePe, Paytm, BHIM, or CRED UPI with zero fees and minimum ₹100." 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Why UPI is the Ultimate Payment Rail for Indian Bettors
            </h2>
            <p className="mb-4">
              Engineered by the National Payments Corporation of India (NPCI), the Unified Payments Interface (UPI) has revolutionized commerce in India. In the online betting domain, UPI stands uncontested as the safest, fastest, and most privacy-preserving payment method.
            </p>
            <p className="mb-4">
              Unlike debit cards, credit cards, or international e-wallets, UPI never forces you to expose your 16-digit card number, CVV code, or online banking passwords to third-party web portals. Every transaction is authenticated locally inside your smartphone using your secret 4-digit or 6-digit UPI MPIN, backed by two-factor device binding.
            </p>
            <p>
              On <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, we have optimized our payment gateways to interface natively with the UPI architecture, providing instant balance credits within 30 seconds of completing your payment.
            </p>
          </div>

          {/* Supported Apps Grid */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Supported Indian UPI Applications</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Google Pay', handle: 'okhdfcbank, okaxis, oksbi', speed: '30s' },
                { name: 'PhonePe', handle: 'ybl, ibl, axl', speed: '30s' },
                { name: 'Paytm UPI', handle: 'paytm', speed: '30s' },
                { name: 'BHIM UPI', handle: 'upi', speed: '45s' },
                { name: 'CRED UPI', handle: 'cred', speed: '30s' },
                { name: 'Amazon Pay', handle: 'apl', speed: '45s' },
                { name: 'WhatsApp Pay', handle: 'waaxis, wahdfc', speed: '45s' },
                { name: 'Any Bank UPI App', handle: 'iMobile, YONO, FedMobile', speed: '60s' },
              ].map((app) => (
                <div key={app.name} className="p-3.5 rounded-xl bg-black/20 border border-white/10 text-center">
                  <div className="text-sm font-bold text-white mb-1">{app.name}</div>
                  <div className="text-[11px] text-[#F0C419] font-medium">{app.handle}</div>
                  <div className="text-[10px] text-emerald-400 mt-1">Avg: {app.speed}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              How to Deposit on Lotus365 Using Any UPI App
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                <span className="text-xl font-black text-[#F0C419]">1</span>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Request Verified UPI Details via WhatsApp</h4>
                  <p className="text-xs text-white/70">Connect with our official 24/7 desk (wa.link/880088) and state your deposit amount. Your agent will share an active UPI ID or dynamic QR code.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                <span className="text-xl font-black text-[#F0C419]">2</span>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Scan QR Code or Paste UPI Handle</h4>
                  <p className="text-xs text-white/70">Open PhonePe, Google Pay, or Paytm. Select "Scan Any QR" or "Pay to UPI ID" and input the exact provided handle.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                <span className="text-xl font-black text-[#F0C419]">3</span>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Authorize with Your Secret UPI PIN</h4>
                  <p className="text-xs text-white/70">Confirm the transfer amount and enter your confidential banking MPIN. Wait for the green "Payment Successful" tick.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                <span className="text-xl font-black text-[#F0C419]">4</span>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Send the 12-Digit UTR Number</h4>
                  <p className="text-xs text-white/70">Copy the 12-digit UTR from your payment details screen and share it in your WhatsApp chat. Your balance updates in 30 seconds!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Comparison Table */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">UPI App Reliability & Speed Benchmark</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">UPI Application</th>
                    <th className="p-3.5">Success Rate</th>
                    <th className="p-3.5">Avg Settlement Speed</th>
                    <th className="p-3.5">Daily NPCI Transaction Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">PhonePe</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">99.6%</td>
                    <td className="p-3.5">25 – 35 Seconds</td>
                    <td className="p-3.5">₹1,00,000 / day</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Google Pay (GPay)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">99.4%</td>
                    <td className="p-3.5">30 – 40 Seconds</td>
                    <td className="p-3.5">₹1,00,000 / day</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Paytm UPI</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">99.1%</td>
                    <td className="p-3.5">30 – 45 Seconds</td>
                    <td className="p-3.5">₹1,00,000 / day</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">BHIM UPI</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">98.9%</td>
                    <td className="p-3.5">40 – 60 Seconds</td>
                    <td className="p-3.5">₹40,000 to ₹1,00,000 / day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PhonePe vs GPay vs Paytm */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                PhonePe vs Google Pay vs Paytm: Which UPI App is Fastest?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                All major Indian UPI applications interface seamlessly with Lotus365. Here is how they benchmark based on thousands of daily transactions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <div className="font-bold text-purple-400 text-sm">PhonePe UPI</div>
                  <p className="text-white/70">99.8% success rate. Fastest QR scanning and instant UTR copying directly to your clipboard for sub-30-second verification.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <div className="font-bold text-sky-400 text-sm">Google Pay (GPay)</div>
                  <p className="text-white/70">99.6% success rate. Direct bank server integration with multi-bank handle fallback (okhdfcbank, okaxis, oksbi).</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <div className="font-bold text-cyan-400 text-sm">Paytm / BHIM UPI</div>
                  <p className="text-white/70">99.4% success rate. Excellent backup routing during peak bank maintenance hours with rapid NPCI clearing.</p>
                </div>
              </div>
            </div>

            {/* Resolving Bank Server Busy */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Resolving "UPI Pending" Bank Statuses via the 12-Digit UTR Protocol
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Occasionally, your bank app might display "Payment Processing" or "Pending" if your underlying bank's CBS server experiences temporary congestion. Do not panic! As soon as the transaction transitions to "Success", copy the unique 12-digit UTR number and paste it to your Lotus365 WhatsApp support agent. Our automated API checks the NPCI centralized clearing ledger and credits your wallet within 30 seconds. This guarantees that even during high-traffic national bank server slowdowns, your balance is verified and updated before the first ball of the next over is bowled.
              </p>
            </div>

{/* Bank Daily UPI Limits */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#F0C419]">
                Managing Daily Bank UPI Limits: Depositing ₹1,00,000+
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                NPCI caps standard UPI transactions at ₹1,00,000 per 24 hours per bank account. If you hit your bank's daily UPI ceiling, your personal WhatsApp concierge can provide alternate deposit routes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                  <span className="font-bold text-[#F0C419]">Multi-App Splitting</span>
                  <p className="text-white/70">Use secondary UPI apps (such as CRED or Paytm linked to alternate bank accounts) to fund your wallet in parallel tranches.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                  <span className="font-bold text-[#F0C419]">Instant IMPS Direct</span>
                  <p className="text-white/70">Switch to our corporate IMPS net banking channels, which accommodate single deposits up to ₹5,00,000 with 2-minute balance reflection.</p>
                </div>
              </div>
            </div>

{/* UTR Tracing Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Resolving UPI Transaction Failures & 12-Digit UTR Tracing
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                In rare instances where a UPI transaction shows as debited in your PhonePe, Google Pay, or Paytm app but hasn't credited to your betting balance within 60 seconds, there is no need to worry. Every UPI payment generates an immutable 12-digit Unique Transaction Reference (UTR) number recorded across NPCI banking rails. Simply copy this 12-digit UTR and paste it directly into your active WhatsApp chat with our verification desk.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Our support agents utilize real-time banking webhooks to instantly ping the receiving merchant bank, trace the payment status, and manually verify the credit to your ID. With 24/7 human oversight, your deposited capital is 100% safeguarded and never trapped in limbo.
              </p>
            </div>

            {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About UPI Deposits
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is a UTR number and where do I find it in my UPI app?',
                  a: 'UTR stands for Unique Transaction Reference. It is a 12-digit numeric tracking code generated by NPCI. In PhonePe and Google Pay, click on the completed payment to view "UPI Transaction ID" or "Google Transaction ID / UTR".'
                },
                {
                  q: 'How fast do UPI deposits reflect in my Lotus365 wallet?',
                  a: 'UPI deposits reflect within 30 to 60 seconds! Once you send the screenshot or 12-digit UTR on WhatsApp, our 24/7 financial desk instantly verifies and credits your gaming balance.'
                },
                {
                  q: 'What happens if my UPI transaction status shows "Processing"?',
                  a: 'Occasionally, bank server congestion causes a transaction to hang in "Processing" status. In 95% of cases, the bank clears it within 10 minutes. Once marked "Success," forward the UTR to our WhatsApp team for immediate wallet credit.'
                },
                {
                  q: 'What is the daily maximum deposit limit via UPI?',
                  a: 'The Reserve Bank of India and NPCI set a standard limit of ₹1,00,000 per day per UPI account. If you wish to deposit more than ₹1,00,000 in a single day, our team can provide corporate IMPS or RTGS bank details.'
                },
                {
                  q: 'Are UPI deposits eligible for the Lotus365 Welcome Bonus?',
                  a: 'Yes! All UPI deposits qualify for our 100% first deposit match bonus up to ₹5,000 and subsequent reload promotions.'
                },
                {
                  q: 'Can I withdraw my winnings back to the same UPI handle?',
                  a: 'Yes. When you request a cashout, provide the same or any other valid Indian UPI VPA, and your funds will be credited in under 2 minutes.'
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

      <RelatedPages pages={paymentRelated} />
      <PageCTA 
        headline="Deposit via UPI in 30 Seconds" 
        subtext="Zero fees, instant balance credit, and 100% welcome bonus. Chat with our WhatsApp concierge to fund your account now!" 
        ctaLabel="Deposit with UPI on WhatsApp" 
      />
    </Layout>
  </>
);

export const ImpsWithdrawalPage: React.FC = () => (
  <>
    <SEOHead 
      title="IMPS Withdrawal India — 24/7 Direct Bank Transfer on Lotus365" 
      description="Withdraw betting winnings directly to any Indian bank account via IMPS on Lotus365. 24/7 processing including holidays, minimum ₹500, under 10 minutes settlement." 
      canonical="/imps-withdrawal" 
      keywords="imps withdrawal betting, imps payout india, imps betting withdrawal, instant bank transfer betting india, netbanking betting withdrawal, lotus365 imps cashout" 
    />
    <Layout>
      <PageHero 
        badge="Direct Bank Settlement" 
        title="IMPS " 
        highlight="Instant Withdrawal" 
        subtitle="Direct interbank transfers to State Bank of India, HDFC, ICICI, Axis, PNB, and over 140+ Indian scheduled commercial banks. Instant settlement around the clock with zero processing fees." 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              What Is IMPS & Why Is It the High-Roller Standard on Lotus365?
            </h2>
            <p className="mb-4">
              Managed directly by the National Payments Corporation of India (NPCI), the <strong>Immediate Payment Service (IMPS)</strong> is India’s flagship electronic interbank funds transfer system. Unlike legacy NEFT batches (which settle hourly during traditional banking hours) or RTGS systems with high baseline thresholds, IMPS operates 24 hours a day, 7 days a week, 365 days a year.
            </p>
            <p className="mb-4">
              For Lotus365 players withdrawing substantial sums—particularly balances between ₹50,000 and ₹5,00,000—IMPS is the preferred mechanism over UPI because it bypasses daily VPA limits imposed by retail apps like Google Pay. Payouts sent via IMPS land directly in your core bank account balance, ready for immediate ATM withdrawal, card spending, or personal transfers.
            </p>
            <p>
              On <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, our automated treasury disburses IMPS transfers within 5 to 10 minutes of confirmation with zero deduction fees.
            </p>
          </div>

          {/* Key Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-black/20 border border-white/10 text-center">
              <Clock className="w-8 h-8 text-[#F0C419] mx-auto mb-2" />
              <div className="text-xl font-bold text-white mb-1">24/7/365 Non-Stop</div>
              <div className="text-xs text-white/70">Processes instantly on Sundays, gazetted bank holidays, and midnight hours.</div>
            </div>
            <div className="p-5 rounded-xl bg-black/20 border border-white/10 text-center">
              <CreditCard className="w-8 h-8 text-[#F0C419] mx-auto mb-2" />
              <div className="text-xl font-bold text-white mb-1">Up to ₹5,00,000</div>
              <div className="text-xs text-white/70">Higher single-transaction capacity than standard retail UPI apps.</div>
            </div>
            <div className="p-5 rounded-xl bg-black/20 border border-white/10 text-center">
              <ShieldCheck className="w-8 h-8 text-[#F0C419] mx-auto mb-2" />
              <div className="text-xl font-bold text-white mb-1">NPCI Encrypted</div>
              <div className="text-xs text-white/70">Direct bank-to-bank settlement backed by RBI cybersecurity mandates.</div>
            </div>
          </div>

          {/* Step by Step IMPS Withdrawal */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              How to Cash Out via IMPS on Lotus365
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                <span className="text-xl font-black text-[#F0C419]">1</span>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Message Our 24/7 WhatsApp Financial Desk</h4>
                  <p className="text-xs text-white/70">Send a message to wa.link/880088 with your Lotus365 username and state your withdrawal amount (minimum ₹500 for IMPS).</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                <span className="text-xl font-black text-[#F0C419]">2</span>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Provide Your Core Banking Particulars</h4>
                  <p className="text-xs text-white/70">Share your: (a) Account Holder Name, (b) Bank Account Number, (c) Bank Name, and (d) 11-character IFSC Code.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                <span className="text-xl font-black text-[#F0C419]">3</span>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Instant Direct Disbursement</h4>
                  <p className="text-xs text-white/70">Our automated banking API dispatches your payout via IMPS. Funds reflect in your bank account balance within 5 to 10 minutes accompanied by an official RRN bank SMS.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Compatibility Table */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Major Supported Indian Banks & Typical IMPS Speeds</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Bank Name</th>
                    <th className="p-3.5">Typical Settlement Time</th>
                    <th className="p-3.5">Success Rate</th>
                    <th className="p-3.5">Weekend Processing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">State Bank of India (SBI)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">3 – 7 Minutes</td>
                    <td className="p-3.5">99.3%</td>
                    <td className="p-3.5 text-emerald-400">Yes (24/7)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">HDFC Bank</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">2 – 5 Minutes</td>
                    <td className="p-3.5">99.8%</td>
                    <td className="p-3.5 text-emerald-400">Yes (24/7)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">ICICI Bank</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">2 – 5 Minutes</td>
                    <td className="p-3.5">99.7%</td>
                    <td className="p-3.5 text-emerald-400">Yes (24/7)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Axis Bank</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">3 – 6 Minutes</td>
                    <td className="p-3.5">99.5%</td>
                    <td className="p-3.5 text-emerald-400">Yes (24/7)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Punjab National Bank (PNB)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">5 – 10 Minutes</td>
                    <td className="p-3.5">98.9%</td>
                    <td className="p-3.5 text-emerald-400">Yes (24/7)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Kotak Mahindra Bank</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">2 – 5 Minutes</td>
                    <td className="p-3.5">99.6%</td>
                    <td className="p-3.5 text-emerald-400">Yes (24/7)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* IMPS vs NEFT vs RTGS */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                Why Lotus365 Uses IMPS Rails Over Traditional NEFT or RTGS
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                When Indian players win, they want immediate cash in their bank account. Traditional NEFT clearing operates in 30-minute batches and shuts down on bank holidays and weekends. RTGS is restricted to transactions exceeding ₹2,00,000 during daytime hours.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                  <span className="font-bold text-[#F0C419]">IMPS (Our Choice)</span>
                  <p className="text-white/70">Operates 24/7/365 including Sundays and public holidays. Real-time settlement occurs in under 120 seconds directly into your savings account.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                  <span className="font-bold text-white/80">NEFT (Outdated)</span>
                  <p className="text-white/70">Batch clearing takes 2 to 4 hours. Frequently delayed overnight if submitted after 7:00 PM.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                  <span className="font-bold text-white/80">Bank Card Wire</span>
                  <p className="text-white/70">Foreign bookmakers take 3 to 5 business days, with Indian banks often flagging or holding funds for scrutiny.</p>
                </div>
              </div>
            </div>

            {/* IFSC & Bank Account Accuracy */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                IFSC Code & Beneficiary Details Verification Checklist
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Before submitting an IMPS cashout request, double-check your beneficiary particulars:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-white/70">
                <li><strong>Account Number:</strong> Enter the full account number exactly as shown in your passbook or bank mobile app.</li>
                <li><strong>IFSC Code:</strong> Ensure the 5th character is the numeral zero "0" (e.g. HDFC0001234, not the letter "O").</li>
                <li><strong>Account Holder Name:</strong> Must match your registered WhatsApp profile for seamless AML clearance.</li>
              </ul>
            </div>

{/* Bank Maintenance Schedules */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#F0C419]">
                Bank Maintenance Schedules & The Lotus365 Reserve Router
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Certain major Indian banks (such as SBI, HDFC, and ICICI) routinely schedule nightly core banking updates between 1:00 AM and 3:00 AM. During these brief windows, external interbank IMPS incoming transfers can be rejected by the receiving bank.
              </p>
              <p className="text-xs text-white/70">
                To circumvent this, Lotus365 employs an intelligent reserve routing algorithm. If our system detects that your primary bank is currently under maintenance, your WhatsApp concierge will notify you instantly and offer the option to disburse funds to a secondary UPI handle (such as an alternate family or business account) to ensure you never wait for your money.
              </p>
            </div>

            {/* IMPS Payout Speed SLA */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Guaranteed 120-Second IMPS Payout SLA
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Lotus365 is the only betting exchange in India with a binding, published 120-second cashout SLA. From the second you confirm your withdrawal on WhatsApp, our banking webhook transmits the credit instruction via NPCI IMPS pipes, ensuring net funds reflect on your phone with a bank SMS confirmation within two minutes.
              </p>
            </div>

{/* IMPS Gateway Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                National IMPS Gateway Architecture & High-Roller Payout Handling
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Immediate Payment Service (IMPS) constitutes the backbone of high-volume financial disbursements on Lotus365. Built by the National Payments Corporation of India (NPCI), IMPS allows seamless transfer of amounts up to ₹5,00,000 per single batch transaction. For high rollers and VIP Black Card members with larger profit balances, our financial desk partitions cashouts across parallel IMPS channels, allowing multi-lakh settlements to complete within a tight 5 to 10 minute window.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                To guarantee zero rejection rates, double-check that your recipient account number and 11-digit IFSC code are typed accurately when submitting your cashout slip to your WhatsApp concierge.
              </p>
            </div>

            {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About IMPS Withdrawals
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is the difference between IMPS and NEFT for betting cashouts?',
                  a: 'NEFT operates in hourly batches and can be delayed overnight or on weekends. IMPS processes instantly in real time 24 hours a day, ensuring your funds reflect within 10 minutes even on Sunday midnight.'
                },
                {
                  q: 'Are there any bank charges or deductions for IMPS withdrawals?',
                  a: 'No. Lotus365 absorbs 100% of interbank IMPS charges. You receive your complete winning payout down to the exact rupee.'
                },
                {
                  q: 'What is the maximum limit per IMPS transaction?',
                  a: 'Standard banking guidelines allow up to ₹5,00,000 per IMPS transaction. If you are withdrawing larger sums (e.g., ₹10,00,000+), our financial team splits the payout into rapid sequential tranches or utilizes corporate RTGS.'
                },
                {
                  q: 'What if I provide an incorrect IFSC code?',
                  a: 'Our banking validation system automatically checks your IFSC against the RBI database. If an invalid code is supplied, our team will immediately alert you via WhatsApp before dispatching funds.'
                },
                {
                  q: 'Do regional rural banks (Gramin Banks) support IMPS withdrawals?',
                  a: 'Yes, over 140+ regional and cooperative banks in India support IMPS. As long as your bank branch has an active IFSC code, we can disburse funds directly.'
                },
                {
                  q: 'How do I know my IMPS payment has succeeded?',
                  a: 'You will receive an official SMS notification from your bank with the 12-digit RRN (Retrieval Reference Number) confirming the instant credit.'
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

      <RelatedPages pages={paymentRelated} />
      <PageCTA 
        headline="Withdraw via IMPS in Under 10 Minutes" 
        subtext="Safe, direct bank transfers for high-volume winnings with zero deductions. Message our WhatsApp desk to cash out now!" 
        ctaLabel="Request IMPS Cashout" 
      />
    </Layout>
  </>
);

export const PaymentMethodsPage: React.FC = () => (
  <>
    <SEOHead 
      title="Lotus365 Payment Methods — UPI, IMPS, Net Banking & Crypto Directory" 
      description="Complete overview of all supported payment methods on Lotus365 India. Instant UPI deposits, 2-minute cashouts, IMPS bank transfers, and zero transaction fees." 
      canonical="/payment-methods" 
      keywords="lotus365 payment methods, lotus365 deposit options, lotus365 withdrawal methods, upi imps betting india, crypto betting india, fastest betting payments" 
    />
    <Layout>
      <PageHero 
        badge="Payment Channels Directory" 
        title="All " 
        highlight="Payment Methods" 
        subtitle="Discover the wide array of zero-fee deposit and withdrawal options supported on Lotus365. Enjoy instant UPI top-ups, guaranteed 2-minute cashouts, direct IMPS bank transfers, and secure USDT crypto." 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Comprehensive Financial Gateway for Indian Players
            </h2>
            <p className="mb-4">
              At <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, we believe financial flexibility and payment transparency are the cornerstones of a world-class gaming experience. We have tailored our payment infrastructure specifically for the Indian market, eliminating foreign conversion fees, frustrating credit card international blockades, and lengthy verification delays.
            </p>
            <p className="mb-4">
              Every payment rail featured on our platform is governed by three strict commitments: <strong>instant execution, 0% commission fees, and 24/7 human WhatsApp customer assistance</strong>.
            </p>
          </div>

          {/* Master Comparison Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Master Payment Matrix: Deposits vs. Withdrawals
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Payment Method</th>
                    <th className="p-3.5">Deposit Speed</th>
                    <th className="p-3.5">Withdrawal Speed</th>
                    <th className="p-3.5">Min Deposit / Cashout</th>
                    <th className="p-3.5">Transaction Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Google Pay / PhonePe / Paytm (UPI)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Under 30 Seconds</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Under 2 Minutes</td>
                    <td className="p-3.5">₹100 / ₹200</td>
                    <td className="p-3.5 text-emerald-400">0% (Completely Free)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">IMPS Instant Bank Transfer</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">1 – 3 Minutes</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">5 – 10 Minutes</td>
                    <td className="p-3.5">₹500 / ₹500</td>
                    <td className="p-3.5 text-emerald-400">0% (Completely Free)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">RTGS (High-Roller Transfers)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">10 – 20 Minutes</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">15 – 30 Minutes</td>
                    <td className="p-3.5">₹2,00,000 / ₹2,00,000</td>
                    <td className="p-3.5 text-emerald-400">0% (Completely Free)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Cryptocurrency (USDT TRC-20 / BEP-20)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">3 – 5 Minutes</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">5 – 10 Minutes</td>
                    <td className="p-3.5">₹1,000 / ₹2,000</td>
                    <td className="p-3.5">Network Gas Only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Deep Dive on Channels */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Detailed Breakdown of Supported Financial Channels
            </h2>

            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#F0C419]" />
                1. Unified Payments Interface (UPI) — The Everyday Favorite
              </h3>
              <p className="text-xs text-white/80">
                UPI powers over 85% of all daily transactions on Lotus365. It enables immediate transfers between your bank and our verified accounts without disclosing card digits or net banking credentials. Perfect for quick match-day deposits during live cricket games.
              </p>
              <div className="text-xs text-[#F0C419]">
                ✓ Supported apps: PhonePe, GPay, Paytm, BHIM, CRED, Amazon Pay, MobiKwik, and all bank UPI apps.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#F0C419]" />
                2. IMPS Electronic Bank Transfers — The High-Volume Workhorse
              </h3>
              <p className="text-xs text-white/80">
                When you win a massive accumulator or hit a lucky spin requiring a cashout of ₹1,00,000 or higher, IMPS is the optimal rail. Settling directly into your core bank account without the daily ₹1 Lakh cap of retail UPI apps.
              </p>
              <div className="text-xs text-[#F0C419]">
                ✓ Supported institutions: SBI, HDFC, ICICI, Axis, PNB, Canara, Bank of Baroda, Kotak, and 140+ scheduled banks.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F0C419]" />
                3. Cryptocurrency (USDT Stablecoin) — Complete Global Confidentiality
              </h3>
              <p className="text-xs text-white/80">
                For international Indian diaspora players or privacy-conscious enthusiasts, we support Tether (USDT) on TRC-20 and BEP-20 networks. Tether maintains an exact 1:1 peg with the US Dollar, providing a hedge against currency fluctuation while ensuring borderless, unfreezable liquidity.
              </p>
            </div>
          </div>

          {/* Comprehensive Banking Rail Comparison */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                Banking Rail Comparison: Speed, Limits & Reliability Matrix
              </h2>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Payment Channel</th>
                      <th className="p-3">Deposit Speed</th>
                      <th className="p-3">Withdrawal Speed</th>
                      <th className="p-3">Success Rate</th>
                      <th className="p-3">Platform Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-black/20 text-xs">
                    <tr>
                      <td className="p-3 font-bold text-white">UPI (PhonePe, GPay, Paytm)</td>
                      <td className="p-3 text-emerald-400 font-bold">&lt; 30 Seconds</td>
                      <td className="p-3 text-emerald-400 font-bold">&lt; 120 Seconds</td>
                      <td className="p-3 text-emerald-400 font-bold">99.7%</td>
                      <td className="p-3 text-[#F0C419] font-bold">0% (Zero Fees)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">IMPS Direct Net Banking</td>
                      <td className="p-3 text-emerald-400 font-bold">&lt; 2 Minutes</td>
                      <td className="p-3 text-emerald-400 font-bold">&lt; 2 Minutes</td>
                      <td className="p-3 text-emerald-400 font-bold">99.5%</td>
                      <td className="p-3 text-[#F0C419] font-bold">0% (Zero Fees)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Crypto USDT (TRC-20)</td>
                      <td className="p-3 text-sky-400">1 to 3 Minutes</td>
                      <td className="p-3 text-sky-400">Under 5 Minutes</td>
                      <td className="p-3 text-sky-400">99.9%</td>
                      <td className="p-3 text-[#F0C419] font-bold">0% (Zero Fees)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Zero Fee Guarantee */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                The Lotus365 100% Zero-Fee Platform Pledge
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Many online operators quietly levy 2% to 5% "handling fees" or "processing charges" when players deposit or withdraw money. Lotus365 absorbs 100% of all banking infrastructure, interchange, and SMS gateway fees. When you deposit ₹5,000, you receive ₹5,000 in your wallet. When you cash out ₹10,000, exactly ₹10,000 lands in your bank account. By completely eliminating hidden gateway levies and maintenance commissions, Lotus365 ensures your hard-earned winnings remain 100% in your hands.
              </p>
            </div>

{/* Crypto USDT vs INR UPI */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                Crypto USDT (TRC-20) vs INR UPI: Choosing the Best Rail
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                While 90% of Indian players choose UPI for sheer speed and familiarity, Lotus365 also supports Tether (USDT) on the Tron (TRC-20) blockchain for high-stakes players:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <div className="font-bold text-emerald-400 text-sm">UPI Payments (PhonePe, GPay, Paytm)</div>
                  <ul className="text-white/70 space-y-1 list-disc pl-4">
                    <li>Instant deposit (&lt; 30 seconds) and instant withdrawal (&lt; 2 minutes).</li>
                    <li>Minimum deposit only ₹100; directly linked to your everyday savings account.</li>
                    <li>0% transaction fees absorbed fully by Lotus365.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <div className="font-bold text-sky-400 text-sm">Crypto USDT (TRC-20 Blockchain)</div>
                  <ul className="text-white/70 space-y-1 list-disc pl-4">
                    <li>Complete financial discretion with zero bank record footprint.</li>
                    <li>No upper transfer limits; perfect for VIPs depositing ₹5,00,000+.</li>
                    <li>Global blockchain confirmation in 1 to 3 minutes.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Financial Audits & Segregated Balances */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Segregated Corporate Liquidity & 100% Backed Balances
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Every rupee deposited across all payment methods is held in 100% segregated client accounts. Player balances are never pooled with corporate operational budgets. Regardless of overall betting market swings or high accumulator payouts, 100% of player balances remain fully backed and instantly withdrawable 24 hours a day, 365 days a year.
              </p>
            </div>

{/* Reconciliation & Audits */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Corporate Account Segregation & Daily Transaction Reconciliation
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Lotus365 adheres to stringent financial risk management protocols. All player funds are held in ring-fenced, segregated corporate accounts completely isolated from platform operational expenses. Every deposit via UPI or IMPS is automatically audited and reconciled every 60 minutes against merchant settlement ledgers, ensuring 100% solvency and instant liquidity fulfillment even during peak high-volume IPL tournament weekends.
              </p>
            </div>

            {/* Redundancy Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Payment Channel Redundancy & Zero-Downtime Settlement Guarantee
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Digital payment gateways in India occasionally experience server maintenance or regional network congestion. To ensure our players never experience interrupted deposits or frozen withdrawals, Lotus365 operates a multi-tiered banking failover matrix. If one bank handle or UPI server experiences higher than normal latency, our smart routing algorithm automatically shifts incoming and outgoing requests to secondary banking nodes including ICICI UPI, Axis Pay, and Yes Bank corporate rails.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                This enterprise-level banking architecture ensures that whether it's peak IPL match hours on a Sunday evening or a national banking holiday, your deposits and 2-minute cashouts proceed smoothly without delay.
              </p>
            </div>

            {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Payment Methods
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Are credit cards or international debit cards accepted?',
                  a: 'Due to frequent international transaction blocks and high forex conversion fees by Indian banks, we prioritize UPI and direct IMPS transfers. These methods are faster, 100% free, and have a 99%+ success rate.'
                },
                {
                  q: 'Can I deposit with PhonePe and withdraw to Google Pay?',
                  a: 'Yes. As long as both UPI VPAs belong to you, you have full freedom to deposit via one UPI application and receive your winnings in another.'
                },
                {
                  q: 'Does Lotus365 charge any hidden maintenance or payment gateway fees?',
                  a: 'Never. Lotus365 maintains a strict zero-fee policy across all deposit and cashout channels.'
                },
                {
                  q: 'How can I check the status of a pending payment?',
                  a: 'Message our official WhatsApp desk (wa.link/880088) with your registered username and transaction UTR. Our agents verify and update transactions in real time.'
                },
                {
                  q: 'What is the fastest way to get started as a complete beginner?',
                  a: 'Start with a simple ₹100 deposit via PhonePe or Google Pay. It takes under 60 seconds to reflect, and our WhatsApp team will guide you through placing your first bet.'
                },
                {
                  q: 'Can I change my registered bank details later?',
                  a: 'Yes. You can update your withdrawal bank account or UPI ID at any time by sending a verification request through your registered WhatsApp number.'
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

      <RelatedPages pages={paymentRelated} />
      <PageCTA 
        headline="Experience Seamless Zero-Fee Banking on Lotus365" 
        subtext="Fund your account with UPI in 30 seconds and enjoy guaranteed 2-minute cashouts. Register free on WhatsApp today!" 
        ctaLabel="Start with WhatsApp Now" 
      />
    </Layout>
  </>
);

export const TwoMinuteCashoutPage: React.FC = () => (
  <>
    <SEOHead 
      title="Lotus365 2-Minute Cashout Guarantee — India's Fastest Betting Withdrawal" 
      description="Experience the legendary Lotus365 2-minute cashout guarantee. Instant UPI and IMPS payouts directly to your bank account with zero waiting and zero deductions." 
      canonical="/2-minute-cashout" 
      keywords="2 minute cashout india, fastest withdrawal betting india, instant withdrawal betting, lotus365 cashout guarantee, 120 second betting withdrawal, instant upi cashout" 
    />
    <Layout>
      <PageHero 
        badge="Industry-Leading Benchmark" 
        title="India's Fastest " 
        highlight="2-Minute Cashout" 
        subtitle="Lotus365 guarantees your withdrawal request is executed and dispatched within 120 seconds via UPI or IMPS. No delays, no excuses, and zero transaction fees — your winnings in your pocket instantly." 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              The 2-Minute Cashout Guarantee: Why Speed Defines Trust
            </h2>
            <p className="mb-4">
              In the fast-moving world of online sports betting and live casino gaming, nothing matters more than the speed and reliability of your withdrawals. While many platforms brag about flashy odds and massive welcome banners, their true colors show when a player requests a cashout: lengthy verification hurdles, arbitrary account freezes, and frustrating 48-to-72-hour waiting periods.
            </p>
            <p className="mb-4">
              At <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, we dismantled this outdated model by pioneering the <strong>2-Minute Cashout Guarantee</strong>. When you place a winning bet on an IPL match or strike a massive multiplier in <a href="/aviator-game" className="text-[#F0C419] font-semibold hover:underline">Aviator</a>, your money is disbursed within 120 seconds of submitting your request on WhatsApp.
            </p>
            <p>
              We maintain dedicated liquidity reserves across India’s primary banking partners (HDFC, ICICI, SBI, and Axis Bank), ensuring that whether your cashout is ₹500 or ₹5,00,000, our automated disbursement gateway processes it immediately.
            </p>
          </div>

          {/* Speed Comparison Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Withdrawal Speed Benchmark: Lotus365 vs. Competitors
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Platform</th>
                    <th className="p-3.5">Average Cashout Speed</th>
                    <th className="p-3.5">Document KYC Requirement</th>
                    <th className="p-3.5">Service Deductions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr className="bg-[#0b3b2d]/60 border-l-4 border-l-[#F0C419]">
                    <td className="p-3.5 font-bold text-[#F0C419]">Lotus365 (Official)</td>
                    <td className="p-3.5 text-emerald-400 font-extrabold">Under 2 Minutes Guaranteed</td>
                    <td className="p-3.5 text-emerald-400">None (Instant WhatsApp ID)</td>
                    <td className="p-3.5 text-emerald-400">0% (Completely Free)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-white/90">Traditional Offshore Bookmakers</td>
                    <td className="p-3.5 text-rose-300">24 to 72 Banking Hours</td>
                    <td className="p-3.5 text-rose-300">Mandatory Passport / Utility Scan</td>
                    <td className="p-3.5">2% to 5% Currency / Gateway Cut</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-white/90">Rival Indian Betting Exchanges</td>
                    <td className="p-3.5 text-amber-300">2 to 6 Hours</td>
                    <td className="p-3.5">Frequent Re-verification Freezes</td>
                    <td className="p-3.5">1% to 2% Exchange Settlement Cut</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Architecture Behind the Speed */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              How Lotus365 Achieves 120-Second Payouts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <div className="text-[#F0C419] font-bold text-sm mb-1 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Direct Core Banking APIs
                </div>
                <p className="text-xs text-white/70">
                  We integrate directly with tier-1 Indian bank corporate APIs, enabling programmatic IMPS and UPI dispatch without human banking-hour delays.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <div className="text-[#F0C419] font-bold text-sm mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Pre-Funded Liquidity Pools
                </div>
                <p className="text-xs text-white/70">
                  We maintain massive daily escrow capital across leading Indian financial institutions, ensuring high-roller wins are paid out immediately.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <div className="text-[#F0C419] font-bold text-sm mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  24/7 Human Disbursement Desk
                </div>
                <p className="text-xs text-white/70">
                  Our treasury department operates in continuous 8-hour shifts around the clock, guaranteeing full operational capacity even at 3 AM.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <div className="text-[#F0C419] font-bold text-sm mb-1 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  WhatsApp Concierge Flow
                </div>
                <p className="text-xs text-white/70">
                  By routing requests through encrypted WhatsApp chat, you avoid clunky website forms that crash during peak IPL match conclusions.
                </p>
              </div>
            </div>
          </div>

          {/* Step by Step Flow */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              The 120-Second Cashout Flow: From Request to Bank SMS
            </h2>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#F0C419] text-[#14614C] flex items-center justify-center font-bold text-xs shrink-0">0:00</span>
                <span className="text-xs text-white/85">You send "Withdraw ₹5,000 to my UPI" to our verified WhatsApp desk (wa.link/880088).</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#F0C419] text-[#14614C] flex items-center justify-center font-bold text-xs shrink-0">0:30</span>
                <span className="text-xs text-white/85">Our automated ledger checks your balance and triggers the corporate payout API.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#F0C419] text-[#14614C] flex items-center justify-center font-bold text-xs shrink-0">1:15</span>
                <span className="text-xs text-white/85">NPCI / IMPS rail processes the credit to your registered Indian bank account.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#F0C419] text-[#14614C] flex items-center justify-center font-bold text-xs shrink-0">1:50</span>
                <span className="text-xs text-emerald-400 font-bold">Your phone chimes with a bank SMS confirming the credit!</span>
              </div>
            </div>
          </div>

          {/* The Engineering Behind 2-Minute Cashout */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                How Lotus365 Delivers the 2-Minute Cashout Guarantee
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Delivering 120-second cashouts 24 hours a day across India requires an enterprise-level financial infrastructure that traditional bookmakers cannot match:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <span className="font-bold text-[#F0C419] text-sm">1. Pre-Funded Escrow Nodes</span>
                  <p className="text-white/70">Lotus365 maintains pre-allocated multi-crore cashout reserves with leading tier-1 banking institutions, eliminating liquidity bottlenecks.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <span className="font-bold text-[#F0C419] text-sm">2. Automated API Disbursal</span>
                  <p className="text-white/70">Once approved by your WhatsApp manager, payout orders trigger direct NPCI IMPS webhook dispatches without manual banking queues.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <span className="font-bold text-[#F0C419] text-sm">3. 24/7 Human Shift Roster</span>
                  <p className="text-white/70">Our dedicated finance team operates three overlapping 8-hour shifts around the clock, guaranteeing sub-60-second ticket handling at 3 AM or 3 PM.</p>
                </div>
              </div>
            </div>

            {/* Emergency Escalation SLA */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                What Happens if a Cashout Takes Longer Than 2 Minutes?
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                In the rare event that your receiving bank\'s CBS server is temporarily undergoing maintenance (causing a delay beyond 120 seconds), our operations desk immediately initiates a priority trace. If the receiving bank cannot clear the transfer within 10 minutes, our finance team will re-route the cashout through an alternative UPI handle or bank account of your choice to ensure you receive your funds without delay.
              </p>
            </div>

{/* Payout Speed Benchmark Table */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                Payout Speed Benchmark: Lotus365 vs Major Indian Competitors
              </h2>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Platform</th>
                      <th className="p-3">Advertised Speed</th>
                      <th className="p-3">Real-World Average</th>
                      <th className="p-3">KYC Document Hold</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-black/20 text-xs">
                    <tr>
                      <td className="p-3 font-bold text-white">Lotus365</td>
                      <td className="p-3 text-emerald-400 font-bold">120 Seconds</td>
                      <td className="p-3 text-emerald-400 font-bold">85 to 110 Seconds</td>
                      <td className="p-3 text-emerald-400 font-bold">Zero Documents Required</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">European Bookmakers (Betway/Bet365)</td>
                      <td className="p-3 text-white/80">24 to 48 Hours</td>
                      <td className="p-3 text-rose-400">3 to 5 Business Days</td>
                      <td className="p-3 text-rose-400">Mandatory Passport / Utility Bill</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Traditional Offshore Sportsbooks</td>
                      <td className="p-3 text-white/80">Up to 24 Hours</td>
                      <td className="p-3 text-rose-400">12 to 36 Hours</td>
                      <td className="p-3 text-rose-400">Aadhaar / Bank Statement Scans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Liquidity During IPL Finals */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Peak Liquidity Resilience: Cashouts During IPL Finals
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                During the final over of an IPL championship match, tens of thousands of winning tickets settle simultaneously, generating sudden surge demand for withdrawals. While competitor sites crash or queue cashouts for days, Lotus365 deploys pre-funded distributed banking clusters that disburse up to 1,500 simultaneous IMPS transfers per minute without queue delays. This unparalleled financial engineering ensures that whether you are cashing out during an ordinary Tuesday league match or the thrilling final over of an IPL World Cup final, your money reaches your account within 120 seconds guaranteed.
              </p>
            </div>

{/* Liquidity Protocol */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Dedicated Liquidity Reserves & Automated Cashout Verification Protocol
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                The reason Lotus365 can legitimately fulfill its industry-famous "2-Minute Cashout" guarantee while other platforms take 24 to 48 hours is our dedicated institutional liquidity reserve. We hold segregated bankroll balances across multiple tier-one Indian banking institutions specifically earmarked for player winnings. When you tap "Withdraw" and submit your UPI address on WhatsApp, you aren't waiting for other player deposits to clear; funds are released instantly from our liquid treasury.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Every cashout is validated against fair play compliance, confirming that bets were placed legitimately according to exchange rules. Once checked, the automated payout fires, landing directly into your PhonePe, Google Pay, or bank account before you even close your WhatsApp chat window.
              </p>
            </div>

            {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About 2-Minute Cashouts
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Is the 2-minute cashout really guaranteed on every withdrawal?',
                  a: 'Yes! Between 9:00 AM and 11:00 PM IST, all standard UPI withdrawal requests are executed and credited within 2 minutes. During late-night hours (11:00 PM to 9:00 AM), IMPS transfers usually take between 3 and 8 minutes.'
                },
                {
                  q: 'What is the minimum amount required for a 2-minute cashout?',
                  a: 'You can request an instant 2-minute cashout for amounts as low as ₹200 INR.'
                },
                {
                  q: 'Are there any fees deducted from my 2-minute withdrawal?',
                  a: 'No fees whatsoever. Lotus365 absorbs 100% of all interbank and UPI merchant processing fees.'
                },
                {
                  q: 'What should I do if my bank is undergoing scheduled server maintenance?',
                  a: 'If your recipient bank (e.g., SBI or HDFC) is undergoing unscheduled RBI downtime, our system will notify you immediately and allow you to reroute the payout to an alternate UPI handle or bank account.'
                },
                {
                  q: 'Can I withdraw multiple times in a single day?',
                  a: 'Yes! Players are permitted multiple withdrawals per day up to their account tier’s maximum daily limit with zero penalties.'
                },
                {
                  q: 'Do I need an app or app to withdraw my winnings?',
                  a: 'No app or app is needed. Simply coordinate your withdrawal through your verified WhatsApp chat with our support team.'
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

      <RelatedPages pages={paymentRelated} />
      <PageCTA 
        headline="Experience the 2-Minute Cashout Difference" 
        subtext="Don't wait 48 hours for other betting sites to pay your winnings. Play on Lotus365 and get your money in 120 seconds guaranteed!" 
        ctaLabel="Get Started on WhatsApp" 
      />
    </Layout>
  </>
);
