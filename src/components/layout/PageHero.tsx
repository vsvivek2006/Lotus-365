"use client";
import React from 'react';
import { Sparkles, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../../data/landingData';
import { AdaptiveImage } from '../common/AdaptiveImage';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge = 'Official Lotus365',
  title,
  highlight,
  subtitle,
  ctaLabel = 'Get WhatsApp ID Instantly',
  imageSrc,
  imageAlt,
  breadcrumbs,
}) => {
  const handleWhatsApp = () => {
    window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  const parts = highlight ? title.split(highlight) : [title];

  return (
    <>
      {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}

      <section className="pt-10 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#040e0a] via-[#092218] to-[#05120d] relative overflow-hidden border-b border-white/10">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#F0C419]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#14614C]/25 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`grid grid-cols-1 ${imageSrc ? 'lg:grid-cols-12 gap-8 lg:gap-12 items-center' : 'text-center max-w-4xl mx-auto'}`}>
            
            {/* Left Column: Heading, Subtitle & Action */}
            <div className={imageSrc ? 'lg:col-span-7 text-left' : 'w-full'}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-[#F0C419]/30 text-xs font-black text-[#F0C419] uppercase tracking-wider mb-5 shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F0C419]" />
                <span>{badge}</span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-5">
                {highlight && title.includes(highlight) ? (
                  <>
                    {parts[0]}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0C419] via-amber-200 to-[#E5B510]">{highlight}</span>
                    {parts[1] || ''}
                  </>
                ) : (
                  <>
                    {title}
                    {highlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0C419] via-amber-200 to-[#E5B510]">{highlight}</span>}
                  </>
                )}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="cta-button py-3 px-7 text-sm sm:text-base font-black shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-[#14614C]" />
                  <span>{ctaLabel}</span>
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="cta-button-outline py-3 px-6 text-sm font-bold flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 text-[#F0C419]" />
                  <span>2-Min Deposit Demo</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/70">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#F0C419]" /> 100% Certified Safe</span>
                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#F0C419]" /> Instant UPI Payouts</span>
                <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#F0C419]" /> 24/7 Human Concierge</span>
              </div>
            </div>

            {/* Right Column: Visual Showcase Card */}
            {imageSrc && (
              <div className="lg:col-span-5 w-full">
                <div className="relative p-2 sm:p-3 rounded-2xl bg-black/40 border border-white/15 shadow-2xl backdrop-blur-md group hover:border-[#F0C419]/50 transition-all duration-300">
                  <AdaptiveImage
                    src={imageSrc}
                    alt={imageAlt || title}
                    aspectRatio="16/9"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 450px"
                    containerClassName="shadow-lg"
                  />
                  <div className="mt-3 px-2 flex items-center justify-between text-xs text-white/75">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Verified Platform
                    </span>
                    <span className="text-[#F0C419] font-bold">Official ID Desk</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};
