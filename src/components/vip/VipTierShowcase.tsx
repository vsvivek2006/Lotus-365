"use client";
import React, { useState } from 'react';
import { Crown, Sparkles, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { AdaptiveImage } from '../common/AdaptiveImage';
import { OFFICIAL_WHATSAPP_URL } from '@/data/landingData';

interface VipTier {
  id: string;
  name: string;
  level: string;
  cardImage: string;
  cashback: string;
  withdrawalTime: string;
  concierge: string;
  limits: string;
  perks: string[];
}

const vipTiers: VipTier[] = [
  {
    id: 'bronze',
    name: 'Bronze Royalty',
    level: 'TIER 1',
    cardImage: '/images/vip/card-bronze.svg',
    cashback: '5.0%',
    withdrawalTime: 'Under 2 Minutes',
    concierge: 'Standard WhatsApp Support',
    limits: '₹10 Lakh / Day',
    perks: ['Instant WhatsApp ID Creation', '5% Weekly Net Loss Cashback', 'Full Cricket Exchange Access', '0% Banking Processing Fees'],
  },
  {
    id: 'silver',
    name: 'Silver Prestige',
    level: 'TIER 2',
    cardImage: '/images/vip/card-silver.svg',
    cashback: '6.5%',
    withdrawalTime: 'Under 90 Seconds',
    concierge: 'Priority Queue Assistance',
    limits: '₹25 Lakh / Day',
    perks: ['6.5% Weekly Turnover Cashback', 'Fast-Track Withdrawal Queue', 'Higher Exchange Depth Matching', 'Dedicated Birthday Gift Bonuses'],
  },
  {
    id: 'gold',
    name: 'Gold Elite',
    level: 'TIER 3',
    cardImage: '/images/vip/card-gold.svg',
    cashback: '8.0%',
    withdrawalTime: 'Under 60 Seconds',
    concierge: 'Dedicated Senior Host',
    limits: '₹50 Lakh / Day',
    perks: ['8% Automated Loss Cashback', 'Private WhatsApp Relationship Manager', 'Exclusive High-Stakes Casino Tables', 'Custom Deposit Ceilings on Request'],
  },
  {
    id: 'platinum',
    name: 'Platinum Sovereign',
    level: 'TIER 4',
    cardImage: '/images/vip/card-platinum.svg',
    cashback: '9.0%',
    withdrawalTime: 'Under 45 Seconds',
    concierge: 'Senior VIP Desk Manager',
    limits: '₹1 Crore / Day',
    perks: ['9% Top-Tier Cashback Rebates', 'Sub-45s Automated Bank Disbursal', 'Zero Commission on Select Cricket Markets', 'Invitation to Annual Grand Finals Luxury Suites'],
  },
  {
    id: 'black',
    name: 'VIP Black Card',
    level: 'ULTRA ELITE',
    cardImage: '/images/vip/card-black.svg',
    cashback: '10.0%',
    withdrawalTime: 'Instant Sub-30s',
    concierge: 'Personal Operations Director',
    limits: 'Unlimited / Custom',
    perks: ['10% Uncapped Weekly Rebates', 'Private Multi-Crore Liquidity Allocation', 'Direct Phone Call Concierge Access', 'Bespoke Private Aviation & Match Hospitality'],
  },
];

export const VipTierShowcase: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>('gold');
  const selectedTier = vipTiers.find((t) => t.id === selectedTierId) || vipTiers[2];

  const handleApplyVip = () => {
    const text = encodeURIComponent(
      `Hi Lotus365, I want to inquire about qualifying for the ${selectedTier.name} (${selectedTier.level}) status.`
    );
    window.open(`${OFFICIAL_WHATSAPP_URL}&text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl text-slate-800">
      {/* Tier Switcher Strip */}
      <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-amber-500" />
          <span className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider whitespace-nowrap">
            VIP Loyalty Tiers
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {vipTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTierId(tier.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedTierId === tier.id
                  ? 'bg-emerald-600 text-white shadow-xs font-black'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {tier.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Showcase Panel */}
      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Card Visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:border-emerald-500/50 transition-all group">
              <AdaptiveImage
                src={selectedTier.cardImage}
                alt={`Lotus365 ${selectedTier.name} Card`}
                aspectRatio="16/10"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                overlayBadge={selectedTier.level}
              />
            </div>
            <span className="text-xs text-slate-500 mt-3 font-mono">
              Bespoke NFC Physical Card issued to Gold+ members
            </span>
          </div>

          {/* Right Column: Perks & Key Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> {selectedTier.level} PRIVILEGES
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{selectedTier.name}</h3>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-semibold block">Weekly Cashback</span>
                <span className="text-xl font-black text-emerald-700 font-mono">{selectedTier.cashback}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-semibold block">Cashout Speed</span>
                <span className="text-xl font-black text-slate-900 font-mono">{selectedTier.withdrawalTime}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-500 uppercase font-semibold block">Daily Limit</span>
                <span className="text-xl font-black text-amber-600 font-mono">{selectedTier.limits}</span>
              </div>
            </div>

            {/* Perks List */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Exclusive Tier Entitlements:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                {selectedTier.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concierge Level & CTA */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Account Manager</span>
                <span className="font-bold text-slate-900">{selectedTier.concierge}</span>
              </div>

              <button
                onClick={handleApplyVip}
                className="emerald-pill-btn w-full sm:w-auto !py-3 !px-8 text-xs sm:text-sm font-black shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-current text-amber-300" />
                <span>Inquire About {selectedTier.name}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

