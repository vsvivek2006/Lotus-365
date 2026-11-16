/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'piicmekdaapfdtyfjfiu.supabase.co',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
      {
        source: '/admin',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive',
          },
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive',
          },
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // 1. Regional cricket routes -> /cricket-betting
      { source: '/cricket-betting-delhi', destination: '/cricket-betting', permanent: true },
      { source: '/cricket-betting-mumbai', destination: '/cricket-betting', permanent: true },
      { source: '/cricket-betting-punjab', destination: '/cricket-betting', permanent: true },
      { source: '/cricket-betting-bangalore', destination: '/cricket-betting', permanent: true },
      { source: '/cricket-betting-hyderabad', destination: '/cricket-betting', permanent: true },
      { source: '/cricket-betting-kolkata', destination: '/cricket-betting', permanent: true },
      { source: '/live-cricket-score-odds', destination: '/cricket-betting', permanent: true },
      { source: '/cricket-session-betting', destination: '/cricket-betting', permanent: true },
      { source: '/cricket-toss-prediction', destination: '/cricket-betting', permanent: true },
      { source: '/cricket-betting-glossary', destination: '/cricket-betting', permanent: true },
      { source: '/t20-world-cup-betting', destination: '/cricket-betting', permanent: true },

      // 2. Global cricket tournament sub-pages -> /cricket-betting
      { source: '/wpl-betting', destination: '/cricket-betting', permanent: true },
      { source: '/psl-betting', destination: '/cricket-betting', permanent: true },
      { source: '/bbl-betting', destination: '/cricket-betting', permanent: true },
      { source: '/cpl-betting', destination: '/cricket-betting', permanent: true },
      { source: '/asia-cup-betting', destination: '/cricket-betting', permanent: true },
      { source: '/icc-odi-world-cup', destination: '/cricket-betting', permanent: true },
      { source: '/test-cricket-betting', destination: '/cricket-betting', permanent: true },

      // 3. IPL sub-routes -> /ipl-betting
      { source: '/ipl-teams-betting-odds', destination: '/ipl-betting', permanent: true },
      { source: '/ipl-predictions', destination: '/ipl-betting', permanent: true },

      // 4. Minor sports -> /sportsbook
      { source: '/kabaddi-betting', destination: '/sportsbook', permanent: true },
      { source: '/basketball-betting', destination: '/sportsbook', permanent: true },
      { source: '/horse-racing-betting', destination: '/sportsbook', permanent: true },

      // 5. Exchange rule pages -> /cricket-exchange
      { source: '/tied-match-rules', destination: '/cricket-exchange', permanent: true },
      { source: '/bet-slip-guide', destination: '/how-it-works', permanent: true },
      { source: '/back-and-lay-betting', destination: '/cricket-exchange', permanent: true },
      { source: '/betting-exchange-vs-sportsbook', destination: '/cricket-exchange', permanent: true },
      { source: '/betting-odds-calculator', destination: '/cricket-exchange', permanent: true },
      { source: '/bookmaker-market', destination: '/cricket-exchange', permanent: true },
      { source: '/dutching-calculator-guide', destination: '/cricket-exchange', permanent: true },
      { source: '/exchange-commission-rates', destination: '/cricket-exchange', permanent: true },
      { source: '/in-play-cashout-guide', destination: '/cricket-exchange', permanent: true },
      { source: '/match-odds-trading', destination: '/cricket-exchange', permanent: true },

      // 6. Casino game variations -> flagship casino games
      { source: '/speed-baccarat', destination: '/baccarat', permanent: true },
      { source: '/dragon-tiger', destination: '/baccarat', permanent: true },
      { source: '/lightning-roulette', destination: '/roulette', permanent: true },
      { source: '/roulette-strategies', destination: '/roulette', permanent: true },
      { source: '/32-cards-casino', destination: '/teen-patti', permanent: true },
      { source: '/super-over-game', destination: '/teen-patti', permanent: true },
      { source: '/muflis-teen-patti', destination: '/teen-patti', permanent: true },
      { source: '/ak47-teen-patti', destination: '/teen-patti', permanent: true },
      { source: '/joker-teen-patti', destination: '/teen-patti', permanent: true },
      { source: '/live-dealer-games', destination: '/live-casino', permanent: true },
      { source: '/crazy-time', destination: '/live-casino', permanent: true },
      { source: '/mega-wheel', destination: '/live-casino', permanent: true },
      { source: '/crash-games', destination: '/aviator-game', permanent: true },
      { source: '/virtual-sports', destination: '/color-prediction', permanent: true },
      { source: '/lucky-7-game', destination: '/color-prediction', permanent: true },

      // 7. Payment sub-methods -> consolidated payment hubs
      { source: '/phonepe-deposit', destination: '/how-to-deposit', permanent: true },
      { source: '/google-pay-deposit', destination: '/how-to-deposit', permanent: true },
      { source: '/paytm-deposit', destination: '/how-to-deposit', permanent: true },
      { source: '/upi-deposit', destination: '/how-to-deposit', permanent: true },
      { source: '/crypto-deposit-usdt', destination: '/how-to-deposit', permanent: true },
      { source: '/payment-methods', destination: '/how-to-deposit', permanent: true },
      { source: '/bank-transfer-neft-rtgs', destination: '/how-to-withdraw', permanent: true },
      { source: '/imps-withdrawal', destination: '/how-to-withdraw', permanent: true },
      { source: '/2-minute-cashout', destination: '/how-to-withdraw', permanent: true },
      { source: '/withdrawal-proof-times', destination: '/how-to-withdraw', permanent: true },
      { source: '/kyc-verification-guide', destination: '/how-it-works', permanent: true },
      { source: '/account-security-tips', destination: '/how-it-works', permanent: true },

      // 8. Promotions & VIP sub-pages -> /vip-club
      { source: '/first-deposit-bonus', destination: '/vip-club', permanent: true },
      { source: '/welcome-bonus', destination: '/vip-club', permanent: true },
      { source: '/cashback-offers', destination: '/vip-club', permanent: true },
      { source: '/referral-bonus', destination: '/vip-club', permanent: true },
      { source: '/vip-black-card', destination: '/vip-club', permanent: true },
      { source: '/lotus365-blue', destination: '/vip-club', permanent: true },
      { source: '/lotus365-partner-program', destination: '/vip-club', permanent: true },

      // 9. Guides & Help sub-pages -> /how-it-works & /about
      { source: '/lotus365-review', destination: '/about', permanent: true },
      { source: '/lotus365-vs-competitors', destination: '/about', permanent: true },
      { source: '/betting-tips', destination: '/cricket-betting', permanent: true },
      { source: '/online-casino-guide', destination: '/live-casino', permanent: true },
      { source: '/safe-betting-guide', destination: '/responsible-gaming', permanent: true },
      { source: '/mobile-web-app-guide', destination: '/how-it-works', permanent: true },
      { source: '/faq', destination: '/how-it-works', permanent: true },
      { source: '/complaints-resolution', destination: '/contact', permanent: true },
      { source: '/responsible-gambling-tools', destination: '/responsible-gaming', permanent: true },
      { source: '/register', destination: '/how-it-works', permanent: true },
      { source: '/login', destination: '/how-it-works', permanent: true },
    ];
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'date-fns',
      'sonner',
      '@hookform/resolvers',
      'zod',
    ],
  },
};

export default nextConfig;
