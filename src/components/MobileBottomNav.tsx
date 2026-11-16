"use client";

import Link from 'next/link';
import React from 'react';
import { Home, Trophy, Dices, MessageCircle, Crown } from 'lucide-react';
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
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#022319]/98 backdrop-blur-xl border-t border-emerald-500/25 px-2 pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.85)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center py-1 px-3 text-white/70 active:text-emerald-400 hover:text-emerald-400 transition-colors"
          title="Home"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Home</span>
        </Link>

        {/* Sports */}
        <Link
          href="/cricket-betting"
          className="flex flex-col items-center justify-center py-1 px-3 text-white/70 active:text-emerald-400 hover:text-emerald-400 transition-colors relative"
          title="Sports"
        >
          <Trophy className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Sports</span>
          <span className="absolute top-1 right-2.5 w-2 h-2 bg-red-500 rounded-full animate-ping" />
        </Link>

        {/* Central High-Convert WhatsApp ID Button (Matching Mockup) */}
        <button
          onClick={handleWhatsApp}
          className="relative -top-3.5 flex flex-col items-center group cursor-pointer"
          aria-label="Get Instant WhatsApp ID"
        >
          <div className="w-14 h-14 rounded-full bg-emerald-500 p-0.5 shadow-xl flex items-center justify-center transform active:scale-95 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#022319] flex items-center justify-center border border-emerald-400/50">
              <MessageCircle className="w-6 h-6 text-emerald-400 fill-emerald-400/25 animate-pulse" />
            </div>
          </div>
          <span className="text-[10px] font-black text-emerald-300 tracking-tight mt-0.5">
            GET ID
          </span>
        </button>

        {/* Casino */}
        <Link
          href="/live-casino"
          className="flex flex-col items-center justify-center py-1 px-2 text-white/70 hover:text-emerald-400 transition-colors"
          title="Casino"
        >
          <Dices className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Casino</span>
        </Link>

        {/* VIP */}
        <Link
          href="/vip-club"
          className="flex flex-col items-center justify-center py-1 px-2 text-white/70 hover:text-[#F0C419] transition-colors"
          title="VIP Club"
        >
          <Crown className="w-5 h-5 text-[#F0C419]" />
          <span className="text-[10px] font-bold mt-0.5 text-[#F0C419]">VIP</span>
        </Link>
      </div>
    </nav>
  );
};
