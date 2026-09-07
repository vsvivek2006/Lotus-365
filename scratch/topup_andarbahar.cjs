const fs = require('fs');
let code = fs.readFileSync('src/pages/IndianCardGamePages.tsx', 'utf-8');

const target = '{/* Golden Pro Tip Box */}';
// replace the SECOND occurrence of target (which is in Andar Bahar)
const idx1 = code.indexOf(target);
const idx2 = code.indexOf(target, idx1 + target.length);

const extraSection = `{/* Card Counting Myths */}
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

          `;

code = code.substring(0, idx2) + extraSection + code.substring(idx2);
fs.writeFileSync('src/pages/IndianCardGamePages.tsx', code, 'utf-8');
console.log('Successfully expanded AndarBahar in IndianCardGamePages.tsx');
