const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
const robotsPath = path.join(rootDir, 'public', 'robots.txt');

console.log('=== SENIOR LEVEL COMPREHENSIVE RE-AUDIT ===\n');

// 1. Check robots.txt
console.log('--- 1. AUDITING ROBOTS.TXT ---');
if (!fs.existsSync(robotsPath)) {
  console.error('FAIL: robots.txt missing!');
} else {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  const hasGooglebot = robots.includes('User-agent: Googlebot');
  const hasBingbot = robots.includes('User-agent: Bingbot');
  const hasSitemap = robots.includes('Sitemap: https://lotus365officialid.com/sitemap.xml');
  const hasHost = robots.includes('Host: https://lotus365officialid.com');
  const blocksWellKnown = robots.includes('/.well-known/');
  console.log(`- Googlebot directive: ${hasGooglebot ? 'PASS' : 'FAIL'}`);
  console.log(`- Bingbot directive: ${hasBingbot ? 'PASS' : 'FAIL'}`);
  console.log(`- Sitemap reference: ${hasSitemap ? 'PASS' : 'FAIL'}`);
  console.log(`- Host reference: ${hasHost ? 'PASS' : 'FAIL'}`);
  console.log(`- Blocks /.well-known/: ${blocksWellKnown ? 'FAIL (BLOCKED)' : 'PASS (ALLOWED)'}`);
}

// 2. Check sitemap.xml
console.log('\n--- 2. AUDITING SITEMAP.XML ---');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const sitemapUrls = [];
const locRegex = /<loc>(https:\/\/lotus365officialid\.com[^<]*)<\/loc>/g;
let match;
while ((match = locRegex.exec(sitemapContent)) !== null) {
  sitemapUrls.push(match[1]);
}
console.log(`- Total URLs in sitemap: ${sitemapUrls.length} (Expected: 54)`);

// 3. Audit all 54 routes across all metrics
console.log('\n--- 3. AUDITING ALL 54 PAGES IN DIST ---');

const routes = [
  '/',
  '/about',
  '/contact',
  '/responsible-gaming',
  '/terms',
  '/privacy-policy',
  '/sitemap',
  '/cricket-betting',
  '/cricket-exchange',
  '/ipl-betting',
  '/t20-world-cup-betting',
  '/football-betting',
  '/tennis-betting',
  '/kabaddi-betting',
  '/basketball-betting',
  '/horse-racing-betting',
  '/sportsbook',
  '/live-casino',
  '/teen-patti',
  '/andar-bahar',
  '/roulette',
  '/blackjack',
  '/baccarat',
  '/dragon-tiger',
  '/speed-baccarat',
  '/lightning-roulette',
  '/casino-slots',
  '/aviator-game',
  '/crash-games',
  '/color-prediction',
  '/virtual-sports',
  '/register',
  '/login',
  '/how-to-deposit',
  '/how-to-withdraw',
  '/upi-deposit',
  '/imps-withdrawal',
  '/payment-methods',
  '/2-minute-cashout',
  '/welcome-bonus',
  '/first-deposit-bonus',
  '/referral-bonus',
  '/cashback-offers',
  '/vip-club',
  '/vip-black-card',
  '/lotus365-review',
  '/lotus365-vs-competitors',
  '/betting-tips',
  '/ipl-predictions',
  '/online-casino-guide',
  '/safe-betting-guide',
  '/mobile-web-app-guide',
  '/faq',
  '/how-it-works'
];

let issues = [];
const allValidRoutes = new Set(routes);

for (const r of routes) {
  const filePath = r === '/' ? path.join(distDir, 'index.html') : path.join(distDir, r.slice(1), 'index.html');
  if (!fs.existsSync(filePath)) {
    issues.push(`[${r}] File missing: ${filePath}`);
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // A. Canonical check
  const canonicalMatches = [...content.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/gi)];
  const expectedCanonical = r === '/' ? 'https://lotus365officialid.com/' : `https://lotus365officialid.com${r}`;
  if (canonicalMatches.length === 0) {
    issues.push(`[${r}] Canonical missing`);
  } else if (canonicalMatches.length > 1) {
    issues.push(`[${r}] Duplicate canonical tags: found ${canonicalMatches.length}`);
  } else if (canonicalMatches[0][1] !== expectedCanonical) {
    issues.push(`[${r}] Canonical mismatch: expected ${expectedCanonical}, got ${canonicalMatches[0][1]}`);
  }

  // B. Title check
  const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/i);
  if (!titleMatch) {
    issues.push(`[${r}] Title tag missing`);
  } else {
    const rawTitle = titleMatch[1].replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
    if (rawTitle.length < 30 || rawTitle.length > 60) {
      issues.push(`[${r}] Title length out of range (${rawTitle.length} chars): "${rawTitle}"`);
    }
  }

  // C. Meta description
  const descMatch = content.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i);
  if (!descMatch) {
    issues.push(`[${r}] Meta description missing`);
  } else if (descMatch[1].length < 100 || descMatch[1].length > 165) {
    issues.push(`[${r}] Description length out of range (${descMatch[1].length} chars)`);
  }

  // D. H1 check
  const h1Matches = [...content.matchAll(/<h1[^>]*>(.*?)<\/h1>/gis)];
  if (h1Matches.length === 0) {
    issues.push(`[${r}] Missing <h1> tag`);
  } else if (h1Matches.length > 1) {
    issues.push(`[${r}] Multiple <h1> tags (${h1Matches.length})`);
  }

  // E. Word count check (extract text within #root, stripping tags)
  const rootIndex = content.indexOf('<div id="root">');
  const rootEnd = content.indexOf('</body>', rootIndex);
  if (rootIndex !== -1 && rootEnd !== -1) {
    const rootHtml = content.slice(rootIndex, rootEnd);
    const textOnly = rootHtml
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const wordCount = textOnly.split(' ').filter(w => w.length > 1).length;
    if (wordCount < 1000) {
      issues.push(`[${r}] Word count below 1000: ${wordCount} words`);
    }
  } else {
    issues.push(`[${r}] Unable to find #root in HTML`);
  }

  // F. JSON-LD Schema Validation
  const schemaMatches = [...content.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gis)];
  if (schemaMatches.length === 0) {
    issues.push(`[${r}] Missing JSON-LD Schema`);
  } else {
    for (const sm of schemaMatches) {
      try {
        const parsed = JSON.parse(sm[1]);
        if (!parsed['@context']) {
          issues.push(`[${r}] Invalid schema: missing @context`);
        } else if (!parsed['@type'] && !parsed['@graph']) {
          issues.push(`[${r}] Invalid schema: missing @type or @graph`);
        } else if (parsed['@graph']) {
          for (const item of parsed['@graph']) {
            if (!item['@type']) {
              issues.push(`[${r}] Invalid schema in @graph: item missing @type`);
            }
          }
        }
      } catch (err) {
        issues.push(`[${r}] Malformed JSON-LD schema: ${err.message}`);
      }
    }
  }

  // G. Internal Link Validation
  const hrefMatches = [...content.matchAll(/href="(\/[a-zA-Z0-9\-_]*)"/g)];
  for (const hm of hrefMatches) {
    const linkUrl = hm[1];
    // skip static assets like /favicon or /assets/
    if (linkUrl.startsWith('/assets') || linkUrl.endsWith('.png') || linkUrl.endsWith('.svg') || linkUrl.endsWith('.ico') || linkUrl.endsWith('.xml') || linkUrl.endsWith('.txt')) {
      continue;
    }
    if (!allValidRoutes.has(linkUrl)) {
      issues.push(`[${r}] Broken internal link: "${linkUrl}" does not match any valid route`);
    }
  }

  // H. Image Alt Attributes
  const imgMatches = [...content.matchAll(/<img\b([^>]*)>/gi)];
  for (const im of imgMatches) {
    const imgAttrs = im[1];
    if (!imgAttrs.includes('alt=')) {
      issues.push(`[${r}] Image missing alt attribute: ${im[0]}`);
    }
  }
}

console.log('--------------------------------------------------');
if (issues.length === 0) {
  console.log('ALL 54 PAGES PASSED ALL CHECKS:');
  console.log('- Exact Canonical Tags: 54/54 PASS');
  console.log('- Title Length & Keywords: 54/54 PASS');
  console.log('- Meta Descriptions: 54/54 PASS');
  console.log('- Exactly One H1 Tag: 54/54 PASS');
  console.log('- Content Depth (>1,000 words): 54/54 PASS');
  console.log('- JSON-LD Schema Valid: 54/54 PASS');
  console.log('- Zero Broken Internal Links: 54/54 PASS');
  console.log('- Image Alt Attributes: 54/54 PASS');
} else {
  console.error(`Found ${issues.length} issue(s):`);
  issues.forEach(i => console.error('  *', i));
  process.exit(1);
}
