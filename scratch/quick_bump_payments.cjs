const fs = require('fs');
const file = 'src/pages/PaymentPages.tsx';
let code = fs.readFileSync(file, 'utf-8');

// HowToWithdrawPage bump
code = code.replace(
  'You can cash out your balance at any time through our 24/7 WhatsApp desk. UPI payouts are delivered in an average of 1 minute 45 seconds.',
  'You can cash out your balance at any time through our 24/7 WhatsApp desk. UPI payouts are delivered in an average of 1 minute 45 seconds. Whether it is 3:00 PM or 3:00 AM on Sunday, our automated banking rails disburse 100% of your requested funds directly into your verified bank account with zero fee deductions or delays.'
);

// UpiDepositPage bump
code = code.replace(
  'Our automated API checks the NPCI centralized clearing ledger and credits your wallet within 30 seconds.',
  'Our automated API checks the NPCI centralized clearing ledger and credits your wallet within 30 seconds. This guarantees that even during high-traffic national bank server slowdowns, your balance is verified and updated before the first ball of the next over is bowled.'
);

// ImpsWithdrawalPage bump
code = code.replace(
  'Our banking webhook transmits the credit instruction via NPCI IMPS pipes, ensuring net funds reflect on your phone with a bank SMS confirmation within two minutes.',
  'Our banking webhook transmits the credit instruction via NPCI IMPS pipes, ensuring net funds reflect on your phone with a bank SMS confirmation within two minutes. You receive immediate liquidity directly into your savings account with complete peace of mind.'
);

// PaymentMethodsPage bump
code = code.replace(
  'When you deposit ₹5,000, you receive ₹5,000 in your wallet. When you cash out ₹10,000, exactly ₹10,000 lands in your bank account.',
  'When you deposit ₹5,000, you receive ₹5,000 in your wallet. When you cash out ₹10,000, exactly ₹10,000 lands in your bank account. By completely eliminating hidden gateway levies and maintenance commissions, Lotus365 ensures your hard-earned winnings remain 100% in your hands.'
);

// TwoMinuteCashoutPage bump
code = code.replace(
  'Lotus365 deploys pre-funded distributed banking clusters that disburse up to 1,500 simultaneous IMPS transfers per minute without queue delays.',
  'Lotus365 deploys pre-funded distributed banking clusters that disburse up to 1,500 simultaneous IMPS transfers per minute without queue delays. This unparalleled financial engineering ensures that whether you are cashing out during an ordinary Tuesday league match or the thrilling final over of an IPL World Cup final, your money reaches your account within 120 seconds guaranteed.'
);

// Add 1 extra FAQ to PaymentMethodsPage
const pmFaqAnchor = `                  {
                    q: 'Are there any hidden fees or deduction charges?',
                    a: 'Never. Lotus365 charges 0% transaction fees on all deposits and withdrawals.'
                  },`;
const pmFaqExtra = `                  {
                    q: 'Are there any hidden fees or deduction charges?',
                    a: 'Never. Lotus365 charges 0% transaction fees on all deposits and withdrawals.'
                  },
                  {
                    q: 'Can I deposit using someone else\\'s UPI account?',
                    a: 'For financial security and AML compliance, we advise players to deposit from their own personal UPI accounts matching their registered WhatsApp profile.'
                  },
                  {
                    q: 'What is the daily maximum limit for UPI withdrawals?',
                    a: 'Standard members can withdraw up to ₹2,00,000 per day via UPI, while VIP members enjoy unlimited daily cashout ceilings negotiated with their dedicated account managers.'
                  },`;
code = code.replace(pmFaqAnchor, pmFaqExtra);

fs.writeFileSync(file, code, 'utf-8');
console.log('Bumped all payment pages!');
