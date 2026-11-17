"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Zap, 
  MessageCircle, 
  TrendingUp, 
  Clock, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '@/data/landingData';

interface LotusPlatformGuideProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

const GUIDE_CARDS = [
  {
    icon: Sparkles,
    badge: 'Official Platform',
    title: 'What Is Lotus365?',
    desc: "Lotus365, available at lotusplay365.shop, is India's leading sports betting exchange and live casino platform. Built for cricket fans who want genuine exchange betting, Lotus 365 connects you directly with real-time market odds. Back favourites or lay underdogs with total market transparency.",
    linkHref: '/about',
    linkText: 'About Lotus365 →',
  },
  {
    icon: MessageCircle,
    badge: 'Fast Onboarding',
    title: 'Instant Lotus ID via WhatsApp',
    desc: 'Your Lotus ID is your gateway to everything Lotus365. Traditional sign-ups can take hours; here, your ID is activated instantly through WhatsApp. Once your account is created, you can log in to Lotus365 and immediately access cricket exchange markets and live casino tables.',
    linkHref: '/how-it-works',
    linkText: 'Get Lotus ID Guide →',
  },
  {
    icon: TrendingUp,
    badge: '0% Commission',
    title: 'Lotus Cricket Exchange',
    desc: 'The Lotus cricket exchange sits at the heart of the platform. Bet against other users on real-time odds across T20, ODI, and Test matches. With a 0% commission structure, every rupee of your winnings stays with you — a clear edge over conventional sportsbooks.',
    linkHref: '/cricket-exchange',
    linkText: 'Explore Cricket Markets →',
  },
  {
    icon: Zap,
    badge: '30-Sec Credit',
    title: 'Instant UPI Deposits',
    desc: 'Lotus365 keeps your momentum. Fund your account using PhonePe, Google Pay, Paytm, or IMPS and your balance is credited in as little as 30 seconds. Fast deposits mean you can react to live in-play cricket odds instantly.',
    linkHref: '/how-to-deposit',
    linkText: 'UPI Deposit Methods →',
  },
  {
    icon: Clock,
    badge: 'Guaranteed 2 Min',
    title: '2-Minute Cashouts',
    desc: 'Winning is only satisfying when you can access your money. Lotus365 processes withdrawals directly to your verified bank account or UPI handle within 2 minutes flat, keeping your liquidity completely accessible round the clock.',
    linkHref: '/how-to-withdraw',
    linkText: 'Withdrawal Proof & Guide →',
  },
  {
    icon: Lock,
    badge: '256-Bit SSL',
    title: 'Lotus365 Login & Access',
    desc: 'For secure access, always visit the official Lotus365 website at lotusplay365.shop. Whether placing a cricket bet, exploring 1,000+ live dealer casino games, or managing your Lotus ID, our official portal gives you a direct, safe route to your account.',
    linkHref: '/contact',
    linkText: '24/7 Official Concierge →',
  },
];

export const LotusPlatformGuide: React.FC<LotusPlatformGuideProps> = ({ onOpenAuth }) => {
  const handleAction = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="lotus365-guide" 
      className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden text-slate-900"
      aria-label="Lotus365 Official Platform & Betting Guide"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Guide &amp; Authority Hub</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Lotus365 Official: <span className="text-emerald-700">India&apos;s Leading Cricket Exchange</span> &amp; Gaming Platform
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about getting your verified <strong className="text-slate-900">Lotus ID</strong>, trading at 0% commission on the <strong className="text-slate-900">Lotus 365</strong> exchange, and enjoying instant 2-minute UPI cashouts.
          </p>
        </div>

        {/* 6-Card High-Relevance Semantic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {GUIDE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={card.linkHref}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{card.linkText}</span>
                  </Link>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#065f46] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-emerald-500/30">
          <div>
            <div className="text-base sm:text-lg font-black tracking-tight text-white">
              Ready to start playing on the official Lotus365 platform?
            </div>
            <div className="text-emerald-100 text-xs sm:text-sm">
              Get your personal Lotus ID on WhatsApp in 30 seconds with 100% welcome bonus.
            </div>
          </div>
          <button
            type="button"
            onClick={handleAction}
            className="emerald-pill-btn !py-2.5 !px-6 !text-sm whitespace-nowrap cursor-pointer flex items-center gap-2 shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Get WhatsApp ID Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
