import React from 'react';
import { Outlet } from 'react-router-dom';
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

// Tier 8 — Tournament & Leagues (10)
import {
  WplBettingPage,
  PslBettingPage,
  BblBettingPage,
  CplBettingPage,
  AsiaCupBettingPage,
  IccOdiWorldCupPage,
  TestCricketBettingPage,
  LiveCricketScoreOddsPage,
  CricketSessionBettingPage,
  CricketTossPredictionPage,
} from './pages/TournamentSportPages';

// Tier 9 — Exchange Guides & Trading (8)
import {
  BackAndLayBettingPage,
  ExchangeCommissionRatesPage,
  BettingExchangeVsSportsbookPage,
  BookmakerMarketPage,
  InPlayCashoutGuidePage,
  MatchOddsTradingPage,
  TiedMatchRulesPage,
  BetSlipGuidePage,
} from './pages/ExchangeGuidePages';

// Tier 10 — Asian & Live Casino (10)
import {
  Lucky7GamePage,
  ThirtyTwoCardsCasinoPage,
  SuperOverGamePage,
  MuflisTeenPattiPage,
  Ak47TeenPattiPage,
  JokerTeenPattiPage,
  RouletteStrategiesPage,
  LiveDealerGamesPage,
  CrazyTimePage,
  MegaWheelPage,
} from './pages/AsianCasinoPages';

// Tier 11 — Wallet & Banking (8)
import {
  PhonePeDepositPage,
  GooglePayDepositPage,
  PaytmDepositPage,
  BankTransferNeftRtgsPage,
  CryptoDepositUsdtPage,
  WithdrawalProofTimesPage,
  KycVerificationGuidePage,
  AccountSecurityTipsPage,
} from './pages/WalletBankingPages';

// Tier 12 — Regional Indian Cricket (6)
import {
  CricketBettingDelhiPage,
  CricketBettingMumbaiPage,
  CricketBettingPunjabPage,
  CricketBettingBangalorePage,
  CricketBettingHyderabadPage,
  CricketBettingKolkataPage,
} from './pages/RegionalPages';

// Tier 13 — Strategy & Calculators (8)
import {
  BettingOddsCalculatorPage,
  DutchingCalculatorGuidePage,
  IplTeamsBettingOddsPage,
  CricketBettingGlossaryPage,
  Lotus365BluePage,
  Lotus365PartnerProgramPage,
  ComplaintsResolutionPage,
  ResponsibleGamblingToolsPage,
} from './pages/StrategyResourcePages';

const RootLayout: React.FC = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

export const staticRoutes = [
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
