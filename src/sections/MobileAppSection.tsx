"use client";
import Link from 'next/link';
import React from 'react';
import { Smartphone, ShieldCheck, Zap, MessageCircle, ArrowRight, CheckCircle2, Sparkles, Trophy, CreditCard } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface MobileAppProps {
  onAction?: () => void;
}

export const MobileAppSection: React.FC<MobileAppProps> = () => {
  const handleOpenWhatsApp = () => {
    window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="mobile-play" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Seamless Mobile Experience & Direct WhatsApp Service */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Smooth, Responsive &amp; Instant On Any Phone</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Play Instantly on Your Smartphone –{' '}
              <span className="text-emerald-700">Anytime, Anywhere</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are following a live IPL match on the move or playing casino games at home, Lotus365 delivers a fluid 60 FPS mobile web experience. Connect with your dedicated WhatsApp manager, manage your balance in seconds, and cash out within 2 minutes.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-0.5">Bank-Grade 256-Bit Security</h3>
                  <p className="text-[11px] text-slate-500">Your balance, bets, and personal details remain encrypted and fully protected 24/7.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-0.5">Instant WhatsApp ID</h3>
                  <p className="text-[11px] text-slate-500">Chat with our verified human support desk to create your account in under 30 seconds.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-0.5">2-Minute Direct Cashouts</h3>
                  <p className="text-[11px] text-slate-500">Fast withdrawals straight to your UPI, Google Pay, PhonePe, or bank account.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-0.5">1-Tap Home Screen Bookmark</h3>
                  <p className="text-[11px] text-slate-500">Add Lotus365 directly to your home screen for instant one-touch access anytime.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full sm:w-auto emerald-pill-btn !py-3.5 !px-8 text-sm font-black shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get WhatsApp ID for Mobile</span>
              </button>

              <Link
                href="/how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-bold transition-all text-center"
              >
                <span>Read Mobile Guide</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Sleek Modern Phone Mockup (Silver/White Aesthetic, Zero Black) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[300px] sm:w-[320px] rounded-[48px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-700">
              
              {/* Dynamic Island / Speaker Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2 shrink-0 z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700 ml-auto mr-3" />
              </div>

              {/* Phone Inner Screen (White & Emerald Theme) */}
              <div className="rounded-[36px] bg-white p-4 flex flex-col justify-between overflow-hidden border border-slate-100 min-h-[520px]">
                
                {/* Mini Top Bar */}
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-3">
                    <span className="font-black text-sm text-slate-900">
                      Lotus<span className="text-emerald-600">365</span>
                    </span>
                    <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      LIVE IN-PLAY
                    </span>
                  </div>

                  {/* Live Match Card */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-emerald-800">ICC World Cup</span>
                      <span className="text-[10px] font-black text-red-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" /> LIVE
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-extrabold text-xs text-slate-900">
                      <span>India: 278/4 (48.2)</span>
                      <span className="text-emerald-700 font-mono">1.62</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                      <span>Australia: Yet to bat</span>
                      <span className="text-slate-700 font-mono">2.25</span>
                    </div>
                  </div>

                  {/* Quick Features */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <div className="font-bold text-slate-900">Aviator Radar</div>
                      <div className="font-mono font-black text-amber-500 text-xs">8.42x</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <div className="font-bold text-slate-900">Live Casino</div>
                      <div className="text-emerald-600 font-bold text-xs">1,000+ Tables</div>
                    </div>
                  </div>
                </div>

                {/* Bottom App Actions */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={handleOpenWhatsApp}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Get Instant ID on WhatsApp</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
