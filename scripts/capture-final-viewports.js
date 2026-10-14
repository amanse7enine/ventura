const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const testDir = path.join(__dirname, '..', 'test-screenshots-jersey');
if (!fs.existsSync(testDir)) fs.mkdirSync(testDir, { recursive: true });

const cases = [
  { file: 'index.html', name: 'index-mobile-375.png', w: 375, h: 812 },
  { file: 'index.html', name: 'index-desktop-1440.png', w: 1440, h: 900 },
  { file: 'chess.html', name: 'chess-mobile-375.png', w: 375, h: 812 },
  { file: 'table-tennis.html', name: 'tt-mobile-375.png', w: 375, h: 812 },
  { file: 'qr-codes.html', name: 'qr-mobile-375.png', w: 375, h: 812 }
];

console.log('Capturing screenshots for visual verification...');
for (const c of cases) {
  const outPath = path.join(testDir, c.name);
  const cmd = `"${EDGE_PATH}" --headless --disable-gpu --window-size=${c.w},${c.h} --screenshot="${outPath}" "http://localhost:3000/${c.file}"`;
  try {
    execSync(cmd, { stdio: 'ignore', timeout: 20000 });
    console.log(`✓ Captured ${c.name} (${c.w}x${c.h})`);
  } catch (err) {
    console.error(`✗ Error capturing ${c.name}:`, err.message);
  }
}
console.log('Completed capturing screenshots.');
