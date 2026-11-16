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
  Shield,
  Sparkles,
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
    children: [
      { label: 'Cricket Exchange', href: '/cricket-exchange', badge: 'LIVE' },
      { label: 'Football Betting', href: '/football-betting' },
      { label: 'IPL 2026', href: '/ipl-betting', badge: 'HOT' },
      { label: 'Kabaddi', href: '/kabaddi-betting' },
      { label: 'Tennis', href: '/tennis-betting' },
    ],
  },
  { label: 'Live Scores', href: '/live-scores', children: null },
  {
    label: 'Casino',
    href: '/live-casino',
    children: [
      { label: 'Live Casino Tables', href: '/live-casino' },
      { label: 'Teen Patti Live', href: '/teen-patti' },
      { label: 'European Roulette', href: '/roulette' },
      { label: 'Andar Bahar', href: '/andar-bahar' },
    ],
  },
  {
    label: 'Aviator & Games',
    href: '/aviator-game',
    children: [
      { label: 'Spribe Aviator', href: '/aviator-game', badge: 'HOT' },
      { label: 'Crash Games', href: '/crash-games' },
      { label: 'Casino Slots', href: '/casino-slots' },
      { label: 'Color Prediction', href: '/color-prediction' },
    ],
  },
  { label: 'News', href: '/blog', children: null },
  { label: 'Guides', href: '/guides', children: null },
  { label: 'VIP', href: '/vip-club', children: null },
];

export const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
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
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      {/* ══════════════════════════════════════════════
          MODERN SENIOR-DESIGNER NAVBAR (Crisp & Glassy)
      ══════════════════════════════════════════════ */}
      <header
        className={`
          sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300
          ${
            isScrolled
              ? 'shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-slate-200/90 py-1'
              : 'border-b border-slate-100 py-1.5'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[62px] gap-4">

            {/* ── Modern Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              title="Lotus365 Official Website"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-[#047857] flex items-center justify-center shadow-md group-hover:shadow-emerald-200 transition-all">
                <Image
                  src="/lotus-logo.png"
                  alt="Lotus365 Logo"
                  width={28}
                  height={28}
                  className="object-contain drop-shadow"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[1.3rem] font-black text-slate-900 tracking-tight leading-none">
                    Lotus
                  </span>
                  <span className="text-[1.3rem] font-black text-emerald-600 tracking-tight leading-none">
                    365
                  </span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 leading-none mt-0.5">
                  Official India
                </span>
              </div>
            </Link>

            {/* ── Desktop Modern Navigation ── */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-1 flex-1 justify-center"
            >
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
                  onMouseLeave={() => link.children && handleDropdownLeave()}
                >
                  <Link
                    href={link.href}
                    className={`
                      flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] font-bold transition-all duration-150
                      ${
                        link.active
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-2xs'
                          : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                      }
                    `}
                  >
                    <span>{link.label}</span>
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
                      className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn"
                      onMouseEnter={() => handleDropdownEnter(link.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between px-4 py-2.5 text-[13px] font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-colors mx-1.5 rounded-xl"
                        >
                          <span>{child.label}</span>
                          {'badge' in child && child.badge && (
                            <span
                              className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${
                                child.badge === 'LIVE'
                                  ? 'bg-red-100 text-red-600 border border-red-200'
                                  : 'bg-amber-100 text-amber-700 border border-amber-200'
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

            {/* ── Desktop Right Actions (Search, WhatsApp Pill & Get ID) ── */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              {/* Search Icon */}
              <Link
                href="/sportsbook"
                className="p-2 rounded-full text-slate-500 hover:text-emerald-700 hover:bg-slate-100 transition-all"
                title="Search Games & Odds"
              >
                <Search className="w-4 h-4" />
              </Link>

              {/* WhatsApp Live Status Pill */}
              <a
                href={OFFICIAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs transition-all border border-[#25D366]/20"
                title="24/7 WhatsApp Concierge"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <MessageCircle className="w-3.5 h-3.5 fill-current text-[#25D366]" />
                <span className="hidden xl:inline">24/7 Support</span>
              </a>

              {/* Get ID CTA Button */}
              <button
                onClick={handleCTA}
                id="header-get-id-btn"
                className="
                  flex items-center gap-2 px-5 py-2 rounded-full
                  bg-gradient-to-r from-emerald-600 to-[#047857] hover:from-emerald-500 hover:to-emerald-600
                  text-white text-xs font-black uppercase tracking-wider
                  shadow-[0_2px_12px_rgba(4,120,87,0.35)] hover:shadow-[0_4px_16px_rgba(4,120,87,0.45)]
                  transition-all duration-200 cursor-pointer border border-white/20
                "
              >
                <Zap className="w-3.5 h-3.5 fill-current text-yellow-300" />
                <span>Get ID</span>
              </button>
            </div>

            {/* ── Mobile: Get ID + Hamburger ── */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={handleCTA}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-sm transition-all cursor-pointer"
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

      {/* ══════════════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════════════ */}
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
          fixed top-0 right-0 z-50 h-full w-[min(310px,88vw)]
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
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[14px] font-bold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all"
            >
              <span>{link.label}</span>
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
          <p className="text-center text-xs text-slate-400">🔒 100% Verified Official Concierge</p>
        </div>
      </div>
    </>
  );
};
