"use client";
import React, { useState } from 'react';
import { Calculator, Scale, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '@/data/landingData';

export const InteractiveOddsCalculator: React.FC = () => {
  const [stake, setStake] = useState<number>(2000);
  const [odds, setOdds] = useState<number>(2.25);
  const [mode, setMode] = useState<'back' | 'lay'>('back');

  const validOdds = Math.max(1.01, odds || 1.01);
  const validStake = Math.max(1, stake || 1);

  const impliedProbability = parseFloat(((1 / validOdds) * 100).toFixed(1));
  const totalPayout = parseFloat((validStake * validOdds).toFixed(2));
  const netProfit = parseFloat((totalPayout - validStake).toFixed(2));
  const layLiability = parseFloat((validStake * (validOdds - 1)).toFixed(2));

  // Overround comparison: traditional bookmaker 8% margin vs exchange
  const sportsbookPayout = parseFloat((validStake * (validOdds * 0.92)).toFixed(2));
  const savingsOverSportsbook = parseFloat((totalPayout - sportsbookPayout).toFixed(2));

  return (
    <div className="w-full rounded-2xl bg-[#081a13]/90 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
      {/* Header */}
      <div className="p-5 bg-gradient-to-r from-[#0d2a20] to-[#081a13] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#F0C419]/20 border border-[#F0C419]/40 flex items-center justify-center text-[#F0C419]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-white">Live Odds &amp; Payout Calculator</h3>
            <p className="text-xs text-white/60">Real-time implied probability, net returns &amp; lay liability</p>
          </div>
        </div>

        {/* Back / Lay Mode Toggle */}
        <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10">
          <button
            onClick={() => setMode('back')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              mode === 'back'
                ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Back Bet
          </button>
          <button
            onClick={() => setMode('lay')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              mode === 'lay'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Lay Bet
          </button>
        </div>
      </div>

      {/* Main Interactive Controls & Results */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inputs Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-white/70 mb-1.5">
                Stake Amount (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 font-bold">₹</span>
                <input
                  type="number"
                  value={stake}
                  onChange={(e) => setStake(parseFloat(e.target.value) || 0)}
                  min="10"
                  step="100"
                  className="w-full pl-8 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white font-mono font-bold text-base focus:outline-none focus:border-[#F0C419] transition-colors"
                />
              </div>
              <div className="flex gap-2 mt-2">
                {[500, 1000, 2500, 5000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setStake(amt)}
                    className="flex-1 py-1 rounded-md bg-white/5 hover:bg-white/10 text-white/70 text-xs font-semibold border border-white/5"
                  >
                    +₹{amt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-white/70 mb-1.5">
                Decimal Odds (e.g. 1.85, 2.50)
              </label>
              <input
                type="number"
                value={odds}
                onChange={(e) => setOdds(parseFloat(e.target.value) || 0)}
                min="1.01"
                step="0.05"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white font-mono font-bold text-base focus:outline-none focus:border-[#F0C419] transition-colors"
              />
              <div className="flex gap-2 mt-2">
                {[1.5, 1.85, 2.2, 3.0].map((o) => (
                  <button
                    key={o}
                    onClick={() => setOdds(o)}
                    className="flex-1 py-1 rounded-md bg-white/5 hover:bg-white/10 text-white/70 text-xs font-semibold border border-white/5"
                  >
                    {o.toFixed(2)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Time Mathematical Output Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0c2e22] to-[#061811] border border-white/15 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#F0C419] bg-[#F0C419]/10 px-2.5 py-0.5 rounded-full border border-[#F0C419]/30 inline-block">
                {mode === 'back' ? 'Backing Profit Breakdown' : 'Lay Liability Breakdown'}
              </span>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-white/50 text-[10px] uppercase font-semibold block">Implied Win Probability</span>
                  <span className="text-lg font-black text-amber-300 font-mono">{impliedProbability}%</span>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-white/50 text-[10px] uppercase font-semibold block">
                    {mode === 'back' ? 'Net Profit' : 'Layer Win Stake'}
                  </span>
                  <span className="text-lg font-black text-emerald-400 font-mono">
                    ₹{mode === 'back' ? netProfit.toLocaleString('en-IN') : validStake.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-white/60">
                    {mode === 'back' ? 'Total Return (Stake + Profit):' : 'Total Layer Liability:'}
                  </span>
                  <span className={`text-2xl font-black font-mono ${mode === 'back' ? 'text-white' : 'text-rose-400'}`}>
                    ₹{mode === 'back' ? totalPayout.toLocaleString('en-IN') : layLiability.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Overround Margin Comparison */}
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs flex items-center justify-between">
              <div>
                <span className="text-white/50 block text-[10px]">Lotus365 Zero-Overround Advantage</span>
                <span className="font-bold text-emerald-300">
                  +₹{savingsOverSportsbook.toLocaleString('en-IN')} vs Traditional Sportsbook
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                100% Value
              </span>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60 border-t border-white/10">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Mathematical transparency guaranteed by exchange matching engine
          </span>
          <a
            href={OFFICIAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F0C419] font-bold hover:underline flex items-center gap-1"
          >
            <span>Trade at these odds now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

