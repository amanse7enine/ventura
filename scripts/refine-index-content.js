const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let index = fs.readFileSync(indexPath, 'utf8');

// Update stats
index = index.replace(
  '<div class="stat-number">450+</div>\n          <div class="stat-label">Student Athletes</div>',
  '<div class="stat-number">500+</div>\n          <div class="stat-label">Athlete Entries</div>'
);
index = index.replace(
  '<div class="stat-number">4</div>\n          <div class="stat-label">Days of Action</div>',
  '<div class="stat-number">18 Oct – 6 Nov</div>\n          <div class="stat-label">Championship Season</div>'
);

// Update Schedule cards block
const scheduleRegex = /<div style="display: grid; grid-template-columns: repeat\(auto-fit, minmax\(260px, 1fr\)\); gap: 1\.25rem;">[\s\S]*?<\/div>\s*<\/section>/;

const newScheduleBlock = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
      <div class="card-box" style="margin: 0;">
        <span class="hero-pill" style="margin-bottom: 0.75rem;">🏸 Badminton Action</span>
        <h4>Aloka Sports Academy</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 8px 0 14px 0;">
          18th Oct senior & freshers round matches, followed by 20th Oct QF, SF, Mixed Doubles and Championship Finals (Buses provided).
        </p>
        <span style="font-size: 0.82rem; color: var(--accent-cyan); font-weight: 700;">⏰ 18 & 20 Oct | Day & Evening</span>
      </div>

      <div class="card-box" style="margin: 0;">
        <span class="hero-pill" style="margin-bottom: 0.75rem;">🏏 Cricket & Football</span>
        <h4>CRPF Ground Clash</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 8px 0 14px 0;">
          Cricket Leather Ball T10 Pool Matches on 24th Oct + Football 7v7 Group Stage clashes on 25th Oct with afternoon heat buffer.
        </p>
        <span style="font-size: 0.82rem; color: var(--accent-cyan); font-weight: 700;">⏰ 24 & 25 Oct | 08:00 AM – 06:00 PM</span>
      </div>

      <div class="card-box" style="margin: 0;">
        <span class="hero-pill" style="margin-bottom: 0.75rem;">🏆 Mega Finals Stage</span>
        <h4>CRPF Ground & IIT Ground</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 8px 0 14px 0;">
          Cricket Qualifier & 15-over Grand Final on 31st Oct + Football Championship clash under floodlights on IIT Ground on 1st Nov.
        </p>
        <span style="font-size: 0.82rem; color: var(--accent-cyan); font-weight: 700;">⏰ 31 Oct (Cricket) & 01 Nov (Football)</span>
      </div>

      <div class="card-box" style="margin: 0;">
        <span class="hero-pill" style="margin-bottom: 0.75rem;">🎯 Campus & Hostels</span>
        <h4>Indoor Leagues & Athletics</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 8px 0 14px 0;">
          Table Tennis (Day & Night slots), Volleyball (Lunch hours), Chess hybrid courtyards, Carrom, and Track & Field Gym events.
        </p>
        <span style="font-size: 0.82rem; color: var(--accent-cyan); font-weight: 700;">⏰ 19 Oct – 06 Nov | Daily Sessions</span>
      </div>
    </div>
  </section>`;

index = index.replace(scheduleRegex, newScheduleBlock);
fs.writeFileSync(indexPath, index, 'utf8');
console.log('Successfully updated index.html stats and schedule cards.');
