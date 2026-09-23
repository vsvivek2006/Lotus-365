import React from 'react';
import { Helmet } from 'react-helmet-async';

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
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Lotus365 Official" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="language" content="English" />
      <link rel="canonical" href={fullCanonical} />
      <link rel="alternate" hrefLang="en-IN" href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lotus365official" />
      <meta name="twitter:creator" content="@lotus365official" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};
