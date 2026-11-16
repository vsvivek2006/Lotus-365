"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MessageCircle,
  ArrowRight,
  Zap,
  Trophy,
  BookOpen,
  Shield,
  ChevronLeft,
  ChevronRight,
  Flame,
  Sparkles,
  Plane,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface HeroSectionProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

const slides = [
  {
    id: 'cricket',
    eyebrow: 'Play · Learn · Enjoy • India\'s Premier Sports Hub',
    titlePrimary: "India's Ultimate",
    titleAccent: "Sports & Gaming",
    titleSuffix: "Platform",
    subtitle: "Step into a premium world of sports and gaming, where excitement meets trust. Real-time in-play cricket odds, 0% commission exchange trading, and instant WhatsApp login.",
    desktopImage: '/images/banners/hero_slide_cricket_desktop.jpg',
    mobileImage: '/images/banners/hero_slide_cricket_mobile.jpg',
    primaryCta: 'Get ID on WhatsApp',
    secondaryCta: 'Explore Live Exchange',
    secondaryHref: '/cricket-exchange',
    badgeType: 'cricket',
  },
  {
    id: 'casino',
    eyebrow: '1,000+ Tables · Certified Live Dealers • Instant Cashout',
    titlePrimary: "India's Premier",
    titleAccent: "Live Casino & 3D",
    titleSuffix: "Games Hub",
    subtitle: "Experience high-definition live dealer Teen Patti, European Roulette, and Spribe Aviator with guaranteed 2-minute UPI cashouts and 24/7 WhatsApp concierge.",
    desktopImage: '/images/banners/hero_slide_casino_desktop.jpg',
    mobileImage: '/images/banners/hero_slide_casino_mobile.jpg',
    primaryCta: 'Get ID on WhatsApp',
    secondaryCta: 'Play 1,000+ Games',
    secondaryHref: '/live-casino',
    badgeType: 'casino',
  },
];

const featurePills = [
  { icon: Zap,      label: 'Live Scores',     sub: 'Real-Time Updates',      color: 'text-yellow-400' },
  { icon: Trophy,   label: '1000+ Games',     sub: '& Activities',           color: 'text-amber-400' },
  { icon: BookOpen, label: 'Expert Insights', sub: 'Guides & Analysis',      color: 'text-emerald-300'},
  { icon: Shield,   label: 'Trusted Platform',sub: 'Safe & Secure',          color: 'text-teal-300'   },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAuth }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = slides.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#064e3b] via-[#047857] to-[#065f46] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── STADIUM AMBIENT LIGHTING (Lush Emerald & Gold Glow, Zero Black) ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[450px] bg-gradient-radial from-emerald-400/25 via-teal-300/10 to-transparent blur-[100px]" />
        <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-[#064e3b] to-transparent" />
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">

          {/* ══ LEFT COLUMN: Dynamic Text Content ══ */}
          <div className="lg:col-span-7 text-center lg:text-left z-10 transition-all duration-300">
            
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md mb-4 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-200" />
              </span>
              <span className="text-emerald-100 text-[11px] font-black uppercase tracking-widest">
                {slide.eyebrow}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-black text-white leading-[1.08] tracking-tight mb-4">
              <span className="block text-3xl sm:text-4xl lg:text-[2.6rem] mb-1">
                {slide.titlePrimary}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.2rem] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 drop-shadow-sm">
                {slide.titleAccent}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.2rem]">
                {slide.titleSuffix}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-emerald-50 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-normal">
              {slide.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <button
                onClick={handleWhatsApp}
                id="hero-whatsapp-btn"
                className="
                  group flex items-center justify-center gap-2.5
                  px-8 py-3.5 rounded-full
                  bg-emerald-500 hover:bg-emerald-400
                  text-white font-extrabold text-base
                  shadow-[0_4px_24px_rgba(16,185,129,0.5)]
                  hover:shadow-[0_6px_32px_rgba(16,185,129,0.65)]
                  transition-all duration-200 cursor-pointer
                  w-full sm:w-auto border border-white/20
                "
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{slide.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href={slide.secondaryHref}
                className="
                  flex items-center justify-center gap-2
                  px-6 py-3.5 rounded-full
                  bg-white/15 hover:bg-white/25 backdrop-blur-md
                  text-white font-bold text-sm
                  border border-white/30 hover:border-white/50
                  transition-all duration-200
                  w-full sm:w-auto
                "
              >
                <Zap className="w-4 h-4 text-yellow-300" />
                <span>{slide.secondaryCta}</span>
              </Link>
            </div>

            {/* 4 Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              {featurePills.map(({ icon: Icon, label, sub, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm"
                >
                  <Icon className={`w-4 h-4 ${color} shrink-0`} />
                  <div className="text-left">
                    <div className="text-white text-[11px] font-bold leading-none">{label}</div>
                    <div className="text-emerald-100/70 text-[9px] leading-none mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ══ RIGHT COLUMN: Responsive Slider Visual (Desktop & Mobile) ══ */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main Visual Card Container with Soft Dissolve */}
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-white/25 bg-gradient-to-br from-emerald-800 to-emerald-950">
              
              {/* Desktop View Image (Visible md and up) */}
              <div className="hidden md:block absolute inset-0">
                <Image
                  key={`desktop-${slide.id}`}
                  src={slide.desktopImage}
                  alt={slide.titlePrimary}
                  fill
                  priority
                  className="object-cover object-center transition-opacity duration-500"
                />
                {/* Dissolved edge gradient overlays (Zero Black, Pure Emerald Fade) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Mobile View Image (Visible sm and down) */}
              <div className="block md:hidden absolute inset-0">
                <Image
                  key={`mobile-${slide.id}`}
                  src={slide.mobileImage}
                  alt={slide.titlePrimary}
                  fill
                  priority
                  className="object-cover object-center transition-opacity duration-500"
                />
                {/* Mobile gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/95 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Match or Casino Overlay Badge */}
              {slide.id === 'cricket' ? (
                <div className="absolute top-4 left-4 z-20 max-w-[210px] bg-white text-slate-900 rounded-2xl shadow-xl p-3 border border-slate-100">
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100">
                    <span className="flex items-center gap-1 text-[10px] font-black uppercase text-red-600">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" /> LIVE
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">3rd ODI • Mumbai</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold">India</div>
                      <div className="text-sm font-black text-emerald-600 font-mono">278/4</div>
                    </div>
                    <div className="text-[11px] font-bold text-slate-400">VS</div>
                    <div className="text-right">
                      <div className="text-xs font-bold">Australia</div>
                      <div className="text-[10px] text-slate-500 font-medium">Yet to bat</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute top-4 left-4 z-20 max-w-[210px] bg-white text-slate-900 rounded-2xl shadow-xl p-3 border border-slate-100">
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100">
                    <span className="flex items-center gap-1 text-[10px] font-black uppercase text-emerald-600">
                      <Sparkles className="w-3 h-3 text-[#F0C419]" /> 1,000+ TABLES
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">Live Dealer</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Aviator Radar</div>
                      <div className="text-sm font-black text-amber-500 font-mono">8.42x</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-900">Teen Patti</div>
                      <div className="text-[10px] text-emerald-600 font-bold">Live Stream</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Carousel Controls (Prev/Next + Dots) */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-white/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/30">
                {/* Prev Button */}
                <button
                  onClick={prevSlide}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Indicator Dots */}
                <div className="flex items-center gap-2">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx
                          ? 'w-6 bg-yellow-400 shadow-sm'
                          : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
