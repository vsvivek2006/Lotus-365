import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog/posts";
import { getPostCoverImage } from "@/lib/blog/images";
import { Layout } from "@/components/layout/Layout";
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Lotus365 Blog & Betting Guides | Live Cricket, Casino & Strategies",
  description:
    "Expert cricket exchange trading tactics, back & lay odds analysis, live casino tips, and platform guides directly from the Lotus365 analyst team.",
  alternates: {
    canonical: "https://lotus365officialid.com/blog",
  },
};

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

const POSTS_PER_PAGE = 9;

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10) || 1);
  const from = (currentPage - 1) * POSTS_PER_PAGE;
  const to = from + POSTS_PER_PAGE - 1;

  const { posts, count } = await getBlogPosts(from, to);
  const totalPages = Math.ceil(count / POSTS_PER_PAGE) || 1;

  const blogListSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://lotus365officialid.com/blog",
        "url": "https://lotus365officialid.com/blog",
        "name": "Lotus365 Blog & Betting Guides",
        "description":
          "Expert cricket exchange trading tactics, back & lay odds analysis, live casino tips, and platform guides directly from the Lotus365 analyst team.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://lotus365officialid.com/#website",
          "name": "Lotus365 Official",
          "url": "https://lotus365officialid.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://lotus365officialid.com/blog#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://lotus365officialid.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog & Guides",
            "item": "https://lotus365officialid.com/blog",
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <div className="bg-brand-dark min-h-screen">
        {/* Hero Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-surface to-brand-dark py-16 px-4 border-b border-white/5 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-xs font-semibold text-brand-gold">
              <Sparkles className="w-3.5 h-3.5" />
              Lotus365 Official Insights &amp; Market Guides
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Betting Exchange &amp; <span className="text-brand-gold">Casino Blog</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Real-time IPL match analysis, back &amp; lay trading strategies, Teen Patti mechanics, and instant payout guides.
            </p>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="p-16 rounded-2xl border border-white/10 bg-brand-surface/60 text-center space-y-3">
              <p className="text-xl font-bold text-white">Articles Coming Soon</p>
              <p className="text-sm text-slate-400">
                Fresh insights and match previews are being drafted by our analyst team.
              </p>
              <div className="pt-3">
                <Link
                  href="/admin/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-brand-green hover:bg-brand-green/80 text-white transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  Generate Post in Admin
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const cover = getPostCoverImage(post.cover_image_url, post.title, post.tags);
                return (
                  <article
                    key={post.id}
                    className="rounded-2xl border border-white/10 bg-brand-surface/80 overflow-hidden flex flex-col justify-between hover:border-brand-gold/50 transition-all hover:shadow-xl hover:shadow-brand-green/20 group"
                  >
                    <div>
                      {/* Cover Image */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block relative aspect-video w-full overflow-hidden bg-slate-900"
                      >
                        <Image
                          src={cover}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </Link>

                      {/* Card Content */}
                      <div className="p-5 space-y-3">
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded text-[11px] font-semibold bg-brand-dark text-brand-gold border border-brand-gold/30"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <h2 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors line-clamp-2">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>

                        {post.meta_description && (
                          <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                            {post.meta_description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Footer Info */}
                    <div className="p-5 pt-0 border-t border-white/5 mt-3 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-brand-gold" />
                          {post.author || "Lotus365 Team"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {post.published_at
                            ? new Date(post.published_at).toLocaleDateString("en-IN", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : new Date(post.created_at).toLocaleDateString("en-IN", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                        </span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-semibold text-brand-gold group-hover:underline flex items-center gap-1"
                      >
                        Read
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-4 text-xs font-semibold">
              {currentPage > 1 ? (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg border border-white/10 bg-brand-surface hover:bg-white/5 text-slate-200 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg border border-white/5 bg-brand-surface/40 text-slate-600 cursor-not-allowed">
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </span>
              )}

              <span className="text-slate-400">
                Page <span className="font-bold text-white">{currentPage}</span> of{" "}
                <span className="font-bold text-white">{totalPages}</span>
              </span>

              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg border border-white/10 bg-brand-surface hover:bg-white/5 text-slate-200 transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg border border-white/5 bg-brand-surface/40 text-slate-600 cursor-not-allowed">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
