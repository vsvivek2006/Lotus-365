import React from 'react';
import { COMPARISON_DATA } from '../data/landingData';
import { Check, X, Award, ArrowRight } from 'lucide-react';

interface ComparisonProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const ComparisonSection: React.FC<ComparisonProps> = ({ onOpenAuth }) => {
  return (
    <section id="comparison" className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Market Benchmark Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            How Lotus365 Compares to <span className="text-emerald-700">Other Platforms</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            See for yourself why serious Indian players switch to Lotus365 for faster cashouts, fairer odds, and genuine human support.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-lg">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-50 p-4 sm:p-5 border-b border-slate-200 text-xs sm:text-sm font-extrabold text-slate-900">
            <div className="col-span-5 sm:col-span-4 text-slate-500">BENCHMARK FEATURE</div>
            <div className="col-span-7 sm:col-span-4 text-emerald-700 flex items-center gap-1.5 text-sm sm:text-base font-black">
              <span>🪷 LOTUS365 OFFICIAL</span>
            </div>
            <div className="hidden sm:block sm:col-span-4 text-slate-400 font-semibold">
              GENERIC BETTING SITES
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors text-xs sm:text-sm"
              >
                {/* Feature Name */}
                <div className="col-span-12 sm:col-span-4 font-bold text-slate-900 mb-2 sm:mb-0 text-sm">
                  {row.parameter}
                </div>

                {/* Lotus365 Column */}
                <div className="col-span-7 sm:col-span-4 flex items-center gap-2 text-emerald-800 font-bold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span>{row.lotus365}</span>
                </div>

                {/* Others Column */}
                <div className="col-span-5 sm:col-span-4 flex items-center gap-2 text-slate-400 font-medium sm:justify-start justify-end">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <span className="line-through decoration-red-400/50">{row.otherPlatforms}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="p-5 bg-emerald-50 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="font-extrabold text-sm text-emerald-950">
                Ready to Experience the Difference?
              </div>
              <div className="text-xs text-emerald-800">
                Register on WhatsApp in 30 seconds and claim your 100% welcome bonus.
              </div>
            </div>

            <button
              onClick={() => onOpenAuth('register')}
              className="emerald-pill-btn !py-2.5 !px-6 !text-xs font-black shadow-md cursor-pointer"
            >
              <span>Get WhatsApp ID</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
