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
    <section id="vip" className="py-16 sm:py-20 bg-gradient-to-b from-[#022319] via-[#043324] to-[#022319] border-t border-emerald-500/20 relative overflow-hidden text-white">
      {/* Golden Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Top VIP Banner (Direct from Mockup 1 & 6) ── */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#032318] via-[#074732] to-[#032318] border border-amber-400/30 shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Dissolved Luxury VIP Artwork Backdrop */}
          <div className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none">
            <Image
              src="/images/banners/vip_club_banner_feathered.jpg"
              alt="VIP Club Luxury Background"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="flex items-center gap-5 relative z-10">
            {/* 3D Gold Crown Emblem */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl border border-amber-400/50 shrink-0 bg-gradient-to-br from-[#03241b] to-[#021811]">
              <Image
                src="/images/vip/vip_crown_pure.jpg"
                alt="VIP Crown"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_12px_rgba(240,196,25,0.4)] pointer-events-none" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400/20 text-[#F0C419] border border-amber-400/40 text-[11px] font-black uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3 h-3 text-[#F0C419]" />
                <span>Lotus365 VIP Club</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                More Play. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">More Rewards.</span>
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 max-w-xl">
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
              <h3 className="text-lg sm:text-xl font-extrabold text-white">VIP Benefits &amp; Privileges</h3>
              <p className="text-xs text-white/60">Structured for transparency and player satisfaction</p>
            </div>
            <Link
              href="/vip-club"
              className="text-xs font-bold text-amber-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>View All Tiers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {vipPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white text-slate-900 border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
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
        <div className="p-6 sm:p-8 rounded-3xl bg-[#032318] border border-emerald-500/25 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">Tier Breakdown</div>
              <h3 className="text-lg sm:text-xl font-black text-white">Compare VIP Levels</h3>
            </div>

            {/* Tier Switcher Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {VIP_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedTierId === tier.id
                      ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                      : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
                  }`}
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
            <div className="p-3.5 rounded-xl bg-black/30 border border-white/10">
              <div className="text-[11px] text-white/60 mb-1">Weekly Cashback</div>
              <div className="font-mono text-lg font-black text-[#F0C419]">{selectedTier.cashback}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-black/30 border border-white/10">
              <div className="text-[11px] text-white/60 mb-1">Withdrawal Speed</div>
              <div className="font-mono text-lg font-black text-emerald-300">{selectedTier.withdrawalSpeed}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-black/30 border border-white/10">
              <div className="text-[11px] text-white/60 mb-1">Deposit Bonus</div>
              <div className="font-bold text-sm text-white">{selectedTier.depositBonus}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-black/30 border border-white/10">
              <div className="text-[11px] text-white/60 mb-1">Table Limits</div>
              <div className="font-bold text-sm text-white">{selectedTier.limits}</div>
            </div>
          </div>

          {/* Join VIP Banner CTA */}
          <div className="mt-6 pt-5 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/70 text-center sm:text-left">
              Ready to elevate your gaming experience with Black Card status?
            </div>
            <button
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
