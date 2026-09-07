import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { 
  Crown, 
  Gift, 
  Percent, 
  HelpCircle, 
  CheckCircle2, 
  Zap, 
  Trophy, 
  Award, 
  Clock 
} from 'lucide-react';

const bonusRelated = [
  { href: '/register', label: 'Register Free', description: 'Get your WhatsApp ID in 2 minutes' },
  { href: '/how-to-deposit', label: 'How to Deposit', description: 'Fund your account via UPI' },
  { href: '/vip-club', label: 'VIP Club', description: 'Exclusive member rewards' },
  { href: '/referral-bonus', label: 'Referral Bonus', description: 'Earn by inviting friends' },
];

export const WelcomeBonusPage: React.FC = () => (
  <>
    <SEOHead 
      title="Lotus365 Welcome Bonus — 100% First Deposit Match up to ₹5,000" 
      description="Claim the official Lotus365 Welcome Bonus. 100% matching bonus on your first deposit up to ₹5,000 for cricket betting, live casino, and Aviator. Register free on WhatsApp!" 
      canonical="/welcome-bonus" 
      keywords="lotus365 welcome bonus, lotus365 new member bonus, lotus365 first deposit bonus, lotus365 bonus offer india, betting welcome bonus india, 100% deposit bonus" 
    />
    <Layout>
      <PageHero 
        badge="New Member Welcome Package" 
        title="Claim Your " 
        highlight="Welcome Bonus" 
        subtitle="Double your starting bankroll on India's premier betting exchange. Receive an instant 100% matching bonus up to ₹5,000 on your first deposit via WhatsApp with transparent, player-friendly rollover terms." 
        ctaLabel="Claim Bonus via WhatsApp" 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Welcome Promo Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 border border-[#F0C419]/40 text-center space-y-3">
            <Gift className="w-12 h-12 text-[#F0C419] mx-auto animate-bounce" />
            <h2 className="text-2xl sm:text-3xl font-black text-[#F0C419]">100% First Deposit Match Up to ₹5,000</h2>
            <p className="text-white/85 text-xs sm:text-sm max-w-xl mx-auto">
              Deposit ₹1,000, play with ₹2,000. Deposit ₹5,000, play with ₹10,000! Available to all newly registered Indian members making their first UPI deposit on Lotus365.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-emerald-300">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> 100% Match</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Instant Credit</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Valid on Cricket & Casino</span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              The Most Generous & Transparent Welcome Offer in India
            </h2>
            <p className="mb-4">
              Starting your online sports betting or live casino journey should be backed by real value, not deceptive marketing gimmicks. Many offshore bookmakers advertise enormous bonus figures like "300% up to ₹50,000," only to trap players with predatory 40x wagering hurdles, unrealistic 3-day deadlines, and hidden withdrawal caps that make cashing out winnings virtually impossible.
            </p>
            <p className="mb-4">
              At <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, we believe in straightforward, player-first hospitality. Our <strong>100% Welcome Bonus</strong> is designed to provide you with meaningful, playable bankroll leverage. Whether you intend to back your favorite IPL franchise on our <a href="/cricket-exchange" className="text-[#F0C419] font-semibold hover:underline">Cricket Exchange</a>, try high-RTP <a href="/aviator-game" className="text-[#F0C419] font-semibold hover:underline">Aviator crash rounds</a>, or play hands of <a href="/teen-patti" className="text-[#F0C419] font-semibold hover:underline">Live Teen Patti</a>, our welcome credits give you an immediate competitive edge.
            </p>
          </div>

          {/* Comparison Table */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Welcome Bonus Comparison: Lotus365 vs. Industry Norm</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Bonus Parameter</th>
                    <th className="p-3.5">Lotus365 Official Offer</th>
                    <th className="p-3.5">Typical Offshore Competitors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Deposit Match Percentage</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">100% Matching Bonus</td>
                    <td className="p-3.5">50% to 100%</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Maximum Bonus Cap</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹5,000 INR</td>
                    <td className="p-3.5">₹2,500 to ₹10,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Turnover / Rollover Requirement</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">5x (Sports) / 10x (Casino)</td>
                    <td className="p-3.5 text-rose-300">25x to 40x (Extremely High)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Validity Duration</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">30 Full Days</td>
                    <td className="p-3.5 text-rose-300">3 to 7 Days (Rushed)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Eligible Markets</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Cricket, Sports, Casino, Aviator</td>
                    <td className="p-3.5">Strictly limited to high-risk parlays</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Claim */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              How to Claim Your Welcome Bonus on WhatsApp
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Register on WhatsApp', desc: 'Message our official 24/7 desk (wa.link/880088) to receive your free Lotus365 betting ID credentials.' },
                { step: '2', title: 'Mention "Welcome Bonus"', desc: 'Inform your agent: "I want to claim the 100% Welcome Bonus on my first deposit."' },
                { step: '3', title: 'Deposit via UPI', desc: 'Complete your initial deposit of ₹100 or more using PhonePe, Google Pay, or Paytm.' },
                { step: '4', title: 'Instant Credit to Wallet', desc: 'Your agent will verify the UTR and immediately credit both your deposit and 100% bonus funds to your account.' },
              ].map((item) => (
                <div key={item.step} className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#F0C419] text-[#14614C] font-black flex items-center justify-center shrink-0 text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rollover Mathematics */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Understanding Rollover: How to Clear Your Bonus Profitably
            </h2>
            <p className="mb-4">
              Rollover (or wagering requirement) simply represents the cumulative total stake you must place before bonus winnings become fully withdrawable to your bank account:
            </p>
            <div className="p-5 rounded-2xl bg-black/30 border border-white/10 space-y-2">
              <div className="text-xs font-mono text-[#F0C419]">
                Formula: (Deposit Amount + Bonus Amount) × Turnover Multiplier = Wagering Goal
              </div>
              <p className="text-xs text-white/80">
                <strong>Practical Example:</strong> If you deposit ₹2,000 and receive a ₹2,000 welcome bonus, your combined balance is ₹4,000. With our player-friendly 5x sports rollover, your target turnover is <code>₹4,000 × 5 = ₹20,000</code>.
              </p>
              <p className="text-xs text-white/70">
                Because every single bet you place counts toward turnover (regardless of whether that bet wins or loses), an active player staking ₹500 across 40 cricket match overs will clear the rollover easily within a single weekend of IPL action!
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About the Welcome Bonus
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I withdraw my deposit money before completing the bonus rollover?',
                  a: 'You can forfeit the promotional bonus amount at any time if you wish to withdraw your real-money deposit balance without waiting to finish the remaining rollover.'
                },
                {
                  q: 'What is the minimum deposit required to qualify for the welcome bonus?',
                  a: 'The minimum qualifying deposit is just ₹100 via UPI (Google Pay, PhonePe, Paytm), ensuring that every new Indian player can enjoy bonus benefits.'
                },
                {
                  q: 'Do Aviator and Crash Games count toward the rollover?',
                  a: 'Yes, crash games like Spribe Aviator contribute 50% toward the wagering requirement, making them a swift way to build turnover alongside sports bets.'
                },
                {
                  q: 'Can I claim the welcome bonus more than once?',
                  a: 'No. To maintain fairness, the welcome bonus is strictly limited to one per player, household, and registered WhatsApp mobile number.'
                },
                {
                  q: 'How long do I have to clear the wagering requirements?',
                  a: 'You have a generous 30-day window from the date of credit to complete the turnover criteria.'
                },
                {
                  q: 'What other bonuses are available after the welcome offer?',
                  a: 'Once you complete your welcome promotion, you become eligible for our weekly cashback program, referral cash bonuses, and VIP Club reload rewards!'
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

      <RelatedPages pages={bonusRelated} />
      <PageCTA 
        headline="Claim Your 100% Welcome Bonus on WhatsApp" 
        subtext="Double your first deposit up to ₹5,000. Fast UPI deposits, transparent terms, and instant 2-minute cashouts!" 
        ctaLabel="Claim Bonus on WhatsApp Now" 
      />
    </Layout>
  </>
);

export const FirstDepositBonusPage: React.FC = () => (
  <>
    <SEOHead 
      title="First Deposit Bonus India — Boost Your First Lotus365 Deposit" 
      description="Maximize your first deposit on Lotus365 India. Enjoy tiered deposit match offers, free bet credits for cricket, and VIP starter perks. Register free via WhatsApp!" 
      canonical="/first-deposit-bonus" 
      keywords="first deposit bonus india, lotus365 first deposit, lotus365 deposit bonus, first bet bonus india, cricket first deposit offer, sign up bonus betting" 
    />
    <Layout>
      <PageHero 
        badge="First Deposit Booster" 
        title="First " 
        highlight="Deposit Bonus" 
        subtitle="Turn your very first Lotus365 deposit into maximum betting power. Explore our tiered first deposit brackets and discover how to optimize your opening bankroll for cricket, casino, and crash gaming." 
        ctaLabel="Claim First Deposit Bonus" 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Unlock Maximum Value from Your Opening Deposit
            </h2>
            <p className="mb-4">
              Your initial deposit on <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a> is more than just funding your account; it is your gateway to our elite loyalty ecosystem. We offer a progressive, tiered <strong>First Deposit Booster</strong> that rewards both cautious beginners and high-stakes veterans with tailored promotional balances.
            </p>
            <p className="mb-4">
              By aligning your first deposit with the right tier bracket, you can unlock up to <strong>150% in matching bonus credits</strong>, complimentary free bets for high-profile IPL matches, and automatic fast-track entry into the Lotus365 <a href="/vip-club" className="text-[#F0C419] font-semibold hover:underline">VIP Club</a>.
            </p>
          </div>

          {/* Tiered Matrix Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              First Deposit Bonus Brackets & Rewards
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Deposit Bracket</th>
                    <th className="p-3.5">Match Percentage</th>
                    <th className="p-3.5">Max Bonus</th>
                    <th className="p-3.5">Extra Perks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Starter Tier (₹100 – ₹999)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">100% Match</td>
                    <td className="p-3.5">₹999</td>
                    <td className="p-3.5 text-white/70">5x Sports Wagering</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Pro Bettor (₹1,000 – ₹4,999)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">120% Match</td>
                    <td className="p-3.5">₹5,000</td>
                    <td className="p-3.5 text-white/70">₹500 Free Bet on IPL + 5x Wagering</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">High Roller (₹5,000+)</td>
                    <td className="p-3.5 text-[#F0C419] font-extrabold">150% Match</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">₹15,000</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Instant VIP Silver Status + Dedicated RM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategic Bankroll Advice */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Strategy: How to Maximize Your First Deposit Booster
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h4 className="font-bold text-[#F0C419] text-base mb-1">1. Choose Your Tier Deliberately</h4>
                <p className="text-xs text-white/80">
                  Because the First Deposit Bonus is an exclusive one-time opportunity, deposit the maximum amount comfortable within your personal entertainment budget to lock in the highest tier match percentage.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h4 className="font-bold text-[#F0C419] text-base mb-1">2. Leverage the Cricket Exchange Back/Lay Advantage</h4>
                <p className="text-xs text-white/80">
                  Fulfill your turnover requirements on our <a href="/cricket-exchange" className="text-[#F0C419] underline">Cricket Exchange</a> by backing solid favorites or laying overpriced longshots with tight spreads, preserving your core principal while steadily chipping away at the turnover target.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h4 className="font-bold text-[#F0C419] text-base mb-1">3. Avoid Rushing Your Plays</h4>
                <p className="text-xs text-white/80">
                  With 30 days of validity, you do not need to place all wagers on a single day. Wait for high-confidence match conditions, verified pitch reports, and favorable team news before deploying your bonus funds.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About the First Deposit Bonus
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How soon after depositing will my first deposit bonus be credited?',
                  a: 'Your bonus is credited immediately alongside your initial deposit as soon as our WhatsApp financial desk validates your UPI payment UTR.'
                },
                {
                  q: 'Can I use my bonus on both cricket betting and live casino games?',
                  a: 'Yes! Your balance is unified across our platform, enabling you to wager on sports, casino tables, and crash games simultaneously.'
                },
                {
                  q: 'What happens if I don’t complete the turnover within 30 days?',
                  a: 'If the turnover target is not met within 30 days, the bonus credits expire, but your real-money deposit and any unlocked winnings remain safe and withdrawable.'
                },
                {
                  q: 'Is there any bonus code required to activate the promotion?',
                  a: 'No complicated promo codes are required. Simply inform your WhatsApp concierge when sending your deposit confirmation.'
                },
                {
                  q: 'Can I withdraw my winnings using UPI after meeting rollover?',
                  a: 'Yes! All winnings earned with bonus funds can be withdrawn via PhonePe, GPay, Paytm, or IMPS within 2 minutes once rollover criteria are met.'
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

      <RelatedPages pages={bonusRelated} />
      <PageCTA 
        headline="Claim Your First Deposit Bonus Now" 
        subtext="Message our WhatsApp team to fund your account and unlock up to 150% matching bonus credits today!" 
        ctaLabel="Get First Deposit Bonus" 
      />
    </Layout>
  </>
);

export const ReferralBonusPage: React.FC = () => (
  <>
    <SEOHead 
      title="Lotus365 Referral Program — Earn Real Cash by Inviting Friends" 
      description="Earn unlimited passive income with the Lotus365 Referral Program. Get flat cash bonuses and lifetime turnover commissions when your friends join and play. Register free!" 
      canonical="/referral-bonus" 
      keywords="lotus365 referral bonus, lotus365 refer a friend, lotus365 affiliate, invite friends betting india, earn money betting referral, betting affiliate program india" 
    />
    <Layout>
      <PageHero 
        badge="Referral & Affiliate Program" 
        title="Earn with " 
        highlight="Referral Bonus" 
        subtitle="Turn your social network into recurring passive earnings. Introduce friends and followers to Lotus365 via WhatsApp and earn instant cash rewards plus lifetime commission on their betting turnover." 
        ctaLabel="Get Your Referral Link on WhatsApp" 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Monetize Your Sports Network with India's #1 Betting Exchange
            </h2>
            <p className="mb-4">
              If you actively discuss cricket matches in WhatsApp groups, share IPL predictions on Telegram, or have friends who love live casino games, the <strong>Lotus365 Referral Program</strong> offers an effortless way to generate substantial secondary income.
            </p>
            <p className="mb-4">
              Unlike generic affiliate schemes that only pay on net player losses (which encourages bad advice), Lotus365 rewards you with <strong>both an upfront cash bounty and ongoing turnover-based commissions</strong>. Every time your referred peer places a wager on cricket, tennis, roulette, or Aviator, you earn a recurring share—regardless of whether they win or lose!
            </p>
          </div>

          {/* Earnings Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Referral Reward Structure & Earning Potential
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Referral Tier</th>
                    <th className="p-3.5">Upfront Bounty per Friend</th>
                    <th className="p-3.5">Turnover Commission</th>
                    <th className="p-3.5">Monthly Bonus Pool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Casual (1 – 5 Friends)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹500 Flat Cash</td>
                    <td className="p-3.5">0.5% Lifetime Turnover</td>
                    <td className="p-3.5">—</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Influencer (6 – 25 Friends)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹750 Flat Cash</td>
                    <td className="p-3.5">1.0% Lifetime Turnover</td>
                    <td className="p-3.5 text-emerald-400">₹5,000 Milestone Bonus</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Master Affiliate (26+ Friends)</td>
                    <td className="p-3.5 text-[#F0C419] font-extrabold">₹1,000 Flat Cash</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">1.5% – 2.0% Lifetime Turnover</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">₹25,000+ VIP Pool Share</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              How the Lotus365 Referral Process Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <div className="text-xl font-black text-[#F0C419] mb-1">01</div>
                <h4 className="font-bold text-white text-sm mb-1">Request Your Unique Referral Tag</h4>
                <p className="text-xs text-white/70">Message our WhatsApp desk. Your agent will assign a unique referral code or direct invite link tied to your profile.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <div className="text-xl font-black text-[#F0C419] mb-1">02</div>
                <h4 className="font-bold text-white text-sm mb-1">Share with Friends & Community</h4>
                <p className="text-xs text-white/70">Share your link across WhatsApp, Telegram, or Instagram. Explain our zero-fee UPI deposits and 2-minute cashouts.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <div className="text-xl font-black text-[#F0C419] mb-1">03</div>
                <h4 className="font-bold text-white text-sm mb-1">Friend Registers & Deposits</h4>
                <p className="text-xs text-white/70">Your friend creates their account and makes their first deposit (min ₹500 to qualify for the referral bounty).</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <div className="text-xl font-black text-[#F0C419] mb-1">04</div>
                <h4 className="font-bold text-white text-sm mb-1">Receive Instant Cash Payout</h4>
                <p className="text-xs text-white/70">Your ₹500–₹1,000 cash bonus is credited directly to your wallet, withdrawable immediately via UPI.</p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About the Referral Program
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Is there any limit to how many friends I can refer?',
                  a: 'No! There is absolutely no ceiling. You can refer 5 friends or 500 friends and earn bonuses on every single qualified participant.'
                },
                {
                  q: 'Do I have to bet the referral cash bonus before withdrawing it?',
                  a: 'No. Referral cash bounties are credited as real cash with zero turnover restrictions, meaning you can cash them out to your UPI immediately.'
                },
                {
                  q: 'Can I refer family members who live in the same house?',
                  a: 'To prevent fraudulent multi-accounting, referrals must be distinct individuals with their own mobile numbers and personal bank accounts.'
                },
                {
                  q: 'How frequently are turnover commissions disbursed?',
                  a: 'Turnover commissions are calculated every Sunday midnight and credited directly to your main wallet balance every Monday at 12:00 PM IST.'
                },
                {
                  q: 'What should my friend say when they contact WhatsApp?',
                  a: 'Your friend should provide your unique referral code or mention your registered username during their initial greeting to ensure the referral is properly linked.'
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

      <RelatedPages pages={bonusRelated} />
      <PageCTA 
        headline="Start Earning Passive Income Today" 
        subtext="Message our WhatsApp team to fetch your personal referral link and start receiving real cash bounties!" 
        ctaLabel="Get Referral Link on WhatsApp" 
      />
    </Layout>
  </>
);

export const CashbackOffersPage: React.FC = () => (
  <>
    <SEOHead 
      title="Weekly Betting Cashback India — Up to 15% Loss Protection on Lotus365" 
      description="Enjoy up to 15% weekly cashback on your sports and live casino betting at Lotus365 India. Automatic Monday payouts, zero rollover, real cash protection." 
      canonical="/cashback-offers" 
      keywords="cashback betting india, lotus365 cashback, weekly cashback betting, cricket cashback offer india, casino loss rebate, betting insurance india" 
    />
    <Layout>
      <PageHero 
        badge="Weekly Bankroll Protection" 
        title="Weekly " 
        highlight="Cashback Offers" 
        subtitle="Bet with complete peace of mind. Lotus365 returns up to 15% of your weekly net losses as real cash directly into your account every Monday. No complicated rollover traps." 
        ctaLabel="Learn More on WhatsApp" 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Real Cash Rebates: Because Every Bettor Deserves a Second Chance
            </h2>
            <p className="mb-4">
              In sports betting and casino games, variance is an inescapable reality. Even the most seasoned cricket analysts occasionally suffer an unlucky over or an unexpected batting collapse. At <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, we believe true customer loyalty means standing by our players during downswings.
            </p>
            <p className="mb-4">
              Our <strong>Weekly Cashback Program</strong> functions as an automatic financial cushion. Every Monday at 12:00 PM IST, our automated ledger calculates your net activity across all sports and casino games for the preceding seven days. A healthy percentage of your net losses is returned straight to your wallet as real, playable, and withdrawable cash.
            </p>
          </div>

          {/* Cashback Tier Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Cashback Percentage Tiers by VIP Rank
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Player Tier</th>
                    <th className="p-3.5">Sports Cashback</th>
                    <th className="p-3.5">Live Casino Cashback</th>
                    <th className="p-3.5">Wagering Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Bronze (Standard Member)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">5.0%</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">5.0%</td>
                    <td className="p-3.5 text-emerald-400">1x Turnover</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Silver VIP</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">7.5%</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">7.5%</td>
                    <td className="p-3.5 text-emerald-400">1x Turnover</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Gold VIP</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">10.0%</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">10.0%</td>
                    <td className="p-3.5 text-emerald-400">0x (Real Cash)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Platinum VIP</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">12.5%</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">12.5%</td>
                    <td className="p-3.5 text-emerald-400">0x (Real Cash)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#F0C419]">VIP Black Card</td>
                    <td className="p-3.5 text-[#F0C419] font-extrabold">15.0% Uncapped</td>
                    <td className="p-3.5 text-[#F0C419] font-extrabold">15.0% Uncapped</td>
                    <td className="p-3.5 text-emerald-400 font-bold">0x (Instant Cashout)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mathematical Calculation */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              How Net Loss is Calculated
            </h2>
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <div className="text-xs font-mono text-[#F0C419]">
                Formula: Net Loss = (Total Settled Bets - Total Winnings) - Claimed Promotional Bonuses
              </div>
              <p className="text-xs text-white/80">
                <strong>Scenario:</strong> During a major cricket tournament week, you place ₹50,000 in bets and win ₹30,000. Your net loss is ₹20,000. As a Gold VIP (10% rebate), our system automatically credits <code>₹20,000 × 10% = ₹2,000</code> straight into your account on Monday morning with zero wagering requirements!
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About Weekly Cashback
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Do I need to manually request my cashback on WhatsApp every week?',
                  a: 'No! Cashback is calculated programmatically and credited automatically to all eligible active accounts every Monday by 12:00 PM IST.'
                },
                {
                  q: 'Is there any maximum cap on how much cashback I can receive?',
                  a: 'For Standard and Silver accounts, weekly cashback is capped at ₹25,000. For Gold, Platinum, and Black Card members, cashback is 100% uncapped.'
                },
                {
                  q: 'Can I withdraw my cashback immediately via UPI?',
                  a: 'For Gold, Platinum, and Black Card members, cashback has 0x rollover and can be withdrawn immediately. For Bronze and Silver members, a simple 1x turnover is required.'
                },
                {
                  q: 'What games count toward cashback calculation?',
                  a: 'All settled bets across Cricket, Football, Tennis, Live Casino (Teen Patti, Andar Bahar, Roulette, Blackjack), and Spribe Aviator are factored into your weekly net calculation.'
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

      <RelatedPages pages={bonusRelated} />
      <PageCTA 
        headline="Play with Up to 15% Weekly Cashback Protection" 
        subtext="Never worry about tough weeks again. Register on WhatsApp and enjoy automatic Monday loss rebates!" 
        ctaLabel="Register for Cashback Protection" 
      />
    </Layout>
  </>
);

export const VipClubPage: React.FC = () => (
  <>
    <SEOHead 
      title="Lotus365 VIP Club — Elite High-Roller Rewards & Concierge Service" 
      description="Join India's most prestigious betting club. Lotus365 VIP members enjoy dedicated WhatsApp account managers, enhanced cashback, custom limits, and priority payouts." 
      canonical="/vip-club" 
      keywords="lotus365 vip club, lotus365 vip, lotus365 premium membership, vip betting india, vip casino india, high roller betting india" 
    />
    <Layout>
      <PageHero 
        badge="Elite Membership Tier" 
        title="Lotus365 " 
        highlight="VIP Club" 
        subtitle="Step into India’s most exclusive betting sanctuary. Experience bespoke luxury with dedicated WhatsApp account directors, uncapped cashouts, elevated market limits, and private live dealer suites." 
        ctaLabel="Inquire About VIP Status" 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              Bespoke Gaming Luxury for Discerning Indian High Rollers
            </h2>
            <p className="mb-4">
              At <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, high-volume players are not treated like algorithmic numbers in a database. The <strong>Lotus365 VIP Club</strong> is an invitation-tier loyalty program crafted to deliver the white-glove treatment you would expect from the world's premier casinos in Macau, London, or Las Vegas.
            </p>
            <p className="mb-4">
              From the moment you ascend to VIP status, you receive a direct private WhatsApp communication channel with a dedicated Senior Account Director who oversees your deposits, facilitates custom betting limits on cricket matches, and coordinates priority IMPS payouts in under 60 seconds.
            </p>
          </div>

          {/* VIP Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Crown className="w-6 h-6" />, title: 'Dedicated Personal Account Manager', desc: 'A dedicated senior concierge available 24/7 on private WhatsApp to handle your transactions and requests.' },
              { icon: <Clock className="w-6 h-6" />, title: 'Sub-60 Second Priority Payouts', desc: 'VIP cashouts skip all automated queues and are disbursed directly by senior financial officers.' },
              { icon: <Trophy className="w-6 h-6" />, title: 'Bespoke Cricket & Casino Limits', desc: 'Wager up to ₹25,00,000 per cricket match or live roulette spin without artificial platform ceilings.' },
              { icon: <Percent className="w-6 h-6" />, title: 'Enhanced Double Cashback', desc: 'Receive up to 12.5% weekly loss rebates credited every Monday morning as unencumbered cash.' },
            ].map((b) => (
              <div key={b.title} className="p-5 rounded-2xl bg-black/20 border border-white/10 hover:border-[#F0C419]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#F0C419]/20 flex items-center justify-center text-[#F0C419] mb-3">{b.icon}</div>
                <h3 className="text-base font-bold text-white mb-1.5">{b.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Tier Breakdown Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Lotus365 VIP Tier Hierarchy & Progression
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">VIP Tier</th>
                    <th className="p-3.5">Monthly Turnover Target</th>
                    <th className="p-3.5">Daily Cashout Ceiling</th>
                    <th className="p-3.5">Weekly Cashback</th>
                    <th className="p-3.5">Account Manager</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Silver</td>
                    <td className="p-3.5">₹5,00,000</td>
                    <td className="p-3.5">₹15,00,000</td>
                    <td className="p-3.5 text-emerald-400">7.5%</td>
                    <td className="p-3.5 text-white/70">Shared VIP Desk</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#F0C419]">Gold</td>
                    <td className="p-3.5">₹20,00,000</td>
                    <td className="p-3.5">₹25,00,000</td>
                    <td className="p-3.5 text-emerald-400">10.0%</td>
                    <td className="p-3.5 text-emerald-400">Dedicated Account RM</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-300">Platinum</td>
                    <td className="p-3.5">₹50,00,000</td>
                    <td className="p-3.5">₹50,00,000</td>
                    <td className="p-3.5 text-emerald-400">12.5%</td>
                    <td className="p-3.5 text-emerald-400">Senior Account Director</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Black Card</td>
                    <td className="p-3.5">By Invitation Only</td>
                    <td className="p-3.5 text-[#F0C419] font-extrabold">Unlimited</td>
                    <td className="p-3.5 text-[#F0C419] font-extrabold">15.0% Uncapped</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">Executive Suite 24/7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About the VIP Club
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I qualify for the Lotus365 VIP Club?',
                  a: 'VIP status is automatically awarded based on your monthly wagering volume. You can also request an account evaluation by messaging our WhatsApp VIP desk directly.'
                },
                {
                  q: 'Can I fast-track my VIP status with a large initial deposit?',
                  a: 'Yes! Players making an opening deposit of ₹1,00,000 or greater are immediately enrolled in Silver VIP status with full concierge privileges.'
                },
                {
                  q: 'Do VIP members get special odds on the cricket exchange?',
                  a: 'VIP members enjoy reduced commission rates (as low as 0%) on select cricket exchange markets, maximizing long-term profitability.'
                },
                {
                  q: 'How do I access VIP live dealer tables?',
                  a: 'Your Account Manager will grant you access to exclusive Salon Privé blackjack, baccarat, and roulette suites with high minimum bet limits.'
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
        { href: '/vip-black-card', label: 'VIP Black Card', description: 'The ultimate Lotus365 membership' },
        { href: '/cashback-offers', label: 'Cashback Offers', description: 'Weekly cashback for all members' },
        { href: '/cricket-betting', label: 'Cricket Betting', description: 'VIP tables and higher limits' },
        { href: '/live-casino', label: 'Live Casino', description: 'Exclusive VIP casino tables' },
      ]} />
      
      <PageCTA 
        headline="Elevate Your Game with Lotus365 VIP Privileges" 
        subtext="Enjoy dedicated managers, sub-60 second withdrawals, and higher limits. Apply for VIP status via WhatsApp!" 
        ctaLabel="Apply for VIP via WhatsApp" 
      />
    </Layout>
  </>
);

export const VipBlackCardPage: React.FC = () => (
  <>
    <SEOHead 
      title="Lotus365 VIP Black Card — Ultra-Exclusive High-Roller Membership" 
      description="The Lotus365 VIP Black Card is India's most prestigious betting membership. By invitation only — unlimited withdrawals, 15% uncapped cashback, private account director." 
      canonical="/vip-black-card" 
      keywords="lotus365 vip black card, lotus365 black card, lotus365 elite membership, vip black card india betting, high stakes cricket betting, ultra luxury betting" 
    />
    <Layout>
      <PageHero 
        badge="Invitation-Only Tier" 
        title="Lotus365 " 
        highlight="VIP Black Card" 
        subtitle="The zenith of Indian betting excellence. Reserved exclusively for elite high-stakes players, the Black Card delivers limitless liquidity, uncapped 15% weekly cashback, and bespoke concierge hospitality." 
        ctaLabel="Inquire About Black Card via WhatsApp" 
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
          
          {/* Elite Black Card Header Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0e0e17] via-[#161b26] to-[#0b1017] border-2 border-[#F0C419]/60 text-center space-y-4 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0C419]/10 rounded-full blur-3xl" />
            <Crown className="w-14 h-14 text-[#F0C419] mx-auto animate-pulse" />
            <div className="inline-block px-4 py-1 rounded-full bg-[#F0C419]/20 text-[#F0C419] text-xs font-black uppercase tracking-widest">
              By Exclusive Invitation Only
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">The Lotus365 Black Card</h2>
            <p className="text-white/75 text-xs sm:text-sm max-w-lg mx-auto">
              Reserved for the top 0.1% of high-volume sports bettors and casino patrons in India. Unmatched luxury, limitless liquidity, and white-glove financial treatment.
            </p>
          </div>

          {/* Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
              The Pinnacle of Indian Online Gaming
            </h2>
            <p className="mb-4">
              For distinguished individuals who operate at the highest echelons of sports trading and high-stakes casino play, standard betting platforms with restrictive daily withdrawal limits and automated customer tickets are utterly inadequate. The <strong>Lotus365 VIP Black Card</strong> was created specifically to eliminate every operational barrier.
            </p>
            <p className="mb-4">
              Black Card members enjoy <strong>limitless daily cashouts</strong>, bespoke betting limits exceeding ₹50,00,000 on marquee cricket fixtures, custom RTGS liquidity routing, and an uncapped <strong>15% weekly cashback rebate</strong> credited in cold hard cash every Monday.
            </p>
          </div>

          {/* Privileges Matrix */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              Exclusive Black Card Privileges & Privileges
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#F0C419] font-bold text-sm">
                  <Zap className="w-5 h-5" /> Unlimited Instant Withdrawals
                </div>
                <p className="text-xs text-white/70">Zero daily caps. Whether cashing out ₹10,00,000 or ₹1,00,00,000, funds are dispatched immediately via dedicated corporate banking lines.</p>
              </div>
              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#F0C419] font-bold text-sm">
                  <Percent className="w-5 h-5" /> 15% Uncapped Weekly Cashback
                </div>
                <p className="text-xs text-white/70">Receive 15% of net weekly losses returned in unencumbered real cash every Monday with zero turnover or wagering restrictions.</p>
              </div>
              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#F0C419] font-bold text-sm">
                  <Crown className="w-5 h-5" /> Personal Senior Account Director
                </div>
                <p className="text-xs text-white/70">Direct personal phone and WhatsApp connection to our highest-ranking executive operations team.</p>
              </div>
              <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#F0C419] font-bold text-sm">
                  <Award className="w-5 h-5" /> VIP Hospitality & Festival Hampers
                </div>
                <p className="text-xs text-white/70">Complimentary tickets to marquee cricket fixtures, luxury Diwali hampers, and bespoke international travel packages.</p>
              </div>
            </div>
          </div>

          {/* Qualification Protocol */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
              How to Inquire About Black Card Membership
            </h2>
            <p className="mb-4">
              Black Card status is formally granted by executive invitation. However, if you are a verified high-volume bettor moving significant monthly volume, you may request an immediate confidential portfolio review:
            </p>
            <div className="p-5 rounded-2xl bg-black/20 border border-[#F0C419]/30 space-y-3">
              <p className="text-xs text-white/85">
                Contact our VIP desk via WhatsApp at <a href="https://wa.link/880088" className="text-[#F0C419] font-bold underline">wa.link/880088</a> and state: <em>"Black Card Confidential Inscription Request"</em>. A Senior Director will review your betting turnover and provide a custom onboarding package within two hours.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#F0C419]" />
              Frequently Asked Questions About the VIP Black Card
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is the turnover requirement to qualify for the Black Card?',
                  a: 'Black Card membership is typically considered for players maintaining monthly betting volume of ₹1 Crore or higher across sports exchange or live casino markets.'
                },
                {
                  q: 'Can I withdraw large amounts via cryptocurrency as a Black Card member?',
                  a: 'Yes. Black Card holders can execute unlimited daily deposits and cashouts in USDT (TRC-20/BEP-20) with immediate blockchain confirmation.'
                },
                {
                  q: 'Are exchange commission rates waived for Black Card holders?',
                  a: 'Yes! Black Card members receive our absolute minimum 0% commission tier across all cricket and sports exchange betting markets.'
                },
                {
                  q: 'Is my financial privacy protected at the Black Card level?',
                  a: 'We adhere to the highest international data confidentiality standards. Your account details and high-stakes transactions are protected by end-to-end encryption and restricted executive access.'
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
        { href: '/vip-club', label: 'VIP Club', description: 'Standard VIP membership levels' },
        { href: '/cashback-offers', label: 'Cashback Offers', description: 'Weekly cashback program' },
        { href: '/contact', label: 'Contact VIP Desk', description: 'Apply for Black Card status' },
        { href: '/cricket-betting', label: 'Cricket Betting', description: 'Bet with maximum limits' },
      ]} />
      
      <PageCTA 
        headline="Inquire for Exclusive VIP Black Card Membership" 
        subtext="Experience limitless cashouts, 15% uncapped cashback, and executive concierge service. Connect with our VIP desk on WhatsApp!" 
        ctaLabel="Contact VIP Desk on WhatsApp" 
      />
    </Layout>
  </>
);
