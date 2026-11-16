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
  CheckCircle2,
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
    bg: 'bg-emerald-500/20 border-emerald-400/30',
  },
  {
    icon: Clock,
    title: '30 Sec',
    subtitle: 'UPI Deposits',
    color: 'text-amber-300',
    bg: 'bg-amber-500/20 border-amber-400/30',
  },
  {
    icon: ShieldCheck,
    title: '2 Min',
    subtitle: 'Cashouts',
    color: 'text-teal-300',
    bg: 'bg-teal-500/20 border-teal-400/30',
  },
  {
    icon: Headphones,
    title: '24/7',
    subtitle: 'Support',
    color: 'text-emerald-200',
    bg: 'bg-emerald-500/20 border-emerald-400/30',
  },
  {
    icon: Crown,
    title: 'VIP',
    subtitle: 'Benefits',
    color: 'text-yellow-300',
    bg: 'bg-yellow-500/20 border-yellow-400/30',
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
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#065f46] text-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20"
      aria-label="Lotus365 Official Hero"
    >
      {/* ══ FULL-WIDTH BACKGROUND IMAGE & STADIUM FLOODLIGHTS ══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Full Bleed Stadium Backdrop */}
        <Image
          src="/images/banners/cricket_stadium_real.jpg"
          alt="Lotus365 Floodlit Arena"
          fill
          priority
          className="object-cover object-center opacity-25 mix-blend-overlay"
        />

        {/* Ambient Stadium Floodlight Beams & Golden Dust */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-emerald-400/30 blur-[140px] rounded-full" />
        <div className="absolute top-10 right-1/4 w-[550px] h-[450px] bg-amber-400/20 blur-[130px] rounded-full" />
        <div className="absolute -bottom-20 left-1/3 w-[700px] h-[350px] bg-teal-300/15 blur-[120px] rounded-full" />

        {/* Smooth Top & Bottom Vignette (Zero Black, Pure Deep Emerald) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/90 via-transparent to-[#065f46]/95" />
      </div>

      {/* ══ INNER CONTENT WRAPPER ══ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: High-Impact Headline, Pitch & Dual CTAs
          ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Tagline / Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md mb-5 shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400" />
              </span>
              <span className="text-white text-xs sm:text-sm font-black uppercase tracking-wider">
                Play Bigger. Win Bigger.
              </span>
              <span className="text-white/40">•</span>
              <span className="text-emerald-100 text-xs sm:text-sm font-semibold">
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
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              {/* Primary: Get ID on WhatsApp */}
              <button
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
              <button
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

            {/* 5 Executive Fintech Badges (Integrated Glass Pills) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {fintechBadges.map(({ icon: Icon, title, subtitle, color, bg }) => (
                <div
                  key={title}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all shadow-xs"
                >
                  <div className={`p-1.5 rounded-lg border ${bg} shrink-0`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-white text-xs font-black leading-tight truncate">
                      {title}
                    </div>
                    <div className="text-emerald-100/70 text-[10px] font-medium leading-tight truncate mt-0.5">
                      {subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: Seamlessly Dissolved Brand Ambassador Visual
              (Zero Sharp Edges - Feathered Alpha Mask + Radial Glow)
          ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 relative flex items-center justify-center">

            {/* Visual Container */}
            <div className="relative w-full max-w-[480px] lg:max-w-[540px] h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center">
              
              {/* Radial Stadium Glow behind the models */}
              <div className="absolute inset-0 bg-gradient-radial from-emerald-400/30 via-teal-400/10 to-transparent blur-3xl -z-10 scale-110 pointer-events-none" />

              {/* Floating Top Trust Pill */}
              <div className="absolute top-2 left-4 sm:left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 shadow-xl border border-emerald-100 backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span className="text-[11px] font-black text-slate-900">
                  Verified Lotus365 ID
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              </div>

              {/* Seamless Dissolved Brand Ambassador Image (Zero Sharp Edges) */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/banners/hero_models_pointing_dissolved.webp"
                  alt="Lotus365 Official Brand Ambassadors showing verified mobile ID"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                />

                {/* Additional CSS Edge Fades (Guarantee zero hard lines on any resolution) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#065f46] via-transparent to-transparent h-16 bottom-0 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b]/80 via-transparent to-transparent w-20 left-0 pointer-events-none hidden lg:block" />
              </div>

              {/* Floating Bottom Trust Pill */}
              <div className="absolute bottom-4 right-4 sm:right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 text-white shadow-xl border border-emerald-400/40 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                <span className="text-[11px] font-extrabold text-white">
                  30-Sec WhatsApp Activation
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
