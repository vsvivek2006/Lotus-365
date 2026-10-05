"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Trash2,
  ExternalLink,
  Search,
  Sparkles,
  Loader2,
  FileText,
  PlusCircle,
  X,
  Calendar,
  Eye,
  Edit3,
  Copy,
  Check,
  CheckCircle2,
  Clock,
  ArrowUpDown,
  Filter,
  Image as ImageIcon,
} from "lucide-react";
import { toast } from "sonner";
import { deletePostAction, togglePostStatusAction } from "@/app/admin/blog/actions";
import { ConfirmDialog } from "./ConfirmDialog";

export interface PostItem {
  id: string;
  title: string;
  slug: string;
  meta_description?: string | null;
  cover_image_url?: string | null;
  author?: string | null;
  tags?: string[] | null;
  status: "draft" | "published";
  source?: string | null;
  published_at?: string | null;
  created_at: string;
  updated_at?: string | null;
}

interface PostTableProps {
  initialPosts: PostItem[];
}

export function PostTable({ initialPosts }: PostTableProps) {
  const [posts, setPosts] = useState<PostItem[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [sourceFilter, setSourceFilter] = useState<"all" | "ai" | "manual">("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title">("newest");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [confirmDelete, setConfirmDelete] = useState<{
    isOpen: boolean;
    id: string;
    title: string;
  }>({
    isOpen: false,
    id: "",
    title: "",
  });

  const counts = useMemo(() => {
    return {
      all: posts.length,
      published: posts.filter((p) => p.status === "published").length,
      draft: posts.filter((p) => p.status === "draft").length,
      ai: posts.filter((p) => p.source === "ai" || p.source === "ai-edited").length,
      manual: posts.filter((p) => p.source !== "ai" && p.source !== "ai-edited").length,
    };
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) => {
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          post.title.toLowerCase().includes(q) ||
          post.slug.toLowerCase().includes(q) ||
          (post.author && post.author.toLowerCase().includes(q)) ||
          (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)));

        const matchesStatus =
          statusFilter === "all" ? true : post.status === statusFilter;

        const isAi = post.source === "ai" || post.source === "ai-edited";
        const matchesSource =
          sourceFilter === "all"
            ? true
            : sourceFilter === "ai"
            ? isAi
            : !isAi;

        return matchesSearch && matchesStatus && matchesSource;
      })
      .sort((a, b) => {
        if (sortBy === "newest") {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
        if (sortBy === "oldest") {
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        }
        return a.title.localeCompare(b.title);
      });
  }, [posts, searchQuery, statusFilter, sourceFilter, sortBy]);

  const handleToggleStatus = async (post: PostItem) => {
    const nextStatus = post.status === "published" ? "draft" : "published";
    setTogglingId(post.id);

    // Optimistic update
    setPosts((prev) =>
      prev.map((p) =>
        p.id === post.id
          ? {
              ...p,
              status: nextStatus,
              published_at: nextStatus === "published" ? new Date().toISOString() : null,
            }
          : p
      )
    );

    try {
      const res = await togglePostStatusAction(post.id, nextStatus);
      if (!res.success) {
        // Rollback
        setPosts((prev) =>
          prev.map((p) => (p.id === post.id ? { ...p, status: post.status } : p))
        );
        toast.error("Status update failed", { description: res.error });
      } else {
        toast.success(
          nextStatus === "published"
            ? "Article published live!"
            : "Article moved to drafts",
          {
            description: `"${post.title}" is now ${nextStatus}.`,
          }
        );
      }
    } catch {
      // Rollback
      setPosts((prev) =>
        prev.map((p) => (p.id === post.id ? { ...p, status: post.status } : p))
      );
      toast.error("Network error updating status.");
    } finally {
      setTogglingId(null);
    }
  };

  const handleCopyLink = async (slug: string, id: string) => {
    const fullUrl = `https://lotus365officialid.com/blog/${slug}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopiedId(id);
      toast.success("Live URL copied to clipboard!", { description: fullUrl });
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      toast.error("Could not copy link to clipboard.");
    }
  };

  const handleDeleteTrigger = (id: string, title: string) => {
    setConfirmDelete({
      isOpen: true,
      id,
      title,
    });
  };

  const handleConfirmDelete = async () => {
    const { id, title } = confirmDelete;
    if (!id) return;

    setDeletingId(id);
    try {
      const result = await deletePostAction(id);
      if (!result.success) {
        toast.error("Failed to delete post", { description: result.error });
        return;
      }

      setPosts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Post deleted successfully", {
        description: `"${title}" has been permanently removed.`,
      });
      setConfirmDelete({ isOpen: false, id: "", title: "" });
    } catch {
      toast.error("Unexpected error deleting post");
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString?: string | null) => {
    if (!dateString) return "—";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "—";
    }
  };

  return (
    <div className="space-y-4">
      <ConfirmDialog
        isOpen={confirmDelete.isOpen}
        title="Delete Blog Post?"
        description={`Are you sure you want to delete "${confirmDelete.title}"? This will permanently remove the post and its public URL.`}
        confirmLabel="Delete Post"
        cancelLabel="Cancel"
        isDestructive={true}
        isLoading={deletingId === confirmDelete.id}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmDelete({ isOpen: false, id: "", title: "" })}
      />

      {/* Search, Filters, and Sort Toolbar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 p-4 rounded-2xl border border-gray-800 bg-gray-900/80 shadow-md backdrop-blur-sm">
        {/* Search Input */}
        <div className="relative flex-1 lg:max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by title, slug, tag, or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2 rounded-xl bg-gray-950/70 border border-gray-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F0C419] focus:ring-1 focus:ring-[#F0C419]/30 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 rounded-md"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-950/80 border border-gray-800">
            {(
              [
                { key: "all", label: "All", count: counts.all },
                { key: "published", label: "Live", count: counts.published },
                { key: "draft", label: "Drafts", count: counts.draft },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setStatusFilter(tab.key)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer whitespace-nowrap ${
                  statusFilter === tab.key
                    ? "bg-[#14614C] text-[#F0C419] border border-[#F0C419]/30 shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    statusFilter === tab.key
                      ? "bg-black/40 text-[#F0C419]"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Source Filter */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-950/80 border border-gray-800 text-xs">
            <button
              type="button"
              onClick={() => setSourceFilter("all")}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition-all ${
                sourceFilter === "all"
                  ? "bg-gray-800 text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All Types
            </button>
            <button
              type="button"
              onClick={() => setSourceFilter("ai")}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-medium transition-all ${
                sourceFilter === "ai"
                  ? "bg-[#14614C]/70 text-[#F0C419] font-semibold border border-[#F0C419]/30"
                  : "text-gray-400 hover:text-[#F0C419]"
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#F0C419]" />
              <span>AI</span>
            </button>
            <button
              type="button"
              onClick={() => setSourceFilter("manual")}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition-all ${
                sourceFilter === "manual"
                  ? "bg-gray-800 text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Manual
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative flex items-center">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-gray-950/80 border border-gray-800 text-xs text-gray-300 rounded-xl px-3 py-2 pr-7 focus:outline-none focus:border-[#F0C419] cursor-pointer appearance-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title (A-Z)</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-500 absolute right-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-12 sm:p-16 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700 mx-auto flex items-center justify-center text-gray-400">
            <FileText className="w-6 h-6 text-[#F0C419]" />
          </div>
          <div className="max-w-md mx-auto">
            <h3 className="text-sm font-bold text-white">
              {posts.length === 0
                ? "No articles created yet"
                : "No matching articles found"}
            </h3>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              {posts.length === 0
                ? "Start drafting articles manually or use the Groq AI writer to generate high-ranking cricket and casino guides in seconds."
                : "We couldn't find any articles matching your search or filters. Try adjusting your search query."}
            </p>
          </div>
          {posts.length === 0 ? (
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#F0C419] text-gray-950 hover:bg-[#FFD000] transition-colors shadow-lg shadow-[#F0C419]/20"
            >
              <PlusCircle className="w-4 h-4" />
              Write First Article
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setSourceFilter("all");
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Mobile View: Cards */}
          <div className="block lg:hidden space-y-3">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 rounded-2xl border border-gray-800 bg-gray-900/90 shadow-md space-y-3"
              >
                <div className="flex items-start gap-3">
                  {/* Thumbnail */}
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-950 border border-gray-800 shrink-0 flex items-center justify-center">
                    {post.cover_image_url ? (
                      <Image
                        src={post.cover_image_url}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-gray-600" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="font-bold text-white text-xs hover:text-[#F0C419] transition-colors line-clamp-2"
                    >
                      {post.title}
                    </Link>
                    <p className="text-[11px] font-mono text-gray-500 mt-0.5 truncate">
                      /blog/{post.slug}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-800 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    {/* Status Toggle Button */}
                    <button
                      type="button"
                      disabled={togglingId === post.id}
                      onClick={() => handleToggleStatus(post)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                        post.status === "published"
                          ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 hover:bg-emerald-900/50"
                          : "bg-amber-950/80 text-amber-400 border border-amber-800/60 hover:bg-amber-900/50"
                      }`}
                      title="Click to toggle Live/Draft"
                    >
                      {togglingId === post.id ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : post.status === "published" ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      )}
                      <span>{post.status === "published" ? "Live" : "Draft"}</span>
                    </button>

                    {post.source === "ai" && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#F0C419] bg-[#14614C]/40 px-2 py-0.5 rounded-md border border-[#F0C419]/30">
                        <Sparkles className="w-2.5 h-2.5 text-[#F0C419]" />
                        AI
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5">
                    {post.status === "published" && (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-white border border-gray-700 transition-colors"
                        title="View live post"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={() => handleCopyLink(post.slug, post.id)}
                      className="p-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-[#F0C419] border border-gray-700 transition-colors cursor-pointer"
                      title="Copy live link"
                    >
                      {copiedId === post.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="p-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-[#F0C419] border border-gray-700 transition-colors"
                      title="Edit post"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDeleteTrigger(post.id, post.title)}
                      className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-rose-400 hover:bg-rose-950/40 border border-gray-700 transition-colors cursor-pointer"
                      title="Delete post"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Table */}
          <div className="hidden lg:block rounded-2xl border border-gray-800 bg-gray-900/80 shadow-xl overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-950/80 text-gray-400 font-semibold border-b border-gray-800">
                  <tr>
                    <th className="py-3 px-4 w-12">Cover</th>
                    <th className="py-3 px-4">Title &amp; URL Slug</th>
                    <th className="py-3 px-4">Status (Click to Toggle)</th>
                    <th className="py-3 px-4">Source</th>
                    <th className="py-3 px-4">SEO Score</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-5 text-right">Quick Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60 text-gray-300">
                  {filteredPosts.map((post) => {
                    const isSeoReady =
                      Boolean(post.meta_description) && Boolean(post.cover_image_url);

                    return (
                      <tr
                        key={post.id}
                        className="hover:bg-gray-800/40 transition-colors group"
                      >
                        {/* Cover Thumbnail */}
                        <td className="py-3 px-4">
                          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gray-950 border border-gray-800 flex items-center justify-center shrink-0">
                            {post.cover_image_url ? (
                              <Image
                                src={post.cover_image_url}
                                alt=""
                                fill
                                unoptimized
                                className="object-cover group-hover:scale-105 transition-transform"
                              />
                            ) : (
                              <ImageIcon className="w-4 h-4 text-gray-600" />
                            )}
                          </div>
                        </td>

                        {/* Title and Slug */}
                        <td className="py-3 px-4 max-w-sm">
                          <Link
                            href={`/admin/blog/${post.id}/edit`}
                            className="font-bold text-white group-hover:text-[#F0C419] transition-colors line-clamp-1 text-xs block"
                          >
                            {post.title}
                          </Link>
                          <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-500 mt-0.5 truncate">
                            <span className="truncate">/blog/{post.slug}</span>
                            <button
                              type="button"
                              onClick={() => handleCopyLink(post.slug, post.id)}
                              className="text-gray-500 hover:text-[#F0C419] p-0.5 rounded cursor-pointer transition-colors"
                              title="Copy URL"
                            >
                              {copiedId === post.id ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* 1-Click Interactive Status Toggle */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <button
                            type="button"
                            disabled={togglingId === post.id}
                            onClick={() => handleToggleStatus(post)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                              post.status === "published"
                                ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 hover:border-emerald-500 hover:scale-105 shadow-sm"
                                : "bg-amber-950/80 text-amber-400 border border-amber-800/60 hover:border-amber-500 hover:scale-105 shadow-sm"
                            }`}
                            title="Click to toggle status (Draft ⇄ Live)"
                          >
                            {togglingId === post.id ? (
                              <Loader2 className="w-3 h-3 animate-spin text-gray-300" />
                            ) : post.status === "published" ? (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            )}
                            <span>{post.status === "published" ? "Live" : "Draft"}</span>
                          </button>
                        </td>

                        {/* Source */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          {post.source === "ai" || post.source === "ai-edited" ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#F0C419] bg-[#14614C]/40 px-2.5 py-0.5 rounded-md border border-[#F0C419]/30">
                              <Sparkles className="w-2.5 h-2.5 text-[#F0C419]" />
                              Groq AI
                            </span>
                          ) : (
                            <span className="text-gray-400 text-[11px] font-medium">Manual</span>
                          )}
                        </td>

                        {/* SEO Health Badge */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          {isSeoReady ? (
                            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span>Ready</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 font-medium">
                              <Clock className="w-3 h-3 text-amber-400" />
                              <span>Needs Meta</span>
                            </span>
                          )}
                        </td>

                        {/* Date */}
                        <td className="py-3 px-4 whitespace-nowrap text-gray-400 font-mono text-[11px]">
                          {formatDate(post.published_at || post.created_at)}
                        </td>

                        {/* Actions */}
                        <td className="py-3 px-5 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-1.5">
                            {post.status === "published" && (
                              <Link
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                className="p-1.5 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700/60 transition-colors"
                                title="View live article"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </Link>
                            )}

                            <Link
                              href={`/admin/blog/${post.id}/edit`}
                              className="p-1.5 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-[#F0C419] border border-gray-700/60 transition-colors"
                              title="Edit article"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </Link>

                            <button
                              type="button"
                              onClick={() => handleDeleteTrigger(post.id, post.title)}
                              className="p-1.5 rounded-xl bg-gray-800/80 hover:bg-rose-950/60 text-gray-400 hover:text-rose-400 border border-gray-700/60 transition-colors cursor-pointer"
                              title="Delete article"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Footer Count */}
          <div className="flex items-center justify-between text-xs text-gray-500 px-2">
            <span>
              Showing <strong className="text-white">{filteredPosts.length}</strong> of{" "}
              <strong className="text-white">{posts.length}</strong> articles
            </span>
            <span className="text-[11px]">
              Click any status badge to instantly toggle between Draft and Live.
            </span>
          </div>
        </>
      )}
    </div>
  );
}
