const fs = require('fs');
const file = 'src/pages/PaymentPages.tsx';
let code = fs.readFileSync(file, 'utf-8');

// 1. HowToWithdrawPage topup
const wFaq = code.indexOf(`{/* FAQs */}`, code.indexOf('export const HowToWithdrawPage'));
const wAddition = `{/* Large Withdrawal Protocols */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                High-Volume Cashouts: VIP Protocols for Winnings Over ₹5,00,000
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                For major jackpot winners and high-rolling exchange traders cashing out ₹5,00,000 or more in a single session, Lotus365 provides dedicated VIP financial handling. You can split the payout across multiple UPI IDs, receive single-transaction high-speed RTGS transfers, or utilize multi-bank splitting to ensure full compliance with personal banking thresholds while maintaining the 2-minute SLA.
              </p>
            </div>

`;
code = code.substring(0, wFaq) + wAddition + code.substring(wFaq);

// 2. UpiDepositPage topup
const upiFaq = code.indexOf(`{/* FAQs */}`, code.indexOf('export const UpiDepositPage'));
const upiAddition = `{/* Bank Daily UPI Limits */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#F0C419]">
                Managing Daily Bank UPI Limits: Depositing ₹1,00,000+
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                NPCI caps standard UPI transactions at ₹1,00,000 per 24 hours per bank account. If you hit your bank's daily UPI ceiling, your personal WhatsApp concierge can provide alternate deposit routes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                  <span className="font-bold text-[#F0C419]">Multi-App Splitting</span>
                  <p className="text-white/70">Use secondary UPI apps (such as CRED or Paytm linked to alternate bank accounts) to fund your wallet in parallel tranches.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                  <span className="font-bold text-[#F0C419]">Instant IMPS Direct</span>
                  <p className="text-white/70">Switch to our corporate IMPS net banking channels, which accommodate single deposits up to ₹5,00,000 with 2-minute balance reflection.</p>
                </div>
              </div>
            </div>

`;
code = code.substring(0, upiFaq) + upiAddition + code.substring(upiFaq);

// 3. ImpsWithdrawalPage topup
const impsFaq = code.indexOf(`{/* FAQs */}`, code.indexOf('export const ImpsWithdrawalPage'));
const impsAddition = `{/* Bank Maintenance Schedules */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#F0C419]">
                Bank Maintenance Schedules & The Lotus365 Reserve Router
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Certain major Indian banks (such as SBI, HDFC, and ICICI) routinely schedule nightly core banking updates between 1:00 AM and 3:00 AM. During these brief windows, external interbank IMPS incoming transfers can be rejected by the receiving bank.
              </p>
              <p className="text-xs text-white/70">
                To circumvent this, Lotus365 employs an intelligent reserve routing algorithm. If our system detects that your primary bank is currently under maintenance, your WhatsApp concierge will notify you instantly and offer the option to disburse funds to a secondary UPI handle (such as an alternate family or business account) to ensure you never wait for your money.
              </p>
            </div>

            {/* IMPS Payout Speed SLA */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Guaranteed 120-Second IMPS Payout SLA
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Lotus365 is the only betting exchange in India with a binding, published 120-second cashout SLA. From the second you confirm your withdrawal on WhatsApp, our banking webhook transmits the credit instruction via NPCI IMPS pipes, ensuring net funds reflect on your phone with a bank SMS confirmation within two minutes.
              </p>
            </div>

`;
code = code.substring(0, impsFaq) + impsAddition + code.substring(impsFaq);

// 4. PaymentMethodsPage topup
const pmFaq = code.indexOf(`{/* FAQs */}`, code.indexOf('export const PaymentMethodsPage'));
const pmAddition = `{/* Crypto USDT vs INR UPI */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                Crypto USDT (TRC-20) vs INR UPI: Choosing the Best Rail
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                While 90% of Indian players choose UPI for sheer speed and familiarity, Lotus365 also supports Tether (USDT) on the Tron (TRC-20) blockchain for high-stakes players:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <div className="font-bold text-emerald-400 text-sm">UPI Payments (PhonePe, GPay, Paytm)</div>
                  <ul className="text-white/70 space-y-1 list-disc pl-4">
                    <li>Instant deposit (&lt; 30 seconds) and instant withdrawal (&lt; 2 minutes).</li>
                    <li>Minimum deposit only ₹100; directly linked to your everyday savings account.</li>
                    <li>0% transaction fees absorbed fully by Lotus365.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <div className="font-bold text-sky-400 text-sm">Crypto USDT (TRC-20 Blockchain)</div>
                  <ul className="text-white/70 space-y-1 list-disc pl-4">
                    <li>Complete financial discretion with zero bank record footprint.</li>
                    <li>No upper transfer limits; perfect for VIPs depositing ₹5,00,000+.</li>
                    <li>Global blockchain confirmation in 1 to 3 minutes.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Financial Audits & Segregated Balances */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Segregated Corporate Liquidity & 100% Backed Balances
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Every rupee deposited across all payment methods is held in 100% segregated client accounts. Player balances are never pooled with corporate operational budgets. Regardless of overall betting market swings or high accumulator payouts, 100% of player balances remain fully backed and instantly withdrawable 24 hours a day, 365 days a year.
              </p>
            </div>

`;
code = code.substring(0, pmFaq) + pmAddition + code.substring(pmFaq);

// 5. TwoMinuteCashoutPage topup
const tmcFaq = code.indexOf(`{/* FAQs */}`, code.indexOf('export const TwoMinuteCashoutPage'));
const tmcAddition = `{/* Payout Speed Benchmark Table */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                Payout Speed Benchmark: Lotus365 vs Major Indian Competitors
              </h2>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Platform</th>
                      <th className="p-3">Advertised Speed</th>
                      <th className="p-3">Real-World Average</th>
                      <th className="p-3">KYC Document Hold</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-black/20 text-xs">
                    <tr>
                      <td className="p-3 font-bold text-white">Lotus365</td>
                      <td className="p-3 text-emerald-400 font-bold">120 Seconds</td>
                      <td className="p-3 text-emerald-400 font-bold">85 to 110 Seconds</td>
                      <td className="p-3 text-emerald-400 font-bold">Zero Documents Required</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">European Bookmakers (Betway/Bet365)</td>
                      <td className="p-3 text-white/80">24 to 48 Hours</td>
                      <td className="p-3 text-rose-400">3 to 5 Business Days</td>
                      <td className="p-3 text-rose-400">Mandatory Passport / Utility Bill</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Traditional Offshore Sportsbooks</td>
                      <td className="p-3 text-white/80">Up to 24 Hours</td>
                      <td className="p-3 text-rose-400">12 to 36 Hours</td>
                      <td className="p-3 text-rose-400">Aadhaar / Bank Statement Scans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Liquidity During IPL Finals */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Peak Liquidity Resilience: Cashouts During IPL Finals
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                During the final over of an IPL championship match, tens of thousands of winning tickets settle simultaneously, generating sudden surge demand for withdrawals. While competitor sites crash or queue cashouts for days, Lotus365 deploys pre-funded distributed banking clusters that disburse up to 1,500 simultaneous IMPS transfers per minute without queue delays.
              </p>
            </div>

`;
code = code.substring(0, tmcFaq) + tmcAddition + code.substring(tmcFaq);

fs.writeFileSync(file, code, 'utf-8');
console.log('Successfully completed PaymentPages topup!');
