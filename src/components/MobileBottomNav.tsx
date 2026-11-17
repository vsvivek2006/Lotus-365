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
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center py-1 px-3 text-slate-600 hover:text-emerald-700 active:text-emerald-700 transition-colors"
          title="Home"
        >
          <Home className="w-5 h-5 text-slate-700" />
          <span className="text-[11px] font-bold mt-0.5 text-slate-700">Home</span>
        </Link>

        {/* Sports */}
        <Link
          href="/cricket-betting"
          className="flex flex-col items-center justify-center py-1 px-3 text-slate-600 hover:text-emerald-700 active:text-emerald-700 transition-colors relative"
          title="Sports"
        >
          <Trophy className="w-5 h-5 text-slate-700" />
          <span className="text-[11px] font-bold mt-0.5 text-slate-700">Sports</span>
          <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
        </Link>

        {/* Central High-Convert WhatsApp ID Button */}
        <button type="button"
          onClick={handleWhatsApp}
          className="relative -top-4 flex flex-col items-center group cursor-pointer"
          aria-label="Get Instant WhatsApp ID"
        >
          <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 p-0.5 shadow-lg shadow-emerald-600/35 flex items-center justify-center transform active:scale-95 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-emerald-600 flex items-center justify-center border-2 border-white">
              <MessageCircle className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
          <span className="text-[10px] font-black text-emerald-800 tracking-tight mt-0.5 uppercase">
            Get ID
          </span>
        </button>

        {/* Casino */}
        <Link
          href="/live-casino"
          className="flex flex-col items-center justify-center py-1 px-3 text-slate-600 hover:text-emerald-700 active:text-emerald-700 transition-colors"
          title="Casino"
        >
          <Dices className="w-5 h-5 text-slate-700" />
          <span className="text-[11px] font-bold mt-0.5 text-slate-700">Casino</span>
        </Link>

        {/* VIP */}
        <Link
          href="/vip-club"
          className="flex flex-col items-center justify-center py-1 px-3 text-slate-600 hover:text-yellow-600 active:text-yellow-600 transition-colors"
          title="VIP Club"
        >
          <Crown className="w-5 h-5 text-amber-500" />
          <span className="text-[11px] font-bold mt-0.5 text-amber-600">VIP</span>
        </Link>
      </div>
    </nav>
  );
};
