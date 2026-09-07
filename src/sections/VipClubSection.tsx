import React, { useState } from 'react';
import { VIP_TIERS } from '../data/landingData';
import { Crown, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';


interface VipClubProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const VipClubSection: React.FC<VipClubProps> = ({ onOpenAuth }) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('gold');

  const selectedTier = VIP_TIERS.find((t) => t.id === selectedTierId) || VIP_TIERS[2];

  return (
    <section id="vip" className="py-20 bg-[#14614C] border-t border-white/15 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#F0C419]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-bold text-[#F0C419] uppercase tracking-wider mb-3">
            <Crown className="w-3.5 h-3.5 text-[#F0C419]" />
            <span>Exclusive Membership Privilege</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Lotus365 <span className="text-[#F0C419]">VIP Black Card Club</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Reserved for high-rollers and dedicated players who demand elite service. Unlock sub-2-minute cashouts, unlimited betting limits, weekly loss cashback up to 10%, and a dedicated WhatsApp host.
          </p>
        </div>

        {/* Interactive VIP Tier Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {VIP_TIERS.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTierId(tier.id)}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedTierId === tier.id
                  ? 'bg-[#F0C419] text-[#14614C] shadow-lg'
                  : 'bg-black/25 hover:bg-black/40 text-white/90 border border-white/15'
              }`}
            >
              <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{tier.name}</span>
              {tier.isPopular && (
                <span className="text-[9px] sm:text-[10px] px-1 py-0.2 rounded bg-black/40 text-[#F0C419] font-bold">
                  POPULAR
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active VIP Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-black/30 border border-white/20 shadow-2xl relative overflow-hidden">

            {/* Top Right Decorative Watermark */}
            <div className="absolute -right-8 -top-8 text-white/5 pointer-events-none">
              <Crown className="w-56 h-56" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Black Card Visualization */}
              <div className="lg:col-span-5">
                <div className="w-full aspect-[1.6/1] rounded-2xl bg-gradient-to-br from-[#241F14] via-[#151719] to-[#0A0C0E] p-5 border border-brand-gold/50 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🪷</span>
                      <span className="font-display font-extrabold text-sm text-white tracking-widest">
                        LOTUS<span className="text-brand-gold">365</span>
                      </span>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold">
                      {selectedTier.level}
                    </span>
                  </div>

                  <div className="my-auto">
                    <div className="font-display font-black text-xl text-white tracking-wider">
                      {selectedTier.name}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {selectedTier.tagline}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                    <span>VIP ID: LT-8849-XXXX</span>
                    <span className="text-brand-emerald font-bold">ACTIVE STATUS</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Perks & Key Specs */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Weekly Cashback</div>
                    <div className="font-display font-extrabold text-lg text-brand-gold">{selectedTier.cashback}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Withdrawal Time</div>
                    <div className="font-display font-extrabold text-lg text-brand-emerald">{selectedTier.withdrawalSpeed}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Reload Bonus</div>
                    <div className="font-display font-bold text-sm text-white">{selectedTier.depositBonus}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Daily Volume</div>
                    <div className="font-display font-bold text-sm text-white">{selectedTier.limits}</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {selectedTier.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onOpenAuth('register')}
                    className="cta-button w-full sm:w-auto py-2.5 px-5 text-xs font-black flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>Request Instant VIP Upgrade</span>
                  </button>

                  <button
                    onClick={() => onOpenAuth('login')}
                    className="cta-button-outline w-full sm:w-auto py-2.5 px-5 text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <span>Lotus365 VIP Login</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
