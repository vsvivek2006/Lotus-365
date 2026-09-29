import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

function fixLinksInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Regex to match ONLY single-line <Link> or <a> tags to prevent JSX syntax errors
  const linkRegex = /<(Link|a)([^>\n]*?)>(.*?)<\/\1>/g;
  
  const updatedContent = content.replace(linkRegex, (match, tag, attributes, innerHTML) => {
    // Skip if title already exists
    if (attributes.includes('title=')) return match;
    
    // Skip if there are arrow functions (just to be safe)
    if (attributes.includes('=>')) return match;
    
    // Strip HTML tags from innerHTML
    let cleanTitle = innerHTML.replace(/<[^>]+>/g, '').trim();
    cleanTitle = cleanTitle.replace(/&amp;/g, '&').replace(/&rsaquo;/g, '').replace(/🪷/g, '').trim();

    if (!cleanTitle) {
      const hrefMatch = attributes.match(/href=["']([^"']+)["']/);
      if (hrefMatch) {
         let fallback = hrefMatch[1].replace(/\//g, ' ').trim();
         if (!fallback) fallback = 'Home';
         cleanTitle = fallback;
      } else {
         cleanTitle = 'Lotus365 Link';
      }
    }
    
    cleanTitle = cleanTitle.replace(/\s+/g, ' ');
    if (cleanTitle.includes('{') || cleanTitle.includes('}')) {
        cleanTitle = "Lotus365 Official Link";
    }

    return `<${tag}${attributes} title="${cleanTitle}">${innerHTML}</${tag}>`;
  });

  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated titles in: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      fixLinksInFile(fullPath);
    }
  }
}

console.log('Starting single-line link title fixes...');
walkDir(srcDir);
console.log('Finished fixing link titles.');
