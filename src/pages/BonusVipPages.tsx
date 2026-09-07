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
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  Star 
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL, getWhatsAppUrl } from '../data/landingData';

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

          {/* Strategy Section */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Wagering Strategy: Back vs. Lay Matched Betting for Turnover Clearance
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Clearing your 100% welcome bonus efficiently without risking your starting bankroll requires an analytical approach. Because Lotus365 operates as both a betting exchange and a traditional sportsbook, smart players utilize matched betting and hedging techniques. By backing a selection on our cricket exchange at odds of 2.00 or higher and simultaneously laying the identical outcome across another fixture, you can fulfill wagering turnover volume with virtually zero mathematical exposure to match variance.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Every single wager you place on live cricket, IPL matches, Premier League football, or high-RTP live casino games contributes directly toward your turnover target. Track your clearance progress anytime by querying your dedicated 24/7 WhatsApp concierge at <strong className="text-emerald-400">https://wa.link/880088</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0b3b2d]/50 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-[#F0C419]" /> Exchange Back/Lay Advantage</h4>
                <p className="text-xs text-white/70">Trade both sides of cricket overs and match odds to generate rollover volume without bleeding capital.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0b3b2d]/50 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#F0C419]" /> Zero Lock-in Security</h4>
                <p className="text-xs text-white/70">Your cash deposit is never held hostage. Forfeit the promotional credit at any time to execute an instant 2-minute UPI cashout.</p>
              </div>
            </div>
          </div>

          {/* Game Contribution Table */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Promotional Turnover Game Weighting Schedule</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Game / Market Category</th>
                    <th className="p-3.5">Turnover Weighting</th>
                    <th className="p-3.5">Clearance Efficiency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Cricket Match Odds (Exchange)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">100% Contribution</td>
                    <td className="p-3.5">Fastest clearance with tight back/lay spreads</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Football & Tennis Match Betting</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">100% Contribution</td>
                    <td className="p-3.5">Excellent for steady in-play hedging</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Teen Patti & Andar Bahar</td>
                    <td className="p-3.5 text-[#F0C419] font-semibold">50% Contribution</td>
                    <td className="p-3.5">Rapid multi-round accumulation in HD live studios</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Aviator & Crash Games</td>
                    <td className="p-3.5 text-[#F0C419] font-semibold">50% Contribution</td>
                    <td className="p-3.5">High RTP cashouts between 1.10x and 1.50x</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Roulette (Outside Even-Money)</td>
                    <td className="p-3.5 text-white/70">25% Contribution</td>
                    <td className="p-3.5">Subject to table limits and single-zero rules</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Expiry & Safety Protocols */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
            <h3 className="text-xl font-extrabold text-[#F0C419]">
              Understanding Bonus Expiry Protocols & Wagering Deadlines
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Every promotional credit issued under the Lotus365 Welcome Bonus package carries an industry-leading 30-day active clearance window. Unlike predatory offshore bookmakers that force players to wager aggressively within 48 to 72 hours, our player-first framework gives you four full weeks to select your preferred cricket matches, test live casino strategies, and pace your bankroll turnover safely.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              If at any point during your active wagering period you prefer to liquidate your cash balance, you maintain full freedom to forfeit remaining bonus tokens and execute an instant 2-minute UPI cashout via PhonePe, Google Pay, or Paytm directly to your bank account without penalty.
            </p>
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

          {/* Comprehensive Growth Models */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Comparative Bankroll Growth Models: ₹1,000 vs ₹5,000 vs ₹20,000
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              When depositing for the first time on Lotus365, your capital allocation sets your wagering trajectory. Consider three common opening deposit blueprints:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0b3b2d]/50 border border-white/10 space-y-2">
                <h4 className="font-bold text-emerald-400 text-sm">Conservative Starter (₹1,000)</h4>
                <p className="text-xs text-white/70">Deposit ₹1,000 + ₹1,000 bonus = ₹2,000 active bankroll. Ideal for casual cricket fans wanting to place ₹50 to ₹100 session stakes across 20+ IPL encounters.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0b3b2d]/50 border border-white/10 space-y-2">
                <h4 className="font-bold text-[#F0C419] text-sm">Strategic Pro (₹5,000)</h4>
                <p className="text-xs text-white/70">Deposit ₹5,000 + ₹6,000 bonus (120%) + ₹500 free bet = ₹11,500 total capital. Provides comfortable room for exchange trading, hedging, and live casino sessions.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0b3b2d]/50 border border-white/10 space-y-2">
                <h4 className="font-bold text-amber-300 text-sm">High-Roller VIP (₹20,000)</h4>
                <p className="text-xs text-white/70">Deposit ₹20,000 + ₹15,000 max bonus = ₹35,000 bankroll. Unlocks instant Silver VIP status, private WhatsApp manager, higher limits, and priority 2-minute IMPS cashouts.</p>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Regardless of which bracket you select, your deposited funds remain 100% yours. All deposits are backed by segregated Indian banking reserves and instant automated credit upon sending your UPI UTR screenshot to our WhatsApp desk.
            </p>
          </div>

          {/* Step-by-Step Activation Guide */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white">Step-by-Step First Deposit Activation on WhatsApp</h3>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0C419] text-[#14614C] font-black flex items-center justify-center shrink-0 text-xs">1</div>
                <div><strong className="text-white">Connect via Official WhatsApp:</strong> Tap the WhatsApp button or navigate to https://wa.link/880088 to message our verified 24/7 team.</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0C419] text-[#14614C] font-black flex items-center justify-center shrink-0 text-xs">2</div>
                <div><strong className="text-white">Request Active QR Code:</strong> Inform your concierge of your intended deposit amount to receive a fresh merchant UPI handle or QR code.</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0C419] text-[#14614C] font-black flex items-center justify-center shrink-0 text-xs">3</div>
                <div><strong className="text-white">Pay via PhonePe / GPay / Paytm:</strong> Transfer funds securely using your preferred mobile banking app and share the 12-digit UTR confirmation.</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0C419] text-[#14614C] font-black flex items-center justify-center shrink-0 text-xs">4</div>
                <div><strong className="text-white">Instant Credential & Bonus Delivery:</strong> Within 30 seconds, your credentials and matched bonus are activated, allowing immediate web play without app installs.</div>
              </div>
            </div>
          </div>

          {/* Staking Plans & Risk Management */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Risk-Managed Staking Plans for First Deposit Capital Preservation
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Deploying an augmented opening bankroll demands disciplined bankroll governance. Professional exchange bettors divide their total starting balance into 40 to 50 equal betting units. For example, on a ₹10,000 augmented bankroll, a single unit represents ₹200 to ₹250. This conservative unit sizing insulates your capital from adverse match variance, enabling you to weather unexpected match upsets while steadily fulfilling turnover targets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-1">
                <h4 className="font-bold text-white text-sm">Fixed Percentage Staking</h4>
                <p className="text-xs text-white/70">Wager between 1.5% and 3.0% of your total balance per cricket match selection to guarantee prolonged table presence.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-1">
                <h4 className="font-bold text-white text-sm">In-Play Green Book Hedging</h4>
                <p className="text-xs text-white/70">Lock in balanced profits across both team outcomes once match odds shift in your favor during live play.</p>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Every deposit made on Lotus365 is verified manually by dedicated human account managers on WhatsApp. We never deploy automated chatbots for banking transactions, guaranteeing personalized financial service from your very first deposit.
            </p>
          </div>

          {/* Capital Allocation Matrix */}
          <div className="p-6 rounded-2xl bg-[#0b3b2d]/40 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-[#F0C419]">Capital Allocation Matrix: Multi-Match Wagering vs Single Stakes</h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              A common pitfall among inexperienced sports bettors is staking their entire first deposit bonus balance on a single high-profile match. While this offers short-term excitement, mathematical variance heavily penalizes concentrated risk. Spread your promotional capital across at least 10 to 15 distinct betting markets—such as top team batsman, total match sixes, first 6-overs session runs, and match winner.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              By diversifying your stake allocation, individual upsets have negligible impact on your overall equity. Furthermore, our cricket exchange allows you to trade both sides of live price swings, locking in guaranteed green book profits across fluctuating match odds before game conclusion.
            </p>
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
                {
                  q: 'Can I deposit in cryptocurrency like USDT for the first deposit bonus?',
                  a: 'Yes, Lotus365 supports USDT TRC-20 deposits alongside Indian UPI banking. When depositing in crypto, our finance desk applies real-time INR exchange conversion rates and immediately activates your tier match bonus.'
                },
                {
                  q: 'Does placing exchange lay bets count towards the first deposit bonus turnover?',
                  a: 'Yes! Both back and lay wagers on the Lotus365 Cricket Exchange contribute 100% toward meeting your wagering turnover targets, providing ultimate flexibility in clearing your bonus safely.'
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

          {/* Lifetime Commission Architecture */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              The Multi-Tier Referral Lifetime Commission Matrix (Passive Income Architecture)
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              At Lotus365, we recognize that our community is our greatest marketing asset. Unlike standard one-off referral schemes that pay a trivial flat bonus, the Lotus365 Referral Program offers ongoing lifetime revenue sharing. Every time your referred contacts wager on cricket exchange markets, spin the roulette wheel, or play Teen Patti, you earn a percentage of platform net turnover or rake.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Referral Tier</th>
                    <th className="p-3.5">Active Referred Friends</th>
                    <th className="p-3.5">Immediate Cash Bonus</th>
                    <th className="p-3.5">Lifetime Commission</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Tier 1: Community Partner</td>
                    <td className="p-3.5">1 – 5 Friends</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹500 per friend</td>
                    <td className="p-3.5">2.5% Net Turnover Share</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Tier 2: Elite Influencer</td>
                    <td className="p-3.5">6 – 20 Friends</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹750 per friend</td>
                    <td className="p-3.5">4.0% Net Turnover Share</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Tier 3: VIP Master Agent</td>
                    <td className="p-3.5">21+ Friends</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">₹1,000 per friend</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">6.0% Lifetime Weekly Revenue Share</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Commissions are calculated automatically each Monday morning and credited directly to your main wallet balance. You can withdraw your referral earnings instantly via UPI in under two minutes or deploy them directly into sports exchange trading.
            </p>
          </div>

          {/* Referral Anti-Syndicate Integrity Policy */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-2">
            <h4 className="font-bold text-[#F0C419] text-base">Referral Partner Verification & Fraud Shield</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              To safeguard our honest network of affiliates, Lotus365 deploys continuous multi-accounting detection algorithms. Referral earnings generated through genuine word-of-mouth recommendations, social media channels, and private group chats are cleared with 100% automated settlement every Monday morning via instant UPI bank transfers.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
            <h3 className="text-xl font-bold text-white">Integrity Guidelines & Anti-Abuse Standards</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              To maintain the economic viability of our generous referral program, self-referral through proxy accounts, duplicate WhatsApp numbers, or shared device footprints is strictly prohibited. All referred players must be authentic, unique individuals who complete their own initial deposit of ₹500 or more. Our automated compliance audit runs continuously to guarantee authentic community expansion.
            </p>
          </div>

          {/* Network Reach Strategy */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Maximizing Network Reach: How Top Affiliates Earn Consistent Passive Income
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Leading sports enthusiasts, Telegram cricket tipsters, and WhatsApp group administrators leverage the Lotus365 Referral Program to generate reliable weekly income streams. Because Lotus365 delivers 2-minute UPI cashouts and authentic exchange odds, referred members remain active for months and years, compounding your weekly revenue share distributions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-1">
                <h4 className="font-bold text-[#F0C419] text-sm">Transparent Real-Time Dashboard</h4>
                <p className="text-xs text-white/70">Request complete weekly reports showing referred member active volume, platform turnover, and generated commission payouts.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-1">
                <h4 className="font-bold text-[#F0C419] text-sm">Weekly Automated Monday Payouts</h4>
                <p className="text-xs text-white/70">Commissions settle like clockwork every Monday noon directly to your UPI ID without invoice delays or withdrawal fees.</p>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Getting started takes less than 60 seconds. Message our official desk at https://wa.link/880088 and request your customized referral tracking identifier to start sharing with your sports network today.
            </p>
          </div>

          {/* Conversion Channels */}
          <div className="p-6 rounded-2xl bg-black/25 border border-white/10 space-y-3">
            <h3 className="text-xl font-extrabold text-[#F0C419]">
              Dedicated Affiliate Tracking Infrastructure & Real-Time Auditing
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Every referral partner on Lotus365 is equipped with a private tracking ID linked directly to our core exchange ledger. When your invited contacts place back or lay bets on IPL cricket, spin the roulette wheel, or cash out on Aviator, turnover metrics are recorded with cryptographic timestamps. You can query your updated earnings anytime on WhatsApp at https://wa.link/880088 and receive your full commission payout every Monday noon with zero deduction fees.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Our partner support desk operates 24/7 to assist high-volume community leaders with promotional banners, custom odds links, and localized Telegram creatives tailored for Indian sports bettors.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0b3b2d]/40 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-[#F0C419]">Affiliate Conversion Techniques: Telegram, WhatsApp & Social Media</h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Successful Lotus365 referral partners actively share educational content, live match previews, and toss analysis with their personal networks. Highlighting our instant mobile play requirement, 2-minute UPI cashouts, and transparent WhatsApp customer support builds immediate trust with Indian sports fans who are tired of offshore betting sites with complicated KYC procedures and frozen withdrawals.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              When your contacts see proof of sub-second exchange execution and instant banking settlements, conversion rates consistently exceed 45%. Request customized marketing graphics and promotional copy from your affiliate manager on WhatsApp to accelerate your weekly commission earnings.
            </p>
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

          {/* Rebate Formula & Architecture */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Weekly Net Loss Rebate Mechanics & Mathematical Formula
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Variance is an undeniable aspect of sports betting and casino gaming. Even the sharpest cricket analysts occasionally endure unfavorable umpire calls, dropped catches, or unlucky wicket dismissals. The Lotus365 Cashback Shield is designed to soften the impact of variance by automatically returning a significant percentage of your weekly net losses back into your wallet every single Monday.
            </p>
            <div className="p-5 rounded-2xl bg-black/30 border border-white/10 space-y-2">
              <div className="text-xs font-mono text-[#F0C419]">
                Cashback Formula: (Weekly Total Stakes Won - Weekly Total Stakes Lost) × Rebate Tier % = Monday Payout
              </div>
              <p className="text-xs text-white/80">
                <strong>Transparent Settlement:</strong> If your total losses across cricket, casino, and crash games over a Monday-to-Sunday cycle exceed your total winnings by ₹10,000, a Gold VIP member receiving 10% cashback receives an automatic, zero-wager ₹1,000 cash credit directly to their betting wallet every Monday at 12:00 PM IST.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Player Loyalty Tier</th>
                    <th className="p-3.5">Sports Exchange Rebate</th>
                    <th className="p-3.5">Live Casino & Slots Rebate</th>
                    <th className="p-3.5">Wagering Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Bronze Member</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">5% Weekly Rebate</td>
                    <td className="p-3.5">5% Weekly Rebate</td>
                    <td className="p-3.5 text-emerald-400 font-bold">0x (Instant Cashout)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Silver VIP</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">7.5% Weekly Rebate</td>
                    <td className="p-3.5">7.5% Weekly Rebate</td>
                    <td className="p-3.5 text-emerald-400 font-bold">0x (Instant Cashout)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Gold VIP</td>
                    <td className="p-3.5 text-[#F0C419] font-semibold">10% Weekly Rebate</td>
                    <td className="p-3.5">10% Weekly Rebate</td>
                    <td className="p-3.5 text-emerald-400 font-bold">0x (Instant Cashout)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Black Card Elite</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">15% Weekly Rebate</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">15% Weekly Rebate</td>
                    <td className="p-3.5 text-emerald-400 font-bold">0x (Instant Cashout)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Crucially, unlike offshore bookmakers that apply deceptive 20x rollover hurdles to cashback credits, Lotus365 cashback is 100% pure liquid cash with zero wagering strings attached. You can withdraw your rebate funds immediately via UPI or use them to take fresh positions on upcoming matches.
            </p>
          </div>

          {/* Psychological Defense & Staking Discipline */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-2">
            <h4 className="font-bold text-[#F0C419] text-base">Fair Net Loss Calculation Transparency Guarantee</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Every Sunday midnight, our automated system tallies your aggregate turnover across all sports and casino categories. If variance has resulted in a net negative balance for the week, your calculated tier rebate percentage is transferred directly into your primary wallet at 12:00 PM IST on Monday, with immediate withdrawal clearance.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Psychological Benefits of Cashback: Eliminating Tilt & Bankroll Depletion
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Emotional tilt is the leading cause of capital depletion among online sports bettors. When unexpected match results occur, players often fall into the trap of revenge betting with erratic stakes. The Lotus365 Weekly Cashback Shield functions as a psychological safety net, providing guaranteed replenishment every Monday.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1">Guaranteed Capital Return</h4>
                <p className="text-xs text-white/70">Know in advance that 5% to 15% of any net loss will be refunded directly into your wallet with zero wagering strings.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1">Fresh Start Every Monday</h4>
                <p className="text-xs text-white/70">Re-enter the market each week with clear analytical focus, fortified by refunded cash ready for upcoming cricket fixtures.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1">Zero Claim Paperwork</h4>
                <p className="text-xs text-white/70">Rebates are calculated and credited automatically by our core finance engine. No tickets, claims, or manual requests required.</p>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Whether you wager primarily on the Cricket Exchange, Live Casino Teen Patti tables, or high-octane Aviator crash rounds, your net losses are automatically aggregated under one unified rebate pool.
            </p>
          </div>

          {/* Comparative Rebate Analysis */}
          <div className="p-6 rounded-2xl bg-black/25 border border-white/10 space-y-3">
            <h3 className="text-xl font-extrabold text-[#F0C419]">
              Risk-Free Bankroll Replenishment & Fair Play Standards
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Unlike offshore bookmakers that apply deceptive wagering requirements to refund promotions, Lotus365 ensures your weekly cashback rebate is 100% unrestricted liquid cash. Once credited on Monday at 12:00 PM IST, you have the total freedom to cash out the full rebate sum directly to your bank account via UPI in under two minutes or deploy it toward high-confidence cricket selections.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              All net loss computations are transparent and audited against exchange records. There are no complicated opt-in forms or hidden claim codes required; our financial system calculates and credits your rebate automatically.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0b3b2d]/40 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-[#F0C419]">Comparative Analysis: Liquid Cash Rebates vs Promotional Free Bets</h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Many online betting platforms advertise "100% Risk-Free Bets" or "Cashback Insurances," only to credit losing refunds in the form of restrictive free bet vouchers with minimum odds thresholds of 3.00+ and mandatory 15x turnover. If you fail to hit those inflated odds within 48 hours, your rebate vanishes.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Lotus365 completely reimagines player retention with pure liquid cash rebates. The cashback credited to your wallet every Monday has zero turnover restrictions, zero minimum odds hurdles, and zero withdrawal limits. You can immediately withdraw the entire rebate sum straight to your Google Pay or PhonePe UPI handle, or use it to explore live exchange markets at your own pace.
            </p>
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

          {/* The 5 Tiers Breakdown */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              The Five Prestigious VIP Tiers: Bronze, Silver, Gold, Platinum, Black Card
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Every bet you place on Lotus365 contributes toward your loyalty tier ranking. As your monthly volume grows, you advance through our multi-stage VIP Club, unlocking bespoke privileges, personal account managers, enhanced withdrawal ceilings, and invitations to international sporting events.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
                <h4 className="font-bold text-white text-base flex items-center gap-2"><Star className="w-5 h-5 text-slate-400" /> Bronze & Silver Tiers</h4>
                <p className="text-xs text-white/70 leading-relaxed">The foundation of our rewards club. Enjoy 5% to 7.5% weekly net loss cashback, standard 2-minute UPI cashouts, and 24/7 dedicated human WhatsApp support with zero automated bot queues.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-[#F0C419]/30 space-y-2">
                <h4 className="font-bold text-[#F0C419] text-base flex items-center gap-2"><Crown className="w-5 h-5 text-[#F0C419]" /> Gold & Platinum Tiers</h4>
                <p className="text-xs text-white/70 leading-relaxed">For seasoned exchange traders. Receive up to 10% cashback, ₹25,00,000 daily withdrawal limits, customized odds spreads on high-stakes cricket matches, and surprise festive Diwali gift boxes.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-r from-black/50 via-[#0b3b2d] to-black/50 border border-[#F0C419]/50 space-y-2">
              <h4 className="text-base font-extrabold text-[#F0C419] flex items-center gap-2"><Trophy className="w-5 h-5 text-[#F0C419]" /> Dedicated Concierge Desk & Private Table Limits</h4>
              <p className="text-xs text-white/80 leading-relaxed">
                VIP members are assigned a private senior relationship manager on WhatsApp. Need a custom betting ceiling on a high-profile IPL final? Looking to execute a multi-lakh IMPS bank wire in under five minutes? Your VIP manager oversees all financial logistics with discreet white-glove precision.
              </p>
            </div>
          </div>

          {/* Luxury Hospitality & Live Event Access */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
            <h3 className="text-xl font-bold text-white">VIP Hospitality & Exclusive Tournament Perks</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Beyond financial advantages, our top-tier VIP Club members enjoy real-world luxury hospitality. We regularly host our Platinum and Black Card patrons at premium stadium corporate hospitality boxes during the Indian Premier League, ICC Cricket World Cups, and international bilateral series in India, Dubai, and the United Kingdom.
            </p>
          </div>

          {/* High-Stakes Order Books */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Custom Wagering Limits & Deep High-Stakes Cricket Order Books
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Standard betting sites impose restrictive stake limits that handicap serious exchange traders during major cricket fixtures. At Lotus365, our VIP Club unlocks direct liquidity matching. If you wish to back or lay a position of ₹5,00,000 or more on an IPL match or Test series, our VIP trading desk facilitates deep institutional order book liquidity, matching your position with zero market slippage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-1">
                <h4 className="font-bold text-[#F0C419] text-sm">Discreet Financial Execution</h4>
                <p className="text-xs text-white/70">Large withdrawals are routed through high-priority corporate banking channels with end-to-end encryption and total confidentiality.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-1">
                <h4 className="font-bold text-[#F0C419] text-sm">Tailored Festival Bonuses</h4>
                <p className="text-xs text-white/70">Celebrate Diwali, IPL Finals, and New Year with exclusive high-roller reload incentives, custom gadget rewards, and luxury hampers.</p>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              To discuss custom staking arrangements or fast-track tier qualifications, message our senior VIP team directly on WhatsApp at <strong className="text-emerald-400">https://wa.link/880088</strong>.
            </p>
          </div>

          {/* Real-World VIP Experiences */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
            <h4 className="font-bold text-[#F0C419] text-base">VIP Event Invitations & Tailored Celebration Packages</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Lotus365 deeply respects and values the enduring loyalty of our premier Indian gaming community. Throughout the sporting calendar, our VIP managers arrange complimentary stadium hospitality, 5-star hotel accommodations, and private airport transfers for top patrons attending marquee cricket tournaments and international sports events.
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              Additionally, celebrate personal milestones such as birthdays, anniversaries, and Diwali with custom cash bonuses and luxury hampers curated exclusively by our executive management desk.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black/25 border border-white/10 space-y-3">
            <h3 className="text-xl font-extrabold text-[#F0C419]">
              Executive Concierge Support & Bespoke Banking Channels
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              At Lotus365, VIP status is a commitment to exemplary service. Gold, Platinum, and Black Card members are assigned dedicated relationship managers reachable around the clock on private WhatsApp channels. Need a custom betting ceiling on a high-profile IPL clash? Looking to execute a multi-lakh IMPS wire transfer in under two minutes? Your private concierge handles every request with utmost discretion and efficiency.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Additionally, VIP players receive personalized birthday bonuses, festive Diwali rewards, and exclusive invites to corporate hospitality suites at major cricket tournaments across India and the UAE.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0b3b2d]/40 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-[#F0C419]">Corporate Hospitality & Real-World High-Roller Experiences</h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Our VIP relationship managers curate world-class hospitality experiences that transcend online betting. Gold and Platinum VIP members receive invitations to all-inclusive VIP stadium lounges during marquee IPL matches, India vs Pakistan World Cup clashes, and international bilateral series. We arrange luxury hotel accommodations, private ground transfers, and exclusive celebrity meet-and-greet sessions.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              During festive occasions such as Diwali, Eid, and New Year, Lotus365 delivers bespoke luxury hampers featuring premium tech devices, gold bullion tokens, and customized memorabilia straight to your residence. Your loyalty is met with genuine hospitality at every milestone.
            </p>
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
                Contact our VIP desk via WhatsApp at <a href={getWhatsAppUrl("Black Card Confidential Inscription Request")} target="_blank" rel="noopener noreferrer" className="text-[#F0C419] font-bold underline">Official VIP WhatsApp</a> and state: <em>"Black Card Confidential Inscription Request"</em>. A Senior Director will review your betting turnover and provide a custom onboarding package within two hours.
              </p>
            </div>
          </div>

          {/* Black Card Elite Membership */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              By-Invitation-Only Elite Membership Criteria & Auditing
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              The Lotus365 Black Card represents the pinnacle of private gaming privileges in India. Membership cannot be purchased; it is granted exclusively by invitation from our Board of Directors to our most distinguished high-volume sports traders and high-stakes casino patrons. Each prospective Black Card holder undergoes discreet financial auditing to guarantee total platform liquidity and seamless transaction execution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-[#F0C419]/40 space-y-2">
                <h4 className="font-bold text-[#F0C419] text-sm">Unlimited Cashout Limits</h4>
                <p className="text-xs text-white/70">Zero transaction or daily withdrawal ceilings. Cash out ₹10,00,000, ₹50,00,000, or more via multi-channel IMPS wires with dedicated treasury reserve clearance.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-[#F0C419]/40 space-y-2">
                <h4 className="font-bold text-[#F0C419] text-sm">Zero Slippage Liquidity Desk</h4>
                <p className="text-xs text-white/70">Execute massive back and lay wagers directly into deep international exchange order books without moving the market price or encountering bet rejection.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-[#F0C419]/40 space-y-2">
                <h4 className="font-bold text-[#F0C419] text-sm">Personal Wealth Concierge</h4>
                <p className="text-xs text-white/70">Direct 24/7 hotline to a dedicated senior account executive catering to custom betting markets, private live casino tables, and luxury gifting.</p>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              If you consider yourself a high-stakes player and maintain monthly exchange betting turnover exceeding ₹50,00,000, reach out to our senior verification desk at <strong className="text-emerald-400">https://wa.link/880088</strong> to submit an expedited portfolio review for Black Card consideration.
            </p>
          </div>

          {/* Bespoke Table Limits & Salon Privé */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
            <h3 className="text-xl font-bold text-white">Private Salon Privé & Live Casino Custom Limits</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Black Card members enjoy exclusive access to private single-seat Salon Privé tables in Evolution Gaming and Ezugi live casino suites. You dictate the pace of the shuffle, request deck changes at your discretion, and wager stakes ranging up to ₹10,00,000 per round on Live Blackjack, Baccarat, and European Roulette with zero public spectator visibility.
            </p>
          </div>

          {/* Treasury & Clearance Architecture */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-2">
            <h4 className="font-bold text-[#F0C419] text-base">Discreet High-Roller Financial Settlement Channels</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Black Card members benefit from dedicated multi-channel IMPS corporate rails that bypass public payment queues entirely. Seven-figure settlements are processed with complete privacy, encrypted audit logs, and instantaneous verification via your personal senior wealth manager on WhatsApp.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Institutional Liquidity Clearance & Dedicated Treasury Routing
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Operating at the highest levels of sports exchange trading requires banking infrastructure that matches your operational scale. Lotus365 Black Card holders benefit from dedicated corporate treasury routing, connecting directly with our liquidity partners to clear seven-figure settlements with guaranteed 2-minute execution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-[#F0C419]/30 space-y-1">
                <h4 className="font-bold text-white text-sm">Zero Daily Withdrawal Caps</h4>
                <p className="text-xs text-white/70">Withdraw ₹10,00,000, ₹25,00,000, or more in single transactions without arbitrary frequency restrictions or administrative hold periods.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-[#F0C419]/30 space-y-1">
                <h4 className="font-bold text-white text-sm">Direct WhatsApp Executive Line</h4>
                <p className="text-xs text-white/70">Direct access to our Chief Financial Officer and Senior Risk Management desk for bespoke sports wagering arrangements.</p>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              The Lotus365 Black Card is India's most coveted private gaming credential, embodying the utmost standards in security, speed, and bespoke service.
            </p>
          </div>

          {/* Private Syndicates Architecture */}
          <div className="p-6 rounded-2xl bg-black/25 border border-white/10 space-y-3">
            <h3 className="text-xl font-extrabold text-[#F0C419]">
              Private Staking Limits & Uncapped Wealth Management Services
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              For high-stakes patrons and private trading syndicates operating institutional-size bankrolls, Lotus365 Black Card membership provides customized OTC (Over-The-Counter) trading desks. If your exchange strategy requires taking seven-figure positions on specialized series outrights, player performance index markets, or multi-match accumulators, our chief trading officer coordinates dedicated counterpart liquidity to match your orders instantly.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              All transactions remain strictly confidential with 256-bit encrypted data silos and segregated merchant banking rails. To initiate a private consultation regarding Black Card OTC execution, connect with our executive desk on WhatsApp at https://wa.link/880088.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0b3b2d]/40 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-[#F0C419]">Private Staking Syndicates & Customized Hedging Protocols</h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              For ultra-high-net-worth patrons and private trading syndicates operating institutional-size bankrolls, Lotus365 Black Card membership provides customized OTC (Over-The-Counter) trading desks. If your exchange strategy requires taking seven-figure positions on specialized series outrights, player performance index markets, or multi-match accumulators, our chief trading officer coordinates dedicated counterpart liquidity to match your orders instantly.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              All transactions remain strictly confidential with 256-bit encrypted data silos and segregated merchant banking rails. To initiate a private consultation regarding Black Card OTC execution, connect with our executive desk on WhatsApp at https://wa.link/880088.
            </p>
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
