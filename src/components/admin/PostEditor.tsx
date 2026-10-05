"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import slugify from "slugify";
import { toast } from "sonner";
import Image from "next/image";
import {
  Save,
  Send,
  Trash2,
  Loader2,
  Lock,
  Unlock,
  Sparkles,
  PenTool,
  Info,
  ArrowLeft,
  Eye,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  BookOpen,
  Clock,
  Check,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { postSchema, type PostInput, type PostRecord } from "@/lib/validations/post";
import { createPostAction, updatePostAction, deletePostAction } from "@/app/admin/blog/actions";
import { ImageUpload } from "./ImageUpload";
import { TagInput } from "./TagInput";
import { AIGeneratorPanel } from "./AIGeneratorPanel";
import { ConfirmDialog } from "./ConfirmDialog";
import type { GenerateBlogPostOutput } from "@/lib/ai/generateBlogPost";

/** localStorage key for autosaved drafts. */
function getDraftKey(postId?: string) {
  return `lotus-blog-draft-${postId ?? "new"}`;
}

const TiptapEditor = dynamic(
  () => import("./TiptapEditor").then((mod) => mod.TiptapEditor),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[350px] w-full rounded-2xl border border-gray-800 bg-gray-900/60 p-6 flex flex-col items-center justify-center text-gray-500 animate-pulse">
        <Loader2 className="w-7 h-7 animate-spin text-[#F0C419] mb-2" />
        <span className="text-xs font-semibold text-gray-400">Loading rich text editor...</span>
      </div>
    ),
  }
);

interface PostEditorProps {
  initialData?: PostRecord | null;
}

export function PostEditor({ initialData }: PostEditorProps) {
  const router = useRouter();
  const isEditing = Boolean(initialData?.id);
  const [editorMode, setEditorMode] = useState<"manual" | "ai">("manual");
  const [contentViewTab, setContentViewTab] = useState<"editor" | "preview">("editor");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isSlugCustomized, setIsSlugCustomized] = useState(Boolean(initialData?.slug));
  const [isAiGenerated, setIsAiGenerated] = useState(
    initialData?.source === "ai" || initialData?.source === "ai-edited"
  );
  const [originalAiContent, setOriginalAiContent] = useState<string | null>(null);
  const [showDraftBanner, setShowDraftBanner] = useState(false);
  const draftKey = getDraftKey(initialData?.id);

  // Auto-detect mode=ai query param on load
  useEffect(() => {
    if (typeof window !== "undefined" && !isEditing) {
      const params = new URLSearchParams(window.location.search);
      if (params.get("mode") === "ai") {
        setEditorMode("ai");
      }
    }
  }, [isEditing]);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm<PostInput>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      content: initialData?.content || "",
      meta_description: initialData?.meta_description || "",
      cover_image_url: initialData?.cover_image_url || "",
      author: initialData?.author || "Lotus365 Editorial Team",
      tags: initialData?.tags || [],
      status: initialData?.status || "draft",
      source: initialData?.source || "manual",
    },
  });

  const titleValue = watch("title");
  const slugValue = watch("slug");
  const contentValue = watch("content");
  const metaDescriptionValue = watch("meta_description") || "";
  const coverImageUrl = watch("cover_image_url");
  const tagsValue = watch("tags") || [];
  const authorValue = watch("author") || "Lotus365 Editorial Team";

  // Word count and reading time
  const wordCount = useMemo(() => {
    if (!contentValue) return 0;
    return contentValue
      .replace(/<[^>]*>/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;
  }, [contentValue]);

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Real-time SEO Readiness Audit
  const seoAudit = useMemo(() => {
    const titleLen = (titleValue || "").trim().length;
    const titleOk = titleLen >= 40 && titleLen <= 70;
    const metaLen = (metaDescriptionValue || "").trim().length;
    const metaOk = metaLen >= 120 && metaLen <= 165;
    const coverOk = Boolean(coverImageUrl);
    const lengthOk = wordCount >= 300;
    const tagsOk = tagsValue.length > 0;

    let score = 0;
    if (titleOk) score += 20;
    else if (titleLen > 15) score += 10;

    if (metaOk) score += 25;
    else if (metaLen > 30) score += 12;

    if (coverOk) score += 20;

    if (lengthOk) score += 20;
    else if (wordCount > 100) score += 10;

    if (tagsOk) score += 15;

    return {
      score,
      titleLen,
      titleOk,
      metaLen,
      metaOk,
      coverOk,
      lengthOk,
      tagsOk,
    };
  }, [titleValue, metaDescriptionValue, coverImageUrl, wordCount, tagsValue]);

  // Warn if leaving page with unsaved edits
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty && !isSubmitting && !isDeleting) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, isSubmitting, isDeleting]);

  // Autosave to localStorage (debounced 1.5s)
  useEffect(() => {
    if (!isDirty) return;
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(
          draftKey,
          JSON.stringify({
            savedAt: new Date().toISOString(),
            title: titleValue,
            content: contentValue,
            meta_description: metaDescriptionValue,
            slug: slugValue,
          })
        );
      } catch {
        // quota exceeded silently skip
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [isDirty, draftKey, titleValue, contentValue, metaDescriptionValue, slugValue]);

  // Draft recovery check
  useEffect(() => {
    try {
      const raw = localStorage.getItem(draftKey);
      if (!raw) return;
      const draft = JSON.parse(raw) as { savedAt: string };
      const draftDate = new Date(draft.savedAt);
      const dbDate = initialData?.updated_at ? new Date(initialData.updated_at) : null;
      if (!dbDate || draftDate > dbDate) {
        setShowDraftBanner(true);
      } else {
        localStorage.removeItem(draftKey);
      }
    } catch {
      // corrupt draft
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setValue("title", newTitle, { shouldValidate: true, shouldDirty: true });
    if (!isSlugCustomized) {
      const generatedSlug = slugify(newTitle, { lower: true, strict: true });
      setValue("slug", generatedSlug, { shouldValidate: true, shouldDirty: true });
    }
  };

  const handleAiGenerated = (output: GenerateBlogPostOutput) => {
    setValue("title", output.title, { shouldValidate: true, shouldDirty: true });
    const generatedSlug = slugify(output.title, { lower: true, strict: true });
    setValue("slug", generatedSlug, { shouldValidate: true, shouldDirty: true });
    setValue("meta_description", output.metaDescription, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue("content", output.content, { shouldValidate: true, shouldDirty: true });
    setValue("tags", output.suggestedTags, { shouldValidate: true, shouldDirty: true });
    setValue("source", "ai", { shouldDirty: true });
    setValue("status", "draft", { shouldDirty: true });

    setIsAiGenerated(true);
    setOriginalAiContent(output.content);
    setIsSlugCustomized(false);
    toast.success("AI draft populated into editor!", {
      description: "You can now edit the content manually or publish directly.",
    });
  };

  const handleSave = async (targetStatus: "draft" | "published") => {
    if (isSubmitting || isDeleting) return;

    setValue("status", targetStatus);

    await handleSubmit(async (formData: PostInput) => {
      setIsSubmitting(true);
      const actionLabel = targetStatus === "published" ? "Publishing article" : "Saving draft";
      const toastId = toast.loading(`${actionLabel}...`, {
        description: "Validating schema and persisting to Supabase database.",
      });

      try {
        let finalSource = formData.source;
        if (isAiGenerated) {
          if (originalAiContent && contentValue !== originalAiContent) {
            finalSource = "ai-edited";
          } else if (!formData.source || formData.source === "manual") {
            finalSource = "ai";
          }
        }

        const payload: PostInput = {
          ...formData,
          status: targetStatus,
          source: finalSource,
        };

        let result;
        if (isEditing && initialData?.id) {
          result = await updatePostAction(initialData.id, payload);
        } else {
          result = await createPostAction(payload);
        }

        if (!result.success) {
          toast.error("Failed to save post", {
            id: toastId,
            description: result.error,
          });
          return;
        }

        toast.success(
          targetStatus === "published"
            ? "Post published successfully!"
            : "Draft saved successfully!",
          {
            id: toastId,
            description:
              targetStatus === "published"
                ? "Your article is now live on the public blog."
                : "Your changes have been saved to the database.",
          }
        );
        try { localStorage.removeItem(draftKey); } catch { /* ignore */ }
        router.push("/admin/blog");
        router.refresh();
      } catch {
        toast.error("Unexpected error saving post", {
          id: toastId,
          description: "Please check your connection and try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  const handleConfirmDelete = async () => {
    if (!initialData?.id || isDeleting) return;

    setIsDeleting(true);
    const toastId = toast.loading("Deleting post...", {
      description: "Permanently removing post from Supabase.",
    });

    try {
      const result = await deletePostAction(initialData.id);
      if (!result.success) {
        toast.error("Failed to delete post", {
          id: toastId,
          description: result.error,
        });
        return;
      }

      toast.success("Post deleted successfully", {
        id: toastId,
        description: "The article has been permanently removed.",
      });
      setIsConfirmDeleteOpen(false);
      router.push("/admin/blog");
      router.refresh();
    } catch {
      toast.error("Unexpected error deleting post", {
        id: toastId,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-24 sm:pb-8">
      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        isOpen={isConfirmDeleteOpen}
        title="Delete Blog Post?"
        description={`Are you sure you want to delete "${
          titleValue || "this post"
        }"? This action cannot be undone.`}
        confirmLabel="Delete Post"
        cancelLabel="Cancel"
        isDestructive={true}
        isLoading={isDeleting}
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmDeleteOpen(false)}
      />

      {/* Draft Recovery Banner */}
      {showDraftBanner && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-emerald-700/50 bg-[#092219]/90 px-4 py-3 shadow-lg">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-emerald-400 shrink-0" />
            <p className="text-xs text-emerald-200">
              <span className="font-bold text-white">Unsaved draft recovered.</span>{" "}
              You have a locally autosaved version newer than the last database save.
            </p>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => {
                try {
                  const raw = localStorage.getItem(draftKey);
                  if (!raw) return;
                  const draft = JSON.parse(raw) as {
                    title?: string;
                    content?: string;
                    meta_description?: string;
                    slug?: string;
                  };
                  if (draft.title) setValue("title", draft.title, { shouldDirty: true });
                  if (draft.slug) setValue("slug", draft.slug, { shouldDirty: true });
                  if (draft.content) setValue("content", draft.content, { shouldDirty: true });
                  if (draft.meta_description)
                    setValue("meta_description", draft.meta_description, { shouldDirty: true });
                  toast.success("Draft restored into editor.");
                } catch {
                  toast.error("Could not restore draft.");
                }
                setShowDraftBanner(false);
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#F0C419] text-gray-950 hover:bg-[#FFD000] transition-colors"
            >
              Restore
            </button>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem(draftKey);
                setShowDraftBanner(false);
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-medium border border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Mode Toggle (only for new posts) */}
      {!isEditing && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-gray-900 border border-gray-800 shadow-md">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setEditorMode("manual")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                editorMode === "manual"
                  ? "bg-[#14614C] text-[#F0C419] border border-[#F0C419]/40 shadow-sm"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              Write Manually (WYSIWYG)
            </button>
            <button
              type="button"
              onClick={() => setEditorMode("ai")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                editorMode === "ai"
                  ? "bg-[#14614C] text-[#F0C419] border border-[#F0C419]/40 shadow-sm"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F0C419]" />
              Generate with Groq AI
            </button>
          </div>

          <span className="text-[11px] text-gray-400 hidden sm:inline px-3">
            {editorMode === "ai"
              ? "Groq LPU drafts full structured article with semantic headings & SEO."
              : "Standard rich-text editor with instant formatting."}
          </span>
        </div>
      )}

      {/* AI Assistant Section */}
      {editorMode === "ai" && !isEditing && (
        <AIGeneratorPanel onGenerated={handleAiGenerated} disabled={isSubmitting} />
      )}

      {/* Sticky Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl border border-gray-800 bg-gray-900/95 sticky top-4 z-20 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
            {isEditing ? "Editing Article" : "Drafting Article"}
          </span>
          {initialData?.status && (
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                initialData.status === "published"
                  ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800/60"
                  : "bg-amber-950/80 text-amber-400 border border-amber-800/60"
              }`}
            >
              {initialData.status === "published" ? "Live" : "Draft"}
            </span>
          )}
          {isAiGenerated && (
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-[#14614C]/40 text-[#F0C419] border border-[#F0C419]/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#F0C419]" />
              AI Sourced
            </span>
          )}
          {isDirty && (
            <span className="text-[10px] font-bold text-[#F0C419] bg-[#14614C]/40 px-2 py-0.5 rounded-full border border-[#F0C419]/30 animate-pulse">
              Unsaved changes
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {isEditing && slugValue && (
            <Link
              href={`/blog/${slugValue}`}
              target="_blank"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white hover:bg-gray-800 transition-colors border border-gray-700"
            >
              <Eye className="w-3.5 h-3.5 text-gray-400" />
              View Public Page
            </Link>
          )}

          {isEditing && (
            <button
              type="button"
              onClick={() => setIsConfirmDeleteOpen(true)}
              disabled={isDeleting || isSubmitting}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/30 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isDeleting ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Trash2 className="w-3.5 h-3.5" />
              )}
              Delete
            </button>
          )}

          <button
            type="button"
            onClick={() => handleSave("draft")}
            disabled={isSubmitting || isDeleting}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white border border-gray-700 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5 text-[#F0C419]" />
            )}
            Save as Draft
          </button>

          <button
            type="button"
            onClick={() => handleSave("published")}
            disabled={isSubmitting || isDeleting}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-[#D49014] via-[#F0C419] to-[#FFD000] text-gray-950 shadow-md shadow-[#F0C419]/25 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5" />
            )}
            Publish Post
          </button>
        </div>
      </div>

      {/* Main Form Fields Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Main Content Area (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-5">
          {/* Title */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-gray-300">
                Article Title <span className="text-rose-400">*</span>
              </label>
              <span className={`text-[11px] font-mono ${seoAudit.titleOk ? "text-emerald-400 font-bold" : "text-gray-400"}`}>
                {(titleValue || "").length} chars {seoAudit.titleOk && "✓ Ideal"}
              </span>
            </div>
            <input
              type="text"
              placeholder="e.g. Lotus365 Cricket Betting Rules & 2-Minute Cashout Guide"
              value={titleValue || ""}
              onChange={handleTitleChange}
              className="w-full px-4 py-3 rounded-2xl bg-gray-900 border border-gray-700 text-white text-base sm:text-lg font-bold placeholder-gray-500 focus:outline-none focus:border-[#F0C419] focus:ring-1 focus:ring-[#F0C419] transition-all"
            />
            {errors.title && (
              <p className="mt-1.5 text-xs text-rose-400">{errors.title.message}</p>
            )}
          </div>

          {/* Slug */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-gray-300">
                URL Slug <span className="text-rose-400">*</span>
              </label>
              <button
                type="button"
                onClick={() => setIsSlugCustomized(!isSlugCustomized)}
                className="text-xs text-[#F0C419] hover:text-[#FFD000] flex items-center gap-1 transition-colors cursor-pointer"
              >
                {isSlugCustomized ? (
                  <>
                    <Lock className="w-3 h-3" />
                    Locked Custom Slug
                  </>
                ) : (
                  <>
                    <Unlock className="w-3 h-3 text-[#F0C419]" />
                    Auto-Generating Slug
                  </>
                )}
              </button>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs text-gray-400 font-mono select-none">
                /blog/
              </span>
              <input
                type="text"
                placeholder="lotus365-cricket-betting-guide"
                {...register("slug")}
                onChange={(e) => {
                  setIsSlugCustomized(true);
                  setValue("slug", e.target.value, { shouldValidate: true, shouldDirty: true });
                }}
                className="w-full pl-16 pr-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-xs sm:text-sm text-[#F0C419] font-mono placeholder-gray-500 focus:outline-none focus:border-[#F0C419] focus:ring-1 focus:ring-[#F0C419] transition-all"
              />
            </div>
            {errors.slug && (
              <p className="mt-1.5 text-xs text-rose-400">{errors.slug.message}</p>
            )}
          </div>

          {/* Rich Content Editor with Live Preview Tab */}
          <div className="space-y-2">
            {/* View Mode Switcher Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 p-1 bg-gray-900 border border-gray-800 rounded-xl">
                <button
                  type="button"
                  onClick={() => setContentViewTab("editor")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    contentViewTab === "editor"
                      ? "bg-[#14614C] text-[#F0C419] shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>WYSIWYG Editor</span>
                </button>
                <button
                  type="button"
                  onClick={() => setContentViewTab("preview")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    contentViewTab === "preview"
                      ? "bg-[#14614C] text-[#F0C419] shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Live Reader Preview</span>
                </button>
              </div>

              {/* Word Count and Read Time */}
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-[#F0C419]" />
                  {wordCount.toLocaleString()} words
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  {readingTime} min read
                </span>
              </div>
            </div>

            {/* Editor or Live Preview Body */}
            {contentViewTab === "editor" ? (
              <div>
                <Controller
                  name="content"
                  control={control}
                  render={({ field }) => (
                    <TiptapEditor
                      content={field.value}
                      onChange={(val) => field.onChange(val)}
                    />
                  )}
                />
              </div>
            ) : (
              /* Live Public Reader Preview Box */
              <div className="rounded-2xl border border-gray-800 bg-gray-900/90 p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="border-b border-gray-800 pb-5 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#14614C] text-[#F0C419] border border-[#F0C419]/30">
                    Live Blog Preview
                  </span>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                    {titleValue || "Untitled Article"}
                  </h1>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>By {authorValue}</span>
                    <span>•</span>
                    <span>{new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span>•</span>
                    <span>{readingTime} min read</span>
                  </div>
                </div>

                {coverImageUrl && (
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-800">
                    <Image
                      src={coverImageUrl}
                      alt={titleValue || "Cover"}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Rendered HTML */}
                <div
                  className="prose prose-invert prose-emerald max-w-none text-gray-200 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: contentValue || "<p class='text-gray-500 italic'>No content written yet. Switch to Editor tab to add content.</p>" }}
                />
              </div>
            )}

            {errors.content && (
              <p className="mt-1.5 text-xs text-rose-400">{errors.content.message}</p>
            )}
          </div>
        </div>

        {/* Sidebar Metadata (Right col) */}
        <div className="space-y-5">
          {/* Real-time SEO Readiness Gauge Card */}
          <div className="p-4 sm:p-5 rounded-2xl border border-gray-800 bg-gray-900/90 space-y-3 shadow-md backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#F0C419]" />
                <span className="text-xs font-bold text-white">SEO Readiness Meter</span>
              </div>
              <span
                className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                  seoAudit.score >= 80
                    ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800/60"
                    : seoAudit.score >= 50
                    ? "bg-amber-950/80 text-amber-400 border border-amber-800/60"
                    : "bg-rose-950/80 text-rose-400 border border-rose-800/60"
                }`}
              >
                {seoAudit.score}%
              </span>
            </div>

            {/* Score Bar */}
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  seoAudit.score >= 80
                    ? "bg-emerald-400"
                    : seoAudit.score >= 50
                    ? "bg-amber-400"
                    : "bg-rose-400"
                }`}
                style={{ width: `${seoAudit.score}%` }}
              />
            </div>

            {/* Checklist */}
            <div className="space-y-1.5 text-[11px] pt-1">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Title length (40-70 chars)</span>
                {seoAudit.titleOk ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3" /> {seoAudit.titleLen} chars
                  </span>
                ) : (
                  <span className="text-gray-500">{seoAudit.titleLen}/70</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Meta description (120-165)</span>
                {seoAudit.metaOk ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3" /> {seoAudit.metaLen} chars
                  </span>
                ) : (
                  <span className="text-gray-500">{seoAudit.metaLen}/160</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Cover image uploaded</span>
                {seoAudit.coverOk ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3" /> Ready
                  </span>
                ) : (
                  <span className="text-amber-400 font-medium">Missing</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Content length (300+ words)</span>
                {seoAudit.lengthOk ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3" /> {wordCount} words
                  </span>
                ) : (
                  <span className="text-amber-400 font-medium">{wordCount}/300</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Tags specified</span>
                {seoAudit.tagsOk ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3" /> {tagsValue.length} tags
                  </span>
                ) : (
                  <span className="text-gray-500">None</span>
                )}
              </div>
            </div>
          </div>

          {/* Cover Image Upload */}
          <div className="p-4 sm:p-5 rounded-2xl border border-gray-800 bg-gray-900/90 space-y-2.5 shadow-md">
            <label className="block text-xs font-bold text-gray-300">
              Cover Image
            </label>
            <Controller
              name="cover_image_url"
              control={control}
              render={({ field }) => (
                <ImageUpload
                  value={field.value}
                  onChange={(val) => field.onChange(val)}
                />
              )}
            />
          </div>

          {/* SEO Meta Description */}
          <div className="p-4 sm:p-5 rounded-2xl border border-gray-800 bg-gray-900/90 space-y-2 shadow-md">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-gray-300">
                Meta Description (Search Snippet)
              </label>
              <span
                className={`text-[11px] font-mono font-semibold ${
                  metaDescriptionValue.length >= 120 && metaDescriptionValue.length <= 165
                    ? "text-emerald-400"
                    : metaDescriptionValue.length > 165
                    ? "text-rose-400"
                    : "text-gray-400"
                }`}
              >
                {metaDescriptionValue.length}/160
              </span>
            </div>
            <textarea
              rows={3}
              placeholder="Brief summary for Google search results (120-160 characters recommended)..."
              {...register("meta_description")}
              className="w-full px-3.5 py-2 rounded-xl bg-gray-800 border border-gray-700 text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#F0C419] focus:ring-1 focus:ring-[#F0C419] transition-all resize-none"
            />
            {errors.meta_description && (
              <p className="text-xs text-rose-400">{errors.meta_description.message}</p>
            )}
          </div>

          {/* Tags */}
          <div className="p-4 sm:p-5 rounded-2xl border border-gray-800 bg-gray-900/90 space-y-2 shadow-md">
            <label className="block text-xs font-bold text-gray-300">
              Tags &amp; Taxonomy
            </label>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <TagInput
                  tags={field.value || []}
                  onChange={(tags) => field.onChange(tags)}
                />
              )}
            />
          </div>

          {/* Author */}
          <div className="p-4 sm:p-5 rounded-2xl border border-gray-800 bg-gray-900/90 space-y-2 shadow-md">
            <label className="block text-xs font-bold text-gray-300">
              Author Byline
            </label>
            <input
              type="text"
              placeholder="Lotus365 Editorial Team"
              {...register("author")}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F0C419] focus:ring-1 focus:ring-[#F0C419] transition-all"
            />
            {errors.author && (
              <p className="text-xs text-rose-400">{errors.author.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar (<sm) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-gray-900/95 border-t border-gray-800 backdrop-blur-md z-40 flex items-center justify-between gap-2 shadow-2xl">
        <button
          type="button"
          onClick={() => handleSave("draft")}
          disabled={isSubmitting || isDeleting}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Save className="w-3.5 h-3.5 text-[#F0C419]" />
          )}
          Save Draft
        </button>

        <button
          type="button"
          onClick={() => handleSave("published")}
          disabled={isSubmitting || isDeleting}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-extrabold bg-[#F0C419] text-gray-950 shadow-md transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Send className="w-3.5 h-3.5" />
          )}
          Publish Post
        </button>
      </div>
    </div>
  );
}
