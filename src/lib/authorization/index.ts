import "server-only";
import * as React from "react";
import { type SupabaseClient, type User } from "@supabase/supabase-js";
import { createSessionClient } from "@/lib/supabase/server";

export type AdminRole = "superadmin" | "admin" | "editor";

export interface AdminUserContext {
  id: string;
  email: string;
  role: AdminRole;
  rawUser: User;
}

export class AuthorizationError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(message: string, status = 403, code = "FORBIDDEN") {
    super(message);
    this.name = "AuthorizationError";
    this.status = status;
    this.code = code;
  }
}

const serverCache =
  typeof React.cache === "function"
    ? React.cache
    : <T extends (...args: any[]) => any>(fn: T): T => fn;

/**
 * Asserts that the current request has an authenticated administrator session.
 * Protects server actions, API routes, and admin pages.
 * Never exposes raw tokens, database errors, or sensitive environment details.
 */
export const assertAdminUser = serverCache(async function assertAdminUser(
  client?: SupabaseClient
): Promise<AdminUserContext> {
  try {
    const supabase = client || (await createSessionClient());
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      throw new AuthorizationError(
        "Authentication required. Please sign in to continue.",
        401,
        "UNAUTHENTICATED"
      );
    }

    const role = (user.app_metadata?.role as string | undefined) || "";
    const allowedRoles: AdminRole[] = ["superadmin", "admin", "editor"];

    if (!allowedRoles.includes(role as AdminRole)) {
      throw new AuthorizationError(
        "Access denied: Administrator privileges required.",
        403,
        "FORBIDDEN"
      );
    }

    return {
      id: user.id,
      email: user.email || "",
      role: role as AdminRole,
      rawUser: user,
    };
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      throw err;
    }
    // Safe error shielding: never leak internal exceptions
    throw new AuthorizationError(
      "Session verification failed. Please sign in again.",
      401,
      "AUTH_FAILED"
    );
  }
});
