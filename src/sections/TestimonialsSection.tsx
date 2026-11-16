"use client";
import Link from 'next/link';
import React, { useState } from 'react';

import { Star, ShieldCheck, MessageCircle, ArrowRight, Trophy, Zap, Award } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface TestimonialsProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  badge: string;
  category: 'cricket' | 'cashout' | 'casino' | 'vip';
  headline: string;
  quote: string;
  winAmount?: string;
  game: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rohit Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    badge: 'Verified ID ✓',
    category: 'cashout',
    headline: '₹1,40,000 In My UPI Account in Just 2 Minutes!',
    quote:
      'I was hesitant at first about online IDs, but Lotus365 is 100% genuine. I backed India on the live cricket exchange, won ₹1,40,000, and requested a cashout on WhatsApp. The full amount was in my PhonePe in literally 2 minutes with zero deductions. Best experience ever.',
    winAmount: '₹1,40,000 Won',
    game: 'Cricket Exchange',
  },
  {
    name: 'Amanpreet Singh',
    location: 'Ludhiana, Punjab',
    rating: 5,
    badge: 'Verified ID ✓',
    category: 'cricket',
    headline: 'Unmatched 0% Commission on Cricket Matches',
    quote:
      'The 0% commission on marquee cricket matches gives you so much more return than local bookmakers. Backing and laying odds are the sharpest in India. Plus, the WhatsApp support desk responds within seconds whenever you message them.',
    winAmount: '₹85,000 Won',
    game: 'IPL Cricket Trading',
  },
  {
    name: 'Vikram Rajan',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    badge: 'Verified ID ✓',
    category: 'casino',
    headline: 'Aviator 18.5x Multiplier & Authentic Teen Patti',
    quote:
      'Aviator crashed at 18.5x and my auto-cashout triggered at 10x on a ₹2,000 wager — won ₹20,000 clean in one round! Live Teen Patti with Indian dealers feels just like Goa. Smooth graphics on my phone with zero lag.',
    winAmount: '₹20,000 Won',
    game: 'Aviator Crash Pro',
  },
  {
    name: 'Deepak Mishra',
    location: 'Delhi NCR',
    rating: 5,
    badge: 'VIP Member ★',
    category: 'vip',
    headline: 'Real Human Support on WhatsApp, Not Annoying Bots',
    quote:
      'What really sets Lotus365 apart is that you speak with polite, professional humans on WhatsApp. My deposit was confirmed in 20 seconds at 2:30 AM. Having a dedicated support team that values your time makes all the difference.',
    winAmount: '₹3,20,000 Won',
    game: 'Lotus365 VIP Club',
  },
  {
    name: 'Karan Tanwar',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    badge: 'Verified ID ✓',
    category: 'cashout',
    headline: 'Zero Withdrawal Deductions & Instant IMPS',
    quote:
      'Other platforms hold your funds or cut 5% to 10% during withdrawal. On Lotus365, when you win ₹50,000, you get exactly ₹50,000 in your bank. Transparent, reliable, and completely trustworthy.',
    winAmount: '₹50,000 Won',
    game: 'Live Roulette',
  },
  {
    name: 'Suresh Venkatesh',
    location: 'Hyderabad, Telangana',
    rating: 5,
    badge: 'Verified ID ✓',
    category: 'casino',
    headline: 'Fastest Payouts I Have Ever Experienced',
    quote:
      'I have tried dozens of betting websites over the last 4 years. None of them match the sheer speed and reliability of Lotus365. Instant ID setup, quick UPI QR codes, and payouts in under 2 minutes.',
    winAmount: '₹1,15,000 Won',
    game: 'Cricket Exchange & Live Tables',
  },
];

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ onOpenAuth }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'cricket' | 'cashout' | 'casino' | 'vip'>('all');

  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const filtered = activeTab === 'all' ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.category === activeTab);

  return (
    <section id="player-reviews" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 uppercase tracking-wider mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>4.9 / 5 Star Rating From 250,000+ Indian Players</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Loved by Players Across India – <span className="text-emerald-700">Real Stories &amp; Winnings</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            See what everyday sports fans and casino enthusiasts say about our 2-minute cashouts, fair 0% commission cricket odds, and round-the-clock WhatsApp support.
          </p>
        </div>

        {/* 4 Trust Metrics Highlight Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-black text-amber-500 flex items-center justify-center gap-1">
              <span>4.9</span>
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5 font-medium">Overall Trust Score</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-black text-emerald-600 flex items-center justify-center gap-1">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>2 Mins</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5 font-medium">Fastest UPI Cashout</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-black text-slate-900 flex items-center justify-center gap-1">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>₹12+ Cr</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5 font-medium">Daily Winnings Paid</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-black text-sky-600 flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>100%</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5 font-medium">Fund Safety Guaranteed</div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'cashout', label: '⚡ 2-Min Cashouts' },
            { id: 'cricket', label: '🏏 Cricket Exchange' },
            { id: 'casino', label: '🎰 Live Casino & Aviator' },
            { id: 'vip', label: '👑 VIP Experience' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-sm font-black'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {(activeTab === 'all' ? filtered.slice(0, 3) : filtered).map((t, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                {/* Header with Rating Stars and Win Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-black">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                    <span className="tracking-widest">★★★★★</span>
                  </div>
                  {t.winAmount && (
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {t.winAmount}
                    </span>
                  )}
                </div>

                {/* Testimonial Headline */}
                <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                  "{t.headline}"
                </h3>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-bold">{t.badge}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">{t.location}</div>
                </div>

                <span className="text-[10px] text-slate-700 font-mono bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {t.game}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Conversational Call to Action Strip with Redirect Links */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#065f46] border border-emerald-600/30 text-center max-w-4xl mx-auto shadow-xl text-white">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Ready to Experience India's Most Trusted Gaming Platform?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-50/90 mb-6 max-w-xl mx-auto">
            Get your verified WhatsApp ID in under 30 seconds. Start playing live cricket odds or casino games with a 100% welcome bonus today!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="gold-pill-btn !py-3.5 !px-8 text-xs sm:text-sm font-black shadow-lg cursor-pointer hover:scale-105 transition-all"
              id="testimonials-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              <span>Get Your WhatsApp ID Now</span>
            </button>

            <Link
              href="/how-it-works"
              className="px-5 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all"
             title="See How It Works">
              <span>See How It Works</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>

            <Link
              href="/cricket-exchange"
              className="px-5 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all"
             title="Explore Cricket Exchange">
              <span>Explore Cricket Exchange</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
