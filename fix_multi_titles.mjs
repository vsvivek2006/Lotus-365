import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, 'src');

function fixLinksInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    
    let outContent = '';
    let regex = /<(Link|a)(?=\s|>)/g;
    let match;
    let lastIndex = 0;
    
    while ((match = regex.exec(content)) !== null) {
        let tag = match[1];
        let start = match.index;
        outContent += content.substring(lastIndex, start);
        
        let i = start + tag.length + 1;
        let inQuotes = false;
        let quoteChar = '';
        let braceDepth = 0;
        
        while (i < content.length) {
            let char = content[i];
            
            if (inQuotes) {
                if (char === quoteChar) inQuotes = false;
            } else {
                if (char === '"' || char === "'" || char === '`') {
                    inQuotes = true;
                    quoteChar = char;
                } else if (char === '{') {
                    braceDepth++;
                } else if (char === '}') {
                    braceDepth--;
                } else if (char === '>' && braceDepth === 0) {
                    break;
                }
            }
            i++;
        }
        
        if (i === content.length) {
            outContent += content.substring(start, i);
            lastIndex = i;
            continue;
        }
        
        let openTagEnd = i;
        let openingTagString = content.substring(start, openTagEnd + 1);
        
        if (openingTagString.endsWith('/>')) {
            outContent += openingTagString;
            lastIndex = openTagEnd + 1;
            regex.lastIndex = lastIndex;
            continue;
        }
        
        let closeTagStr = `</${tag}>`;
        let closeTagStart = content.indexOf(closeTagStr, openTagEnd);
        
        if (closeTagStart === -1) {
             outContent += openingTagString;
             lastIndex = openTagEnd + 1;
             regex.lastIndex = lastIndex;
             continue;
        }
        
        let innerHTML = content.substring(openTagEnd + 1, closeTagStart);
        
        if (!openingTagString.includes('title=')) {
             let cleanTitle = innerHTML.replace(/<[^>]+>/g, '').trim();
             cleanTitle = cleanTitle.replace(/&amp;/g, '&').replace(/&rsaquo;/g, '').replace(/🪷/g, '').trim();
             cleanTitle = cleanTitle.replace(/\s+/g, ' '); 
             
             if (!cleanTitle || cleanTitle.includes('{') || cleanTitle.includes('}')) {
                 let hrefMatch = openingTagString.match(/href=(?:["']([^"']+)["']|\{([^}]+)\})/);
                 if (hrefMatch) {
                     let hrefVal = hrefMatch[1] || hrefMatch[2];
                     if (hrefVal && typeof hrefVal === 'string') {
                         cleanTitle = hrefVal.replace(/['"`]/g, '').split('/').pop().replace(/-/g, ' ').trim();
                         if (hrefVal.startsWith('#')) cleanTitle = hrefVal.replace('#', '').replace(/-/g, ' ').trim();
                         if (!cleanTitle || cleanTitle.includes('javascript') || cleanTitle.includes('wa.me') || cleanTitle.includes('whatsapp') || cleanTitle.includes('lotus365officialid')) {
                             cleanTitle = "Lotus365 Official Link";
                         }
                     }
                 } else {
                     cleanTitle = "Lotus365 Link";
                 }
             }
             
             cleanTitle = cleanTitle.split(' ').map(w => w ? w.charAt(0).toUpperCase() + w.slice(1) : '').join(' ').trim();
             if(!cleanTitle) cleanTitle = "Lotus365 Official";

             let newOpenTag = content.substring(start, openTagEnd) + ` title="${cleanTitle}">`;
             outContent += newOpenTag + innerHTML + closeTagStr;
             modified = true;
        } else {
             outContent += openingTagString + innerHTML + closeTagStr;
        }
        
        lastIndex = closeTagStart + closeTagStr.length;
        regex.lastIndex = lastIndex;
    }
    
    outContent += content.substring(lastIndex);
    
    if (modified) {
        fs.writeFileSync(filePath, outContent);
        console.log(`Updated multi-line titles in: ${filePath}`);
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

console.log('Starting deep-dive multi-line link title fixes...');
walkDir(srcDir);
console.log('Finished fixing link titles.');
