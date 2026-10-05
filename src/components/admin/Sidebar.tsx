"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FileText,
  Sparkles,
  LogOut,
  Loader2,
  X,
  ExternalLink,
  Globe,
} from "lucide-react";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";

import { LotusBrandLogo } from "@/components/brand/LotusBrandLogo";

export interface NavItem {
  label: string;
  href: string;
  icon: typeof FileText;
  exact?: boolean;
}

export const navItems: NavItem[] = [
  { label: "All Articles", href: "/admin/blog", icon: FileText },
  { label: "Write Article", href: "/admin/blog/new?mode=ai", icon: Sparkles },
];

interface SidebarProps {
  userEmail?: string | null;
  userRole?: string | null;
  isMobileOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({
  userEmail,
  userRole = "admin",
  isMobileOpen = false,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    if (!isMobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen, onClose]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    toast.success("Logged out successfully");
    try {
      const supabase = createClient();
      await supabase.auth.signOut({ scope: "local" });
      supabase.auth.signOut().catch(() => {});
      if (onClose) onClose();
      window.location.replace("/admin/login");
    } catch {
      if (onClose) onClose();
      window.location.replace("/admin/login");
    }
  };

  const navContent = (
    <div className="flex flex-col h-full bg-gray-950 border-r border-gray-800/80 overflow-hidden">
      {/* Brand Header with Official Logo */}
      <div className="px-5 py-4 border-b border-gray-800/80 flex items-center justify-between shrink-0 bg-gray-950/80">
        <LotusBrandLogo
          size="sm"
          subtitle="Admin Studio"
          badge="PORTAL"
          href="/admin/blog"
        />
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Primary Action Button */}
      <div className="px-4 pt-4 pb-2 shrink-0">
        <Link
          href="/admin/blog/new?mode=ai"
          className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-brand-gold hover:bg-brand-goldBright text-gray-950 transition-all shadow-md shadow-brand-gold/20"
        >
          <Sparkles className="w-3.5 h-3.5 text-gray-950" />
          <span>Write AI Article</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto min-h-0 px-3 py-3 space-y-1">
        <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
          Management
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact
            ? pathname === item.href
            : pathname === item.href || (pathname.startsWith(`${item.href}/`) && item.href !== "/admin");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? "bg-brand-emeraldDark/70 border border-brand-gold/40 text-brand-gold shadow-sm"
                  : "text-gray-400 hover:bg-gray-900 hover:text-white"
              }`}
            >
              <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-brand-gold" : "text-gray-400"}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        <div className="pt-3 border-t border-gray-800/80 mt-3">
          <Link
            href="/blog"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>View Public Blog</span>
            </div>
            <ExternalLink className="w-3 h-3 text-gray-500" />
          </Link>
        </div>
      </div>

      {/* User Profile & Sign Out Footer */}
      <div className="p-3 border-t border-gray-800/80 space-y-2 bg-gray-950 shrink-0">
        {userEmail && (
          <div className="p-2.5 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-brand-emeraldDark border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 font-bold text-xs uppercase shadow-sm">
                {(userEmail)[0]}
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold text-xs text-white" title={userEmail}>
                  {userEmail.split("@")[0]}
                </p>
                <span className="inline-block text-[9px] font-semibold px-1.5 py-0.2 rounded-full border border-brand-gold/30 bg-brand-emeraldDark/40 text-brand-gold uppercase tracking-wider">
                  {userRole}
                </span>
              </div>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-rose-400 hover:bg-rose-950/20 border border-transparent hover:border-rose-900/30 transition-all disabled:opacity-50 cursor-pointer"
        >
          {isLoggingOut ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Signing out...</span>
            </>
          ) : (
            <>
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed 260px) */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 z-40">
        {navContent}
      </aside>

      {/* Mobile Drawer (Overlay) */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />
          <div className="fixed inset-y-0 left-0 w-72 max-w-[85vw] shadow-2xl z-50">
            {navContent}
          </div>
        </div>
      )}
    </>
  );
}
