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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#14614C] to-[#0b3b2d]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0C419]/15 border border-[#F0C419]/30 text-xs font-extrabold text-[#F0C419] uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>India's No.1 Platform</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0C419] mb-4 leading-tight">
          {headline}
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">{subtext}</p>

        <button
          onClick={handleWhatsApp}
          className="cta-button py-4 px-10 text-base font-black shadow-gold-glow"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>{ctaLabel}</span>
        </button>

        <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          <div className="text-center">
            <ShieldCheck className="w-6 h-6 text-[#F0C419] mx-auto mb-1" />
            <p className="text-xs text-white/70 font-semibold">256-Bit SSL</p>
          </div>
          <div className="text-center">
            <Zap className="w-6 h-6 text-[#F0C419] mx-auto mb-1" />
            <p className="text-xs text-white/70 font-semibold">2-Min Cashout</p>
          </div>
          <div className="text-center">
            <MessageCircle className="w-6 h-6 text-[#F0C419] mx-auto mb-1" />
            <p className="text-xs text-white/70 font-semibold">24/7 Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};
