import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="flex items-center gap-3 mb-3 group">
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
            <h4 className="text-sm font-bold text-[#F0C419] pb-2 border-b-2 border-white/20 mb-4">
              Cricket &amp; Sports
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/cricket-betting" className="hover:text-[#F0C419] transition-colors">&rsaquo; Live Cricket Betting</Link></li>
              <li><Link to="/cricket-exchange" className="hover:text-[#F0C419] transition-colors">&rsaquo; Cricket Betting Exchange</Link></li>
              <li><Link to="/ipl-betting" className="hover:text-[#F0C419] transition-colors">&rsaquo; IPL 2026 Betting Markets</Link></li>
              <li><Link to="/t20-world-cup-betting" className="hover:text-[#F0C419] transition-colors">&rsaquo; T20 World Cup Odds</Link></li>
              <li><Link to="/football-betting" className="hover:text-[#F0C419] transition-colors">&rsaquo; Football Match Betting</Link></li>
              <li><Link to="/tennis-betting" className="hover:text-[#F0C419] transition-colors">&rsaquo; Live Tennis Odds</Link></li>
              <li><Link to="/kabaddi-betting" className="hover:text-[#F0C419] transition-colors">&rsaquo; Pro Kabaddi Betting</Link></li>
              <li><Link to="/horse-racing-betting" className="hover:text-[#F0C419] transition-colors">&rsaquo; Horse Racing Betting</Link></li>
              <li><Link to="/basketball-betting" className="hover:text-[#F0C419] transition-colors">&rsaquo; NBA &amp; Basketball Betting</Link></li>
              <li><Link to="/sportsbook" className="hover:text-[#F0C419] transition-colors">&rsaquo; Complete Sportsbook</Link></li>
            </ul>
          </div>

          {/* Col 3: Live Casino & Crash Games */}
          <div>
            <h4 className="text-sm font-bold text-[#F0C419] pb-2 border-b-2 border-white/20 mb-4">
              Casino &amp; Crash Games
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/live-casino" className="hover:text-[#F0C419] transition-colors">&rsaquo; Live Casino Lobby</Link></li>
              <li><Link to="/teen-patti" className="hover:text-[#F0C419] transition-colors">&rsaquo; Live Teen Patti Cash</Link></li>
              <li><Link to="/andar-bahar" className="hover:text-[#F0C419] transition-colors">&rsaquo; Live Andar Bahar</Link></li>
              <li><Link to="/roulette" className="hover:text-[#F0C419] transition-colors">&rsaquo; European &amp; French Roulette</Link></li>
              <li><Link to="/lightning-roulette" className="hover:text-[#F0C419] transition-colors">&rsaquo; Lightning Roulette 500x</Link></li>
              <li><Link to="/blackjack" className="hover:text-[#F0C419] transition-colors">&rsaquo; Live Blackjack Tables</Link></li>
              <li><Link to="/baccarat" className="hover:text-[#F0C419] transition-colors">&rsaquo; Live Baccarat &amp; Speed Tables</Link></li>
              <li><Link to="/dragon-tiger" className="hover:text-[#F0C419] transition-colors">&rsaquo; Dragon Tiger Live</Link></li>
              <li><Link to="/aviator-game" className="hover:text-[#F0C419] transition-colors">&rsaquo; Aviator Crash Game (98.5% RTP)</Link></li>
              <li><Link to="/casino-slots" className="hover:text-[#F0C419] transition-colors">&rsaquo; Real Money Casino Slots</Link></li>
              <li><Link to="/color-prediction" className="hover:text-[#F0C419] transition-colors">&rsaquo; Color Prediction Games</Link></li>
            </ul>
          </div>

          {/* Col 4: Account, Banking & VIP */}
          <div>
            <h4 className="text-sm font-bold text-[#F0C419] pb-2 border-b-2 border-white/20 mb-4">
              Account &amp; Rewards
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/register" className="hover:text-[#F0C419] transition-colors">&rsaquo; Register WhatsApp ID</Link></li>
              <li><Link to="/login" className="hover:text-[#F0C419] transition-colors">&rsaquo; Lotus365 Member Login</Link></li>
              <li><Link to="/how-to-deposit" className="hover:text-[#F0C419] transition-colors">&rsaquo; How to Deposit via UPI</Link></li>
              <li><Link to="/how-to-withdraw" className="hover:text-[#F0C419] transition-colors">&rsaquo; How to Withdraw Funds</Link></li>
              <li><Link to="/2-minute-cashout" className="hover:text-[#F0C419] transition-colors">&rsaquo; 2-Minute Instant Cashout</Link></li>
              <li><Link to="/payment-methods" className="hover:text-[#F0C419] transition-colors">&rsaquo; Payment Methods Overview</Link></li>
              <li><Link to="/welcome-bonus" className="hover:text-[#F0C419] transition-colors">&rsaquo; New Member Welcome Bonus</Link></li>
              <li><Link to="/cashback-offers" className="hover:text-[#F0C419] transition-colors">&rsaquo; Weekly Cashback Program</Link></li>
              <li><Link to="/referral-bonus" className="hover:text-[#F0C419] transition-colors">&rsaquo; Refer &amp; Earn Rewards</Link></li>
              <li><Link to="/vip-club" className="hover:text-[#F0C419] transition-colors">&rsaquo; Lotus365 VIP Club</Link></li>
              <li><Link to="/vip-black-card" className="hover:text-[#F0C419] transition-colors">&rsaquo; VIP Black Card Program</Link></li>
            </ul>
          </div>
        </div>

        {/* SEO Guides & Learning Directory */}
        <div className="border-t border-white/15 pt-8 pb-8">
          <h4 className="text-xs font-bold text-[#F0C419] uppercase tracking-wider mb-4">
            Guides, Strategy &amp; Platform Information
          </h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/75">
            <Link to="/lotus365-review" className="hover:text-[#F0C419] transition-colors">Lotus365 Review 2026</Link>
            <Link to="/lotus365-vs-competitors" className="hover:text-[#F0C419] transition-colors">Lotus365 vs Competitors</Link>
            <Link to="/betting-tips" className="hover:text-[#F0C419] transition-colors">Cricket Betting Tips</Link>
            <Link to="/ipl-predictions" className="hover:text-[#F0C419] transition-colors">IPL 2026 Predictions</Link>
            <Link to="/online-casino-guide" className="hover:text-[#F0C419] transition-colors">Online Casino Guide India</Link>
            <Link to="/safe-betting-guide" className="hover:text-[#F0C419] transition-colors">Safe Betting Strategy</Link>
            <Link to="/mobile-web-app-guide" className="hover:text-[#F0C419] transition-colors">Mobile Gaming Guide</Link>
            <Link to="/how-it-works" className="hover:text-[#F0C419] transition-colors">How It Works</Link>
            <Link to="/faq" className="hover:text-[#F0C419] transition-colors">Lotus365 FAQ</Link>
            <Link to="/about" className="hover:text-[#F0C419] transition-colors">About Lotus365</Link>
            <Link to="/contact" className="hover:text-[#F0C419] transition-colors">24/7 WhatsApp Support</Link>
            <Link to="/responsible-gaming" className="hover:text-[#F0C419] transition-colors">Responsible Gaming Policy</Link>
            <Link to="/terms" className="hover:text-[#F0C419] transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="hover:text-[#F0C419] transition-colors">Privacy Policy</Link>
            <Link to="/sitemap" className="hover:text-[#F0C419] transition-colors">HTML Sitemap</Link>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/75">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">Lotus365 Official</strong> (lotus365officialid.com). All Rights Reserved. 18+ Only.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/responsible-gaming" className="hover:text-[#F0C419] transition-colors">Responsible Gaming</Link>
            <Link to="/privacy-policy" className="hover:text-[#F0C419] transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-[#F0C419] transition-colors">Terms</Link>
            <Link to="/sitemap" className="hover:text-[#F0C419] transition-colors">Sitemap</Link>
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
