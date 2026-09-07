const fs = require('fs');
const file = 'src/pages/CasinoGamePages.tsx';
let code = fs.readFileSync(file, 'utf-8');

// 1. Roulette topup
const rouletteTarget = `{/* 8 FAQs */}`;
const rouletteAddition = `{/* Wheel Physics & Dealer Signature */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Wheel Engineering: Slanted Frets, Deep Pockets & Dealer Signatures
            </h2>
            <p>
              In physical mechanical roulette, wheel design dictates ball behavior. Evolution and Pragmatic Play utilize precision-engineered Cammegh Starburst wheels featuring scalloped low-fret separators and drop-zone baffles (canoes) that randomize deflection. While historic casino lore speaks of \"dealer signatures\"—croupiers who supposedly spin with consistent rotational velocity—modern live studios rotate dealers every 30 minutes and alternate spin directions between clockwise and counter-clockwise to ensure absolute statistical equilibrium across all 37 pockets.
            </p>
            <p>
              Furthermore, continuous optical tracking cameras monitor wheel deceleration to verify that no mechanical tilt or pocket wear distorts the true 2.70% European house edge.
            </p>
          </div>

          `;
code = code.replace(rouletteTarget, rouletteAddition + rouletteTarget);

// 2. Blackjack topup
// Find the 8 FAQs in Blackjack
const bjFaqIdx = code.indexOf(`{/* 8 FAQs */}`, code.indexOf('export const BlackjackPage'));
const bjAddition = `{/* Composition-Dependent Strategy */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Composition-Dependent Strategy: The 16 vs 10 Conundrum
            </h2>
            <p>
              While total-dependent basic strategy instructs players to Hit on Hard 16 against a dealer 10 upcard, composition-dependent strategy refines this high-stakes decision. If your 16 is composed of 10 + 6, hitting is the correct play. However, if your 16 consists of three or more cards (such as 4 + 5 + 7), you have already removed several low cards from the shoe that could safely improve your hand without busting. In multi-card 16 situations, Standing against a 10 becomes mathematically superior.
            </p>
            <p>
              Applying these granular refinements trims an additional 0.04% from the casino margin, bringing your effective RTP closer to the 99.60% theoretical boundary.
            </p>
          </div>

          {/* Table Etiquette */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Live Dealer Studio Etiquette & Bet Behind Functionality
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              When standard 7-seat tables are occupied during peak hours, Lotus365 enables \"Bet Behind\" mode. You can wager on the hand of any seated player whose strategy you admire, enjoying their winning streak while observing table dynamics. Maintain courteous chat decorum and remember that the seated player retains sole decision authority over Hit, Stand, or Double choices.
            </p>
          </div>

          `;
code = code.substring(0, bjFaqIdx) + bjAddition + code.substring(bjFaqIdx);

// 3. Baccarat topup
const baccaratFaqIdx = code.indexOf(`{/* 8 FAQs */}`, code.indexOf('export const BaccaratPage'));
const baccaratAddition = `{/* Third Card Tableau Explained */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              The Mathematical Third-Card Tableau: Player & Banker Drawing Rules
            </h2>
            <p>
              Many players view Baccarat as mysterious because third cards appear automatically without player input. In reality, the tableau is governed by absolute mathematical rules:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                <span className="font-bold text-[#F0C419]">Player Drawing Protocol</span>
                <p className="text-white/70">If the Player hand totals 0, 1, 2, 3, 4, or 5, the Player MUST draw a third card. If Player totals 6 or 7, the Player MUST stand. If either side totals 8 or 9 (a \"Natural\"), no cards are drawn and the hand is graded immediately.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                <span className="font-bold text-[#F0C419]">Banker Drawing Complexity</span>
                <p className="text-white/70">If Player stands on 6 or 7, Banker follows player rules (hits on 0-5, stands on 6-7). If Player draws a third card, Banker\\'s decision depends entirely on the value of that specific third card, granting Banker the structural 1.06% edge!</p>
              </div>
            </div>
          </div>

          {/* Commission vs Super 6 */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Classic Commission vs No Commission (Super 6) Baccarat
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              In standard Baccarat, a 5% commission is deducted from winning Banker bets to compensate for the Banker\\'s statistical edge. On No Commission (Super 6) tables, you receive full 1:1 payouts on all Banker wins—except when Banker wins with a total of 6, which pays 0.5:1. While No Commission speeds up gameplay, it slightly increases the Banker house edge from 1.06% to 1.46%.
            </p>
          </div>

          `;
code = code.substring(0, baccaratFaqIdx) + baccaratAddition + code.substring(baccaratFaqIdx);

// 4. Dragon Tiger topup
const dtFaqIdx = code.indexOf(`{/* 8 FAQs */}`, code.indexOf('export const DragonTigerPage'));
const dtAddition = `{/* Mathematical Reality of Tie Bets */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              The Mathematical Reality of Tie Bets: Why Discipline Wins
            </h2>
            <p>
              The allure of an 11:1 payout on standard Tie or 50:1 on Suited Tie tempts many novice bettors. However, mathematical breakdown reveals that identical card ranks occur only 7.4% of the time in an 8-deck shoe, producing an astronomical house edge of 32.77% on standard Ties. In contrast, the fundamental Dragon and Tiger positions carry a reasonable 3.73% house edge.
            </p>
            <p>
              Consistent winners on Lotus365 treat Tie bets as occasional recreational speculative plays, allocating 95% of their session turnover strictly to the primary Dragon or Tiger positions.
            </p>
          </div>

          {/* Provider Comparison */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Evolution Gaming vs Pragmatic Play Dragon Tiger
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Lotus365 hosts Dragon Tiger suites from multiple world-class providers. Evolution\\'s studio features dramatic golden temple aesthetics with interactive card roadmaps, while Pragmatic Play Live offers ultra-streamlined portrait mode layouts optimized for single-handed mobile wagering on iOS and Android devices.
            </p>
          </div>

          `;
code = code.substring(0, dtFaqIdx) + dtAddition + code.substring(dtFaqIdx);

// 5. Speed Baccarat topup
const sbFaqIdx = code.indexOf(`{/* 8 FAQs */}`, code.indexOf('export const SpeedBaccaratPage'));
const sbAddition = `{/* Neurobiology of High-Speed Play */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              The Psychology of Speed: Maintaining Poise at 130 Hands Per Hour
            </h2>
            <p>
              The primary hazard of 27-second speed rounds is emotional acceleration: a brief 3-hand losing skid occurs in under 90 seconds. Without deliberate self-regulation, impulsive bettors fall prey to tilt and double their wagers recklessly.
            </p>
            <p>
              We recommend setting a session alarm for 20 minutes of continuous speed play, followed by a mandatory 5-minute break. This resets cognitive discipline and ensures your staking remains anchored in calculated probability rather than adrenaline-fueled impulses.
            </p>
          </div>

          {/* Squeeze vs Speed Contrast */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              When to Switch Between Squeeze and Speed Baccarat
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              High-volume turn-over bettors seeking to clear cashback requirements should prioritize Speed Baccarat for maximum hourly volume. Conversely, when wagering large single-hand stakes (e.g. ₹50,000+), switching to Baccarat Squeeze provides the pacing and psychological breathing room necessary to evaluate shoe roadmaps thoroughly before committing capital.
            </p>
          </div>

          `;
code = code.substring(0, sbFaqIdx) + sbAddition + code.substring(sbFaqIdx);

// 6. Lightning Roulette topup
const lrFaqIdx = code.indexOf(`{/* 8 FAQs */}`, code.indexOf('export const LightningRoulettePage'));
const lrAddition = `{/* RNG Algorithm & Volatility Modeling */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              How the Lightning RNG Multiplier Algorithm Functions
            </h2>
            <p>
              In Lightning Roulette, the physical wheel operates independently from the digital multiplier generator. While the physical ball determines the winning number mechanically, a certified high-speed Random Number Generator selects which 1 to 5 numbers receive multipliers and their corresponding payout weights.
            </p>
            <p>
              Lower multipliers like 50x and 100x appear with greater frequency, while the fabled 400x and 500x multipliers strike during peak high-variance cycles. Because non-multiplied Straight-Up wins pay 29:1 instead of the standard 35:1, the game exhibits high volatility, making bankroll sizing of at least 150 units essential to capture the massive 500x lightning strikes.
            </p>
          </div>

          {/* Variant Comparison */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Lightning Roulette vs XXXtreme Lightning Roulette
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              For players seeking even greater volatility, Lotus365 also hosts XXXtreme Lightning Roulette, where Chain Lightning and Double Strikes can boost numbers up to a breathtaking 2,000x multiplier! However, non-multiplied wins pay 19:1, demanding extreme bankroll discipline compared to the balanced 29:1 base payout of standard Lightning Roulette.
            </p>
          </div>

          `;
code = code.substring(0, lrFaqIdx) + lrAddition + code.substring(lrFaqIdx);

// 7. Casino Slots topup
const slotsFaqIdx = code.indexOf(`{/* 8 FAQs */}`, code.indexOf('export const CasinoSlotsPage'));
const slotsAddition = `{/* Progressive Jackpots & Variance Math */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Progressive Jackpots: Local vs Network Pooled Multi-Crore Pots
            </h2>
            <p>
              Beyond fixed multiplier video slots, Lotus365 connects Indian players to multi-tiered progressive jackpot networks. In local jackpots, a small fraction of every spin within Lotus365 feeds a dedicated prize pot. In global network jackpots (such as Pragmatic Play\\'s Jackpot Play), thousands of spins across worldwide casinos feed a single shared prize pool that frequently surges into multi-crore territory before triggering randomly on any spin size.
            </p>
            <p>
              To maximize your jackpot qualification probability, ensure your per-spin stake meets the minimum eligible threshold specified in the slot\\'s paytable rules.
            </p>
          </div>

          {/* Auto-Spin Protection */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Setting Responsible Auto-Spin Limits & Loss Ceilings
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              All slots on Lotus365 feature advanced Auto-Play controls. Before starting automated spins, always configure a mandatory Single-Win Stop Limit (e.g. stop if a win exceeds 50x your stake) and a Total Loss Stop Limit (e.g. stop if balance declines by ₹1,000). This automated discipline preserves your winnings and prevents emotional balance erosion during cold streaks.
            </p>
          </div>

          `;
code = code.substring(0, slotsFaqIdx) + slotsAddition + code.substring(slotsFaqIdx);

fs.writeFileSync(file, code, 'utf-8');
console.log('Successfully topped up all 7 components in CasinoGamePages.tsx!');
