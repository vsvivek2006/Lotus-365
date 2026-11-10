import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images');

// Helper to write SVG file
function writeSvg(subPath, svgContent) {
  const fullPath = path.join(outDir, subPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, svgContent.trim(), 'utf-8');
  console.log(`Generated: ${subPath}`);
}

// -------------------------------------------------------------
// 1. BANNERS (1200x600)
// -------------------------------------------------------------

writeSvg('banners/hero-cricket-stadium.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041b14" />
      <stop offset="50%" stop-color="#0c3d30" />
      <stop offset="100%" stop-color="#14614C" />
    </linearGradient>
    <radialGradient id="floodlight" cx="50%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#F0C419" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#041b14" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F0C419" />
      <stop offset="100%" stop-color="#FFE066" />
    </linearGradient>
  </defs>
  <rect width="1200" height="600" fill="url(#bgGrad)" />
  <rect width="1200" height="600" fill="url(#floodlight)" />

  <!-- Stadium architecture arcs -->
  <path d="M 0 450 Q 600 280 1200 450 L 1200 600 L 0 600 Z" fill="#06261d" opacity="0.8" />
  <ellipse cx="600" cy="520" rx="480" ry="140" fill="#0d4939" stroke="#F0C419" stroke-width="2" opacity="0.6" />
  <ellipse cx="600" cy="520" rx="300" ry="80" fill="#14614C" stroke="#25d366" stroke-width="1.5" opacity="0.8" />
  <!-- Pitch -->
  <rect x="540" y="470" width="120" height="100" rx="8" fill="#c29d5b" opacity="0.9" />

  <!-- Floodlight towers -->
  <circle cx="150" cy="120" r="40" fill="#ffffff" opacity="0.1" />
  <circle cx="150" cy="120" r="15" fill="#FFE066" />
  <circle cx="1050" cy="120" r="40" fill="#ffffff" opacity="0.1" />
  <circle cx="1050" cy="120" r="15" fill="#FFE066" />

  <!-- Floating Elements -->
  <circle cx="600" cy="240" r="100" fill="#041b14" stroke="#F0C419" stroke-width="4" opacity="0.95" />
  <path d="M 570 200 L 630 200 L 610 280 L 590 280 Z" fill="#F0C419" />
  <circle cx="600" cy="180" r="18" fill="#d9383a" stroke="#ffffff" stroke-width="2" />

  <!-- Text -->
  <text x="600" y="380" font-family="'Poppins', Arial, sans-serif" font-weight="900" font-size="38" fill="url(#goldText)" text-anchor="middle" letter-spacing="2">
    INDIA'S #1 CRICKET BETTING EXCHANGE
  </text>
  <text x="600" y="420" font-family="'Poppins', Arial, sans-serif" font-weight="600" font-size="20" fill="#ffffff" opacity="0.9" text-anchor="middle">
    Live Back &amp; Lay Odds • 0% Commission on Selection • 2-Min Instant Cashout
  </text>
</svg>
`);

writeSvg('banners/hero-casino-luxury.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100%" height="100%">
  <defs>
    <linearGradient id="casinoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#12071f" />
      <stop offset="50%" stop-color="#092820" />
      <stop offset="100%" stop-color="#14614C" />
    </linearGradient>
    <radialGradient id="purpleGold" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F0C419" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1200" height="600" fill="url(#casinoBg)" />
  <circle cx="600" cy="300" r="320" fill="url(#purpleGold)" />

  <!-- Roulette Wheel Abstract -->
  <circle cx="600" cy="230" r="140" fill="#0e3a2e" stroke="#F0C419" stroke-width="8" />
  <circle cx="600" cy="230" r="110" fill="#041b14" stroke="#ffffff" stroke-dasharray="10 6" stroke-width="2" />
  <circle cx="600" cy="230" r="70" fill="#c0392b" stroke="#F0C419" stroke-width="4" />
  <circle cx="600" cy="230" r="25" fill="#F0C419" />

  <!-- Cards & Dice Floating -->
  <rect x="360" y="160" width="90" height="130" rx="8" fill="#ffffff" stroke="#F0C419" stroke-width="3" transform="rotate(-15 405 225)" />
  <text x="390" y="210" font-family="Arial" font-weight="900" font-size="28" fill="#c0392b">A♥</text>
  <rect x="750" y="160" width="90" height="130" rx="8" fill="#ffffff" stroke="#F0C419" stroke-width="3" transform="rotate(15 795 225)" />
  <text x="780" y="210" font-family="Arial" font-weight="900" font-size="28" fill="#111111">K♠</text>

  <!-- Typography -->
  <text x="600" y="420" font-family="'Poppins', Arial, sans-serif" font-weight="900" font-size="42" fill="#F0C419" text-anchor="middle">
    LIVE VIP CASINO SUITE
  </text>
  <text x="600" y="465" font-family="'Poppins', Arial, sans-serif" font-weight="600" font-size="20" fill="#ffffff" opacity="0.9" text-anchor="middle">
    1000+ Tables • Hindi Speaking Dealers • Teen Patti, Andar Bahar &amp; Roulette
  </text>
</svg>
`);

writeSvg('banners/hero-aviator-speed.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100%" height="100%">
  <defs>
    <linearGradient id="aviatorBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f0a14" />
      <stop offset="60%" stop-color="#0a1924" />
      <stop offset="100%" stop-color="#073024" />
    </linearGradient>
    <linearGradient id="curveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e11d48" />
      <stop offset="100%" stop-color="#F0C419" />
    </linearGradient>
  </defs>
  <rect width="1200" height="600" fill="url(#aviatorBg)" />

  <!-- Multiplier Curve Grid -->
  <path d="M 100 500 L 1100 500" stroke="#ffffff" stroke-opacity="0.1" stroke-width="2" />
  <path d="M 100 100 L 100 500" stroke="#ffffff" stroke-opacity="0.1" stroke-width="2" />
  <path d="M 100 500 Q 550 480 850 200" fill="none" stroke="url(#curveGrad)" stroke-width="8" stroke-linecap="round" />

  <!-- Airplane Icon at 850, 200 -->
  <g transform="translate(850, 200) rotate(-35)">
    <path d="M -30 0 L 30 0 L 40 -10 L 0 -8 L -15 -30 L -25 -30 L -18 -8 L -40 -8 L -48 -18 L -55 -18 L -50 0 L -55 18 L -48 18 L -40 8 L -18 8 L -25 30 L -15 30 L 0 8 L 40 10 Z" fill="#e11d48" stroke="#F0C419" stroke-width="3" />
    <circle cx="45" cy="0" r="6" fill="#F0C419" />
  </g>

  <!-- Giant Multiplier text -->
  <text x="500" y="270" font-family="'Outfit', Arial, sans-serif" font-weight="900" font-size="110" fill="#ffffff" text-anchor="middle">
    98.75<tspan fill="#e11d48">x</tspan>
  </text>
  <text x="500" y="340" font-family="'Poppins', Arial, sans-serif" font-weight="900" font-size="34" fill="#F0C419" text-anchor="middle" letter-spacing="3">
    AVIATOR CRASH PRO — OFFICIAL SPRIBE
  </text>
  <text x="500" y="380" font-family="'Poppins', Arial, sans-serif" font-weight="600" font-size="18" fill="#ffffff" opacity="0.85" text-anchor="middle">
    Provably Fair • Auto Cashout • Dual Wager Systems • 97.0% Verified RTP
  </text>
</svg>
`);

writeSvg('banners/hero-vip-lounge.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100%" height="100%">
  <defs>
    <linearGradient id="vipBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0c" />
      <stop offset="50%" stop-color="#10251d" />
      <stop offset="100%" stop-color="#091b15" />
    </linearGradient>
    <linearGradient id="goldPlate" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE066" />
      <stop offset="40%" stop-color="#F0C419" />
      <stop offset="80%" stop-color="#B8860B" />
      <stop offset="100%" stop-color="#FFD700" />
    </linearGradient>
  </defs>
  <rect width="1200" height="600" fill="url(#vipBg)" />

  <!-- VIP Card Illustration -->
  <rect x="375" y="100" width="450" height="260" rx="20" fill="#141414" stroke="url(#goldPlate)" stroke-width="4" />
  <circle cx="430" cy="150" r="22" fill="#F0C419" opacity="0.3" />
  <text x="470" y="160" font-family="'Poppins', Arial, sans-serif" font-weight="900" font-size="20" fill="url(#goldPlate)">LOTUS365 VIP</text>
  <text x="760" y="160" font-family="'Poppins', Arial, sans-serif" font-weight="900" font-size="14" fill="#ffffff" opacity="0.6">BLACK</text>
  <text x="430" y="270" font-family="monospace" font-size="22" fill="#ffffff" letter-spacing="4">8836  5001  9284  0031</text>
  <text x="430" y="315" font-family="'Poppins', Arial" font-size="13" fill="#ffffff" opacity="0.7">ROYAL PRIVILEGE MEMBER</text>

  <!-- Typography -->
  <text x="600" y="430" font-family="'Poppins', Arial, sans-serif" font-weight="900" font-size="38" fill="url(#goldPlate)" text-anchor="middle">
    VIP BLACK CARD &amp; HIGH ROLLER CLUB
  </text>
  <text x="600" y="475" font-family="'Poppins', Arial, sans-serif" font-weight="600" font-size="18" fill="#ffffff" opacity="0.85" text-anchor="middle">
    Dedicated WhatsApp Manager • Unlimited Daily Cashouts • 10% Weekly Loss Rebate
  </text>
</svg>
`);

// -------------------------------------------------------------
// 2. GAMES (600x400)
// -------------------------------------------------------------

function generateGameSvg(filename, title, subtitle, badgeText, badgeColor, mainIcon, bgGradient) {
  writeSvg(`games/${filename}`, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="cardBg_${filename.replace('.svg','')}" x1="0%" y1="0%" x2="100%" y2="100%">
      ${bgGradient}
    </linearGradient>
    <radialGradient id="cardGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="600" height="400" rx="24" fill="url(#cardBg_${filename.replace('.svg','')})" />
  <rect width="600" height="400" rx="24" fill="url(#cardGlow)" />
  <rect x="4" y="4" width="592" height="392" rx="20" fill="none" stroke="#ffffff" stroke-opacity="0.15" stroke-width="2" />

  <!-- Badge -->
  <rect x="30" y="30" width="100" height="32" rx="16" fill="${badgeColor}" />
  <text x="80" y="51" font-family="'Poppins', Arial, sans-serif" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle">${badgeText}</text>

  <!-- Center Graphic -->
  <g transform="translate(300, 180)">
    ${mainIcon}
  </g>

  <!-- Titles -->
  <rect x="0" y="290" width="600" height="110" rx="20" fill="#051a14" opacity="0.9" />
  <text x="30" y="335" font-family="'Poppins', Arial, sans-serif" font-weight="800" font-size="26" fill="#ffffff">${title}</text>
  <text x="30" y="370" font-family="'Poppins', Arial, sans-serif" font-weight="600" font-size="16" fill="#F0C419">${subtitle}</text>

  <!-- Play Arrow Button -->
  <circle cx="540" cy="345" r="26" fill="#F0C419" />
  <path d="M 534 333 L 552 345 L 534 357 Z" fill="#14614C" />
</svg>
`);
}

// Aviator
generateGameSvg(
  'aviator.svg',
  'Aviator Crash Pro',
  '97.0% RTP • Provably Fair • Up to 100x',
  'HOT ⚡',
  '#e11d48',
  `<circle cx="0" cy="0" r="70" fill="#1f0a14" stroke="#e11d48" stroke-width="4"/>
   <path d="M -30 0 L 25 0 L 32 -8 L 0 -6 L -12 -22 L -20 -22 L -14 -6 L -32 -6 L -38 -14 L -44 -14 L -40 0 L -44 14 L -38 14 L -32 6 L -14 6 L -20 22 L -12 22 L 0 6 L 32 8 Z" fill="#e11d48" stroke="#F0C419" stroke-width="2"/>
   <text x="0" y="5" font-family="Arial" font-weight="900" font-size="12" fill="#fff" text-anchor="middle">SPRIBE</text>`,
  `<stop offset="0%" stop-color="#2a0815" /><stop offset="100%" stop-color="#14614C" />`
);

// Teen Patti
generateGameSvg(
  'teen-patti.svg',
  'Live Teen Patti Cash',
  'Indian 3 Patti • Hindi Dealers • 1000x',
  'POPULAR',
  '#F0C419',
  `<rect x="-60" y="-50" width="55" height="85" rx="6" fill="#fff" stroke="#F0C419" stroke-width="2" transform="rotate(-18 -32 -7)"/>
   <text x="-48" y="-15" font-family="Arial" font-weight="900" font-size="20" fill="#d9383a">A♥</text>
   <rect x="-27" y="-55" width="55" height="85" rx="6" fill="#fff" stroke="#F0C419" stroke-width="2"/>
   <text x="-12" y="-20" font-family="Arial" font-weight="900" font-size="20" fill="#111">A♠</text>
   <rect x="5" y="-50" width="55" height="85" rx="6" fill="#fff" stroke="#F0C419" stroke-width="2" transform="rotate(18 32 -7)"/>
   <text x="20" y="-15" font-family="Arial" font-weight="900" font-size="20" fill="#d9383a">A♦</text>`,
  `<stop offset="0%" stop-color="#0a2a1e" /><stop offset="100%" stop-color="#0d4939" />`
);

// Andar Bahar
generateGameSvg(
  'andar-bahar.svg',
  'Andar Bahar Real Cash',
  'Fast Deals • 50/50 Payouts • ₹10 Min',
  'DESI FAV',
  '#10b981',
  `<ellipse cx="0" cy="0" rx="90" ry="55" fill="#092d22" stroke="#F0C419" stroke-width="3"/>
   <rect x="-80" y="-25" width="60" height="50" rx="8" fill="#14614C"/>
   <text x="-50" y="5" font-family="'Poppins', Arial" font-weight="900" font-size="14" fill="#FFE066" text-anchor="middle">ANDAR</text>
   <line x1="0" y1="-45" x2="0" y2="45" stroke="#F0C419" stroke-width="3"/>
   <rect x="20" y="-25" width="60" height="50" rx="8" fill="#14614C"/>
   <text x="50" y="5" font-family="'Poppins', Arial" font-weight="900" font-size="14" fill="#FFE066" text-anchor="middle">BAHAR</text>`,
  `<stop offset="0%" stop-color="#05241b" /><stop offset="100%" stop-color="#14614C" />`
);

// Roulette
generateGameSvg(
  'roulette.svg',
  'European Roulette Live',
  '97.3% RTP • Single Zero • Live Stream',
  'CASINO',
  '#0284c7',
  `<circle cx="0" cy="0" r="65" fill="#1e293b" stroke="#F0C419" stroke-width="6"/>
   <circle cx="0" cy="0" r="45" fill="#0f172a" stroke="#fff" stroke-dasharray="8 5" stroke-width="2"/>
   <circle cx="0" cy="0" r="28" fill="#dc2626" stroke="#F0C419" stroke-width="2"/>
   <circle cx="0" cy="0" r="10" fill="#F0C419"/>`,
  `<stop offset="0%" stop-color="#0f2628" /><stop offset="100%" stop-color="#0e3a2e" />`
);

// Lightning Roulette
generateGameSvg(
  'lightning-roulette.svg',
  'Lightning Roulette 500x',
  'Evolution Gaming • Random Multipliers',
  'JACKPOT',
  '#f59e0b',
  `<circle cx="0" cy="0" r="65" fill="#1e1b4b" stroke="#F0C419" stroke-width="6"/>
   <path d="M 5 -45 L -20 5 L 0 5 L -10 45 L 25 -5 L 5 -5 Z" fill="#F0C419" stroke="#fff" stroke-width="2"/>
   <text x="0" y="58" font-family="'Outfit', Arial" font-weight="900" font-size="18" fill="#FFE066" text-anchor="middle">500X</text>`,
  `<stop offset="0%" stop-color="#1e1035" /><stop offset="100%" stop-color="#0e3a2e" />`
);

// Blackjack
generateGameSvg(
  'blackjack.svg',
  'Live Blackjack 21',
  '99.5% RTP • Real Dealers • Bet Behind',
  'CLASSIC',
  '#6366f1',
  `<rect x="-45" y="-45" width="55" height="80" rx="6" fill="#fff" stroke="#333" stroke-width="2" transform="rotate(-10 -17 -5)"/>
   <text x="-32" y="-12" font-family="Arial" font-weight="900" font-size="20" fill="#111">A♠</text>
   <rect x="-5" y="-45" width="55" height="80" rx="6" fill="#fff" stroke="#333" stroke-width="2" transform="rotate(10 22 -5)"/>
   <text x="8" y="-12" font-family="Arial" font-weight="900" font-size="20" fill="#dc2626">J♥</text>
   <circle cx="0" cy="35" r="20" fill="#F0C419" stroke="#fff" stroke-width="2"/>
   <text x="0" y="42" font-family="Arial" font-weight="900" font-size="14" fill="#000" text-anchor="middle">21</text>`,
  `<stop offset="0%" stop-color="#0b1b2b" /><stop offset="100%" stop-color="#14614C" />`
);

// Baccarat
generateGameSvg(
  'baccarat.svg',
  'Speed Baccarat',
  '1.06% House Edge • 15-Sec Fast Rounds',
  'FAST PACE',
  '#ec4899',
  `<rect x="-85" y="-35" width="75" height="70" rx="10" fill="#0369a1"/>
   <text x="-48" y="5" font-family="'Poppins', Arial" font-weight="900" font-size="13" fill="#fff" text-anchor="middle">PLAYER</text>
   <text x="0" y="8" font-family="'Outfit', Arial" font-weight="900" font-size="22" fill="#F0C419" text-anchor="middle">VS</text>
   <rect x="10" y="-35" width="75" height="70" rx="10" fill="#b91c1c"/>
   <text x="48" y="5" font-family="'Poppins', Arial" font-weight="900" font-size="13" fill="#fff" text-anchor="middle">BANKER</text>`,
  `<stop offset="0%" stop-color="#1e0b24" /><stop offset="100%" stop-color="#14614C" />`
);

// Dragon Tiger
generateGameSvg(
  'dragon-tiger.svg',
  'Dragon Tiger Live',
  '2-Card Showdown • Tie Pays 11:1',
  'POPULAR',
  '#ea580c',
  `<circle cx="-45" cy="0" r="35" fill="#b91c1c" stroke="#F0C419" stroke-width="3"/>
   <text x="-45" y="8" font-family="'Poppins', Arial" font-weight="900" font-size="16" fill="#fff" text-anchor="middle">DRAGON</text>
   <circle cx="45" cy="0" r="35" fill="#f59e0b" stroke="#fff" stroke-width="3"/>
   <text x="45" y="8" font-family="'Poppins', Arial" font-weight="900" font-size="16" fill="#111" text-anchor="middle">TIGER</text>`,
  `<stop offset="0%" stop-color="#2a1208" /><stop offset="100%" stop-color="#14614C" />`
);

// Casino Slots
generateGameSvg(
  'casino-slots.svg',
  'Megaways Slots & 777',
  'Over 500+ Jackpots • High Volatility',
  'JACKPOT',
  '#8b5cf6',
  `<rect x="-80" y="-45" width="160" height="90" rx="12" fill="#18181b" stroke="#F0C419" stroke-width="4"/>
   <text x="-45" y="15" font-family="'Outfit', Arial" font-weight="900" font-size="40" fill="#ef4444">7</text>
   <text x="0" y="15" font-family="'Outfit', Arial" font-weight="900" font-size="40" fill="#F0C419">7</text>
   <text x="45" y="15" font-family="'Outfit', Arial" font-weight="900" font-size="40" fill="#10b981">7</text>`,
  `<stop offset="0%" stop-color="#1a0c2e" /><stop offset="100%" stop-color="#14614C" />`
);

// Crazy Time
generateGameSvg(
  'crazy-time.svg',
  'Crazy Time Game Show',
  'Evolution • Pachinko, Coin Flip & Bonus',
  'LIVE SHOW',
  '#ec4899',
  `<circle cx="0" cy="0" r="65" fill="#db2777" stroke="#F0C419" stroke-width="5"/>
   <circle cx="0" cy="0" r="45" fill="#fbbf24" stroke="#fff" stroke-width="3"/>
   <text x="0" y="10" font-family="'Outfit', Arial" font-weight="900" font-size="18" fill="#111" text-anchor="middle">CRAZY</text>`,
  `<stop offset="0%" stop-color="#2d0a25" /><stop offset="100%" stop-color="#14614C" />`
);

// Mega Wheel
generateGameSvg(
  'mega-wheel.svg',
  'Mega Wheel 500x',
  'Pragmatic Play Live • Lucky Multipliers',
  'LIVE SHOW',
  '#06b6d4',
  `<circle cx="0" cy="0" r="65" fill="#0891b2" stroke="#F0C419" stroke-width="5"/>
   <circle cx="0" cy="0" r="45" fill="#0e7490" stroke="#fff" stroke-width="3"/>
   <text x="0" y="8" font-family="'Outfit', Arial" font-weight="900" font-size="16" fill="#fff" text-anchor="middle">MEGA</text>`,
  `<stop offset="0%" stop-color="#08252d" /><stop offset="100%" stop-color="#14614C" />`
);

// Lucky 7
generateGameSvg(
  'lucky-7.svg',
  'Lucky 7 Card Game',
  '7 Up & 7 Down • Instant Payouts',
  'FAST CASINO',
  '#10b981',
  `<rect x="-70" y="-35" width="55" height="70" rx="8" fill="#15803d"/>
   <text x="-42" y="8" font-family="Arial" font-weight="900" font-size="14" fill="#fff" text-anchor="middle">7 DOWN</text>
   <circle cx="0" cy="0" r="28" fill="#F0C419"/>
   <text x="0" y="10" font-family="'Outfit', Arial" font-weight="900" font-size="30" fill="#000" text-anchor="middle">7</text>
   <rect x="15" y="-35" width="55" height="70" rx="8" fill="#15803d"/>
   <text x="42" y="8" font-family="Arial" font-weight="900" font-size="14" fill="#fff" text-anchor="middle">7 UP</text>`,
  `<stop offset="0%" stop-color="#0a2a1a" /><stop offset="100%" stop-color="#14614C" />`
);

// 32 Cards
generateGameSvg(
  'thirty-two-cards.svg',
  '32 Cards Casino',
  'Ezugi Live Studio • 8 to 11 Card Points',
  'INDIAN CASINO',
  '#d97706',
  `<rect x="-60" y="-40" width="120" height="80" rx="10" fill="#1f2937" stroke="#F0C419" stroke-width="3"/>
   <text x="0" y="-5" font-family="'Outfit', Arial" font-weight="900" font-size="26" fill="#F0C419" text-anchor="middle">32</text>
   <text x="0" y="22" font-family="'Poppins', Arial" font-weight="800" font-size="14" fill="#fff" text-anchor="middle">CARDS</text>`,
  `<stop offset="0%" stop-color="#241a08" /><stop offset="100%" stop-color="#14614C" />`
);

// Super Over
generateGameSvg(
  'super-over.svg',
  'Super Over Cricket Casino',
  '6 Balls High Speed Casino Duel',
  'SPORTS CASINO',
  '#2563eb',
  `<circle cx="0" cy="0" r="55" fill="#dc2626" stroke="#fff" stroke-width="3"/>
   <path d="M -35 -20 Q 0 -5 35 -20" stroke="#fff" stroke-dasharray="4 4" stroke-width="2" fill="none"/>
   <path d="M -35 20 Q 0 5 35 20" stroke="#fff" stroke-dasharray="4 4" stroke-width="2" fill="none"/>
   <text x="0" y="8" font-family="'Outfit', Arial" font-weight="900" font-size="18" fill="#fff" text-anchor="middle">6 BALLS</text>`,
  `<stop offset="0%" stop-color="#081e2b" /><stop offset="100%" stop-color="#14614C" />`
);

// Color Prediction
generateGameSvg(
  'color-prediction.svg',
  'Color Prediction 30s',
  'Red, Green, Violet Parity Trading',
  'HIGH WIN',
  '#9333ea',
  `<circle cx="-50" cy="0" r="30" fill="#dc2626" stroke="#fff" stroke-width="2"/>
   <text x="-50" y="6" font-family="Arial" font-weight="900" font-size="12" fill="#fff" text-anchor="middle">RED</text>
   <circle cx="0" cy="0" r="30" fill="#7c3aed" stroke="#fff" stroke-width="2"/>
   <text x="0" y="6" font-family="Arial" font-weight="900" font-size="11" fill="#fff" text-anchor="middle">VIOLET</text>
   <circle cx="50" cy="0" r="30" fill="#16a34a" stroke="#fff" stroke-width="2"/>
   <text x="50" y="6" font-family="Arial" font-weight="900" font-size="12" fill="#fff" text-anchor="middle">GREEN</text>`,
  `<stop offset="0%" stop-color="#240c31" /><stop offset="100%" stop-color="#14614C" />`
);

// -------------------------------------------------------------
// 3. SPORTS (600x400)
// -------------------------------------------------------------

function generateSportSvg(filename, title, subtitle, badgeText, badgeColor, mainIcon, bgGradient) {
  writeSvg(`sports/${filename}`, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="sportBg_${filename.replace('.svg','')}" x1="0%" y1="0%" x2="100%" y2="100%">
      ${bgGradient}
    </linearGradient>
  </defs>
  <rect width="600" height="400" rx="24" fill="url(#sportBg_${filename.replace('.svg','')})" />
  <rect x="4" y="4" width="592" height="392" rx="20" fill="none" stroke="#ffffff" stroke-opacity="0.15" stroke-width="2" />

  <!-- Badge -->
  <rect x="30" y="30" width="110" height="32" rx="16" fill="${badgeColor}" />
  <text x="85" y="51" font-family="'Poppins', Arial, sans-serif" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle">${badgeText}</text>

  <!-- Center Graphic -->
  <g transform="translate(300, 180)">
    ${mainIcon}
  </g>

  <!-- Titles -->
  <rect x="0" y="290" width="600" height="110" rx="20" fill="#041611" opacity="0.9" />
  <text x="30" y="335" font-family="'Poppins', Arial, sans-serif" font-weight="800" font-size="26" fill="#ffffff">${title}</text>
  <text x="30" y="370" font-family="'Poppins', Arial, sans-serif" font-weight="600" font-size="16" fill="#F0C419">${subtitle}</text>

  <!-- Trade Button -->
  <circle cx="540" cy="345" r="26" fill="#F0C419" />
  <path d="M 534 333 L 552 345 L 534 357 Z" fill="#14614C" />
</svg>
`);
}

// Cricket
generateSportSvg(
  'cricket.svg',
  'Cricket Betting Exchange',
  'Live In-Play Ball by Ball • 0% Commission',
  'LIVE ODDS',
  '#16a34a',
  `<circle cx="0" cy="0" r="50" fill="#dc2626" stroke="#F0C419" stroke-width="3"/>
   <path d="M -35 -20 Q 0 -5 35 -20" stroke="#fff" stroke-dasharray="4 4" stroke-width="2" fill="none"/>
   <path d="M -35 20 Q 0 5 35 20" stroke="#fff" stroke-dasharray="4 4" stroke-width="2" fill="none"/>
   <rect x="-65" y="-12" width="130" height="24" rx="4" fill="#c29d5b" transform="rotate(-30)" stroke="#fff" stroke-width="1.5"/>`,
  `<stop offset="0%" stop-color="#082b1d" /><stop offset="100%" stop-color="#14614C" />`
);

// IPL
generateSportSvg(
  'ipl.svg',
  'IPL 2026 Championship',
  'All 74 Matches • Toss, Sessions & Player Runs',
  'MEGA EVENT',
  '#f59e0b',
  `<path d="M -40 -35 L 40 -35 L 30 20 L 0 45 L -30 20 Z" fill="#F0C419" stroke="#fff" stroke-width="2"/>
   <circle cx="0" cy="-5" r="15" fill="#0d4939"/>
   <text x="0" y="0" font-family="'Outfit', Arial" font-weight="900" font-size="14" fill="#FFE066" text-anchor="middle">IPL</text>`,
  `<stop offset="0%" stop-color="#1d1b09" /><stop offset="100%" stop-color="#14614C" />`
);

// Football
generateSportSvg(
  'football.svg',
  'Football & Premier League',
  'Match Odds, Over/Under & Asian Handicap',
  'SOCCER',
  '#0284c7',
  `<circle cx="0" cy="0" r="55" fill="#ffffff" stroke="#111" stroke-width="3"/>
   <polygon points="0,-20 18,-6 11,18 -11,18 -18,-6" fill="#111111"/>`,
  `<stop offset="0%" stop-color="#0a1d2e" /><stop offset="100%" stop-color="#14614C" />`
);

// Tennis
generateSportSvg(
  'tennis.svg',
  'Tennis & Grand Slam',
  'Game by Game Odds • Wimbledon & US Open',
  'COURT',
  '#84cc16',
  `<circle cx="0" cy="0" r="50" fill="#a3e635" stroke="#111" stroke-width="3"/>
   <path d="M -35 -35 Q 0 0 -35 35" stroke="#ffffff" stroke-width="4" fill="none"/>
   <path d="M 35 -35 Q 0 0 35 35" stroke="#ffffff" stroke-width="4" fill="none"/>`,
  `<stop offset="0%" stop-color="#15260c" /><stop offset="100%" stop-color="#14614C" />`
);

// Kabaddi
generateSportSvg(
  'kabaddi.svg',
  'Pro Kabaddi League (PKL)',
  'Super Raids, High 5s & Outright Winner',
  'DESI SPORT',
  '#ea580c',
  `<circle cx="0" cy="0" r="50" fill="#f97316" stroke="#F0C419" stroke-width="3"/>
   <text x="0" y="10" font-family="'Outfit', Arial" font-weight="900" font-size="22" fill="#fff" text-anchor="middle">PKL</text>`,
  `<stop offset="0%" stop-color="#2a1508" /><stop offset="100%" stop-color="#14614C" />`
);

// Basketball
generateSportSvg(
  'basketball.svg',
  'Basketball & NBA',
  'Quarter Points, Point Spread & Totals',
  'NBA',
  '#ea580c',
  `<circle cx="0" cy="0" r="50" fill="#ea580c" stroke="#111" stroke-width="3"/>
   <line x1="-50" y1="0" x2="50" y2="0" stroke="#111" stroke-width="3"/>
   <line x1="0" y1="-50" x2="0" y2="50" stroke="#111" stroke-width="3"/>
   <path d="M -35 -35 Q 0 0 -35 35" stroke="#111" stroke-width="3" fill="none"/>
   <path d="M 35 -35 Q 0 0 35 35" stroke="#111" stroke-width="3" fill="none"/>`,
  `<stop offset="0%" stop-color="#241108" /><stop offset="100%" stop-color="#14614C" />`
);

// Horse Racing
generateSportSvg(
  'horse-racing.svg',
  'Horse Racing India & UK',
  'Bangalore, Mumbai, Pune & Ascot Derbies',
  'DERBY',
  '#d97706',
  `<circle cx="0" cy="0" r="50" fill="#b45309" stroke="#F0C419" stroke-width="3"/>
   <text x="0" y="8" font-family="'Outfit', Arial" font-weight="900" font-size="30" fill="#fff" text-anchor="middle">🏇</text>`,
  `<stop offset="0%" stop-color="#221606" /><stop offset="100%" stop-color="#14614C" />`
);

// Virtual Sports
generateSportSvg(
  'virtual-sports.svg',
  'Virtual Sports 24/7',
  'Continuous Virtual Cricket & Football',
  'INSTANT',
  '#06b6d4',
  `<circle cx="0" cy="0" r="50" fill="#0891b2" stroke="#fff" stroke-width="3"/>
   <text x="0" y="8" font-family="'Outfit', Arial" font-weight="900" font-size="28" fill="#F0C419" text-anchor="middle">3D</text>`,
  `<stop offset="0%" stop-color="#092026" /><stop offset="100%" stop-color="#14614C" />`
);

// -------------------------------------------------------------
// 4. PAYMENTS (300x120)
// -------------------------------------------------------------

function generatePaymentSvg(filename, brandName, subText, mainColor, textColor = '#ffffff') {
  writeSvg(`payments/${filename}`, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" width="100%" height="100%">
  <rect width="300" height="120" rx="16" fill="#041812" stroke="#ffffff" stroke-opacity="0.15" stroke-width="2" />
  <rect x="18" y="20" width="80" height="80" rx="14" fill="${mainColor}" />
  <text x="58" y="68" font-family="'Outfit', Arial, sans-serif" font-weight="900" font-size="26" fill="${textColor}" text-anchor="middle">
    ${brandName.substring(0, 2).toUpperCase()}
  </text>
  <text x="114" y="55" font-family="'Poppins', Arial, sans-serif" font-weight="800" font-size="19" fill="#ffffff">${brandName}</text>
  <text x="114" y="80" font-family="'Poppins', Arial, sans-serif" font-weight="600" font-size="12" fill="#F0C419">${subText}</text>
</svg>
`);
}

generatePaymentSvg('upi.svg', 'UPI Instant', 'Zero Fee • 30-Sec Pay', '#0f766e');
generatePaymentSvg('phonepe.svg', 'PhonePe', 'Direct Scan & Pay', '#5f259f');
generatePaymentSvg('gpay.svg', 'Google Pay', 'Safe UPI Transfer', '#1a73e8');
generatePaymentSvg('paytm.svg', 'Paytm UPI', 'Wallet & NetBanking', '#00b9f5', '#002e6e');
generatePaymentSvg('imps.svg', 'IMPS Bank', 'NEFT / RTGS Fast Cashout', '#0284c7');
generatePaymentSvg('usdt-crypto.svg', 'Crypto USDT', 'TRC20 & ERC20 Available', '#26a17b');

// -------------------------------------------------------------
// 5. VIP CARDS (600x380)
// -------------------------------------------------------------

function generateVipCardSvg(filename, tierName, colorStart, colorEnd, accentColor) {
  writeSvg(`vip/${filename}`, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="100%" height="100%">
  <defs>
    <linearGradient id="vipTier_${tierName}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colorStart}" />
      <stop offset="100%" stop-color="${colorEnd}" />
    </linearGradient>
  </defs>
  <rect width="600" height="380" rx="24" fill="url(#vipTier_${tierName})" stroke="${accentColor}" stroke-width="4" />
  
  <circle cx="80" cy="70" r="26" fill="${accentColor}" opacity="0.3" />
  <text x="120" y="78" font-family="'Poppins', Arial" font-weight="900" font-size="24" fill="#ffffff">LOTUS365</text>
  <text x="510" y="78" font-family="'Outfit', Arial" font-weight="900" font-size="18" fill="${accentColor}" text-anchor="end">${tierName} TIER</text>

  <rect x="70" y="140" width="60" height="45" rx="8" fill="#F0C419" opacity="0.8" />
  <line x1="85" y1="140" x2="85" y2="185" stroke="#78350f" stroke-width="1.5" />
  <line x1="100" y1="140" x2="100" y2="185" stroke="#78350f" stroke-width="1.5" />
  <line x1="115" y1="140" x2="115" y2="185" stroke="#78350f" stroke-width="1.5" />

  <text x="70" y="240" font-family="monospace" font-size="26" fill="#ffffff" letter-spacing="4">**** **** **** 3650</text>
  <text x="70" y="295" font-family="'Poppins', Arial" font-size="13" fill="#ffffff" opacity="0.7">OFFICIAL VIP PRIVILEGE</text>
  <text x="70" y="325" font-family="'Poppins', Arial" font-weight="800" font-size="16" fill="${accentColor}">INSTANT CASH PRIVILEGES</text>
</svg>
`);
}

generateVipCardSvg('card-bronze.svg', 'BRONZE', '#451a03', '#1e0c02', '#d97706');
generateVipCardSvg('card-silver.svg', 'SILVER', '#334155', '#0f172a', '#cbd5e1');
generateVipCardSvg('card-gold.svg', 'GOLD', '#78350f', '#291205', '#F0C419');
generateVipCardSvg('card-platinum.svg', 'PLATINUM', '#1e293b', '#030712', '#38bdf8');
generateVipCardSvg('card-black.svg', 'BLACK ELITE', '#000000', '#0a0a0a', '#F0C419');

// -------------------------------------------------------------
// 6. DEALERS (400x500)
// -------------------------------------------------------------

function generateDealerSvg(filename, dealerName, tableName) {
  writeSvg(`dealers/${filename}`, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <linearGradient id="dealerBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d3b2e" />
      <stop offset="100%" stop-color="#041611" />
    </linearGradient>
  </defs>
  <rect width="400" height="500" rx="20" fill="url(#dealerBg)" stroke="#F0C419" stroke-width="2" />
  <circle cx="200" cy="180" r="80" fill="#14614C" stroke="#ffffff" stroke-width="4" />
  <text x="200" y="200" font-family="'Outfit', Arial" font-weight="900" font-size="64" fill="#FFE066" text-anchor="middle">👤</text>

  <!-- Live Pulse -->
  <circle cx="50" cy="50" r="10" fill="#22c55e" />
  <circle cx="50" cy="50" r="18" fill="#22c55e" opacity="0.3" />
  <text x="75" y="55" font-family="'Poppins', Arial" font-weight="800" font-size="14" fill="#ffffff">LIVE STUDIO</text>

  <!-- Table Details -->
  <rect x="20" y="380" width="360" height="95" rx="14" fill="#03110d" opacity="0.9" />
  <text x="40" y="420" font-family="'Poppins', Arial" font-weight="800" font-size="20" fill="#ffffff">${dealerName}</text>
  <text x="40" y="450" font-family="'Poppins', Arial" font-weight="600" font-size="14" fill="#F0C419">${tableName}</text>
</svg>
`);
}

generateDealerSvg('dealer-hindi.svg', 'Priya S. (Hindi Table)', 'Live Teen Patti Table 1');
generateDealerSvg('dealer-roulette.svg', 'Elena R. (English/Hindi)', 'Lightning Roulette Studio');

console.log('All placeholder visual assets generated successfully!');
