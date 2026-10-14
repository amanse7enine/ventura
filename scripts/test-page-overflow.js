const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const testDir = path.join(__dirname, '..', 'test-screenshots');
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
}

const samplePages = ['athletics.html', 'chess.html', 'table-tennis.html'];
for (const p of samplePages) {
  for (const w of [375, 1440]) {
    const dest = path.join(testDir, `${p.replace('.html','')}-${w}.png`);
    try {
      execSync(`"${EDGE_PATH}" --headless --disable-gpu --window-size=${w},900 --screenshot="${dest}" "http://localhost:3000/${p}"`, { stdio: 'ignore', timeout: 15000 });
      console.log(`✓ Screenshot captured for ${p} @ ${w}px -> ${fs.statSync(dest).size} bytes`);
    } catch (e) {
      console.error(`✗ Error on ${p} @ ${w}:`, e.message);
    }
  }
}
