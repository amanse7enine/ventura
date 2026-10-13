const fs = require('fs');
const path = require('path');

// 1. Update sports-data.js
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sd = fs.readFileSync(sportsDataPath, 'utf8');

// Badminton rulebook
sd = sd.replace(
  /badminton:\s*\{[\s\S]*?rulebookPdf:\s*"#",/,
  (match) => match.replace('rulebookPdf: "#",', 'rulebookPdf: "assets/docs/badminton-rulebook.pdf",')
);

// Cricket rulebook
sd = sd.replace(
  /cricket:\s*\{[\s\S]*?rulebookPdf:\s*"#",/,
  (match) => match.replace('rulebookPdf: "#",', 'rulebookPdf: "assets/docs/cricket-rulebook.pdf",')
);

fs.writeFileSync(sportsDataPath, sd, 'utf8');
console.log('Updated sports-data.js with PDF paths for badminton and cricket.');

// 2. Update build-sports-pages.js
const buildPath = path.join(__dirname, 'build-sports-pages.js');
let buildCode = fs.readFileSync(buildPath, 'utf8');

// Update Hero actions
const oldHeroRulebookBtn = `<a href="#rules" class="btn btn-secondary btn-lg" style="width: 100%;">
            📋 View Rulebook
          </a>`;

const newHeroRulebookBtn = `\${sport.rulebookPdf && sport.rulebookPdf !== '#' ? \`
          <a href="\${sport.rulebookPdf}" download="\${sport.id}-rulebook.pdf" target="_blank" class="btn btn-secondary btn-lg" style="width: 100%; background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.25);">
            📥 Download Rulebook (PDF)
          </a>
          <a href="#rules" class="btn btn-secondary btn-sm" style="width: 100%; border-style: dashed; font-size: 0.82rem;">
            📋 View On-Page Rules
          </a>
          \` : \`
          <a href="#rules" class="btn btn-secondary btn-lg" style="width: 100%;">
            📋 View Rulebook
          </a>
          \`}`;

if (buildCode.includes(oldHeroRulebookBtn)) {
  buildCode = buildCode.replace(oldHeroRulebookBtn, newHeroRulebookBtn);
  console.log('Updated Hero rulebook button in build-sports-pages.js.');
}

// Update Rules tab download box
const oldRulesDownloadBox = `<div style="margin-top: 2rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px dashed var(--border-color); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: gap;">
              <div>
                <strong style="display: block;">Need the complete official Rulebook?</strong>
                <span style="font-size: 0.82rem; color: var(--text-muted);">Download the signed PDF document with full bylaws and bracket diagrams.</span>
              </div>
              <a href="#" class="btn btn-secondary btn-sm" onclick="alert('Rulebook PDF link will be updated with final faculty signature before event.'); return false;">📥 Download PDF</a>
            </div>`;

const newRulesDownloadBox = `\${sport.rulebookPdf && sport.rulebookPdf !== '#' ? \`
            <div style="margin-top: 2rem; padding: 1.25rem; background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
              <div>
                <strong style="display: block; color: #fff; font-size: 0.95rem;">✅ Official Signed Rulebook Available</strong>
                <span style="font-size: 0.82rem; color: var(--text-muted);">Download the official PDF document with complete bylaws, format breakdown, and committee sign-off.</span>
              </div>
              <div style="display: flex; gap: 8px;">
                <a href="\${sport.rulebookPdf}" target="_blank" class="btn btn-secondary btn-sm">👁️ View PDF</a>
                <a href="\${sport.rulebookPdf}" download="\${sport.id}-rulebook.pdf" class="btn btn-primary btn-sm">📥 Download Rulebook (PDF)</a>
              </div>
            </div>
            \` : \`
            <div style="margin-top: 2rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px dashed var(--border-color); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: gap;">
              <div>
                <strong style="display: block;">Need the complete official Rulebook?</strong>
                <span style="font-size: 0.82rem; color: var(--text-muted);">Download the signed PDF document with full bylaws and bracket diagrams.</span>
              </div>
              <a href="#" class="btn btn-secondary btn-sm" onclick="alert('Rulebook PDF link will be updated with final faculty signature before event.'); return false;">📥 Download PDF</a>
            </div>
            \`}`;

if (buildCode.includes(oldRulesDownloadBox)) {
  buildCode = buildCode.replace(oldRulesDownloadBox, newRulesDownloadBox);
  console.log('Updated Rules tab download box in build-sports-pages.js.');
}

fs.writeFileSync(buildPath, buildCode, 'utf8');

// 3. Update package.json
const pkgPath = path.join(__dirname, '..', 'package.json');
let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.scripts.build = "node scripts/generate-qrcodes.js && node scripts/generate-rulebooks.js && node scripts/build-sports-pages.js";
pkg.scripts['generate-docs'] = "node scripts/generate-rulebooks.js";
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
console.log('Updated package.json scripts.');
