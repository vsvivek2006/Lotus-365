const fs = require('fs');
const file = 'src/pages/SpecialGamePages.tsx';
let code = fs.readFileSync(file, 'utf-8');

// 1. CrashGamesPage addition: find FAQs in CrashGamesPage
const cgFaq = code.indexOf(`{/* FAQs */}`, code.indexOf('export const CrashGamesPage'));
const cgExtra = `{/* Social Chat & Rain Mechanics */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Live In-Game Chat & Community "Rain" Bonus Mechanics
            </h2>
            <p>
              A distinctive feature of modern crash games like Spribe Aviator and SmartSoft JetX is their integrated social layer. While the multiplier curve climbs, players from across India interact via the live community chatbox, sharing celebratory screenshots and analytical observations.
            </p>
            <p>
              Furthermore, the game client features random \"Rain\" events—spontaneous promotional free bets dropped into the public chat by high-rolling players or Lotus365 administrators. By tapping the \"Claim\" button when Rain falls, observant players can snatch free ₹50 or ₹100 flight vouchers that can be cashed out for real withdrawable cash.
            </p>
          </div>

          `;
code = code.substring(0, cgFaq) + cgExtra + code.substring(cgFaq);

// 2. ColorPredictionPage addition: find FAQs in ColorPredictionPage
const cpFaq = code.indexOf(`{/* FAQs */}`, code.indexOf('export const ColorPredictionPage'));
const cpExtra = `{/* Game Room Variations: Parity, Sapre & Bcone */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Understanding Color Prediction Rooms: Parity, Sapre, Bcone & Emerd
            </h2>
            <p>
              When playing Color Prediction on Lotus365, you can participate across four distinct concurrent game rooms:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <span className="font-bold text-[#F0C419]">Parity & Sapre</span>
                <p className="text-white/70">The standard 3-minute round rooms offering ample time to study previous period histories, analyze hot color runs, and discuss community consensus.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <span className="font-bold text-[#F0C419]">Bcone & Emerd</span>
                <p className="text-white/70">Rapid-fire 1-minute and 30-second turbo rooms designed for high-frequency players who prefer immediate round resolution and accelerated bankroll cycling.</p>
              </div>
            </div>
            <p className="text-xs text-white/70">
              Regardless of the room chosen, numbers 0 and 5 feature the dual Violet color, while even numbers (2, 4, 6, 8) are Red and odd numbers (1, 3, 7, 9) are Green.
            </p>
          </div>

          `;
code = code.substring(0, cpFaq) + cpExtra + code.substring(cpFaq);

// 3. VirtualSportsPage addition: find FAQs in VirtualSportsPage
const vsFaq = code.indexOf(`{/* FAQs */}`, code.indexOf('export const VirtualSportsPage'));
const vsExtra = `{/* Virtual Cricket Simulation Mechanics */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              The Virtual Cricket Engine: How Certified Simulators Model Player Metrics
            </h2>
            <p>
              Virtual Cricket on Lotus365 is not a simplistic video loop. It is driven by advanced sports simulation algorithms developed by Betradar and Kiron Interactive. Each virtual batsman and bowler is assigned statistical attributes based on historical T20 performance data—including strike rates, boundary percentages, bowling economy, and yorker accuracy.
            </p>
            <p>
              When a match begins, physics engines calculate thousands of ball-by-ball trajectory parameters in real-time, accounting for pitch wear, boundary dimensions, and fielding placements. The result is a hyper-realistic 3-minute T20 contest featuring dynamic run chases, last-over finishes, and legitimate mathematical fairness independently certified by GLI.
            </p>
          </div>

          {/* Virtual vs Real Betting Synergy */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              How Indian Punters Use Virtual Sports During Cricket Off-Seasons
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              When live international cricket or IPL fixtures are in recess, virtual sports keep the excitement alive 24/7. Because a new virtual match kicks off every 180 seconds around the clock, punters can test session run trading strategies, practice bankroll management algorithms, and experience instant settlements without waiting 4 hours for real-world match conclusions.
            </p>
          </div>

          `;
code = code.substring(0, vsFaq) + vsExtra + code.substring(vsFaq);

fs.writeFileSync(file, code, 'utf-8');
console.log('Successfully topped up SpecialGamePages.tsx!');
