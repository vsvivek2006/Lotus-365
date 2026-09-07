import React from 'react';
import { GUIDE_ARTICLES } from '../data/landingData';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

interface GuidesProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const GuidesSection: React.FC<GuidesProps> = ({ onOpenAuth }) => {
  return (
    <section id="guides" className="py-20 bg-[#14614C] border-t border-white/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-bold text-[#F0C419] uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Expert Guides &amp; Strategy</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Lotus365 Knowledge Hub &amp; <span className="text-[#F0C419]">Exchange Tips</span>
            </h2>
            <p className="text-white/80 text-sm mt-2 max-w-xl">
              Learn how to trade odds, maximize VIP cashback, and take full advantage of our ultra-fast Lotus365 Blue platform.
            </p>
          </div>

          <button
            onClick={() => onOpenAuth('register')}
            className="inline-link text-xs font-bold flex items-center gap-1 self-start md:self-auto cursor-pointer"
          >
            <span>Ask a Strategy Question on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDE_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="p-6 rounded-2xl bg-black/25 border border-white/15 flex flex-col justify-between group hover:border-[#F0C419]/50 transition-all shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/30 border border-white/10 text-[#F0C419] font-bold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-white/60">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white mb-3 group-hover:text-[#F0C419] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-white/60 font-semibold">Lotus365 Academy</span>
                <button
                  onClick={() => onOpenAuth('register')}
                  className="text-xs font-bold text-[#F0C419] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
