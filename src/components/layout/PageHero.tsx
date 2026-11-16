"use client";

import React from 'react';
import { Sparkles, ShieldCheck, Zap, MessageCircle, ArrowRight } from 'lucide-react';
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
  badge = 'Official Lotus365 Hub',
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

      <section className="pt-8 sm:pt-14 pb-14 sm:pb-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#022319] via-[#043d2c] to-[#022319] relative overflow-hidden border-b border-emerald-500/20 text-white">
        {/* Ambient atmospheric stadium glows */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[350px] bg-emerald-500/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-amber-400/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`grid grid-cols-1 ${imageSrc ? 'lg:grid-cols-12 gap-8 lg:gap-12 items-center' : 'text-center max-w-4xl mx-auto'}`}>
            
            {/* Left Column: Heading, Subtitle & Action */}
            <div className={imageSrc ? 'lg:col-span-7 text-left' : 'w-full'}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-black text-emerald-300 uppercase tracking-wider mb-5 shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F0C419]" />
                <span>{badge}</span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-5">
                {highlight && title.includes(highlight) ? (
                  <>
                    {parts[0]}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-[#10b981] to-emerald-400 drop-shadow-[0_2px_18px_rgba(16,185,129,0.35)]">
                      {highlight}
                    </span>
                    {parts[1] || ''}
                  </>
                ) : (
                  <>
                    {title}
                    {highlight && (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-[#10b981] to-emerald-400 drop-shadow-[0_2px_18px_rgba(16,185,129,0.35)]">
                        {highlight}
                      </span>
                    )}
                  </>
                )}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-emerald-100/85 leading-relaxed mb-8 max-w-2xl font-normal">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="emerald-pill-btn !py-3.5 !px-8 text-sm sm:text-base font-bold shadow-xl cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-bold border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-[#F0C419]" />
                  <span>2-Min Demo ID</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-emerald-200/80">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Certified Safe</span>
                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#F0C419]" /> Instant UPI Payouts</span>
                <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-emerald-400" /> 24/7 Human Concierge</span>
              </div>
            </div>

            {/* Right Column: Visual Showcase Card */}
            {imageSrc && (
              <div className="lg:col-span-5">
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/25 bg-[#03291e] p-2 hover:border-emerald-400/50 transition-all">
                  <AdaptiveImage
                    src={imageSrc}
                    alt={imageAlt || title}
                    aspectRatio="16/10"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                    containerClassName="w-full"
                    overlayBadge="OFFICIAL HUB"
                  />
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};
