"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {
  MessageCircle,
  ArrowRight,
  Zap,
  Trophy,
  BookOpen,
  Shield,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface HeroSectionProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

const featurePills = [
  { icon: Zap,     label: 'Live Scores',     sub: 'Real-Time Updates',      color: 'text-yellow-400' },
  { icon: Trophy,  label: '1000+ Games',      sub: '& Activities',           color: 'text-amber-400' },
  { icon: BookOpen,label: 'Expert Insights',  sub: 'Guides & Analysis',      color: 'text-sky-400'   },
  { icon: Shield,  label: 'Trusted Platform', sub: 'Safe & Secure',          color: 'text-emerald-400'},
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAuth }) => {
  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#063323]">

      {/* ── BACKGROUND LAYERS ── */}
      {/* Stadium field radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep green gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#063323] via-[#0a4230] to-[#042a1c]" />

        {/* Floodlight top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-radial from-emerald-400/20 via-emerald-600/8 to-transparent blur-[80px]" />

        {/* Left warm glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-emerald-500/15 to-transparent blur-[100px]" />

        {/* Bottom field green */}
        <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#031d12] to-transparent" />

        {/* Stadium texture arcs */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="720" cy="260" rx="860" ry="200" fill="#052818" opacity="0.7"/>
          <ellipse cx="720" cy="280" rx="560" ry="140" fill="#063e22" opacity="0.6"/>
          <ellipse cx="720" cy="300" rx="320" ry="80" fill="#0a5e30" opacity="0.5" stroke="#16a34a" strokeWidth="1"/>
          {/* Pitch strip */}
          <rect x="668" y="260" width="104" height="80" rx="4" fill="#c8a96e" opacity="0.6"/>
        </svg>

        {/* Shimmer dots */}
        <div className="absolute top-20 left-16 w-2 h-2 rounded-full bg-yellow-300/50 blur-[2px] animate-pulse" />
        <div className="absolute top-32 right-24 w-1.5 h-1.5 rounded-full bg-emerald-300/60 blur-[2px] animate-pulse delay-700" />
        <div className="absolute top-48 left-1/3 w-1 h-1 rounded-full bg-white/30 animate-pulse delay-300" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[520px] gap-0">

          {/* ══ LEFT COLUMN: Typography + CTAs ══ */}
          <div className="py-14 lg:py-20 text-center lg:text-left relative z-10">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-300 text-[11px] font-black uppercase tracking-widest">
                Play · Learn · Enjoy
              </span>
            </div>

            {/* Main headline — SEO-optimised, matching reference mockups */}
            <h1 className="font-black text-white leading-[1.08] tracking-tight mb-5">
              <span className="block text-3xl sm:text-4xl lg:text-[2.6rem] mb-1">
                India's Premier
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.2rem] text-emerald-400">
                Sports &amp; Gaming
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.2rem]">
                Platform
              </span>
            </h1>

            {/* Sub-headline — SEO approved */}
            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Step into a premium world of sports and gaming, where excitement meets trust.
              Live Scores, Expert Insights &amp; 1000+ Exciting Games — All in One Place.
            </p>

            {/* Primary CTA — WhatsApp Get ID (matching mockup green pill) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10">
              <button
                onClick={handleWhatsApp}
                id="hero-get-id-btn"
                className="
                  group flex items-center gap-2.5
                  px-8 py-3.5 rounded-full
                  bg-emerald-600 hover:bg-emerald-500
                  text-white font-bold text-base
                  shadow-[0_4px_24px_rgba(16,185,129,0.4)]
                  hover:shadow-[0_6px_32px_rgba(16,185,129,0.55)]
                  transition-all duration-250 cursor-pointer
                  w-full sm:w-auto justify-center
                "
              >
                <MessageCircle className="w-5 h-5 fill-current flex-shrink-0" />
                <span>Get ID on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/cricket-exchange"
                className="
                  flex items-center justify-center gap-2
                  px-6 py-3.5 rounded-full
                  bg-white/10 hover:bg-white/20 backdrop-blur-sm
                  text-white font-semibold text-sm
                  border border-white/25 hover:border-white/40
                  transition-all duration-200
                  w-full sm:w-auto
                "
              >
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>Explore Now</span>
              </Link>
            </div>

            {/* Feature pills strip — matching reference mockup layout */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {featurePills.map(({ icon: Icon, label, sub, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/25 border border-white/12 backdrop-blur-sm"
                >
                  <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                  <div className="text-left">
                    <div className="text-white text-[11px] font-bold leading-none">{label}</div>
                    <div className="text-white/55 text-[10px] leading-none mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT COLUMN: Photorealistic Dissolved Cricket Action + Live Match card ══ */}
          <div className="relative hidden lg:flex items-center justify-center h-[540px] xl:h-[580px] overflow-hidden rounded-3xl">
            {/* Cinematic cricket player image with feathered dissolve into #063323 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/banners/hero-cricket-batsman.jpg"
                alt="India Cricket Live Action — Lotus365"
                fill
                priority
                className="object-cover object-center scale-105 select-none"
              />
              {/* Dissolve overlays: Feathered gradients so edges melt into background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#063323] via-transparent to-[#063323]/60 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063323] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#063323]/60 via-transparent to-transparent pointer-events-none" />
              {/* Radial vignette mask effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(6,51,35,0.9)] pointer-events-none" />
            </div>

            {/* Live Match floating card — top left of right column */}
            <div className="absolute top-12 left-0 z-20 w-[220px]">
              <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-wide">LIVE</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">3rd ODI · Mumbai</span>
                </div>

                {/* Score */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇮🇳</span>
                    <div>
                      <div className="text-[11px] font-bold text-slate-900">India</div>
                      <div className="text-sm font-black text-emerald-600 font-mono">278/4</div>
                      <div className="text-[9px] text-slate-400">(48.2 ov)</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-300">VS</div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-[11px] font-bold text-slate-900">Australia</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">Yet to bat</div>
                    </div>
                    <span className="text-xl">🇦🇺</span>
                  </div>
                </div>

                {/* Odds pills */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-1.5 text-center">
                    <div className="text-[9px] text-emerald-700 font-semibold">India</div>
                    <div className="text-sm font-black text-emerald-700 font-mono">1.62</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-center">
                    <div className="text-[9px] text-slate-600 font-semibold">Australia</div>
                    <div className="text-sm font-black text-slate-700 font-mono">2.25</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats badge — bottom right */}
            <div className="absolute bottom-10 right-4 z-20">
              <div className="bg-emerald-600 rounded-2xl px-4 py-3 shadow-xl text-white text-center">
                <div className="text-[10px] font-semibold opacity-80 mb-0.5">Active Players</div>
                <div className="text-xl font-black font-mono">12,842</div>
                <div className="text-[9px] opacity-70">playing right now</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM FADE ── */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#042a1c]/80 to-transparent pointer-events-none" />
    </section>
  );
};
