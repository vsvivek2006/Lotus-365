"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Lock, CheckCircle, ArrowUp, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
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

  const paymentBadges = [
    { name: 'UPI', src: '/images/payments/upi.svg' },
    { name: 'PhonePe', src: '/images/payments/phonepe.svg' },
    { name: 'Google Pay', src: '/images/payments/gpay.svg' },
    { name: 'Paytm', src: '/images/payments/paytm.svg' },
    { name: 'IMPS Bank', src: '/images/payments/imps.svg' },
    { name: 'USDT Crypto', src: '/images/payments/usdt-crypto.svg' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#022319] to-[#01140e] border-t border-emerald-500/25 text-white/90 pt-14 pb-24 md:pb-12 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Strip (Directly matching emerald theme) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 border-b border-emerald-500/20 mb-10">
          <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-white text-xs sm:text-sm">256-Bit SSL Encrypted</div>
              <div className="text-[11px] text-emerald-200/70">Bank-grade data security</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-white text-xs sm:text-sm">Instant UPI &amp; IMPS</div>
              <div className="text-[11px] text-emerald-200/70">Guaranteed 2-minute cashouts</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[#F0C419] shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-white text-xs sm:text-sm">100% Certified Odds</div>
              <div className="text-[11px] text-emerald-200/70">Peer-to-peer cricket exchange</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300 shrink-0">
              <span className="font-black text-xs">18+</span>
            </div>
            <div>
              <div className="font-extrabold text-white text-xs sm:text-sm">Responsible Gaming</div>
              <div className="text-[11px] text-emerald-200/70">Strict age policy enforced</div>
            </div>
          </div>
        </div>

        {/* Payment Methods Graphic Showcase */}
        <div className="pb-10 border-b border-emerald-500/20 mb-10">
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span>Guaranteed Instant Banking &amp; Payment Partners</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {paymentBadges.map((badge) => (
              <div
                key={badge.name}
                className="h-14 rounded-2xl bg-[#03241b] border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex items-center justify-center p-2 group shadow-inner"
              >
                <div className="relative w-full h-full max-h-10">
                  <Image
                    src={badge.src}
                    alt={`${badge.name} payment method`}
                    fill
                    className="object-contain filter brightness-95 group-hover:brightness-110 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Column Main Footer (Covering the 25 Flagship Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Official Verification */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-3 group" title="Lotus365 Official">
              <div className="w-10 h-10 rounded-2xl bg-[#032e22] p-1 border border-emerald-500/40 flex items-center justify-center shadow-lg">
                <span className="text-xl">🪷</span>
              </div>
              <span className="font-extrabold text-2xl tracking-wider text-white">
                LOTUS<span className="text-emerald-400">365</span>
              </span>
            </Link>
            <p className="text-xs text-emerald-100/80 leading-relaxed mb-4">
              Lotus365 is India's ultimate sports betting exchange and live casino destination. Engineered for ultra-low latency trading, verified liquidity, and guaranteed 2-minute cashouts.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">24/7 Desk</span>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">Instant UPI</span>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">0% Commission</span>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-400/20 text-[#F0C419] border border-amber-400/40">18+ Only</span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleWhatsApp}
                className="whatsapp-pill-btn !py-2 !px-4 text-xs font-bold cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Desk</span>
              </button>
            </div>
          </div>

          {/* Col 2: Cricket & Sports Exchange (Flagship Routes) */}
          <div>
            <h3 className="text-sm font-bold text-emerald-300 pb-2 border-b-2 border-emerald-500/30 mb-4 uppercase tracking-wider">
              Sports &amp; Exchange
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li><Link href="/cricket-betting" className="hover:text-emerald-300 transition-colors" title="Live Cricket Betting">&rsaquo; Live Cricket Match Odds</Link></li>
              <li><Link href="/cricket-exchange" className="hover:text-emerald-300 transition-colors" title="Cricket Betting Exchange">&rsaquo; Cricket Betting Exchange (Back &amp; Lay)</Link></li>
              <li><Link href="/ipl-betting" className="hover:text-emerald-300 transition-colors" title="IPL 2026 Betting">&rsaquo; TATA IPL 2026 Tournament Hub</Link></li>
              <li><Link href="/football-betting" className="hover:text-emerald-300 transition-colors" title="Football Betting">&rsaquo; Football Betting &amp; EPL Markets</Link></li>
              <li><Link href="/tennis-betting" className="hover:text-emerald-300 transition-colors" title="Tennis Betting">&rsaquo; Live Tennis &amp; Grand Slams</Link></li>
              <li><Link href="/sportsbook" className="hover:text-emerald-300 transition-colors" title="Complete Sportsbook">&rsaquo; Complete Sportsbook Directory</Link></li>
            </ul>
          </div>

          {/* Col 3: Live Casino & Instant Games */}
          <div>
            <h3 className="text-sm font-bold text-emerald-300 pb-2 border-b-2 border-emerald-500/30 mb-4 uppercase tracking-wider">
              Casino &amp; Instant Games
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li><Link href="/live-casino" className="hover:text-emerald-300 transition-colors" title="Live Casino Lobby">&rsaquo; Live Casino Lobby (1000+ Tables)</Link></li>
              <li><Link href="/teen-patti" className="hover:text-emerald-300 transition-colors" title="Live Teen Patti Cash">&rsaquo; Real Cash Teen Patti (3 Patti)</Link></li>
              <li><Link href="/andar-bahar" className="hover:text-emerald-300 transition-colors" title="Live Andar Bahar">&rsaquo; Live Andar Bahar Real Money</Link></li>
              <li><Link href="/roulette" className="hover:text-emerald-300 transition-colors" title="European Roulette">&rsaquo; European &amp; Lightning Roulette</Link></li>
              <li><Link href="/blackjack" className="hover:text-emerald-300 transition-colors" title="Live Blackjack Tables">&rsaquo; Live Blackjack (99.5% RTP)</Link></li>
              <li><Link href="/baccarat" className="hover:text-emerald-300 transition-colors" title="Live Baccarat">&rsaquo; Live Baccarat &amp; Dragon Tiger</Link></li>
              <li><Link href="/casino-slots" className="hover:text-emerald-300 transition-colors" title="Real Money Casino Slots">&rsaquo; Video Slots &amp; Megaways</Link></li>
              <li><Link href="/aviator-game" className="hover:text-emerald-300 transition-colors" title="Aviator Crash Game">&rsaquo; Spribe Aviator Crash Pro</Link></li>
              <li><Link href="/color-prediction" className="hover:text-emerald-300 transition-colors" title="Color Prediction Game">&rsaquo; Fast Parity Color Prediction</Link></li>
            </ul>
          </div>

          {/* Col 4: Banking, Guides & VIP */}
          <div>
            <h3 className="text-sm font-bold text-emerald-300 pb-2 border-b-2 border-emerald-500/30 mb-4 uppercase tracking-wider">
              Banking, VIP &amp; Info
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li><Link href="/how-to-deposit" className="hover:text-emerald-300 transition-colors" title="How to Deposit via UPI">&rsaquo; Instant UPI &amp; Crypto Deposit Guide</Link></li>
              <li><Link href="/how-to-withdraw" className="hover:text-emerald-300 transition-colors" title="How to Withdraw Funds">&rsaquo; Guaranteed 2-Minute Cashout Guide</Link></li>
              <li><Link href="/vip-club" className="hover:text-emerald-300 transition-colors" title="Lotus365 VIP Club">&rsaquo; VIP Black Card &amp; 10% Cashback</Link></li>
              <li><Link href="/how-it-works" className="hover:text-emerald-300 transition-colors" title="How It Works">&rsaquo; How It Works &amp; Registration Guide</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-300 transition-colors" title="News & Guides">&rsaquo; News, Expert Insights &amp; Strategies</Link></li>
              <li><Link href="/about" className="hover:text-emerald-300 transition-colors" title="About Lotus365">&rsaquo; About Lotus365 Official</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-300 transition-colors" title="24/7 WhatsApp Support">&rsaquo; 24/7 WhatsApp Customer Desk</Link></li>
            </ul>
          </div>
        </div>

        {/* Responsible Gaming Notice Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-amber-500/30 text-xs text-white/70 space-y-2 mb-8">
          <div className="flex items-center gap-2 font-bold text-amber-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Strict 18+ Responsible Gaming Notice</span>
          </div>
          <p className="leading-relaxed">
            Real-money sports betting and gaming involve financial risk and may be habit-forming. Please play responsibly and within your means. Lotus365 enforces a strict 18+ age verification policy. Deposit limits, cooldown periods, and self-exclusion tools are available upon request through our 24/7 support desk.
          </p>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">Lotus365 Official</strong> (lotus365officialid.com). All Rights Reserved. 18+ Only.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/responsible-gaming" className="hover:text-white transition-colors" title="Responsible Gaming">Responsible Gaming</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors" title="Privacy Policy">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors" title="Terms & Conditions">Terms &amp; Conditions</Link>
            <button onClick={scrollToTop} className="hover:text-[#F0C419] flex items-center gap-1 font-semibold ml-2 cursor-pointer text-emerald-300">
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
