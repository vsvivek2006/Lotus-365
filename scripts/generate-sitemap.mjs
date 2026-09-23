import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'https://lotus365officialid.com';
const today = new Date().toISOString().split('T')[0];

export const routesConfig = [
  // Tier 1: Core Pages
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/responsible-gaming', priority: '0.6', changefreq: 'monthly' },
  { path: '/terms', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
  { path: '/sitemap', priority: '0.7', changefreq: 'weekly' },

  // Tier 2: Sports Betting
  { path: '/cricket-betting', priority: '1.0', changefreq: 'daily' },
  { path: '/cricket-exchange', priority: '0.9', changefreq: 'daily' },
  { path: '/ipl-betting', priority: '1.0', changefreq: 'daily' },
  { path: '/t20-world-cup-betting', priority: '0.9', changefreq: 'weekly' },
  { path: '/football-betting', priority: '0.8', changefreq: 'daily' },
  { path: '/tennis-betting', priority: '0.7', changefreq: 'daily' },
  { path: '/kabaddi-betting', priority: '0.7', changefreq: 'daily' },
  { path: '/basketball-betting', priority: '0.6', changefreq: 'daily' },
  { path: '/horse-racing-betting', priority: '0.6', changefreq: 'daily' },
  { path: '/sportsbook', priority: '0.8', changefreq: 'weekly' },

  // Tier 3: Live Casino
  { path: '/live-casino', priority: '0.9', changefreq: 'weekly' },
  { path: '/teen-patti', priority: '0.9', changefreq: 'weekly' },
  { path: '/andar-bahar', priority: '0.9', changefreq: 'weekly' },
  { path: '/roulette', priority: '0.8', changefreq: 'weekly' },
  { path: '/blackjack', priority: '0.8', changefreq: 'weekly' },
  { path: '/baccarat', priority: '0.7', changefreq: 'weekly' },
  { path: '/dragon-tiger', priority: '0.7', changefreq: 'weekly' },
  { path: '/speed-baccarat', priority: '0.6', changefreq: 'weekly' },
  { path: '/lightning-roulette', priority: '0.8', changefreq: 'weekly' },
  { path: '/casino-slots', priority: '0.7', changefreq: 'weekly' },

  // Tier 4: Special Games
  { path: '/aviator-game', priority: '0.9', changefreq: 'weekly' },
  { path: '/crash-games', priority: '0.8', changefreq: 'weekly' },
  { path: '/color-prediction', priority: '0.7', changefreq: 'weekly' },
  { path: '/virtual-sports', priority: '0.6', changefreq: 'weekly' },

  // Tier 5: Account & Payments
  { path: '/register', priority: '1.0', changefreq: 'monthly' },
  { path: '/login', priority: '1.0', changefreq: 'monthly' },
  { path: '/how-to-deposit', priority: '0.8', changefreq: 'monthly' },
  { path: '/how-to-withdraw', priority: '0.8', changefreq: 'monthly' },
  { path: '/upi-deposit', priority: '0.7', changefreq: 'monthly' },
  { path: '/imps-withdrawal', priority: '0.7', changefreq: 'monthly' },
  { path: '/payment-methods', priority: '0.8', changefreq: 'monthly' },
  { path: '/2-minute-cashout', priority: '0.8', changefreq: 'monthly' },

  // Tier 6: Bonuses & VIP
  { path: '/welcome-bonus', priority: '0.9', changefreq: 'weekly' },
  { path: '/first-deposit-bonus', priority: '0.8', changefreq: 'weekly' },
  { path: '/referral-bonus', priority: '0.7', changefreq: 'monthly' },
  { path: '/cashback-offers', priority: '0.7', changefreq: 'weekly' },
  { path: '/vip-club', priority: '0.8', changefreq: 'monthly' },
  { path: '/vip-black-card', priority: '0.7', changefreq: 'monthly' },

  // Tier 7: Blog / Info Guides
  { path: '/lotus365-review', priority: '0.9', changefreq: 'monthly' },
  { path: '/lotus365-vs-competitors', priority: '0.8', changefreq: 'monthly' },
  { path: '/betting-tips', priority: '0.8', changefreq: 'weekly' },
  { path: '/ipl-predictions', priority: '0.9', changefreq: 'daily' },
  { path: '/online-casino-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/safe-betting-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/mobile-web-app-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.8', changefreq: 'weekly' },
  { path: '/how-it-works', priority: '0.8', changefreq: 'monthly' },

  // Tier 8: Tournament & Leagues (10)
  { path: '/wpl-betting', priority: '0.9', changefreq: 'daily' },
  { path: '/psl-betting', priority: '0.9', changefreq: 'daily' },
  { path: '/bbl-betting', priority: '0.8', changefreq: 'daily' },
  { path: '/cpl-betting', priority: '0.8', changefreq: 'daily' },
  { path: '/asia-cup-betting', priority: '0.9', changefreq: 'daily' },
  { path: '/icc-odi-world-cup', priority: '0.9', changefreq: 'weekly' },
  { path: '/test-cricket-betting', priority: '0.8', changefreq: 'daily' },
  { path: '/live-cricket-score-odds', priority: '1.0', changefreq: 'daily' },
  { path: '/cricket-session-betting', priority: '0.9', changefreq: 'daily' },
  { path: '/cricket-toss-prediction', priority: '0.8', changefreq: 'daily' },

  // Tier 9: Exchange Guides & Trading (8)
  { path: '/back-and-lay-betting', priority: '0.9', changefreq: 'weekly' },
  { path: '/exchange-commission-rates', priority: '0.8', changefreq: 'monthly' },
  { path: '/betting-exchange-vs-sportsbook', priority: '0.8', changefreq: 'monthly' },
  { path: '/bookmaker-market', priority: '0.8', changefreq: 'weekly' },
  { path: '/in-play-cashout-guide', priority: '0.8', changefreq: 'weekly' },
  { path: '/match-odds-trading', priority: '0.8', changefreq: 'weekly' },
  { path: '/tied-match-rules', priority: '0.7', changefreq: 'monthly' },
  { path: '/bet-slip-guide', priority: '0.7', changefreq: 'monthly' },

  // Tier 10: Asian & Live Casino (10)
  { path: '/lucky-7-game', priority: '0.8', changefreq: 'weekly' },
  { path: '/32-cards-casino', priority: '0.8', changefreq: 'weekly' },
  { path: '/super-over-game', priority: '0.8', changefreq: 'weekly' },
  { path: '/muflis-teen-patti', priority: '0.8', changefreq: 'weekly' },
  { path: '/ak47-teen-patti', priority: '0.8', changefreq: 'weekly' },
  { path: '/joker-teen-patti', priority: '0.8', changefreq: 'weekly' },
  { path: '/roulette-strategies', priority: '0.8', changefreq: 'weekly' },
  { path: '/live-dealer-games', priority: '0.9', changefreq: 'weekly' },
  { path: '/crazy-time', priority: '0.8', changefreq: 'weekly' },
  { path: '/mega-wheel', priority: '0.8', changefreq: 'weekly' },

  // Tier 11: Wallet & Banking (8)
  { path: '/phonepe-deposit', priority: '0.9', changefreq: 'monthly' },
  { path: '/google-pay-deposit', priority: '0.9', changefreq: 'monthly' },
  { path: '/paytm-deposit', priority: '0.9', changefreq: 'monthly' },
  { path: '/bank-transfer-neft-rtgs', priority: '0.8', changefreq: 'monthly' },
  { path: '/crypto-deposit-usdt', priority: '0.8', changefreq: 'monthly' },
  { path: '/withdrawal-proof-times', priority: '0.9', changefreq: 'weekly' },
  { path: '/kyc-verification-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/account-security-tips', priority: '0.8', changefreq: 'monthly' },

  // Tier 12: Regional Indian Cricket (6)
  { path: '/cricket-betting-delhi', priority: '0.8', changefreq: 'weekly' },
  { path: '/cricket-betting-mumbai', priority: '0.8', changefreq: 'weekly' },
  { path: '/cricket-betting-punjab', priority: '0.8', changefreq: 'weekly' },
  { path: '/cricket-betting-bangalore', priority: '0.8', changefreq: 'weekly' },
  { path: '/cricket-betting-hyderabad', priority: '0.8', changefreq: 'weekly' },
  { path: '/cricket-betting-kolkata', priority: '0.8', changefreq: 'weekly' },

  // Tier 13: Strategy & Calculators (8)
  { path: '/betting-odds-calculator', priority: '0.9', changefreq: 'monthly' },
  { path: '/dutching-calculator-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl-teams-betting-odds', priority: '0.9', changefreq: 'daily' },
  { path: '/cricket-betting-glossary', priority: '0.8', changefreq: 'monthly' },
  { path: '/lotus365-blue', priority: '0.8', changefreq: 'monthly' },
  { path: '/lotus365-partner-program', priority: '0.8', changefreq: 'monthly' },
  { path: '/complaints-resolution', priority: '0.7', changefreq: 'monthly' },
  { path: '/responsible-gambling-tools', priority: '0.7', changefreq: 'monthly' },
];

export function generateSitemapXml() {
  const urlEntries = routesConfig.map(route => {
    const loc = route.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${route.path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

export function generateSitemapIndexXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`;
}

export function writeSitemap() {
  const sitemapXml = generateSitemapXml();
  const sitemapIndexXml = generateSitemapIndexXml();

  // 1. Write to public/
  const publicDir = path.join(rootDir, 'public');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'sitemap_index.xml'), sitemapIndexXml, 'utf8');

  // 2. Write to dist/ if it exists
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
    fs.writeFileSync(path.join(distDir, 'sitemap_index.xml'), sitemapIndexXml, 'utf8');
  }

  // 3. Synchronize robots.txt with dual sitemaps and clean directives
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
Sitemap: ${BASE_URL}/sitemap_index.xml
`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8');
  }

  console.log(`[Automatic Sitemap] Successfully generated sitemap.xml (${routesConfig.length} URLs) and sitemap_index.xml (lastmod: ${today})`);
}

// If executed directly via CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  writeSitemap();
}

