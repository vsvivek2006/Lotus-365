import fs from 'fs';
import path from 'path';

const routesStaticContent = fs.readFileSync(path.join(process.cwd(), 'src/routes-static.tsx'), 'utf-8');

// Match all import statements to know where components come from
const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/g;
const componentToPath = {};
let match;
while ((match = importRegex.exec(routesStaticContent)) !== null) {
  const components = match[1].split(',').map(c => c.trim());
  const importPath = match[2];
  components.forEach(c => {
    componentToPath[c] = importPath;
  });
}

// Manually add HomePage since it's imported differently or similarly
const homeMatch = /import\s*{\s*HomePage\s*}\s*from\s*['"](.*?)['"]/.exec(routesStaticContent);
if (homeMatch) {
  componentToPath['HomePage'] = homeMatch[1];
}

// Match all routes
const routeRegex = /{\s*path:\s*['"]([^'"]+)['"]\s*,\s*element:\s*<([A-Za-z0-9_]+)\s*\/>\s*}/g;
const routes = [];
while ((match = routeRegex.exec(routesStaticContent)) !== null) {
  routes.push({
    path: match[1],
    component: match[2]
  });
}

const appDir = path.join(process.cwd(), 'app');
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

// Generate layout.tsx
const layoutContent = `import '../src/index.css'; // Adjust path to global CSS
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lotus365 Official Website – Cricket Exchange & Live Casino',
  description: 'Explore Lotus365 official sports exchange, live cricket odds, Aviator, Teen Patti & 1000+ casino tables.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#14614C" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="selection:bg-brand-gold selection:text-brand-dark min-h-screen overflow-x-hidden font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
`;
fs.writeFileSync(path.join(appDir, 'layout.tsx'), layoutContent);

// Generate pages
routes.forEach(route => {
  let routePath = route.path === '/' ? '' : route.path;
  if (routePath.startsWith('/')) {
    routePath = routePath.substring(1);
  }
  
  const targetDir = path.join(appDir, routePath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const importSource = componentToPath[route.component];
  let importStatement = '';
  if (importSource) {
    // importSource is like './pages/AboutPage' -> we need to go back to src
    // from app/about/page.tsx, relative path to src/pages/AboutPage is '../../src/pages/AboutPage'
    // but Next.js supports @/src/... if configured. Let's just use @/pages/... if we configure tsconfig
    // Actually, let's just use relative paths or configure alias.
    importStatement = `import { ${route.component} } from '@/pages/${importSource.replace('./pages/', '')}';`;
  } else {
    importStatement = `// Warning: Could not resolve import for ${route.component}`;
  }

  const pageContent = `"use client";
import React from 'react';
${importStatement}

export default function Page() {
  return <${route.component} />;
}
`;
  
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), pageContent);
});

console.log('Successfully generated app directory with Next.js App Router structure.');
