import fs from 'fs';
import path from 'path';

const appDir = path.join(process.cwd(), 'src/app');
const viewsDir = path.join(process.cwd(), 'src/views');

const getFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
};

const pageFiles = getFiles(appDir).filter(f => f.endsWith('page.tsx'));

let totalFixed = 0;

pageFiles.forEach(pageFile => {
  let content = fs.readFileSync(pageFile, 'utf8');
  
  // Find the imported view
  const importMatch = content.match(/import\s+{\s*([^}]+)\s*}\s+from\s+'@\/views\/([^']+)'/);
  if (!importMatch) return;
  
  const viewName = importMatch[1].trim();
  const viewFileName = importMatch[2].trim() + '.tsx';
  const viewFilePath = path.join(viewsDir, viewFileName);
  
  if (!fs.existsSync(viewFilePath)) return;
  
  const viewContent = fs.readFileSync(viewFilePath, 'utf8');
  
  // Extract SEOHead props using regex
  const seoMatch = viewContent.match(/<SEOHead\s+([^>]+)\/>/s);
  
  if (!seoMatch) return;
  
  const propsStr = seoMatch[1];
  
  const extractProp = (propName) => {
    const regex = new RegExp(`${propName}=["']([^"']+)["']`);
    const match = propsStr.match(regex);
    return match ? match[1] : null;
  };
  
  const title = extractProp('title');
  const description = extractProp('description');
  const canonical = extractProp('canonical');
  const keywords = extractProp('keywords');
  
  if (!title) return; // If title is dynamic, skip for now. Most are static.
  
  // Prepare metadata block
  let metaBlock = `import { Metadata } from 'next';\n\n`;
  metaBlock += `export const metadata: Metadata = {\n`;
  metaBlock += `  title: ${JSON.stringify(title)},\n`;
  if (description) metaBlock += `  description: ${JSON.stringify(description)},\n`;
  if (keywords) metaBlock += `  keywords: ${JSON.stringify(keywords)},\n`;
  
  metaBlock += `  alternates: {\n`;
  metaBlock += `    canonical: ${JSON.stringify(canonical ? `https://lotus365officialid.com${canonical}` : 'https://lotus365officialid.com')}\n`;
  metaBlock += `  }\n`;
  metaBlock += `};\n\n`;
  
  // Remove "use client" from page.tsx
  content = content.replace(/"use client";\r?\n?/, '');
  
  // Prepend metadata block
  const newContent = metaBlock + content;
  
  fs.writeFileSync(pageFile, newContent);
  totalFixed++;
});

console.log(`Successfully fixed metadata for ${totalFixed} pages.`);
