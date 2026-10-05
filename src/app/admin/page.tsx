import React, { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { assertAdminUser, type AdminUserContext } from "@/lib/authorization";
import { createAdminClient } from "@/lib/supabase/server";
import {
  FileText,
  PlusCircle,
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Globe,
  Database,
  Cpu,
  Layers,
  Activity,
  PenTool,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { PostTable, type PostItem } from "@/components/admin/PostTable";

export const dynamic = "force-dynamic";
export const revalidate = 0; // Fresh real-time data on load

// -----------------------------------------------------------------------------
// Component 1: Operational Metrics Cards
// -----------------------------------------------------------------------------
async function OperationalMetrics() {
  let allPosts: Array<{
    id: string;
    status: string;
    source: string | null;
    meta_description: string | null;
    cover_image_url: string | null;
  }> = [];

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("posts")
      .select("id, status, source, meta_description, cover_image_url");

    if (error) {
      console.error("[Dashboard] Operational metrics fetch error:", error.message);
    } else {
      allPosts = (data || []) as any[];
    }
  } catch (err) {
    console.error("[Dashboard] Database connection exception:", err);
  }

  const publishedCount = allPosts.filter((p) => p.status === "published").length;
  const draftCount = allPosts.filter((p) => p.status === "draft").length;
  const aiGeneratedCount = allPosts.filter((p) => p.source === "ai" || p.source === "ai-edited").length;
  const totalCount = allPosts.length;
  const seoReadyCount = allPosts.filter((p) => p.meta_description && p.cover_image_url).length;
  const seoPercent = totalCount > 0 ? Math.round((seoReadyCount / totalCount) * 100) : 100;
  const publishedPercent = totalCount > 0 ? Math.round((publishedCount / totalCount) * 100) : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Live Published Articles */}
      <div className="p-5 rounded-2xl border border-gray-800 bg-gray-900/80 shadow-lg flex flex-col justify-between hover:border-emerald-500/40 transition-all group backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-400">Live Articles</span>
          <div className="w-9 h-9 rounded-xl bg-emerald-950/70 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-extrabold text-emerald-400">{publishedCount}</p>
            <span className="text-xs font-medium text-gray-500">of {totalCount} total</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div
              className="bg-emerald-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${publishedPercent}%` }}
            />
          </div>
          <span className="text-[11px] text-gray-500 mt-1.5 block">
            Indexed in sitemap.xml ({publishedPercent}% live)
          </span>
        </div>
      </div>

      {/* 2. Drafts in Review */}
      <div className="p-5 rounded-2xl border border-gray-800 bg-gray-900/80 shadow-lg flex flex-col justify-between hover:border-amber-500/40 transition-all group backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-400">Draft Articles</span>
          <div className="w-9 h-9 rounded-xl bg-amber-950/70 border border-amber-800/50 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
            <Clock className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-extrabold text-amber-400">{draftCount}</p>
            <span className="text-xs font-medium text-gray-500">pending review</span>
          </div>
          <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div
              className="bg-amber-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${totalCount > 0 ? (draftCount / totalCount) * 100 : 0}%` }}
            />
          </div>
          <span className="text-[11px] text-gray-500 mt-1.5 block">
            Unpublished internal drafts
          </span>
        </div>
      </div>

      {/* 3. AI Generated Content */}
      <div className="p-5 rounded-2xl border border-gray-800 bg-gray-900/80 shadow-lg flex flex-col justify-between hover:border-[#F0C419]/40 transition-all group backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-400">AI Powered</span>
          <div className="w-9 h-9 rounded-xl bg-[#14614C]/40 border border-[#F0C419]/30 flex items-center justify-center text-[#F0C419] shrink-0 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-extrabold text-[#F0C419]">{aiGeneratedCount}</p>
            <span className="text-xs font-medium text-gray-500">
              {totalCount > 0 ? Math.round((aiGeneratedCount / totalCount) * 100) : 0}% catalog
            </span>
          </div>
          <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div
              className="bg-[#F0C419] h-full rounded-full transition-all duration-500"
              style={{ width: `${totalCount > 0 ? (aiGeneratedCount / totalCount) * 100 : 0}%` }}
            />
          </div>
          <span className="text-[11px] text-gray-500 mt-1.5 block">
            Groq Llama 3.3 70B Engine
          </span>
        </div>
      </div>

      {/* 4. SEO Completeness Score */}
      <div className="p-5 rounded-2xl border border-gray-800 bg-gray-900/80 shadow-lg flex flex-col justify-between hover:border-purple-500/40 transition-all group backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-400">SEO Health Score</span>
          <div className="w-9 h-9 rounded-xl bg-purple-950/70 border border-purple-800/50 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 transition-transform">
            <TrendingUp className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-extrabold text-purple-400">{seoPercent}%</p>
            <span className="text-xs font-medium text-gray-500">optimized</span>
          </div>
          <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div
              className="bg-purple-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${seoPercent}%` }}
            />
          </div>
          <span className="text-[11px] text-gray-500 mt-1.5 block">
            Meta tags &amp; covers complete
          </span>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Component 2: Complete Posts Catalog (Interactive PostTable)
// -----------------------------------------------------------------------------
async function BlogCatalogSection() {
  let posts: PostItem[] = [];

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("posts")
      .select("id, title, slug, meta_description, cover_image_url, author, tags, status, source, published_at, created_at, updated_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[Dashboard] Articles fetch error:", error.message);
    } else {
      posts = (data || []) as PostItem[];
    }
  } catch (err) {
    console.error("[Dashboard] Database exception fetching posts:", err);
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#F0C419]" />
          <h2 className="text-sm font-bold text-white tracking-wide">
            Article Management &amp; Quick Controls
          </h2>
        </div>
        <span className="text-xs text-gray-500">
          Total in Database: <strong className="text-white">{posts.length}</strong>
        </span>
      </div>

      <PostTable initialPosts={posts} />
    </div>
  );
}

// -----------------------------------------------------------------------------
// Skeletons
// -----------------------------------------------------------------------------
function MetricsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="p-5 rounded-2xl border border-gray-800 bg-gray-900/60 space-y-3"
        >
          <div className="h-3 w-20 bg-gray-800 rounded" />
          <div className="h-8 w-16 bg-gray-800/80 rounded" />
          <div className="h-2 w-full bg-gray-800/40 rounded" />
          <div className="h-2.5 w-32 bg-gray-800/40 rounded" />
        </div>
      ))}
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 space-y-4 animate-pulse">
      <div className="flex items-center justify-between pb-3 border-b border-gray-800">
        <div className="h-4 w-40 bg-gray-800 rounded" />
        <div className="h-3 w-20 bg-gray-800/60 rounded" />
      </div>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-14 bg-gray-800/40 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main Dashboard Page
// -----------------------------------------------------------------------------
export default async function AdminDashboardPage() {
  let adminUser: AdminUserContext;
  try {
    adminUser = await assertAdminUser();
  } catch {
    redirect("/admin/login?redirectTo=/admin");
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {/* Top Header Shell */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-gray-800">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Blog Content Studio
            </h1>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live CMS
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Logged in as <span className="text-[#F0C419] font-semibold">{adminUser.email}</span>. Manage publications, toggle draft status, and generate AI guides.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <Link
            href="/blog"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-gray-700 bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>View Public Blog</span>
          </Link>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border border-gray-700 bg-gray-800 hover:bg-gray-700 text-white transition-colors"
          >
            <PenTool className="w-3.5 h-3.5 text-gray-300" />
            <span>Manual Post</span>
          </Link>
          <Link
            href="/admin/blog/new?mode=ai"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-[#D49014] via-[#F0C419] to-[#FFD000] text-gray-950 shadow-md shadow-[#F0C419]/25 hover:brightness-110 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Write AI Article</span>
          </Link>
        </div>
      </div>

      {/* Operational Metrics Cards (Concurrent Streaming) */}
      <Suspense fallback={<MetricsSkeleton />}>
        <OperationalMetrics />
      </Suspense>

      {/* Quick Editorial Action Launchpads */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Launchpad 1: AI Article Writer */}
        <Link
          href="/admin/blog/new?mode=ai"
          className="p-4 rounded-2xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-[#F0C419]/50 transition-all flex items-center justify-between group shadow-sm backdrop-blur-sm"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#14614C]/50 border border-[#F0C419]/40 flex items-center justify-center text-[#F0C419] group-hover:scale-105 transition-transform shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white group-hover:text-[#F0C419] transition-colors">
                Groq AI Auto-Writer
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Generate 1,000+ word SEO articles in 30s
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#F0C419] group-hover:translate-x-0.5 transition-all" />
        </Link>

        {/* Launchpad 2: Manual WYSIWYG Editor */}
        <Link
          href="/admin/blog/new"
          className="p-4 rounded-2xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-emerald-500/50 transition-all flex items-center justify-between group shadow-sm backdrop-blur-sm"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/70 border border-emerald-800/50 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
              <PenTool className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                TipTap Rich Editor
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Manual writing with headings &amp; formatting
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all" />
        </Link>

        {/* Launchpad 3: Manage & Filter Articles */}
        <Link
          href="/admin/blog"
          className="p-4 rounded-2xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/50 transition-all flex items-center justify-between group shadow-sm backdrop-blur-sm"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-800/50 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                Catalog &amp; Filters
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Search, sort &amp; 1-click publish articles
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-300 group-hover:translate-x-0.5 transition-all" />
        </Link>
      </div>

      {/* System Status Strip (Clean & Executive) */}
      <div className="p-3.5 px-5 rounded-2xl border border-gray-800/80 bg-gray-950/70 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-emerald-400" />
          <span>Database: <strong className="text-white font-medium">Supabase PostgreSQL</strong> (Connected)</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[#F0C419]" />
          <span>AI Engine: <strong className="text-white font-medium">Groq LPU (Llama 3.3 70B)</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <span>Crawl Index: <strong className="text-white font-medium">Dynamic Sitemap Synced</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-purple-400" />
          <span>Role: <strong className="text-white capitalize">{adminUser.role}</strong></span>
        </div>
      </div>

      {/* Complete Interactive Post Table */}
      <Suspense fallback={<TableSkeleton />}>
        <BlogCatalogSection />
      </Suspense>
    </div>
  );
}
