import type { Metadata } from "next";
import { Toaster } from "sonner";
import { assertAdminUser } from "@/lib/authorization";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin Portal | Lotus365",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userEmail: string | null = null;
  let userRole: string | null = null;

  try {
    const adminUser = await assertAdminUser();
    userEmail = adminUser.email;
    userRole = adminUser.role;
  } catch {
    userEmail = null;
    userRole = null;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Toaster richColors position="top-right" theme="dark" closeButton />
      {!userEmail ? (
        children
      ) : (
        <AdminShell userEmail={userEmail} userRole={userRole}>
          {children}
        </AdminShell>
      )}
    </div>
  );
}
