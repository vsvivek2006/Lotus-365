import Link from 'next/link';
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface RelatedPage {
  href: string;
  label: string;
  description: string;
}

interface RelatedPagesProps {
  title?: string;
  pages: RelatedPage[];
}

export const RelatedPages: React.FC<RelatedPagesProps> = ({
  title = 'Explore More on Lotus365',
  pages,
}) => {
  return (
    <section className="related-pages-section py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
          <span>{title}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/60 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              title={page.label}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {page.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-emerald-600 -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{page.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
