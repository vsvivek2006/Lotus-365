import React from "react";

export default function BlogPostLoading() {
  return (
    <article className="min-h-screen bg-brand-dark text-white animate-pulse">
      {/* Header Skeleton */}
      <header className="bg-gradient-to-b from-brand-surface via-brand-dark to-brand-dark py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="h-4 w-28 bg-brand-gold/20 rounded" />
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-brand-green/30 rounded-full" />
            <div className="h-6 w-24 bg-brand-green/30 rounded-full" />
          </div>
          <div className="space-y-3 pt-2">
            <div className="h-10 sm:h-14 bg-slate-800/80 rounded-2xl w-11/12" />
            <div className="h-10 sm:h-14 bg-slate-800/60 rounded-2xl w-3/4" />
          </div>
          <div className="flex items-center gap-6 pt-5 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-800" />
              <div className="h-4 w-28 bg-slate-800 rounded" />
            </div>
            <div className="h-4 w-24 bg-slate-800 rounded" />
            <div className="h-4 w-20 bg-slate-800 rounded" />
          </div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="aspect-video w-full rounded-2xl bg-slate-800/80 border border-white/10" />
        <div className="space-y-4 pt-4">
          <div className="h-4 bg-slate-800 rounded w-full" />
          <div className="h-4 bg-slate-800 rounded w-11/12" />
          <div className="h-4 bg-slate-800 rounded w-4/5" />
          <div className="h-7 bg-slate-800/80 rounded-lg w-2/5 my-6" />
          <div className="h-4 bg-slate-800 rounded w-full" />
          <div className="h-4 bg-slate-800 rounded w-10/12" />
          <div className="h-4 bg-slate-800 rounded w-3/4" />
        </div>
      </div>
    </article>
  );
}
