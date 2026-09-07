import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { Star, HelpCircle } from 'lucide-react';

const casinoLinks = [
  { href: '/live-casino', label: 'Live Casino Lobby', description: '1000+ games with real human dealers' },
  { href: '/andar-bahar', label: 'Andar Bahar Live', description: 'Classic Indian card game with fast deals' },
  { href: '/roulette', label: 'European Roulette', description: 'Classic & Lightning roulette wheels' },
  { href: '/blackjack', label: 'Live Blackjack', description: '50+ tables with 99.5% RTP' },
  { href: '/aviator-game', label: 'Aviator Crash', description: '98.5% RTP crash game with multipliers' },
  { href: '/2-minute-cashout', label: '2-Minute Cashout', description: 'Instant UPI cashout guarantee' },
];

const andarLinks = [
  { href: '/live-casino', label: 'Live Casino Lobby', description: '1000+ games with live dealers' },
  { href: '/teen-patti', label: 'Teen Patti Cash', description: 'India\'s favourite 3-card poker game' },
  { href: '/dragon-tiger', label: 'Dragon Tiger Live', description: 'Fast-paced two card showdown' },
  { href: '/baccarat', label: 'Live Baccarat', description: 'Speed baccarat with 1.06% house edge' },
  { href: '/welcome-bonus', label: 'Welcome Bonus', description: 'Claim new member deposit bonus' },
  { href: '/how-to-deposit', label: 'How to Deposit', description: 'Instant UPI & IMPS deposit guide' },
];

export const TeenPattiPage: React.FC = () => (
  <>
    <SEOHead
      title="Teen Patti Online Real Money — Play Live 3 Patti Cash Games India"
      description="Play Teen Patti online for real cash on Lotus365. Real human dealers, 20-20 Teen Patti, Muflis, Pair Plus side bets, minimum ₹10 bets, and instant 2-minute UPI cashouts. Register free on WhatsApp!"
      canonical="/teen-patti"
      keywords="teen patti online, teen patti real money, live teen patti india, 3 patti cash, play teen patti online, 3 patti real cash game, teen patti rules"
    />
    <Layout>
      <PageHero
        badge="Live Teen Patti Cash"
        title="India's Most Loved "
        highlight="Teen Patti Real Money"
        subtitle="Play live 3 Patti with beautiful human dealers streaming in Full HD. Enjoy 20-20 Teen Patti, One-Day rules, Pair Plus side bets paying up to 1000x, and 2-minute UPI cashouts."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-5xl mx-auto space-y-12 text-white/85 text-sm sm:text-base leading-relaxed">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              The King of Indian Card Games: Teen Patti on Lotus365
            </h2>
            <p>
              Often referred to as "Indian Poker", <strong className="text-white">Teen Patti</strong> (meaning "Three Cards") has been the centerpiece of social gatherings and Diwali festivities across India for generations. On <strong className="text-white">Lotus365</strong> (<a href="/" className="text-[#F0C419] hover:underline font-bold">lotus365officialid.com</a>), we bring this heritage game to life in a professional real-money live dealer format. Streaming directly from state-of-the-art studios by Evolution Gaming and Ezugi, you can sit at tables with stakes from as low as ₹10 up to VIP tables accommodating ₹1,00,000 per hand.
            </p>
          </div>

          {/* Hand Rankings */}
          <div className="p-8 rounded-3xl bg-black/20 border border-white/15 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Official Teen Patti Hand Hierarchy & Probabilities
            </h2>
            <p>
              Teen Patti is dealt using a standard 52-card deck without jokers. The mathematical hand ranking from highest to lowest is strictly established:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#F0C419] text-base">1. Trail / Set / Trio (Three of a Kind)</span>
                  <span className="text-xs text-[#F0C419] bg-[#F0C419]/20 px-2 py-0.5 rounded font-bold">0.24% Probability</span>
                </div>
                <p className="text-white/70">Three cards of identical rank. A-A-A is the highest possible hand; 2-2-2 is the lowest trio.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#F0C419] text-base">2. Pure Sequence (Straight Flush / Pakki Rohn)</span>
                  <span className="text-xs text-[#F0C419] bg-[#F0C419]/20 px-2 py-0.5 rounded font-bold">0.22% Probability</span>
                </div>
                <p className="text-white/70">Three consecutive cards of identical suit. A-K-Q of Spades is the highest; 4-3-2 is the lowest pure sequence.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#F0C419] text-base">3. Sequence (Straight / Normal Rohn)</span>
                  <span className="text-xs text-[#F0C419] bg-[#F0C419]/20 px-2 py-0.5 rounded font-bold">3.26% Probability</span>
                </div>
                <p className="text-white/70">Three consecutive cards of mixed suits (e.g. 10 of Hearts, 9 of Clubs, 8 of Spades).</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#F0C419] text-base">4. Colour (Flush)</span>
                  <span className="text-xs text-[#F0C419] bg-[#F0C419]/20 px-2 py-0.5 rounded font-bold">4.96% Probability</span>
                </div>
                <p className="text-white/70">Three cards of the same suit that do not form a sequence (e.g. K-J-4 of Diamonds).</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#F0C419] text-base">5. Pair (Double)</span>
                  <span className="text-xs text-[#F0C419] bg-[#F0C419]/20 px-2 py-0.5 rounded font-bold">16.94% Probability</span>
                </div>
                <p className="text-white/70">Two cards of equal rank with one unmatched kicker (e.g. J-J-7). Higher pairs beat lower pairs.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#F0C419] text-base">6. High Card</span>
                  <span className="text-xs text-[#F0C419] bg-[#F0C419]/20 px-2 py-0.5 rounded font-bold">74.39% Probability</span>
                </div>
                <p className="text-white/70">Three unmatched cards. Ranked by the highest individual card (Ace is highest, 2 is lowest).</p>
              </div>
            </div>
          </div>

          {/* Side Bets & Payout Table */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Lucrative Side Bets: Pair Plus & 6-Card Bonus Payouts
            </h2>
            <p className="text-sm text-white/80">
              In addition to standard Ante and Play wagers, Lotus365 tables offer optional side bets capable of delivering monster multiplier returns up to 1,000 to 1:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-black/40 text-[#F0C419] border-b border-white/20">
                    <th className="p-3.5">Side Bet Combination</th>
                    <th className="p-3.5">Pair Plus Payout</th>
                    <th className="p-3.5">6-Card Bonus Payout</th>
                    <th className="p-3.5">Return on ₹1,000 Bet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20 text-white/80">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Royal Flush (6-Card)</td>
                    <td className="p-3.5 text-white/60">N/A</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">1,000 : 1</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹10,01,000 Total Return</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Straight Flush / Pure Sequence</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">40 : 1</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">200 : 1</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹41,000 to ₹2,01,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Three of a Kind (Trio / Trail)</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">30 : 1</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">100 : 1</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹31,000 to ₹1,01,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Straight / Sequence</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">6 : 1</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">10 : 1</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹7,000 to ₹11,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Flush / Colour</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">3 : 1</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">15 : 1</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹4,000 to ₹16,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Pair</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">1 : 1</td>
                    <td className="p-3.5 text-white/60">N/A</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">₹2,000 Total Return</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Popular Variations */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Popular Variations: Muflis, AK47 & Live 20-20 Teen Patti
            </h2>
            <p>
              While classic Three-Card Poker follows traditional hand rankings, Indian culture has produced exhilarating localized variations that change the psychological dynamics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                <span className="font-bold text-[#F0C419]">1. Muflis (Lowball)</span>
                <p className="text-white/70">Hand hierarchies are inverted: the worst possible hand becomes the absolute best. A pair of 2s beats a pair of Kings, and a high card of 7-5-2 is virtually unbeatable.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                <span className="font-bold text-[#F0C419]">2. AK47 Wildcards</span>
                <p className="text-white/70">All Aces, Kings, 4s, and 7s act as wildcards (Jokers) that can substitute for any card rank or suit to complete trails and pure sequences.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                <span className="font-bold text-[#F0C419]">3. Live 20-20 Teen Patti</span>
                <p className="text-white/70">A fast-paced match between Player A and Player B. Back which side receives the superior 3-card poker hand with side bet multipliers up to 1000x.</p>
              </div>
            </div>
          </div>

          {/* Bankroll Management */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Bankroll Stewardship: The 5-Unit Table Discipline in 3 Patti
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Because Teen Patti is a high-velocity game where hands conclude every 25 seconds, emotional discipline is critical. We advise maintaining a minimum session bankroll of at least 50 Ante units. If your standard Ante stake is ₹100, enter the table with ₹5,000. Establish a hard stop-loss of 20 units and lock in profits whenever your bankroll increases by 30%. Never chase losses by doubling down on weak hands.
            </p>
          </div>

          {/* Historical Heritage */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Historical Origins of Katti (Mangatha) & Its Modern Live Evolution
            </h2>
            <p>
              Centuries before physical brick-and-mortar casinos or the internet, Andar Bahar flourished in Bengaluru, Chennai, and rural Karnataka under names like <em>Katti</em> and <em>Mangatha</em>. Played casually on village verandahs, its core attraction has always been absolute transparency: a single card is cut, and fate decides which side finishes first without any complex psychological deception.
            </p>
            <p>
              On Lotus365, this traditional heritage game has been digitized with ultra-modern broadcast technology. Dealers slide cards across optical glass sensors that feed live mathematical data straight to your screen, providing a blend of cultural nostalgia and contemporary high-speed entertainment.
            </p>
          </div>

          {/* Anti-Martingale Progression */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Strategic Staking: The Reverse Martingale (Paroli) System on Andar Bahar
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Because Andar Bahar is essentially a near-50/50 proposition game with a very low house edge, many players mistakenly use the dangerous Martingale system (doubling stakes after losses). Instead, experienced card traders utilize the Paroli (Reverse Martingale) framework: double your stake only after a winning hand, up to a maximum streak of 3 consecutive wins, and immediately return to your base stake after any loss. This lets you capitalize on natural winning streaks while strictly protecting your core principal balance.
            </p>
          </div>

          {/* Golden Pro Tip Box */}
          <div className="p-6 rounded-2xl bg-[#F0C419]/10 border-2 border-[#F0C419]/40 space-y-3">
            <div className="flex items-center gap-2 text-[#F0C419] font-extrabold text-base">
              <Star className="w-5 h-5 fill-current" />
              <span>Teen Patti Pro Tip: The Q-6-4 Baseline Decision Rule</span>
            </div>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
              Mathematical simulations demonstrate that the dealer qualifies only with a Queen-high or better hand in over 69% of deals. Therefore, when playing the "Play" bet, you should strictly call only if your hand is Queen-6-4 or higher. Folding any hand lower than Queen-6-4 reduces the house edge by more than 2.3%, extending your table longevity and bankroll resilience.
            </p>
          </div>

          {/* Dealer Integrity Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Live Dealer Shoe Integrity & Optical Scanner Verification
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Every live Andar Bahar table on Lotus365 is operated by licensed gaming providers including Super Spade Games, Ezugi, and Evolution. Dealers draw cards through optical barcode scanning shoes that register each card value digitally the millisecond it exits the dealing box. This eliminates human error, guarantees 100% fair card distribution, and ensures live payouts are calculated and credited to your wallet balance instantaneously.
              </p>
            </div>

            {/* 5 FAQs */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-[#F0C419]" />
              <span>Teen Patti Frequently Asked Questions</span>
            </h2>
            <div className="space-y-4 text-sm">
              {[
                { q: 'What is the difference between Blind and Seen play?', a: 'In traditional peer-to-peer Teen Patti, Blind players place bets without checking their hole cards, while Seen players check their cards and must wager double the Chaal amount. Live casino versions feature fixed Ante and Play structures.' },
                { q: 'Can I play Teen Patti with as little as ₹10?', a: 'Yes! Lotus365 offers beginner-friendly tables starting from just ₹10 per hand, all the way up to high-limit VIP tables.' },
                { q: 'How does the dealer qualify in Live Teen Patti?', a: 'In live dealer Teen Patti (such as Evolution\'s Bet on Teen Patti), the dealer must hold at least a Queen-high card to qualify. If the dealer does not qualify, your Ante bet pays 1:1 and the Play bet pushes.' },
                { q: 'Are cards shuffled live on camera?', a: 'Yes, every card deck is freshly shuffled using certified automatic shufflers or hand-shuffled live on video stream, ensuring 100% fair dealing.' },
                { q: 'How fast can I withdraw my Teen Patti winnings?', a: 'You can cash out your balance at any time through our 24/7 WhatsApp desk. UPI payouts are delivered in an average of 1 minute 45 seconds.' },
                { q: 'What is 6-Card Bonus side bet in Teen Patti?', a: 'The 6-Card Bonus combines your 3 cards with the dealer\'s 3 cards to form the best possible 5-card poker hand. Hitting a Royal Flush pays out a monumental 1000:1 multiplier!' },
                { q: 'Can I chat with the live dealer in Hindi?', a: 'Yes! Our dedicated Hindi Teen Patti tables feature native Indian dealers who converse warmly in Hindi throughout your session.' },
                { q: 'Can I play Teen Patti on my mobile phone without downloading an app?', a: 'Yes! Lotus365 is 100% web-based. Simply open lotus365officialid.com in Chrome or Safari and enjoy seamless full-screen gameplay without installing an APK.' },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="font-bold text-white text-base flex items-start gap-2"><span className="text-[#F0C419] font-extrabold">Q{idx + 1}:</span><span>{item.q}</span></h3>
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed pl-6">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedPages pages={casinoLinks} />
      <PageCTA headline="Play Live Teen Patti Real Money on Lotus365" subtext="Real human dealers, bets from ₹10, and instant 2-minute UPI cashouts. Register free on WhatsApp!" />
    </Layout>
  </>
);

export const AndarBaharPage: React.FC = () => (
  <>
    <SEOHead
      title="Andar Bahar Online Real Cash — Live Dealer Andar Bahar Game India"
      description="Play Andar Bahar online for real money at Lotus365. Enjoy live dealers, Turbo Andar Bahar, 120x side bet multipliers, low house edge, and 2-minute UPI cashouts. Register free on WhatsApp now!"
      canonical="/andar-bahar"
      keywords="andar bahar online, live andar bahar india, andar bahar real money, play andar bahar online, andar bahar game online, katti card game, andar bahar winning tricks"
    />
    <Layout>
      <PageHero
        badge="Live Andar Bahar Online"
        title="India's Classic "
        highlight="Andar Bahar Live"
        subtitle="Experience India's most straightforward and thrilling heritage card game. Bet on Andar or Bahar with live human dealers, side bet multipliers up to 120x, and 2-minute cashouts."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-5xl mx-auto space-y-12 text-white/85 text-sm sm:text-base leading-relaxed">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              The Magic of Andar Bahar: Simple, Fast & Electrifying
            </h2>
            <p>
              Originating in Southern India as <em>Ullae Veliyae</em> centuries ago, <strong className="text-white">Andar Bahar</strong> (Inside / Outside) is celebrated for its purity and rapid resolution. Unlike games with complex ranking calculations, Andar Bahar requires zero memorization. A single "Joker" (Opening) card is dealt face-up. Cards are then dealt alternately to the Andar and Bahar spots until an identical rank card appears. On <strong className="text-white">Lotus365</strong> (<a href="/" className="text-[#F0C419] hover:underline font-bold">lotus365officialid.com</a>), you can enjoy live tables with side bets, statistical trackers, and 0% withdrawal fees.
            </p>
          </div>

          {/* Mathematical Probability */}
          <div className="p-8 rounded-3xl bg-black/20 border border-white/15 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              The Mathematical Edge: Why Andar Holds a 51.5% Advantage
            </h2>
            <p>
              In standard Andar Bahar, the dealer deals the very first card to the <strong className="text-white">Andar</strong> side. Because Andar receives the first opportunity to match the Joker, probability dictates that Andar will win 51.5% of the time, while Bahar wins 48.5% of the time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 space-y-1.5">
                <div className="font-bold text-blue-400 text-base">Andar (Inside) Wager</div>
                <div className="text-white/80"><strong>Probability:</strong> 51.5% winning probability</div>
                <div className="text-white/80"><strong>Standard Payout:</strong> 0.90 : 1 (Bet ₹1,000 to win ₹900 profit)</div>
                <div className="text-white/70">House Edge: 2.15% — one of the lowest in casino gaming!</div>
              </div>
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                <div className="font-bold text-emerald-400 text-base">Bahar (Outside) Wager</div>
                <div className="text-white/80"><strong>Probability:</strong> 48.5% winning probability</div>
                <div className="text-white/80"><strong>Standard Payout:</strong> 1.00 : 1 Even Money (Bet ₹1,000 to win ₹1,000 profit)</div>
                <div className="text-white/70">House Edge: ~3.00% — compensated by higher 1:1 payout.</div>
              </div>
            </div>
          </div>

          {/* Side Bets Table */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Total Cards Dealt Side Bets: Up to 120x Multipliers
            </h2>
            <p className="text-sm text-white/80">
              Looking for exponential payouts? Live Andar Bahar on Lotus365 includes side bets predicting how many total cards will be dealt before the Joker card is matched:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-black/40 text-[#F0C419] border-b border-white/20">
                    <th className="p-3.5">Cards Dealt Range</th>
                    <th className="p-3.5">Standard Payout Multiplier</th>
                    <th className="p-3.5">Super Andar Bahar Multiplier</th>
                    <th className="p-3.5">Profit on ₹500 Bet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20 text-white/80">
                  <tr>
                    <td className="p-3.5 font-bold text-white">1 to 5 Cards</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">3.50 : 1</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">Up to 10x</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">+₹1,750 to +₹5,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">6 to 10 Cards</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">4.50 : 1</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">Up to 15x</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">+₹2,250 to +₹7,500</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">11 to 15 Cards</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">5.50 : 1</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">Up to 25x</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">+₹2,750 to +₹12,500</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">16 to 25 Cards</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">4.50 : 1</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">Up to 30x</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">+₹2,250 to +₹15,000</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">41+ Cards (Marathon Deal)</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">120.00 : 1</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">Up to 120x</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">+₹60,000 Net Cash!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Card Counting Myths */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Debunking Card Counting Myths in Live Andar Bahar
            </h2>
            <p>
              Many newcomer players wonder if card counting systems (like those used in Blackjack) can be applied to Andar Bahar. In practice, because a fresh 52-card deck is shuffled by automatic card shufflers before every single round, deck composition is fully restored to 100% randomness. Therefore, previous round histories displayed on the digital roadmaps (such as "Big Road" or "Bead Plate") represent independent statistical events.
            </p>
            <p>
              However, tracking the remaining unseen cards during an active marathon round (where 30+ cards have been dealt) does yield minor mathematical signals: if two cards matching the Joker rank remain among only 15 unseen cards, the probability of an immediate match on the very next deal jumps from 1/13 to nearly 1/7!
            </p>
          </div>

          {/* Studio Comparison */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Evolution Super Andar Bahar vs Ezugi OTT Andar Bahar
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Lotus365 features multiple provider suites to match your playing style. Evolution Gaming's Super Andar Bahar introduces random multiplier lightning strikes on up to 5 side bet positions every round, boosting payouts up to 4,000x. Meanwhile, Ezugi Live provides authentic Over-The-Table (OTT) casino streams broadcast straight from licensed real-world casinos in Goa and Sri Lanka, offering pure, traditional dealing rhythms.
            </p>
          </div>

          {/* High Roller VIP Tables */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              High Roller VIP Salons & Dedicated Table Limits
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              For seasoned patrons desiring private table limits, Lotus365 hosts dedicated Salon Privé Andar Bahar rooms where maximum single-round wagers reach ₹5,00,000. These private rooms feature custom dealing speeds, dedicated pit bosses, and expedited withdrawal routing guaranteeing that seven-figure winnings are disbursed to your verified bank account via RTGS or IMPS in under 120 seconds.
            </p>
          </div>

          {/* Golden Pro Tip Box */}
          <div className="p-6 rounded-2xl bg-[#F0C419]/10 border-2 border-[#F0C419]/40 space-y-3">
            <div className="flex items-center gap-2 text-[#F0C419] font-extrabold text-base">
              <Star className="w-5 h-5 fill-current" />
              <span>Andar Bahar Strategy: The 1st-Card Rule in Super Andar Bahar</span>
            </div>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
              In Evolution Gaming's Super Andar Bahar, if the opening Joker card is Black (Spades or Clubs), the first card is dealt to Andar. If the Joker is Red (Hearts or Diamonds), the first card is dealt to Bahar! Always look at the color of the Joker: bet on whichever side receives the FIRST card to leverage the inherent 51.5% statistical edge on every round.
            </p>
          </div>

          {/* 5 FAQs */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-[#F0C419]" />
              <span>Andar Bahar Frequently Asked Questions</span>
            </h2>
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3 mb-6">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Live Dealer Shoe Integrity & Optical Barcode Scanner Verification
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Every live Andar Bahar table streamed on Lotus365 features advanced optical barcode scanners integrated directly into the physical dealing shoe. The moment a card is extracted by the live dealer, its numerical rank and suit are electronically decoded and flashed on screen, eliminating any human error in determining the winning card match. Whether you bet on Andar with its 51.5% natural probability or back longshot multiplier side bets, all payouts settle instantaneously into your wallet with 2-minute UPI cashout availability.
              </p>
            </div>
            <h2 className="hidden">
            </h2>
            <div className="space-y-4 text-sm">
              {[
                { q: 'Is Andar Bahar purely a game of chance?', a: 'Yes, Andar Bahar is an unadulterated game of probability where cards are drawn alternately from a shuffled shoe. Following optimal betting on the first-dealt side maximizes your mathematical advantage.' },
                { q: 'What is the difference between Classic and Turbo Andar Bahar?', a: 'Classic Andar Bahar gives players 15 seconds to evaluate side bets between rounds, while Turbo Andar Bahar accelerates the dealing speed with 8-second intervals for rapid gameplay.' },
                { q: 'Can I bet on the suit or color of the Joker card?', a: 'Yes! Our live tables feature pre-deal proposition bets where you can wager on whether the Joker card will be Red or Black, Odd or Even, or Above/Below 7.' },
                { q: 'What is the minimum bet on Andar Bahar?', a: 'Minimum bets start at just ₹10, making it accessible to all players.' },
                { q: 'How fast do I receive withdrawals from Andar Bahar winnings?', a: 'Lotus365 processes all UPI and IMPS withdrawals within 2 minutes with zero platform deduction.' },
                { q: 'Is there a limit on how many cards can be dealt in a single round?', a: 'The round continues until the matching rank card appears. In rare instances, over 40 cards may be dealt, rewarding the 41+ cards side bet with a massive 120x payout!' },
                { q: 'What is the theoretical house edge on Andar vs Bahar?', a: 'Because Andar receives the first card, it holds a 51.5% probability and pays 0.9:1, resulting in a low house edge of 2.15%. Bahar receives cards second, holding a 48.5% probability and paying 1:1, carrying a house edge of approximately 3.00%.' },
                { q: 'Can I deposit via Google Pay or Paytm to play Andar Bahar?', a: 'Yes! All Indian UPI applications including PhonePe, Google Pay, BHIM, and Paytm are supported with instant zero-fee credits starting at just ₹100. Simply share your 12-digit UTR on WhatsApp to start playing within 30 seconds.' },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="font-bold text-white text-base flex items-start gap-2"><span className="text-[#F0C419] font-extrabold">Q{idx + 1}:</span><span>{item.q}</span></h3>
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed pl-6">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedPages pages={andarLinks} />
      <PageCTA headline="Play Live Andar Bahar on Lotus365" subtext="Real human dealers, 51.5% edge on Andar, and 2-minute UPI cashouts. Register free on WhatsApp now!" />
    </Layout>
  </>
);
