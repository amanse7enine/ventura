const fs = require('fs');
const path = require('path');

// 1. Update assets/js/sports-data.js
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sd = fs.readFileSync(sportsDataPath, 'utf8');
if (!sd.includes('sportsSecretary')) {
  sd = sd.replace(
    'contactHelpdesk: "sports.committee@iiitvadodara.ac.in",',
    `contactHelpdesk: "sports.committee@iiitvadodara.ac.in",\n  sportsSecretary: {\n    name: "Aman",\n    role: "Secretary, Sports Committee",\n    phone: "8318567785",\n    email: "sports.committee@iiitvadodara.ac.in"\n  },`
  );
  fs.writeFileSync(sportsDataPath, sd, 'utf8');
  console.log('Updated sports-data.js with Sports Committee Secretary info.');
}

// 2. Update index.html
const indexPath = path.join(__dirname, '..', 'index.html');
let index = fs.readFileSync(indexPath, 'utf8');

const oldContactBlock = `<div style="margin-top: 1rem; color: var(--text-dim); font-size: 0.82rem;">
            Official Sports Council Helpdesk: <a href="mailto:sports.committee@iiitvadodara.ac.in" style="color: var(--accent-orange);">sports.committee@iiitvadodara.ac.in</a>
          </div>`;

const newContactBlock = `<div style="margin-top: 1.25rem; padding: 1rem; background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
            <div style="font-weight: 700; color: #fff; font-size: 0.95rem; margin-bottom: 2px;">Aman</div>
            <div style="font-size: 0.8rem; color: var(--accent-orange); margin-bottom: 8px;">Secretary, Sports Committee</div>
            <div style="font-size: 0.85rem; display: flex; flex-direction: column; gap: 5px; color: var(--text-muted);">
              <div>📞 Phone: <a href="tel:8318567785" style="color: #38bdf8; font-weight: 600;">8318567785</a></div>
              <div>✉️ Email: <a href="mailto:sports.committee@iiitvadodara.ac.in" style="color: var(--accent-orange);">sports.committee@iiitvadodara.ac.in</a></div>
            </div>
          </div>`;

if (index.includes(oldContactBlock)) {
  index = index.replace(oldContactBlock, newContactBlock);
  fs.writeFileSync(indexPath, index, 'utf8');
  console.log('Updated index.html contact section with Aman.');
} else {
  console.log('Warning: oldContactBlock pattern not found in index.html, checking regex...');
  index = index.replace(
    /Official Sports Council Helpdesk: <a href="mailto:sports\.committee@iiitvadodara\.ac\.in"[^>]*>sports\.committee@iiitvadodara\.ac\.in<\/a>\s*<\/div>/,
    `Official Sports Council Helpdesk: <a href="mailto:sports.committee@iiitvadodara.ac.in" style="color: var(--accent-orange);">sports.committee@iiitvadodara.ac.in</a>\n          </div>\n          ` + newContactBlock
  );
  fs.writeFileSync(indexPath, index, 'utf8');
}

// 3. Update build-sports-pages.js footer
const buildPath = path.join(__dirname, '..', 'scripts', 'build-sports-pages.js');
let buildCode = fs.readFileSync(buildPath, 'utf8');
const oldBuildFooter = `<p>Official \${sport.name} Championship page. Indian Institute of Information Technology Vadodara (IIITV).</p>
          <div style="margin-top: 1rem;">`;

const newBuildFooter = `<p>Official \${sport.name} Championship page. Indian Institute of Information Technology Vadodara (IIITV).</p>
          <div style="margin-top: 0.75rem; font-size: 0.84rem; color: var(--text-muted);">
            <div><strong>Sports Committee Sec:</strong> Aman (📞 <a href="tel:8318567785" style="color: #38bdf8;">8318567785</a>)</div>
            <div>✉️ <a href="mailto:sports.committee@iiitvadodara.ac.in" style="color: var(--accent-orange);">sports.committee@iiitvadodara.ac.in</a></div>
          </div>
          <div style="margin-top: 1rem;">`;

if (buildCode.includes(oldBuildFooter)) {
  buildCode = buildCode.replace(oldBuildFooter, newBuildFooter);
  fs.writeFileSync(buildPath, buildCode, 'utf8');
  console.log('Updated scripts/build-sports-pages.js footer.');
}

// 4. Update qr-codes.html footer
const qrPath = path.join(__dirname, '..', 'qr-codes.html');
let qrCode = fs.readFileSync(qrPath, 'utf8');
const oldQrFooter = `VENTURA 2024-25 • Indian Institute of Information Technology Vadodara (IIITV)<br>`;
const newQrFooter = `VENTURA 2024-25 • Indian Institute of Information Technology Vadodara (IIITV)<br>
        Sports Committee Sec: Aman (📞 <a href="tel:8318567785" style="color: #38bdf8;">8318567785</a>) • ✉️ <a href="mailto:sports.committee@iiitvadodara.ac.in" style="color: var(--accent-orange);">sports.committee@iiitvadodara.ac.in</a><br>`;

if (qrCode.includes(oldQrFooter) && !qrCode.includes('8318567785')) {
  qrCode = qrCode.replace(oldQrFooter, newQrFooter);
  fs.writeFileSync(qrPath, qrCode, 'utf8');
  console.log('Updated qr-codes.html footer.');
}
