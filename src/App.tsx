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

// Tier 8 — Tournament & Leagues (10)
const WplBettingPage = lazy(() => import('./pages/TournamentSportPages').then(m => ({ default: m.WplBettingPage })));
const PslBettingPage = lazy(() => import('./pages/TournamentSportPages').then(m => ({ default: m.PslBettingPage })));
const BblBettingPage = lazy(() => import('./pages/TournamentSportPages').then(m => ({ default: m.BblBettingPage })));
const CplBettingPage = lazy(() => import('./pages/TournamentSportPages').then(m => ({ default: m.CplBettingPage })));
const AsiaCupBettingPage = lazy(() => import('./pages/TournamentSportPages').then(m => ({ default: m.AsiaCupBettingPage })));
const IccOdiWorldCupPage = lazy(() => import('./pages/TournamentSportPages').then(m => ({ default: m.IccOdiWorldCupPage })));
const TestCricketBettingPage = lazy(() => import('./pages/TournamentSportPages').then(m => ({ default: m.TestCricketBettingPage })));
const LiveCricketScoreOddsPage = lazy(() => import('./pages/TournamentSportPages').then(m => ({ default: m.LiveCricketScoreOddsPage })));
const CricketSessionBettingPage = lazy(() => import('./pages/TournamentSportPages').then(m => ({ default: m.CricketSessionBettingPage })));
const CricketTossPredictionPage = lazy(() => import('./pages/TournamentSportPages').then(m => ({ default: m.CricketTossPredictionPage })));

// Tier 9 — Exchange Guides & Trading (8)
const BackAndLayBettingPage = lazy(() => import('./pages/ExchangeGuidePages').then(m => ({ default: m.BackAndLayBettingPage })));
const ExchangeCommissionRatesPage = lazy(() => import('./pages/ExchangeGuidePages').then(m => ({ default: m.ExchangeCommissionRatesPage })));
const BettingExchangeVsSportsbookPage = lazy(() => import('./pages/ExchangeGuidePages').then(m => ({ default: m.BettingExchangeVsSportsbookPage })));
const BookmakerMarketPage = lazy(() => import('./pages/ExchangeGuidePages').then(m => ({ default: m.BookmakerMarketPage })));
const InPlayCashoutGuidePage = lazy(() => import('./pages/ExchangeGuidePages').then(m => ({ default: m.InPlayCashoutGuidePage })));
const MatchOddsTradingPage = lazy(() => import('./pages/ExchangeGuidePages').then(m => ({ default: m.MatchOddsTradingPage })));
const TiedMatchRulesPage = lazy(() => import('./pages/ExchangeGuidePages').then(m => ({ default: m.TiedMatchRulesPage })));
const BetSlipGuidePage = lazy(() => import('./pages/ExchangeGuidePages').then(m => ({ default: m.BetSlipGuidePage })));

// Tier 10 — Asian & Live Casino (10)
const Lucky7GamePage = lazy(() => import('./pages/AsianCasinoPages').then(m => ({ default: m.Lucky7GamePage })));
const ThirtyTwoCardsCasinoPage = lazy(() => import('./pages/AsianCasinoPages').then(m => ({ default: m.ThirtyTwoCardsCasinoPage })));
const SuperOverGamePage = lazy(() => import('./pages/AsianCasinoPages').then(m => ({ default: m.SuperOverGamePage })));
const MuflisTeenPattiPage = lazy(() => import('./pages/AsianCasinoPages').then(m => ({ default: m.MuflisTeenPattiPage })));
const Ak47TeenPattiPage = lazy(() => import('./pages/AsianCasinoPages').then(m => ({ default: m.Ak47TeenPattiPage })));
const JokerTeenPattiPage = lazy(() => import('./pages/AsianCasinoPages').then(m => ({ default: m.JokerTeenPattiPage })));
const RouletteStrategiesPage = lazy(() => import('./pages/AsianCasinoPages').then(m => ({ default: m.RouletteStrategiesPage })));
const LiveDealerGamesPage = lazy(() => import('./pages/AsianCasinoPages').then(m => ({ default: m.LiveDealerGamesPage })));
const CrazyTimePage = lazy(() => import('./pages/AsianCasinoPages').then(m => ({ default: m.CrazyTimePage })));
const MegaWheelPage = lazy(() => import('./pages/AsianCasinoPages').then(m => ({ default: m.MegaWheelPage })));

// Tier 11 — Wallet & Banking (8)
const PhonePeDepositPage = lazy(() => import('./pages/WalletBankingPages').then(m => ({ default: m.PhonePeDepositPage })));
const GooglePayDepositPage = lazy(() => import('./pages/WalletBankingPages').then(m => ({ default: m.GooglePayDepositPage })));
const PaytmDepositPage = lazy(() => import('./pages/WalletBankingPages').then(m => ({ default: m.PaytmDepositPage })));
const BankTransferNeftRtgsPage = lazy(() => import('./pages/WalletBankingPages').then(m => ({ default: m.BankTransferNeftRtgsPage })));
const CryptoDepositUsdtPage = lazy(() => import('./pages/WalletBankingPages').then(m => ({ default: m.CryptoDepositUsdtPage })));
const WithdrawalProofTimesPage = lazy(() => import('./pages/WalletBankingPages').then(m => ({ default: m.WithdrawalProofTimesPage })));
const KycVerificationGuidePage = lazy(() => import('./pages/WalletBankingPages').then(m => ({ default: m.KycVerificationGuidePage })));
const AccountSecurityTipsPage = lazy(() => import('./pages/WalletBankingPages').then(m => ({ default: m.AccountSecurityTipsPage })));

// Tier 12 — Regional Indian Cricket (6)
const CricketBettingDelhiPage = lazy(() => import('./pages/RegionalPages').then(m => ({ default: m.CricketBettingDelhiPage })));
const CricketBettingMumbaiPage = lazy(() => import('./pages/RegionalPages').then(m => ({ default: m.CricketBettingMumbaiPage })));
const CricketBettingPunjabPage = lazy(() => import('./pages/RegionalPages').then(m => ({ default: m.CricketBettingPunjabPage })));
const CricketBettingBangalorePage = lazy(() => import('./pages/RegionalPages').then(m => ({ default: m.CricketBettingBangalorePage })));
const CricketBettingHyderabadPage = lazy(() => import('./pages/RegionalPages').then(m => ({ default: m.CricketBettingHyderabadPage })));
const CricketBettingKolkataPage = lazy(() => import('./pages/RegionalPages').then(m => ({ default: m.CricketBettingKolkataPage })));

// Tier 13 — Strategy & Calculators (8)
const BettingOddsCalculatorPage = lazy(() => import('./pages/StrategyResourcePages').then(m => ({ default: m.BettingOddsCalculatorPage })));
const DutchingCalculatorGuidePage = lazy(() => import('./pages/StrategyResourcePages').then(m => ({ default: m.DutchingCalculatorGuidePage })));
const IplTeamsBettingOddsPage = lazy(() => import('./pages/StrategyResourcePages').then(m => ({ default: m.IplTeamsBettingOddsPage })));
const CricketBettingGlossaryPage = lazy(() => import('./pages/StrategyResourcePages').then(m => ({ default: m.CricketBettingGlossaryPage })));
const Lotus365BluePage = lazy(() => import('./pages/StrategyResourcePages').then(m => ({ default: m.Lotus365BluePage })));
const Lotus365PartnerProgramPage = lazy(() => import('./pages/StrategyResourcePages').then(m => ({ default: m.Lotus365PartnerProgramPage })));
const ComplaintsResolutionPage = lazy(() => import('./pages/StrategyResourcePages').then(m => ({ default: m.ComplaintsResolutionPage })));
const ResponsibleGamblingToolsPage = lazy(() => import('./pages/StrategyResourcePages').then(m => ({ default: m.ResponsibleGamblingToolsPage })));

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

      // ── TIER 8: TOURNAMENTS & CRICKET LEAGUES (10) ─────────────────────────────
      { path: '/wpl-betting', element: <WplBettingPage /> },
      { path: '/psl-betting', element: <PslBettingPage /> },
      { path: '/bbl-betting', element: <BblBettingPage /> },
      { path: '/cpl-betting', element: <CplBettingPage /> },
      { path: '/asia-cup-betting', element: <AsiaCupBettingPage /> },
      { path: '/icc-odi-world-cup', element: <IccOdiWorldCupPage /> },
      { path: '/test-cricket-betting', element: <TestCricketBettingPage /> },
      { path: '/live-cricket-score-odds', element: <LiveCricketScoreOddsPage /> },
      { path: '/cricket-session-betting', element: <CricketSessionBettingPage /> },
      { path: '/cricket-toss-prediction', element: <CricketTossPredictionPage /> },

      // ── TIER 9: EXCHANGE GUIDES & TRADING (8) ─────────────────────────────────
      { path: '/back-and-lay-betting', element: <BackAndLayBettingPage /> },
      { path: '/exchange-commission-rates', element: <ExchangeCommissionRatesPage /> },
      { path: '/betting-exchange-vs-sportsbook', element: <BettingExchangeVsSportsbookPage /> },
      { path: '/bookmaker-market', element: <BookmakerMarketPage /> },
      { path: '/in-play-cashout-guide', element: <InPlayCashoutGuidePage /> },
      { path: '/match-odds-trading', element: <MatchOddsTradingPage /> },
      { path: '/tied-match-rules', element: <TiedMatchRulesPage /> },
      { path: '/bet-slip-guide', element: <BetSlipGuidePage /> },

      // ── TIER 10: ASIAN & LIVE CASINO (10) ──────────────────────────────────────
      { path: '/lucky-7-game', element: <Lucky7GamePage /> },
      { path: '/32-cards-casino', element: <ThirtyTwoCardsCasinoPage /> },
      { path: '/super-over-game', element: <SuperOverGamePage /> },
      { path: '/muflis-teen-patti', element: <MuflisTeenPattiPage /> },
      { path: '/ak47-teen-patti', element: <Ak47TeenPattiPage /> },
      { path: '/joker-teen-patti', element: <JokerTeenPattiPage /> },
      { path: '/roulette-strategies', element: <RouletteStrategiesPage /> },
      { path: '/live-dealer-games', element: <LiveDealerGamesPage /> },
      { path: '/crazy-time', element: <CrazyTimePage /> },
      { path: '/mega-wheel', element: <MegaWheelPage /> },

      // ── TIER 11: WALLET & BANKING (8) ──────────────────────────────────────────
      { path: '/phonepe-deposit', element: <PhonePeDepositPage /> },
      { path: '/google-pay-deposit', element: <GooglePayDepositPage /> },
      { path: '/paytm-deposit', element: <PaytmDepositPage /> },
      { path: '/bank-transfer-neft-rtgs', element: <BankTransferNeftRtgsPage /> },
      { path: '/crypto-deposit-usdt', element: <CryptoDepositUsdtPage /> },
      { path: '/withdrawal-proof-times', element: <WithdrawalProofTimesPage /> },
      { path: '/kyc-verification-guide', element: <KycVerificationGuidePage /> },
      { path: '/account-security-tips', element: <AccountSecurityTipsPage /> },

      // ── TIER 12: REGIONAL INDIAN CRICKET (6) ───────────────────────────────────
      { path: '/cricket-betting-delhi', element: <CricketBettingDelhiPage /> },
      { path: '/cricket-betting-mumbai', element: <CricketBettingMumbaiPage /> },
      { path: '/cricket-betting-punjab', element: <CricketBettingPunjabPage /> },
      { path: '/cricket-betting-bangalore', element: <CricketBettingBangalorePage /> },
      { path: '/cricket-betting-hyderabad', element: <CricketBettingHyderabadPage /> },
      { path: '/cricket-betting-kolkata', element: <CricketBettingKolkataPage /> },

      // ── TIER 13: STRATEGY & CALCULATORS (8) ────────────────────────────────────
      { path: '/betting-odds-calculator', element: <BettingOddsCalculatorPage /> },
      { path: '/dutching-calculator-guide', element: <DutchingCalculatorGuidePage /> },
      { path: '/ipl-teams-betting-odds', element: <IplTeamsBettingOddsPage /> },
      { path: '/cricket-betting-glossary', element: <CricketBettingGlossaryPage /> },
      { path: '/lotus365-blue', element: <Lotus365BluePage /> },
      { path: '/lotus365-partner-program', element: <Lotus365PartnerProgramPage /> },
      { path: '/complaints-resolution', element: <ComplaintsResolutionPage /> },
      { path: '/responsible-gambling-tools', element: <ResponsibleGamblingToolsPage /> },
    ],
  },
];

const router = typeof window !== 'undefined' ? createBrowserRouter(routes) : null;

export const App: React.FC = () => {
  if (!router) return null;
  return <RouterProvider router={router} />;
};

export default App;
