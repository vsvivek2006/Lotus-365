const fs = require('fs');
const path = require('path');

const srcPages = path.join(__dirname, '..', 'src', 'pages');

// --- 1. PAYMENT PAGES ---
let payContent = fs.readFileSync(path.join(srcPages, 'PaymentPages.tsx'), 'utf8');

// HowToWithdrawPage
if (!payContent.includes('Detailed Bank Reconciliation Guidelines for Withdrawals')) {
  const target = '{/* FAQs */}';
  const idxW = payContent.indexOf('export const HowToWithdrawPage');
  const idxTarget = payContent.indexOf('{/* FAQs */}', idxW);
  if (idxTarget !== -1) {
    const addition = `{/* Reconciliation Guidelines */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Detailed Bank Reconciliation & Instant Settlement Protocol
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                When you initiate a withdrawal request on Lotus365, our automated disbursement engine immediately cross-references your wagering turnover and account balance against our real-time liquidity reserves. Once validated by our senior finance desk on WhatsApp, payout instructions are dispatched via high-priority IMPS or instant UPI merchant nodes, ensuring your funds reflect in your bank statement within 120 seconds.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                We maintain direct integrations with India’s leading commercial banking partners including HDFC Bank, ICICI Bank, State Bank of India (SBI), Axis Bank, and Kotak Mahindra Bank. This dedicated banking infrastructure guarantees that your winnings bypass common retail payment gateway bottlenecks, granting you frictionless access to your profits 24 hours a day, 365 days a year.
              </p>
            </div>

            {/* FAQs */}`;
    payContent = payContent.substring(0, idxTarget) + addition + payContent.substring(idxTarget + '{/* FAQs */}'.length);
    console.log('Updated HowToWithdrawPage in PaymentPages.tsx');
  }
}

// UpiDepositPage
if (!payContent.includes('Resolving UPI Transaction Failures and UTR Tracing')) {
  const target = '{/* FAQs */}';
  const idxU = payContent.indexOf('export const UpiDepositPage');
  const idxTarget = payContent.indexOf('{/* FAQs */}', idxU);
  if (idxTarget !== -1) {
    const addition = `{/* UTR Tracing Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Resolving UPI Transaction Failures & 12-Digit UTR Tracing
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                In rare instances where a UPI transaction shows as debited in your PhonePe, Google Pay, or Paytm app but hasn't credited to your betting balance within 60 seconds, there is no need to worry. Every UPI payment generates an immutable 12-digit Unique Transaction Reference (UTR) number recorded across NPCI banking rails. Simply copy this 12-digit UTR and paste it directly into your active WhatsApp chat with our verification desk.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Our support agents utilize real-time banking webhooks to instantly ping the receiving merchant bank, trace the payment status, and manually verify the credit to your ID. With 24/7 human oversight, your deposited capital is 100% safeguarded and never trapped in limbo.
              </p>
            </div>

            {/* FAQs */}`;
    payContent = payContent.substring(0, idxTarget) + addition + payContent.substring(idxTarget + '{/* FAQs */}'.length);
    console.log('Updated UpiDepositPage in PaymentPages.tsx');
  }
}

// ImpsWithdrawalPage
if (!payContent.includes('National IMPS Gateway Architecture & Large Payout Handling')) {
  const target = '{/* FAQs */}';
  const idxI = payContent.indexOf('export const ImpsWithdrawalPage');
  const idxTarget = payContent.indexOf('{/* FAQs */}', idxI);
  if (idxTarget !== -1) {
    const addition = `{/* IMPS Gateway Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                National IMPS Gateway Architecture & High-Roller Payout Handling
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Immediate Payment Service (IMPS) constitutes the backbone of high-volume financial disbursements on Lotus365. Built by the National Payments Corporation of India (NPCI), IMPS allows seamless transfer of amounts up to ₹5,00,000 per single batch transaction. For high rollers and VIP Black Card members with larger profit balances, our financial desk partitions cashouts across parallel IMPS channels, allowing multi-lakh settlements to complete within a tight 5 to 10 minute window.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                To guarantee zero rejection rates, double-check that your recipient account number and 11-digit IFSC code are typed accurately when submitting your cashout slip to your WhatsApp concierge.
              </p>
            </div>

            {/* FAQs */}`;
    payContent = payContent.substring(0, idxTarget) + addition + payContent.substring(idxTarget + '{/* FAQs */}'.length);
    console.log('Updated ImpsWithdrawalPage in PaymentPages.tsx');
  }
}

// PaymentMethodsPage
if (!payContent.includes('Payment Channel Redundancy & Zero-Downtime Guarantee')) {
  const target = '{/* FAQs */}';
  const idxP = payContent.indexOf('export const PaymentMethodsPage');
  const idxTarget = payContent.indexOf('{/* FAQs */}', idxP);
  if (idxTarget !== -1) {
    const addition = `{/* Redundancy Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Payment Channel Redundancy & Zero-Downtime Settlement Guarantee
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Digital payment gateways in India occasionally experience server maintenance or regional network congestion. To ensure our players never experience interrupted deposits or frozen withdrawals, Lotus365 operates a multi-tiered banking failover matrix. If one bank handle or UPI server experiences higher than normal latency, our smart routing algorithm automatically shifts incoming and outgoing requests to secondary banking nodes including ICICI UPI, Axis Pay, and Yes Bank corporate rails.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                This enterprise-level banking architecture ensures that whether it's peak IPL match hours on a Sunday evening or a national banking holiday, your deposits and 2-minute cashouts proceed smoothly without delay.
              </p>
            </div>

            {/* FAQs */}`;
    payContent = payContent.substring(0, idxTarget) + addition + payContent.substring(idxTarget + '{/* FAQs */}'.length);
    console.log('Updated PaymentMethodsPage in PaymentPages.tsx');
  }
}

// TwoMinuteCashoutPage
if (!payContent.includes('Liquidity Reserves & Automated Cashout Verification Protocol')) {
  const target = '{/* FAQs */}';
  const idxC = payContent.indexOf('export const TwoMinuteCashoutPage');
  const idxTarget = payContent.indexOf('{/* FAQs */}', idxC);
  if (idxTarget !== -1) {
    const addition = `{/* Liquidity Protocol */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Dedicated Liquidity Reserves & Automated Cashout Verification Protocol
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                The reason Lotus365 can legitimately fulfill its industry-famous "2-Minute Cashout" guarantee while other platforms take 24 to 48 hours is our dedicated institutional liquidity reserve. We hold segregated bankroll balances across multiple tier-one Indian banking institutions specifically earmarked for player winnings. When you tap "Withdraw" and submit your UPI address on WhatsApp, you aren't waiting for other player deposits to clear; funds are released instantly from our liquid treasury.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Every cashout is validated against fair play compliance, confirming that bets were placed legitimately according to exchange rules. Once checked, the automated payout fires, landing directly into your PhonePe, Google Pay, or bank account before you even close your WhatsApp chat window.
              </p>
            </div>

            {/* FAQs */}`;
    payContent = payContent.substring(0, idxTarget) + addition + payContent.substring(idxTarget + '{/* FAQs */}'.length);
    console.log('Updated TwoMinuteCashoutPage in PaymentPages.tsx');
  }
}

fs.writeFileSync(path.join(srcPages, 'PaymentPages.tsx'), payContent, 'utf8');

// --- 2. CASINO GAME PAGES ---
let casinoContent = fs.readFileSync(path.join(srcPages, 'CasinoGamePages.tsx'), 'utf8');

// BlackjackPage
if (!casinoContent.includes('Advanced Basic Strategy & Insurance Mathematical Analysis')) {
  const target = '{/* 8 FAQs */}';
  const idxBJ = casinoContent.indexOf('export const BlackjackPage');
  const idxTarget = casinoContent.indexOf('{/* 8 FAQs */}', idxBJ);
  if (idxTarget !== -1) {
    const addition = `{/* Pro Strategy Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Advanced Basic Strategy & Mathematical Analysis of Insurance Bets
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                One of the most frequent errors made by novice blackjack players is taking the "Insurance" bet when the dealer displays an Ace upcard. Mathematically, insurance pays 2:1 while the true odds of the dealer holding a 10-value hole card in an 8-deck shoe are roughly 9:4 (approx 30.7%). This gives the house a steep 7.4% advantage on the insurance proposition alone. Professional players on Lotus365 consistently decline insurance and adhere strictly to basic strategy tables: always split Aces and 8s, double down on 11 against any dealer upcard from 2 through 10, and stand on hard 12-16 when the dealer displays bust cards (4, 5, or 6).
              </p>
            </div>

            {/* 8 FAQs */}`;
    casinoContent = casinoContent.substring(0, idxTarget) + addition + casinoContent.substring(idxTarget + '{/* 8 FAQs */}'.length);
    console.log('Updated BlackjackPage in CasinoGamePages.tsx');
  }
}

// BaccaratPage
if (!casinoContent.includes('The Mathematical Edge of Banker Bets and Commission Mechanics')) {
  const target = '{/* 8 FAQs */}';
  const idxBAC = casinoContent.indexOf('export const BaccaratPage');
  const idxTarget = casinoContent.indexOf('{/* 8 FAQs */}', idxBAC);
  if (idxTarget !== -1) {
    const addition = `{/* Pro Strategy Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                The Mathematical Edge of Banker Bets & Commission Mechanics
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                In standard live baccarat, the Banker bet wins approximately 45.86% of rounds, the Player bet wins 44.62%, and Ties occur 9.52% of the time. When resolving rounds excluding ties, the Banker wins 50.68% of all hands. Because of this slight statistical bias created by third-card drawing rules, casinos charge a 5% commission on winning Banker bets, yielding a razor-thin house edge of just 1.06% compared to 1.24% on Player. Experienced baccarat players avoid Tie bets (14.36% house edge) and consistently back the Banker trend for maximum capital efficiency.
              </p>
            </div>

            {/* 8 FAQs */}`;
    casinoContent = casinoContent.substring(0, idxTarget) + addition + casinoContent.substring(idxTarget + '{/* 8 FAQs */}'.length);
    console.log('Updated BaccaratPage in CasinoGamePages.tsx');
  }
}

// DragonTigerPage
if (!casinoContent.includes('Card Counting Possibilities & Suited Tie Hedging')) {
  const target = '{/* 8 FAQs */}';
  const idxDT = casinoContent.indexOf('export const DragonTigerPage');
  const idxTarget = casinoContent.indexOf('{/* 8 FAQs */}', idxDT);
  if (idxTarget !== -1) {
    const addition = `{/* Pro Strategy Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Card Counting Possibilities & Suited Tie Tactical Hedging
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Dragon Tiger is renowned as a two-card lightning variant of Baccarat where each side receives only a single card with King being the highest (13) and Ace being the lowest (1). Because each round burns only two cards, tracking the ratio of high cards (8 through K) to low cards (A through 6) provides valuable tactical insights over an 8-deck shoe. While basic Dragon and Tiger bets carry a 3.73% house edge, specialized players sometimes place small hedge bets on Suited Ties (paying 50:1) when roadmaps reveal heavy symmetry patterns.
              </p>
            </div>

            {/* 8 FAQs */}`;
    casinoContent = casinoContent.substring(0, idxTarget) + addition + casinoContent.substring(idxTarget + '{/* 8 FAQs */}'.length);
    console.log('Updated DragonTigerPage in CasinoGamePages.tsx');
  }
}

// SpeedBaccaratPage
if (!casinoContent.includes('Managing High Turnover & Variance in 27-Second Rounds')) {
  const target = '{/* 8 FAQs */}';
  const idxSB = casinoContent.indexOf('export const SpeedBaccaratPage');
  const idxTarget = casinoContent.indexOf('{/* 8 FAQs */}', idxSB);
  if (idxTarget !== -1) {
    const addition = `{/* Speed Strategy Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Managing High Turnover & Bankroll Variance in 27-Second Rounds
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Speed Baccarat compresses each round into a rapid 27 seconds, nearly doubling the number of decisions per hour compared to traditional tables (over 120 hands per hour). Because gameplay velocity is elevated, bankroll discipline becomes paramount. We recommend dividing your session bankroll into at least 50 equal units and setting predetermined stop-loss and profit targets to avoid emotional tilt during rapid streaks.
              </p>
            </div>

            {/* 8 FAQs */}`;
    casinoContent = casinoContent.substring(0, idxTarget) + addition + casinoContent.substring(idxTarget + '{/* 8 FAQs */}'.length);
    console.log('Updated SpeedBaccaratPage in CasinoGamePages.tsx');
  }
}

// LightningRoulettePage
if (!casinoContent.includes('High Volatility & 500x Multiplier Bankroll Management')) {
  const target = '{/* 8 FAQs */}';
  const idxLR = casinoContent.indexOf('export const LightningRoulettePage');
  const idxTarget = casinoContent.indexOf('{/* 8 FAQs */}', idxLR);
  if (idxTarget !== -1) {
    const addition = `{/* Lightning Strategy Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                High Volatility & 500x Multiplier Bankroll Management
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                In Lightning Roulette, straight-up single number wagers pay 29:1 (instead of the standard 35:1) to fund the spectacular 50x, 100x, 200x, and 500x lightning strikes. Because the non-multiplier payout is reduced, placing scattered straight-up bets requires a disciplined staking plan. Many seasoned players cover French wheel sectors (Voisins du Zéro or Tiers du Cylindre) with straight-up chips, ensuring they hold active tickets whenever the lightning generator strikes their target sector.
              </p>
            </div>

            {/* 8 FAQs */}`;
    casinoContent = casinoContent.substring(0, idxTarget) + addition + casinoContent.substring(idxTarget + '{/* 8 FAQs */}'.length);
    console.log('Updated LightningRoulettePage in CasinoGamePages.tsx');
  }
}

// CasinoSlotsPage
if (!casinoContent.includes('Volatility Index & Megaways Payline Mathematics')) {
  const target = '{/* 8 FAQs */}';
  const idxCS = casinoContent.indexOf('export const CasinoSlotsPage');
  const idxTarget = casinoContent.indexOf('{/* 8 FAQs */}', idxCS);
  if (idxTarget !== -1) {
    const addition = `{/* Slots Strategy Guide */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Volatility Index & Megaways Payline Mechanics Explained
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                When choosing an online slot on Lotus365, understanding volatility is just as critical as checking RTP. Low-volatility slots like Starburst deliver frequent small wins, making them ideal for steady bankroll longevity. In contrast, high-volatility Megaways titles like Gates of Olympus and Sweet Bonanza feature tumbling reels and cascading multipliers up to 21,100x, offering massive upside during bonus free spin rounds. Choose the volatility profile that matches your risk tolerance.
              </p>
            </div>

            {/* 8 FAQs */}`;
    casinoContent = casinoContent.substring(0, idxTarget) + addition + casinoContent.substring(idxTarget + '{/* 8 FAQs */}'.length);
    console.log('Updated CasinoSlotsPage in CasinoGamePages.tsx');
  }
}

fs.writeFileSync(path.join(srcPages, 'CasinoGamePages.tsx'), casinoContent, 'utf8');

console.log('PaymentPages and CasinoGamePages top-ups completed successfully!');
