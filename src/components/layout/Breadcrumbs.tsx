"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: item.href ? `https://lotus365officialid.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-2.5 px-4 sm:px-6 lg:px-8 bg-black/20 border-b border-white/10 text-xs text-white/70">
        <div className="max-w-6xl mx-auto flex items-center flex-wrap gap-1.5">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#F0C419] transition-colors"
            title="Lotus365 Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#F0C419] transition-colors truncate max-w-[200px]"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#F0C419] font-semibold truncate max-w-[240px]">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
};
