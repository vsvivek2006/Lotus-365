import React from 'react';
import { Link } from 'react-router-dom';
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0E4737] border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-extrabold text-[#F0C419] mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Link
              key={page.href}
              to={page.href}
              className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F0C419]/40 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-bold text-white group-hover:text-[#F0C419] transition-colors">
                  {page.label}
                </span>
                <ArrowRight className="w-4 h-4 text-[#F0C419] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <p className="text-xs text-white/60 leading-relaxed">{page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
