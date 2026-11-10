# Project: Lotus365 Complete Platform Revamp & Visual Modernization

## Vision
Transform the Lotus365 platform into an elite, luxury betting exchange and gaming destination with a modern dark emerald & gold design system, comprehensive dummy/placeholder image architecture, 100% page coverage (111 routes total), and strict adherence to Google's latest SEO and Core Web Vitals guidelines.

## Requirements & Scope
- **Total Route Coverage:** 106 static public landing/market pages + 1 home page (`/`) + dynamic blog engine (`/blog`, `/blog/[slug]`) + 5 admin routes. Zero pages omitted.
- **Image Asset System:** Centralized image registry (`src/data/images.ts`), curated high-res placeholder assets in `public/images/`, and `<AdaptiveImage>` component ensuring zero layout shift (CLS: 0). Easy 1:1 asset swap later.
- **SEO & Google Search Essentials:** Full compliance with Google 2026 guidelines, EEAT transparency, schema markup (`SportsWagering`, `BreadcrumbList`, `FAQPage`, `HowTo`, `Article`), and mobile-first responsive architecture.
- **Content Policy:** All marketing and website-facing copy rewrites utilize the global MCP tool `generate_seo_content`.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript 5.7
- Tailwind CSS 3.4
- Lucide React
- Supabase (Dynamic Blog)

