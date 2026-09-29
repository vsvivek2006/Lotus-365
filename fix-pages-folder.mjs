import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

// 1. Rename src/pages to src/views
const pagesDir = path.join(process.cwd(), 'src', 'pages');
const viewsDir = path.join(process.cwd(), 'src', 'views');

if (fs.existsSync(pagesDir)) {
  fs.renameSync(pagesDir, viewsDir);
  console.log('Renamed src/pages to src/views');
}

// 2. Replace @/pages/ with @/views/ in all src files
const allFiles = walk(path.join(process.cwd(), 'src'));
allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let changed = false;

  if (content.includes('@/pages/')) {
    content = content.replace(/@\/pages\//g, '@/views/');
    changed = true;
  }

  if (content.includes('../pages/')) {
    content = content.replace(/\.\.\/pages\//g, '../views/');
    changed = true;
  }

  if (content.includes('./pages/')) {
    content = content.replace(/\.\/pages\//g, './views/');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Updated imports in', file);
  }
});

// 3. Fix ScrollToTop
const scrollToTopFile = path.join(process.cwd(), 'src', 'components', 'layout', 'ScrollToTop.tsx');
if (fs.existsSync(scrollToTopFile)) {
  fs.writeFileSync(scrollToTopFile, 'export const ScrollToTop = () => null;\n', 'utf-8');
  console.log('Emptied ScrollToTop.tsx');
}

// Check other react-router-dom usages
allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    if (content.includes('react-router-dom')) {
        console.log('WARNING: react-router-dom still found in', file);
        content = content.replace(/import\s*{[^}]*}\s*from\s*['"]react-router-dom['"];?/g, '');
        fs.writeFileSync(file, content, 'utf-8');
    }
});
