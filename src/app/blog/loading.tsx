import React from "react";

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      {/* Hero Header Skeleton */}
      <div className="bg-gradient-to-b from-brand-surface via-brand-dark to-brand-dark py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 animate-pulse">
          {/* Eyebrow badge */}
          <div className="h-6 w-44 bg-brand-gold/20 rounded-full mx-auto" />
          {/* Main Title */}
          <div className="h-10 sm:h-14 w-3/4 max-w-lg bg-white/10 rounded-2xl mx-auto" />
          {/* Subtitle */}
          <div className="h-4 w-2/3 max-w-md bg-white/5 rounded-lg mx-auto" />
        </div>
      </div>

      {/* Blog Cards Grid Skeleton */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-brand-surface/80 p-5 flex flex-col justify-between space-y-4 animate-pulse"
            >
              {/* Image thumbnail skeleton */}
              <div className="aspect-video bg-slate-800/80 rounded-xl w-full" />

              {/* Tag & Date */}
              <div className="flex items-center justify-between pt-1">
                <div className="h-5 w-20 bg-brand-green/30 rounded-full" />
                <div className="h-3.5 w-16 bg-slate-800 rounded" />
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <div className="h-4 bg-slate-700 rounded w-11/12" />
                <div className="h-4 bg-slate-800 rounded w-3/4" />
              </div>

              {/* Excerpt */}
              <div className="space-y-1.5 pt-1">
                <div className="h-3 bg-slate-800/60 rounded w-full" />
                <div className="h-3 bg-slate-800/60 rounded w-5/6" />
              </div>

              {/* Author & Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-800" />
                  <div className="h-3.5 w-24 bg-slate-800 rounded" />
                </div>
                <div className="h-3.5 w-16 bg-slate-800 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
