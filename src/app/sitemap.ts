import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { createPublicClient } from '@/lib/supabase/public';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lotus365officialid.com';
  const appDir = path.join(process.cwd(), 'src/app');

  let homeLastMod = new Date();
  try {
    const homeStats = fs.statSync(path.join(appDir, 'page.tsx'));
    homeLastMod = homeStats.mtime;
  } catch {
    // fallback to now
  }

  const sitemapRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: homeLastMod,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 1. Filesystem Static Routes (excluding admin, api, login, register, and dynamic route brackets)
  const EXCLUDED_ROUTES = new Set(['admin', 'api', 'login', 'register']);

  try {
    const items = fs.readdirSync(appDir, { withFileTypes: true });
    const staticDirs = items
      .filter((item) => item.isDirectory())
      .map((item) => item.name);

    for (const route of staticDirs) {
      if (route.startsWith('[') || EXCLUDED_ROUTES.has(route)) continue;

      let priority = 0.8;
      if (['about', 'contact', 'terms', 'privacy-policy', 'faq', 'sitemap'].includes(route)) {
        priority = 0.6;
      } else if (
        [
          'cricket-betting',
          'cricket-exchange',
          'live-casino',
          'aviator-game',
          'ipl-betting',
          'teen-patti',
          'andar-bahar',
          '2-minute-cashout',
          'blog',
          'sportsbook',
          'withdrawal-proof-times',
        ].includes(route)
      ) {
        priority = 0.9;
      }

      let lastModified = new Date();
      try {
        const routePath = path.join(appDir, route, 'page.tsx');
        const stats = fs.statSync(routePath);
        lastModified = stats.mtime;
      } catch {
        // Fallback to now
      }

      sitemapRoutes.push({
        url: `${baseUrl}/${route}`,
        lastModified,
        changeFrequency: route === 'blog' ? 'daily' : 'weekly',
        priority,
      });
    }
  } catch (fsErr) {
    console.error('[sitemap] Error reading static routes:', fsErr);
  }

  // 2. Dynamic Blog Articles from Supabase
  try {
    const supabase = createPublicClient();
    const { data: posts, error } = await supabase
      .from('posts')
      .select('slug, updated_at, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (!error && Array.isArray(posts)) {
      for (const post of posts) {
        if (!post.slug) continue;
        sitemapRoutes.push({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: new Date(post.updated_at || post.published_at || Date.now()),
          changeFrequency: 'weekly',
          priority: 0.85,
        });
      }
    }
  } catch (dbErr) {
    console.error('[sitemap] Failed to query dynamic published posts:', dbErr);
  }

  return sitemapRoutes;
}
