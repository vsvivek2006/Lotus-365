import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, UserCheck, MessageCircle, ShieldCheck } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface HeaderProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Cricket Exchange', href: '/cricket-exchange', badge: 'LIVE' },
    { label: 'Live Casino', href: '/live-casino' },
    { label: 'Aviator Crash', href: '/aviator-game', badge: 'HOT' },
    { label: 'VIP Club', href: '/vip-club' },
    { label: 'Betting Tips', href: '/betting-tips' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'FAQs', href: '/faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 bg-[#14614C] backdrop-blur-md border-b border-white/10 shadow-lg ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-surface to-brand-card p-1.5 border border-brand-gold/30 shadow-gold-glow flex items-center justify-center group-hover:border-brand-gold transition-colors">
            {/* Lotus SVG Emblem */}
            <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow">
              <defs>
                <linearGradient id="lotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDE68A" />
                  <stop offset="50%" stopColor="#F5B738" />
                  <stop offset="100%" stopColor="#CF8508" />
                </linearGradient>
                <linearGradient id="lotusEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
              {/* Central Petal */}
              <path
                d="M50 12 C44 32, 34 50, 50 82 C66 50, 56 32, 50 12 Z"
                fill="url(#lotusGold)"
              />
              {/* Left Petal */}
              <path
                d="M32 32 C22 46, 26 64, 50 82 C34 70, 22 56, 32 32 Z"
                fill="url(#lotusEmerald)"
              />
              {/* Right Petal */}
              <path
                d="M68 32 C78 46, 74 64, 50 82 C66 70, 78 56, 68 32 Z"
                fill="url(#lotusEmerald)"
              />
              {/* Lower base leaves */}
              <path
                d="M20 54 C16 68, 28 80, 50 84 C32 82, 18 74, 20 54 Z"
                fill="url(#lotusGold)"
                opacity="0.85"
              />
              <path
                d="M80 54 C84 68, 72 80, 50 84 C68 82, 82 74, 80 54 Z"
                fill="url(#lotusGold)"
                opacity="0.85"
              />
            </svg>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-brand-emerald rounded-full border-2 border-brand-dark flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-lg sm:text-2xl tracking-wider text-white">
                LOTUS<span className="text-brand-gold">365</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand-gold/20 text-brand-gold border border-brand-gold/40">
                OFFICIAL
              </span>
            </div>
            <span className="hidden xs:inline-block text-[9px] sm:text-[10px] text-slate-300 font-medium tracking-wide">
              India's Premier Sports Exchange
            </span>
          </div>
        </a>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              {link.label}
              {link.badge && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                    link.badge === 'LIVE'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse'
                      : 'bg-brand-gold/20 text-brand-gold border border-brand-gold/40'
                  }`}
                >
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        {/* Desktop Quick Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={handleWhatsApp}
            className="px-4 py-2 rounded-lg text-xs font-bold text-white hover:text-[#F0C419] bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center gap-1.5"
            id="header-login-btn"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#F0C419]" />
            <span>Lotus365 Login</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="cta-button py-2 px-4 text-xs font-black"
            id="header-signup-btn"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#14614C]" />
            <span>Sign Up Free</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleWhatsApp}
            className="cta-button py-1.5 px-3 text-[11px] font-black"
          >
            <span>Sign Up</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-black/20 border border-white/15 text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#F0C419]" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-surface/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-brand-gold hover:bg-white/5 flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      link.badge === 'LIVE'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-brand-gold/20 text-brand-gold border border-brand-gold/30'
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsApp();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 text-center"
              >
                Existing User Login
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsApp();
                }}
                className="btn-gold-primary w-full py-2.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp ID</span>
              </button>
            </div>

            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Official 256-Bit Encrypted Platform</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
