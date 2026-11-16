"use client";
import React from 'react';
import Image from 'next/image';
import { Lock, MessageCircle, Crown, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface FinalCtaProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenAuth }) => {
  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#064e3b] via-[#047857] to-[#065f46] text-white relative overflow-hidden">
      
      {/* Stadium Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-emerald-400/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto p-8 sm:p-14 text-center relative z-10 rounded-3xl bg-white/10 border border-white/25 backdrop-blur-md shadow-2xl overflow-hidden">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-black text-yellow-300 uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>India's Most Trusted Gaming Platform</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Your Next Big Win Awaits on <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400">Lotus365</span>
        </h2>

        {/* Subtitle */}
        <p className="text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Join over 500,000 active players enjoying 0% commission cricket exchange markets, 1000+ live casino tables, and guaranteed 2-minute instant UPI cashouts.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/90 mb-10">
          <span className="flex items-center gap-1.5 font-bold">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span>2-Minute Guaranteed Payouts</span>
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-200" />
            <span>Zero Commission on Cricket Exchange</span>
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5 font-bold">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Min Deposit Just ₹100</span>
          </span>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-8">
          <button
            onClick={handleWhatsApp}
            id="final-cta-whatsapp-btn"
            className="
              emerald-pill-btn !py-4 !px-8 !text-base font-black shadow-xl
              bg-emerald-500 hover:bg-emerald-400 text-white cursor-pointer group
            "
          >
            <MessageCircle className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            <span>Get Official WhatsApp ID</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="
              gold-pill-btn !py-4 !px-8 !text-base font-black shadow-xl cursor-pointer
            "
          >
            <Crown className="w-5 h-5 text-emerald-950" />
            <span>Join VIP Club Today</span>
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-emerald-200/80 max-w-md mx-auto">
          🔒 256-Bit SSL Encrypted • 18+ Only • Play Responsibly • 24/7 Human WhatsApp Concierge
        </p>

      </div>
    </section>
  );
};
