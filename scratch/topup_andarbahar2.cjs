const fs = require('fs');
let code = fs.readFileSync('src/pages/IndianCardGamePages.tsx', 'utf-8');

const target = `{/* Andar Bahar Strategy: The 1st-Card Rule in Super Andar Bahar */}`;
const addition = `{/* High Roller VIP Tables */}
          <div className="p-6 rounded-2xl bg-black/20 border border-white/15 space-y-3">
            <h3 className="text-xl font-bold text-[#F0C419]">
              High Roller VIP Salons & Dedicated Table Limits
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              For seasoned patrons desiring private table limits, Lotus365 hosts dedicated Salon Privé Andar Bahar rooms where maximum single-round wagers reach ₹5,00,000. These private rooms feature custom dealing speeds, dedicated pit bosses, and expedited withdrawal routing guaranteeing that seven-figure winnings are disbursed to your verified bank account via RTGS or IMPS in under 120 seconds.
            </p>
          </div>

          `;

code = code.replace(target, addition + target);
fs.writeFileSync('src/pages/IndianCardGamePages.tsx', code, 'utf-8');
console.log('Done');
