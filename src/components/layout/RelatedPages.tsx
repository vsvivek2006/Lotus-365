import Link from 'next/link';
import React from 'react';

import { ArrowRight } from 'lucide-react';

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
    <section className="related-pages-section py-16 px-4 sm:px-6 lg:px-8 bg-[#05120d] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F0C419]" />
          <span>{title}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group p-5 rounded-2xl bg-[#081a13]/70 border border-white/10 hover:border-[#F0C419]/40 hover:bg-[#0c281e] transition-all flex flex-col justify-between"
              title={page.label}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-extrabold text-white group-hover:text-[#F0C419] transition-colors">
                    {page.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#F0C419] -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{page.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
