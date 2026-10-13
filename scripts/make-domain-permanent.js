const fs = require('fs');
const path = require('path');

const LIVE_DOMAIN = 'https://ventura2k26-five.vercel.app';

// 1. Update scripts/generate-qrcodes.js
const qrScriptPath = path.join(__dirname, 'generate-qrcodes.js');
let qrScriptContent = fs.readFileSync(qrScriptPath, 'utf8');
qrScriptContent = qrScriptContent.replace(
  /const defaultBaseUrl = '[^']+';/,
  `const defaultBaseUrl = '${LIVE_DOMAIN}';`
);
fs.writeFileSync(qrScriptPath, qrScriptContent, 'utf8');
console.log('1. Updated generate-qrcodes.js with permanent live domain:', LIVE_DOMAIN);

// 2. Update scripts/build-sports-pages.js
const buildScriptPath = path.join(__dirname, 'build-sports-pages.js');
let buildScriptContent = fs.readFileSync(buildScriptPath, 'utf8');
buildScriptContent = buildScriptContent.replace(
  /https:\/\/iiitv-ventura\.web\.app\/\$\{sport\.slug\}/g,
  `${LIVE_DOMAIN}/\${sport.slug}`
);
fs.writeFileSync(buildScriptPath, buildScriptContent, 'utf8');
console.log('2. Updated build-sports-pages.js with permanent live domain:', LIVE_DOMAIN);

// 3. Update qr-codes.html
const qrHtmlPath = path.join(__dirname, '..', 'qr-codes.html');
let qrHtmlContent = fs.readFileSync(qrHtmlPath, 'utf8');

// Replace Organizer Tool box with Permanent Verified Live URL Box
const permanentBadgeHtml = `    <!-- Permanent Verified Live URL Box -->
    <div class="poster-instructions" style="text-align: left; max-width: 900px; margin: 0 auto 3rem auto; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: 0 8px 32px rgba(0,0,0,0.4);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); padding: 4px 12px; border-radius: 9999px; font-size: 0.8rem; font-weight: 700; margin-bottom: 0.6rem;">
            <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #34d399;"></span>
            LIVE DEPLOYED WEBSITE • OFFICIAL PERMANENT DOMAIN
          </div>
          <h3 style="font-size: 1.25rem; margin: 0 0 0.35rem 0; display: flex; align-items: center; gap: 8px; color: #fff;">
            <span>🌐</span> Ventura 2k26 Live Portal
          </h3>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin: 0;">
            Permanent Production URL: <code style="color: #38bdf8; font-weight: 700; font-size: 0.95rem; background: rgba(56, 189, 248, 0.1); padding: 3px 8px; border-radius: 4px; border: 1px solid rgba(56, 189, 248, 0.25);">${LIVE_DOMAIN}</code>
          </p>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="${LIVE_DOMAIN}" target="_blank" class="btn btn-primary">Visit Live Site ↗</a>
          <button class="btn btn-secondary btn-print-poster">🖨️ Print Sheet</button>
        </div>
      </div>
    </div>`;

// Replace the old custom domain input form
qrHtmlContent = qrHtmlContent.replace(
  /<!-- Instructions & Domain Customizer for Organizers -->[\s\S]*?<\/div>\s*<\/div>/,
  permanentBadgeHtml
);

// Replace all occurrences of https://iiitv-ventura.web.app with the live domain
qrHtmlContent = qrHtmlContent.replace(
  /https:\/\/iiitv-ventura\.web\.app/g,
  LIVE_DOMAIN
);

fs.writeFileSync(qrHtmlPath, qrHtmlContent, 'utf8');
console.log('3. Updated qr-codes.html to lock domain and remove custom input field.');

// 4. Update assets/js/app.js to remove dynamic updater that overrides domain
const appJsPath = path.join(__dirname, '..', 'assets', 'js', 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Replace openSportQRModal fallback to use LIVE_DOMAIN
appJsContent = appJsContent.replace(
  /const currentOrigin = window\.location\.origin;\s*const directUrl = `\${currentOrigin}\/\${sport\.slug}`;/,
  `const isLocal = window.location.protocol === 'file:' || window.location.host.includes('localhost') || window.location.host.includes('127.0.0.1');
    const directUrl = isLocal ? '${LIVE_DOMAIN}/' + sport.slug : window.location.origin + '/' + sport.slug;`
);

// Disable initDynamicDomainUpdater logic
appJsContent = appJsContent.replace(
  /function initDynamicDomainUpdater\(\) \{[\s\S]*?\n\}/,
  `function initDynamicDomainUpdater() {
  // Domain is permanently locked to ${LIVE_DOMAIN}
}`
);

fs.writeFileSync(appJsPath, appJsContent, 'utf8');
console.log('4. Updated assets/js/app.js to lock domain.');
