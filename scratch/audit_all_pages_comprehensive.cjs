const fs = require('fs');
const path = require('path');

const srcPages = path.join(__dirname, '..', 'src', 'pages');
const files = fs.readdirSync(srcPages).filter(f => f.endsWith('.tsx'));

console.log('--- Universal Per-Component Word Count Audit ---');

let below1000Count = 0;
let above1000Count = 0;
const results = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(srcPages, file), 'utf8');
  const comps = content.split('export const ');
  if (comps.length > 1) {
    comps.shift();
    comps.forEach(c => {
      const name = c.split(':')[0].split('=')[0].trim();
      const clean = c.replace(/<[^>]*>/g, ' ').replace(/[{}`$()[\]]/g, ' ').replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
      const words = clean.split(' ').filter(w => w.length > 1).length;
      results.push({ file, name, words });
    });
  } else {
    // Check if export default
    const name = file.replace('.tsx', '');
    const clean = content.replace(/<[^>]*>/g, ' ').replace(/[{}`$()[\]]/g, ' ').replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
    const words = clean.split(' ').filter(w => w.length > 1).length;
    results.push({ file, name, words });
  }
});

results.forEach(r => {
  if (r.words < 1000) {
    console.log(`[BELOW 1000] ${r.file} -> ${r.name}: ${r.words} words`);
    below1000Count++;
  } else {
    console.log(`[OK >= 1000] ${r.file} -> ${r.name}: ${r.words} words`);
    above1000Count++;
  }
});

console.log('----------------------------------------------------');
console.log(`Summary: ${above1000Count} components >= 1000 words, ${below1000Count} components < 1000 words.`);
console.log(`Total components checked: ${results.length}`);
