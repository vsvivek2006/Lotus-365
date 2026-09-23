const fs = require("fs");
const path = require("path");
const distDir = "dist";
const htmlFiles = [];
function walkDist(dir) {
  fs.readdirSync(dir).forEach(function(f) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkDist(full);
    else if (f.endsWith(".html")) htmlFiles.push(full);
  });
}
walkDist(distDir);
const missingH1=[], multipleH1=[], missingCanonical=[], missingRobots=[], missingOG=[], missingTwitter=[], missingTitle=[], missingDesc=[], shortDesc=[], dupTitleMap={};
htmlFiles.forEach(function(file) {
  const content = fs.readFileSync(file, "utf8");
  const rel = path.relative("dist", file);
  const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (!titleMatch) { missingTitle.push(rel); }
  else { const t = titleMatch[1].trim(); if (!dupTitleMap[t]) dupTitleMap[t]=[]; dupTitleMap[t].push(rel); }
  if (!content.includes("name=\"description\"") && !content.includes("name='description'")) { missingDesc.push(rel); }
  const h1Count = (content.match(/<h1[\s>]/gi)||[]).length;
  if (h1Count===0) missingH1.push(rel);
  else if (h1Count>1) multipleH1.push(rel+" ("+h1Count+")");
  if (!content.includes("canonical")) missingCanonical.push(rel);
  if (!content.includes("og:title")) missingOG.push(rel);
  if (!content.includes("twitter:card")) missingTwitter.push(rel);
  if (!content.includes("robots")) missingRobots.push(rel);
});
const dupTitles = Object.entries(dupTitleMap).filter(function(e){ return e[1].length>1; });
console.log("Total HTML: "+htmlFiles.length);
console.log("Missing title: "+missingTitle.length);
console.log("Missing desc meta: "+missingDesc.length);
console.log("Missing H1: "+missingH1.length);
console.log("Multiple H1: "+multipleH1.length);
console.log("Missing canonical: "+missingCanonical.length);
console.log("Missing OG: "+missingOG.length);
console.log("Missing Twitter card: "+missingTwitter.length);
console.log("Missing robots meta: "+missingRobots.length);
console.log("Duplicate titles: "+dupTitles.length);
if (missingH1.length>0) { console.log("MISSING H1 files:"); missingH1.forEach(function(f){ console.log("  "+f); }); }
if (missingCanonical.length>0) { console.log("MISSING canonical (first 10):"); missingCanonical.slice(0,10).forEach(function(f){ console.log("  "+f); }); }
if (missingRobots.length>0) { console.log("MISSING robots (first 5):"); missingRobots.slice(0,5).forEach(function(f){ console.log("  "+f); }); }
if (dupTitles.length>0) { console.log("DUPLICATE TITLES:"); dupTitles.slice(0,5).forEach(function(e){ console.log("  ["+e[0].substring(0,50)+"] in: "+e[1].join(", ")); }); }
if (multipleH1.length>0) { console.log("MULTIPLE H1:"); multipleH1.slice(0,5).forEach(function(f){ console.log("  "+f); }); }
