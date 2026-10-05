/**
 * Fallback cover visuals tailored for Lotus365 Sports Exchange & Live Casino topics.
 * If an author uploaded a custom cover, it is used directly.
 * Otherwise, a topic-aware professional visual is provided.
 */

const FALLBACK_COVERS = {
  cricket: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=1200&q=80",
  casino: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80",
  aviator: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
  exchange: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
  default: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
};

export function getPostCoverImage(
  url: string | null | undefined,
  title: string = "",
  tags?: string[] | null
): string {
  if (url && typeof url === "string" && url.trim().length > 0) {
    return url.trim();
  }

  const tagString = Array.isArray(tags) ? tags.join(" ") : "";
  const query = `${title} ${tagString}`.toLowerCase();

  if (query.includes("cricket") || query.includes("ipl") || query.includes("match") || query.includes("t20")) {
    return FALLBACK_COVERS.cricket;
  }

  if (query.includes("casino") || query.includes("roulette") || query.includes("blackjack") || query.includes("teen patti")) {
    return FALLBACK_COVERS.casino;
  }

  if (query.includes("aviator") || query.includes("crash") || query.includes("multiplier")) {
    return FALLBACK_COVERS.aviator;
  }

  if (query.includes("exchange") || query.includes("odds") || query.includes("back") || query.includes("lay")) {
    return FALLBACK_COVERS.exchange;
  }

  return FALLBACK_COVERS.default;
}

/**
 * Checks whether an image URL is hosted on an allowed domain configured in next.config.mjs.
 * If not, <Image> can safely render with unoptimized={true} to avoid unhandled runtime errors.
 */
export function isOptimizedHost(url: string | null | undefined): boolean {
  if (!url || typeof url !== "string") return true;
  if (url.startsWith("/") || url.startsWith("data:")) return true;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname;
    return (
      host === "images.unsplash.com" ||
      host === "images.pexels.com" ||
      host.endsWith(".supabase.co") ||
      host === "localhost"
    );
  } catch {
    return false;
  }
}
