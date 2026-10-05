import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPost } from "@/lib/blog/posts";
import { getPostCoverImage, isOptimizedHost } from "@/lib/blog/images";
import { cleanHtml } from "@/lib/ai/contentFormatter";
import { Layout } from "@/components/layout/Layout";
import { Calendar, User, ArrowLeft, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { OFFICIAL_WHATSAPP_URL } from "@/data/landingData";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | Lotus365",
      robots: { index: false, follow: false },
    };
  }

  const title = `${post.title} | Lotus365 Official`;
  const description =
    post.meta_description ||
    "Read this expert cricket exchange and live casino guide from the official Lotus365 team.";
  const coverImg = getPostCoverImage(post.cover_image_url, post.title, post.tags);

  return {
    title,
    description,
    alternates: {
      canonical: `https://lotus365officialid.com/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://lotus365officialid.com/blog/${slug}`,
      publishedTime: post.published_at || undefined,
      authors: [post.author || "Lotus365 Team"],
      images: [{ url: coverImg }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [coverImg],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const sanitizedContent = cleanHtml(post.content || "");
  const coverImageUrl = getPostCoverImage(post.cover_image_url, post.title, post.tags);
  const articleDate = post.published_at || post.created_at;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta_description || "",
    image: [coverImageUrl],
    datePublished: articleDate,
    dateModified: post.updated_at || articleDate,
    author: {
      "@type": "Person",
      name: post.author || "Lotus365 Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Lotus365",
      logo: {
        "@type": "ImageObject",
        url: "https://lotus365officialid.com/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lotus365officialid.com/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "Blog",
        "item": "https://lotus365officialid.com/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://lotus365officialid.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <Layout>
      <article className="min-h-screen bg-brand-dark text-slate-100">
        {/* Schema.org BlogPosting & BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero Section */}
        <header className="relative overflow-hidden bg-gradient-to-b from-brand-surface via-brand-dark to-brand-dark py-14 sm:py-20 px-4 border-b border-white/5">
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all blog articles
            </Link>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-dark text-brand-gold border border-brand-gold/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {post.title}
            </h1>

            {/* Author Byline */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-green/30 border border-brand-green/50 flex items-center justify-center text-brand-gold">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Author</span>
                  <span className="font-semibold text-white">
                    {post.author || "Lotus365 Team"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-slate-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Published</span>
                  <span className="font-medium text-white">
                    {new Date(articleDate).toLocaleDateString("en-IN", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Cover Visual */}
          {coverImageUrl && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 mb-10 shadow-2xl shadow-black/60 bg-slate-900">
              <Image
                src={coverImageUrl}
                alt={post.title}
                fill
                priority
                unoptimized={!isOptimizedHost(coverImageUrl)}
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          )}

          {/* Rendered HTML */}
          <div
            className="article-content max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />

          {/* Bottom WhatsApp CTA */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-brand-surface to-brand-green/20 border border-brand-gold/30 text-center space-y-5 shadow-2xl shadow-black/50">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-semibold text-brand-gold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Official Lotus365 ID Support
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Place Your Bets on <span className="text-brand-gold">Lotus365</span>?
            </h2>
            <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Get an instant official ID in under 60 seconds with 24/7 dedicated WhatsApp support and 2-minute cashouts.
            </p>
            <div className="pt-2">
              <a
                href={OFFICIAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-[#25D366] hover:bg-[#20ba59] text-black shadow-lg shadow-[#25D366]/20 transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                Get Official ID on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
