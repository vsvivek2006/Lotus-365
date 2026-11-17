"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Crown, Sparkles, ArrowRight, MessageCircle, ShieldCheck, Zap, Star, Gift, Headphones, Trophy } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL, VIP_TIERS } from '../data/landingData';

interface VipClubProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const VipClubSection: React.FC<VipClubProps> = ({ onOpenAuth }) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('platinum');

  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const selectedTier = VIP_TIERS.find((t) => t.id === selectedTierId) || VIP_TIERS[0];

  const vipPillars = [
    {
      title: 'Exclusive Rewards',
      desc: 'High-roller tailored cash bonuses, bespoke luxury perks, and seasonal gifts.',
      emoji: '💎',
      badge: 'ELITE STATUS',
    },
    {
      title: 'Dedicated Support',
      desc: '24/7 personal WhatsApp VIP concierge — direct human assistance, zero queues.',
      emoji: '🎧',
      badge: 'DIRECT DESK',
    },
    {
      title: 'Special Bonuses',
      desc: 'Flat 10% weekly loss cashback rebate credited every Monday, 0 wagering attached.',
      emoji: '🎁',
      badge: '10% REBATE',
    },
    {
      title: 'Higher Limits',
      desc: 'Uncapped table limits, massive exchange liquidity, and 2-min fast-track cashouts.',
      emoji: '⭐',
      badge: 'NO CAP',
    },
  ];

  return (
    <section id="vip" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Top VIP Banner (Direct from Mockup 1 & 6) ── */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#065f46] border border-amber-400/40 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-white">
          {/* Ambient Luxury Lighting Glow (Zero Image Ghosting) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-16 -left-16 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 right-1/4 w-96 h-48 bg-emerald-300/15 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#032318]/50 via-transparent to-[#042419]/60" />
          </div>

          <div className="flex items-center gap-5 relative z-10">
            {/* 3D Gold Crown Emblem */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl border border-amber-400/50 shrink-0 bg-gradient-to-br from-[#064e3b] to-[#047857]">
              <Image
                src="/images/vip/vip_crown_pure.jpg"
                alt="VIP Crown"
                fill
                sizes="80px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_12px_rgba(240,196,25,0.4)] pointer-events-none" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 text-amber-300 border border-white/25 text-[11px] font-black uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Lotus365 VIP Club</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                More Play. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">More Rewards.</span>
              </h2>
              <p className="text-xs sm:text-sm text-emerald-50/90 mt-1 max-w-xl">
                Unlock exclusive perks, personal WhatsApp manager, 10% flat weekly cashback, and priority 2-minute cashouts.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto relative z-10">
            <Link
              href="/vip-club"
              className="gold-pill-btn !py-3.5 !px-8 !text-sm w-full md:w-auto text-center font-black shadow-lg hover:scale-105 transition-all"
            >
              <span>Explore VIP Club</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* ── 4 VIP Benefits Cards Grid (Direct from Mockup) ── */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">VIP Benefits &amp; Privileges</h3>
              <p className="text-xs text-slate-500">Structured for transparency and player satisfaction</p>
            </div>
            <Link
              href="/vip-club"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1"
            >
              <span>View All Tiers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {vipPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      {p.badge}
                    </span>
                    <span className="text-2xl">{p.emoji}</span>
                  </div>
                  <h4 className="font-extrabold text-base text-slate-900 mb-1.5">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                  <span>Included</span>
                  <span className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 text-xs font-black">
                    ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Interactive VIP Tier Inspector ── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Tier Breakdown</div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">Compare VIP Levels</h3>
            </div>

            {/* Tier Switcher Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {VIP_TIERS.map((tier) => (
                <button type="button"
                  key={tier.id}
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedTierId === tier.id
                      ? 'bg-emerald-600 text-white shadow-xs font-black'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] text-slate-500 mb-1">Weekly Cashback</div>
              <div className="font-mono text-lg font-black text-amber-600">{selectedTier.cashback}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] text-slate-500 mb-1">Withdrawal Speed</div>
              <div className="font-mono text-lg font-black text-emerald-700">{selectedTier.withdrawalSpeed}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] text-slate-500 mb-1">Deposit Bonus</div>
              <div className="font-bold text-sm text-slate-900">{selectedTier.depositBonus}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] text-slate-500 mb-1">Table Limits</div>
              <div className="font-bold text-sm text-slate-900">{selectedTier.limits}</div>
            </div>
          </div>

          {/* Join VIP Banner CTA */}
          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 text-center sm:text-left">
              Ready to elevate your gaming experience with Black Card status?
            </div>
            <button type="button"
              onClick={handleWhatsApp}
              className="emerald-pill-btn !py-2.5 !px-6 text-xs font-bold shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact VIP Host on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
