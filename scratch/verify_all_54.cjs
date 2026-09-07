const http = require('http');

const allRoutes = [
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
  '/how-it-works',
];

async function check(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:5174${path}`, (res) => {
      resolve({ path, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ path, status: 'ERROR', error: err.message });
    });
  });
}

async function verifyAll() {
  console.log(`Verifying all ${allRoutes.length} pages...`);
  let errors = 0;
  for (const r of allRoutes) {
    const res = await check(r);
    if (res.status !== 200) {
      console.error(`FAIL: ${r} returned ${res.status}`);
      errors++;
    }
  }
  if (errors === 0) {
    console.log(`SUCCESS: All ${allRoutes.length} routes returned HTTP 200 OK!`);
  } else {
    console.error(`FAILED: ${errors} routes had issues.`);
  }
}

verifyAll();
