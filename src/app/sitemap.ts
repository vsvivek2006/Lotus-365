import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  // Read all directories inside src/app
  const appDir = path.join(process.cwd(), 'src/app');
  const items = fs.readdirSync(appDir, { withFileTypes: true });
  
  const routes = items
    .filter(item => item.isDirectory())
    .map(item => item.name);
  
  const baseUrl = 'https://lotus365officialid.com';

  const sitemapRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2024-03-20T00:00:00.000Z'), // Base date for homepage
      changeFrequency: 'daily',
      priority: 1,
    }
  ];

  routes.forEach(route => {
    // Ignore dynamic routes if any exist, or api
    if (route.startsWith('[') || route === 'api') return;
    
    // Assign priorities based on some simple logic
    let priority = 0.8;
    if (['about', 'contact', 'login', 'register', 'terms', 'privacy-policy'].includes(route)) {
        priority = 0.5;
    } else if (['cricket-betting', 'live-casino', 'aviator-game'].includes(route)) {
        priority = 0.9;
    }

    let lastModified = new Date('2024-03-20T00:00:00.000Z');
    try {
      const routePath = path.join(appDir, route, 'page.tsx');
      const stats = fs.statSync(routePath);
      lastModified = stats.mtime;
    } catch (e) {
      // Ignore if file stat fails
    }

    sitemapRoutes.push({
      url: `${baseUrl}/${route}`,
      lastModified,
      changeFrequency: 'weekly', // Better than daily for all pages
      priority,
    });
  });

  return sitemapRoutes;
}
