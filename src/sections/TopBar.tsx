"use client";
import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-emerald-900 text-xs py-2 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-emerald-200 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Lotus365 — India's Official Sports & Gaming Hub</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1 text-emerald-300/80">
            <ShieldCheck className="w-3 h-3 text-yellow-400" />
            <span>Verified Platform</span>
          </div>
        </div>

        {/* Mobile center */}
        <div className="sm:hidden text-emerald-200 font-semibold">
          🏏 India's Premier Sports & Gaming Platform
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-emerald-300/60">24/7 Support:</span>
          <a
            href={OFFICIAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-bold text-emerald-300 hover:text-white transition-colors"
            title="WhatsApp Support"
          >
            <MessageCircle className="w-3 h-3 fill-current text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
