import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Zap,
  Flame,
  Plane,
  Lock,
  Crown,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface HeroSectionProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
  onOpenApk?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAuth }) => {
  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  // Simulated Aviator Rocket Multiplier
  const [multiplier, setMultiplier] = useState(1.84);
  const [isFlying, setIsFlying] = useState(true);
  const [oddsSelected, setOddsSelected] = useState<'back' | 'lay' | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMultiplier((prev) => {
        if (prev >= 6.8) {
          setIsFlying(false);
          setTimeout(() => {
            setIsFlying(true);
          }, 1200);
          return 1.12;
        }
        return +(prev + 0.14).toFixed(2);
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="welcome-section relative pt-24 pb-14 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Authentic Reference Content & 4 Exact Action Buttons */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 border border-[#F0C419]/30 text-xs font-semibold mb-5 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F0C419] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F0C419]"></span>
              </span>
              <span className="text-[#F0C419] font-bold">⚡ India's #1 Rated Gaming & Sports Exchange</span>
              <span className="hidden sm:inline text-white/80">• 0% Commission</span>
            </div>

            {/* Display Headline matching https://lottuss365.co/ */}
            <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#F0C419] leading-[1.2] mb-5 tracking-tight">
              Lotus365 Official Website – Lotus365 Blue Login &amp; Get Bonuses
            </h1>

            {/* Authentic Narrative Text from https://lottuss365.co/ */}
            <div className="text-white/90 text-sm sm:text-base leading-relaxed space-y-3.5 mb-8">
              <p>
                When you picture the ultimate online gaming destination, you imagine excitement, a true sense of challenge, and the unparalleled thrill of victory. That is the core of the <strong className="text-white">Lotus365</strong> experience, and so much more. Our mission is to create a vibrant, secure, and fun atmosphere where players of all skill levels can master their favorite games and discover new ones.
              </p>
              <p className="hidden sm:block">
                We have built <strong>Lotus365</strong> to cater to your every requirement, whether you’re a casual player looking for a quick, entertaining cricket wager or a dedicated enthusiast ready for live casino action. Available 24/7, every single day of the year.
              </p>
              <p>
                From your very first{' '}
                <button
                  onClick={handleWhatsApp}
                  className="inline-link cursor-pointer font-bold"
                >
                  Lotus365 login
                </button>
                , you will immediately notice a superior level of quality and service. For our most dedicated players, the{' '}
                <button
                  onClick={handleWhatsApp}
                  className="inline-link cursor-pointer font-bold"
                >
                  Lotus365 VIP
                </button>{' '}
                experience elevates this further, offering an even more streamlined, rewarding, and exclusive journey with{' '}
                <button
                  onClick={handleWhatsApp}
                  className="inline-link cursor-pointer font-bold"
                >
                  Lotus365 Blue
                </button>
                .
              </p>
            </div>

            {/* The 4 Exact Primary Theme Buttons from https://lottuss365.co/ */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mb-8">
              <button
                onClick={handleWhatsApp}
                className="cta-button flex-1 sm:flex-initial min-w-[170px]"
                id="hero-login-btn"
              >
                <Lock className="w-4 h-4 mr-1.5 shrink-0" />
                <span>Lotus365 Login Now</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="cta-button flex-1 sm:flex-initial min-w-[170px]"
                id="hero-signup-btn"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 shrink-0" />
                <span>Lotus365 Sign Up Free</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="cta-button-outline flex-1 sm:flex-initial min-w-[150px]"
                id="hero-vip-btn"
              >
                <Crown className="w-4 h-4 mr-1.5 text-[#F0C419] shrink-0" />
                <span>Lotus365 VIP</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="cta-button-outline flex-1 sm:flex-initial min-w-[150px]"
                id="hero-blue-btn"
              >
                <Zap className="w-4 h-4 mr-1.5 text-[#38BDF8] shrink-0" />
                <span>Lotus365 Blue</span>
              </button>
            </div>

            {/* Micro Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/80 mb-8">
              <span className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#F0C419]" />
                <span>Min Deposit: <strong>₹100</strong></span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#F0C419]" />
                <span>Direct UPI / IMPS / NetBanking</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Licensed &amp; 100% Verified</span>
              </span>
            </div>

            {/* Floating Trust Metrics in Lotus Green Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-xl mx-auto lg:mx-0 pt-4 border-t border-white/20">
              <div className="p-3 rounded-xl bg-black/20 border border-white/15 text-center">
                <div className="font-extrabold text-sm sm:text-xl text-[#F0C419] flex items-center justify-center gap-1">
                  <Zap className="w-4 h-4 text-[#F0C419]" />
                  <span>2 Mins</span>
                </div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium mt-0.5">Instant Cashout</div>
              </div>

              <div className="p-3 rounded-xl bg-black/20 border border-white/15 text-center">
                <div className="font-extrabold text-sm sm:text-xl text-emerald-300 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>100%</span>
                </div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium mt-0.5">Fund Protection</div>
              </div>

              <div className="p-3 rounded-xl bg-black/20 border border-white/15 text-center">
                <div className="font-extrabold text-sm sm:text-xl text-[#FFD000] flex items-center justify-center gap-1">
                  <Sparkles className="w-4 h-4 text-[#FFD000]" />
                  <span>24/7</span>
                </div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium mt-0.5">WhatsApp Support</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Live Sports & Aviator Simulation Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-black/25 border border-white/20 p-5 sm:p-6 shadow-2xl backdrop-blur-md">
                {/* Header of Preview Box */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/15 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Live In-Play Exchange
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 text-[#F0C419] border border-[#F0C419]/30">
                    MATCH #402
                  </span>
                </div>

                {/* Match Card Simulation */}
                <div className="p-4 rounded-xl bg-black/30 border border-white/15 mb-4">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span className="text-base">🏏</span> India vs Australia
                    </span>
                    <span className="text-[10px] text-emerald-300 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      LIVE • 17.4 OV
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    {/* Back Option */}
                    <button
                      onClick={() => setOddsSelected('back')}
                      className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                        oddsSelected === 'back'
                          ? 'bg-blue-600/30 border-blue-400 text-white ring-2 ring-blue-400'
                          : 'bg-blue-900/30 border-blue-500/30 text-blue-200 hover:bg-blue-800/40'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-bold text-blue-300">Back (India)</div>
                      <div className="text-base font-black text-white mt-0.5">1.94</div>
                      <div className="text-[9px] text-blue-300/80">Vol: ₹1.4Cr</div>
                    </button>

                    {/* Lay Option */}
                    <button
                      onClick={() => setOddsSelected('lay')}
                      className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                        oddsSelected === 'lay'
                          ? 'bg-pink-600/30 border-pink-400 text-white ring-2 ring-pink-400'
                          : 'bg-pink-900/30 border-pink-500/30 text-pink-200 hover:bg-pink-800/40'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-bold text-pink-300">Lay (India)</div>
                      <div className="text-base font-black text-white mt-0.5">1.96</div>
                      <div className="text-[9px] text-pink-300/80">Vol: ₹85L</div>
                    </button>
                  </div>
                </div>

                {/* Aviator Live Multiplier Simulator */}
                <div className="p-4 rounded-xl bg-black/30 border border-white/15 mb-5 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-white/80 font-bold flex items-center gap-1">
                      <Plane className="w-3.5 h-3.5 text-red-400" />
                      <span>Aviator Multiplier</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">CRASH GAME</span>
                  </div>

                  <div className="h-20 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center z-10">
                      <div
                        className={`font-mono font-black text-2xl sm:text-3xl transition-all ${
                          isFlying ? 'text-[#F0C419]' : 'text-red-500 animate-bounce'
                        }`}
                      >
                        {isFlying ? `${multiplier}x` : 'FLEW AWAY!'}
                      </div>
                      <div className="text-[10px] text-white/70">
                        {isFlying ? 'Rocket climbing...' : 'Next round starts in 2s'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant Action Button on the card */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full cta-button py-3 text-sm font-black"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Get WhatsApp Demo ID Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
