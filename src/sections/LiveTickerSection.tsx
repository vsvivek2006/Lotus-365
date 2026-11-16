import React from 'react';
import { LIVE_MATCHES } from '../data/landingData';
import { Trophy, ArrowRight, Flame } from 'lucide-react';

interface LiveTickerProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const LiveTickerSection: React.FC<LiveTickerProps> = ({ onOpenAuth }) => {
  return (
    <div id="exchange" className="relative py-8 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-black text-base sm:text-lg text-slate-900">
              Live Sports Exchange <span className="text-emerald-700">&amp; Markets</span>
            </h2>
            <p className="text-xs text-slate-500">Real-time Back &amp; Lay odds • Zero margin delay</p>
          </div>
        </div>

        <button
          onClick={() => onOpenAuth('register')}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
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
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all shadow-sm group flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between text-[11px] mb-2.5">
                  <span className="text-slate-500 font-semibold truncate max-w-[170px]">
                    {match.tournament}
                  </span>
                  {match.status === 'LIVE' ? (
                    <span className="flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      LIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-400">
                      {match.status}
                    </span>
                  )}
                </div>

                {/* Teams */}
                <div className="space-y-1 mb-3">
                  <div className="font-extrabold text-sm text-slate-900 flex items-center justify-between">
                    <span>{match.team1.name}</span>
                    {match.team1.score && (
                      <span className="text-xs font-mono font-bold text-emerald-700">{match.team1.score}</span>
                    )}
                  </div>
                  <div className="font-extrabold text-sm text-slate-900 flex items-center justify-between">
                    <span>{match.team2.name}</span>
                    {match.team2.score && (
                      <span className="text-xs font-mono text-slate-500">{match.team2.score}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Odds */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-1 text-xs">
                <div className="flex-1 p-1.5 rounded-lg bg-blue-50 text-blue-700 text-center font-mono font-bold">
                  {match.backOdds}
                </div>
                <div className="flex-1 p-1.5 rounded-lg bg-pink-50 text-pink-700 text-center font-mono font-bold">
                  {match.layOdds}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
