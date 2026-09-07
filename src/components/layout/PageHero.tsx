import React from 'react';
import { Sparkles } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../../data/landingData';

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  ctaLabel?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge = 'Official Lotus365',
  title,
  highlight,
  subtitle,
  ctaLabel = 'Get WhatsApp ID Instantly',
}) => {
  const handleWhatsApp = () => {
    window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0b3b2d] to-[#14614C] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#F0C419]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-[#F0C419]/30 text-xs font-extrabold text-[#F0C419] uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5">
          {parts[0]}
          {highlight && <span className="text-[#F0C419]">{highlight}</span>}
          {parts[1]}
        </h1>

        <p className="text-base sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>

        <button
          onClick={handleWhatsApp}
          className="cta-button py-3.5 px-8 text-base font-black shadow-gold-glow"
        >
          <Sparkles className="w-5 h-5 text-[#14614C]" />
          <span>{ctaLabel}</span>
        </button>

        {/* Trust indicators */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/60">
          <span>✅ 100% Secure</span>
          <span>⚡ Instant UPI</span>
          <span>🏏 Live Cricket</span>
          <span>🎰 1000+ Games</span>
          <span>💬 24/7 WhatsApp</span>
        </div>
      </div>
    </section>
  );
};
