const fs = require('fs');
const path = require('path');

// 1. Update scripts/build-sports-pages.js
const buildPath = path.join(__dirname, 'build-sports-pages.js');
let buildCode = fs.readFileSync(buildPath, 'utf8');

const playoffCardSnippet = `
  const cricketPlayoffCard = sport.id === 'cricket' ? \`
            <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: var(--radius-md);">
              <h4 style="color: #f59e0b; display: flex; align-items: center; gap: 8px; margin: 0 0 0.5rem 0; font-size: 1.05rem;">
                <span>⚡</span> Playoff & Qualification System
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                2 Pools with 3 Teams each. Each team plays 2 matches against pool opponents in the preliminary stage.
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #f59e0b;">
                  <strong style="color: #fff; font-size: 0.88rem;">1. The Qualifier (10 Overs)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">Top Pool A vs Top Pool B.<br>• <span style="color: #34d399;">Winner:</span> Directly to Grand Final<br>• <span style="color: #f59e0b;">Loser:</span> Gets second chance in Eliminator</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #38bdf8;">
                  <strong style="color: #fff; font-size: 0.88rem;">2. The Eliminator (10 Overs)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">Loser of Qualifier vs Best-Ranked remaining team from both pools.<br>• <span style="color: #34d399;">Winner:</span> Advances to Grand Final<br>• <span style="color: #ef4444;">Loser:</span> Knocked out</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #10b981;">
                  <strong style="color: #fff; font-size: 0.88rem;">3. Grand Final (15 Overs)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">Winner of Qualifier vs Winner of Eliminator.<br>• 5 Overs Powerplay.<br>• <span style="color: #f59e0b;">Champion:</span> Crowned Ventura 2k26 Victor!</p>
                </div>
              </div>
            </div>
  \` : '';
`;

if (!buildCode.includes('cricketPlayoffCard')) {
  // Add variable definition before return in generateSportPage
  buildCode = buildCode.replace('const rulesList = sport.rules.map', playoffCardSnippet + '\n  const rulesList = sport.rules.map');

  // Insert ${cricketPlayoffCard} into tab-rules
  buildCode = buildCode.replace(
    `<ul class="rules-list">\n              \${rulesList}\n            </ul>`,
    `<ul class="rules-list">\n              \${rulesList}\n            </ul>\n            \${cricketPlayoffCard}`
  );
  fs.writeFileSync(buildPath, buildCode, 'utf8');
  console.log('Added playoff qualification card to scripts/build-sports-pages.js.');
}

// 2. Update index.html
const indexPath = path.join(__dirname, '..', 'index.html');
let index = fs.readFileSync(indexPath, 'utf8');
index = index.replace(
  'Inter-batch T10 Championship & heavy tennis ball showdown.',
  'Leather Ball T10 / T15 with Player Auction & Playoff System.'
);
fs.writeFileSync(indexPath, index, 'utf8');
console.log('Updated index.html cricket card tagline.');
