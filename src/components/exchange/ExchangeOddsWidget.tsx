"use client";
import React, { useState } from 'react';
import { ArrowLeftRight, TrendingUp, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '@/data/landingData';

interface OddsLevel {
  price: number;
  size: string;
}

interface Runner {
  name: string;
  shortName: string;
  flag: string;
  back: [OddsLevel, OddsLevel, OddsLevel];
  lay: [OddsLevel, OddsLevel, OddsLevel];
}

interface MatchOddsProps {
  title?: string;
  tournament?: string;
  status?: string;
  score?: string;
  runners?: [Runner, Runner];
}

const defaultRunners: [Runner, Runner] = [
  {
    name: 'India',
    shortName: 'IND',
    flag: '🇮🇳',
    back: [
      { price: 1.84, size: '₹18.4L' },
      { price: 1.85, size: '₹24.8L' },
      { price: 1.86, size: '₹42.1L' },
    ],
    lay: [
      { price: 1.87, size: '₹38.5L' },
      { price: 1.88, size: '₹19.2L' },
      { price: 1.89, size: '₹11.7L' },
    ],
  },
  {
    name: 'Australia',
    shortName: 'AUS',
    flag: '🇦🇺',
    back: [
      { price: 2.14, size: '₹14.2L' },
      { price: 2.16, size: '₹22.6L' },
      { price: 2.18, size: '₹31.4L' },
    ],
    lay: [
      { price: 2.20, size: '₹28.9L' },
      { price: 2.22, size: '₹15.3L' },
      { price: 2.24, size: '₹9.8L' },
    ],
  },
];

export const ExchangeOddsWidget: React.FC<MatchOddsProps> = ({
  title = 'India vs Australia — 3rd T20I',
  tournament = 'ICC T20 Championship Series',
  status = 'LIVE • 14.2 OVERS',
  score = 'IND: 142/3 (RR: 9.9) • AUS Needs 184',
  runners = defaultRunners,
}) => {
  const [selectedBet, setSelectedBet] = useState<{
    runnerName: string;
    type: 'back' | 'lay';
    price: number;
  }>({
    runnerName: runners[0].name,
    type: 'back',
    price: runners[0].back[2].price,
  });

  const [stake, setStake] = useState<number>(1000);

  const potentialProfit =
    selectedBet.type === 'back'
      ? Math.round(stake * (selectedBet.price - 1))
      : stake;

  const liability =
    selectedBet.type === 'lay'
      ? Math.round(stake * (selectedBet.price - 1))
      : stake;

  const handlePlaceBet = () => {
    const text = encodeURIComponent(
      `Hi Lotus365, I want to place exchange bet on ${title}: ${selectedBet.runnerName} [${selectedBet.type.toUpperCase()}] at ${selectedBet.price.toFixed(2)} with stake ₹${stake}`
    );
    window.open(`${OFFICIAL_WHATSAPP_URL}&text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl text-slate-800">
      {/* Header Bar */}
      <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
              {status}
            </span>
            <span className="text-xs text-slate-500 font-medium">{tournament}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">{title}</h3>
          <p className="text-xs text-amber-700 font-mono font-bold mt-0.5">{score}</p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 font-bold">
            <span className="w-2 h-2 rounded-full bg-sky-500" /> Blue = Back
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-rose-50 text-rose-800 border border-rose-200 font-bold">
            <span className="w-2 h-2 rounded-full bg-rose-500" /> Pink = Lay
          </span>
        </div>
      </div>

      {/* Depth Ladder Board */}
      <div className="p-4 sm:p-6 space-y-3">
        <div className="hidden sm:grid grid-cols-12 text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2">
          <div className="col-span-5">Match Winner Market</div>
          <div className="col-span-3 text-center text-sky-800">Back (Bet For)</div>
          <div className="col-span-4 text-center text-rose-800">Lay (Bet Against)</div>
        </div>

        {runners.map((runner) => (
          <div
            key={runner.name}
            className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
          >
            {/* Runner Title */}
            <div className="sm:col-span-5 flex items-center justify-between sm:justify-start gap-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{runner.flag}</span>
                <div>
                  <span className="font-extrabold text-slate-900 text-base block">{runner.name}</span>
                  <span className="text-[11px] text-slate-500">Matched: ₹1.24 Cr</span>
                </div>
              </div>
            </div>

            {/* Back Ladders (Blue) */}
            <div className="grid grid-cols-3 gap-1 sm:col-span-3">
              {runner.back.map((lvl, idx) => {
                const isSelected =
                  selectedBet.runnerName === runner.name &&
                  selectedBet.type === 'back' &&
                  selectedBet.price === lvl.price;
                return (
                  <button
                    key={idx}
                    onClick={() =>
                      setSelectedBet({
                        runnerName: runner.name,
                        type: 'back',
                        price: lvl.price,
                      })
                    }
                    className={`py-2 px-1 rounded-lg text-center transition-all ${
                      isSelected
                        ? 'bg-sky-600 text-white ring-2 ring-sky-300 shadow-md scale-105'
                        : 'bg-sky-50 hover:bg-sky-100 text-sky-950 border border-sky-200'
                    }`}
                  >
                    <span className="block font-black text-sm">{lvl.price.toFixed(2)}</span>
                    <span className="block text-[10px] text-sky-700 font-medium">{lvl.size}</span>
                  </button>
                );
              })}
            </div>

            {/* Lay Ladders (Pink) */}
            <div className="grid grid-cols-3 gap-1 sm:col-span-4">
              {runner.lay.map((lvl, idx) => {
                const isSelected =
                  selectedBet.runnerName === runner.name &&
                  selectedBet.type === 'lay' &&
                  selectedBet.price === lvl.price;
                return (
                  <button
                    key={idx}
                    onClick={() =>
                      setSelectedBet({
                        runnerName: runner.name,
                        type: 'lay',
                        price: lvl.price,
                      })
                    }
                    className={`py-2 px-1 rounded-lg text-center transition-all ${
                      isSelected
                        ? 'bg-rose-600 text-white ring-2 ring-rose-300 shadow-md scale-105'
                        : 'bg-rose-50 hover:bg-rose-100 text-rose-950 border border-rose-200'
                    }`}
                  >
                    <span className="block font-black text-sm">{lvl.price.toFixed(2)}</span>
                    <span className="block text-[10px] text-rose-700 font-medium">{lvl.size}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Live Interactive Bet Slip Preview Bar */}
        <div className="mt-5 p-4 rounded-xl bg-slate-100 border border-slate-200">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider ${
                  selectedBet.type === 'back'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-rose-600 text-white shadow-sm'
                }`}
              >
                {selectedBet.type} {selectedBet.runnerName}
              </span>
              <div className="text-xs">
                <span className="text-slate-500">Odds: </span>
                <span className="font-extrabold text-slate-900 text-sm">
                  {selectedBet.price.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Quick Stake Selector */}
            <div className="flex items-center gap-2 flex-wrap">
              {[500, 1000, 2500, 5000, 10000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setStake(amt)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                    stake === amt
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-300'
                  }`}
                >
                  ₹{amt.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            {/* Calculations & Submit Button */}
            <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-slate-200 pt-3 md:pt-0">
              <div className="text-right">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">
                  {selectedBet.type === 'back' ? 'Potential Profit' : 'Liability'}
                </span>
                <span
                  className={`text-sm sm:text-base font-black ${
                    selectedBet.type === 'back' ? 'text-emerald-700' : 'text-rose-700'
                  }`}
                >
                  ₹{potentialProfit.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={handlePlaceBet}
                className="emerald-pill-btn !py-2.5 !px-5 text-xs sm:text-sm font-black shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-current text-amber-300" />
                <span>Execute Slip</span>
              </button>
            </div>
          </div>
        </div>

        {/* Security & Matching Telemetry */}
        <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Peer-to-Peer Sub-50ms Order Book
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-amber-600" /> 0% Overround Margin
          </span>
          <span>Settlements: Official Referee Scorecard</span>
        </div>
      </div>
    </div>
  );
};

