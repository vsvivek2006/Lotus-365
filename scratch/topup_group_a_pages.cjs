const fs = require('fs');
const path = require('path');

const srcPages = path.join(__dirname, '..', 'src', 'pages');

// 1. TermsPage.tsx
{
  let content = fs.readFileSync(path.join(srcPages, 'TermsPage.tsx'), 'utf8');
  if (!content.includes('Terms Governing Anti-Fraud & Syndicate Collision')) {
    const target = '<div>\n              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">10. Policy Amendments & Continuous Compliance</h2>';
    const addition = `<div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">10. Terms Governing Anti-Fraud & Syndicate Collision Detection</h2>
              <p className="mb-2">
                Lotus365 deploys continuous algorithmic telemetry to detect abnormal wagering collusion, latency arbitrage exploitation, and multi-accounting schemes designed to bypass platform exposure limits. Any betting pattern determined by our risk desk to originate from syndicate operation, proxy execution, or automated bots constitutes a material breach of this agreement.
              </p>
              <p className="text-xs text-white/80">
                In such occurrences, Lotus365 reserves the unilateral right to freeze pending settlement, void illegitimate wagers, and return principal deposits strictly after full audit clearance. Users agree to maintain honest gaming ethics at all times across all sports markets and live casino tables.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#F0C419] mb-3">11. Policy Amendments & Continuous Compliance</h2>`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'TermsPage.tsx'), content, 'utf8');
    console.log('Updated TermsPage.tsx');
  }
}

// 2. T20WorldCupPage.tsx
{
  let content = fs.readFileSync(path.join(srcPages, 'T20WorldCupPage.tsx'), 'utf8');
  if (!content.includes('ICC T20 World Cup Super 8 & Knockout Stage Dynamics')) {
    const target = '{/* FAQs */}';
    const addition = `{/* Super 8 Strategy Breakdown */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                ICC T20 World Cup Super 8 & Knockout Stage Dynamics
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                As the ICC T20 World Cup transitions from group fixtures to the high-stakes Super 8 and semi-final knockout rounds, market volatility accelerates exponentially. Pitch wear, dew factors in night encounters, and tactical field restrictions generate massive intraday price fluctuations on the Lotus365 Cricket Exchange. Shrewd exchange traders hedge their tournament outright positions during the powerplay overs, laying short-priced favorites before middle overs spin bottlenecks to lock in risk-free green books across all possible victory outcomes.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Lotus365 delivers unrivaled depth with ball-by-ball micro-markets, individual bowler economy figures, top team batter run brackets, and live DRS dismissal probabilities. Coupled with our instant 2-minute UPI cashout infrastructure, you maintain total liquid sovereignty over your sports betting bankroll throughout the entire tournament campaign.
              </p>
            </div>

            {/* FAQs */}`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'T20WorldCupPage.tsx'), content, 'utf8');
    console.log('Updated T20WorldCupPage.tsx');
  }
}

// 3. SitemapPage.tsx
{
  let content = fs.readFileSync(path.join(srcPages, 'SitemapPage.tsx'), 'utf8');
  if (!content.includes('Architecture & Search Engine Indexing Guide')) {
    const target = '{/* Search & Stats */}';
    const addition = `{/* Search Engine Indexing Architecture Guide */}
          <div className="p-6 rounded-2xl bg-[#0b3b2d]/50 border border-white/10 space-y-4">
            <h2 className="text-xl font-extrabold text-[#F0C419]">
              Lotus365 Information Architecture & Search Engine Indexing Guide
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              The Lotus365 web portal is structured following hierarchical topic clusters and semantic categorization protocols to guarantee flawless navigation for human visitors and optimal indexation for search engine crawlers. Each of our 54 distinct platform destinations serves a dedicated informational and transactional intent, ranging from comprehensive sports betting exchange tutorials and live casino game guides to 2-minute UPI banking walkthroughs and VIP privilege breakdowns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1">Exchange & Sportsbook Hub</h4>
                <p className="text-xs text-white/70">Covers real-time back/lay exchange markets for cricket, IPL, football, tennis, and international tournaments with live liquidity analysis.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1">Live Dealer & Casino Hub</h4>
                <p className="text-xs text-white/70">Provides detailed rules, table betting limits, and winning strategies for authentic Indian card games including Teen Patti, Andar Bahar, and Roulette.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1">Zero APK PWA Infrastructure</h4>
                <p className="text-xs text-white/70">Outlines our secure, 100% web-based Progressive Web App framework eliminating risky third-party APK downloads with instant WhatsApp ID issuance.</p>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Every route listed below is continuously synchronized with our canonical XML sitemap and monitored for sub-second rendering performance, encrypted SSL protection, and mobile responsive optimization across all modern smartphone and desktop browsers.
            </p>
          </div>

          {/* Search & Stats */}`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'SitemapPage.tsx'), content, 'utf8');
    console.log('Updated SitemapPage.tsx');
  }
}

// 4. AccountPages.tsx (RegisterPage and LoginPage)
{
  let content = fs.readFileSync(path.join(srcPages, 'AccountPages.tsx'), 'utf8');
  if (!content.includes('Device Compatibility Guarantee for Instant Registration')) {
    const target1 = '{/* Quick Steps */}';
    const addition1 = `{/* Universal Device Compatibility */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Universal Device Compatibility Guarantee for Instant Registration
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Whether you access Lotus365 on an Android smartphone, Apple iPhone, iPad, Windows workstation, or MacBook, our Progressive Web App (PWA) architecture operates flawlessly without demanding file downloads or third-party APK permissions. Simply connect with our official WhatsApp verification desk at <strong className="text-emerald-400">https://wa.link/880088</strong> from any modern browser (Chrome, Safari, Firefox, or Edge) to receive your verified username and login credential token instantly. You enjoy 100% battery efficiency, zero storage overhead, and state-of-the-art 256-bit SSL transaction encryption across every session.
              </p>
            </div>

            {/* Quick Steps */}`;
    content = content.replace(target1, addition1);

    const target2 = '<div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">\n              <h3 className="text-base font-bold text-[#F0C419]">\n                Zero Risk Account Recovery & Re-Issuance Policy';
    const addition2 = `<div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Session Security & Multi-Device Login Management
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Lotus365 implements military-grade session isolation across all authenticated sessions. When you log into your betting ID from your primary smartphone, your active session token is locked to your hardware footprint. If you ever switch devices or log in from a tablet or PC, our system alerts our 24/7 security protocol to ensure your bankroll balance and open exchange bets remain 100% safeguarded against unauthorized external access.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Zero Risk Account Recovery & Re-Issuance Policy`;
    content = content.replace(target2, addition2);

    fs.writeFileSync(path.join(srcPages, 'AccountPages.tsx'), content, 'utf8');
    console.log('Updated AccountPages.tsx');
  }
}

// 5. SpecialGamePages.tsx (ColorPredictionPage and VirtualSportsPage)
{
  let content = fs.readFileSync(path.join(srcPages, 'SpecialGamePages.tsx'), 'utf8');
  if (!content.includes('Advanced Color Cycle Probability Tracking')) {
    const target = '              ].map((faq, idx) => (\n                <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/10">';
    const addition = `                {
                  q: 'What is the minimum stake to begin playing Color Prediction on Lotus365?',
                  a: 'You can start wagering with as little as ₹10 per round. This low barrier to entry allows beginners to test color patterns and streak hedging strategies before scaling up their betting volume.'
                },
                {
                  q: 'Are Color Prediction rounds auditable and provably fair?',
                  a: 'Yes. Every 30-second and 60-second result is computed using certified cryptographic random number generators (RNG) with SHA-256 hash proofs published immediately upon round termination.'
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/10">`;
    // Replace in ColorPredictionPage section
    const idxCP = content.indexOf('export const ColorPredictionPage');
    const idxTarget = content.indexOf('              ].map((faq, idx) => (', idxCP);
    if (idxTarget !== -1) {
      content = content.substring(0, idxTarget) + addition + content.substring(idxTarget + '              ].map((faq, idx) => ('.length);
      console.log('Updated ColorPredictionPage FAQs');
    }

    // Now for VirtualSportsPage
    const idxVS = content.indexOf('export const VirtualSportsPage');
    const idxVSTarget = content.indexOf('              ].map((faq, idx) => (', idxVS);
    if (idxVSTarget !== -1) {
      const vsAddition = `                {
                  q: 'How frequently do Virtual Cricket and Virtual Football matches start?',
                  a: 'Virtual matches kick off continuously every 90 to 180 seconds around the clock, 24 hours a day, 365 days a year. You never have to wait for real-world tournament calendars or weather delays.'
                },
                {
                  q: 'Can I bet both pre-match and in-play on Virtual Sports?',
                  a: 'Yes. You can place wagers prior to kickoff or adjust your stakes in real time as the dynamic simulation unfolds with instant odds recalibration and automated settlement.'
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/10">`;
      content = content.substring(0, idxVSTarget) + vsAddition + content.substring(idxVSTarget + '              ].map((faq, idx) => ('.length);
      console.log('Updated VirtualSportsPage FAQs');
    }
    fs.writeFileSync(path.join(srcPages, 'SpecialGamePages.tsx'), content, 'utf8');
  }
}

// 6. IndianCardGamePages.tsx (AndarBaharPage)
{
  let content = fs.readFileSync(path.join(srcPages, 'IndianCardGamePages.tsx'), 'utf8');
  if (!content.includes('Understanding Card Count Probability in Andar Bahar')) {
    const target = '{/* FAQs */}';
    const addition = `{/* Pro Strategy Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Understanding Card Count Probability & Mathematical Edge in Andar Bahar
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                In authentic Andar Bahar, the opening card dealt from the shoe dictates the entire round mathematical baseline. Because the dealer invariably deals the first card to the Andar box, Andar enjoys a persistent statistical advantage with a 51.5% probability of winning versus 48.5% for Bahar. This translates to a payout of 0.9 to 1 on Andar (yielding a 90% profit return) and 1 to 1 on Bahar (yielding 100% profit return).
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Experienced card players on Lotus365 frequently combine main box bets with side wagers on card counts (e.g., matching card dealt within 1-5 cards vs. 20+ cards) to optimize variance. With our live HD streaming straight from Evolution and Ezugi studios, you observe every shuffle and deal with absolute transparency.
              </p>
            </div>

            {/* FAQs */}`;
    const idxAB = content.indexOf('export const AndarBaharPage');
    const idxFAQ = content.indexOf('{/* FAQs */}', idxAB);
    if (idxFAQ !== -1) {
      content = content.substring(0, idxFAQ) + addition + content.substring(idxFAQ + '{/* FAQs */}'.length);
      fs.writeFileSync(path.join(srcPages, 'IndianCardGamePages.tsx'), content, 'utf8');
      console.log('Updated AndarBaharPage in IndianCardGamePages.tsx');
    }
  }
}

// 7. FootballTennisBettingPage.tsx (TennisBettingPage)
{
  let content = fs.readFileSync(path.join(srcPages, 'FootballTennisBettingPage.tsx'), 'utf8');
  if (!content.includes('Surface Analysis & In-Play Break Point Trading')) {
    const target = '{/* FAQs */}';
    const addition = `{/* Tennis Trading Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Surface Analysis & In-Play Break Point Trading Strategies
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Tennis betting on the Lotus365 Exchange is celebrated for explosive odds movement during critical break-point situations and tiebreaks. Court surfaces profoundly impact server dominance: fast grass at Wimbledon heavily favors big-serving aces, while slow clay at Roland Garros produces prolonged rallies and frequent service breaks. Shrewd traders back underdogs serving 0-30 or 15-40 when odds balloon, hedging their risk as soon as the server stabilizes back to deuce.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Our platform delivers sub-second point-by-point live odds across all ATP, WTA, and Grand Slam tournaments with zero latency delay, empowering you to execute sharp back and lay wagers with instant settlement and 2-minute UPI cashouts.
              </p>
            </div>

            {/* FAQs */}`;
    const idxTennis = content.indexOf('export const TennisBettingPage');
    const idxFAQ = content.indexOf('{/* FAQs */}', idxTennis);
    if (idxFAQ !== -1) {
      content = content.substring(0, idxFAQ) + addition + content.substring(idxFAQ + '{/* FAQs */}'.length);
      fs.writeFileSync(path.join(srcPages, 'FootballTennisBettingPage.tsx'), content, 'utf8');
      console.log('Updated TennisBettingPage in FootballTennisBettingPage.tsx');
    }
  }
}

// 8. OtherSportPages.tsx (Kabaddi, Basketball, Horse Racing, Sportsbook)
{
  let content = fs.readFileSync(path.join(srcPages, 'OtherSportPages.tsx'), 'utf8');
  
  // Kabaddi
  if (!content.includes('Super Raid Dynamics & Bonus Line Strategy')) {
    const idxK = content.indexOf('export const KabaddiBettingPage');
    const idxKFAQ = content.indexOf('{/* FAQs */}', idxK);
    if (idxKFAQ !== -1) {
      const kAdd = `{/* Pro Raid Strategy */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Super Raid Dynamics & Bonus Line Tactical Wagering
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                In modern Pro Kabaddi League action, super raids and do-or-die situations generate instantaneous momentum swings. Bettors on Lotus365 gain an edge by monitoring defender combinations (corners and covers) against opposing star raiders. Placing live wagers when a team triggers an all-out offers magnified exchange odds before the revival cycle resets court equilibrium.
              </p>
            </div>

            {/* FAQs */}`;
      content = content.substring(0, idxKFAQ) + kAdd + content.substring(idxKFAQ + '{/* FAQs */}'.length);
      console.log('Updated Kabaddi in OtherSportPages.tsx');
    }
  }

  // Basketball
  if (!content.includes('Pace Factor & 4th Quarter Totals')) {
    const idxB = content.indexOf('export const BasketballBettingPage');
    const idxBFAQ = content.indexOf('{/* FAQs */}', idxB);
    if (idxBFAQ !== -1) {
      const bAdd = `{/* NBA In-Play Analysis */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Pace Factor & 4th Quarter Over/Under Totals Hedging
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Basketball trading thrives on pace-of-play analytics and foul trouble. When key rim protectors accumulate early fouls in NBA or EuroLeague games, inside scoring surges, creating valuable in-play opportunities on live totals. Lotus365 provides continuous point-spread updates, quarter handicaps, and team prop markets with immediate liquidity.
              </p>
            </div>

            {/* FAQs */}`;
      content = content.substring(0, idxBFAQ) + bAdd + content.substring(idxBFAQ + '{/* FAQs */}'.length);
      console.log('Updated Basketball in OtherSportPages.tsx');
    }
  }

  // Horse Racing
  if (!content.includes('Going Conditions & Track Handicap Analysis')) {
    const idxH = content.indexOf('export const HorseRacingPage');
    const idxHFAQ = content.indexOf('{/* FAQs */}', idxH);
    if (idxHFAQ !== -1) {
      const hAdd = `{/* Track & Going Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Going Conditions & Track Handicap Analysis for Indian Derbies
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Successful turf wagering across Mumbai (Mahalaxmi), Bangalore, Kolkata, and Pune demands careful assessment of track going conditions (firm, good, soft, or heavy). Rain-softened ground severely tests stamina, favoring stout stayers over pure speed sprinters. Lotus365 provides live paddock updates, jockey weight adjustments, and official starting odds across all domestic and international racecards.
              </p>
            </div>

            {/* FAQs */}`;
      content = content.substring(0, idxHFAQ) + hAdd + content.substring(idxHFAQ + '{/* FAQs */}'.length);
      console.log('Updated Horse Racing in OtherSportPages.tsx');
    }
  }

  // Sportsbook
  if (!content.includes('Exchange Liquidity vs. Fixed Sportsbook Margins')) {
    const idxS = content.indexOf('export const SportsbookPage');
    const idxSFAQ = content.indexOf('{/* FAQs */}', idxS);
    if (idxSFAQ !== -1) {
      const sAdd = `{/* Sportsbook Architecture Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Exchange Liquidity vs. Fixed Sportsbook Margins Explained
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                The Lotus365 Sportsbook bridges the best of both wagering worlds: peer-to-peer exchange trading with zero bookmaker margin and comprehensive fixed-odds sportsbook markets for multis, accumulators, and exotic player props. Whether you prefer locking in fixed returns before match kickoff or actively trading price swings in-play, your unified wallet provides seamless access with instant UPI settlements.
              </p>
            </div>

            {/* FAQs */}`;
      content = content.substring(0, idxSFAQ) + sAdd + content.substring(idxSFAQ + '{/* FAQs */}'.length);
      console.log('Updated Sportsbook in OtherSportPages.tsx');
    }
  }

  fs.writeFileSync(path.join(srcPages, 'OtherSportPages.tsx'), content, 'utf8');
}

console.log('Group A top-up completed successfully!');
