import { createPublicClient } from "@/lib/supabase/public";
import type { PostRecord, PostSummary } from "@/lib/validations/post";

export async function getBlogPosts(from = 0, to = 8): Promise<{
  posts: PostSummary[];
  count: number;
}> {
  try {
    const supabase = createPublicClient();
    const { data, count, error } = await supabase
      .from("posts")
      .select(
        "id, title, slug, meta_description, cover_image_url, author, tags, status, source, published_at, created_at, updated_at",
        { count: "exact" }
      )
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .range(from, to);

    if (error) {
      console.error("Error fetching blog posts:", error.message);
      return { posts: [], count: 0 };
    }

    return {
      posts: (data || []) as PostSummary[],
      count: count || 0,
    };
  } catch (err) {
    console.error("getBlogPosts exception:", err);
    return { posts: [], count: 0 };
  }
}

export async function getBlogPost(slug: string): Promise<PostRecord | null> {
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (error || !data) {
      return null;
    }

    return data as PostRecord;
  } catch (err) {
    console.error("getBlogPost exception:", err);
    return null;
  }
}
