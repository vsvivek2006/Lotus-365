import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { HelpCircle, DollarSign, BarChart3 } from 'lucide-react';

const related = [
  { href: '/cricket-betting', label: 'Cricket Betting Hub', description: 'Complete live cricket match coverage' },
  { href: '/ipl-betting', label: 'IPL Betting 2026', description: 'High-liquidity IPL exchange markets' },
  { href: '/t20-world-cup-betting', label: 'T20 World Cup', description: 'International T20 tournament odds' },
  { href: '/betting-tips', label: 'Cricket Betting Tips', description: 'Exchange trading strategies & formulas' },
  { href: '/2-minute-cashout', label: '2-Minute Cashout', description: 'Guaranteed instant UPI withdrawals' },
  { href: '/how-to-deposit', label: 'How to Deposit', description: 'UPI & IMPS deposit guide' },
];

export const CricketExchangePage: React.FC = () => (
  <>
    <SEOHead
      title="Cricket Exchange Online India — 0% Commission Peer-to-Peer Betting"
      description="Trade on India's #1 cricket exchange at Lotus365. Enjoy 0% commission, peer-to-peer back & lay trading, ball-by-ball in-play liquidity, and instant 2-minute cashouts via UPI. Get your free exchange ID on WhatsApp!"
      canonical="/cricket-exchange"
      keywords="cricket exchange online, cricket exchange india, p2p cricket betting, back and lay cricket, best cricket exchange, 0 commission cricket exchange, cricket trading india"
    />
    <Layout>
      <PageHero
        badge="P2P Cricket Exchange"
        title="India's Most Liquid "
        highlight="Cricket Exchange Platform"
        subtitle="Trade cricket odds with 0% net commission. Back teams to win, lay teams to lose, lock in guaranteed green profits mid-match, and withdraw winnings in 2 minutes via UPI."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-5xl mx-auto space-y-12 text-white/85 text-sm sm:text-base leading-relaxed">
          {/* Executive Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              What Is a Cricket Betting Exchange and How Does It Work?
            </h2>
            <p>
              In traditional sports betting, you place a wager against a centralized bookmaker who sets artificial odds with an 8% to 15% hidden margin cut against you. A <strong className="text-white">Cricket Betting Exchange</strong> completely eliminates the middleman bookmaker. On Lotus365, you trade directly against other Indian cricket enthusiasts in an open, transparent financial marketplace.
            </p>
            <p>
              Because you are betting against fellow players, the exchange provides two revolutionary advantages unavailable on ordinary betting apps: you can <strong className="text-white">Back</strong> an outcome (betting that an event will happen) or <strong className="text-white">Lay</strong> an outcome (acting as the bookmaker by betting that an event will NOT happen).
            </p>
          </div>

          {/* Back vs Lay Explained */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-extrabold text-lg">
                <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">🔵</span>
                <span>Backing a Team (Back / Lagai)</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Backing means wagering that an event will happen. If you back Mumbai Indians at odds of 2.10 with a ₹5,000 stake:
              </p>
              <ul className="text-xs text-white/70 space-y-1.5 list-disc list-inside">
                <li>If Mumbai Indians win: You receive ₹10,500 total (₹5,500 pure profit + ₹5,000 stake).</li>
                <li>If Mumbai Indians lose: You lose only your ₹5,000 stake.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-extrabold text-lg">
                <span className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">🔴</span>
                <span>Laying a Team (Lay / Khai)</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Laying means betting against an outcome — acting like the bookmaker. If you lay Chennai Super Kings at odds of 1.80 for a ₹5,000 backer:
              </p>
              <ul className="text-xs text-white/70 space-y-1.5 list-disc list-inside">
                <li>If CSK lose: You win the backer's ₹5,000 stake outright!</li>
                <li>If CSK win: Your liability is ₹4,000 (₹5,000 × [1.80 - 1.00]).</li>
              </ul>
            </div>
          </div>

          {/* Masterclass: Greening Up Arbitrage */}
          <div className="p-8 rounded-3xl bg-black/20 border border-white/15 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] flex items-center gap-2.5">
              <DollarSign className="w-7 h-7 text-[#F0C419]" />
              <span>The "Green Up" Cashout Formula: Guaranteed Profit Before Match End</span>
            </h2>
            <p>
              The most lucrative strategy used by professional cricket exchange traders is known as "Greening Up" or in-play trading arbitrage. Because cricket odds fluctuate violently with every boundary and fallen wicket, you can trade both sides of the market to guarantee a positive cash return regardless of which team wins.
            </p>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <h4 className="font-bold text-white text-base">Practical In-Play Trading Walkthrough:</h4>
              <ol className="space-y-3 text-xs sm:text-sm list-decimal list-inside text-white/80">
                <li><strong className="text-white">Pre-Match:</strong> You Back India at odds of <strong className="text-[#F0C419]">2.20</strong> with a ₹10,000 stake (Potential return: ₹22,000; Net Profit: ₹12,000).</li>
                <li><strong className="text-white">During In-Play:</strong> India's opening bowlers strike twice in the powerplay, taking 2 early wickets. India's odds plummet to <strong className="text-[#F0C419]">1.30</strong>.</li>
                <li><strong className="text-white">The Lay Hedge:</strong> You now Lay India at 1.30 with a stake of ₹16,923. Your liability on this lay is ₹5,077 (₹16,923 × 0.30).</li>
                <li><strong className="text-emerald-400 font-bold">The Guaranteed Outcome:</strong>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 pl-4">
                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30">
                      <strong>If India Wins:</strong><br />
                      +₹12,000 (Back Profit) - ₹5,077 (Lay Liability) = <strong className="text-emerald-300">+₹6,923 Net Cash!</strong>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30">
                      <strong>If India Loses:</strong><br />
                      +₹16,923 (Lay Win) - ₹10,000 (Back Loss) = <strong className="text-emerald-300">+₹6,923 Net Cash!</strong>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <p className="text-xs text-white/70">
              Notice that you walk away with a guaranteed ₹6,923 profit with 10 overs still remaining in the contest! No traditional sportsbook allows this level of dynamic flexibility.
            </p>
          </div>

          {/* Exchange Comparison Table */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Exchange Comparison: Lotus365 vs Betfair vs Traditional Bookmakers
            </h2>
            <p className="text-sm text-white/80">
              See how Lotus365 compares against international legacy exchanges and standard Indian sportsbooks:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-black/40 text-[#F0C419] border-b border-white/20">
                    <th className="p-3.5">Feature</th>
                    <th className="p-3.5">Lotus365 Cricket Exchange</th>
                    <th className="p-3.5">Betfair UK</th>
                    <th className="p-3.5">Traditional Bookmakers (Betway/1xBet)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20 text-white/80">
                  <tr>
                    <td className="p-3.5 font-semibold text-white">Net Commission Rate</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">0% (Zero Commission)</td>
                    <td className="p-3.5 text-rose-400">5% to 7.5% per winning market</td>
                    <td className="p-3.5 text-rose-400">8% to 15% hidden margin</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-white">India UPI & IMPS Payouts</td>
                    <td className="p-3.5 text-emerald-400 font-bold">Instant (Under 2 Minutes)</td>
                    <td className="p-3.5 text-white/60">Not supported (Crypto/E-wallets only)</td>
                    <td className="p-3.5 text-white/60">12 to 48 Hours with KYC friction</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-white">Back & Lay on Session Runs</td>
                    <td className="p-3.5 text-emerald-400 font-bold">Full Fancy & Session Trading</td>
                    <td className="p-3.5 text-white/60">Limited session markets</td>
                    <td className="p-3.5 text-rose-400">No Laying Allowed (Back only)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-white">Access / VPN Requirement</td>
                    <td className="p-3.5 text-emerald-400 font-bold">100% Direct Web (Zero VPN)</td>
                    <td className="p-3.5 text-rose-400">Blocked in India (Requires VPN)</td>
                    <td className="p-3.5 text-white/60">Frequent ISP domain blocks</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-white">Customer Service</td>
                    <td className="p-3.5 text-emerald-400 font-bold">24/7 Dedicated WhatsApp Desk</td>
                    <td className="p-3.5 text-white/60">Email / Slow Bot Chat</td>
                    <td className="p-3.5 text-white/60">Automated Bot Tickets</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Session Trading Mechanics */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Deep-Dive: Fancy & Session Cricket Markets (Khado & Lambi)
            </h2>
            <p>
              In India, thousands of punters prefer trading session markets over match winner odds. Sessions allow you to capitalise on specific 6-over powerplay or 10-over windows without needing to predict who wins the entire 40-over match:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                <h4 className="font-bold text-[#F0C419] mb-1">Powerplay Sessions (0-6 Overs)</h4>
                <p className="text-white/70 leading-relaxed">
                  Only 2 fielders outside the 30-yard circle. High boundary frequency makes batting conditions predictable. Benchmark typical ranges: 44-48 runs.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                <h4 className="font-bold text-[#F0C419] mb-1">Middle Overs (7-15 Overs)</h4>
                <p className="text-white/70 leading-relaxed">
                  Field spreads out with 5 fielders on boundary ropes. Spinners control run rate. Wickets in this phase cause massive session collapses.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                <h4 className="font-bold text-[#F0C419] mb-1">Death Overs / Lambi (16-20 Overs)</h4>
                <p className="text-white/70 leading-relaxed">
                  Maximum batting aggression. Expect 10 to 14 runs per over if specialist finishers are at the crease, or frequent wickets if yorkers hit the mark.
                </p>
              </div>
            </div>
          </div>

          {/* Golden Pro Tip Box */}
          <div className="p-6 rounded-2xl bg-[#F0C419]/10 border-2 border-[#F0C419]/40 space-y-2">
            <div className="flex items-center gap-2 text-[#F0C419] font-bold text-base">
              <BarChart3 className="w-5 h-5" />
              <span>Exchange Rule of Thumb: Never Chase Losses on Khado</span>
            </div>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
              If a session run bet fails because of an unexpected maiden over or a double-wicket maiden, never double your stake on the following session out of frustration. Stick strictly to flat 2% to 4% bankroll allocations per market as explained in our <a href="/betting-tips" className="text-[#F0C419] underline font-semibold">cricket betting tips guide</a>.
            </p>
          </div>

          {/* 6 FAQs */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-[#F0C419]" />
              <span>Cricket Exchange Frequently Asked Questions</span>
            </h2>
            <div className="space-y-4 text-sm">
              {[
                {
                  q: 'Why do odds on the cricket exchange change so rapidly during live matches?',
                  a: 'Exchange odds are determined by direct supply and demand among thousands of live traders. Every single ball (a dot ball, boundary four, maximum six, or fallen wicket) changes the statistical win probability instantly. High-frequency API feeds update Lotus365 odds in under 500 milliseconds.',
                },
                {
                  q: 'What is market liquidity on a cricket exchange?',
                  a: 'Liquidity represents the total amount of money available to be matched at specific odds. High liquidity means you can place large bets (e.g., ₹50,000 or ₹1,00,000) and have them matched instantly without waiting for a counterparty. Lotus365 boasts the highest cricket exchange liquidity in India.',
                },
                {
                  q: 'What happens if my bet on the exchange is unmatched?',
                  a: 'If you propose odds that no other player is currently willing to accept, your bet remains "unmatched" in the order book. You can cancel your unmatched bet at any time before it gets taken with zero penalty, and your funds return to your wallet immediately.',
                },
                {
                  q: 'Does Lotus365 really charge 0% commission on exchange winnings?',
                  a: 'Yes! While international platforms like Betfair deduct up to 7% of your net profits, Lotus365 is committed to a zero-commission model for our members. 100% of your cricket exchange profits remain yours to withdraw.',
                },
                {
                  q: 'Can I trade cricket exchange matches on my mobile phone?',
                  a: 'Absolutely. Lotus365 is built as an ultra-fast Progressive Web App running directly in mobile Chrome and Safari at 60 FPS. You can execute back and lay orders with one tap on your smartphone without downloading any third-party APK file.',
                },
                {
                  q: 'How do I deposit funds to trade on the cricket exchange?',
                  a: 'Simply connect with our 24/7 WhatsApp desk, receive your ID, and deposit via UPI (PhonePe, Google Pay, Paytm) with a minimum of ₹100. Your exchange account balance reflects within 30 seconds so you never miss match action.',
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
        headline="Join India's #1 Cricket Exchange Today"
        subtext="Trade cricket with 0% commission, back & lay flexibility, and guaranteed 2-minute UPI cashouts. Get your instant WhatsApp ID now!"
        ctaLabel="Get Exchange ID on WhatsApp"
      />
    </Layout>
  </>
);
