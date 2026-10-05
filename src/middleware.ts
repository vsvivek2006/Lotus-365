import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export function sanitizeAdminRedirect(path: string | null | undefined): string {
  if (!path) return "/admin";
  if (path.startsWith("/admin") && !path.startsWith("//") && !path.includes(":")) {
    return path;
  }
  return "/admin";
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static assets, api, next internals bypass middleware
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const isAdminPath = normalizedPath.startsWith("/admin");

  if (!isAdminPath) {
    return NextResponse.next();
  }

  const isLoginPage = normalizedPath === "/admin/login";

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      if (!isLoginPage) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = "/admin/login";
        loginUrl.search = "";
        return NextResponse.redirect(loginUrl);
      }
      return NextResponse.next();
    }

    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    });

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    // If unauthenticated:
    if (!user || error) {
      if (!isLoginPage) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = "/admin/login";
        loginUrl.search = "";
        loginUrl.searchParams.set("redirectTo", sanitizeAdminRedirect(normalizedPath));
        return NextResponse.redirect(loginUrl);
      }
      return supabaseResponse;
    }

    // If authenticated:
    const role = (user.app_metadata?.role as string | undefined) || "";
    const isAuthorizedAdmin = ["superadmin", "admin", "editor"].includes(role);

    if (isLoginPage) {
      if (isAuthorizedAdmin) {
        const redirectParam = request.nextUrl.searchParams.get("redirectTo");
        const destination = sanitizeAdminRedirect(redirectParam);
        const destinationUrl = request.nextUrl.clone();
        destinationUrl.pathname = destination;
        destinationUrl.search = "";
        return NextResponse.redirect(destinationUrl);
      }
    }

    if (!isAuthorizedAdmin) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.search = "";
      loginUrl.searchParams.set("error", "forbidden");
      return NextResponse.redirect(loginUrl);
    }

    supabaseResponse.cookies.getAll().forEach((cookie) => {
      supabaseResponse.cookies.set(cookie);
    });

    return supabaseResponse;
  } catch (_err) {
    // Safe fallback without leaking details
    if (!isLoginPage) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.search = "";
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
