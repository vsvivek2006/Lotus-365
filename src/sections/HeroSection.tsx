"use client";

import Image from 'next/image';
import React from 'react';
import {
  MessageCircle,
  ArrowRight,
  Zap,
  Clock,
  ShieldCheck,
  Headphones,
  Crown,
  Sparkles,
} from 'lucide-react';
import { getWhatsAppUrl } from '../data/landingData';

interface HeroSectionProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

const fintechBadges = [
  {
    icon: Zap,
    title: 'Instant Access',
    subtitle: 'via WhatsApp',
    color: 'text-emerald-300',
    bg: 'bg-emerald-500/25 border-emerald-400/40',
  },
  {
    icon: Clock,
    title: '30 Sec',
    subtitle: 'UPI Deposits',
    color: 'text-amber-300',
    bg: 'bg-amber-500/25 border-amber-400/40',
  },
  {
    icon: ShieldCheck,
    title: '2 Min',
    subtitle: 'Cashouts',
    color: 'text-teal-300',
    bg: 'bg-teal-500/25 border-teal-400/40',
  },
  {
    icon: Headphones,
    title: '24/7',
    subtitle: 'Live Support',
    color: 'text-emerald-200',
    bg: 'bg-emerald-500/25 border-emerald-400/40',
  },
  {
    icon: Crown,
    title: 'VIP',
    subtitle: 'Benefits & Rewards',
    color: 'text-yellow-300',
    bg: 'bg-yellow-500/25 border-yellow-400/40',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAuth }) => {
  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(
        getWhatsAppUrl('Hi Lotus365, I want to get my official ID on WhatsApp (lotusplay365.shop)'),
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  const handleDemoId = () => {
    window.open(
      getWhatsAppUrl('Hi Lotus365, please provide a 2-minute Free Demo ID to test lotusplay365.shop'),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#065f46] text-white pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16"
      aria-label="Lotus365 Official Hero"
    >
      {/* ══ FULL-WIDTH BACKGROUND STADIUM & AMBIENT FLOODLIGHTS ══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Full Bleed Stadium Backdrop */}
        <Image
          src="/images/banners/cricket_stadium_real.jpg"
          alt="Lotus365 Floodlit Arena"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-overlay"
        />

        {/* Ambient Stadium Floodlight Glows (Zero Black, Lush Emerald & Gold) */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[380px] bg-emerald-400/25 blur-[140px] rounded-full" />
        <div className="absolute top-6 right-1/4 w-[550px] h-[450px] bg-amber-400/15 blur-[130px] rounded-full" />
        <div className="absolute -bottom-20 left-1/3 w-[700px] h-[350px] bg-teal-300/15 blur-[120px] rounded-full" />

        {/* Smooth Top & Bottom Atmospheric Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/90 via-transparent to-[#065f46]/95" />
      </div>

      {/* ══ INNER CONTENT WRAPPER ══ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: High-Impact Typography, SEO Pitch & Dual CTAs
          ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Tagline / Eyebrow Pill — Luxury Redesigned */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-400/20 via-amber-300/15 to-emerald-400/20 border border-yellow-300/40 backdrop-blur-md mb-5 shadow-[0_2px_14px_rgba(250,204,21,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300/40" />
              <span className="text-yellow-200 text-xs sm:text-[13px] font-black uppercase tracking-wider drop-shadow-2xs">
                Play Bigger. Win Bigger.
              </span>
              <span className="w-1 h-1 rounded-full bg-yellow-300/60" />
              <span className="text-emerald-100 text-xs sm:text-[13px] font-bold tracking-wide">
                Official Platform
              </span>
            </div>

            {/* Display H1 Headline */}
            <h1 className="font-black text-white tracking-tight leading-[1.08] mb-4">
              <span className="block text-3xl sm:text-5xl lg:text-[3.5rem]">
                India&apos;s Premier
              </span>
              <span className="block text-3xl sm:text-5xl lg:text-[3.5rem] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 drop-shadow-sm mt-1">
                Gaming Platform
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-emerald-100 font-bold text-base sm:text-xl mb-3">
              Live Sports • 1,000+ Casino Games • Instant Play
            </p>

            {/* Pitch Summary (BazaarLink SEO Validated) */}
            <p className="text-emerald-50/90 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-normal">
              From live cricket exchange to 1,000+ casino games, Lotus365 delivers instant WhatsApp ID activation, 30-second deposits, and 2-minute withdrawals. More action. Less waiting.
            </p>

            {/* Dual CTAs (WhatsApp Green + Frosted Glass 2-Min Demo) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary: Get ID on WhatsApp */}
              <button type="button"
                onClick={handleWhatsApp}
                id="hero-whatsapp-btn"
                className="
                  group flex items-center justify-center gap-3
                  px-8 py-4 rounded-full
                  bg-[#25D366] hover:bg-[#20ba5a]
                  text-white font-extrabold text-base sm:text-lg
                  shadow-[0_4px_24px_rgba(37,211,102,0.5)]
                  hover:shadow-[0_6px_32px_rgba(37,211,102,0.7)]
                  transition-all duration-200 cursor-pointer
                  w-full sm:w-auto border border-white/20
                "
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                <span>Get ID on WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Secondary: 2-Min Demo ID */}
              <button type="button"
                onClick={handleDemoId}
                id="hero-demo-id-btn"
                className="
                  flex items-center justify-center gap-2.5
                  px-7 py-4 rounded-full
                  bg-white/15 hover:bg-white/25 backdrop-blur-md
                  text-white font-bold text-sm sm:text-base
                  border border-white/30 hover:border-white/50
                  transition-all duration-200 cursor-pointer
                  w-full sm:w-auto shadow-sm
                "
              >
                <Zap className="w-5 h-5 text-yellow-300" />
                <span>2-Min Demo ID</span>
              </button>
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: Brand Ambassador Visual (Transparent Cutout)
              (Zero Background Box, Zero Sharp Edges, Flush Bottom Placement)
          ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 relative flex items-end justify-center self-end">

            {/* Visual Container (Sitting Flush on Bottom) */}
            <div className="relative w-full max-w-[460px] lg:max-w-[520px] h-[360px] sm:h-[440px] lg:h-[500px] flex items-end justify-center">
              
              {/* Radial Stadium Aura behind the models (Soft emerald glow) */}
              <div className="absolute inset-0 bg-gradient-radial from-emerald-400/25 via-emerald-500/10 to-transparent blur-3xl -z-10 scale-110 pointer-events-none" />

              {/* 100% Transparent Cutout of Brand Ambassadors holding phone */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/banners/hero_models_cutout_feathered.webp"
                  alt="Lotus365 Official Brand Ambassadors holding smartphone with verified ID"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                  className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
                />
              </div>

            </div>

          </div>

        </div>

        {/* ═════════════════════════════════════════════════════════════════
            5 EXECUTIVE FINTECH BADGES (Full-Width Generous Trust Bar)
            (Moved out of cramped column to full width - No truncation!)
        ═════════════════════════════════════════════════════════════════ */}
        <div className="relative z-20 mt-8 lg:mt-12 pt-6 border-t border-white/15">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {fintechBadges.map(({ icon: Icon, title, subtitle, color, bg }) => (
              <div
                key={title}
                className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all shadow-sm group cursor-default"
              >
                <div
                  className={`p-2 rounded-xl border ${bg} shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${color}`} />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-white text-xs sm:text-sm font-black leading-tight whitespace-nowrap">
                    {title}
                  </div>
                  <div className="text-emerald-100/75 text-[10px] sm:text-[11px] font-semibold leading-tight whitespace-nowrap mt-0.5">
                    {subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
