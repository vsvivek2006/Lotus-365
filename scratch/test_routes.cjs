const http = require('http');

const routes = [
  '/',
  '/cricket-betting',
  '/cricket-exchange',
  '/ipl-betting',
  '/live-casino',
  '/teen-patti',
  '/aviator-game',
  '/register',
  '/login',
  '/how-to-deposit',
  '/welcome-bonus',
  '/vip-club',
  '/lotus365-review',
  '/sitemap',
  '/sitemap.xml',
  '/robots.txt',
  '/faq'
];

async function checkRoute(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:5174${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ path, status: res.statusCode, length: data.length });
      });
    }).on('error', (err) => {
      resolve({ path, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  console.log('Testing dev server routes:');
  for (const r of routes) {
    const res = await checkRoute(r);
    console.log(`${res.path.padEnd(25)} -> Status: ${res.status} (${res.length || 0} bytes)`);
  }
}

run();
