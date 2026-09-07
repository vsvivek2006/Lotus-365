import React, { useState } from 'react';
import { POPULAR_GAMES } from '../data/landingData';
import { GameItem } from '../types';
import { Flame, Users, Sparkles, ArrowRight, Dices, Plane, Trophy, Crown, Play } from 'lucide-react';

interface GameHubProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const GameHubSection: React.FC<GameHubProps> = ({ onOpenAuth }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Popular Games', icon: Sparkles },
    { id: 'exchange', label: 'Cricket & Sports Exchange', icon: Trophy },
    { id: 'aviator', label: 'Aviator Crash', icon: Plane },
    { id: 'casino', label: 'Live Dealer Casino', icon: Dices },
    { id: 'indian', label: 'Teen Patti & Desi', icon: Flame },
    { id: 'slots', label: 'Slots & Megaways', icon: Crown },
  ];

  const filteredGames =
    activeCategory === 'all'
      ? POPULAR_GAMES
      : POPULAR_GAMES.filter((g) => g.category === activeCategory);

  const getGameIcon = (iconType: GameItem['iconType']) => {
    switch (iconType) {
      case 'plane':
        return <Plane className="w-8 h-8 text-white transform rotate-45" />;
      case 'cricket':
        return <Trophy className="w-8 h-8 text-white" />;
      case 'wheel':
      case 'dice':
        return <Dices className="w-8 h-8 text-white" />;
      case 'crown':
        return <Crown className="w-8 h-8 text-white" />;
      case 'cards':
      default:
        return <Flame className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="games" className="py-20 bg-[#14614C] border-t border-white/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-bold text-[#F0C419] uppercase tracking-wider mb-3">
              <span>Verified 1000+ Gaming Lobby</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Play India’s Favorite <span className="text-[#F0C419]">Casino &amp; Exchange Games</span>
            </h2>
            <p className="text-white/80 text-sm mt-2 max-w-xl">
              High RTP rates, certified random number generators, zero lagging, and instantaneous win credits straight into your playable wallet balance.
            </p>
          </div>

          <button
            onClick={() => onOpenAuth('register')}
            className="cta-button py-2.5 px-5 text-xs font-black self-start md:self-auto"
          >
            <span>Instant Access Lobby</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#F0C419] text-[#14614C] shadow-md'
                    : 'bg-black/25 hover:bg-black/40 text-white/90 border border-white/15'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Games Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-black/25 rounded-2xl overflow-hidden border border-white/15 hover:border-[#F0C419]/50 group flex flex-col justify-between transition-all"
            >
              {/* Card Banner / Art Visual */}
              <div
                className={`h-28 sm:h-36 bg-gradient-to-tr ${game.gradient} p-3 sm:p-4 relative flex items-center justify-center overflow-hidden`}
              >
                {/* Decorative Circles */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/10 blur-sm pointer-events-none" />
                <div className="absolute -left-6 -top-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/20 pointer-events-none" />

                {/* Badge */}
                {game.badge && (
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] font-black px-1.5 sm:px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-md">
                    {game.badge}
                  </span>
                )}

                {/* Provider Pill */}
                <span className="hidden sm:inline-block absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded bg-black/40 text-white/80 backdrop-blur-sm">
                  {game.provider}
                </span>

                {/* Center Icon Graphic */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-black/25 backdrop-blur-sm border border-white/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  {getGameIcon(game.iconType)}
                </div>

                {/* Quick Play Hover Overlay Button */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => onOpenAuth('register')}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F0C419] text-[#14614C] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform cursor-pointer"
                    aria-label={`Play ${game.title}`}
                  >
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                  </button>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xs sm:text-base text-white group-hover:text-[#F0C419] transition-colors mb-1 truncate">
                    {game.title}
                  </h3>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-white/75 mb-3">
                    <span className="text-[#F0C419] font-bold">RTP: {game.rtp}</span>
                    <span className="hidden sm:flex items-center gap-1">
                      <Users className="w-3 h-3 text-white/50" />
                      {game.playersOnline.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenAuth('register')}
                  className="w-full py-2 sm:py-2 rounded-xl bg-white/10 hover:bg-[#F0C419] hover:text-[#14614C] text-white text-[11px] sm:text-xs font-bold transition-all border border-white/10 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Play ID</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Aviator Deep Dive Feature Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#200A18] via-[#10192A] to-[#0A1A1E] border border-rose-500/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold uppercase mb-3">
              <Plane className="w-3.5 h-3.5 transform rotate-45" />
              <span>Aviator Spribe Official Integration</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
              Fly High, Win Big with <span className="text-rose-400">Aviator Crash Pro</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Real-time provably fair algorithm, instant auto-cashout triggers, dual-bet placement, and round multipliers soaring past 100x every few minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => onOpenAuth('register')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 hover:brightness-110 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Play Aviator Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
