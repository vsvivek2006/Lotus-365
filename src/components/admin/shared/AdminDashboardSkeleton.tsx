import React from "react";

export function StatCardSkeleton() {
  return (
    <div className="p-5 rounded-2xl border border-white/5 bg-[#0D1B17]/60 animate-pulse flex items-center justify-between">
      <div className="space-y-2">
        <div className="h-3 w-20 bg-slate-800 rounded" />
        <div className="h-7 w-28 bg-slate-700/80 rounded" />
        <div className="h-2.5 w-32 bg-slate-800/60 rounded" />
      </div>
      <div className="w-10 h-10 rounded-xl bg-slate-800/80 shrink-0" />
    </div>
  );
}

export function TableRowSkeleton({ cols = 5 }: { cols?: number }) {
  return (
    <tr className="border-b border-white/5 animate-pulse">
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="py-3.5 px-4">
          <div
            className="h-4 bg-slate-800/70 rounded"
            style={{ width: `${Math.floor(45 + ((i * 17) % 45))}%` }}
          />
        </td>
      ))}
    </tr>
  );
}

export function AdminTablePageSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-white/5">
        <div className="space-y-2">
          <div className="h-7 w-48 bg-slate-800 rounded-lg" />
          <div className="h-3.5 w-64 bg-slate-800/60 rounded" />
        </div>
        <div className="h-9 w-32 bg-slate-800 rounded-xl" />
      </div>

      {/* Filter / Search Bar Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex gap-2">
          <div className="h-9 w-16 bg-slate-800 rounded-lg" />
          <div className="h-9 w-20 bg-slate-800/60 rounded-lg" />
          <div className="h-9 w-16 bg-slate-800/60 rounded-lg" />
        </div>
        <div className="h-9 w-64 bg-slate-800 rounded-lg" />
      </div>

      {/* Table Skeleton */}
      <div className="rounded-2xl border border-white/5 bg-[#0D1B17]/60 overflow-hidden shadow-2xl">
        <div className="h-11 bg-slate-800/60 border-b border-white/5" />
        <div className="divide-y divide-white/5 p-3 space-y-3">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="h-10 bg-slate-800/30 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
