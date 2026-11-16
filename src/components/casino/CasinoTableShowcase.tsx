"use client";
import React, { useState } from 'react';
import { Sparkles, Users, Play, ShieldCheck, Zap } from 'lucide-react';
import { AdaptiveImage } from '../common/AdaptiveImage';
import { OFFICIAL_WHATSAPP_URL } from '@/data/landingData';

export interface CasinoTable {
  id: string;
  name: string;
  provider: string;
  category: 'indian' | 'roulette' | 'blackjack' | 'baccarat' | 'shows';
  imageSrc: string;
  minBet: number;
  maxBet: number;
  activePlayers: number;
  rtp: string;
  tag?: string;
}

const defaultTables: CasinoTable[] = [
  {
    id: 'tp-live-1',
    name: 'Hindi Live Teen Patti',
    provider: 'Evolution Gaming',
    category: 'indian',
    imageSrc: '/images/games/teen-patti.svg',
    minBet: 50,
    maxBet: 50000,
    activePlayers: 1240,
    rtp: '96.63%',
    tag: 'MOST POPULAR',
  },
  {
    id: 'ab-speed',
    name: 'Speed Andar Bahar Live',
    provider: 'Ezugi Live',
    category: 'indian',
    imageSrc: '/images/games/andar-bahar.svg',
    minBet: 100,
    maxBet: 100000,
    activePlayers: 980,
    rtp: '97.85%',
    tag: 'FAST ROUNDS',
  },
  {
    id: 'lt-roulette',
    name: 'Lightning Roulette 500x',
    provider: 'Evolution Gaming',
    category: 'roulette',
    imageSrc: '/images/games/roulette.svg',
    minBet: 50,
    maxBet: 200000,
    activePlayers: 1850,
    rtp: '97.30%',
    tag: '500X MULTIPLIER',
  },
  {
    id: 'bj-infinite',
    name: 'Infinite Blackjack 21',
    provider: 'Pragmatic Play Live',
    category: 'blackjack',
    imageSrc: '/images/games/blackjack.svg',
    minBet: 100,
    maxBet: 150000,
    activePlayers: 720,
    rtp: '99.28%',
  },
  {
    id: 'bac-speed',
    name: 'Golden Wealth Baccarat',
    provider: 'Evolution Gaming',
    category: 'baccarat',
    imageSrc: '/images/games/baccarat.svg',
    minBet: 100,
    maxBet: 250000,
    activePlayers: 640,
    rtp: '98.94%',
  },
  {
    id: 'crazy-time-1',
    name: 'Crazy Time Game Show',
    provider: 'Evolution Gaming',
    category: 'shows',
    imageSrc: '/images/games/live-casino.svg',
    minBet: 50,
    maxBet: 100000,
    activePlayers: 3200,
    rtp: '96.08%',
    tag: 'HOT JACKPOT',
  },
];

interface CasinoTableShowcaseProps {
  headline?: string;
  subtext?: string;
  initialCategory?: 'all' | 'indian' | 'roulette' | 'blackjack' | 'baccarat' | 'shows';
  tables?: CasinoTable[];
}

export const CasinoTableShowcase: React.FC<CasinoTableShowcaseProps> = ({
  headline = 'High-Definition Live Dealer Tables',
  subtext = 'Streamed directly in 4K from certified international studios with real cards and professional Hindi-speaking croupiers.',
  initialCategory = 'all',
  tables = defaultTables,
}) => {
  const [filter, setFilter] = useState<string>(initialCategory);

  const filteredTables =
    filter === 'all'
      ? tables
      : tables.filter((t) => t.category === filter);

  const handleLaunch = (tableName: string) => {
    const text = encodeURIComponent(
      `Hi Lotus365, I want to join the live table: ${tableName}`
    );
    window.open(`${OFFICIAL_WHATSAPP_URL}&text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> 1,000+ Live Tables Available 24/7
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{headline}</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mt-1">{subtext}</p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {[
            { id: 'all', label: 'All Tables' },
            { id: 'indian', label: 'Indian Card' },
            { id: 'roulette', label: 'Roulette' },
            { id: 'blackjack', label: 'Blackjack' },
            { id: 'baccarat', label: 'Baccarat' },
            { id: 'shows', label: 'Game Shows' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-emerald-600 text-white shadow-xs font-black'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTables.map((table) => (
          <div
            key={table.id}
            className="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Media Container with AdaptiveImage */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <AdaptiveImage
                  src={table.imageSrc}
                  alt={table.name}
                  aspectRatio="16/9"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {table.tag && (
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs">
                    {table.tag}
                  </span>
                )}
                <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-900/80 backdrop-blur-md text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {table.activePlayers.toLocaleString('en-IN')} Live
                </span>
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-900/80 backdrop-blur-md text-white/90">
                  RTP {table.rtp}
                </span>
              </div>

              {/* Table Info */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{table.provider}</span>
                  <span className="font-mono text-amber-700 font-bold">HD Broadcast</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {table.name}
                </h3>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Min Bet</span>
                    <span className="font-bold text-slate-900">₹{table.minBet}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Max Table</span>
                    <span className="font-bold text-amber-600">₹{table.maxBet.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Launch Action */}
            <div className="p-5 pt-0">
              <button
                onClick={() => handleLaunch(table.name)}
                className="emerald-pill-btn w-full !py-2.5 !px-4 text-xs sm:text-sm font-extrabold shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current text-amber-300" />
                <span>Enter Live Table</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

