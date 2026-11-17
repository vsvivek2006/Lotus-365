"use client";
import React from 'react';
import { MessageCircle, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../../data/landingData';

interface PageCTAProps {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
}

export const PageCTA: React.FC<PageCTAProps> = ({
  headline = 'Ready to Play on Lotus365?',
  subtext = 'Get your instant WhatsApp ID in under 2 minutes. No downloads. No forms. 100% safe.',
  ctaLabel = 'Get My WhatsApp ID Now',
}) => {
  const handleWhatsApp = () => {
    window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="page-cta-section py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#065f46] border-t border-emerald-600/30 relative overflow-hidden text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-extrabold text-amber-200 uppercase tracking-wider mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#F0C419]" />
          <span>India's #1 Betting Exchange &amp; Casino</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight">
          {headline}
        </h2>
        <p className="text-emerald-50/90 text-base sm:text-lg mb-9 leading-relaxed max-w-2xl mx-auto font-normal">
          {subtext}
        </p>

        <button type="button"
          onClick={handleWhatsApp}
          className="gold-pill-btn !py-4 !px-10 text-base font-black shadow-xl inline-flex items-center gap-2.5 cursor-pointer hover:scale-105 transition-all"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>{ctaLabel}</span>
        </button>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto pt-8 border-t border-white/20">
          <div className="text-center">
            <ShieldCheck className="w-6 h-6 text-[#F0C419] mx-auto mb-1.5" />
            <p className="text-xs text-white font-bold">256-Bit TLS Security</p>
          </div>
          <div className="text-center">
            <Zap className="w-6 h-6 text-emerald-300 mx-auto mb-1.5" />
            <p className="text-xs text-white font-bold">2-Min UPI Cashout</p>
          </div>
          <div className="text-center">
            <MessageCircle className="w-6 h-6 text-[#F0C419] mx-auto mb-1.5" />
            <p className="text-xs text-white font-bold">24/7 Human WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};
