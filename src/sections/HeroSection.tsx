"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MessageCircle,
  ArrowRight,
  Zap,
  Clock,
  ShieldCheck,
  Headphones,
  Crown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Play,
  TrendingUp,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL, getWhatsAppUrl } from '../data/landingData';

interface HeroSectionProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

interface HeroSlide {
  id: string;
  badge: string;
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  subtitle: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryActionType: 'demo' | 'link';
  secondaryHref?: string;
  floatingCard: {
    tag: string;
    tagColor: string;
    title: string;
    sub: string;
    metric1Label: string;
    metric1Val: string;
    metric2Label: string;
    metric2Val: string;
  };
}

const slides: HeroSlide[] = [
  {
    id: 'sports-cricket',
    badge: 'India Live Sports',
    eyebrow: 'Play Bigger. Win Bigger.',
    titlePrimary: "India's Premier",
    titleAccent: 'Gaming Platform',
    subtitle: 'Live Sports • 1,000+ Casino Games • Instant Play',
    description:
      'From live cricket exchange to 1,000+ casino games, Lotus365 delivers instant WhatsApp ID activation, 30-second deposits, and 2-minute withdrawals. More action. Less waiting.',
    desktopImage: '/images/banners/hero_cricket_feathered_desktop.webp',
    mobileImage: '/images/banners/hero_cricket_feathered_mobile.webp',
    primaryCta: 'Get ID on WhatsApp',
    secondaryCta: '2-Min Demo ID',
    secondaryActionType: 'demo',
    floatingCard: {
      tag: 'LIVE IN-PLAY',
      tagColor: 'bg-red-500 text-white',
      title: 'IND vs AUS',
      sub: '3rd ODI • Mumbai',
      metric1Label: 'India',
      metric1Val: '278/4 (48.2)',
      metric2Label: 'Australia',
      metric2Val: 'Yet to bat',
    },
  },
  {
    id: 'live-casino',
    badge: '1,000+ Casino Tables',
    eyebrow: 'High Definition Streaming',
    titlePrimary: "India's Ultimate",
    titleAccent: 'Live Casino & 3D Hub',
    subtitle: 'Live Teen Patti • Roulette • Aviator Radar',
    description:
      'Immerse in crystal-clear live casino streams with certified dealers, instant multiplier cashouts, and round-the-clock VIP private concierge on WhatsApp.',
    desktopImage: '/images/banners/hero_casino_feathered_desktop.webp',
    mobileImage: '/images/banners/hero_casino_feathered_mobile.webp',
    primaryCta: 'Get ID on WhatsApp',
    secondaryCta: 'Play 1,000+ Games',
    secondaryActionType: 'link',
    secondaryHref: '/live-casino',
    floatingCard: {
      tag: 'HOT MULTIPLIER',
      tagColor: 'bg-amber-500 text-white',
      title: 'Aviator & Roulette',
      sub: 'Live Multiplier Stream',
      metric1Label: 'Aviator Radar',
      metric1Val: '8.42x',
      metric2Label: 'Roulette Table',
      metric2Val: 'Live Dealer',
    },
  },
];

const fintechBadges = [
  {
    icon: Zap,
    title: 'Instant Access',
    subtitle: 'via WhatsApp',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: Clock,
    title: '30 Sec',
    subtitle: 'UPI Deposits',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50 border-amber-100',
  },
  {
    icon: ShieldCheck,
    title: '2 Min',
    subtitle: 'Cashouts',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: Headphones,
    title: '24/7',
    subtitle: 'Human Support',
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50 border-teal-100',
  },
  {
    icon: Crown,
    title: 'VIP',
    subtitle: 'Benefits',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50 border-amber-100',
  },
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
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

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
      getWhatsAppUrl('Hi Lotus365, please give me a 2-minute Free Demo ID to test lotusplay365.shop'),
      '_blank',
      'noopener,noreferrer'
    );
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative bg-[#F8FAFC] pt-3 sm:pt-4 pb-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Lotus365 Hero Banner"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* ══ CURVED EMERALD STADIUM HERO CARD (Full-Bleed Luxury Banner) ══ */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#065f46] shadow-xl border border-emerald-600/30 text-white">
          
          {/* Ambient Stadium Lighting Glows (Lush Emerald & Gold Beam, Zero Black) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[500px] h-[320px] bg-emerald-400/25 blur-[120px] rounded-full" />
            <div className="absolute -top-16 -left-16 w-[360px] h-[360px] bg-teal-300/15 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-amber-400/15 blur-[100px] rounded-full" />
            
            {/* Subtle Stadium Turf Arch Line */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#064e3b]/80 to-transparent" />
          </div>

          {/* Grid Layout: Left Content + Right High-Res Imagery */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center min-h-[460px] lg:min-h-[500px] px-5 sm:px-8 lg:px-12 py-8 lg:py-10 gap-8">
            
            {/* ── LEFT COLUMN: Text, Value Proposition & Actions ── */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Eyebrow Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md mb-4 shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
                </span>
                <span className="text-white text-xs font-black uppercase tracking-wider">
                  {slide.eyebrow}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-emerald-100 text-xs font-semibold">
                  {slide.badge}
                </span>
              </div>

              {/* H1 Display Headline */}
              <h1 className="font-black text-white tracking-tight leading-[1.08] mb-3">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                  {slide.titlePrimary}
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 drop-shadow-sm mt-0.5">
                  {slide.titleAccent}
                </span>
              </h1>

              {/* Sub-headline Pill / Bullet Line */}
              <p className="text-emerald-100 font-semibold text-sm sm:text-base lg:text-lg mb-3">
                {slide.subtitle}
              </p>

              {/* SEO Pitch Summary */}
              <p className="text-emerald-50/90 text-xs sm:text-sm leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0 font-normal">
                {slide.description}
              </p>

              {/* Dual Action CTA Buttons (WhatsApp Green + Frosted Glass) */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
                
                {/* Primary Button: WhatsApp Green */}
                <button
                  onClick={handleWhatsApp}
                  id="hero-primary-whatsapp-btn"
                  className="
                    group flex items-center justify-center gap-2.5
                    px-8 py-3.5 rounded-full
                    bg-[#25D366] hover:bg-[#20ba5a]
                    text-white font-extrabold text-base
                    shadow-[0_4px_20px_rgba(37,211,102,0.45)]
                    hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)]
                    transition-all duration-200 cursor-pointer
                    w-full sm:w-auto border border-white/20
                  "
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{slide.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Button: 2-Min Demo ID or Explore Link */}
                {slide.secondaryActionType === 'demo' ? (
                  <button
                    onClick={handleDemoId}
                    id="hero-demo-id-btn"
                    className="
                      flex items-center justify-center gap-2
                      px-6 py-3.5 rounded-full
                      bg-white/15 hover:bg-white/25 backdrop-blur-md
                      text-white font-bold text-sm
                      border border-white/30 hover:border-white/50
                      transition-all duration-200 cursor-pointer
                      w-full sm:w-auto
                    "
                  >
                    <Zap className="w-4 h-4 text-yellow-300" />
                    <span>{slide.secondaryCta}</span>
                  </button>
                ) : (
                  <Link
                    href={slide.secondaryHref || '/live-casino'}
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
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span>{slide.secondaryCta}</span>
                  </Link>
                )}
              </div>

              {/* Slider Dots Indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx
                        ? 'w-8 bg-yellow-400 shadow-xs'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Switch to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

            {/* ── RIGHT COLUMN: Responsive Visual with Dissolved Seamless Edges ── */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Visual Card Frame */}
              <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] flex items-center justify-center">
                
                {/* Desktop Dissolved Image */}
                <div className="hidden md:block absolute inset-0">
                  <Image
                    key={`desktop-${slide.id}`}
                    src={slide.desktopImage}
                    alt={slide.titlePrimary}
                    fill
                    priority
                    className="object-contain object-right-bottom transition-opacity duration-500 drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)]"
                  />
                </div>

                {/* Mobile Dissolved Image */}
                <div className="block md:hidden absolute inset-0">
                  <Image
                    key={`mobile-${slide.id}`}
                    src={slide.mobileImage}
                    alt={slide.titlePrimary}
                    fill
                    priority
                    className="object-contain object-bottom transition-opacity duration-500"
                  />
                </div>

                {/* Floating Interactive Live Match / Multiplier Card (Mockup 3 Style) */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 max-w-[210px] sm:max-w-[230px] bg-white/95 backdrop-blur-md text-slate-900 rounded-2xl shadow-xl p-3 border border-emerald-100">
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100">
                    <span
                      className={`inline-flex items-center gap-1 text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${slide.floatingCard.tagColor}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      {slide.floatingCard.tag}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold truncate ml-1">
                      {slide.floatingCard.sub}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-slate-700">
                        {slide.floatingCard.metric1Label}
                      </div>
                      <div className="text-sm font-black text-emerald-600 font-mono">
                        {slide.floatingCard.metric1Val}
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-slate-300 px-1">VS</div>
                    <div className="text-right">
                      <div className="text-[11px] font-bold text-slate-700">
                        {slide.floatingCard.metric2Label}
                      </div>
                      <div className="text-[11px] font-bold text-slate-500">
                        {slide.floatingCard.metric2Val}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Carousel Arrow Controls */}
                <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/35 text-white backdrop-blur-md border border-white/30 transition-all cursor-pointer shadow-sm"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/35 text-white backdrop-blur-md border border-white/30 transition-all cursor-pointer shadow-sm"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ══ 5 EXECUTIVE FINTECH BADGES (Mockup 3 Trust Strip, Zero Black, Pure Clean Canvas) ══ */}
        <div className="mt-3 bg-white rounded-2xl p-3 sm:p-4 shadow-xs border border-slate-200/90">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
            {fintechBadges.map(({ icon: Icon, title, subtitle, iconColor, iconBg }) => (
              <div
                key={title}
                className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 hover:bg-emerald-50/50 border border-slate-200/60 hover:border-emerald-200/80 transition-colors"
              >
                <div className={`p-2 rounded-xl border shrink-0 ${iconBg}`}>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight truncate">
                    {title}
                  </div>
                  <div className="text-[10px] sm:text-xs font-medium text-slate-500 leading-tight truncate mt-0.5">
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
