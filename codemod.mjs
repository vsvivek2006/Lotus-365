import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
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

const files = walk(path.join(process.cwd(), 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let changed = false;

  if (content.includes('react-router-dom')) {
    // Replace react-router-dom Link with next/link
    // Replace react-router-dom useNavigate with next/navigation useRouter
    // Replace Navigate with redirect from next/navigation? Too complex, let's just do Link and useNavigate.
    
    // Quick and dirty string replacements
    const hasLink = /\bLink\b/.test(content);
    const hasUseNavigate = /\buseNavigate\b/.test(content);
    
    if (hasLink || hasUseNavigate) {
       // Remove the react-router-dom import
       content = content.replace(/import\s*{[^}]*}\s*from\s*['"]react-router-dom['"];?/g, '');
       
       let newImports = [];
       if (hasLink) newImports.push(`import Link from 'next/link';`);
       if (hasUseNavigate) newImports.push(`import { useRouter } from 'next/navigation';`);
       
       content = newImports.join('\n') + '\n' + content;
       
       // Replace useNavigate() with useRouter()
       content = content.replace(/useNavigate\(\)/g, 'useRouter()');
       
       changed = true;
    }
  }
  
  if (content.includes('react-helmet-async')) {
    // We can't use helmet in Next.js Server Components, and we removed it.
    // Let's just remove helmet imports and SEOHead usages if any.
    content = content.replace(/import\s*{[^}]*}\s*from\s*['"]react-helmet-async['"];?/g, '');
    content = content.replace(/import\s+SEOHead\s+from\s+['"][^'"]+['"];?/g, '');
    content = content.replace(/<SEOHead[^>]*>/g, '');
    content = content.replace(/<\/SEOHead>/g, '');
    // Also might have Helmet tags
    content = content.replace(/<Helmet[^>]*>/g, '');
    content = content.replace(/<\/Helmet>/g, '');
    
    changed = true;
  }

  // Prepend "use client" to files that use react hooks or framer-motion or browser APIs
  if (!content.includes('"use client"') && !content.includes("'use client'")) {
      const usesHooks = /\b(useState|useEffect|useRef|useCallback|useMemo|useRouter)\b/.test(content);
      const usesMotion = /\bframer-motion\b/.test(content);
      const usesWindow = /\bwindow\./.test(content);
      if (usesHooks || usesMotion || usesWindow) {
         content = `"use client";\n` + content;
         changed = true;
      }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Codemodded:', file);
  }
});
