import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { Star, HelpCircle } from 'lucide-react';

const casinoRelated = [
  { href: '/teen-patti', label: 'Teen Patti Cash', description: 'India\'s favourite 3-card poker live' },
  { href: '/andar-bahar', label: 'Andar Bahar Live', description: 'Fast-paced Indian card game online' },
  { href: '/lightning-roulette', label: 'Lightning Roulette', description: 'Up to 500x multiplier payouts' },
  { href: '/aviator-game', label: 'Aviator Crash Game', description: '98.5% RTP crash game with instant cashout' },
  { href: '/blackjack', label: 'Live Blackjack', description: '50+ real dealer blackjack tables' },
  { href: '/baccarat', label: 'Live Baccarat', description: 'Speed baccarat and no-commission tables' },
];

export const LiveCasinoPage: React.FC = () => (
  <>
    <SEOHead
      title="Live Casino India — 1000+ Games, Real Dealers & High RTP Tables"
      description="Play 1000+ live casino games at Lotus365 India. Real human dealers, Teen Patti, Andar Bahar, Lightning Roulette, Blackjack, Baccarat & Aviator. 0% withdrawal fees, instant 2-min UPI payouts. Register free on WhatsApp!"
      canonical="/live-casino"
      keywords="live casino india, online casino india, live dealer casino, teen patti online, andar bahar live, lightning roulette india, live blackjack india, best casino platform india"
    />
    <Layout>
      <PageHero
        badge="1,000+ Live Casino Tables"
        title="India's Premier "
        highlight="Live Casino Experience"
        subtitle="Immerse yourself in high-definition live dealer action streaming 24/7 from world-class studios. Teen Patti, Andar Bahar, Roulette, Blackjack, and Aviator with instant 2-minute UPI cashouts."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
        <div className="max-w-5xl mx-auto space-y-12 text-white/85 text-sm sm:text-base leading-relaxed">
          {/* Executive Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              World-Class Live Casino Streaming Directly to Your Mobile Screen
            </h2>
            <p>
              Forget static computer graphics. At <strong className="text-white">Lotus365</strong> (<a href="/" className="text-[#F0C419] hover:underline font-bold">lotus365officialid.com</a>), our Live Casino connects you directly to professionally certified human dealers in real-time. Streaming in 1080p Full HD with sub-second latency from premium gaming studios operated by Evolution Gaming, Pragmatic Play Live, and Ezugi, you get the exact atmosphere of a VIP Macau or Las Vegas salon from your smartphone.
            </p>
            <p>
              Whether you are an enthusiast of traditional Indian heritage card games like <a href="/teen-patti" className="text-[#F0C419] hover:underline font-semibold">Teen Patti</a> and <a href="/andar-bahar" className="text-[#F0C419] hover:underline font-semibold">Andar Bahar</a>, or high-stakes European classics like <a href="/roulette" className="text-[#F0C419] hover:underline font-semibold">Roulette</a> and <a href="/blackjack" className="text-[#F0C419] hover:underline font-semibold">Blackjack</a>, Lotus365 provides transparent dealing with zero RNG doubts.
            </p>
          </div>

          {/* Game Library Directory Grid */}
          <div className="p-8 rounded-3xl bg-black/20 border border-white/15 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Explore Lotus365's Premier Live Casino Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: '🃏 Live Teen Patti', href: '/teen-patti', desc: 'Real money 3-card poker with side bets like Pair Plus and 6-Card Bonus. Stakes from ₹10 to ₹1,00,000.' },
                { name: '🎴 Live Andar Bahar', href: '/andar-bahar', desc: 'The beloved Indian classic. Bet on which side the matching card lands with rapid 20-second deal cycles.' },
                { name: '🎡 Lightning Roulette', href: '/lightning-roulette', desc: 'Random high-voltage RNG lightning strikes boost straight-up numbers with 50x to 500x payout multipliers.' },
                { name: '♠️ Live Blackjack', href: '/blackjack', desc: 'Over 50 live tables including Infinite Blackjack, Perfect Pairs, and 21+3 side bets with 99.5% RTP.' },
                { name: '🎲 Live Baccarat', href: '/baccarat', desc: 'Squeeze and Speed Baccarat tables. Bet Banker at 1.06% house edge with 0% commission variants.' },
                { name: '🐉 Dragon Tiger', href: '/dragon-tiger', desc: 'The two-card speed duel: Dragon vs Tiger. Pure intuition with lightning-fast 15-second betting rounds.' },
                { name: '✈️ Aviator Crash', href: '/aviator-game', desc: 'India\'s #1 crash game by Spribe. 98.5% RTP provably fair multiplier action with instant manual cashout.' },
                { name: '🎰 Casino Slots', href: '/casino-slots', desc: '500+ premium video slots featuring Megaways, cascading reels, progressive jackpots, and bonus buy.' },
                { name: '🎯 Color Prediction', href: '/color-prediction', desc: 'Fast-paced colour selection rounds (Red, Green, Violet) with instant mathematical prize multipliers.' },
              ].map((g) => (
                <a key={g.name} href={g.href} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F0C419] hover:bg-black/30 transition-all group block">
                  <div className="text-base font-bold text-white group-hover:text-[#F0C419] mb-1.5">{g.name}</div>
                  <p className="text-xs text-white/70 leading-relaxed">{g.desc}</p>
                </a>
              ))}
            </div>
          </div>

          {/* RTP & House Edge Comparison Matrix */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Live Casino Math: RTP & House Edge Comparison
            </h2>
            <p className="text-sm text-white/80">
              Understanding Return to Player (RTP) percentages and the built-in mathematical house edge allows you to select the games that maximize your long-term bankroll:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-black/40 text-[#F0C419] border-b border-white/20">
                    <th className="p-3.5">Game Category</th>
                    <th className="p-3.5">Theoretical RTP</th>
                    <th className="p-3.5">House Edge</th>
                    <th className="p-3.5">Volatility Level</th>
                    <th className="p-3.5">Optimal Strategy Angle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/20 text-white/80">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Classic Blackjack</td>
                    <td className="p-3.5 text-emerald-400 font-bold">99.50%</td>
                    <td className="p-3.5 text-emerald-300">0.50%</td>
                    <td className="p-3.5 text-white/70">Low</td>
                    <td className="p-3.5">Follow strict basic strategy charts on splitting & doubling</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Baccarat (Banker)</td>
                    <td className="p-3.5 text-emerald-400 font-bold">98.94%</td>
                    <td className="p-3.5 text-emerald-300">1.06%</td>
                    <td className="p-3.5 text-white/70">Low</td>
                    <td className="p-3.5">Always back Banker; avoid the 14.4% house edge on Tie bets</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Aviator Crash Game</td>
                    <td className="p-3.5 text-emerald-400 font-bold">98.50%</td>
                    <td className="p-3.5 text-emerald-300">1.50%</td>
                    <td className="p-3.5 text-yellow-400">Medium</td>
                    <td className="p-3.5">Use dual-bet auto-cashout at 1.40x to cover primary stake</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">European Roulette</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">97.30%</td>
                    <td className="p-3.5 text-yellow-400">2.70%</td>
                    <td className="p-3.5 text-white/70">Low / Medium</td>
                    <td className="p-3.5">Stick to outside even-money bets (Red/Black, Odd/Even)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Live Teen Patti (Ante Bet)</td>
                    <td className="p-3.5 text-[#F0C419] font-bold">96.50%</td>
                    <td className="p-3.5 text-yellow-400">3.50%</td>
                    <td className="p-3.5 text-yellow-400">Medium</td>
                    <td className="p-3.5">Play hands holding Q-6-4 or higher; fold lower ranks</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Lightning Roulette (Straight Up)</td>
                    <td className="p-3.5 text-white/80 font-bold">97.10%</td>
                    <td className="p-3.5 text-yellow-400">2.90%</td>
                    <td className="p-3.5 text-rose-400">Very High</td>
                    <td className="p-3.5">Spread small straight-up stakes across 10-15 numbers for 500x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Golden Pro Tip Box */}
          <div className="p-6 rounded-2xl bg-[#F0C419]/10 border-2 border-[#F0C419]/40 space-y-3">
            <div className="flex items-center gap-2 text-[#F0C419] font-extrabold text-base">
              <Star className="w-5 h-5 fill-current" />
              <span>Casino Pro Tip: The Stop-Loss & Target Profit Rule</span>
            </div>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
              Before sitting at any live table, establish your session stop-loss (e.g. 20% of your total balance) and your win goal (e.g. +30% profit). Live casino games are fast-paced, and emotional tilt is the primary reason players give back winnings. When you hit your target win threshold, trigger an instant withdrawal via our <a href="/2-minute-cashout" className="text-[#F0C419] underline font-semibold">2-minute cashout desk</a> to lock in your real-money gains!
            </p>
          </div>

          {/* Security & Studio Integrity */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Fair Play, Studio Licensing & Optical Character Recognition (OCR)
            </h2>
            <p>
              How do you know the cards and roulette spins are 100% fair? Lotus365 partners exclusively with tier-1 international providers like Evolution Gaming and Ezugi whose studios are licensed and audited by eCOGRA and the UK Gambling Commission. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-black/25 border border-white/10 space-y-1">
                <h4 className="font-bold text-[#F0C419]">High-Speed OCR Scanners</h4>
                <p className="text-white/70">Every card dealt across blackjack, baccarat, and teen patti is scanned via laser optical sensors, translating physical card values directly onto your screen with zero human manipulation.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/25 border border-white/10 space-y-1">
                <h4 className="font-bold text-[#F0C419]">Multi-Angle HD Cameras</h4>
                <p className="text-white/70">Roulette wheels and card shoes are captured by 3 independent high-speed camera angles simultaneously, including close-ups on the ball dropping into the wheel pocket.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/25 border border-white/10 space-y-1">
                <h4 className="font-bold text-[#F0C419]">Live Dealer Interaction</h4>
                <p className="text-white/70">Chat live with dealers in Hindi and English. Dealers welcome you by your username, call out placed bets, and maintain total transparency during every shoe shuffle.</p>
              </div>
            </div>
          </div>

          {/* 6 In-Depth FAQs */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-[#F0C419]" />
          {/* Multi-Camera Angle Studio Infrastructure */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Multi-Camera Studio Infrastructure & Optical Card Recognition (OCR)
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Every table in the Lotus365 live casino suite operates on cutting-edge broadcast technology. HD cameras positioned overhead, front-facing, and at close-up 45-degree angles provide continuous visual confirmation of every physical card dealt and roulette wheel revolution. Proprietary Optical Card Recognition (OCR) micro-sensors instantly read the value and suit of each physical card as the dealer slides it from the shoe, instantly displaying the data on your interactive mobile UI with zero human error or scoring ambiguity.
            </p>
          </div>

          {/* 8 FAQs */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-[#F0C419]" />
              <span>Live Casino Frequently Asked Questions</span>
            </h2>
            <div className="space-y-4 text-sm">
              {[
                {
                  q: 'Are live casino games on Lotus365 rigged or automated?',
                  a: 'No! Unlike computer-generated animated games that rely on RNG software, our Live Casino features real physical cards dealt by licensed dealers and physical roulette wheels spun on live camera. All studios are independently audited by eCOGRA for mathematical fairness.',
                },
                {
                  q: 'What is the minimum and maximum bet on live casino tables?',
                  a: 'We accommodate all budget levels. Minimum bets start as low as ₹10 on Roulette and Teen Patti, while high-roller VIP tables in our VIP Club accommodate maximum single-hand stakes of ₹5,00,000 to ₹10,00,000.',
                },
                {
                  q: 'Can I chat with the live dealers during the game?',
                  a: 'Yes! Every live table includes an interactive chat window where you can communicate with dealers in English or Hindi. Dealers respond verbally through their live audio microphones.',
                },
                {
                  q: 'Do I need a high-speed internet connection to play live casino?',
                  a: 'Our video stream automatically adjusts between 480p, 720p, and 1080p HD based on your mobile network speed. It runs smoothly on standard 4G and 5G connections without buffering.',
                },
                {
                  q: 'How do I claim a casino welcome bonus on my first deposit?',
                  a: 'Simply connect with our 24/7 WhatsApp desk, request your ID, and mention that you want the casino welcome bonus when depositing via UPI. Your bonus credits are activated instantly.',
                },
                {
                  q: 'How fast can I withdraw my live casino winnings?',
                  a: 'All casino winnings are added directly to your unified balance. You can withdraw 100% of your balance via instant UPI in under 2 minutes at any time of day or night.',
                },
                {
                  q: 'Are Hindi-speaking dealers available on Indian tables?',
                  a: 'Yes! Our Teen Patti and Andar Bahar studios feature native Hindi-speaking croupiers who celebrate winning hands and converse fluently with Indian players.',
                },
                {
                  q: 'Can I play live casino tables on my mobile phone without downloading an app?',
                  a: 'Yes! Lotus365 is 100% web-based. Simply open lotus365officialid.com on Mobile Chrome or Safari, tap your favorite game, and begin playing in fullscreen landscape or portrait mode immediately.'
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

      <RelatedPages pages={casinoRelated} />
      <PageCTA
        headline="Join 1,000+ Live Casino Tables on Lotus365"
        subtext="Real human dealers, Teen Patti, Roulette, Blackjack & Aviator. Instant WhatsApp ID in 60 seconds and 2-minute UPI cashouts!"
        ctaLabel="Get Casino ID on WhatsApp"
      />
    </Layout>
  </>
);
