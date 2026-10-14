const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

console.log('Auditing HTML files:', htmlFiles);

let issues = [];

htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Check images
  const imgMatches = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/g)];
  imgMatches.forEach(m => {
    const src = m[1];
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      // Remote or data URL
    } else {
      // Local file
      const localPath = path.join(rootDir, src.split('?')[0]);
      if (!fs.existsSync(localPath)) {
        issues.push(`[${file}] Missing local image: ${src}`);
      }
    }
  });

  // 2. Check PDFs
  const pdfMatches = [...content.matchAll(/href=["']([^"']+\.pdf)["']/g)];
  pdfMatches.forEach(m => {
    const href = m[1];
    if (!href.startsWith('http')) {
      const localPath = path.join(rootDir, href.split('?')[0]);
      if (!fs.existsSync(localPath)) {
        issues.push(`[${file}] Missing PDF: ${href}`);
      }
    }
  });

  // 3. Check internal HTML links
  const htmlMatches = [...content.matchAll(/href=["']([^"']+\.html(?:#[^"']*)?)["']/g)];
  htmlMatches.forEach(m => {
    const href = m[1];
    const targetFile = href.split('#')[0];
    if (!targetFile.startsWith('http')) {
      const localPath = path.join(rootDir, targetFile);
      if (!fs.existsSync(localPath)) {
        issues.push(`[${file}] Broken HTML link: ${targetFile}`);
      }
    }
  });

  // 4. Check CSS & JS links
  const cssMatches = [...content.matchAll(/<link[^>]+href=["']([^"']+\.css)["']/g)];
  cssMatches.forEach(m => {
    const href = m[1];
    if (!href.startsWith('http')) {
      const localPath = path.join(rootDir, href.split('?')[0]);
      if (!fs.existsSync(localPath)) {
        issues.push(`[${file}] Missing CSS file: ${href}`);
      }
    }
  });

  const jsMatches = [...content.matchAll(/<script[^>]+src=["']([^"']+\.js)["']/g)];
  jsMatches.forEach(m => {
    const src = m[1];
    if (!src.startsWith('http')) {
      const localPath = path.join(rootDir, src.split('?')[0]);
      if (!fs.existsSync(localPath)) {
        issues.push(`[${file}] Missing JS file: ${src}`);
      }
    }
  });
});

if (issues.length === 0) {
  console.log('✅ Audit Passed! All images, rulebook PDFs, stylesheets, scripts, and internal links exist and are valid across all pages.');
} else {
  console.log(`❌ Found ${issues.length} issues:`);
  issues.forEach(i => console.log('  -', i));
}
