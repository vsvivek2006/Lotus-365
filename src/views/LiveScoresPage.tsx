"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Activity,
  Flame,
  Radio,
  Clock,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Sparkles,
  Trophy,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { OFFICIAL_WHATSAPP_URL, getWhatsAppUrl } from '@/data/landingData';

interface MatchItem {
  id: string;
  series: string;
  status: 'LIVE' | 'UPCOMING' | 'COMPLETED';
  team1: { name: string; score?: string; overs?: string; flag: string };
  team2: { name: string; score?: string; overs?: string; flag: string };
  summary: string;
  venue: string;
  odds: { team1: number; team2: number; draw?: number };
  category: 'cricket' | 'football' | 'tennis' | 'kabaddi';
}

const mockMatches: MatchItem[] = [
  {
    id: 'm1',
    series: '3rd ODI • Bilateral Trophy 2026',
    status: 'LIVE',
    team1: { name: 'India', score: '278/4', overs: '48.2 ov', flag: '🇮🇳' },
    team2: { name: 'Australia', score: 'Yet to bat', overs: 'Target: 290', flag: '🇦🇺' },
    summary: 'Rohit 84 (72), Virat 68* (54) • Current RR: 5.76 • Required: --',
    venue: 'Wankhede Stadium, Mumbai',
    odds: { team1: 1.62, team2: 2.25 },
    category: 'cricket',
  },
  {
    id: 'm2',
    series: 'IPL 2026 • Match 14',
    status: 'LIVE',
    team1: { name: 'Chennai Super Kings', score: '184/5', overs: '19.4 ov', flag: '🦁' },
    team2: { name: 'Mumbai Indians', score: 'Target: 189', overs: 'Innings Break', flag: '💙' },
    summary: 'Dhoni 28* (9) finished with three sixes • High-voltage finish',
    venue: 'M. A. Chidambaram Stadium, Chennai',
    odds: { team1: 1.85, team2: 1.95 },
    category: 'cricket',
  },
  {
    id: 'm3',
    series: 'Premier League • Gameweek 28',
    status: 'LIVE',
    team1: { name: 'Arsenal', score: '2', overs: '64\'', flag: '🔴' },
    team2: { name: 'Manchester City', score: '1', overs: 'Live', flag: '🔵' },
    summary: 'Saka 23\', Havertz 51\' | Haaland 41\' (Pen)',
    venue: 'Emirates Stadium, London',
    odds: { team1: 2.10, team2: 3.40, draw: 3.10 },
    category: 'football',
  },
  {
    id: 'm4',
    series: 'Pro Kabaddi League • Semi-Final',
    status: 'LIVE',
    team1: { name: 'Puneri Paltan', score: '34', overs: '2nd Half', flag: '🧡' },
    team2: { name: 'Jaipur Pink Panthers', score: '31', overs: '5 Mins Left', flag: '🩷' },
    summary: 'Aslam Inamdar 9 Super Raids • Paltan holding tight lead',
    venue: 'Thyagaraj Indoor Stadium, Delhi',
    odds: { team1: 1.55, team2: 2.45 },
    category: 'kabaddi',
  },
];

export const LiveScoresPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'cricket' | 'football' | 'kabaddi'>('all');

  const filteredMatches = activeTab === 'all'
    ? mockMatches
    : mockMatches.filter(m => m.category === activeTab);

  return (
    <Layout>
      <PageHero
        badge="Real-Time Match Intelligence"
        title="Lotus365 Live Scores &amp; "
        highlight="Match Centre"
        subtitle="Follow every ball, read every market shift, and trade live exchange odds with zero delay. Ball-by-ball IPL 2026, international cricket, and premier sports coverage."
        imageSrc="/images/banners/hero_banner_bet_sports.webp"
        imageAlt="Lotus365 Live Scores and Match Centre Stadium"
        breadcrumbs={[{ label: 'Live Scores' }]}
      />

      <section className="py-14 sm:py-18 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Filter Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Live In-Play Matches ({filteredMatches.length})
              </h2>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
              {(['all', 'cricket', 'football', 'kabaddi'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab === 'all' ? 'All Matches' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Live Score Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMatches.map((m) => (
              <div
                key={m.id}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                {/* Header: Series & Status */}
                <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
                  <span className="font-extrabold text-emerald-800 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-500" />
                    {m.series}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 font-black uppercase text-[10px] animate-pulse">
                    <Radio className="w-2.5 h-2.5" />
                    LIVE IN-PLAY
                  </span>
                </div>

                {/* Scoreboard: Teams & Runs */}
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="space-y-1">
                    <div className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                      <span>{m.team1.flag}</span>
                      <span>{m.team1.name}</span>
                    </div>
                    {m.team1.score && (
                      <div className="text-2xl font-black text-emerald-700 tracking-tight">
                        {m.team1.score}
                        <span className="text-xs text-slate-500 font-semibold ml-1.5 font-mono">
                          ({m.team1.overs})
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1 text-right">
                    <div className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2 justify-end">
                      <span>{m.team2.name}</span>
                      <span>{m.team2.flag}</span>
                    </div>
                    {m.team2.score && (
                      <div className="text-lg font-black text-slate-700 tracking-tight">
                        {m.team2.score}
                        <span className="text-xs text-slate-400 font-semibold ml-1.5 font-mono">
                          ({m.team2.overs})
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Live Commentary & Summary */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-center justify-between">
                  <div className="truncate font-medium">{m.summary}</div>
                  <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">
                    {m.venue}
                  </span>
                </div>

                {/* Exchange Odds & Trade CTAs */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-slate-500">Live Odds:</span>
                    <span className="px-2 py-1 rounded-lg bg-emerald-50 border border-emerald-200 font-black text-emerald-800">
                      {m.team1.name.slice(0, 3).toUpperCase()}: {m.odds.team1.toFixed(2)}
                    </span>
                    <span className="px-2 py-1 rounded-lg bg-amber-50 border border-amber-200 font-black text-amber-800">
                      {m.team2.name.slice(0, 3).toUpperCase()}: {m.odds.team2.toFixed(2)}
                    </span>
                  </div>

                  <Link
                    href="/cricket-exchange"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-xs hover:scale-102 transition-all"
                  >
                    <span>Trade Exchange</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Deep Content Pillars (SEO & Player Intelligence) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700">
                Official Live Intelligence Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                One Screen. Every Detail. Zero Delay.
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-4xl">
                The Lotus365 Live Score Centre is engineered for Indian cricket enthusiasts and sports traders who demand more than a simple numbers board. We integrate millisecond-latency data pipelines delivering ball-by-ball updates, comprehensive scorecards, and live exchange trading depth in one unified window.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Ball-by-Ball Tracking</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every single delivery, boundary, extras, partnership run rate, and over-by-over trajectory refreshed instantaneously without manual reloading.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Live Exchange Odds Sync</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Witness peer-to-peer liquidity swing live alongside every wicket and boundary. Back and lay positions on India&apos;s leading 0% commission exchange.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">2-Minute Cashouts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Execute in-play hedging strategies and withdraw your settled profits directly to your bank account via UPI in under 120 seconds guaranteed.
                </p>
              </div>
            </div>

            {/* Quick Link Directory */}
            <div className="pt-6 border-t border-slate-100">
              <h4 className="text-sm font-extrabold text-slate-900 mb-3">
                Explore Core Lotus365 Sports Hubs
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  { name: 'Cricket Exchange', path: '/cricket-exchange' },
                  { name: 'IPL 2026 Specials', path: '/ipl-betting' },
                  { name: 'Live Cricket In-Play', path: '/cricket-betting' },
                  { name: 'Football Betting', path: '/football-betting' },
                  { name: 'Tennis Grand Slams', path: '/tennis-betting' },
                  { name: 'Pro Kabaddi Betting', path: '/kabaddi-betting' },
                  { name: 'Full Sportsbook Directory', path: '/sportsbook' },
                ].map((s) => (
                  <Link
                    key={s.name}
                    href={s.path}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-500 text-slate-800 hover:text-emerald-800 font-bold transition-all"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};
