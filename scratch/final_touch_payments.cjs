const fs = require('fs');
const file = 'src/pages/PaymentPages.tsx';
let code = fs.readFileSync(file, 'utf-8');

// HowToWithdrawPage: add an FAQ
const wAnchor = `                  {
                    q: 'Can I withdraw to multiple different UPI IDs?',
                    a: 'Yes, provided the bank account or UPI VPA is verified in your registered name.'
                  },`;
const wExtra = `                  {
                    q: 'Can I withdraw to multiple different UPI IDs?',
                    a: 'Yes, provided the bank account or UPI VPA is verified in your registered name.'
                  },
                  {
                    q: 'What is the fastest way to get help if my cashout is delayed past 2 minutes?',
                    a: 'Message your dedicated WhatsApp concierge with the word "Urgent Cashout" and your username. Our finance shift lead will review your transaction ledger within 30 seconds and ensure funds are dispatched immediately.'
                  },
                  {
                    q: 'Are withdrawal receipts or transaction statements provided?',
                    a: 'Yes! Upon successful IMPS or UPI transfer, your WhatsApp concierge immediately shares the bank transaction reference number (RRN / UTR) as proof of successful settlement.'
                  },`;
code = code.replace(wAnchor, wExtra);

// UpiDepositPage: add an FAQ
const upiAnchor = `                  {
                    q: 'Is there a limit on how many UPI deposits I can make in one day?',
                    a: 'No! There is no limit on the number of deposits you can make per day on Lotus365.'
                  },`;
const upiExtra = `                  {
                    q: 'Is there a limit on how many UPI deposits I can make in one day?',
                    a: 'No! There is no limit on the number of deposits you can make per day on Lotus365.'
                  },
                  {
                    q: 'Can I deposit via credit card through UPI apps like CRED or PhonePe?',
                    a: 'Yes, if your UPI application supports RuPay credit card linking, you can select your RuPay credit card to fund your Lotus365 wallet seamlessly.'
                  },`;
code = code.replace(upiAnchor, upiExtra);

// ImpsWithdrawalPage: add an FAQ
const impsAnchor = `                  {
                    q: 'Is IMPS withdrawal available on Sundays and bank holidays?',
                    a: 'Yes! IMPS operates 24/7/365 without exception.'
                  },`;
const impsExtra = `                  {
                    q: 'Is IMPS withdrawal available on Sundays and bank holidays?',
                    a: 'Yes! IMPS operates 24/7/365 without exception.'
                  },
                  {
                    q: 'Can I withdraw funds directly into cooperative or regional rural banks (RRBs)?',
                    a: 'Yes, as long as your regional bank participates in the NPCI IMPS clearing grid and possesses a valid 11-character IFSC code, our automated system settles your funds in under 2 minutes.'
                  },`;
code = code.replace(impsAnchor, impsExtra);

// PaymentMethodsPage: add section
const pmAnchor = `{/* The Lotus365 100% Zero-Fee Platform Pledge */}`;
const pmExtra = `{/* Banking Security Standards */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                NPCI & RBI-Compliant Banking Protocols
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                All digital transactions on Lotus365 route through official Indian banking gateways complying with Reserve Bank of India (RBI) payment security directives. All data in transit is encrypted using 256-bit TLS cryptographic handshakes, ensuring that your financial identifiers remain strictly confidential and protected from third-party interception.
              </p>
            </div>

`;
code = code.replace(pmAnchor, pmExtra + pmAnchor);

// TwoMinuteCashoutPage: add an FAQ
const tmcAnchor = `                  {
                    q: 'Is there an extra fee for 2-minute express cashout?',
                    a: 'No! Express 2-minute cashout is standard for all Lotus365 members with 0% extra fee.'
                  },`;
const tmcExtra = `                  {
                    q: 'Is there an extra fee for 2-minute express cashout?',
                    a: 'No! Express 2-minute cashout is standard for all Lotus365 members with 0% extra fee.'
                  },
                  {
                    q: 'Can I cash out multiple times per day?',
                    a: 'Yes! You can execute multiple cashout requests throughout the day. Each request is treated with top-priority IMPS dispatch and settled within 120 seconds.'
                  },`;
code = code.replace(tmcAnchor, tmcExtra);

fs.writeFileSync(file, code, 'utf-8');
console.log('Done final touch on PaymentPages!');
