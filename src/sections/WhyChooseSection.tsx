"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { KEY_FEATURES } from '../data/landingData';
import { Zap, TrendingUp, ShieldCheck, MessageCircle, ArrowRight, CheckCircle2, Award, Clock } from 'lucide-react';

interface WhyChooseProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const WhyChooseSection: React.FC<WhyChooseProps> = ({ onOpenAuth }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'trending-up':
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'message-circle':
      default:
        return <MessageCircle className="w-6 h-6 text-emerald-600" />;
    }
  };

  const BEST_OPTION_REASONS = [
    {
      title: 'Effortless 30-Second Access',
      description: 'Never jump through frustrating verification loops or complicated paperwork. Get your official verified WhatsApp ID in under 30 seconds.',
      linkHref: '/how-it-works',
      linkText: 'See How It Works →',
    },
    {
      title: 'India’s Largest Selection of Games',
      description: 'Peer-to-peer cricket exchange trading, IPL match markets, live dealer Teen Patti, Roulette, and Aviator Crash with thousands of live tables.',
      linkHref: '/cricket-exchange',
      linkText: 'Explore Cricket Markets →',
    },
    {
      title: 'Guaranteed Fund Security & Fast Payouts',
      description: 'All player wallets are protected with 256-bit bank-grade encryption. Enjoy lightning-fast 2-minute direct UPI and IMPS bank cashouts round the clock.',
      linkHref: '/how-to-withdraw',
      linkText: 'Withdrawal Guide →',
    },
    {
      title: 'Rewarding You Every Time You Play',
      description: 'Unlock 100% welcome bonus, weekly 10% loss cashback rebates every Monday, and dedicated 24/7 VIP relationship managers.',
      linkHref: '/vip-club',
      linkText: 'Discover VIP Club Perks →',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>The Lotus365 Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Why Players Across India Choose <span className="text-emerald-700">Lotus365</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            With hundreds of online platforms, why do over 500,000 players choose Lotus365 every single day? It all comes down to trust, lightning speed, and verified payouts:
          </p>
        </div>

        {/* 2-Column Core Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: 4 Reasons in Clean White Cards */}
          <div className="lg:col-span-7 space-y-4">
            {BEST_OPTION_REASONS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all flex items-start gap-4 group"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <Link
                    href={item.linkHref}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                  >
                    <span>{item.linkText}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Platform SLA Showcase (Vibrant Emerald Card, Zero Black) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#065f46] to-[#044e37] border border-emerald-500/40 text-center relative overflow-hidden shadow-xl text-white">
              
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-yellow-400 text-emerald-950 flex items-center justify-center shadow-lg font-black text-2xl">
                365
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                India's Trusted Sports Exchange
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-6">
                Over 500,000 active players trust Lotus365 daily for transparent odds, instant withdrawals, and dedicated VIP support.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <div className="text-2xl font-black text-yellow-300">0%</div>
                  <div className="text-[10px] text-emerald-100 font-semibold uppercase tracking-wider">Betting Commission</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <div className="text-2xl font-black text-yellow-300">&lt; 120s</div>
                  <div className="text-[10px] text-emerald-100 font-semibold uppercase tracking-wider">Direct UPI Cashout</div>
                </div>
              </div>

              <button
                onClick={() => onOpenAuth('register')}
                className="w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get Instant WhatsApp ID</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* 4 Feature SLA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {KEY_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-400 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    {getIcon(feature.icon)}
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-lg sm:text-xl text-emerald-700">
                      {feature.stat}
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-base text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                <span className="text-emerald-700">Verified Guarantee</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 text-emerald-600 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
