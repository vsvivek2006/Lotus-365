import React from 'react';
import { COMPARISON_DATA } from '../data/landingData';
import { Check, X, Award, ArrowRight } from 'lucide-react';

interface ComparisonProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const ComparisonSection: React.FC<ComparisonProps> = ({ onOpenAuth }) => {
  return (
    <section id="comparison" className="py-20 bg-[#14614C] border-t border-white/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-bold text-[#F0C419] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Market Benchmark Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            How Lotus365 Compares to <span className="text-[#F0C419]">Other Sites</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            See for yourself why serious Indian players switch to Lotus365 for faster cashouts, fairer odds, and genuine human support.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-black/25 border border-white/20 overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-black/40 p-4 sm:p-5 border-b border-white/15 text-xs sm:text-sm font-extrabold text-white">
            <div className="col-span-5 sm:col-span-4 text-white/70">BENCHMARK FEATURE</div>
            <div className="col-span-7 sm:col-span-4 text-[#F0C419] flex items-center gap-1.5 text-sm sm:text-base">
              <span>🪷 LOTUS365 OFFICIAL</span>
            </div>
            <div className="hidden sm:block sm:col-span-4 text-white/50 font-normal">
              GENERIC BETTING SITES
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/10">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-white/[0.03] transition-colors text-xs sm:text-sm"
              >
                {/* Feature Name */}
                <div className="col-span-12 sm:col-span-4 font-bold text-white mb-2 sm:mb-0 text-sm">
                  {row.parameter}
                </div>

                {/* Lotus365 Status */}
                <div className="col-span-6 sm:col-span-4 flex items-center gap-2 text-white font-bold">
                  <div className="w-5 h-5 rounded-full bg-[#F0C419] text-[#14614C] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[#F0C419]">{row.lotus365}</span>
                </div>

                {/* Competitor Status */}
                <div className="col-span-6 sm:col-span-4 flex items-center gap-2 text-white/60">
                  {row.advantage ? (
                    <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-white/10 text-white/50 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <span>{row.otherPlatforms}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="p-5 bg-black/40 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="font-bold text-white text-sm">Upgrade to Lotus365 Quality Today</div>
              <div className="text-xs text-white/70">Join with ₹100 deposit and test our sub-2-minute cashouts yourself.</div>
            </div>

            <button
              onClick={() => onOpenAuth('register')}
              className="cta-button py-2.5 px-6 text-xs font-black shrink-0"
            >
              <span>Get Your ID Now</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
