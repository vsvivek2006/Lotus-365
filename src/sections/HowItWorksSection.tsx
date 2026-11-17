"use client";
import React from 'react';
import Link from 'next/link';
import { Smartphone, Lock, UserCheck, Crown, Trophy, ArrowRight, ShieldCheck, Zap, Lightbulb } from 'lucide-react';

interface HowItWorksProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onOpenAuth }) => {
  const GUIDE_STEPS = [
    {
      stepNumber: '1',
      title: 'Quick 1-Tap Access on Any Phone',
      icon: Smartphone,
      bullets: [
        'Open the site directly in Chrome or Safari on your phone or computer with smooth 60 FPS graphics.',
        'Access live cricket in-play odds, casino tables, and crash games instantly without heavy downloads.',
      ],
    },
    {
      stepNumber: '2',
      title: 'Direct WhatsApp Concierge',
      icon: Lock,
      bullets: [
        'Tap the Lotus365 Get ID button to open an encrypted chat with your dedicated 24/7 account manager.',
        'Zero complicated registration forms — your account is verified in real-time by a real human support specialist.',
      ],
    },
    {
      stepNumber: '3',
      title: 'Instant Verified Player ID',
      icon: UserCheck,
      bullets: [
        'Receive your private username and password directly on WhatsApp in under 30 seconds.',
        'Your demo or real balance is instantly credited with your 100% first deposit welcome bonus.',
      ],
    },
    {
      stepNumber: '4',
      title: 'Lotus365 VIP Club Perks',
      icon: Crown,
      bullets: [
        'Connect with your personal VIP relationship manager for higher table limits and exclusive rewards.',
        'Enjoy lightning-fast 60-second cashouts, dedicated IMPS priority channels, and 10% weekly loss cashback.',
      ],
    },
    {
      stepNumber: '5',
      title: 'Jump Right into the Action',
      icon: Trophy,
      bullets: [
        'Access live cricket exchange matches, live dealer Teen Patti, and Aviator all in one unified lobby.',
        'When you win, request your withdrawal on WhatsApp and receive your funds via UPI within 2 minutes flat.',
      ],
    },
  ];

  return (
    <section id="quick-guide" className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Fast Player Onboarding</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            How It Works: Getting Started in <span className="text-emerald-700">5 Simple Steps</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Joining <strong className="text-slate-900">Lotus365</strong> is effortless and takes less than 30 seconds. No endless verification queues, no complicated paperwork — just direct, personal service on WhatsApp.
          </p>
        </div>

        {/* 2-Column Guide Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Left Column: Numbered Guide Steps */}
          <div className="lg:col-span-7 space-y-4">
            <ol className="space-y-4 list-none p-0 m-0">
              {GUIDE_STEPS.map((step) => {
                const IconComponent = step.icon;
                return (
                  <li
                    key={step.stepNumber}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                        {step.stepNumber}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-emerald-600" />
                        <span>{step.title}</span>
                      </h3>
                    </div>

                    <ul className="pl-11 space-y-1.5 list-disc text-xs sm:text-sm text-slate-600 marker:text-emerald-500">
                      {step.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ol>

            {/* Signature Pro Tip Box */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 shadow-sm">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <strong>Pro Tip:</strong> Bookmark <Link href="/" className="text-emerald-700 underline font-bold" title="lotusplay365.shop">lotusplay365.shop</Link> to your phone's home screen for 1-tap access anytime. Need guidance? Read our <Link href="/how-it-works" className="text-emerald-700 underline font-bold">Step-by-Step Guide</Link> or explore our <Link href="/vip-club" className="text-emerald-700 underline font-bold">VIP Privileges</Link>.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dashboard Simulation Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl text-slate-900">
              
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Lotus365 Official Dashboard
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                  SECURE SSL
                </span>
              </div>

              {/* Simulated Balance & Fast Actions */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 mb-4">
                <div className="flex items-center justify-between mb-1 text-xs text-slate-500">
                  <span>Demo Wallet Balance</span>
                  <span className="text-emerald-600 font-bold">● Active</span>
                </div>
                <div className="font-mono text-2xl font-black text-slate-900 mb-3">
                  ₹ 10,000.00
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button type="button"
                    onClick={() => onOpenAuth('register')}
                    className="py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-sm cursor-pointer text-center"
                  >
                    + Deposit Now
                  </button>
                  <button type="button"
                    onClick={() => onOpenAuth('register')}
                    className="py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold border border-slate-200 transition-all shadow-sm cursor-pointer text-center"
                  >
                    Instant Cashout
                  </button>
                </div>
              </div>

              {/* Fast 3-Step Summary */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] flex items-center justify-center">✓</span>
                  <span>Instant OTP-free WhatsApp Access</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] flex items-center justify-center">✓</span>
                  <span>Direct UPI (GPay, PhonePe, Paytm, IMPS)</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] flex items-center justify-center">✓</span>
                  <span>Zero Commission on Cricket Exchange</span>
                </div>
              </div>

              <button type="button"
                onClick={() => onOpenAuth('register')}
                className="w-full emerald-pill-btn !py-3.5 !text-sm font-black shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get WhatsApp ID in 30 Seconds</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
