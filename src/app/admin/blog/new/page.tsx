import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PostEditor } from "@/components/admin/PostEditor";
import { assertAdminUser } from "@/lib/authorization";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function NewBlogPostPage() {
  await assertAdminUser();

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
            Create Blog Post
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Write your article manually using WYSIWYG rich text or generate complete structured SEO content with AI.
          </p>
        </div>
      </div>

      <PostEditor />
    </div>
  );
}
