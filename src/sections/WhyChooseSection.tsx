import React from 'react';
import { KEY_FEATURES } from '../data/landingData';
import { Zap, TrendingUp, ShieldCheck, MessageCircle, ArrowRight, CheckCircle2, Award } from 'lucide-react';

interface WhyChooseProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const WhyChooseSection: React.FC<WhyChooseProps> = ({ onOpenAuth }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="w-6 h-6 text-[#F0C419]" />;
      case 'trending-up':
        return <TrendingUp className="w-6 h-6 text-emerald-300" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-blue-300" />;
      case 'message-circle':
      default:
        return <MessageCircle className="w-6 h-6 text-[#F0C419]" />;
    }
  };

  const BEST_OPTION_REASONS = [
    {
      title: 'Effortless 30-Second Access',
      description: 'You never have to jump through frustrating hoops or fill out complex forms. Getting your verified player ID and logging in takes just 30 seconds directly on WhatsApp.',
      linkHref: '/how-it-works',
      linkText: 'See How It Works →',
    },
    {
      title: 'India’s Largest Selection of Games',
      description: 'From peer-to-peer cricket exchange trading and IPL match markets to live dealer Teen Patti, Roulette, and Aviator Crash, you always have thousands of exciting tables ready.',
      linkHref: '/cricket-exchange',
      linkText: 'Explore Cricket Markets →',
    },
    {
      title: 'Guaranteed Fund Security & Fast Payouts',
      description: 'We safeguard every rupee with 256-bit SSL encryption. Your balance is 100% protected, and when you win, your cashout arrives in your UPI account in under 2 minutes.',
      linkHref: '/faq',
      linkText: 'View Safety & Payout FAQ →',
    },
    {
      title: 'Lightning-Fast Play on Any Device',
      description: 'Enjoy fluid 60 FPS gameplay on any smartphone, tablet, or laptop. In-play exchange odds refresh in real-time with zero lag so you never miss a match moment.',
      linkHref: '/live-casino',
      linkText: 'Visit Live Casino Lobby →',
    },
    {
      title: 'Rewarding You Every Time You Play',
      description: 'Unlock an instant 100% welcome bonus on your first deposit, along with weekly loss cashback and dedicated relationship managers in our VIP Club.',
      linkHref: '/vip-club',
      linkText: 'Discover VIP Club Perks →',
    },
  ];

  return (
    <section id="why-us" className="best-option-section py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching https://lottuss365.co/ */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/20 border border-white/20 text-xs font-bold text-[#F0C419] uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>The Lotus365 Advantage</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Why Players Across India Choose Lotus365
          </h2>

          <p className="text-white/85 text-sm sm:text-base leading-relaxed">
            With so many gaming websites online, why do over 500,000 players trust <strong className="text-white">Lotus365</strong> every single day? It all comes down to trust, speed, and real rewards:
          </p>
        </div>

        {/* 2-Column Core Best Option Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: 5 Reasons from reference */}
          <div className="lg:col-span-7 space-y-4">
            {BEST_OPTION_REASONS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-black/20 border border-white/15 hover:border-[#F0C419]/50 transition-all flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#F0C419]/20 border border-[#F0C419]/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#F0C419] group-hover:text-[#14614C] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#F0C419] group-hover:text-[#14614C]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#F0C419] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <a
                    href={item.linkHref}
                    className="text-xs font-bold text-[#F0C419] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{item.linkText}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Platform SLA Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-black/30 border border-white/20 text-center relative overflow-hidden shadow-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#F0C419] text-[#14614C] flex items-center justify-center shadow-lg font-black text-2xl">
                365
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                India's Trusted Sports Exchange
              </h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                Over 500,000 active players trust Lotus365 daily for transparent odds, instant withdrawals, and dedicated VIP support.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-black/25 border border-white/10">
                  <div className="text-xl font-extrabold text-[#F0C419]">0%</div>
                  <div className="text-[10px] text-white/70 font-semibold">Betting Commission</div>
                </div>
                <div className="p-3 rounded-xl bg-black/25 border border-white/10">
                  <div className="text-xl font-extrabold text-emerald-300">&lt; 120s</div>
                  <div className="text-[10px] text-white/70 font-semibold">Direct Cashout</div>
                </div>
              </div>

              <button
                onClick={() => onOpenAuth('register')}
                className="w-full cta-button py-3 text-sm font-black"
              >
                <span>Get Instant WhatsApp ID</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Feature SLA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {KEY_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-2xl bg-black/25 border border-white/15 hover:border-[#F0C419]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center group-hover:bg-[#F0C419]/20 group-hover:border-[#F0C419]/50 transition-colors">
                    {getIcon(feature.icon)}
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-lg sm:text-xl text-white group-hover:text-[#F0C419] transition-colors">
                      {feature.stat}
                    </div>
                    <div className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-base text-white mb-1.5 group-hover:text-[#F0C419] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/80">
                <span className="text-emerald-300">Verified SLA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 text-[#F0C419] transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
