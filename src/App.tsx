import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Home
import { HomePage } from './pages/HomePage';

// Tier 1 — Core
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ResponsibleGamingPage } from './pages/ResponsibleGamingPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { SitemapPage } from './pages/SitemapPage';

// Tier 2 — Sports Betting
import { CricketBettingPage } from './pages/CricketBettingPage';
import { CricketExchangePage } from './pages/CricketExchangePage';
import { IplBettingPage } from './pages/IplBettingPage';
import { T20WorldCupPage } from './pages/T20WorldCupPage';
import { FootballBettingPage, TennisBettingPage } from './pages/FootballTennisBettingPage';
import { KabaddiBettingPage, BasketballBettingPage, HorseRacingPage, SportsbookPage } from './pages/OtherSportPages';

// Tier 3 — Live Casino
import { LiveCasinoPage } from './pages/LiveCasinoPage';
import { TeenPattiPage, AndarBaharPage } from './pages/IndianCardGamePages';
import { RoulettePage, BlackjackPage, BaccaratPage, DragonTigerPage, SpeedBaccaratPage, LightningRoulettePage, CasinoSlotsPage } from './pages/CasinoGamePages';

// Tier 4 — Special Games
import { AviatorGamePage, CrashGamesPage, ColorPredictionPage, VirtualSportsPage } from './pages/SpecialGamePages';

// Tier 5 — Account & Payments
import { RegisterPage, LoginPage } from './pages/AccountPages';
import { HowToDepositPage, HowToWithdrawPage, UpiDepositPage, ImpsWithdrawalPage, PaymentMethodsPage, TwoMinuteCashoutPage } from './pages/PaymentPages';

// Tier 6 — Bonuses & VIP
import { WelcomeBonusPage, FirstDepositBonusPage, ReferralBonusPage, CashbackOffersPage, VipClubPage, VipBlackCardPage } from './pages/BonusVipPages';

// Tier 7 — Blog / Info
import { ReviewPage, VsCompetitorsPage, BettingTipsPage, IplPredictionsPage, OnlineCasinoGuidePage, SafeBettingGuidePage, MobileWebAppGuidePage, FaqPage, HowItWorksPage } from './pages/BlogGuidePages';

const RootLayout: React.FC = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      // ── HOME ───────────────────────────────────────────────────────────────────
      { path: '/', element: <HomePage /> },

  // ── TIER 1: CORE ───────────────────────────────────────────────────────────
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/responsible-gaming', element: <ResponsibleGamingPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  { path: '/sitemap', element: <SitemapPage /> },

  // ── TIER 2: SPORTS BETTING ─────────────────────────────────────────────────
  { path: '/cricket-betting', element: <CricketBettingPage /> },
  { path: '/cricket-exchange', element: <CricketExchangePage /> },
  { path: '/ipl-betting', element: <IplBettingPage /> },
  { path: '/t20-world-cup-betting', element: <T20WorldCupPage /> },
  { path: '/football-betting', element: <FootballBettingPage /> },
  { path: '/tennis-betting', element: <TennisBettingPage /> },
  { path: '/kabaddi-betting', element: <KabaddiBettingPage /> },
  { path: '/basketball-betting', element: <BasketballBettingPage /> },
  { path: '/horse-racing-betting', element: <HorseRacingPage /> },
  { path: '/sportsbook', element: <SportsbookPage /> },

  // ── TIER 3: LIVE CASINO ────────────────────────────────────────────────────
  { path: '/live-casino', element: <LiveCasinoPage /> },
  { path: '/teen-patti', element: <TeenPattiPage /> },
  { path: '/andar-bahar', element: <AndarBaharPage /> },
  { path: '/roulette', element: <RoulettePage /> },
  { path: '/blackjack', element: <BlackjackPage /> },
  { path: '/baccarat', element: <BaccaratPage /> },
  { path: '/dragon-tiger', element: <DragonTigerPage /> },
  { path: '/speed-baccarat', element: <SpeedBaccaratPage /> },
  { path: '/lightning-roulette', element: <LightningRoulettePage /> },
  { path: '/casino-slots', element: <CasinoSlotsPage /> },

  // ── TIER 4: SPECIAL GAMES ──────────────────────────────────────────────────
  { path: '/aviator-game', element: <AviatorGamePage /> },
  { path: '/crash-games', element: <CrashGamesPage /> },
  { path: '/color-prediction', element: <ColorPredictionPage /> },
  { path: '/virtual-sports', element: <VirtualSportsPage /> },

  // ── TIER 5: ACCOUNT & PAYMENTS ─────────────────────────────────────────────
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/how-to-deposit', element: <HowToDepositPage /> },
  { path: '/how-to-withdraw', element: <HowToWithdrawPage /> },
  { path: '/upi-deposit', element: <UpiDepositPage /> },
  { path: '/imps-withdrawal', element: <ImpsWithdrawalPage /> },
  { path: '/payment-methods', element: <PaymentMethodsPage /> },
  { path: '/2-minute-cashout', element: <TwoMinuteCashoutPage /> },

  // ── TIER 6: BONUSES & VIP ──────────────────────────────────────────────────
  { path: '/welcome-bonus', element: <WelcomeBonusPage /> },
  { path: '/first-deposit-bonus', element: <FirstDepositBonusPage /> },
  { path: '/referral-bonus', element: <ReferralBonusPage /> },
  { path: '/cashback-offers', element: <CashbackOffersPage /> },
  { path: '/vip-club', element: <VipClubPage /> },
  { path: '/vip-black-card', element: <VipBlackCardPage /> },

  // ── TIER 7: BLOG / INFO ────────────────────────────────────────────────────
  { path: '/lotus365-review', element: <ReviewPage /> },
  { path: '/lotus365-vs-competitors', element: <VsCompetitorsPage /> },
  { path: '/betting-tips', element: <BettingTipsPage /> },
  { path: '/ipl-predictions', element: <IplPredictionsPage /> },
  { path: '/online-casino-guide', element: <OnlineCasinoGuidePage /> },
  { path: '/safe-betting-guide', element: <SafeBettingGuidePage /> },
  { path: '/mobile-web-app-guide', element: <MobileWebAppGuidePage /> },
  { path: '/faq', element: <FaqPage /> },
  { path: '/how-it-works', element: <HowItWorksPage /> },
    ],
  },
]);

export const App: React.FC = () => <RouterProvider router={router} />;

export default App;
