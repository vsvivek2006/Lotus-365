import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";
import { PostEditor } from "@/components/admin/PostEditor";
import { assertAdminUser } from "@/lib/authorization";
import type { PostRecord } from "@/lib/validations/post";

interface EditBlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const { id } = await params;
  await assertAdminUser();

  const fetchPost = async (): Promise<PostRecord | null> => {
    try {
      const supabase = createAdminClient();
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, slug, content, meta_description, cover_image_url, author, tags, status, source, published_at, created_at, updated_at")
        .eq("id", id)
        .single();

      if (!error && data) {
        return data as PostRecord;
      }
      return null;
    } catch (err) {
      console.error("[EditBlogPostPage] Error fetching post for editing:", err);
      return null;
    }
  };

  const post = await fetchPost();

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
        <Link
          href="/admin/blog"
          className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800 transition-colors cursor-pointer"
          title="Back to Blog Posts"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Edit Blog Post
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Modify article contents, change cover image, update SEO metadata, or update publishing status.
          </p>
        </div>
      </div>

      <PostEditor initialData={post} />
    </div>
  );
}
