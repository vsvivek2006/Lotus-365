"use client";
import Link from 'next/link';
import React from 'react';

import { ShieldCheck, Lock, CheckCircle, ArrowUp, MessageCircle } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface FooterProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuth }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-[#0E4737] border-t border-white/15 text-white/90 pt-14 pb-24 md:pb-12 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 border-b border-white/15 mb-10">
          <div className="p-4 rounded-xl bg-black/20 border border-white/15 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F0C419]/20 border border-[#F0C419]/40 flex items-center justify-center text-[#F0C419] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-xs sm:text-sm">256-Bit SSL Encrypted</div>
              <div className="text-[11px] text-white/70">Bank-grade data security</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/20 border border-white/15 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-xs sm:text-sm">Instant UPI &amp; IMPS</div>
              <div className="text-[11px] text-white/70">Sub-2-minute cashouts</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/20 border border-white/15 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300 shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-xs sm:text-sm">100% Licensed &amp; Safe</div>
              <div className="text-[11px] text-white/70">Verified official platform</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/20 border border-white/15 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0">
              <span className="font-extrabold text-xs">18+</span>
            </div>
            <div>
              <div className="font-bold text-white text-xs sm:text-sm">Responsible Gaming</div>
              <div className="text-[11px] text-white/70">Strict age policy enforced</div>
            </div>
          </div>
        </div>

        {/* 4-Column Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Official Badges */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#14614C] p-1 border border-[#F0C419]/40 flex items-center justify-center shadow-lg">
                <span className="text-xl">🪷</span>
              </div>
              <span className="font-extrabold text-2xl tracking-wider text-white">
                LOTUS<span className="text-[#F0C419]">365</span>
              </span>
            </Link>
            <p className="text-xs text-white/80 leading-relaxed mb-4">
              Lotus365 is India's premier sports betting exchange and live casino destination. Built for speed, complete transparency, and peer-to-peer cricket exchange liquidity with guaranteed 2-minute cashouts.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/15 text-white">24/7 Support</span>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/15 text-white">Instant UPI</span>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/15 text-white">0% Commission</span>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-400/20 text-[#F0C419] border border-[#F0C419]/40">18+ Only</span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleWhatsApp}
                className="px-3.5 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold flex items-center gap-1.5 shadow hover:opacity-90 transition-opacity cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </button>
              <a
                href={OFFICIAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-white/15 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                24/7 WhatsApp Desk
              </a>
            </div>
          </div>

          {/* Col 2: Cricket & Sports Exchange */}
          <div>
            <h3 className="text-sm font-bold text-[#F0C419] pb-2 border-b-2 border-white/20 mb-4">
              Cricket &amp; Sports
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/cricket-betting" className="hover:text-[#F0C419] transition-colors" title="Live Cricket Betting">&rsaquo; Live Cricket Betting</Link></li>
              <li><Link href="/cricket-exchange" className="hover:text-[#F0C419] transition-colors" title="Cricket Betting Exchange">&rsaquo; Cricket Betting Exchange</Link></li>
              <li><Link href="/ipl-betting" className="hover:text-[#F0C419] transition-colors" title="IPL 2026 Betting Markets">&rsaquo; IPL 2026 Betting Markets</Link></li>
              <li><Link href="/t20-world-cup-betting" className="hover:text-[#F0C419] transition-colors" title="T20 World Cup Odds">&rsaquo; T20 World Cup Odds</Link></li>
              <li><Link href="/football-betting" className="hover:text-[#F0C419] transition-colors" title="Football Match Betting">&rsaquo; Football Match Betting</Link></li>
              <li><Link href="/tennis-betting" className="hover:text-[#F0C419] transition-colors" title="Live Tennis Odds">&rsaquo; Live Tennis Odds</Link></li>
              <li><Link href="/kabaddi-betting" className="hover:text-[#F0C419] transition-colors" title="Pro Kabaddi Betting">&rsaquo; Pro Kabaddi Betting</Link></li>
              <li><Link href="/horse-racing-betting" className="hover:text-[#F0C419] transition-colors" title="Horse Racing Betting">&rsaquo; Horse Racing Betting</Link></li>
              <li><Link href="/basketball-betting" className="hover:text-[#F0C419] transition-colors" title="NBA & Basketball Betting">&rsaquo; NBA &amp; Basketball Betting</Link></li>
              <li><Link href="/sportsbook" className="hover:text-[#F0C419] transition-colors" title="Complete Sportsbook">&rsaquo; Complete Sportsbook</Link></li>
            </ul>
          </div>

          {/* Col 3: Live Casino & Crash Games */}
          <div>
            <h3 className="text-sm font-bold text-[#F0C419] pb-2 border-b-2 border-white/20 mb-4">
              Casino &amp; Crash Games
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/live-casino" className="hover:text-[#F0C419] transition-colors" title="Live Casino Lobby">&rsaquo; Live Casino Lobby</Link></li>
              <li><Link href="/teen-patti" className="hover:text-[#F0C419] transition-colors" title="Live Teen Patti Cash">&rsaquo; Live Teen Patti Cash</Link></li>
              <li><Link href="/andar-bahar" className="hover:text-[#F0C419] transition-colors" title="Live Andar Bahar">&rsaquo; Live Andar Bahar</Link></li>
              <li><Link href="/roulette" className="hover:text-[#F0C419] transition-colors" title="European & French Roulette">&rsaquo; European &amp; French Roulette</Link></li>
              <li><Link href="/lightning-roulette" className="hover:text-[#F0C419] transition-colors" title="Lightning Roulette 500x">&rsaquo; Lightning Roulette 500x</Link></li>
              <li><Link href="/blackjack" className="hover:text-[#F0C419] transition-colors" title="Live Blackjack Tables">&rsaquo; Live Blackjack Tables</Link></li>
              <li><Link href="/baccarat" className="hover:text-[#F0C419] transition-colors" title="Live Baccarat & Speed Tables">&rsaquo; Live Baccarat &amp; Speed Tables</Link></li>
              <li><Link href="/dragon-tiger" className="hover:text-[#F0C419] transition-colors" title="Dragon Tiger Live">&rsaquo; Dragon Tiger Live</Link></li>
              <li><Link href="/aviator-game" className="hover:text-[#F0C419] transition-colors" title="Aviator Crash Game (98.5% RTP)">&rsaquo; Aviator Crash Game (98.5% RTP)</Link></li>
              <li><Link href="/casino-slots" className="hover:text-[#F0C419] transition-colors" title="Real Money Casino Slots">&rsaquo; Real Money Casino Slots</Link></li>
              <li><Link href="/color-prediction" className="hover:text-[#F0C419] transition-colors" title="Color Prediction Games">&rsaquo; Color Prediction Games</Link></li>
            </ul>
          </div>

          {/* Col 4: Account, Banking & VIP */}
          <div>
            <h3 className="text-sm font-bold text-[#F0C419] pb-2 border-b-2 border-white/20 mb-4">
              Account &amp; Rewards
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/register" className="hover:text-[#F0C419] transition-colors" title="Register WhatsApp ID">&rsaquo; Register WhatsApp ID</Link></li>
              <li><Link href="/login" className="hover:text-[#F0C419] transition-colors" title="Lotus365 Member Login">&rsaquo; Lotus365 Member Login</Link></li>
              <li><Link href="/how-to-deposit" className="hover:text-[#F0C419] transition-colors" title="How to Deposit via UPI">&rsaquo; How to Deposit via UPI</Link></li>
              <li><Link href="/how-to-withdraw" className="hover:text-[#F0C419] transition-colors" title="How to Withdraw Funds">&rsaquo; How to Withdraw Funds</Link></li>
              <li><Link href="/2-minute-cashout" className="hover:text-[#F0C419] transition-colors" title="2-Minute Instant Cashout">&rsaquo; 2-Minute Instant Cashout</Link></li>
              <li><Link href="/payment-methods" className="hover:text-[#F0C419] transition-colors" title="Payment Methods Overview">&rsaquo; Payment Methods Overview</Link></li>
              <li><Link href="/welcome-bonus" className="hover:text-[#F0C419] transition-colors" title="New Member Welcome Bonus">&rsaquo; New Member Welcome Bonus</Link></li>
              <li><Link href="/cashback-offers" className="hover:text-[#F0C419] transition-colors" title="Weekly Cashback Program">&rsaquo; Weekly Cashback Program</Link></li>
              <li><Link href="/referral-bonus" className="hover:text-[#F0C419] transition-colors" title="Refer & Earn Rewards">&rsaquo; Refer &amp; Earn Rewards</Link></li>
              <li><Link href="/vip-club" className="hover:text-[#F0C419] transition-colors" title="Lotus365 VIP Club">&rsaquo; Lotus365 VIP Club</Link></li>
              <li><Link href="/vip-black-card" className="hover:text-[#F0C419] transition-colors" title="VIP Black Card Program">&rsaquo; VIP Black Card Program</Link></li>
            </ul>
          </div>
        </div>

        {/* SEO Guides & Learning Directory */}
        <div className="border-t border-white/15 pt-8 pb-8">
          <h3 className="text-xs font-bold text-[#F0C419] uppercase tracking-wider mb-4">
            Guides, Strategy &amp; Platform Information
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/75">
            <Link href="/lotus365-review" className="hover:text-[#F0C419] transition-colors" title="Lotus365 Review 2026">Lotus365 Review 2026</Link>
            <Link href="/lotus365-vs-competitors" className="hover:text-[#F0C419] transition-colors" title="Lotus365 vs Competitors">Lotus365 vs Competitors</Link>
            <Link href="/betting-tips" className="hover:text-[#F0C419] transition-colors" title="Cricket Betting Tips">Cricket Betting Tips</Link>
            <Link href="/ipl-predictions" className="hover:text-[#F0C419] transition-colors" title="IPL 2026 Predictions">IPL 2026 Predictions</Link>
            <Link href="/online-casino-guide" className="hover:text-[#F0C419] transition-colors" title="Online Casino Guide India">Online Casino Guide India</Link>
            <Link href="/safe-betting-guide" className="hover:text-[#F0C419] transition-colors" title="Safe Betting Strategy">Safe Betting Strategy</Link>
            <Link href="/mobile-web-app-guide" className="hover:text-[#F0C419] transition-colors" title="Mobile Gaming Guide">Mobile Gaming Guide</Link>
            <Link href="/how-it-works" className="hover:text-[#F0C419] transition-colors" title="How It Works">How It Works</Link>
            <Link href="/faq" className="hover:text-[#F0C419] transition-colors" title="Lotus365 FAQ">Lotus365 FAQ</Link>
            <Link href="/about" className="hover:text-[#F0C419] transition-colors" title="About Lotus365">About Lotus365</Link>
            <Link href="/contact" className="hover:text-[#F0C419] transition-colors" title="24/7 WhatsApp Support">24/7 WhatsApp Support</Link>
            <Link href="/responsible-gaming" className="hover:text-[#F0C419] transition-colors" title="Responsible Gaming Policy">Responsible Gaming Policy</Link>
            <Link href="/terms" className="hover:text-[#F0C419] transition-colors" title="Terms of Service">Terms of Service</Link>
            <Link href="/privacy-policy" className="hover:text-[#F0C419] transition-colors" title="Privacy Policy">Privacy Policy</Link>
            <Link href="/sitemap" className="hover:text-[#F0C419] transition-colors" title="HTML Sitemap">HTML Sitemap</Link>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/75">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">Lotus365 Official</strong> (lotus365officialid.com). All Rights Reserved. 18+ Only.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/responsible-gaming" className="hover:text-[#F0C419] transition-colors" title="Responsible Gaming">Responsible Gaming</Link>
            <Link href="/privacy-policy" className="hover:text-[#F0C419] transition-colors" title="Privacy">Privacy</Link>
            <Link href="/terms" className="hover:text-[#F0C419] transition-colors" title="Terms">Terms</Link>
            <Link href="/sitemap" className="hover:text-[#F0C419] transition-colors" title="Sitemap">Sitemap</Link>
            <button onClick={scrollToTop} className="hover:text-[#F0C419] flex items-center gap-1 font-semibold ml-2 cursor-pointer">
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
