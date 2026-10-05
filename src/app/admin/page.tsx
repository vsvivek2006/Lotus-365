import { redirect } from "next/navigation";

// /admin → always goes straight to the articles list
export default function AdminRootPage() {
  redirect("/admin/blog");
}
