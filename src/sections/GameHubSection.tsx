"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

import { POPULAR_GAMES } from '../data/landingData';
import { GameItem } from '../types';
import { Flame, Users, Sparkles, ArrowRight, Dices, Plane, Trophy, Crown, Play } from 'lucide-react';
import { AdaptiveImage } from '../components/common/AdaptiveImage';

interface GameHubProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const GameHubSection: React.FC<GameHubProps> = ({ onOpenAuth }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Popular Games', icon: Sparkles },
    { id: 'aviator', label: 'Aviator & Crash', icon: Plane },
    { id: 'casino', label: 'Live Dealer Casino', icon: Dices },
    { id: 'slots', label: 'Slots & Megaways', icon: Crown },
    { id: 'indian', label: 'Teen Patti & Desi', icon: Flame },
    { id: 'exchange', label: 'Cricket & Sports', icon: Trophy },
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
    <section id="games" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
              <span>Verified 1000+ Gaming Lobby</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Play India’s Favorite <span className="text-emerald-700">Casino &amp; Exchange Games</span>
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              High RTP rates, certified random number generators, zero lagging, and instantaneous win credits straight into your playable wallet balance.
            </p>
          </div>

          <button
            onClick={() => onOpenAuth('register')}
            className="emerald-pill-btn py-2.5 px-6 text-xs font-black self-start md:self-auto cursor-pointer shadow-lg"
          >
            <span>Instant Access Lobby</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Free Games Spotlight Banner with dissolved edges (Direct from Mockups) */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#065f46] border border-emerald-600/30 p-6 sm:p-8 mb-10 shadow-xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 z-10 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-amber-300 border border-white/20 text-xs font-black uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Free to Play · Zero Wagering
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                Play 1,000+ Free Games &amp; Skill Tournaments
              </h3>
              <p className="text-emerald-50/90 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
                Enjoy instant-play arcade games, sports quizzes, fantasy leagues, and crash games with zero wagering required. Perfect for practice and daily rewards!
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button
                  onClick={() => onOpenAuth('register')}
                  className="gold-pill-btn !py-2.5 !px-6 !text-xs font-black shadow-lg cursor-pointer hover:scale-105 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play Instant Free Games</span>
                </button>
              </div>
            </div>

            {/* Right: 3D Controller Image with dissolved edges */}
            <div className="md:col-span-5 relative h-52 sm:h-60 flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/banners/games-hub-3d.jpg"
                  alt="3D Free Games Controller & Rewards"
                  className="w-full h-full object-cover object-center scale-105"
                />
                {/* Dissolved edge masks */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#047857]/60 via-transparent to-transparent pointer-events-none md:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
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
                    ? 'bg-emerald-600 text-white shadow-sm font-black'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
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
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-emerald-500/50 transition-all overflow-hidden group flex flex-col justify-between"
            >
              {/* Card Banner / Art Visual (3:2 Ratio matching 300x200 authentic thumbnails) */}
              <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                {game.imageSrc ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={game.imageSrc}
                    alt={game.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-300"
                  />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-tr ${game.gradient} p-3 flex items-center justify-center`}>
                    <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center">
                      {getGameIcon(game.iconType)}
                    </div>
                  </div>
                )}

                {/* Top Badges: Category/Hot on left, Provider on right */}
                <div className="absolute top-2 inset-x-2 flex items-center justify-between pointer-events-none z-10">
                  {game.badge ? (
                    <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-amber-400 text-slate-900 shadow-sm uppercase tracking-wide">
                      {game.badge}
                    </span>
                  ) : <span />}
                  <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-900/85 text-white/95 backdrop-blur-sm border border-white/20 shadow-xs">
                    {game.provider}
                  </span>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-xs sm:text-base text-slate-900 group-hover:text-emerald-700 transition-colors mb-1 truncate">
                    {game.href ? (
                      <Link href={game.href} title={game.title} className="hover:underline">
                        {game.title}
                      </Link>
                    ) : (
                      game.title
                    )}
                  </h3>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-500 mb-3">
                    <span className="text-amber-600 font-bold">RTP: {game.rtp}</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-slate-400" />
                      {game.playersOnline.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onOpenAuth('register')}
                    className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] sm:text-xs font-black transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current text-amber-300" />
                    <span>Play ID</span>
                  </button>
                  {game.href && (
                    <Link
                      href={game.href}
                      className="px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-all border border-slate-200"
                      title="Rules & Guide"
                    >
                      Rules
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Aviator Deep Dive Feature Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#0f3a2c] border border-rose-500/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 text-white shadow-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-rose-300 border border-white/20 text-xs font-bold uppercase mb-3">
              <Plane className="w-3.5 h-3.5 transform rotate-45" />
              <span>Aviator Spribe Official Integration</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
              Fly High, Win Big with <span className="text-rose-300">Aviator Crash Pro</span>
            </h3>
            <p className="text-xs sm:text-sm text-emerald-50/90 leading-relaxed">
              Real-time provably fair algorithm, instant auto-cashout triggers, dual-bet placement, and round multipliers soaring past 100x every few minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => onOpenAuth('register')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:brightness-110 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Play Aviator Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/aviator-game"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/20 transition-colors"
             title="Aviator Game Rules">
              <span>Aviator Game Rules</span>
            </Link>
          </div>
        </div>

        {/* Category Navigation Pills for Interlinking */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-2.5 text-xs">
          <span className="text-slate-500 font-medium">Explore Hubs:</span>
          <Link href="/cricket-exchange" className="px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-200 shadow-xs transition-all font-semibold" title="🏏 Cricket Exchange">
            🏏 Cricket Exchange
          </Link>
          <Link href="/live-casino" className="px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-200 shadow-xs transition-all font-semibold" title="🎰 Live Casino">
            🎰 Live Casino
          </Link>
          <Link href="/teen-patti" className="px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-200 shadow-xs transition-all font-semibold" title="🎴 Teen Patti">
            🎴 Teen Patti
          </Link>
          <Link href="/ipl-betting" className="px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-200 shadow-xs transition-all font-semibold" title="🏆 IPL Betting">
            🏆 IPL Betting
          </Link>
          <Link href="/vip-club" className="px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-200 shadow-xs transition-all font-semibold" title="👑 VIP Club">
            👑 VIP Club
          </Link>
          <Link href="/how-it-works" className="px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-200 shadow-xs transition-all font-semibold" title="📖 How It Works">
            📖 How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};
