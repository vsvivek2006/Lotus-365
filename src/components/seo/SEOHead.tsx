import React from 'react';


export interface FAQItem {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
  pageType?: 'WebPage' | 'FAQPage' | 'Article' | 'BreadcrumbList';
  faqItems?: FAQItem[];
}

const SITE_NAME = 'Lotus365 Official';
const SITE_URL = 'https://lotus365officialid.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-banner.webp`;

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  schema,
  pageType,
  faqItems,
}) => {
  // Ensure title stays under 60 chars for Google SERP
  let fullTitle = title;
  if (!title.toLowerCase().includes('lotus365')) {
    if (title.length + 11 <= 60) {
      fullTitle = `${title} | Lotus365`;
    } else if (title.length + 19 <= 60) {
      fullTitle = `${title} | ${SITE_NAME}`;
    }
  }

  // Canonical normalization: exact slash on root, no trailing slash on subpaths
  const cleanPath = canonical === '/' ? '/' : `/${canonical.replace(/^\/|\/$/g, '')}`;
  const fullCanonical = `${SITE_URL}${cleanPath}`;

  const isFaq = pageType === 'FAQPage' || (Boolean(faqItems && faqItems.length > 0));

  // Breadcrumbs schema for subpages
  const pathSegments = cleanPath.split('/').filter(Boolean);
  const breadcrumbList = pathSegments.length > 0 ? {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      ...pathSegments.map((segment, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        item: `${SITE_URL}/${pathSegments.slice(0, idx + 1).join('/')}`,
      })),
    ],
  } : undefined;

  const defaultSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': isFaq ? 'FAQPage' : (pageType || 'WebPage'),
    name: fullTitle,
    description,
    url: fullCanonical,
    ...(isFaq && faqItems && faqItems.length > 0
      ? {
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question || item.q || '',
            acceptedAnswer: { '@type': 'Answer', text: item.answer || item.a || '' },
          })),
        }
      : {}),
    ...(breadcrumbList ? { breadcrumb: breadcrumbList } : {}),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/lotus-logo.png`,
    },
  };

  const jsonLd = schema ?? defaultSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
