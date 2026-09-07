import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { 
  ShieldCheck, 
  HeartHandshake, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle2, 
  Clock, 
  Lock 
} from 'lucide-react';

const related = [
  { href: '/faq', label: 'FAQ', description: 'Common questions about Lotus365' },
  { href: '/contact', label: 'Contact Support', description: '24/7 WhatsApp customer support' },
  { href: '/about', label: 'About Lotus365', description: 'Learn about our platform' },
  { href: '/safe-betting-guide', label: 'Safe Betting Guide', description: 'Responsible bankroll management' },
];

export const ResponsibleGamingPage: React.FC = () => (
  <>
    <SEOHead
      title="Responsible Gaming Policy — Lotus365 Player Protection & Welfare"
      description="Lotus365 is committed to safe, responsible entertainment. Learn about our strict 18+ age verification, deposit limits, self-exclusion tools, and problem gambling support resources in India."
      canonical="/responsible-gaming"
      keywords="responsible gambling india, lotus365 responsible gaming, safe betting india, problem gambling support, deposit limits betting, self exclusion betting india"
    />
    <Layout>
      <PageHero
        badge="Player Welfare & Ethics"
        title="Play Smart, "
        highlight="Play Responsibly"
        subtitle="At Lotus365, your safety, financial health, and peace of mind come first. We enforce strict 18+ age verification and provide comprehensive self-regulation tools to ensure sports betting and gaming remain purely entertaining."
        ctaLabel="Contact Welfare Desk on WhatsApp"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Commitment Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black/25 border border-emerald-400/30 flex flex-col sm:flex-row items-center gap-6">
            <HeartHandshake className="w-16 h-16 text-[#F0C419] shrink-0" />
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-black text-white">Our Responsible Entertainment Charter</h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Online sports betting and casino games must always be viewed as a leisure activity—never as a vehicle for debt resolution or financial enrichment. Lotus365 empowers every member with tools to manage time, spending, and emotional discipline.
              </p>
            </div>
          </div>

          {/* 18+ Age Policy */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Strict 18+ Age Verification & Minor Protection
            </h2>
            <p className="mb-4">
              Underage gambling is strictly prohibited on <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>. We enforce zero-tolerance policies regarding minors participating in any real-money sports betting or casino gaming activity.
            </p>
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-base">
                <Lock className="w-5 h-5 text-rose-400" /> Mandatory Age Verification Protocols
              </div>
              <ul className="space-y-1.5 text-xs text-white/80 list-disc list-inside">
                <li>Every account applicant must be at least 18 years of age (or the legal age of majority in their jurisdiction).</li>
                <li>Our compliance desk actively audits accounts for indicators of underage usage.</li>
                <li>Any account discovered to be operated by an individual under 18 will be permanently terminated immediately, with all accumulated balances forfeited and funds returned to source.</li>
                <li>We advise parents to install parental filtering software (such as Net Nanny or CyberPatrol) on shared family mobile phones and home computers.</li>
              </ul>
            </div>
          </div>

          {/* Self-Regulation Tools */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Lotus365 Self-Regulation & Player Control Tools
            </h2>
            <p className="mb-4">
              We provide three robust mechanisms to ensure you maintain total control over your gaming activity:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <ShieldCheck className="w-6 h-6 text-[#F0C419]" />
                <h3 className="font-bold text-white text-base">1. Deposit Ceilings</h3>
                <p className="text-xs text-white/70">
                  Set daily, weekly, or monthly deposit caps (e.g., maximum ₹5,000 per week). Once set, deposit ceilings cannot be increased without a mandatory 7-day cooling-off review.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <Clock className="w-6 h-6 text-[#F0C419]" />
                <h3 className="font-bold text-white text-base">2. Cooling-Off Breaks</h3>
                <p className="text-xs text-white/70">
                  Take a temporary, voluntary timeout from betting. Choose a cooling-off period of 24 hours, 7 days, or 30 days during which login access is completely suspended.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <AlertTriangle className="w-6 h-6 text-[#F0C419]" />
                <h3 className="font-bold text-white text-base">3. Self-Exclusion</h3>
                <p className="text-xs text-white/70">
                  For players requiring extended detachment, we offer formal self-exclusion periods of 6 months, 1 year, or permanent lifetime account closure.
                </p>
              </div>
            </div>
          </div>

          {/* Diagnostic Questionnaire */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Problem Gambling Self-Assessment Diagnostic
            </h2>
            <p className="mb-4">
              Take a moment to evaluate your relationship with betting by answering these diagnostic assessment questions honestly:
            </p>
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F0C419] shrink-0 mt-0.5" />
                  <span>Do you ever bet more money than you can comfortably afford to lose without affecting basic living expenses?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F0C419] shrink-0 mt-0.5" />
                  <span>Do you feel an irresistible compulsion to "chase losses" immediately after an unlucky match or session?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F0C419] shrink-0 mt-0.5" />
                  <span>Have you ever borrowed money, taken credit loans, or sold household assets to finance your betting wallet?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F0C419] shrink-0 mt-0.5" />
                  <span>Has your betting activity ever caused conflicts, arguments, or distress with family members, spouses, or close friends?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F0C419] shrink-0 mt-0.5" />
                  <span>Do you ever lie or conceal the true amount of time and money you spend on online gaming?</span>
                </li>
              </ul>
              <p className="text-xs text-amber-300 pt-2 font-medium">
                If you answered "Yes" to two or more of these questions, we strongly encourage you to message our WhatsApp welfare desk immediately to apply deposit caps or activate self-exclusion.
              </p>
            </div>
          </div>

          {/* Professional Resources */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Independent Support Organizations & Helplines in India
            </h2>
            <p className="mb-4">
              If you or a loved one is experiencing distress related to compulsive gambling, confidential, non-judgmental professional assistance is available:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <div className="text-white font-bold text-sm">Vandrevala Foundation Helpline</div>
                <p className="text-xs text-white/70">24/7 free, confidential mental health and compulsive behavior counseling across India.</p>
                <div className="text-xs text-[#F0C419] font-mono">Helpline: +91 9999 666 555</div>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <div className="text-white font-bold text-sm">Hope Trust India</div>
                <p className="text-xs text-white/70">Asia’s leading addiction and behavioral wellness treatment network.</p>
                <div className="text-xs text-[#F0C419] font-mono">Website: hopetrustindia.com</div>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <div className="text-white font-bold text-sm">Gamblers Anonymous (GA) India</div>
                <p className="text-xs text-white/70">Fellowship of men and women sharing experience and mutual strength to recover.</p>
                <div className="text-xs text-[#F0C419] font-mono">Website: gamblersanonymous.org</div>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <div className="text-white font-bold text-sm">NIMHANS Behavioral Addiction Clinic</div>
                <p className="text-xs text-white/70">National Institute of Mental Health & Neuro Sciences specialized clinical services.</p>
                <div className="text-xs text-[#F0C419] font-mono">Helpline: 080-26995000</div>
              </div>
            </div>
          </div>

          {/* Family Budgeting Safeguards */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Family Budgeting & Household Financial Safeguards
            </h2>
            <p className="text-xs sm:text-sm text-white/80">
              Online entertainment should complement your lifestyle, not compromise family security. We urge all players to maintain completely segregated bank accounts for personal recreational expenditures. Never connect business payroll accounts or emergency family savings funds to online gaming platforms.
            </p>
          </div>

          {/* 10 Golden Rules of Bankroll Stewardship */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              The 10 Golden Rules of Sensible Bankroll Stewardship
            </h2>
            <p className="text-xs text-white/80">
              Responsible betting is a systematic practice grounded in emotional poise and mathematical realism. Adopt these ten non-negotiable guidelines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <span className="font-bold text-[#F0C419]">1. Establish Fixed Monthly Bankrolls</span>
                <p className="text-white/70">Wager only disposable income you have formally categorized as discretionary leisure entertainment.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <span className="font-bold text-[#F0C419]">2. The 2% Stake Max Principle</span>
                <p className="text-white/70">Never risk more than 1% to 2% of your total betting bankroll on any single cricket match or casino round.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <span className="font-bold text-[#F0C419]">3. Never Chase Losses</span>
                <p className="text-white/70">Chasing losses under emotional duress is the single greatest cause of catastrophic bankroll depletion.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <span className="font-bold text-[#F0C419]">4. Avoid Wagering Under Substance Influence</span>
                <p className="text-white/70">Alcohol and recreational substances impair cognitive risk assessment. Log out before social celebrations.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <span className="font-bold text-[#F0C419]">5. Track Every Transaction in a Ledger</span>
                <p className="text-white/70">Maintain an accurate balance sheet of all deposits, withdrawals, turnover, and net profits across all sessions.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <span className="font-bold text-[#F0C419]">6. Set Strict Session Timers</span>
                <p className="text-white/70">Cap your screen time to a maximum of 60 to 90 minutes per session to prevent mental fatigue.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <span className="font-bold text-[#F0C419]">7. Treat Winnings as Bonuses, Not Regular Income</span>
                <p className="text-white/70">Sports betting odds include variance. Never treat platform earnings as predictable monthly revenue.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <span className="font-bold text-[#F0C419]">8. Separate Recreation from Family Finances</span>
                <p className="text-white/70">Keep online gaming funds strictly divorced from household groceries, medical insurance, and child education funds.</p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Self-Exclusion Procedure */}
          <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-3">
            <h3 className="text-base font-bold text-[#F0C419]">
              Detailed 3-Step Self-Exclusion Procedure
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-xs text-white/80">
              <li><strong>Contact Welfare Desk:</strong> Send a message on WhatsApp to <a href="/contact" className="text-[#F0C419] underline">wa.link/880088</a> requesting voluntary temporary or permanent self-exclusion.</li>
              <li><strong>Confirm Account Details:</strong> State your username and confirm whether you prefer a cooling-off timeout (24h to 30 days) or complete multi-year exclusion.</li>
              <li><strong>Balance Settlement:</strong> Our financial desk will immediately audit your wallet balance and remit all remaining unpledged funds to your verified UPI/IMPS account before locking login access.</li>
            </ol>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Responsible Gaming
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I activate self-exclusion on my Lotus365 account?',
                  a: 'Simply send a WhatsApp message to our 24/7 support desk (wa.link/880088) stating: "Activate Self-Exclusion" along with your username and desired duration. Our team will immediately disable your login.'
                },
                {
                  q: 'Can I withdraw my remaining balance before self-excluding?',
                  a: 'Yes! Our financial desk will disburse 100% of your remaining withdrawable cash balance to your registered UPI or bank account prior to closing the account.'
                },
                {
                  q: 'Can I reverse a self-exclusion request if I change my mind?',
                  a: 'No. To protect players from impulsive decisions, self-exclusion periods are strictly irrevocable until the chosen timeframe has fully elapsed.'
                },
                {
                  q: 'Can family members request an account lock on behalf of a player?',
                  a: 'Yes. If a family member can verify relation and provide evidence of compulsive gambling distress, our compliance board will conduct a safety audit and suspend the account.'
                },
                {
                  q: 'Does Lotus365 notify players who have played continuously for long hours?',
                  a: 'Yes, our platform includes automated session reality-check reminders notifying you of the duration of your active gaming session.'
                },
                {
                  q: 'Can I restrict myself from specific game categories like Casino while keeping Sports?',
                  a: 'Yes! You can contact WhatsApp customer care to apply custom product-level locks, restricting live casino access while maintaining sports exchange functionality.'
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
      <PageCTA headline="Your Safety is Our Highest Priority" ctaLabel="Contact Welfare Desk on WhatsApp" />
    </Layout>
  </>
);
