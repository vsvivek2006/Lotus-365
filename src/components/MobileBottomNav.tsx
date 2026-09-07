import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Trophy, Dices, MessageCircle, PhoneCall } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface MobileBottomNavProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenAuth }) => {
  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0E4737]/98 backdrop-blur-xl border-t border-white/20 px-2 pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.85)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <Link
          to="/"
          className="flex flex-col items-center justify-center py-1 px-3 text-white/70 active:text-[#F0C419] hover:text-[#F0C419] transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Home</span>
        </Link>

        {/* Sports */}
        <Link
          to="/cricket-betting"
          className="flex flex-col items-center justify-center py-1 px-3 text-white/70 active:text-[#F0C419] hover:text-[#F0C419] transition-colors relative"
        >
          <Trophy className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Sports</span>
          <span className="absolute top-1 right-2.5 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
        </Link>

        {/* Central High-Convert WhatsApp ID Button */}
        <button
          onClick={handleWhatsApp}
          className="relative -top-3.5 flex flex-col items-center group cursor-pointer"
          aria-label="Get Instant WhatsApp ID"
        >
          <div className="w-14 h-14 rounded-full bg-[#F0C419] p-0.5 shadow-lg flex items-center justify-center transform active:scale-95 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#14614C] flex items-center justify-center border border-[#F0C419]/40">
              <MessageCircle className="w-6 h-6 text-[#F0C419] fill-[#F0C419]/25 animate-pulse" />
            </div>
          </div>
          <span className="text-[10px] font-black text-[#F0C419] tracking-tight mt-0.5">
            GET ID
          </span>
        </button>

        {/* Casino */}
        <Link
          to="/live-casino"
          className="flex flex-col items-center justify-center py-1 px-2 text-white/70 hover:text-[#F0C419] transition-colors"
        >
          <Dices className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Casino</span>
        </Link>

        {/* Support (WhatsApp) — replaced Login since we have no backend */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-1 px-2 text-white/70 hover:text-[#F0C419] transition-colors cursor-pointer"
          aria-label="WhatsApp Support"
        >
          <PhoneCall className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Support</span>
        </button>
      </div>
    </nav>
  );
};
