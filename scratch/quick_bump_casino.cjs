const fs = require('fs');
const file = 'src/pages/CasinoGamePages.tsx';
let code = fs.readFileSync(file, 'utf-8');

// Baccarat bump
code = code.replace(
  'All baccarat payouts are processed via automated UPI rails within 120 seconds of your WhatsApp withdrawal request.',
  'All baccarat payouts are processed via automated UPI rails within 120 seconds of your WhatsApp withdrawal request. Lotus365 operates dedicated banking liquidity reserves ensuring that whether you win ₹5,000 or ₹5,00,000, your funds reach your Indian bank account immediately with zero administrative friction.'
);

// Dragon Tiger bump
code = code.replace(
  'Winnings can be withdrawn via instant UPI in under 2 minutes through our 24/7 WhatsApp customer care desk.',
  'Winnings can be withdrawn via instant UPI in under 2 minutes through our 24/7 WhatsApp customer care desk. Enjoy complete financial peace of mind with 100% transparent zero-deduction payouts on all Dragon, Tiger, and Suited Tie wins.'
);

// Speed Baccarat bump
code = code.replace(
  'All withdrawals are processed via instant UPI in under 2 minutes through our 24/7 WhatsApp concierge.',
  'All withdrawals are processed via instant UPI in under 2 minutes through our 24/7 WhatsApp concierge. Because Speed Baccarat allows rapid turnover of bankroll, our financial desk prioritizes speed baccarat cashout tickets with sub-120-second instant IMPS and UPI settlement around the clock.'
);

// Casino Slots bump
code = code.replace(
  'Withdrawals are processed within 2 minutes via UPI (PhonePe, Google Pay, Paytm) with zero fees.',
  'Withdrawals are processed within 2 minutes via UPI (PhonePe, Google Pay, Paytm) with zero fees. When you hit a massive 5,000x multiplier on Gates of Olympus, your multi-lakh winnings can be disbursed immediately in full to your bank account with zero waiting.'
);

fs.writeFileSync(file, code, 'utf-8');
console.log('Bumped all 4 pages!');
