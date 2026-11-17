"use client";

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  MessageCircle,
  Search,
  ChevronDown,
  Zap,
  Crown,
  Sparkles,
  Flame,
  ArrowRight,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL, getWhatsAppUrl } from '../data/landingData';
import Image from 'next/image';

interface HeaderProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

const navLinks = [
  { label: 'Home', href: '/', active: true, children: null },
  {
    label: 'Sports',
    href: '/sportsbook',
    hasLiveDot: true,
    children: [
      { label: 'Cricket Exchange', href: '/cricket-exchange', badge: 'LIVE IN-PLAY' },
      { label: 'Football Leagues', href: '/football-betting', badge: 'UCL' },
      { label: 'IPL 2026 Specials', href: '/ipl-betting', badge: 'HOT' },
      { label: 'Tennis Grand Slams', href: '/tennis-betting' },
      { label: 'Pro Kabaddi', href: '/kabaddi-betting' },
    ],
  },
  { label: 'Live Scores', href: '/live-scores', children: null },
  {
    label: 'Live Casino',
    href: '/live-casino',
    badgeText: '1,000+',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
    children: [
      { label: 'Live Casino Lobby', href: '/live-casino' },
      { label: 'Teen Patti Live Dealer', href: '/teen-patti' },
      { label: 'European Roulette', href: '/roulette' },
      { label: 'Andar Bahar', href: '/andar-bahar' },
      { label: 'Live Blackjack', href: '/blackjack' },
      { label: 'Baccarat Tables', href: '/baccarat' },
    ],
  },
  {
    label: 'Aviator',
    href: '/aviator-game',
    badgeText: 'HOT 100x',
    badgeClass: 'bg-red-100 text-red-600 border-red-200 animate-pulse',
    children: [
      { label: 'Spribe Aviator', href: '/aviator-game', badge: 'HOT' },
      { label: 'Crash Radar', href: '/crash-games' },
      { label: 'Casino 3D Slots', href: '/casino-slots' },
      { label: 'Color Prediction', href: '/color-prediction' },
    ],
  },
  { label: 'News & Guides', href: '/blog', children: null },
  {
    label: 'VIP Club',
    href: '/vip-club',
    isVip: true,
    children: null,
  },
];

export const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleCTA = () => {
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

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 140);
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          ULTRA-MODERN GLASSMORPHIC HEADER (Premier Gaming Grade)
      ══════════════════════════════════════════════════════════════════ */}
      <header
        className={`
          sticky top-0 z-50 bg-white/95 backdrop-blur-xl transition-all duration-300
          ${
            isScrolled
              ? 'shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-slate-200/90 py-1'
              : 'border-b border-slate-100 py-2'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px] gap-4">

            {/* ── Brand Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              title="Lotus365 Official Website"
            >
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 via-[#047857] to-[#064e3b] p-0.5 shadow-md shadow-emerald-700/20 group-hover:shadow-emerald-500/40 transition-all flex items-center justify-center">
                <Image
                  src="/lotus-logo.png"
                  alt="Lotus365 Logo"
                  width={26}
                  height={26}
                  className="object-contain drop-shadow"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[1.35rem] font-black text-slate-900 tracking-tight leading-none">
                    Lotus
                  </span>
                  <span className="text-[1.35rem] font-black text-emerald-600 tracking-tight leading-none">
                    365
                  </span>
                  <span className="ml-1 text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200/80 leading-none">
                    VIP
                  </span>
                </div>
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 leading-none mt-1">
                  Official Exchange
                </span>
              </div>
            </Link>

            {/* ── Modern Segmented Navigation ── */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-1 flex-1 justify-center"
            >
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
                  onMouseLeave={() => link.children && handleDropdownLeave()}
                >
                  <Link
                    href={link.href}
                    className={`
                      flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-bold transition-all duration-150 relative
                      ${
                        link.active
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/70 shadow-2xs'
                          : link.isVip
                          ? 'text-amber-800 hover:text-amber-900 hover:bg-amber-50 font-black'
                          : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-100/70'
                      }
                    `}
                  >
                    {link.isVip && <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-500/30" />}
                    
                    {link.hasLiveDot && (
                      <span className="flex h-1.5 w-1.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                    )}

                    <span>{link.label}</span>

                    {'badgeText' in link && link.badgeText && (
                      <span
                        className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded-full border leading-tight ${link.badgeClass}`}
                      >
                        {link.badgeText}
                      </span>
                    )}

                    {link.children && (
                      <ChevronDown
                        className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                          openDropdown === link.label ? 'rotate-180 text-emerald-600' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.children && openDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-2 w-60 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-fadeIn"
                      onMouseEnter={() => handleDropdownEnter(link.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between px-3.5 py-2.5 text-[13px] font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all rounded-xl group"
                        >
                          <span className="group-hover:translate-x-0.5 transition-transform">
                            {child.label}
                          </span>
                          {'badge' in child && child.badge && (
                            <span
                              className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${
                                child.badge === 'LIVE IN-PLAY'
                                  ? 'bg-red-50 text-red-600 border border-red-200 animate-pulse'
                                  : 'bg-amber-50 text-amber-700 border border-amber-200'
                              }`}
                            >
                              {child.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Desktop Right Actions (Search, WhatsApp Status & High-Impact Get ID) ── */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              {/* Keyboard-style Quick Search Pill */}
              <Link
                href="/sportsbook"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 hover:bg-slate-200/70 border border-slate-200/80 text-slate-500 hover:text-slate-800 text-xs font-medium transition-all"
                title="Search Matches & Casino"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden xl:inline text-[11px]">Search...</span>
                <kbd className="hidden xl:inline px-1.5 py-0.5 text-[9px] font-mono bg-white rounded border border-slate-200 text-slate-400">
                  ⌘K
                </kbd>
              </Link>

              {/* WhatsApp Concierge Pill */}
              <a
                href={OFFICIAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-extrabold text-xs transition-all border border-[#25D366]/30 shadow-2xs"
                title="1-Tap WhatsApp Support"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                <MessageCircle className="w-3.5 h-3.5 fill-current text-[#25D366]" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              {/* Primary High-Impact CTA: Get ID Button */}
              <button
                onClick={handleCTA}
                id="header-get-id-btn"
                className="
                  group relative overflow-hidden flex items-center gap-2 px-6 py-2 rounded-full
                  bg-gradient-to-r from-[#25D366] via-emerald-500 to-[#047857] hover:from-[#20ba5a] hover:to-emerald-600
                  text-white text-xs font-black uppercase tracking-wider
                  shadow-[0_2px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.6)]
                  transition-all duration-200 cursor-pointer border border-white/20
                "
              >
                <Zap className="w-3.5 h-3.5 fill-current text-yellow-300" />
                <span>Get ID</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* ── Mobile: Get ID + Hamburger ── */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={handleCTA}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-sm transition-all cursor-pointer"
              >
                Get ID
              </button>
              <button
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE SLIDE-OVER DRAWER
      ══════════════════════════════════════════════════════════════════ */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`
          fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        className={`
          fixed top-0 right-0 z-50 h-full w-[min(320px,88vw)]
          bg-white border-l border-slate-100
          shadow-[-8px_0_40px_rgba(0,0,0,0.12)]
          flex flex-col
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
              <Image
                src="/lotus-logo.png"
                alt="Lotus365"
                width={22}
                height={22}
                className="object-contain"
              />
            </div>
            <span className="font-black text-slate-900 text-base">
              Lotus<span className="text-emerald-600">365</span>
            </span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[14px] font-bold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all"
            >
              <div className="flex items-center gap-2">
                {link.isVip && <Crown className="w-4 h-4 text-amber-500" />}
                <span>{link.label}</span>
              </div>
              {link.children && <ChevronDown className="w-3.5 h-3.5 text-slate-400 -rotate-90" />}
            </Link>
          ))}
        </nav>

        <div className="px-4 pb-8 pt-4 border-t border-slate-100 space-y-2.5">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleCTA();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-extrabold shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current text-white" />
            <span>Get ID on WhatsApp</span>
          </button>
          <p className="text-center text-xs text-slate-400">🔒 Official Licensed Gaming Concierge</p>
        </div>
      </div>
    </>
  );
};
