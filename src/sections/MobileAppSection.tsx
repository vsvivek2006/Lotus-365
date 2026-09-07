import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ShieldCheck, Zap, MessageCircle, ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface MobileAppProps {
  onAction?: () => void;
}

export const MobileAppSection: React.FC<MobileAppProps> = () => {
  const handleOpenWhatsApp = () => {
    window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="mobile-play" className="py-20 bg-[#14614C] border-t border-white/15 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#F0C419]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Seamless Mobile Experience & Direct WhatsApp Service */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 text-[#F0C419] border border-[#F0C419]/30 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smooth, Responsive &amp; Instant On Any Phone</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Play Instantly on Your Smartphone –{' '}
              <span className="text-[#F0C419]">Anytime, Anywhere</span>
            </h2>

            <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are following a live IPL match on the move or spinning the roulette wheel at home, Lotus365 delivers a fluid 60 FPS gaming experience tailored for your phone. Connect with your dedicated WhatsApp manager, manage your balance in seconds, and cash out within 2 minutes.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-3.5 rounded-xl bg-black/25 border border-white/15 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Bank-Grade 256-Bit Security</h4>
                  <p className="text-[11px] text-white/70">Your balance, bets, and personal details remain encrypted and fully protected 24/7.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/25 border border-white/15 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F0C419]/20 text-[#F0C419] shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Instant WhatsApp ID</h4>
                  <p className="text-[11px] text-white/70">Chat with our verified human support desk to create your account in under 30 seconds.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/25 border border-white/15 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/20 text-[#38BDF8] shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">2-Minute Instant Cashouts</h4>
                  <p className="text-[11px] text-white/70">Direct withdrawals to PhonePe, Google Pay, Paytm, and IMPS with zero fees.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/25 border border-white/15 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300 shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Universal Device Compatibility</h4>
                  <p className="text-[11px] text-white/70">Flawless performance on all Android devices, iPhones, iPads, and desktop computers.</p>
                </div>
              </div>
            </div>

            {/* Contextual Navigation / Redirect Links */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={handleOpenWhatsApp}
                className="cta-button w-full sm:w-auto py-3 px-7 text-xs font-black"
                id="mobile-section-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 mr-1.5" />
                <span>Get Instant WhatsApp ID</span>
              </button>

              <Link
                to="/cricket-exchange"
                className="cta-button-outline w-full sm:w-auto py-3 px-5 text-xs font-bold"
              >
                <span>Live Cricket Exchange</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>

              <Link
                to="/live-casino"
                className="cta-button-outline w-full sm:w-auto py-3 px-5 text-xs font-bold"
              >
                <span>Live Casino Tables</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Sleek Smartphone Mockup with Real Gaming View */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 aspect-[9/18.5] rounded-[42px] bg-[#0A1015] p-3 border-4 border-slate-700/60 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden">
              {/* Phone Dynamic Island */}
              <div className="w-24 h-4.5 bg-black rounded-full mx-auto mb-2 shrink-0 z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-slate-900 rounded-full ml-auto mr-2" />
              </div>

              {/* Screen Content */}
              <div className="flex-1 rounded-[32px] bg-[#14614C] p-3.5 flex flex-col justify-between overflow-hidden border border-white/10 relative">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm">🪷</span>
                      <span className="font-extrabold text-xs text-white">LOTUS365</span>
                    </div>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#F0C419] text-[#14614C]">
                      LIVE
                    </span>
                  </div>

                  {/* WhatsApp Support Box Mock */}
                  <div className="p-3 rounded-xl bg-black/30 border border-white/15 mb-3 text-center">
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#25D366] text-white flex items-center justify-center mb-1.5 shadow">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-[11px] font-bold text-white">Official 24/7 Desk</div>
                    <div className="text-[10px] text-emerald-300 font-mono">Instant WhatsApp Service</div>
                    <div className="text-[9px] text-white/70 mt-1">Get verified ID in 30 seconds</div>
                  </div>

                  {/* Features Mini List */}
                  <div className="space-y-1.5 text-[10px] text-white/80">
                    <div className="flex items-center gap-1.5 p-1.5 rounded bg-black/20">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Instant 2-Minute Cashouts</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-1.5 rounded bg-black/20">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Direct UPI / QR Deposits</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-1.5 rounded bg-black/20">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>1000+ Sports &amp; Casino Tables</span>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Action Button on mockup */}
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full py-2 rounded-xl bg-[#F0C419] text-[#14614C] text-[11px] font-black flex items-center justify-center gap-1 shadow-lg"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Connect on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
