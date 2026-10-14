const fs = require('fs');

// We can extract an SVG or check pixels using a simple ppm / png reader or sharp if available
// Let's see if sharp or canvas is available, or write a tiny script to check
console.log('Checking modules...');
try {
  require('sharp');
  console.log('sharp is available');
} catch {
  console.log('sharp is not available');
}

// Or we can just use Edge to screenshot an element: #navToggle!
const { execSync } = require('child_process');
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

// Capture a screenshot of just .navbar
const outPath = "test-screenshots/navbar-mobile.png";
// Edge doesn't have an element screenshot flag, but we can screenshot with height 80!
const cmd = `"${EDGE_PATH}" --headless --disable-gpu --window-size=375,80 --screenshot="${outPath}" "http://localhost:3000/index.html"`;
execSync(cmd, { stdio: 'ignore' });
console.log('Captured navbar-mobile.png at 375x80');
