"use client";
import React from 'react';
import { MessageCircle, ShieldCheck, Zap, Lock, Sparkles } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#042f24] via-[#064e3b] to-[#042f24] text-white text-[11px] py-1.5 px-4 border-b border-emerald-600/30 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Verified Brand Credentials */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold tracking-wide text-emerald-100">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white font-extrabold">Lotus365</span>
            <span className="text-emerald-300 font-semibold hidden sm:inline">— India&apos;s Premier Sports &amp; Gaming Platform</span>
          </div>

          <div className="hidden lg:flex items-center gap-1 text-[10px] text-emerald-200/80 bg-emerald-800/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
            <ShieldCheck className="w-3 h-3 text-yellow-300" />
            <span>Official Licensed Platform</span>
          </div>

          <div className="hidden xl:flex items-center gap-1 text-[10px] text-emerald-200/80">
            <Lock className="w-2.5 h-2.5 text-emerald-300" />
            <span>256-Bit SSL Encrypted</span>
          </div>
        </div>

        {/* Center: Live Real-Time Platform Stats Ticker (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-[10px] font-semibold text-emerald-100/90">
          <div className="flex items-center gap-1">
            <span className="text-amber-300 font-bold">⚡ Today&apos;s Payouts:</span>
            <span className="font-mono text-white font-bold">₹5.24 Cr+</span>
          </div>
          <span className="text-emerald-500">•</span>
          <div className="flex items-center gap-1">
            <span className="text-emerald-300 font-bold">⏱ Avg Cashout:</span>
            <span className="font-mono text-white font-bold">88 Sec</span>
          </div>
          <span className="text-emerald-500">•</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-300 font-bold">🟢 Live Traders:</span>
            <span className="font-mono text-white font-bold">48,210+</span>
          </div>
        </div>

        {/* Right: WhatsApp Concierge Status */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-emerald-200/80 hidden sm:inline text-[10px]">VIP Concierge:</span>
          <a
            href={OFFICIAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-100 hover:text-white font-bold text-[11px] transition-all border border-[#25D366]/40"
            title="Chat with WhatsApp Concierge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <MessageCircle className="w-3 h-3 fill-current text-[#25D366]" />
            <span className="text-[#25D366] font-extrabold">Online</span>
            <span className="hidden sm:inline text-white/70">(~15s reply)</span>
          </a>
        </div>

      </div>
    </div>
  );
};
