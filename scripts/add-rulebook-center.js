const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('--- Adding Rulebook Download Center & Direct Links ---');

// 1. Update index.html
let indexHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Add "Official Rulebooks (PDF)" link to nav links in index.html
if (!indexHtml.includes('href="#rulebooks"')) {
  indexHtml = indexHtml.replace(
    '<li><a href="#schedule">Schedule</a></li>',
    '<li><a href="#schedule">Schedule</a></li>\n        <li><a href="#rulebooks">Rulebooks (PDF) 📜</a></li>'
  );
  // Also in drawer
  indexHtml = indexHtml.replace(
    '<li><a href="#schedule">📅 Schedule Overview</a></li>',
    '<li><a href="#schedule">📅 Schedule Overview</a></li>\n          <li><a href="#rulebooks">📜 Official Rulebooks (PDF)</a></li>'
  );
  // Also in hero actions
  indexHtml = indexHtml.replace(
    '<a href="qr-codes.html" class="btn btn-secondary btn-lg">📱 Download All QR Codes</a>',
    '<a href="#rulebooks" class="btn btn-gold btn-lg">📜 Official Rulebooks (PDF)</a>\n        <a href="qr-codes.html" class="btn btn-secondary btn-lg">📱 Download All QR Codes</a>'
  );
}

// Update card footers in index.html to include 📥 Rules button
const sportsList = [
  { id: 'badminton', name: 'Badminton' },
  { id: 'cricket', name: 'Cricket' },
  { id: 'athletics', name: 'Athletics' },
  { id: 'football', name: 'Football' },
  { id: 'volleyball', name: 'Volleyball' },
  { id: 'chess', name: 'Chess' },
  { id: 'carrom', name: 'Carrom' },
  { id: 'table-tennis', name: 'Table Tennis' }
];

for (const sp of sportsList) {
  const oldFooterPattern = new RegExp(
    `<div class="sport-card-footer">\\s*<a href="${sp.id}\\.html" class="btn btn-primary btn-sm" style="width: 100%;">View Details & Schedule</a>\\s*<button class="btn-qr-quick" title="View QR Code" onclick="openSportQRModal\\('${sp.id}'\\)">📱</button>\\s*</div>`,
    'g'
  );
  const newFooter = `<div class="sport-card-footer" style="display: flex; gap: 6px; flex-wrap: wrap;">
            <a href="${sp.id}.html" class="btn btn-primary btn-sm" style="flex: 2; min-width: 120px;">Details & Schedule</a>
            <a href="assets/docs/${sp.id}-rulebook.pdf" download="${sp.id}-rulebook.pdf" target="_blank" class="btn btn-secondary btn-sm" style="flex: 1; min-width: 80px;" title="Download Rulebook PDF">📥 PDF</a>
            <button class="btn-qr-quick" title="View QR Code" onclick="openSportQRModal('${sp.id}')">📱</button>
          </div>`;
  indexHtml = indexHtml.replace(oldFooterPattern, newFooter);
}

// Add the dedicated Rulebook Download Center section right before </main> or before footer
const rulebookSection = `
  <!-- Official Rulebooks (PDF) Download Center -->
  <section id="rulebooks" class="container" style="padding-top: 3.5rem; margin-bottom: 3.5rem;">
    <div class="section-title">
      <div>
        <div class="hero-pill" style="margin-bottom: 0.6rem;">📜 Official Tournament Bylaws</div>
        <h3>Download Official Rulebooks (PDF)</h3>
        <p>Complete bylaws, match timings, equipment guidelines, and committee rules for all 8 sports.</p>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr)); gap: 1.25rem;">
      
      <div class="card-box" style="margin-bottom: 0; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 1.8rem;">🏸</span>
            <span class="sport-card-badge">Singles & Doubles</span>
          </div>
          <h4 style="font-size: 1.2rem; color: var(--deep-navy); margin-bottom: 4px;">Badminton Rulebook</h4>
          <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 1.2rem;">Aloka Sports Academy rules, BWF 21-pt rally scoring & bus schedule.</p>
        </div>
        <div style="display: flex; gap: 6px;">
          <a href="assets/docs/badminton-rulebook.pdf" target="_blank" class="btn btn-secondary btn-sm" style="flex: 1;">👁️ View</a>
          <a href="assets/docs/badminton-rulebook.pdf" download="badminton-rulebook.pdf" class="btn btn-primary btn-sm" style="flex: 2;">📥 Download PDF</a>
        </div>
      </div>

      <div class="card-box" style="margin-bottom: 0; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 1.8rem;">🏏</span>
            <span class="sport-card-badge">T10 / T15 Format</span>
          </div>
          <h4 style="font-size: 1.2rem; color: var(--deep-navy); margin-bottom: 4px;">Cricket Rulebook</h4>
          <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 1.2rem;">Player auction, powerplay overs, super over & tie-break bylaws.</p>
        </div>
        <div style="display: flex; gap: 6px;">
          <a href="assets/docs/cricket-rulebook.pdf" target="_blank" class="btn btn-secondary btn-sm" style="flex: 1;">👁️ View</a>
          <a href="assets/docs/cricket-rulebook.pdf" download="cricket-rulebook.pdf" class="btn btn-primary btn-sm" style="flex: 2;">📥 Download PDF</a>
        </div>
      </div>

      <div class="card-box" style="margin-bottom: 0; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 1.8rem;">⚽</span>
            <span class="sport-card-badge">11-A-Side League</span>
          </div>
          <h4 style="font-size: 1.2rem; color: var(--deep-navy); margin-bottom: 4px;">Football Rulebook</h4>
          <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 1.2rem;">8-team group stage, 20-min halves, penalty shootouts & discipline.</p>
        </div>
        <div style="display: flex; gap: 6px;">
          <a href="assets/docs/football-rulebook.pdf" target="_blank" class="btn btn-secondary btn-sm" style="flex: 1;">👁️ View</a>
          <a href="assets/docs/football-rulebook.pdf" download="football-rulebook.pdf" class="btn btn-primary btn-sm" style="flex: 2;">📥 Download PDF</a>
        </div>
      </div>

      <div class="card-box" style="margin-bottom: 0; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 1.8rem;">🏐</span>
            <span class="sport-card-badge">6v6 Inter-Batch</span>
          </div>
          <h4 style="font-size: 1.2rem; color: var(--deep-navy); margin-bottom: 4px;">Volleyball Rulebook</h4>
          <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 1.2rem;">FIVB rally system, rotation, net touch & 3-set championship format.</p>
        </div>
        <div style="display: flex; gap: 6px;">
          <a href="assets/docs/volleyball-rulebook.pdf" target="_blank" class="btn btn-secondary btn-sm" style="flex: 1;">👁️ View</a>
          <a href="assets/docs/volleyball-rulebook.pdf" download="volleyball-rulebook.pdf" class="btn btn-primary btn-sm" style="flex: 2;">📥 Download PDF</a>
        </div>
      </div>

      <div class="card-box" style="margin-bottom: 0; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 1.8rem;">🏃</span>
            <span class="sport-card-badge">Track, Gym & Tug</span>
          </div>
          <h4 style="font-size: 1.2rem; color: var(--deep-navy); margin-bottom: 4px;">Athletics Rulebook</h4>
          <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 1.2rem;">CRPF Ground tracks, timings, tug of war 2-pool best-of-3 rules.</p>
        </div>
        <div style="display: flex; gap: 6px;">
          <a href="assets/docs/athletics-rulebook.pdf" target="_blank" class="btn btn-secondary btn-sm" style="flex: 1;">👁️ View</a>
          <a href="assets/docs/athletics-rulebook.pdf" download="athletics-rulebook.pdf" class="btn btn-primary btn-sm" style="flex: 2;">📥 Download PDF</a>
        </div>
      </div>

      <div class="card-box" style="margin-bottom: 0; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 1.8rem;">♟️</span>
            <span class="sport-card-badge">10+0 Rapid Knockout</span>
          </div>
          <h4 style="font-size: 1.2rem; color: var(--deep-navy); margin-bottom: 4px;">Chess Rulebook</h4>
          <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 1.2rem;">Official 10+0 Rapid, touch-move, Armageddon tiebreaks & offline final.</p>
        </div>
        <div style="display: flex; gap: 6px;">
          <a href="assets/docs/chess-rulebook.pdf" target="_blank" class="btn btn-secondary btn-sm" style="flex: 1;">👁️ View</a>
          <a href="assets/docs/chess-rulebook.pdf" download="chess-rulebook.pdf" class="btn btn-primary btn-sm" style="flex: 2;">📥 Download PDF</a>
        </div>
      </div>

      <div class="card-box" style="margin-bottom: 0; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 1.8rem;">🏓</span>
            <span class="sport-card-badge">TENEX 5 Categories</span>
          </div>
          <h4 style="font-size: 1.2rem; color: var(--deep-navy); margin-bottom: 4px;">Table Tennis Rulebook</h4>
          <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 1.2rem;">Best of 3 to 11 pts, 16cm vertical serve, doubles rotation rules.</p>
        </div>
        <div style="display: flex; gap: 6px;">
          <a href="assets/docs/table-tennis-rulebook.pdf" target="_blank" class="btn btn-secondary btn-sm" style="flex: 1;">👁️ View</a>
          <a href="assets/docs/table-tennis-rulebook.pdf" download="table-tennis-rulebook.pdf" class="btn btn-primary btn-sm" style="flex: 2;">📥 Download PDF</a>
        </div>
      </div>

      <div class="card-box" style="margin-bottom: 0; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 1.8rem;">🎯</span>
            <span class="sport-card-badge">Singles & Doubles</span>
          </div>
          <h4 style="font-size: 1.2rem; color: var(--deep-navy); margin-bottom: 4px;">Carrom Rulebook</h4>
          <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 1.2rem;">All-India Carrom Fed rules, queen cover, foul penalties & board specs.</p>
        </div>
        <div style="display: flex; gap: 6px;">
          <a href="assets/docs/carrom-rulebook.pdf" target="_blank" class="btn btn-secondary btn-sm" style="flex: 1;">👁️ View</a>
          <a href="assets/docs/carrom-rulebook.pdf" download="carrom-rulebook.pdf" class="btn btn-primary btn-sm" style="flex: 2;">📥 Download PDF</a>
        </div>
      </div>

    </div>
  </section>
`;

if (!indexHtml.includes('id="rulebooks"')) {
  // Insert before schedule or contact
  if (indexHtml.includes('id="schedule"')) {
    indexHtml = indexHtml.replace('<section id="schedule"', rulebookSection + '\n  <section id="schedule"');
  } else {
    indexHtml = indexHtml.replace('</main>', rulebookSection + '\n  </main>');
  }
}

fs.writeFileSync(path.join(__dirname, '..', 'index.html'), indexHtml);
console.log('✓ Added Rulebook Download Center to index.html');

// 2. Build sports pages to make sure all sport pages have download rulebook buttons prominently displayed
execSync('node scripts/build-sports-pages.js', { stdio: 'inherit' });
console.log('✓ Sports pages updated!');
