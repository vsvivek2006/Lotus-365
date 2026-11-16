import React from 'react';
import Link from 'next/link';
import { GUIDE_ARTICLES } from '../data/landingData';
import { BookOpen, ArrowRight, Clock, Star, Sparkles } from 'lucide-react';

interface GuidesProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const GuidesSection: React.FC<GuidesProps> = ({ onOpenAuth }) => {
  const getGuideUrl = (id: string) => {
    switch (id) {
      case '1':
        return '/cricket-betting';
      case '2':
        return '/how-it-works';
      case '3':
        return '/vip-club';
      default:
        return '/blog';
    }
  };

  return (
    <section id="guides" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3 shadow-sm">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Expert Guides &amp; Strategy</span>
            </div>
            <h2 className="font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Lotus365 Knowledge Hub &amp; <span className="text-emerald-700">Exchange Tips</span>
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Learn how to trade odds, maximize VIP cashback, and take full advantage of our ultra-fast Lotus365 platform.
            </p>
          </div>

          <Link
            href="/blog"
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 self-start md:self-auto group"
          >
            <span>Explore All Strategy Guides</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDE_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between group hover:border-emerald-400 hover:shadow-lg transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-4">
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Free Strategy Guide</span>
                <Link
                  href={getGuideUrl(article.id)}
                  className="text-xs font-bold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
