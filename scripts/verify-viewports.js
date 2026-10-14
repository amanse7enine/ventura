const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

// We can run headless edge to capture screenshots at different viewport widths
const viewports = [
  { name: 'mobile-small', width: 320, height: 600 },
  { name: 'mobile-standard', width: 375, height: 812 },
  { name: 'mobile-large', width: 430, height: 932 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

const pages = [
  'index.html',
  'chess.html',
  'table-tennis.html',
  'cricket.html',
  'qr-codes.html'
];

const testDir = path.join(__dirname, '..', 'test-screenshots');
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
}

console.log('Testing viewport rendering with Edge headless...');

for (const p of pages) {
  for (const vp of viewports) {
    const outPath = path.join(testDir, `${p.replace('.html', '')}-${vp.name}.png`);
    const cmd = `"${EDGE_PATH}" --headless --disable-gpu --window-size=${vp.width},${vp.height} --screenshot="${outPath}" "http://localhost:3000/${p}"`;
    try {
      execSync(cmd, { stdio: 'ignore', timeout: 15000 });
      console.log(`✓ Captured ${p} @ ${vp.width}x${vp.height} -> ${path.basename(outPath)}`);
    } catch (e) {
      console.error(`✗ Error on ${p} @ ${vp.width}x${vp.height}:`, e.message);
    }
  }
}

console.log('Viewport screenshot testing completed!');
