"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Sparkles, UserCheck, MessageCircle,
  ShieldCheck, ChevronDown, Zap, Trophy, Star,
  CreditCard, HelpCircle, Info,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';
import { LotusBrandLogo } from './brand/LotusBrandLogo';

interface HeaderProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

const navLinks = [
  { label: 'Cricket Exchange', href: '/cricket-exchange', badge: 'LIVE', badgeType: 'live' as const, icon: Zap },
  { label: 'Live Casino',      href: '/live-casino',       icon: Star },
  { label: 'Aviator Crash',   href: '/aviator-game',      badge: 'HOT', badgeType: 'hot' as const, icon: Trophy },
  { label: 'VIP Club',        href: '/vip-club',           icon: Star },
  { label: 'Betting Tips',    href: '/betting-tips',       icon: Info },
  { label: 'How It Works',    href: '/how-it-works',       icon: Info },
  { label: 'FAQs',            href: '/faq',                icon: HelpCircle },
];

export const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  const [isScrolled,      setIsScrolled]      = useState(false);
  const [mobileMenuOpen,  setMobileMenuOpen]  = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close drawer on outside click ── */
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileMenuOpen]);

  /* ── lock body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleCTA = (mode: 'login' | 'register' = 'register') => {
    if (onOpenAuth) {
      onOpenAuth(mode);
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════
          MAIN HEADER BAR
      ════════════════════════════════════════════════ */}
      <header
        className={`
          sticky top-0 z-50 transition-all duration-300
          ${isScrolled
            ? 'py-1.5 bg-[#0f4e3c]/98 shadow-[0_4px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl border-b border-white/8'
            : 'py-2.5 bg-[#14614C] border-b border-white/10'
          }
        `}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <LotusBrandLogo
            size="sm"
            subtitle="India's Premier Sports Exchange"
            badge="OFFICIAL"
            href="/"
          />

          {/* ── Desktop Nav ── */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                title={link.label}
                className="
                  group relative px-3 py-2 rounded-lg text-[13px] font-medium
                  text-slate-300 hover:text-white
                  transition-colors duration-200
                  flex items-center gap-1.5
                  hover:bg-white/7
                "
              >
                <span>{link.label}</span>
                {link.badge && (
                  <BadgePill type={link.badgeType!} label={link.badge} />
                )}
                {/* animated underline */}
                <span
                  className="
                    absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full
                    bg-[#F0C419] scale-x-0 group-hover:scale-x-100
                    transition-transform duration-200 origin-left
                  "
                />
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCTA('login')}
              id="header-login-btn"
              className="
                flex items-center gap-1.5 px-4 py-2 rounded-lg
                text-xs font-bold text-white
                bg-white/8 hover:bg-white/14
                border border-white/15 hover:border-white/30
                transition-all duration-200
              "
            >
              <UserCheck className="w-3.5 h-3.5 text-[#F0C419]" />
              <span>Login</span>
            </button>

            <button
              onClick={() => handleCTA('register')}
              id="header-signup-btn"
              className="
                flex items-center gap-1.5 px-4 py-2 rounded-lg
                text-xs font-black text-[#14614C]
                bg-[#F0C419] hover:bg-[#FFD000]
                border-2 border-[#F0C419] hover:border-[#FFD000]
                shadow-[0_2px_14px_rgba(240,196,25,0.35)]
                hover:shadow-[0_4px_20px_rgba(240,196,25,0.55)]
                hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sign Up Free</span>
            </button>
          </div>

          {/* ── Mobile: mini CTA + Hamburger ── */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Sign Up visible on sm */}
            <button
              onClick={() => handleCTA('register')}
              className="
                sm:flex hidden items-center gap-1 px-3 py-1.5 rounded-lg
                text-[11px] font-black text-[#14614C]
                bg-[#F0C419] hover:bg-[#FFD000]
                border border-[#F0C419]
                transition-all duration-200
              "
            >
              <Sparkles className="w-3 h-3" />
              <span>Sign Up</span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(v => !v)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="
                p-2 rounded-lg
                bg-white/8 hover:bg-white/14
                border border-white/15
                text-white transition-colors duration-200
              "
            >
              {mobileMenuOpen
                ? <X className="w-5 h-5" />
                : <Menu className="w-5 h-5 text-[#F0C419]" />
              }
            </button>
          </div>

        </div>
      </header>

      {/* ═══════════════════════════════════════════════
          MOBILE DRAWER — full-screen slide-in from right
      ════════════════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300 lg:hidden
          ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        className={`
          fixed top-0 right-0 z-50 h-full w-[min(320px,90vw)]
          bg-[#0c3d2e] border-l border-white/10
          shadow-[−8px_0_40px_rgba(0,0,0,0.5)]
          flex flex-col
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <LotusBrandLogo size="sm" showSubtitle={false} badge="" href="/" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-lg bg-white/8 hover:bg-white/14 border border-white/10 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.label}
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: mobileMenuOpen ? `${i * 35}ms` : '0ms' }}
              className={`
                flex items-center justify-between
                px-4 py-3 rounded-xl
                text-[13px] font-medium text-slate-200
                hover:text-[#F0C419] hover:bg-white/6
                border border-transparent hover:border-white/10
                transition-all duration-200
                ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
              `}
            >
              <span>{link.label}</span>
              {link.badge
                ? <BadgePill type={link.badgeType!} label={link.badge} />
                : <ChevronDown className="w-3.5 h-3.5 text-slate-500 -rotate-90" />
              }
            </Link>
          ))}
        </nav>

        {/* CTA Footer */}
        <div className="px-4 pb-6 pt-4 border-t border-white/10 space-y-2.5">
          <button
            onClick={() => { setMobileMenuOpen(false); handleCTA('register'); }}
            className="
              w-full flex items-center justify-center gap-2
              py-3 rounded-xl
              text-sm font-black text-[#14614C]
              bg-[#F0C419] hover:bg-[#FFD000]
              shadow-[0_2px_14px_rgba(240,196,25,0.35)]
              transition-all duration-200
            "
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Get WhatsApp ID</span>
          </button>

          <button
            onClick={() => { setMobileMenuOpen(false); handleCTA('login'); }}
            className="
              w-full flex items-center justify-center gap-2
              py-3 rounded-xl
              text-sm font-semibold text-slate-200
              bg-white/8 hover:bg-white/14
              border border-white/15
              transition-all duration-200
            "
          >
            <UserCheck className="w-4 h-4 text-[#F0C419]" />
            <span>Existing User Login</span>
          </button>

          {/* Trust badge */}
          <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit Encrypted Platform</span>
          </div>
        </div>
      </div>
    </>
  );
};

/* ─────────────────────────────
   Reusable badge pill
───────────────────────────── */
function BadgePill({ type, label }: { type: 'live' | 'hot'; label: string }) {
  if (type === 'live') {
    return (
      <span className="
        inline-flex items-center gap-0.5
        text-[9px] font-bold tracking-wider
        px-1.5 py-0.5 rounded-full
        bg-red-500/15 text-red-400
        border border-red-500/30
      ">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
        {label}
      </span>
    );
  }
  return (
    <span className="
      text-[9px] font-bold tracking-wider
      px-1.5 py-0.5 rounded-full
      bg-[#F0C419]/15 text-[#F0C419]
      border border-[#F0C419]/30
    ">
      {label}
    </span>
  );
}
