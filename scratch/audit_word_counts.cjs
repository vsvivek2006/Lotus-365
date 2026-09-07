const fs = require('fs');
const path = require('path');

const srcPages = path.join(__dirname, '..', 'src', 'pages');
const files = fs.readdirSync(srcPages).filter(f => f.endsWith('.tsx'));

console.log('--- Word Count & Page Analysis ---');
let totalWordsAll = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(srcPages, file), 'utf8');
  // Strip out HTML tags and JSX markup to count actual text words
  const cleanText = content
    .replace(/<[^>]*>/g, ' ')
    .replace(/import\s+.*?;/g, ' ')
    .replace(/export\s+const\s+/g, ' ')
    .replace(/const\s+.*?;/g, ' ')
    .replace(/[{}`$()[\]]/g, ' ')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = cleanText.split(' ').filter(w => w.length > 1).length;
  totalWordsAll += words;
  console.log(`${file}: ~${words} words (Raw size: ${(content.length / 1024).toFixed(1)} KB)`);
});

console.log('-----------------------------------');
console.log(`TOTAL SITE CONTENT WORDS: ~${totalWordsAll} words across 54 routes!`);
