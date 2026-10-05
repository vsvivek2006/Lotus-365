import Link from "next/link";
import { PlusCircle, Sparkles } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";
import { PostTable, type PostItem } from "@/components/admin/PostTable";
import { assertAdminUser } from "@/lib/authorization";

export const dynamic = "force-dynamic";
export const revalidate = 0; // Always fresh list

export default async function AdminBlogListPage() {
  await assertAdminUser();

  let posts: PostItem[] = [];
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("posts")
      .select("id, title, slug, meta_description, cover_image_url, author, tags, status, source, published_at, created_at, updated_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error.message);
    } else {
      posts = (data || []) as PostItem[];
    }
  } catch (err) {
    console.error("Admin blog list fetch error:", err);
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-gray-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Blog Posts
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Manage, review, publish, and search through all articles in your database.
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-brand-gold hover:bg-brand-goldBright text-gray-950 transition-all shadow-md shadow-brand-gold/20 cursor-pointer self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5 text-gray-950" />
          <span>Write AI Article</span>
        </Link>
      </div>

      <PostTable initialPosts={posts} />
    </div>
  );
}
