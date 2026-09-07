const fs = require('fs');
const file = 'src/pages/IndianCardGamePages.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Teen Patti expansion
const tpProTip = `{/* Golden Pro Tip Box */}`;
const tpAddition = `{/* Popular Variations */}
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

          `;
content = content.replace(tpProTip, tpAddition + tpProTip);

// Add 3 FAQs to Teen Patti
const tpFaqAnchor = `{ q: 'How fast can I withdraw my Teen Patti winnings?', a: 'You can cash out your balance at any time through our 24/7 WhatsApp desk. UPI payouts are delivered in an average of 1 minute 45 seconds.' },`;
const tpFaqExtra = `{ q: 'How fast can I withdraw my Teen Patti winnings?', a: 'You can cash out your balance at any time through our 24/7 WhatsApp desk. UPI payouts are delivered in an average of 1 minute 45 seconds.' },
                { q: 'What is 6-Card Bonus side bet in Teen Patti?', a: 'The 6-Card Bonus combines your 3 cards with the dealer\\'s 3 cards to form the best possible 5-card poker hand. Hitting a Royal Flush pays out a monumental 1000:1 multiplier!' },
                { q: 'Can I chat with the live dealer in Hindi?', a: 'Yes! Our dedicated Hindi Teen Patti tables feature native Indian dealers who converse warmly in Hindi throughout your session.' },
                { q: 'Can I play Teen Patti on my mobile phone without downloading an app?', a: 'Yes! Lotus365 is 100% web-based. Simply open lotus365officialid.com in Chrome or Safari and enjoy seamless full-screen gameplay without installing an APK.' },`;
content = content.replace(tpFaqAnchor, tpFaqExtra);

// Andar Bahar expansion
const abProTip = `{/* Golden Pro Tip Box */}`;
const abAddition = `{/* Historical Heritage */}
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

          `;
content = content.replace(abProTip, abAddition + abProTip);

// Add 3 FAQs to Andar Bahar
const abFaqAnchor = `{ q: 'How fast do I receive withdrawals from Andar Bahar winnings?', a: 'Lotus365 processes all UPI and IMPS withdrawals within 2 minutes with zero platform deduction.' },`;
const abFaqExtra = `{ q: 'How fast do I receive withdrawals from Andar Bahar winnings?', a: 'Lotus365 processes all UPI and IMPS withdrawals within 2 minutes with zero platform deduction.' },
                { q: 'Is there a limit on how many cards can be dealt in a single round?', a: 'The round continues until the matching rank card appears. In rare instances, over 40 cards may be dealt, rewarding the 41+ cards side bet with a massive 120x payout!' },
                { q: 'What is the theoretical house edge on Andar vs Bahar?', a: 'Because Andar receives the first card, it holds a 51.5% probability and pays 0.9:1, resulting in a low house edge of 2.15%. Bahar receives cards second, holding a 48.5% probability and paying 1:1, carrying a house edge of approximately 3.00%.' },
                { q: 'Can I deposit via Google Pay or Paytm to play Andar Bahar?', a: 'Yes! All Indian UPI applications including PhonePe, Google Pay, and Paytm are supported with instant zero-fee credits starting at just ₹100.' },`;
content = content.replace(abFaqAnchor, abFaqExtra);

fs.writeFileSync(file, content, 'utf-8');
console.log('Successfully expanded IndianCardGamePages.tsx!');
