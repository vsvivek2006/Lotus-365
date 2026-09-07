import React from 'react';
import { Lock, MessageCircle, Crown, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface FinalCtaProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
  onOpenApk?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenAuth }) => {
  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C] relative overflow-hidden">
      {/* Exact Bold CTA Card from https://lottuss365.co/ */}
      <div className="cta-section-bold max-w-5xl mx-auto p-8 sm:p-12 text-center relative z-10 border border-white/20 shadow-2xl">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/25 border border-[#F0C419]/30 text-xs font-extrabold text-[#F0C419] uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-[#F0C419]" />
          <span>India's Most Trusted Gaming Platform</span>
        </div>

        {/* Heading in #F0C419 */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F0C419] tracking-tight leading-tight mb-4">
          Your Next Win Awaits
        </h2>

        {/* Subtitle in Cream #FFFAE5 */}
        <p className="text-[#FFFAE5] text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          Your premier gaming experience is just one click away. Choose your path and start playing on India’s most trusted platform today.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 mb-10">
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#F0C419]" />
            <span>2-Minute Guaranteed Payouts</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Zero Commission on Cricket Exchange</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#FFD000]" />
            <span>Min Deposit Just ₹100</span>
          </span>
        </div>

        {/* The 4 Exact Primary Theme Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-8">
          <button
            onClick={handleWhatsApp}
            className="cta-button min-w-[190px]"
            id="final-login-btn"
          >
            <Lock className="w-4 h-4 mr-1.5" />
            <span>Lotus365 Login Now</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="cta-button min-w-[190px]"
            id="final-signup-btn"
          >
            <MessageCircle className="w-4 h-4 mr-1.5" />
            <span>Lotus365 Sign Up Free</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="cta-button-outline min-w-[160px]"
            id="final-vip-btn"
          >
            <Crown className="w-4 h-4 mr-1.5 text-[#F0C419]" />
            <span>Lotus365 VIP</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="cta-button-outline min-w-[160px]"
            id="final-blue-btn"
          >
            <Zap className="w-4 h-4 mr-1.5 text-[#38BDF8]" />
            <span>Lotus365 Blue Web</span>
          </button>
        </div>

        {/* Existing User Login Link */}
        <div className="text-xs sm:text-sm text-white/75">
          Already have an account?{' '}
          <button
            onClick={handleWhatsApp}
            className="inline-link ml-1 cursor-pointer font-bold"
          >
            Log In to Lotus365 Dashboard
          </button>
        </div>
      </div>
    </section>
  );
};
