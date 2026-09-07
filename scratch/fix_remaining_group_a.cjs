const fs = require('fs');
const path = require('path');

const srcPages = path.join(__dirname, '..', 'src', 'pages');

// 1. AccountPages.tsx -> LoginPage
{
  let content = fs.readFileSync(path.join(srcPages, 'AccountPages.tsx'), 'utf8');
  if (!content.includes('Credential Reset & 2FA Emergency Recovery Protocol')) {
    const target = '{/* Security Practices */}';
    const addition = `{/* Emergency Recovery Protocol */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Credential Reset & 2FA Emergency Recovery Protocol
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                If you ever forget your password or lose access to your WhatsApp account, our security desk provides rapid account restoration. Message our official verification channel from your registered mobile number or verify your recent UPI transaction reference. Once verified by our senior shift supervisor, your account password is encrypted and re-issued within two minutes, ensuring your open bets and wallet balance remain completely secure.
              </p>
            </div>

            {/* Security Practices */}`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'AccountPages.tsx'), content, 'utf8');
    console.log('Updated LoginPage in AccountPages.tsx');
  }
}

// 2. PaymentPages.tsx -> PaymentMethodsPage
{
  let content = fs.readFileSync(path.join(srcPages, 'PaymentPages.tsx'), 'utf8');
  if (!content.includes('Corporate Account Segregation & Daily Transaction Reconciliation')) {
    const target = '{/* Redundancy Guide */}';
    const addition = `{/* Reconciliation & Audits */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Corporate Account Segregation & Daily Transaction Reconciliation
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Lotus365 adheres to stringent financial risk management protocols. All player funds are held in ring-fenced, segregated corporate accounts completely isolated from platform operational expenses. Every deposit via UPI or IMPS is automatically audited and reconciled every 60 minutes against merchant settlement ledgers, ensuring 100% solvency and instant liquidity fulfillment even during peak high-volume IPL tournament weekends.
              </p>
            </div>

            {/* Redundancy Guide */}`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'PaymentPages.tsx'), content, 'utf8');
    console.log('Updated PaymentMethodsPage in PaymentPages.tsx');
  }
}

// 3. T20WorldCupPage.tsx
{
  let content = fs.readFileSync(path.join(srcPages, 'T20WorldCupPage.tsx'), 'utf8');
  if (!content.includes('Super 8 Overs Trading & DRS Impact Dynamics')) {
    const target = '{/* Section 6: 6 FAQs */}';
    const addition = `{/* Tactical In-Play Analysis */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Super 8 Overs Trading & DRS Impact Dynamics in T20 World Cup
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              In ICC T20 World Cup fixtures, in-play liquidity surges during death overs (overs 16 to 20) and critical DRS reviews. Lotus365 provides sub-second odds recalculations that allow sharp traders to back batting sides when boundary hitters find rhythm or lay short prices when mystery spinners trigger middle-over dot ball pressure. Combined with zero latency streaming updates and 2-minute UPI cashouts, you maintain an unmatched betting advantage throughout the tournament.
            </p>
          </div>

          {/* Section 6: 6 FAQs */}`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'T20WorldCupPage.tsx'), content, 'utf8');
    console.log('Updated T20WorldCupPage.tsx');
  }
}

// 4. SitemapPage.tsx
{
  let content = fs.readFileSync(path.join(srcPages, 'SitemapPage.tsx'), 'utf8');
  if (!content.includes('Full Information Architecture & Topic Cluster Index')) {
    const target = '{/* Categorized Link Grid */}';
    const addition = `{/* Comprehensive Architecture Overview */}
          <div className="p-6 rounded-2xl bg-black/25 border border-white/10 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#F0C419]">
              Full Information Architecture & Topic Cluster Index
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Our 54 platform routes are categorized into six core thematic silos to deliver an intuitive user experience and clear semantic signals to search engines. The Sports Betting exchange silo provides comprehensive market depth for cricket, IPL, football, and tennis. The Live Casino cluster contains dedicated guides for Indian classics like Teen Patti and Andar Bahar alongside Evolution Gaming roulette, blackjack, and baccarat. The Banking hub covers step-by-step 2-minute UPI deposits and instant IMPS cashouts, while the VIP & Promotions directory details cashback tiers, referral bonuses, and high-roller privileges.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Every page on lotus365officialid.com operates under HTTPS SSL encryption, complies with Google mobile-first indexing standards, and offers direct access to our 24/7 human WhatsApp concierge service at https://wa.link/880088 without requiring third-party APK downloads.
            </p>
          </div>

          {/* Categorized Link Grid */}`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'SitemapPage.tsx'), content, 'utf8');
    console.log('Updated SitemapPage.tsx');
  }
}

// 5. IndianCardGamePages.tsx -> AndarBaharPage
{
  let content = fs.readFileSync(path.join(srcPages, 'IndianCardGamePages.tsx'), 'utf8');
  if (!content.includes('Live Dealer Shoe Integrity & Optical Scanner Verification')) {
    const target = '{/* 5 FAQs */}';
    const addition = `{/* Dealer Integrity Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Live Dealer Shoe Integrity & Optical Scanner Verification
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Every live Andar Bahar table on Lotus365 is operated by licensed gaming providers including Super Spade Games, Ezugi, and Evolution. Dealers draw cards through optical barcode scanning shoes that register each card value digitally the millisecond it exits the dealing box. This eliminates human error, guarantees 100% fair card distribution, and ensures live payouts are calculated and credited to your wallet balance instantaneously.
              </p>
            </div>

            {/* 5 FAQs */}`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'IndianCardGamePages.tsx'), content, 'utf8');
    console.log('Updated AndarBaharPage in IndianCardGamePages.tsx');
  }
}

// 6. FootballTennisBettingPage.tsx -> TennisBettingPage
{
  let content = fs.readFileSync(path.join(srcPages, 'FootballTennisBettingPage.tsx'), 'utf8');
  if (!content.includes('Tiebreak Hedging & Service Game Break Volatility')) {
    const target = '{/* 7 Tennis FAQs */}';
    const addition = `{/* Tiebreak Trading Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Tiebreak Hedging & Service Game Break Volatility in Live Tennis
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Tennis trading provides extraordinary opportunities during set-deciding tiebreaks. A single mini-break can swing odds from 1.30 to 2.20 in seconds. By laying the leading server during high-pressure tiebreak moments and backing the returner, traders capture price swings with minimal downside. On Lotus365, all tennis exchange bets settle instantly upon point confirmation, providing maximum liquidity for your bankroll.
              </p>
            </div>

            {/* 7 Tennis FAQs */}`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'FootballTennisBettingPage.tsx'), content, 'utf8');
    console.log('Updated TennisBettingPage in FootballTennisBettingPage.tsx');
  }
}

// 7. OtherSportPages.tsx -> Kabaddi, Basketball, Horse Racing
{
  let content = fs.readFileSync(path.join(srcPages, 'OtherSportPages.tsx'), 'utf8');
  
  if (!content.includes('Do-or-Die Raid Mechanics & Bonus Line Defense')) {
    const targetK = '{/* Golden Pro Tip */}';
    const additionK = `{/* Tactical Defense Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Do-or-Die Raid Mechanics & Bonus Line Defensive Strategies
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                In Pro Kabaddi, defensive units actively bait raiders into the bonus line during do-or-die raids to trigger aggressive ankle holds and chain tackles. Tracking defensive team tackle success percentages allows savvy bettors to capitalize on generous in-play exchange odds when underdogs mount surprise defensive comebacks.
              </p>
            </div>

            {/* Golden Pro Tip */}`;
    content = content.replace(targetK, additionK);
    console.log('Updated Kabaddi in OtherSportPages.tsx');
  }

  if (!content.includes('4th Quarter Free Throw Strategy & Timeouts')) {
    const targetB = '{/* EuroLeague vs NBA Contrast */}';
    const additionB = `{/* Clutch Free Throw Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                4th Quarter Free Throw Strategy & Intentional Fouling Impact
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                During the final two minutes of close NBA matches, the frequency of intentional fouls to stop the clock inflates game totals. Savvy traders on Lotus365 bet the live over on point totals when trailing teams enter penalty situations with high free-throw percentage shooters on court.
              </p>
            </div>

            {/* EuroLeague vs NBA Contrast */}`;
    content = content.replace(targetB, additionB);
    console.log('Updated Basketball in OtherSportPages.tsx');
  }

  if (!content.includes('Jockey Weights & Handicapping Penalties')) {
    const targetH = '{/* Pedigree & Breeding Lineage Analysis */}';
    const additionH = `{/* Jockey & Weight Handicap Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Jockey Weights & Official Handicapping Penalties
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Every kilogram of assigned weight can alter a thoroughbred\'s finishing speed over staying distances of 2000m or 2400m. Analyzing weight penalties carried by previous winners versus lightweight contenders with apprentice jockey allowances gives bettors a strong statistical edge across Indian classic derbies on Lotus365.
              </p>
            </div>

            {/* Pedigree & Breeding Lineage Analysis */}`;
    content = content.replace(targetH, additionH);
    console.log('Updated Horse Racing in OtherSportPages.tsx');
  }

  fs.writeFileSync(path.join(srcPages, 'OtherSportPages.tsx'), content, 'utf8');
}

console.log('All remaining Group A fixes applied successfully!');
