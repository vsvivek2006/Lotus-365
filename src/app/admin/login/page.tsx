"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  Loader2,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  Globe,
  Sparkles,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { LotusBrandLogo } from "@/components/brand/LotusBrandLogo";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawRedirect = searchParams.get("redirectTo");
  const redirectTo =
    rawRedirect && rawRedirect.startsWith("/admin") && !rawRedirect.includes(":")
      ? rawRedirect
      : "/admin";
  const urlError = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    urlError === "forbidden"
      ? "Access restricted: Your account does not have administrator privileges."
      : null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error || !data.user) {
        setErrorMessage("Invalid credentials. Please verify your email and password.");
        toast.error("Sign in failed", {
          description: "Invalid email or password.",
        });
        return;
      }

      // Check role in app_metadata
      const role = (data.user.app_metadata?.role as string | undefined) || "";
      if (!["superadmin", "admin", "editor"].includes(role)) {
        await supabase.auth.signOut();
        setErrorMessage("Access denied: Your account lacks administrative permissions.");
        return;
      }

      toast.success("Welcome back!", {
        description: "Authenticated successfully. Redirecting to Admin Dashboard...",
      });

      router.push(redirectTo);
      router.refresh();
    } catch {
      setErrorMessage("Authentication service unavailable. Please try again shortly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md relative z-10">
      {/* Outer Glow Ambient Frame */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#F0C419]/30 via-emerald-500/20 to-[#F0C419]/30 blur-xl opacity-75 animate-pulse-subtle pointer-events-none" />

      {/* Main Glass Card */}
      <div className="relative rounded-3xl bg-[#092219]/90 border border-[#F0C419]/30 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl space-y-7">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <LotusBrandLogo
            size="lg"
            subtitle="Secure Management Portal"
            badge="ADMIN"
          />
          <p className="text-xs text-slate-300 max-w-xs leading-relaxed pt-1">
            Sign in with authorized administrator credentials to manage sports content, review articles, and run AI generation.
          </p>
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="p-3.5 rounded-xl border border-rose-500/40 bg-rose-950/60 flex items-start gap-3 text-xs text-rose-200 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <p className="leading-snug">{errorMessage}</p>
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Administrator Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4 text-[#F0C419]/70" />
              </div>
              <input
                type="email"
                required
                autoComplete="username"
                disabled={isLoading}
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/40 border border-emerald-900/60 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F0C419] focus:ring-2 focus:ring-[#F0C419]/20 transition-all disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4 text-[#F0C419]/70" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                disabled={isLoading}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-black/40 border border-emerald-900/60 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F0C419] focus:ring-2 focus:ring-[#F0C419]/20 transition-all disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3.5 px-4 rounded-xl font-extrabold text-sm text-gray-950 bg-gradient-to-r from-[#D49014] via-[#F0C419] to-[#FFD000] shadow-[0_0_25px_-3px_rgba(240,196,25,0.45)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-gray-950" />
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <>
                <span>Sign In to Admin Portal</span>
                <ArrowRight className="w-4 h-4 text-gray-950" />
              </>
            )}
          </button>
        </form>

        {/* Security Strip */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit TLS Encrypted</span>
          </div>
          <Link
            href="/"
            className="hover:text-[#F0C419] flex items-center gap-1 transition-colors font-medium"
          >
            <Globe className="w-3 h-3 text-[#F0C419]" />
            <span>Public Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#051710] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Radial Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F0C419]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Mesh Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D4939_1px,transparent_1px),linear-gradient(to_bottom,#0D4939_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <Suspense
        fallback={
          <div className="w-full max-w-md p-10 rounded-3xl bg-[#092219]/90 border border-white/10 text-center text-slate-400 space-y-4">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#F0C419]" />
            <p className="text-xs">Loading secure login portal...</p>
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
