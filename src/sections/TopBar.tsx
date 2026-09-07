import React, { useState, useEffect } from 'react';
import { MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

export const TopBar: React.FC = () => {
  const [jackpot, setJackpot] = useState(48291450);

  // Subtle live counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.floor(Math.random() * 45) + 12);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <div className="bg-[#0B3A2C] border-b border-white/15 text-xs py-1.5 px-4 overflow-hidden relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Security & Live Status */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Lotus365 Live Gateway</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
            <span>Verified 256-Bit SSL</span>
          </div>
        </div>

        {/* Center: Live Rolling Jackpot Pool */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold font-bold text-[11px]">
            <Zap className="w-3 h-3 fill-current animate-bounce" />
            <span>MEGA CASHOUT POOL:</span>
          </div>
          <span className="font-mono font-extrabold text-white text-xs sm:text-sm tracking-wider">
            {formatCurrency(jackpot)}
          </span>
        </div>

        {/* Right: Instant WhatsApp Access */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <span className="text-slate-400">24/7 Official Desk:</span>
          <a
            href={OFFICIAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-brand-emerald hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp Online</span>
          </a>
        </div>
      </div>
    </div>
  );
};
