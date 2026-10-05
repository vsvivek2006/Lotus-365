import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://lotus365officialid.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/*', '/api/*', '/login', '/register'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
        ],
        allow: '/',
        disallow: ['/admin', '/admin/*', '/api/*', '/login', '/register'],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap_index.xml`,
    ],
    host: baseUrl,
  };
}
