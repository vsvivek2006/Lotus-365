import React from 'react';
import { Smartphone, Lock, UserCheck, Crown, Trophy, Lightbulb, ShieldCheck } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface HowItWorksProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onOpenAuth }) => {
  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const GUIDE_STEPS = [
    {
      stepNumber: '1',
      title: 'Quick 1-Tap Access on Any Phone',
      icon: Smartphone,
      bullets: [
        'Simply tap your Lotus365 bookmark or open the site directly in Chrome or Safari on your phone or computer.',
        'The signature Lotus365 Blue platform opens instantly with smooth 60 FPS graphics and real-time live odds.',
      ],
    },
    {
      stepNumber: '2',
      title: 'Direct WhatsApp Concierge',
      icon: Lock,
      bullets: [
        'Tap the Lotus365 Login or Sign Up button to open an encrypted chat with your dedicated 24/7 account manager.',
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
        'As you play, connect with your personal VIP relationship manager for higher limits and exclusive rewards.',
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
    <section id="quick-guide" className="quick-guide-section py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-bold text-[#F0C419] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Fast Player Onboarding</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            How It Works: Getting Started on Lotus365 in 3 Easy Steps
          </h2>

          <p className="text-white/85 text-sm sm:text-base leading-relaxed">
            Joining <strong className="text-white">Lotus365</strong> is effortless and takes less than 30 seconds. No endless verification queues, no complicated paperwork — just direct, personal service on WhatsApp. Here is how you can jump in right now:
          </p>
        </div>

        {/* 2-Column Guide Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          {/* Left Column: Numbered Guide Steps */}
          <div className="lg:col-span-7 space-y-5">
            <ol className="space-y-4 list-none p-0 m-0">
              {GUIDE_STEPS.map((step) => {
                const IconComponent = step.icon;
                return (
                  <li
                    key={step.stepNumber}
                    className="p-5 rounded-2xl bg-black/20 border border-white/15 hover:border-[#F0C419]/40 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="w-7 h-7 rounded-full bg-[#F0C419] text-[#14614C] font-black text-sm flex items-center justify-center shrink-0">
                        {step.stepNumber}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F0C419] transition-colors flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-[#F0C419]" />
                        <span>{step.title}</span>
                      </h3>
                    </div>

                    <ul className="pl-9 space-y-1.5 list-disc text-xs sm:text-sm text-white/80 marker:text-[#F0C419]">
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
            <div className="pro-tip flex items-start gap-3 shadow-lg">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <strong>Pro Tip:</strong> Bookmark <a href="/" className="text-[#14614C] underline font-bold">lotus365officialid.com</a> to your phone's home screen for 1-tap access anytime. Need guidance? Read our comprehensive <a href="/how-it-works" className="text-[#14614C] underline font-bold">Step-by-Step Guide</a> or explore our <a href="/vip-club" className="text-[#14614C] underline font-bold">VIP Privileges</a>.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dashboard Simulation Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-3xl bg-black/30 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/15 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Lotus365 Official Dashboard
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#F0C419] bg-black/40 px-2 py-0.5 rounded border border-white/10">
                  SECURE SSL
                </span>
              </div>

              {/* Simulated Balance & Fast Actions */}
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 mb-4">
                <div className="flex items-center justify-between mb-1 text-xs text-white/70">
                  <span>Demo Wallet Balance</span>
                  <span className="text-emerald-400 font-bold">● Active</span>
                </div>
                <div className="text-2xl font-black text-[#F0C419] mb-3">₹25,480.00</div>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <button
                    onClick={handleWhatsApp}
                    className="py-2 px-3 rounded-lg bg-[#F0C419] text-[#14614C] font-bold hover:brightness-110 cursor-pointer"
                  >
                    Instant Deposit
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="py-2 px-3 rounded-lg bg-white/10 text-white font-bold hover:bg-white/20 cursor-pointer"
                  >
                    Fast Withdraw
                  </button>
                </div>
              </div>

              {/* Popular Shortcuts */}
              <div className="space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/20 border border-white/10 text-white/90">
                  <span className="flex items-center gap-2">🏏 Live Cricket In-Play</span>
                  <span className="text-emerald-400 font-bold">14 Active</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/20 border border-white/10 text-white/90">
                  <span className="flex items-center gap-2">🎰 Teen Patti &amp; Roulette</span>
                  <span className="text-[#F0C419] font-bold">100+ Tables</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/20 border border-white/10 text-white/90">
                  <span className="flex items-center gap-2">🚀 Aviator High Multiplier</span>
                  <span className="text-red-400 font-bold">98.5% RTP</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={handleWhatsApp}
                  className="cta-button py-2.5 text-xs font-black"
                >
                  <span>Lotus365 Login</span>
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="cta-button-outline py-2.5 text-xs font-bold text-center justify-center"
                >
                  <span>Sign Up Free</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
