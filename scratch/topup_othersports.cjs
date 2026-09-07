const fs = require('fs');
const file = 'src/pages/OtherSportPages.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Add 2 FAQs to Basketball
const bballFaqAnchor = `{ q: 'What happens if an NBA player is ruled out before the game starts?', a: 'If a player does not take the court at all, all individual player prop bets for that athlete are automatically voided and refunded.' },`;
const bballFaqExtra = `{ q: 'What happens if an NBA player is ruled out before the game starts?', a: 'If a player does not take the court at all, all individual player prop bets for that athlete are automatically voided and refunded.' },
                { q: 'How does live cashout work during NBA 4th quarter crunch time?', a: 'Lotus365 allows you to lock in guaranteed profit or trim risk using our dynamic live cashout slider right until the final 60 seconds of regulation play.' },
                { q: 'Are point spreads graded at the end of regulation or overtime?', a: 'Standard full-game NBA point spread and total points bets include all points scored in overtime periods until a definitive victor is established.' },`;

content = content.replace(bballFaqAnchor, bballFaqExtra);

// Add 1 FAQ to Horse Racing
const horseFaqAnchor = `{ q: 'How do I cash out horse racing profits to my bank account?', a: 'Simply request a withdrawal via our 24/7 WhatsApp concierge (wa.link/880088), and funds are sent via instant UPI or IMPS in 2 minutes.' },`;
const horseFaqExtra = `{ q: 'How do I cash out horse racing profits to my bank account?', a: 'Simply request a withdrawal via our 24/7 WhatsApp concierge (wa.link/880088), and funds are sent via instant UPI or IMPS in 2 minutes.' },
                { q: 'What is the difference between an objection and a stewards enquiry in Indian racing?', a: 'An objection is lodged by a jockey or trainer against a rival for interference in the straight, whereas a stewards enquiry is initiated directly by the turf club race officials to review race footage before declaring all clear.' },`;

content = content.replace(horseFaqAnchor, horseFaqExtra);

// Add 1 FAQ to Sportsbook
const sportsFaqAnchor = `{ q: 'Is my financial data secure when betting on Lotus365?', a: 'Absolutely. We utilize 256-bit TLS encryption, zero document storage on public web servers, and direct NPCI-regulated UPI payment rails.' },`;
const sportsFaqExtra = `{ q: 'Is my financial data secure when betting on Lotus365?', a: 'Absolutely. We utilize 256-bit TLS encryption, zero document storage on public web servers, and direct NPCI-regulated UPI payment rails.' },
                { q: 'Can I bet on live esports and virtual leagues in the sportsbook?', a: 'Yes! In addition to traditional physical sports, Lotus365 offers 24/7 virtual cricket, virtual football, and major esports tournaments like CS2, Dota 2, and Valorant with instant round settlements.' },`;

content = content.replace(sportsFaqAnchor, sportsFaqExtra);

fs.writeFileSync(file, content, 'utf-8');
console.log('Successfully topped up OtherSportPages.tsx');
