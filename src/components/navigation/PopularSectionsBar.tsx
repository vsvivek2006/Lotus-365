"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '@/data/landingData';

interface PopularSectionsBarProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const PopularSectionsBar: React.FC<PopularSectionsBarProps> = ({ onOpenAuth }) => {
  const sections = [
    {
      title: 'Cricket',
      subtitle: 'Live Scores & Info',
      href: '/cricket-betting',
      image: '/images/games/cricket_ball_clean.jpg',
      badge: 'LIVE MATCHES',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      title: 'Football',
      subtitle: 'Fixtures & News',
      href: '/football-betting',
      image: '/images/games/card_soccer.jpg',
      badge: 'TOP LEAGUES',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      title: 'Casino',
      subtitle: 'Play & Enjoy',
      href: '/live-casino',
      image: '/images/games/card_casino.jpg',
      badge: '1000+ TABLES',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      title: 'Aviator',
      subtitle: 'Crash Games & Multiplier',
      href: '/aviator-game',
      image: '/images/games/card_crash.jpg',
      badge: 'HOT RTP',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      title: 'VIP Club',
      subtitle: 'Exclusive Benefits',
      href: '/vip-club',
      image: '/images/vip/vip_crown_pure.jpg',
      badge: 'ROYAL PERKS',
      badgeColor: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#F8FAFC] border-b border-slate-200/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>Popular Sections</span>
              <Sparkles className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            </h2>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
              Instant Access
            </span>
          </div>
          <Link
            href="/sportsbook"
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1 group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5-Card Responsive Grid directly modeled from Mockup 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-6">
          {sections.map((sec, idx) => (
            <Link
              key={idx}
              href={sec.href}
              className={`group relative p-4 sm:p-5 rounded-2xl bg-white text-slate-900 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              {/* Top Row: Badge */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${sec.badgeColor}`}
                >
                  {sec.badge}
                </span>
              </div>

              {/* Center 3D Visual with soft dissolve */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto my-2 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 bg-slate-50">
                <Image
                  src={sec.image}
                  alt={sec.title}
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 rounded-2xl border border-white/20 shadow-[inset_0_0_10px_rgba(0,0,0,0.15)]" />
              </div>

              {/* Title & Subtitle */}
              <div className="text-center mt-2">
                <div className="font-black text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {sec.title}
                </div>
                <div className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                  {sec.subtitle}
                </div>
              </div>

              {/* Bottom indicator */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-center gap-1 text-xs font-bold text-emerald-600">
                <span>Play Now</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* VIP Club Strip Banner — Direct from Mockup 1 & 4 */}
        <Link
          href="/vip-club"
          className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#042419] via-[#084530] to-[#042419] p-4 sm:p-5 border border-emerald-500/30 shadow-xl hover:shadow-2xl hover:border-emerald-400/50 transition-all duration-300"
        >
          {/* Ambient Lighting & Dissolved Backdrop Image */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
            <Image
              src="/images/banners/vip_club_banner_feathered.jpg"
              alt="Lotus365 VIP Club"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Crown Icon & Copy */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 p-0.5 shadow-lg shrink-0 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-[#032318] flex items-center justify-center">
                  <Crown className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-white tracking-tight flex items-center gap-2 justify-center sm:justify-start">
                  <span>Join Lotus365 VIP Club</span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                    ROYAL PERKS
                  </span>
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mt-0.5">
                  Unlock exclusive perks, 10% weekly loss cashback, dedicated manager &amp; rewards!
                </p>
              </div>
            </div>

            {/* Right: Gold Pill Button */}
            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg group-hover:scale-105 transition-transform">
                <span>Explore VIP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
};
