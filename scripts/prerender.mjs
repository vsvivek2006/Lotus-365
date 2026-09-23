import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// All 54 canonical routes matching App.tsx and sitemap.xml
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

async function prerender() {
  console.log(`[SSG Prerender] Starting pre-render for ${routes.length} routes...`);

  // Suppress useLayoutEffect warnings in Node
  const originalError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('useLayoutEffect does nothing on the server')) {
      return;
    }
    originalError(...args);
  };

  const distDir = path.join(rootDir, 'dist');
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Base template not found at ${templatePath}. Did you run 'vite build' first?`);
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  // Import the SSR entry point built by Vite
  const serverEntryPath = path.join(rootDir, 'dist-server', 'entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Server entry not found at ${serverEntryPath}. Build the SSR bundle first.`);
  }

  const { render } = await import(`file://${serverEntryPath.replace(/\\/g, '/')}`);

  let successCount = 0;

  for (const route of routes) {
    try {
      const { appHtml, helmet } = render(route);

      const headTags = [
        helmet.title ? helmet.title.toString() : '',
        helmet.meta ? helmet.meta.toString() : '',
        helmet.link ? helmet.link.toString() : '',
        helmet.script ? helmet.script.toString() : '',
      ].filter(Boolean).join('\n    ');

      // Inject into template:
      // Replace base fallback title/meta with helmet tags
      let html = template;

      // Replace app-head and remove template fallbacks
      html = html.replace('<!--app-head-->', headTags);
      html = html.replace(/<title>.*?<\/title>/i, '');
      html = html.replace(/<meta name="description" content=".*?" \/>/i, '');

      // Inject app-html into root div
      html = html.replace('<!--app-html-->', appHtml);

      // Save to disk
      let outPath;
      if (route === '/') {
        outPath = path.join(distDir, 'index.html');
        fs.writeFileSync(outPath, html, 'utf8');
      } else {
        const cleanRoute = route.replace(/^\//, '');
        // 1. Flat HTML for Vercel cleanUrls
        const flatHtmlPath = path.join(distDir, `${cleanRoute}.html`);
        fs.writeFileSync(flatHtmlPath, html, 'utf8');

        // 2. Nested directory index.html for static servers
        const routeDir = path.join(distDir, cleanRoute);
        fs.mkdirSync(routeDir, { recursive: true });
        outPath = path.join(routeDir, 'index.html');
        fs.writeFileSync(outPath, html, 'utf8');
      }
      successCount++;
    } catch (err) {
      console.error(`[SSG Prerender] Error pre-rendering ${route}:`, err);
    }
  }

  // Restore console.error
  console.error = originalError;

  // Cleanup dist-server
  try {
    const distServerDir = path.join(rootDir, 'dist-server');
    if (fs.existsSync(distServerDir)) {
      fs.rmSync(distServerDir, { recursive: true, force: true });
    }
  } catch {
    // ignore
  }

  console.log(`[SSG Prerender] Successfully generated ${successCount}/${routes.length} static HTML pages!`);
}

prerender().catch((err) => {
  console.error('[SSG Prerender] Fatal error:', err);
  process.exit(1);
});
