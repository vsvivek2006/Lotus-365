const fs = require('fs');

// We will read the clean version from earlier and apply exact unique replacements
const file = 'src/pages/OtherSportPages.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Remove the mistakenly placed Paddock Inspections from Basketball
const misplacedPaddock = `          {/* Paddock Inspections & Stewards Protocols */}
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

content = content.replace(misplacedPaddock, '');

// Now put Paddock Inspections into HorseRacingPage right before {/* Pro Tip */} in HorseRacingPage:
const horseProTip = `          {/* Pro Tip */}
          <div className="p-6 rounded-2xl bg-[#F0C419]/10 border-2 border-[#F0C419]/40 space-y-3">
            <div className="flex items-center gap-2 text-[#F0C419] font-extrabold text-base">
              <Star className="w-5 h-5 fill-current" />
              <span>Racing Pro Tip: Track Going & Draw Bias</span>`;

const correctHorseAddition = `          {/* Paddock Inspections & Stewards Protocols */}
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

          {/* Pedigree & Breeding Lineage Analysis */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              Pedigree & Sire Progeny Analysis on Indian Derbies
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              In classic distance races like the 2,400-meter Indian Derby at Mahalaxmi, pedigree is paramount. Progeny of legendary stamina sires (such as Multidimensional, Win Legend, or Western Aristocrat) consistently outperform sprint-bred pedigrees over the grueling final 400-meter uphill bend. Always check the dam's stamina index when evaluating 3-year-old classic contenders.
            </p>
          </div>

`;

content = content.replace(horseProTip, correctHorseAddition + horseProTip);

// Now in SportsbookPage, add Multi-Sport Accumulator Construction and Hedging Strategy
const sportsBookPillars = `          {/* Why Lotus365 Sportsbook Excels */}
          <div className="p-8 rounded-3xl bg-black/20 border border-white/15 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Why Lotus365 is India's Highest-Rated Sportsbook
            </h2>`;

const sportsBookAddition = `          {/* Multi-Sport Accumulator & Hedging Framework */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
              Multi-Sport Accumulator Construction & Cross-Discipline Hedging
            </h2>
            <p>
              One of the most thrilling ways Indian sports enthusiasts maximize their returns on Lotus365 is through cross-discipline accumulators (combis/parlays). Rather than placing isolated bets, you can combine selections from different sporting codes into a single high-multiple slip:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                <span className="font-bold text-[#F0C419]">Leg 1: Cricket Match Winner</span>
                <p className="text-white/70">Back India or CSK at 1.45 odds in an afternoon IPL match.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                <span className="font-bold text-[#F0C419]">Leg 2: Premier League Over 2.5</span>
                <p className="text-white/70">Add an evening Manchester City Over 2.5 goals selection at 1.65 odds.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                <span className="font-bold text-[#F0C419]">Leg 3: Tennis Set Betting</span>
                <p className="text-white/70">Cap the ticket with Carlos Alcaraz to win 2-0 at 1.70 odds for a combined multiplier of 4.06x.</p>
              </div>
            </div>
            <p className="text-xs text-white/70">
              If the first two legs land successfully, Lotus365 gives you the flexibility to either let the final leg ride or use our instant partial cashout slider to lock in guaranteed profit before the tennis match begins.
            </p>
          </div>

`;

content = content.replace(sportsBookPillars, sportsBookAddition + sportsBookPillars);

fs.writeFileSync(file, content, 'utf-8');
console.log('Cleanly updated OtherSportPages.tsx!');
