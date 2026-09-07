import React from 'react';
import { LIVE_MATCHES } from '../data/landingData';
import { Trophy, ArrowRight, Flame } from 'lucide-react';

interface LiveTickerProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const LiveTickerSection: React.FC<LiveTickerProps> = ({ onOpenAuth }) => {
  return (
    <div id="exchange" className="relative py-6 bg-black/15 border-y border-white/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#F0C419]/20 border border-[#F0C419]/40 text-[#F0C419]">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-extrabold text-sm sm:text-base text-white">
              Live Sports Exchange <span className="text-[#F0C419]">&amp; Markets</span>
            </h2>
            <p className="text-[11px] text-white/75">Real-time Back &amp; Lay odds • Zero margin delay</p>
          </div>
        </div>

        <button
          onClick={() => onOpenAuth('register')}
          className="text-xs font-bold text-[#F0C419] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>View All 50+ In-Play Matches</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Matches Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {LIVE_MATCHES.map((match) => (
            <div
              key={match.id}
              className="p-3.5 rounded-xl bg-black/25 border border-white/15 hover:border-[#F0C419]/50 transition-all shadow-md group flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="text-slate-400 font-medium truncate max-w-[170px]">
                    {match.tournament}
                  </span>
                  {match.status === 'LIVE' ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.2 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      LIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white/10 text-slate-300">
                      {match.timeInfo}
                    </span>
                  )}
                </div>

                {/* Teams & Score */}
                <div className="space-y-1.5 my-2">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span className="truncate">{match.team1.name}</span>
                    {match.team1.score && (
                      <span className="font-mono text-brand-emerald text-[11px]">
                        {match.team1.score}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                    <span className="truncate">{match.team2.name}</span>
                    {match.team2.score && (
                      <span className="font-mono text-slate-400 text-[11px]">
                        {match.team2.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Back / Lay Quick Odds Action */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                <button
                  onClick={() => onOpenAuth('register')}
                  className="flex-1 py-1.5 px-2 rounded-xl bg-[#153448] hover:bg-[#1C4763] text-blue-300 text-xs font-mono font-bold flex items-center justify-between border border-blue-500/30 cursor-pointer transition-colors"
                >
                  <span className="text-[10px] font-sans text-blue-400">BACK</span>
                  <span>{match.backOdds}</span>
                </button>

                <button
                  onClick={() => onOpenAuth('register')}
                  className="flex-1 py-1.5 px-2 rounded-xl bg-[#47152B] hover:bg-[#601D3B] text-pink-300 text-xs font-mono font-bold flex items-center justify-between border border-pink-500/30 cursor-pointer transition-colors"
                >
                  <span className="text-[10px] font-sans text-pink-400">LAY</span>
                  <span>{match.layOdds}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Strip Marquee */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Flame className="w-3.5 h-3.5 text-amber-500" />
          <span>Trending: <strong>IPL 2026 Season Odds Open</strong> with 100% Peer-to-Peer Exchange Liquidity</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>⚡ Cashout processed in under 120 seconds</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">💎 0% Commission on Major Series</span>
        </div>
      </div>
    </div>
  );
};
