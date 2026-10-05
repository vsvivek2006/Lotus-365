"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { assertAdminUser, AuthorizationError } from "@/lib/authorization";
import { ZodError } from "zod";
import { postSchema, type PostInput } from "@/lib/validations/post";

export async function createPostAction(input: PostInput) {
  try {
    await assertAdminUser();

    const normalizedInput = {
      ...input,
      meta_description: input.meta_description ?? "",
      cover_image_url: input.cover_image_url ?? "",
    };
    const validated = postSchema.parse(normalizedInput);
    const adminClient = createAdminClient();

    const newRecord = {
      title: validated.title,
      slug: validated.slug,
      content: validated.content,
      meta_description: validated.meta_description || null,
      cover_image_url: validated.cover_image_url || null,
      author: validated.author || "Lotus365 Team",
      tags: validated.tags,
      status: validated.status,
      source: validated.source,
      published_at:
        validated.status === "published" ? new Date().toISOString() : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await adminClient
      .from("posts")
      .insert(newRecord)
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return {
          success: false,
          error: "An article with this URL slug already exists. Please customize the slug.",
        };
      }
      return { success: false, error: "Unable to save article. Please try again." };
    }

    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    revalidatePath(`/blog/${validated.slug}`);

    return { success: true, data };
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return { success: false, error: err.message };
    }
    if (err instanceof ZodError) {
      return { success: false, error: err.issues[0]?.message || "Invalid post data." };
    }
    return { success: false, error: "Failed to create post. Please try again." };
  }
}

export async function updatePostAction(id: string, input: PostInput) {
  try {
    await assertAdminUser();

    const normalizedInput = {
      ...input,
      meta_description: input.meta_description ?? "",
      cover_image_url: input.cover_image_url ?? "",
    };
    const validated = postSchema.parse(normalizedInput);
    const adminClient = createAdminClient();

    // Fetch existing post to handle published_at logic
    const { data: existing } = await adminClient
      .from("posts")
      .select("status, published_at")
      .eq("id", id)
      .single();

    let published_at = existing?.published_at;
    if (validated.status === "published" && !published_at) {
      published_at = new Date().toISOString();
    } else if (validated.status === "draft") {
      published_at = null;
    }

    const updates = {
      title: validated.title,
      slug: validated.slug,
      content: validated.content,
      meta_description: validated.meta_description || null,
      cover_image_url: validated.cover_image_url || null,
      author: validated.author,
      tags: validated.tags,
      status: validated.status,
      source: validated.source,
      published_at,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await adminClient
      .from("posts")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return {
          success: false,
          error: "An article with this URL slug already exists. Please choose a different slug.",
        };
      }
      return { success: false, error: "Unable to update article. Please try again." };
    }

    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    revalidatePath(`/blog/${validated.slug}`);

    return { success: true, data };
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return { success: false, error: err.message };
    }
    if (err instanceof ZodError) {
      return { success: false, error: err.issues[0]?.message || "Invalid post data." };
    }
    return { success: false, error: "Failed to update post. Please try again." };
  }
}

export async function deletePostAction(id: string) {
  try {
    await assertAdminUser();

    const adminClient = createAdminClient();

    const { data: post } = await adminClient
      .from("posts")
      .select("slug")
      .eq("id", id)
      .single();

    const { error } = await adminClient.from("posts").delete().eq("id", id);

    if (error) {
      return { success: false, error: "Unable to delete article. Please try again." };
    }

    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    if (post?.slug) {
      revalidatePath(`/blog/${post.slug}`);
    }

    return { success: true };
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return { success: false, error: err.message };
    }
    return { success: false, error: "Failed to delete post. Please try again." };
  }
}

export async function togglePostStatusAction(
  id: string,
  newStatus: "draft" | "published"
) {
  try {
    await assertAdminUser();

    const adminClient = createAdminClient();

    const updates: {
      status: "draft" | "published";
      updated_at: string;
      published_at?: string | null;
    } = {
      status: newStatus,
      updated_at: new Date().toISOString(),
    };

    if (newStatus === "published") {
      updates.published_at = new Date().toISOString();
    } else {
      updates.published_at = null;
    }

    const { data: post, error } = await adminClient
      .from("posts")
      .update(updates)
      .eq("id", id)
      .select("slug, title")
      .single();

    if (error) {
      return { success: false, error: "Unable to update status. Please try again." };
    }

    revalidatePath("/admin");
    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    if (post?.slug) {
      revalidatePath(`/blog/${post.slug}`);
    }

    return { success: true, data: post };
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return { success: false, error: err.message };
    }
    return { success: false, error: "Failed to update article status." };
  }
}
