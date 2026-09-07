const fs = require('fs');
let code = fs.readFileSync('src/pages/OtherSportPages.tsx', 'utf-8');

// Kabaddi addition
const kabaddiTarget = '{/* Golden Pro Tip */}';
const kabaddiAddition = `{/* Court Dimensions and Mat Physics */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Court Dimensions, Mat Physics & Bonus Line Dynamics
            </h2>
            <p>
              Professional kabaddi in the PKL is contested on high-density synthetic mats measuring 13m x 10m for men. The baulk line lies 3.75 meters from the midline, followed by the crucial bonus line positioned 4.75 meters from the midline. To secure a bonus point, a raider must plant one foot completely across the bonus line in the air while maintaining contact behind the line with the trailing foot—and all this requires at least 6 defenders present on court.
            </p>
            <p>
              When a team loses two players and is down to 5 defenders, the bonus line automatically deactivates. This mathematical shift is critical for live bettors: raiders can no longer score passive bonus points and are forced into dangerous hand-touch attacks, substantially elevating the probability of a defensive tackle point. Astute punters monitor defender count on court to trade tackle point markets with high statistical precision.
            </p>
          </div>

          `;
code = code.replace(kabaddiTarget, kabaddiAddition + kabaddiTarget);

// Basketball addition
const bballTarget = '{/* Pro Tip */}';
const bballAddition = `{/* Advanced Analytics */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Advanced Analytical Metrics: True Shooting %, Pace & Offensive Rating
            </h2>
            <p>
              Modern basketball betting has migrated far beyond basic points-per-game statistics. Elite handicappers analyze pace (possessions per 48 minutes) and Offensive Rating (points scored per 100 possessions) to identify mispriced totals. When two high-pace franchises (like the Indiana Pacers and Sacramento Kings) collide, total possession counts often surge past 104, making standard 230.5 point totals easy Over targets.
            </p>
            <p>
              Furthermore, evaluating True Shooting Percentage (TS%)—which factors in the mathematical efficiency of three-pointers and free throws—reveals which teams create high-value floor spacing. Teams with top-tier perimeter spacing generate consistent fourth-quarter runs that reliably cover point spreads even against physical defensive units.
            </p>
          </div>

          {/* EuroLeague vs NBA Contrast */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Tactical Contrast: Wagering on NBA vs EuroLeague
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              While the NBA features 48-minute games with heavy isolation scoring by superstars, the EuroLeague is played under 40-minute FIBA rules with strict zone defenses, tactical set plays, and a much shorter three-point line. Consequently, EuroLeague point totals average between 155 and 168 points, demanding a completely distinct analytical approach centered on half-court defensive efficiency and coaching timeout adjustments.
            </p>
          </div>

          `;
code = code.replace(bballTarget, bballAddition + bballTarget);

// Horse racing addition
const horseTarget = '{/* Pro Tip */}';
const horseAddition = `{/* Paddock Inspections & Stewards Protocols */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Paddock Inspections, Coat Condition & Stewards Inquiries
            </h2>
            <p>
              Professional horse racing punters never finalize their tickets without assessing the runners in the parade ring 15 minutes before the gates open. A thoroughbred displaying excessive pre-race sweating, erratic head tossing, or bandaged forelegs often expends vital nervous energy before the start, leading to late-race fatigue in the final furlong.
            </p>
            <p>
              Conversely, a calm horse walking with a loose, relaxed stride and glistening coat signals peak conditioning. Furthermore, understanding the objection and stewards enquiry protocol is vital: if a horse causes severe interference in the final straight by drifting across lanes, the stewards can demote the offender even after crossing the line first. Lotus365 withholds bet settlement until the official red flag drops, ensuring fair, compliant payouts for all bettors.
            </p>
          </div>

          `;
code = code.replace(horseTarget, horseAddition + horseTarget);

// Sportsbook addition
const sportsTarget = '{/* Operational Metrics Table */}';
const sportsAddition = `{/* Step by Step Masterclass */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Comprehensive Step-by-Step Sports Betting Masterclass
            </h2>
            <p>
              Getting started on India's premier multi-sport platform is designed to be effortless, transparent, and completely free from cumbersome paperwork:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <span className="text-xl font-black text-[#F0C419]">Step 1</span>
                <h4 className="font-bold text-white">Connect on WhatsApp</h4>
                <p className="text-white/70">Click wa.link/880088 to message our verified 24/7 concierge desk. Receive your secure personal login credentials in under 60 seconds.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <span className="text-xl font-black text-[#F0C419]">Step 2</span>
                <h4 className="font-bold text-white">Deposit via Instant UPI</h4>
                <p className="text-white/70">Transfer as little as ₹100 using PhonePe, GPay, or Paytm. Submit the 12-digit UTR reference for instant balance credit.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <span className="text-xl font-black text-[#F0C419]">Step 3</span>
                <h4 className="font-bold text-white">Select Markets & Trade</h4>
                <p className="text-white/70">Navigate through 40+ sports, choose match odds or point spreads, enter your stake, and confirm your trade with zero net commission.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <span className="text-xl font-black text-[#F0C419]">Step 4</span>
                <h4 className="font-bold text-white">2-Minute Cashout</h4>
                <p className="text-white/70">When your matches win, request a payout to your UPI ID or bank account. Receive 100% of your net winnings within 120 seconds.</p>
              </div>
            </div>
          </div>

          `;
code = code.replace(sportsTarget, sportsAddition + sportsTarget);

fs.writeFileSync('src/pages/OtherSportPages.tsx', code, 'utf-8');
console.log('Successfully expanded all 4 components in OtherSportPages.tsx');
