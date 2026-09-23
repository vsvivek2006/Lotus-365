import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Home - synchronous for instant LCP on landing page
import { HomePage } from './pages/HomePage';

// Tier 1 — Core
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const ResponsibleGamingPage = lazy(() => import('./pages/ResponsibleGamingPage').then(m => ({ default: m.ResponsibleGamingPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then(m => ({ default: m.SitemapPage })));

// Tier 2 — Sports Betting
const CricketBettingPage = lazy(() => import('./pages/CricketBettingPage').then(m => ({ default: m.CricketBettingPage })));
const CricketExchangePage = lazy(() => import('./pages/CricketExchangePage').then(m => ({ default: m.CricketExchangePage })));
const IplBettingPage = lazy(() => import('./pages/IplBettingPage').then(m => ({ default: m.IplBettingPage })));
const T20WorldCupPage = lazy(() => import('./pages/T20WorldCupPage').then(m => ({ default: m.T20WorldCupPage })));
const FootballBettingPage = lazy(() => import('./pages/FootballTennisBettingPage').then(m => ({ default: m.FootballBettingPage })));
const TennisBettingPage = lazy(() => import('./pages/FootballTennisBettingPage').then(m => ({ default: m.TennisBettingPage })));
const KabaddiBettingPage = lazy(() => import('./pages/OtherSportPages').then(m => ({ default: m.KabaddiBettingPage })));
const BasketballBettingPage = lazy(() => import('./pages/OtherSportPages').then(m => ({ default: m.BasketballBettingPage })));
const HorseRacingPage = lazy(() => import('./pages/OtherSportPages').then(m => ({ default: m.HorseRacingPage })));
const SportsbookPage = lazy(() => import('./pages/OtherSportPages').then(m => ({ default: m.SportsbookPage })));

// Tier 3 — Live Casino
const LiveCasinoPage = lazy(() => import('./pages/LiveCasinoPage').then(m => ({ default: m.LiveCasinoPage })));
const TeenPattiPage = lazy(() => import('./pages/IndianCardGamePages').then(m => ({ default: m.TeenPattiPage })));
const AndarBaharPage = lazy(() => import('./pages/IndianCardGamePages').then(m => ({ default: m.AndarBaharPage })));
const RoulettePage = lazy(() => import('./pages/CasinoGamePages').then(m => ({ default: m.RoulettePage })));
const BlackjackPage = lazy(() => import('./pages/CasinoGamePages').then(m => ({ default: m.BlackjackPage })));
const BaccaratPage = lazy(() => import('./pages/CasinoGamePages').then(m => ({ default: m.BaccaratPage })));
const DragonTigerPage = lazy(() => import('./pages/CasinoGamePages').then(m => ({ default: m.DragonTigerPage })));
const SpeedBaccaratPage = lazy(() => import('./pages/CasinoGamePages').then(m => ({ default: m.SpeedBaccaratPage })));
const LightningRoulettePage = lazy(() => import('./pages/CasinoGamePages').then(m => ({ default: m.LightningRoulettePage })));
const CasinoSlotsPage = lazy(() => import('./pages/CasinoGamePages').then(m => ({ default: m.CasinoSlotsPage })));

// Tier 4 — Special Games
const AviatorGamePage = lazy(() => import('./pages/SpecialGamePages').then(m => ({ default: m.AviatorGamePage })));
const CrashGamesPage = lazy(() => import('./pages/SpecialGamePages').then(m => ({ default: m.CrashGamesPage })));
const ColorPredictionPage = lazy(() => import('./pages/SpecialGamePages').then(m => ({ default: m.ColorPredictionPage })));
const VirtualSportsPage = lazy(() => import('./pages/SpecialGamePages').then(m => ({ default: m.VirtualSportsPage })));

// Tier 5 — Account & Payments
const RegisterPage = lazy(() => import('./pages/AccountPages').then(m => ({ default: m.RegisterPage })));
const LoginPage = lazy(() => import('./pages/AccountPages').then(m => ({ default: m.LoginPage })));
const HowToDepositPage = lazy(() => import('./pages/PaymentPages').then(m => ({ default: m.HowToDepositPage })));
const HowToWithdrawPage = lazy(() => import('./pages/PaymentPages').then(m => ({ default: m.HowToWithdrawPage })));
const UpiDepositPage = lazy(() => import('./pages/PaymentPages').then(m => ({ default: m.UpiDepositPage })));
const ImpsWithdrawalPage = lazy(() => import('./pages/PaymentPages').then(m => ({ default: m.ImpsWithdrawalPage })));
const PaymentMethodsPage = lazy(() => import('./pages/PaymentPages').then(m => ({ default: m.PaymentMethodsPage })));
const TwoMinuteCashoutPage = lazy(() => import('./pages/PaymentPages').then(m => ({ default: m.TwoMinuteCashoutPage })));

// Tier 6 — Bonuses & VIP
const WelcomeBonusPage = lazy(() => import('./pages/BonusVipPages').then(m => ({ default: m.WelcomeBonusPage })));
const FirstDepositBonusPage = lazy(() => import('./pages/BonusVipPages').then(m => ({ default: m.FirstDepositBonusPage })));
const ReferralBonusPage = lazy(() => import('./pages/BonusVipPages').then(m => ({ default: m.ReferralBonusPage })));
const CashbackOffersPage = lazy(() => import('./pages/BonusVipPages').then(m => ({ default: m.CashbackOffersPage })));
const VipClubPage = lazy(() => import('./pages/BonusVipPages').then(m => ({ default: m.VipClubPage })));
const VipBlackCardPage = lazy(() => import('./pages/BonusVipPages').then(m => ({ default: m.VipBlackCardPage })));

// Tier 7 — Blog / Info
const ReviewPage = lazy(() => import('./pages/BlogGuidePages').then(m => ({ default: m.ReviewPage })));
const VsCompetitorsPage = lazy(() => import('./pages/BlogGuidePages').then(m => ({ default: m.VsCompetitorsPage })));
const BettingTipsPage = lazy(() => import('./pages/BlogGuidePages').then(m => ({ default: m.BettingTipsPage })));
const IplPredictionsPage = lazy(() => import('./pages/BlogGuidePages').then(m => ({ default: m.IplPredictionsPage })));
const OnlineCasinoGuidePage = lazy(() => import('./pages/BlogGuidePages').then(m => ({ default: m.OnlineCasinoGuidePage })));
const SafeBettingGuidePage = lazy(() => import('./pages/BlogGuidePages').then(m => ({ default: m.SafeBettingGuidePage })));
const MobileWebAppGuidePage = lazy(() => import('./pages/BlogGuidePages').then(m => ({ default: m.MobileWebAppGuidePage })));
const FaqPage = lazy(() => import('./pages/BlogGuidePages').then(m => ({ default: m.FaqPage })));
const HowItWorksPage = lazy(() => import('./pages/BlogGuidePages').then(m => ({ default: m.HowItWorksPage })));

const RootLayout: React.FC = () => (
  <>
    <ScrollToTop />
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  </>
);

export const routes = [
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
];

const router = typeof window !== 'undefined' ? createBrowserRouter(routes) : null;

export const App: React.FC = () => {
  if (!router) return null;
  return <RouterProvider router={router} />;
};

export default App;
