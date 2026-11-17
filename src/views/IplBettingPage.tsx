import Link from 'next/link';
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { ExchangeOddsWidget } from '../components/exchange/ExchangeOddsWidget';

import { HelpCircle, Zap, Trophy, ShieldCheck, TrendingUp, Star } from 'lucide-react';

const related = [
  { href: '/cricket-betting', label: 'Cricket Betting Hub', description: 'Live cricket odds across all formats' },
  { href: '/cricket-exchange', label: 'Cricket Exchange', description: '0% commission P2P cricket trading' },
  { href: '/cricket-betting', label: 'T20 World Cup', description: 'International T20 tournament odds' },
  { href: '/cricket-exchange', label: 'Back & Lay Trading', description: 'Master exchange trading mechanics' },
  { href: '/vip-club', label: 'IPL Welcome Bonus', description: 'First deposit bonus offer on IPL' },
  { href: '/how-to-withdraw', label: '2-Minute Cashout', description: 'Instant UPI withdrawal of winnings' },
];

const iplFaqs = [
  {
    question: 'Can I bet on IPL 2026 matches live ball-by-ball on Lotus365?',
    answer: 'Yes! Lotus365 provides sub-second latency ball-by-ball in-play markets on all 74 IPL matches. You can bet on every single ball outcome, over runs, fallen wickets, and live boundary tallies as the bowler delivers the ball.',
  },
  {
    question: 'What is the Orange Cap and Purple Cap betting market?',
    answer: 'Orange Cap refers to the outright wager on the batsman who scores the most runs across the entire IPL season, while Purple Cap is the bowler who takes the most wickets. These tournament outrights are available pre-tournament and continue trading live throughout the season on Lotus365.',
  },
  {
    question: 'Is there a limit on how much I can win on an IPL match?',
    answer: 'Lotus365 offers India\'s highest betting limits. Standard accounts can wager up to ₹5,00,000 per market, while members of our exclusive VIP Club and Black Card program enjoy elevated daily limits of up to ₹50,00,000 with zero restriction on payouts.',
  },
  {
    question: 'How does dew affect IPL match odds during second innings?',
    answer: 'Heavy evening dew makes the cricket ball slick, reducing spinners\' grip and pacers\' seam control. As a result, teams batting second in night matches enjoy a marked statistical advantage. Lotus365 exchange traders frequently back the chasing team at the innings break to capitalize on dew conditions.',
  },
  {
    question: 'Can I bet on IPL live matches on my smartphone?',
    answer: 'Yes! Lotus365 runs smoothly on Chrome and Safari across all Android and iOS smartphones. Simply visit lotusplay365.shop or bookmark it to your home screen for instant 60 FPS in-play cricket odds.',
  },
  {
    question: 'How do I claim an IPL welcome bonus on my first deposit?',
    answer: 'When you register your account with our 24/7 WhatsApp desk, inform your agent that you are depositing for IPL. They will automatically credit our exclusive new-member welcome bonus to your account balance.',
  },
];

export const IplBettingPage: React.FC = () => (
  <>
    <SEOHead
      title="IPL Betting 2026 | Live Indian Premier League Odds"
      description="Bet on IPL 2026 matches live with Lotus365. Get top match odds, toss predictions, session runs (Khado/Lambi), and instant UPI payouts on every Indian match."
      canonical="/ipl-betting"
      keywords="ipl betting, ipl betting 2026, ipl online betting india, ipl match odds, ipl live betting, ipl session runs, ipl exchange odds, ipl winner odds 2026"
      faqItems={iplFaqs}
    />
    <Layout>
      <PageHero
        badge="IPL 2026 Official Betting"
        title="India's #1 Rated "
        highlight="IPL 2026 Betting Platform"
        subtitle="Trade on all 74 IPL matches with India's deepest exchange liquidity, 0% net commission, ball-by-ball micro-markets, and guaranteed 2-minute UPI cashouts directly to your bank."
        imageSrc="/images/sports/ipl.svg"
        imageAlt="IPL 2026 Championship Trophy & Match Markets"
        breadcrumbs={[{ label: 'Cricket Betting', href: '/cricket-betting' }, { label: 'IPL Betting 2026' }]}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto space-y-16 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Live IPL Exchange Widget */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#F0C419]">
                  IPL 2026 Live Trading
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Live Match Odds &amp; In-Play Markets
                </h2>
              </div>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
                All 10 Franchises Covered
              </span>
            </div>
            <ExchangeOddsWidget
              title="Chennai Super Kings vs Royal Challengers Bengaluru"
              tournament="IPL 2026 • Match 01 Opening Fixture"
              status="LIVE • 14.3 OVERS"
              score="CSK: 142/2 (RR: 9.8) • RCB Needs 184"
            />
          </div>

          {/* Section 1: The IPL Betting Phenomenon */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              The Ultimate IPL 2026 Betting Experience on Lotus365
            </h2>
            <p>
              The Indian Premier League is the pinnacle of worldwide franchise cricket, commanding over 70% of the entire Indian sports wagering market during March, April, and May. At <strong className="text-slate-900 font-bold">Lotus365</strong> (<Link href="/" className="text-emerald-700 font-semibold hover:underline hover:underline font-bold" title="lotusplay365.shop">lotusplay365.shop</Link>), we provide Indian punters with an unmatched IPL trading arena. With millions in active daily liquidity, every single match from the tournament opener through the Narendra Modi Stadium final is matched in real time at true market prices.
            </p>
            <p>
              By leveraging our peer-to-peer <Link href="/cricket-exchange" className="text-emerald-700 font-semibold hover:underline hover:underline" title="cricket exchange">cricket exchange</Link>, you bypass bookmaker margins and trade back and lay positions on match odds, session totals, player milestones, and over-by-over dynamics without a rupee cut in platform commission.
            </p>
          </div>

          {/* Section 2: Comprehensive IPL Markets Grid */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Over 70 Live In-Play Betting Markets per IPL 2026 Fixture
            </h2>
            <p>
              From the very first toss until the last delivery of the 20th over, Lotus365 covers every facet of the game:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
              {[
                'Match Winner (Back & Lay)',
                'Powerplay Runs (0-6 Overs)',
                '10-Over Session Runs',
                '15-Over Intermediate Runs',
                '20-Over Total Innings Score',
                'Top Team Batsman',
                'Top Match Bowler',
                'Total Match Sixes (Over/Under)',
                'Total Match Fours (Over/Under)',
                'Fall of Next Wicket (Runs)',
                'Method of Next Dismissal',
                'Over-by-Over Runs Line',
                'Player Milestones (50/100 Runs)',
                'Impact Player Wager Specials',
                'Tournament Winner Outright',
                'Orange Cap Top Run Scorer',
                'Purple Cap Top Wicket Taker',
                'To Reach the Play-Offs',
              ].map((m) => (
                <div key={m} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-[#F0C419] font-black">🏏</span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: All 10 Franchises Analysis */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              IPL 2026 Franchise Profiles & Betting Dynamics
            </h2>
            <p>
              Successful IPL betting requires understanding the specific strengths, home-venue advantages, and bowling depth of all 10 franchises:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              {[
                {
                  team: 'Chennai Super Kings (CSK)',
                  ground: 'MA Chidambaram Stadium (Chepauk)',
                  style: 'Spin chokehold & experienced middle order',
                  tip: 'Consistently back Under on opposition powerplay runs at Chepauk.',
                },
                {
                  team: 'Mumbai Indians (MI)',
                  ground: 'Wankhede Stadium',
                  style: 'Powerhouse batting lineup & elite pace bowling',
                  tip: 'Back Over on total match sixes when playing at Wankhede’s flat track.',
                },
                {
                  team: 'Kolkata Knight Riders (KKR)',
                  ground: 'Eden Gardens',
                  style: 'Aggressive top-order hitters & mystery spinners',
                  tip: 'Trade the powerplay session runs line when explosive openers bat.',
                },
                {
                  team: 'Royal Challengers Bengaluru (RCB)',
                  ground: 'M. Chinnaswamy Stadium',
                  style: 'High-octane strokeplay & dynamic middle-order batting',
                  tip: 'Chasing teams win 68% of evening matches at Chinnaswamy due to dew.',
                },
                {
                  team: 'Rajasthan Royals (RR)',
                  ground: 'Sawai Mansingh Stadium (Jaipur)',
                  style: 'Deep batting order and disciplined middle overs',
                  tip: 'Look for value on top bowler markets with disciplined spinners.',
                },
                {
                  team: 'Sunrisers Hyderabad (SRH)',
                  ground: 'Rajiv Gandhi Intl Stadium (Uppal)',
                  style: 'Ultra-aggressive run-rate strategy & big powerplay scoring',
                  tip: 'Look at Over lines for 6-over powerplay totals (benchmark 58+).',
                },
              ].map((f) => (
                <div key={f.team} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <div className="font-bold text-slate-900 text-base text-[#F0C419]">{f.team}</div>
                  <div className="text-slate-600"><strong>Home Venue:</strong> {f.ground}</div>
                  <div className="text-slate-600"><strong>Team Identity:</strong> {f.style}</div>
                  <div className="text-emerald-400 font-semibold pt-1">💡 Betting Angle: {f.tip}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Venue & Pitch Reading Matrix */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              IPL 2026 Venue Pitch Matrix & Target Scoring Trends
            </h2>
            <p className="text-sm text-slate-700">
              Understanding ground dimensions, dew point timing, and average first-innings scores gives you a statistical edge over casual bettors:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 border border-slate-200 text-[#F0C419] border-b border-slate-200">
                    <th className="p-3.5">Venue</th>
                    <th className="p-3.5">Avg 1st Innings Score</th>
                    <th className="p-3.5">Chasing Win %</th>
                    <th className="p-3.5">Dew Influence</th>
                    <th className="p-3.5">Key Market Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-slate-50 border border-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Chinnaswamy (Bengaluru)</td>
                    <td className="p-3.5 text-slate-900 font-bold">198 Runs</td>
                    <td className="p-3.5 text-emerald-800 font-bold font-semibold">68%</td>
                    <td className="p-3.5 text-rose-400">High (after 8:30 PM)</td>
                    <td className="p-3.5">Back Over on match boundaries (fours & sixes)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Wankhede (Mumbai)</td>
                    <td className="p-3.5 text-slate-900 font-bold">192 Runs</td>
                    <td className="p-3.5 text-emerald-800 font-bold font-semibold">64%</td>
                    <td className="p-3.5 text-rose-400">Moderate to High</td>
                    <td className="p-3.5">Back team batting second to chase anything under 200</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Chepauk (Chennai)</td>
                    <td className="p-3.5 text-slate-900 font-bold">164 Runs</td>
                    <td className="p-3.5 text-slate-500">48% (Bat 1st edge)</td>
                    <td className="p-3.5 text-emerald-800 font-bold">Low (Slow turn)</td>
                    <td className="p-3.5">Back Under on middle-over session runs (7 to 15 overs)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Motera (Ahmedabad)</td>
                    <td className="p-3.5 text-slate-900 font-bold">184 Runs</td>
                    <td className="p-3.5 text-slate-600">52% (Balanced)</td>
                    <td className="p-3.5 text-yellow-400">Moderate</td>
                    <td className="p-3.5">Pace bowlers dominate powerplay; trade top bowler odds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5: The Impact Player Rule Tactical Advantage */}
          <div className="p-6 rounded-2xl bg-[#F0C419]/10 border-2 border-[#F0C419]/40 space-y-3">
            <div className="flex items-center gap-2 text-[#F0C419] font-extrabold text-base sm:text-lg">
              <Zap className="w-5 h-5 fill-current" />
              <span>How the IPL "Impact Player" Rule Changed Session Betting</span>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              The BCCI's Impact Player substitution effectively allows teams to bat with 8 specialist batsmen or field 5 specialist frontline bowlers. Because batting depth extends down to number 9, death-over run rates in IPL have escalated from an average of 9.5 RPO to nearly 12.2 RPO. On Lotus365, savvy traders exploit this by laying conservative "Lambi" death-over lines early and backing the batting team to surge past 60 runs in the final 5 overs.
            </p>
          </div>

          {/* Section 6: Step-by-Step Setup */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How to Start Betting on IPL 2026 on Lotus365
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-emerald-700 mb-1">01</div>
                <div className="font-bold text-slate-900 mb-1">WhatsApp ID</div>
                <p className="text-slate-600">Send a quick WhatsApp message to get your verified login credentials in under 60 seconds.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-emerald-700 mb-1">02</div>
                <div className="font-bold text-slate-900 mb-1">UPI Deposit</div>
                <p className="text-slate-600">Deposit ₹100 or more with PhonePe, Google Pay, or Paytm. Balance reflects in 30 seconds.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-emerald-700 mb-1">03</div>
                <div className="font-bold text-slate-900 mb-1">Trade Live Match</div>
                <p className="text-slate-600">Open the IPL live board, back or lay match odds, and lock in guaranteed profits via greening up.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-emerald-700 mb-1">04</div>
                <div className="font-bold text-slate-900 mb-1">Instant Cashout</div>
                <p className="text-slate-600">Withdraw winnings with our guaranteed <Link href="/how-to-withdraw" className="text-emerald-700 font-semibold hover:underline hover:underline" title="2-minute cashout SLA">2-minute cashout SLA</Link> directly to your bank account.</p>
              </div>
            </div>
          </div>

          {/* Section 7: 6 In-Depth FAQs */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-[#F0C419]" />
              <span>IPL 2026 Betting Frequently Asked Questions</span>
            </h2>
            <div className="space-y-4 text-sm">
              {iplFaqs.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                    <span className="text-[#F0C419] font-extrabold">Q{idx + 1}:</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedPages pages={related} />
      <PageCTA
        headline="Bet on IPL 2026 with India's Best Odds"
        subtext="Get your official Lotus365 Cricket ID via WhatsApp in 60 seconds. Instant UPI deposits, 0% commission, and 2-minute cashouts!"
        ctaLabel="Get IPL ID on WhatsApp"
      />
    </Layout>
  </>
);
