"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Trophy,
  Flame,
  Zap,
  ArrowRight,
  TrendingUp,
  Clock,
  MapPin,
  CheckCircle2,
  Share2,
  Bell,
  MessageCircle,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '@/data/landingData';

interface MatchCentreProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
  className?: string;
}

export const MatchCentreWidget: React.FC<MatchCentreProps> = ({ onOpenAuth, className = '' }) => {
  const [activeTab, setActiveTab] = useState<'scorecard' | 'commentary' | 'ballbyball' | 'stats'>('scorecard');

  const handleCTA = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const batsmen = [
    { name: 'Rohit Sharma (c)', runs: 102, balls: 89, fours: 12, sixes: 2, sr: '114.61', status: 'b Starc' },
    { name: 'Virat Kohli', runs: 67, balls: 52, fours: 7, sixes: 1, sr: '128.85', status: 'c Carey b Zampa' },
    { name: 'Shreyas Iyer', runs: 48, balls: 37, fours: 5, sixes: 1, sr: '129.73', status: 'c Maxwell b Cummins' },
    { name: 'KL Rahul (wk) *', runs: 38, balls: 24, fours: 3, sixes: 2, sr: '158.33', status: 'not out' },
    { name: 'Hardik Pandya *', runs: 19, balls: 11, fours: 2, sixes: 1, sr: '172.72', status: 'not out' },
  ];

  const recentBalls = [
    { ball: '47.5', val: '1', type: 'single' },
    { ball: '47.6', val: '4', type: 'boundary' },
    { ball: '48.1', val: '1', type: 'single' },
    { ball: '48.2', val: '0', type: 'dot' },
    { ball: '48.3', val: '4', type: 'boundary' },
    { ball: '48.4', val: '6', type: 'six' },
  ];

  const commentaryFeed = [
    {
      over: '48.4',
      title: 'SIX! Pure timing from Hardik Pandya!',
      text: 'Cummins digs it short, Pandya swivels effortlessly and pulls it into the deep mid-wicket stands! Massive hit into the crowd.',
      highlight: true,
    },
    {
      over: '48.3',
      title: 'FOUR! Sliced over backward point',
      text: 'Full and outside off, Pandya opens the face of the bat and carves it over the infield for a crisp boundary.',
      highlight: true,
    },
    {
      over: '48.2',
      title: 'Dot ball',
      text: 'Yorker right in the blockhole from Pat Cummins. Dug out safely back to the bowler.',
      highlight: false,
    },
    {
      over: '48.1',
      title: 'Single down to long-on',
      text: 'Rahul pushes a slower ball down to long-on to turn the strike over.',
      highlight: false,
    },
  ];

  return (
    <div className={`w-full rounded-2xl bg-gradient-to-b from-[#063d2c]/95 to-[#022319]/95 border border-emerald-500/25 shadow-2xl backdrop-blur-md overflow-hidden text-white ${className}`}>
      {/* ── Top Match Header ── */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-[#042f20] via-[#064e3b] to-[#042f20] border-b border-emerald-500/20 relative overflow-hidden">
        {/* Soft dissolved background */}
        <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none">
          <Image
            src="/images/banners/team_huddle_clean.jpg"
            alt="Cricket Stadium Atmosphere"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#042f20] via-transparent to-[#042f20]" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-red-400 bg-red-950/60 border border-red-800/50 px-2 py-0.5 rounded-full">
              LIVE MATCH CENTRE
            </span>
            <span className="text-xs text-emerald-200/70 hidden sm:inline">• 3rd ODI • Bilateral Trophy</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs text-emerald-300 font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Wankhede Stadium, Mumbai</span>
            </div>
            <button
              onClick={handleCTA}
              className="p-1.5 rounded-lg bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-300 border border-emerald-500/30 transition-all cursor-pointer"
              title="Set Match Alert"
            >
              <Bell className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ── Teams & Big Score Display ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Team 1: India */}
          <div className="md:col-span-5 flex items-center justify-between md:justify-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-xl shadow-inner">
                🇮🇳
              </div>
              <div>
                <div className="font-extrabold text-base sm:text-lg text-white">India</div>
                <div className="text-[11px] text-emerald-300 font-semibold">1st Innings</div>
              </div>
            </div>
            <div className="text-right md:ml-auto">
              <div className="font-mono text-2xl sm:text-3xl font-black text-[#F0C419] tracking-tight">
                278/4
              </div>
              <div className="text-xs text-white/70 font-mono">48.2 / 50 ov • CRR: 5.76</div>
            </div>
          </div>

          {/* VS Divider & Odds Pill */}
          <div className="md:col-span-2 text-center py-1">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-wider shadow">
              VS
            </div>
          </div>

          {/* Team 2: Australia */}
          <div className="md:col-span-5 flex items-center justify-between md:justify-end gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="text-left md:text-right md:mr-auto">
              <div className="text-xs text-white/60 font-medium">Yet to bat</div>
              <div className="text-[11px] text-amber-300/80 font-semibold">Target: TBD</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <div className="font-extrabold text-base sm:text-lg text-white">Australia</div>
                <div className="text-[11px] text-white/60">2nd Innings</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-600/30 border border-amber-400/40 flex items-center justify-center text-xl shadow-inner">
                🇦🇺
              </div>
              <div className="md:hidden">
                <div className="font-extrabold text-base text-white">Australia</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Live Match Odds Bar (Direct from Mockup) ── */}
        <div className="mt-4 p-3 rounded-xl bg-[#022319] border border-emerald-500/30 flex flex-wrap items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#F0C419]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Live Exchange Match Odds:
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* India Odds */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/60 border border-emerald-500/40">
              <span className="text-xs font-semibold text-white/80">India:</span>
              <span className="text-sm font-mono font-black text-[#F0C419]">1.62</span>
            </div>

            {/* Tie Odds */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <span className="text-xs font-semibold text-white/60">Tie:</span>
              <span className="text-sm font-mono font-bold text-white/60">35.0</span>
            </div>

            {/* Australia Odds */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/60 border border-emerald-500/40">
              <span className="text-xs font-semibold text-white/80">Australia:</span>
              <span className="text-sm font-mono font-black text-emerald-300">2.25</span>
            </div>

            <button
              onClick={handleCTA}
              className="emerald-pill-btn py-1.5 px-4 text-xs font-bold shadow-md cursor-pointer ml-1"
            >
              Trade Now
            </button>
          </div>
        </div>
      </div>

      {/* ── Navigation Tabs ── */}
      <div className="flex items-center border-b border-emerald-500/20 bg-[#03291d] px-4 pt-2 gap-2 overflow-x-auto scrollbar-none">
        {(['scorecard', 'commentary', 'ballbyball', 'stats'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === tab
                ? 'border-[#F0C419] text-[#F0C419] bg-white/5 rounded-t-lg'
                : 'border-transparent text-white/70 hover:text-white hover:bg-white/5 rounded-t-lg'
            }`}
          >
            {tab === 'ballbyball' ? 'Ball by Ball' : tab}
          </button>
        ))}
      </div>

      {/* ── Tab Content Area ── */}
      <div className="p-4 sm:p-6 bg-[#04281e]/60">
        {activeTab === 'scorecard' && (
          <div className="space-y-6">
            {/* Scorecard Table */}
            <div className="overflow-x-auto rounded-xl border border-emerald-500/20 bg-[#022319]/80 shadow">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-emerald-950/70 border-b border-emerald-500/20 text-emerald-300/90 font-bold uppercase text-[11px] tracking-wider">
                    <th className="py-2.5 px-3 sm:px-4">India Innings</th>
                    <th className="py-2.5 px-2 text-right">R</th>
                    <th className="py-2.5 px-2 text-right">B</th>
                    <th className="py-2.5 px-2 text-right">4s</th>
                    <th className="py-2.5 px-2 text-right">6s</th>
                    <th className="py-2.5 px-3 text-right">SR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-500/10">
                  {batsmen.map((b, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-2.5 px-3 sm:px-4">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          {b.name}
                          {b.status === 'not out' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          )}
                        </div>
                        <div className="text-[11px] text-white/50">{b.status}</div>
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono font-bold text-[#F0C419]">{b.runs}</td>
                      <td className="py-2.5 px-2 text-right font-mono text-white/80">{b.balls}</td>
                      <td className="py-2.5 px-2 text-right font-mono text-white/80">{b.fours}</td>
                      <td className="py-2.5 px-2 text-right font-mono text-white/80">{b.sixes}</td>
                      <td className="py-2.5 px-3 text-right font-mono font-semibold text-emerald-300">{b.sr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Match Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-black/25 border border-emerald-500/20">
                <div className="text-white/60 mb-0.5">Toss</div>
                <div className="font-bold text-white">India won & opted to bat</div>
              </div>
              <div className="p-3 rounded-xl bg-black/25 border border-emerald-500/20">
                <div className="text-white/60 mb-0.5">Current Partnership</div>
                <div className="font-bold text-[#F0C419]">57 runs (35 balls)</div>
              </div>
              <div className="p-3 rounded-xl bg-black/25 border border-emerald-500/20">
                <div className="text-white/60 mb-0.5">Projected Score</div>
                <div className="font-bold text-white">292 - 305 runs</div>
              </div>
              <div className="p-3 rounded-xl bg-black/25 border border-emerald-500/20">
                <div className="text-white/60 mb-0.5">Bowler on Attack</div>
                <div className="font-bold text-emerald-300">Pat Cummins (2/52 in 9.2)</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commentary' && (
          <div className="space-y-4">
            {/* Recent Deliveries Strip */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#022319] border border-emerald-500/25">
              <span className="text-xs font-bold text-white/70 uppercase">Over 48:</span>
              <div className="flex items-center gap-1.5">
                {recentBalls.map((r, i) => (
                  <span
                    key={i}
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                      r.type === 'six'
                        ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30'
                        : r.type === 'boundary'
                        ? 'bg-emerald-500 text-white'
                        : r.type === 'dot'
                        ? 'bg-white/10 text-white/60'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {r.val}
                  </span>
                ))}
              </div>
            </div>

            {/* Commentary Timeline */}
            <div className="space-y-3">
              {commentaryFeed.map((c, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all ${
                    c.highlight
                      ? 'bg-emerald-950/40 border-emerald-500/40'
                      : 'bg-black/20 border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-black text-[#F0C419] px-2 py-0.5 rounded bg-black/40">
                      {c.over}
                    </span>
                    <span className="font-bold text-sm text-white">{c.title}</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed pl-1">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ballbyball' && (
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-[#022319] border border-emerald-500/20 text-white/80">
              <div className="font-bold text-sm text-white mb-2">Over-by-Over In-Play Trends</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-2.5 rounded-lg bg-black/30 border border-white/10">
                  <div className="text-white/60">Overs 41-45</div>
                  <div className="font-mono font-bold text-[#F0C419] text-base">44 Runs (1 Wkt)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/30 border border-white/10">
                  <div className="text-white/60">Overs 31-40</div>
                  <div className="font-mono font-bold text-white text-base">62 Runs (0 Wkt)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/30 border border-white/10">
                  <div className="text-white/60">Powerplay 1</div>
                  <div className="font-mono font-bold text-emerald-300 text-base">61/0 (10 ov)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/30 border border-white/10">
                  <div className="text-white/60">Match Momentum</div>
                  <div className="font-bold text-emerald-400 text-sm">India 68% Dominance</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-[#022319] border border-emerald-500/20">
              <div className="font-bold text-sm text-white mb-3">Head-to-Head &amp; Ground History</div>
              <div className="space-y-2">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/70">Average 1st Innings at Wankhede:</span>
                  <span className="font-bold text-white">284 Runs</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/70">Toss Winner Win Percentage:</span>
                  <span className="font-bold text-emerald-300">58.3% Batting First</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/70">Last 5 ODI Encounters:</span>
                  <span className="font-bold text-[#F0C419]">India 3 - 2 Australia</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Bottom Widget CTA ── */}
        <div className="mt-6 pt-4 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-emerald-200/90 text-center sm:text-left">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>0% Commission peer-to-peer exchange available on all ODI bilateral matches</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/cricket-betting"
              className="text-xs font-bold text-emerald-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>View All Fixtures</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={handleCTA}
              className="emerald-pill-btn py-2 px-5 text-xs font-bold shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Get WhatsApp ID to Trade</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
