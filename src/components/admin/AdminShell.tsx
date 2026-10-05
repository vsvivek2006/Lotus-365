"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { LotusBrandLogo } from "@/components/brand/LotusBrandLogo";
import { Sidebar } from "./Sidebar";

interface AdminShellProps {
  userEmail?: string | null;
  userRole?: string | null;
  children: React.ReactNode;
}

export function AdminShell({
  userEmail,
  userRole,
  children,
}: AdminShellProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // If on login page, render children directly without admin shell chrome
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen w-full bg-gray-950 text-gray-200 overflow-hidden relative">
      {/* Sidebar (Desktop + Mobile Slide-over Drawer) */}
      <Sidebar
        userEmail={userEmail}
        userRole={userRole}
        isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Navigation Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shrink-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Open sidebar menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="lg:hidden">
              <LotusBrandLogo size="sm" showSubtitle={false} href="/admin" />
            </div>
            <div className="hidden lg:flex items-center gap-2 text-xs text-gray-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-300 font-bold">Lotus365</span>
              <span className="text-gray-600">/</span>
              <span className="text-[#F0C419] font-bold">Admin Workspace</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/admin/blog/new"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-emeraldDark/80 border border-brand-gold/40 text-brand-gold hover:bg-brand-emeraldDark transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Studio</span>
            </Link>
            <Link
              href="/blog"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-gray-700 bg-gray-800/80 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              title="View Public Blog"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Blog</span>
            </Link>
          </div>
        </header>

        {/* Page Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto focus:outline-none [scrollbar-width:thin] [scrollbar-color:#374151_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-800 hover:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
          {children}
        </main>
      </div>
    </div>
  );
}
