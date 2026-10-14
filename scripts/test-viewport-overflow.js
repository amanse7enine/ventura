const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const tests = [
  { url: 'http://localhost:3000/cricket.html', file: 'cricket-375.png', w: 375, h: 812 },
  { url: 'http://localhost:3000/qr-codes.html', file: 'qrcodes-375.png', w: 375, h: 812 },
  { url: 'http://localhost:3000/index.html', file: 'index-320.png', w: 320, h: 568 }
];

tests.forEach(t => {
  const dest = path.join(__dirname, '..', t.file);
  try {
    console.log(`Taking screenshot: ${t.file} (${t.w}x${t.h})...`);
    execSync(`"${edgePath}" --headless --disable-gpu --window-size=${t.w},${t.h} --screenshot="${dest}" "${t.url}"`, { stdio: 'ignore' });
    console.log(`Saved ${t.file} (${fs.statSync(dest).size} bytes)`);
  } catch (e) {
    console.error(`Failed ${t.file}:`, e.message);
  }
});
