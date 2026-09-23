const fs = require('fs');
const path = require('path');

const distDir = path.resolve('dist');
const routes = fs.readdirSync(distDir).filter(f => f.endsWith('.html'));

function extractMainText(html) {
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/body>/i);
    if (!rootMatch) return '';
    return rootMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }
  let content = mainMatch[1];
  // Remove RelatedPages and PageCTA sections
  content = content.replace(/<section\b[^>]*bg-\[#0E4737\][\s\S]*?<\/section>/gi, '');
  content = content.replace(/<section\b[^>]*bg-gradient-to-br[\s\S]*?<\/section>/gi, '');
  return content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

const pageTexts = {};
for (const file of routes) {
  const html = fs.readFileSync(path.join(distDir, file), 'utf8');
  pageTexts[file] = extractMainText(html);
}

console.log('--- CONTENT SIMILARITY AUDIT (Identical/Duplicate Copy Check) ---');
const wordsByPage = {};
for (const [file, text] of Object.entries(pageTexts)) {
  const words = text.toLowerCase().split(/\s+/).filter(w => w.length > 3);
  wordsByPage[file] = new Set(words);
  console.log(`${file.padEnd(30)}: ${words.length} words (${wordsByPage[file].size} unique)`);
}

let highSimilarityPairs = [];
const pageNames = Object.keys(wordsByPage);
for (let i = 0; i < pageNames.length; i++) {
  for (let j = i + 1; j < pageNames.length; j++) {
    const p1 = pageNames[i];
    const p2 = pageNames[j];
    const s1 = wordsByPage[p1];
    const s2 = wordsByPage[p2];

    let intersection = 0;
    for (const w of s1) {
      if (s2.has(w)) intersection++;
    }
    const union = s1.size + s2.size - intersection;
    const similarity = intersection / union;

    if (similarity > 0.50) {
      highSimilarityPairs.push({ p1, p2, similarity: (similarity * 100).toFixed(1) + '%' });
    }
  }
}

console.log('\nTotal page pairs analyzed:', (pageNames.length * (pageNames.length - 1)) / 2);
console.log('Pairs with similarity > 50%:', highSimilarityPairs.length);
highSimilarityPairs.forEach(p => console.log(`  * ${p.p1} <-> ${p.p2} (${p.similarity})`));
