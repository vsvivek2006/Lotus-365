-- Create posts table for Lotus-365 Blog
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  meta_description TEXT,
  cover_image_url TEXT,
  author TEXT NOT NULL DEFAULT 'Lotus365 Team',
  tags TEXT[] NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  source TEXT NOT NULL DEFAULT 'manual' CHECK (source IN ('manual', 'ai', 'ai-edited')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for fast querying
CREATE INDEX IF NOT EXISTS idx_posts_slug ON public.posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_status ON public.posts(status);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON public.posts(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Public can view published posts
CREATE POLICY "Public can view published posts"
  ON public.posts
  FOR SELECT
  USING (status = 'published');

-- Service role has full access
CREATE POLICY "Service role full access"
  ON public.posts
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
