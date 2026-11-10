"use client";
import React, { useState, useEffect } from 'react';
import { Plane, Zap, ShieldCheck, RefreshCw, Trophy } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '@/data/landingData';

const roundHistory = [
  { val: 1.24, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
  { val: 2.85, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  { val: 1.12, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
  { val: 18.42, color: 'text-[#F0C419] border-[#F0C419]/40 bg-[#F0C419]/15' },
  { val: 1.48, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
  { val: 4.19, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
  { val: 78.50, color: 'text-[#F0C419] border-[#F0C419]/50 bg-[#F0C419]/20 font-black' },
  { val: 2.10, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
];

export const AviatorFlightRadar: React.FC = () => {
  const [multiplier, setMultiplier] = useState<number>(3.84);
  const [betAmount, setBetAmount] = useState<number>(500);
  const [targetMultiplier, setTargetMultiplier] = useState<number>(2.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setMultiplier((prev) => {
        if (prev >= 9.8) return 1.0;
        return parseFloat((prev + 0.08).toFixed(2));
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const simulatedPayout = Math.round(betAmount * targetMultiplier);
  const simulatedProfit = simulatedPayout - betAmount;

  const handleLaunchAviator = () => {
    const text = encodeURIComponent(
      `Hi Lotus365, I want to play Spribe Aviator Crash Game with ₹${betAmount} balance`
    );
    window.open(`${OFFICIAL_WHATSAPP_URL}&text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full rounded-2xl bg-[#081a13]/90 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
      {/* Round Multiplier History Strip */}
      <div className="p-3 bg-black/40 border-b border-white/10 flex items-center justify-between gap-2 overflow-x-auto">
        <span className="text-[10px] uppercase font-bold text-white/40 whitespace-nowrap pl-2">
          Previous Flights:
        </span>
        <div className="flex items-center gap-1.5">
          {roundHistory.map((item, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 rounded-md text-xs font-bold border ${item.color}`}
            >
              {item.val.toFixed(2)}x
            </span>
          ))}
        </div>
      </div>

      {/* Flight Radar Canvas Visual */}
      <div className="relative h-64 sm:h-72 w-full bg-gradient-to-br from-[#0c2a1f] via-[#05140e] to-black p-6 flex flex-col justify-between overflow-hidden">
        {/* Animated Flight Path Lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#F0C419_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            Live Flight Active
          </span>
          <span className="text-xs text-white/60 font-mono">Provably Fair SHA-512</span>
        </div>

        {/* Center Escalating Multiplier */}
        <div className="relative z-10 text-center my-auto">
          <div className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F0C419] via-amber-200 to-white tracking-tight animate-pulse">
            {multiplier.toFixed(2)}x
          </div>
          <span className="text-xs uppercase font-extrabold text-emerald-400 tracking-widest mt-1 block">
            Ascending Altitude • Cash Out Anytime
          </span>
        </div>

        {/* Animated Plane Graphic */}
        <div
          className="absolute transition-all duration-150 ease-linear pointer-events-none"
          style={{
            bottom: `${Math.min(75, 20 + multiplier * 6)}%`,
            left: `${Math.min(80, 15 + multiplier * 7)}%`,
          }}
        >
          <Plane className="w-10 h-10 text-rose-500 -rotate-12 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]" />
        </div>

        {/* Telemetry Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white/50">
          <span>RTP: 98.5% (Spribe Certified)</span>
          <span>Dual Automatic Cashout System</span>
        </div>
      </div>

      {/* Interactive Simulator & Stake Controls */}
      <div className="p-5 sm:p-6 bg-[#0a2319] border-t border-white/10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bet Amount Control */}
          <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-white/60 font-semibold uppercase">Bet Stake</span>
              <span className="font-mono font-bold text-white">₹{betAmount}</span>
            </div>
            <div className="flex gap-2">
              {[100, 500, 1000, 2500].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setBetAmount(amt)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    betAmount === amt
                      ? 'bg-[#F0C419] text-[#05120d]'
                      : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10'
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          {/* Auto Cashout Multiplier Control */}
          <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-white/60 font-semibold uppercase">Auto Cashout Multiplier</span>
              <span className="font-mono font-bold text-[#F0C419]">{targetMultiplier.toFixed(2)}x</span>
            </div>
            <div className="flex gap-2">
              {[1.5, 2.0, 3.5, 5.0].map((mult) => (
                <button
                  key={mult}
                  onClick={() => setTargetMultiplier(mult)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    targetMultiplier === mult
                      ? 'bg-[#F0C419] text-[#05120d]'
                      : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10'
                  }`}
                >
                  {mult.toFixed(1)}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projected Returns Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-black/60 border border-emerald-500/30">
          <div>
            <span className="text-xs text-slate-300 block">Projected Cashout Payout</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-400">
              ₹{simulatedPayout.toLocaleString('en-IN')}{' '}
              <span className="text-xs text-emerald-200/70 font-normal">
                (+₹{simulatedProfit.toLocaleString('en-IN')} Profit)
              </span>
            </span>
          </div>

          <button
            onClick={handleLaunchAviator}
            className="w-full sm:w-auto py-3 px-8 rounded-xl bg-gradient-to-r from-[#F0C419] via-amber-400 to-[#E5B510] text-[#05120d] font-black text-sm hover:brightness-110 shadow-lg shadow-[#F0C419]/25 transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>Launch Aviator on Lotus365</span>
          </button>
        </div>
      </div>
    </div>
  );
};

