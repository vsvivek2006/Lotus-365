import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { Trophy, Zap, Star, ShieldCheck, TrendingUp, Target, CheckCircle2, HelpCircle } from 'lucide-react';

const related = [
  { href: '/cricket-exchange', label: 'Cricket Exchange', description: 'P2P live match odds with 0% commission' },
  { href: '/ipl-betting', label: 'IPL Betting 2026', description: 'Bet on every IPL match live with top odds' },
  { href: '/t20-world-cup-betting', label: 'T20 World Cup Betting', description: 'International T20 betting markets' },
  { href: '/betting-tips', label: 'Cricket Betting Tips', description: 'Proven strategy & pitch analysis' },
  { href: '/how-to-deposit', label: 'How to Deposit', description: 'Instant UPI & IMPS deposit guide' },
  { href: '/2-minute-cashout', label: '2-Minute Cashout', description: 'Lightning-fast UPI withdrawals' },
];

const features = [
  { icon: <Trophy className="w-6 h-6" />, title: 'Best Odds Guaranteed', desc: 'Our peer-to-peer exchange model cuts out middleman bookmakers, delivering the highest payout odds across all global cricket fixtures.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Ball-by-Ball Live In-Play', desc: 'Wager live as the bowler runs in. Real-time sub-second odds feeds ensure you never miss fluctuating momentum shifts.' },
  { icon: <Star className="w-6 h-6" />, title: '0% Net Commission', desc: 'Unlike offshore sportsbooks that charge 5% to 10% platform vig, Lotus365 ensures zero commission on your cricket exchange winnings.' },
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Bank-Grade Security', desc: '256-bit SSL encrypted sessions combined with instant WhatsApp account recovery keep your funds and credentials protected.' },
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Deep Market Liquidity', desc: 'Backed by millions of active Indian sports traders, bets of any size from ₹100 to ₹10,00,000 are matched without delay.' },
  { icon: <Target className="w-6 h-6" />, title: '60+ Live Sub-Markets', desc: 'Session runs, player performance, next wicket dismissal method, boundary tallies, and player boundaries covered.' },
];

export const CricketBettingPage: React.FC = () => (
  <>
    <SEOHead
      title="Cricket Betting India — Live Cricket Odds, IPL & Match Exchange"
      description="Bet on live cricket matches with India's #1 cricket exchange Lotus365. Enjoy 0% commission, ball-by-ball in-play markets, instant UPI cashout in 2 minutes, and IPL 2026 odds. Register free on WhatsApp today!"
      canonical="/cricket-betting"
      keywords="cricket betting india, online cricket betting, cricket exchange live, best cricket odds, ipl betting 2026, session runs betting, live cricket match odds india"
    />
    <Layout>
      <PageHero
        badge="Live Cricket Betting 2026"
        title="India's Premier "
        highlight="Cricket Betting Exchange"
        subtitle="Experience high-liquidity cricket betting with 0% commission. Bet on IPL 2026, ICC Champions Trophy, Test match sessions, and global T20 leagues with guaranteed 2-minute UPI cashouts."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Feature Highlights Grid */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4 text-center">
              Why Lotus365 Is India's Undisputed Leader in Cricket Betting
            </h2>
            <p className="text-center text-white/80 max-w-3xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
              For millions of Indian sports enthusiasts, cricket is a passion. At <strong className="text-white">Lotus365</strong>, we treat cricket wagering with the precision it deserves. Operating via our official domain <a href="/" className="text-[#F0C419] hover:underline font-bold">lotus365officialid.com</a>, our exchange matches peer-to-peer liquidity so you always bet against real punters at true market prices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-5 rounded-2xl bg-black/25 border border-white/10 hover:border-[#F0C419]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#F0C419]/20 flex items-center justify-center text-[#F0C419] mb-3">{f.icon}</div>
                  <h3 className="text-base font-bold text-white mb-1.5">{f.title}</h3>
                  <p className="text-xs text-white/75 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deep-Dive: Comprehensive Cricket Markets */}
          <div className="p-8 rounded-3xl bg-black/20 border border-white/15 space-y-6 text-white/85 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Comprehensive Cricket Betting Markets Covered on Lotus365
            </h2>
            <p>
              Unlike traditional sportsbooks that limit you to basic match-winner outcomes, Lotus365 offers an exhaustive array of over 60 micro-markets for every televised match. Whether you are following international Test fixtures, bilateral ODIs, or high-intensity franchise tournaments like the <a href="/ipl-betting" className="text-[#F0C419] hover:underline font-semibold">Indian Premier League (IPL)</a>, our live board keeps you in complete control.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-base font-bold text-[#F0C419] mb-1">1. Match Winner & Outright Series Odds</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Back your favoured team to win the match, or lay against outcomes on the <a href="/cricket-exchange" className="text-[#F0C419] hover:underline">cricket exchange</a>. Odds fluctuate live from the opening toss through the final over based on real-time pitch behavior and wicket casualties.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-base font-bold text-[#F0C419] mb-1">2. Session Runs Betting (Khado & Lambi)</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    A staple of Indian cricket trading: predict whether a team will score over or under a projected benchmark across 6-over powerplays, 10-over segments, or full 20/50 over innings totals. Session bets settle instantaneously at the conclusion of the specified block.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-base font-bold text-[#F0C419] mb-1">3. Ball-by-Ball Live In-Play Markets</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Wager on what happens on the very next delivery: Dot ball, single, boundary 4, maximum 6, or a wicket. With sub-second latency feeds, you can capitalize on bowling matchups in real time.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-base font-bold text-[#F0C419] mb-1">4. Player Performance & Prop Bets</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Back key superstars like Virat Kohli, Rohit Sharma, or Jasprit Bumrah for Top Match Batsman, Top Bowler, Player of the Match, or total individual player runs (e.g. Over/Under 32.5 runs).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-base font-bold text-[#F0C419] mb-1">5. Fall of Next Wicket & Dismissal Mode</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Predict the exact score at which the current partnership will break, or bet on how the next batsman will be dismissed: Caught, Bowled, LBW, Run Out, or Stumped.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-base font-bold text-[#F0C419] mb-1">6. Total Boundaries & Sixes Specials</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Wager on total team sixes, total match fours, or whether both openers will strike at least one boundary in the first three overs. Perfect for high-scoring T20 shootouts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Odds Comparison Table */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Exchange Odds vs Traditional Bookmakers: Why Punters Win More on Lotus365
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Traditional bookmakers build a built-in house advantage (known as the "overround" or margin) of 8% to 15% into their odds, quietly depleting your returns. Because Lotus365 operates as a true peer-to-peer exchange, you get 100% pure market odds with 0% margin cut:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-black/40 text-[#F0C419] border-b border-white/20">
                    <th className="p-3.5">Market Outcome</th>
                    <th className="p-3.5">Lotus365 Exchange Odds</th>
                    <th className="p-3.5">Traditional Bookmaker</th>
                    <th className="p-3.5">Your Profit Difference (on ₹10,000 stake)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20 text-white/80">
                  <tr>
                    <td className="p-3.5 font-semibold text-white">India to Win vs Australia</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">1.92</td>
                    <td className="p-3.5 text-white/60">1.80</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">+₹1,200 Extra Net Cash</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-white">CSK Powerplay Over 48.5 Runs</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">1.96</td>
                    <td className="p-3.5 text-white/60">1.83</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">+₹1,300 Extra Net Cash</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-white">Top Batsman 50+ Runs</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">2.45</td>
                    <td className="p-3.5 text-white/60">2.15</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">+₹3,000 Extra Net Cash</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-white">Platform Commission</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">0% (Zero)</td>
                    <td className="p-3.5 text-white/60">5% to 8% Hidden Deductions</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">100% of Payout Kept</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Golden Pro Tip Box */}
          <div className="p-6 rounded-2xl bg-[#F0C419]/10 border-2 border-[#F0C419]/40 space-y-3">
            <div className="flex items-center gap-2.5 text-[#F0C419] font-extrabold text-base sm:text-lg">
              <Star className="w-5 h-5 fill-current" />
              <span>Lotus365 Cricket Pro Tip: The "Greening Up" Strategy</span>
            </div>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
              On Lotus365's <a href="/cricket-exchange" className="text-[#F0C419] underline font-semibold">Cricket Exchange</a>, you can back a team at high pre-match odds (e.g., 2.20) and lay them during the match when they take early wickets and their odds drop to 1.30. By trading both positions, you lock in a guaranteed green profit before the match even finishes, regardless of who eventually wins!
            </p>
          </div>

          {/* Pitch Analysis & Statistical Strategy Blueprint */}
          <div className="space-y-6 text-white/85 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Mastering Pitch Reports & Venue Analysis for Cricket Betting
            </h2>
            <p>
              Professional cricket traders don't bet on gut instinct; they analyze pitch behavior, ground dimensions, dew conditions, and historical venue data. Before placing session or total runs bets on Lotus365, evaluate these critical factors:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F0C419] shrink-0 mt-0.5" />
                <span><strong className="text-white">Boundary Dimensions:</strong> Smaller venues like Chinnaswamy Stadium (Bengaluru) or Wankhede Stadium (Mumbai) feature average first-innings scores in excess of 190, making "Over" on total sixes and powerplay runs the statistically favored position.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F0C419] shrink-0 mt-0.5" />
                <span><strong className="text-white">Spin vs Seam Pitch Characteristics:</strong> Traditional spin paradises like MA Chidambaram Stadium (Chepauk, Chennai) slow down drastically in the middle overs (7 to 15), rewarding "Under" session runs wagers as mystery spinners restrict scoring.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F0C419] shrink-0 mt-0.5" />
                <span><strong className="text-white">The Night Match Dew Factor:</strong> In day-night fixtures across Northern and Western India between March and May, heavy evening dew renders the wet ball slick and unmanageable for spin bowlers, giving the chasing team a decisive 65% win probability advantage.</span>
              </li>
            </ul>
          </div>

          {/* Step-by-Step: How to Bet on Cricket via WhatsApp */}
          <div className="p-8 rounded-3xl bg-black/20 border border-white/15 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              How to Start Betting on Cricket with Lotus365 in 4 Easy Steps
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Because Lotus365 operates with a customer-first direct model, there are no confusing verification paperwork delays or clunky native app installations required. Here is how you can place your first cricket bet in under 3 minutes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl font-black text-[#F0C419] mb-1">Step 01</div>
                <h4 className="font-bold text-white mb-1">Request Your Login ID</h4>
                <p className="text-xs text-white/70">Connect with our 24/7 WhatsApp verification desk at <a href="/contact" className="text-[#F0C419] hover:underline">contact support</a> and send a message requesting a new Lotus365 Cricket ID.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl font-black text-[#F0C419] mb-1">Step 02</div>
                <h4 className="font-bold text-white mb-1">Deposit Funds via UPI</h4>
                <p className="text-xs text-white/70">Deposit as little as ₹100 using PhonePe, Google Pay, or Paytm. Follow our <a href="/how-to-deposit" className="text-[#F0C419] hover:underline">deposit guide</a> for 30-second balance updates.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl font-black text-[#F0C419] mb-1">Step 03</div>
                <h4 className="font-bold text-white mb-1">Access Live Cricket Markets</h4>
                <p className="text-xs text-white/70">Open <strong className="text-white">lotus365officialid.com</strong> on your mobile browser, login, and browse ongoing IPL, T20, and international fixtures.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl font-black text-[#F0C419] mb-1">Step 04</div>
                <h4 className="font-bold text-white mb-1">Instant 2-Minute Cashout</h4>
                <p className="text-xs text-white/70">When your wagers settle, request an instant cashout to receive 100% of your winnings directly in your bank account within 120 seconds via our <a href="/2-minute-cashout" className="text-[#F0C419] hover:underline">2-minute cashout SLA</a>.</p>
              </div>
            </div>
          </div>

          {/* Comprehensive Cricket FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-[#F0C419]" />
              <span>Frequently Asked Questions About Cricket Betting on Lotus365</span>
            </h2>
            <div className="space-y-4 text-sm">
              {[
                {
                  q: 'Is cricket betting legal on Lotus365 in India?',
                  a: 'Lotus365 operates under legitimate international gaming licenses in compliance with online service provisions. We provide a 100% encrypted, secure web platform enabling skill-based sports trading and peer-to-peer cricket exchange matching for consenting adults aged 18 and above.',
                },
                {
                  q: 'What is the minimum deposit required to start betting on cricket?',
                  a: 'You can start cricket betting on Lotus365 with as little as ₹100. Deposits are processed instantaneously via UPI (Google Pay, PhonePe, Paytm, BHIM) and IMPS Net Banking with zero convenience charges or hidden administrative fees.',
                },
                {
                  q: 'How does session betting work in live cricket matches?',
                  a: 'Session betting (also called Fancy or Khado betting) allows you to wager on whether the batting team will score more or less than a specified number of runs within a set over bracket (such as 6 overs powerplay, 10 overs, 15 overs, or 20 overs). Lotus365 updates session benchmarks ball-by-ball with live settlement as soon as the final ball of the session is bowled.',
                },
                {
                  q: 'How fast will I receive my cricket winnings when I withdraw?',
                  a: 'Lotus365 prides itself on India\'s fastest withdrawal processing time. When you submit a withdrawal request via our 24/7 WhatsApp desk, funds are credited directly to your registered UPI ID or IMPS bank account in an average of 1 minute 45 seconds (guaranteed under 2 minutes).',
                },
                {
                  q: 'Do I need to download a heavy app file to bet on cricket?',
                  a: 'instant smartphone access is required! Lotus365 is 100% web-based. Simply open lotus365officialid.com in Chrome, Safari, or any mobile browser on Android or iPhone to enjoy smooth 60 FPS in-play cricket betting without cluttering your phone memory or risking third-party app permissions.',
                },
                {
                  q: 'Can I claim a welcome bonus on my first cricket deposit?',
                  a: 'Yes! First-time depositors on Lotus365 are eligible for our exclusive new-member welcome bonus. Simply ask your WhatsApp relationship manager about the active deposit match promotion when you register your ID to receive bonus betting credits.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="font-bold text-white text-base flex items-start gap-2">
                    <span className="text-[#F0C419] font-extrabold">Q{idx + 1}:</span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed pl-6">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedPages pages={related} />
      <PageCTA
        headline="Start Live Cricket Betting with India's Best Odds"
        subtext="Get your verified Lotus365 Cricket ID on WhatsApp in under 60 seconds. Instant UPI deposits, 0% commission, and guaranteed 2-minute cashouts!"
        ctaLabel="Get Cricket ID on WhatsApp"
      />
    </Layout>
  </>
);
