const fs = require('fs');
const path = require('path');

// 1. Update style.css
const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const oldBodyBlock = `body {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Cyber Matrix Background Grid */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  z-index: -1;
  opacity: 0.65;
}`;

const newBodyBlock = `body {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #040711;
  background-image: 
    radial-gradient(ellipse at 50% 20%, rgba(4, 7, 17, 0.58) 0%, rgba(4, 7, 17, 0.86) 55%, rgba(4, 7, 17, 0.98) 100%),
    linear-gradient(180deg, rgba(4, 7, 17, 0.65) 0%, rgba(4, 7, 17, 0.85) 45%, rgba(4, 7, 17, 0.96) 100%),
    url('../images/ventura-poster.jpg');
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

/* Cyber Matrix Background Grid Layer */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: -1;
  opacity: 0.45;
}`;

if (css.includes(oldBodyBlock)) {
  css = css.replace(oldBodyBlock, newBodyBlock);
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Updated style.css with official poster background!');
} else {
  console.log('oldBodyBlock not found exactly, updating body directly...');
  css = css.replace(
    /body\s*\{[\s\S]*?overflow-x:\s*hidden;\s*\}/,
    `body {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #040711;
  background-image: 
    radial-gradient(ellipse at 50% 20%, rgba(4, 7, 17, 0.58) 0%, rgba(4, 7, 17, 0.86) 55%, rgba(4, 7, 17, 0.98) 100%),
    linear-gradient(180deg, rgba(4, 7, 17, 0.65) 0%, rgba(4, 7, 17, 0.85) 45%, rgba(4, 7, 17, 0.96) 100%),
    url('../images/ventura-poster.jpg');
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  background-repeat: no-repeat;
}`
  );
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Updated style.css body background with poster.');
}

// 2. Update index.html hero buttons to include option to view full official poster
const indexPath = path.join(__dirname, '..', 'index.html');
let index = fs.readFileSync(indexPath, 'utf8');
const oldHeroBtns = `<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#sports" class="btn btn-primary btn-lg">Explore 8 Sports</a>
        <a href="qr-codes.html" class="btn btn-secondary btn-lg">📱 Download All QR Codes</a>
      </div>`;

const newHeroBtns = `<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#sports" class="btn btn-primary btn-lg">Explore 8 Sports</a>
        <a href="assets/images/ventura-poster.jpg" target="_blank" class="btn btn-secondary btn-lg" style="background: rgba(255,255,255,0.08); border-color: rgba(255,107,43,0.35);">🖼️ Official Poster (HD)</a>
        <a href="qr-codes.html" class="btn btn-secondary btn-lg">📱 Download All QR Codes</a>
      </div>`;

if (index.includes(oldHeroBtns)) {
  index = index.replace(oldHeroBtns, newHeroBtns);
  fs.writeFileSync(indexPath, index, 'utf8');
  console.log('Updated index.html hero with official poster button.');
}

// 3. Update qr-codes.html to feature the official fest poster
const qrPath = path.join(__dirname, '..', 'qr-codes.html');
let qr = fs.readFileSync(qrPath, 'utf8');
const posterCardHtml = `
      <!-- Official Ventura Poster Showcase -->
      <div class="card-box" style="margin-bottom: 2.5rem; text-align: center; border-color: rgba(255, 107, 43, 0.35); background: rgba(13, 19, 33, 0.85);">
        <h3 style="justify-content: center;"><span>🖼️</span> Official Ventura'26 Festival Poster</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">
          The official championship banner of Ventura 2026 featuring all 8 sports & IIIT Vadodara campus.
        </p>
        <div style="max-width: 580px; margin: 0 auto 1.35rem auto; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-color); box-shadow: 0 14px 40px rgba(0,0,0,0.6);">
          <img src="assets/images/ventura-poster.jpg" alt="Official Ventura'26 Poster" style="width: 100%; display: block;">
        </div>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
          <a href="assets/images/ventura-poster.jpg" target="_blank" class="btn btn-secondary btn-sm">👁️ View Full Resolution</a>
          <a href="assets/images/ventura-poster.jpg" download="ventura-26-poster.jpg" class="btn btn-primary btn-sm">📥 Download Poster (HD)</a>
        </div>
      </div>
`;

if (!qr.includes('Official Ventura\'26 Festival Poster')) {
  qr = qr.replace('<div class="posters-grid">', posterCardHtml + '\n    <div class="posters-grid">');
  fs.writeFileSync(qrPath, qr, 'utf8');
  console.log('Updated qr-codes.html with official poster showcase card.');
}
