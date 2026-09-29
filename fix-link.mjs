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

  // Replace <Link to="..."> with <Link href="...">
  if (content.includes('<Link') || content.includes('to=')) {
    // A bit rough regex but works for most cases
    // matches <Link ... to="..." ... > and <Link ... to={...} ... >
    // Let's just do a simpler replace on 'to=' if it's inside a Link tag. 
    // It's safer to just replace `<Link to=` or `<Link className="..." to=`
    // Actually we can just regex: `to=({[^}]+}|"[^"]+"|'[^']+')` if preceded by `<Link` or similar, but maybe just string replace:
    
    const newContent = content.replace(/(<Link[^>]+?)to=/g, '$1href=');
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }

  // Next.js uses process.env.NEXT_PUBLIC_ instead of import.meta.env.VITE_
  if (content.includes('import.meta.env')) {
    content = content.replace(/import\.meta\.env\.VITE_/g, 'process.env.NEXT_PUBLIC_');
    content = content.replace(/import\.meta\.env\./g, 'process.env.');
    changed = true;
  }

  // Next.js Image vs img: We won't convert img to next/image for now to avoid layout issues unless required, Next.js supports standard img.
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Fixed Link to href in:', file);
  }
});
