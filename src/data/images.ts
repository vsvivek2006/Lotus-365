/**
 * Centralized Image Asset Registry for Lotus365
 * 
 * Maps every game, tournament, sports category, payment channel, VIP tier, and banner.
 * Replace URLs or filenames here or drop custom studio graphics into /public/images/
 * without altering UI component code.
 */

export const SITE_IMAGES = {
  banners: {
    heroCricket: '/images/banners/hero-cricket-stadium.svg',
    heroCasino: '/images/banners/hero-casino-luxury.svg',
    heroAviator: '/images/banners/hero-aviator-speed.svg',
    heroVipLounge: '/images/banners/hero-vip-lounge.svg',
    ogBanner: '/og-banner.webp',
  },
  games: {
    aviator: '/images/games/aviator.svg',
    teenPatti: '/images/games/teen-patti.svg',
    andarBahar: '/images/games/andar-bahar.svg',
    roulette: '/images/games/roulette.svg',
    lightningRoulette: '/images/games/lightning-roulette.svg',
    blackjack: '/images/games/blackjack.svg',
    baccarat: '/images/games/baccarat.svg',
    speedBaccarat: '/images/games/baccarat.svg',
    dragonTiger: '/images/games/dragon-tiger.svg',
    casinoSlots: '/images/games/casino-slots.svg',
    crazyTime: '/images/games/crazy-time.svg',
    megaWheel: '/images/games/mega-wheel.svg',
    lucky7: '/images/games/lucky-7.svg',
    thirtyTwoCards: '/images/games/thirty-two-cards.svg',
    superOver: '/images/games/super-over.svg',
    colorPrediction: '/images/games/color-prediction.svg',
    muflisTeenPatti: '/images/games/teen-patti.svg',
    ak47TeenPatti: '/images/games/teen-patti.svg',
    jokerTeenPatti: '/images/games/teen-patti.svg',
  },
  sports: {
    cricket: '/images/sports/cricket.svg',
    ipl: '/images/sports/ipl.svg',
    t20WorldCup: '/images/sports/cricket.svg',
    odiWorldCup: '/images/sports/cricket.svg',
    football: '/images/sports/football.svg',
    tennis: '/images/sports/tennis.svg',
    kabaddi: '/images/sports/kabaddi.svg',
    basketball: '/images/sports/basketball.svg',
    horseRacing: '/images/sports/horse-racing.svg',
    virtualSports: '/images/sports/virtual-sports.svg',
  },
  payments: {
    upi: '/images/payments/upi.svg',
    phonepe: '/images/payments/phonepe.svg',
    gpay: '/images/payments/gpay.svg',
    paytm: '/images/payments/paytm.svg',
    imps: '/images/payments/imps.svg',
    usdt: '/images/payments/usdt-crypto.svg',
  },
  vip: {
    bronze: '/images/vip/card-bronze.svg',
    silver: '/images/vip/card-silver.svg',
    gold: '/images/vip/card-gold.svg',
    platinum: '/images/vip/card-platinum.svg',
    black: '/images/vip/card-black.svg',
  },
  dealers: {
    hindi: '/images/dealers/dealer-hindi.svg',
    roulette: '/images/dealers/dealer-roulette.svg',
  },
} as const;

/**
 * Returns a suitable image for any given route slug or category
 */
export function getRouteHeroImage(pathname: string): string {
  const clean = pathname.replace(/^\//, '').toLowerCase();

  // Cricket & Tournaments
  if (clean.includes('ipl') || clean.includes('t20') || clean.includes('cricket') || clean.includes('bbl') || clean.includes('psl') || clean.includes('wpl')) {
    return SITE_IMAGES.banners.heroCricket;
  }
  // Aviator / Crash
  if (clean.includes('aviator') || clean.includes('crash') || clean.includes('color-prediction')) {
    return SITE_IMAGES.banners.heroAviator;
  }
  // VIP & Bonuses
  if (clean.includes('vip') || clean.includes('bonus') || clean.includes('cashback')) {
    return SITE_IMAGES.banners.heroVipLounge;
  }
  // Casino & Cards
  if (
    clean.includes('casino') ||
    clean.includes('teen-patti') ||
    clean.includes('andar-bahar') ||
    clean.includes('roulette') ||
    clean.includes('blackjack') ||
    clean.includes('baccarat') ||
    clean.includes('dragon-tiger') ||
    clean.includes('slots')
  ) {
    return SITE_IMAGES.banners.heroCasino;
  }
  // Sports
  if (clean.includes('football')) return SITE_IMAGES.sports.football;
  if (clean.includes('tennis')) return SITE_IMAGES.sports.tennis;
  if (clean.includes('kabaddi')) return SITE_IMAGES.sports.kabaddi;
  if (clean.includes('basketball')) return SITE_IMAGES.sports.basketball;
  if (clean.includes('horse-racing')) return SITE_IMAGES.sports.horseRacing;

  // Default fallback
  return SITE_IMAGES.banners.heroCricket;
}
