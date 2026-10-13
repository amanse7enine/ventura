const fs = require('fs');
const path = require('path');

// Read sports data
// We can require the file if formatted as module or parse it
const sportsDataFile = fs.readFileSync(path.join(__dirname, '..', 'assets', 'js', 'sports-data.js'), 'utf8');

// Safely evaluate SPORTS_DATA and VENTURA_CONFIG
const sandbox = {};
const fn = new Function('sandbox', sportsDataFile + '\nsandbox.VENTURA_CONFIG = VENTURA_CONFIG;\nsandbox.SPORTS_DATA = SPORTS_DATA;');
fn(sandbox);

const { VENTURA_CONFIG, SPORTS_DATA } = sandbox;

function generateSportPage(sport) {
  const sportKeys = Object.keys(SPORTS_DATA);
  const otherSports = sportKeys
    .filter(k => k !== sport.id)
    .map(k => SPORTS_DATA[k]);

  const scheduleRows = sport.schedule.map(s => {
    let statusBadge = '<span class="sport-card-badge">Upcoming</span>';
    if (s.status === 'live') {
      statusBadge = '<span class="sport-card-badge badge-live"><span class="live-dot"></span> LIVE</span>';
    } else if (s.status === 'completed') {
      statusBadge = '<span class="sport-card-badge" style="background: rgba(100, 116, 139, 0.2); color: #94a3b8; border-color: rgba(100, 116, 139, 0.3);">Completed</span>';
    }

    return `
      <div class="timeline-item">
        <div class="timeline-time">${s.time}</div>
        <div class="timeline-desc">
          <h5>${s.stage}</h5>
          <span>📍 ${s.court} • ${s.date}</span>
        </div>
        <div>${statusBadge}</div>
      </div>
    `;
  }).join('\n');

  
  const cricketPlayoffCard = sport.id === 'cricket' ? `
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
  ` : '';

  
  const carromMatchCard = sport.id === 'carrom' ? `
            <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(236, 72, 153, 0.05); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: var(--radius-md);">
              <h4 style="color: #ec4899; display: flex; align-items: center; gap: 8px; margin: 0 0 0.5rem 0; font-size: 1.05rem;">
                <span>🎯</span> Tournament Format & Board Rules
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                Official Singles & Doubles Knockout Tournament. Conducted in Institute Premises.
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #ec4899;">
                  <strong style="color: #fff; font-size: 0.88rem;">1. Knockout Structure</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Singles (1v1) & Doubles (2v2).<br>• Opening & Quarters: <strong>Best of 3 Boards</strong> (first to 2).<br>• Grand Final: <strong>Best of 5 Boards</strong>.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #f43f5e;">
                  <strong style="color: #fff; font-size: 0.88rem;">2. Queen & Covering Rule</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Queen (Red): <strong>+3 Points</strong>.<br>• Must be covered on same or next eligible turn.<br>• If uncovered, returned to center by referee.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #10b981;">
                  <strong style="color: #fff; font-size: 0.88rem;">3. Scoring & Penalties</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• <strong>1 point</strong> per opposing coin left on board.<br>• Pocketing striker = Foul + 1 penalty coin.<br>• Referee on-board decision final.</p>
                </div>
              </div>
            </div>
  ` : '';

  const volleyballPlayoffCard = sport.id === 'volleyball' ? `
            <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(6, 182, 212, 0.05); border: 1px solid rgba(6, 182, 212, 0.25); border-radius: var(--radius-md);">
              <h4 style="color: #06b6d4; display: flex; align-items: center; gap: 8px; margin: 0 0 0.5rem 0; font-size: 1.05rem;">
                <span>⚡</span> Tournament Structure & Playoff System (10 Teams)
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                10 Teams divided into 2 Pools of 5 teams. 7 on court (min 1 girl mandatory). Top 2 from each pool advance to Semi-Finals.
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #06b6d4;">
                  <strong style="color: #fff; font-size: 0.88rem;">1. Pool Stage (Best of 3 Sets)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">Pool A (5 Teams) & Pool B (5 Teams).<br>• Sets: <strong>15 - 15 - 21</strong> points.<br>• 4 pool matches each; top 2 qualify.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #38bdf8;">
                  <strong style="color: #fff; font-size: 0.88rem;">2. Semi-Finals (Best of 3 Sets)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• <em>SF 1:</em> Pool A 1st vs Pool B 2nd<br>• <em>SF 2:</em> Pool B 1st vs Pool A 2nd<br>• Sets: <strong>21 - 21 - 25</strong> points.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #10b981;">
                  <strong style="color: #fff; font-size: 0.88rem;">3. Grand Final (Best of 5 Sets)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">Winner SF 1 vs Winner SF 2.<br>• Sets: <strong>21 - 21 - 21 - 21 - 25</strong>.<br>• <span style="color: #06b6d4;">Champion:</span> Crowned Ventura 2k26 Victor!</p>
                </div>
              </div>
            </div>
  ` : '';

  const rulesList = sport.rules.map(r => `<li>${r}</li>`).join('\n');

  const categoriesBadges = sport.categoriesList.map(c => 
    `<span style="display: inline-block; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); padding: 4px 12px; border-radius: 9999px; font-size: 0.8rem; margin: 3px;">${c}</span>`
  ).join(' ');

  const coordinatorCards = sport.coordinators.map(c => {
    const initials = c.name.split(' ').map(n => n[0]).join('');
    const hasPhone = Boolean(c.phone);
    const cleanPhone = hasPhone ? c.phone.replace(/[^0-9]/g, '') : '';
    
    const links = [];
    if (hasPhone) {
      links.push(`<a href="tel:${cleanPhone}">📞 Call</a>`);
      links.push(`<a href="https://wa.me/${cleanPhone}" target="_blank">💬 WhatsApp</a>`);
    }
    if (c.email) {
      links.push(`<a href="mailto:${c.email}">✉️ Email</a>`);
    }

    return `
      <div class="coordinator-card">
        <div class="coord-avatar">${initials}</div>
        <div class="coord-info">
          <h5>${c.name}</h5>
          <p>${c.role} ${hasPhone ? `• <strong style="color: #38bdf8;">${c.phone}</strong>` : ''}</p>
          <div class="coord-links">
            ${links.join(' <span>•</span> ')}
          </div>
        </div>
      </div>
    `;
  }).join('\n');

  const otherSportsLinks = otherSports.map(os => 
    `<li><a href="${os.slug}">${os.icon} ${os.name}</a></li>`
  ).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sport.name} | VENTURA 2024-25 | IIIT Vadodara</title>
  <meta name="description" content="Official schedule, live fixtures, rules, registration and poster QR code for ${sport.name} at Ventura - IIIT Vadodara Annual Sports Event.">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220%22%20width=%22100%22%20height=%22100%22><text y=%22.9em%22 font-size=%2290%22>${sport.icon}</text></svg>">
</head>
<body>

  <!-- Ambient background glow -->
  <div class="bg-mesh">
    <div class="mesh-blob blob-1" style="background: ${sport.color};"></div>
    <div class="mesh-blob blob-2"></div>
  </div>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="nav-container">
      <a href="index.html" class="brand-link">
        <div class="brand-logo-badge" style="background: ${sport.color};">V</div>
        <div class="brand-text">
          <h1>VENTURA <span>IIIT Vadodara</span></h1>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">← All Sports</a></li>
        <li><a href="#schedule" class="active">Schedule</a></li>
        <li><a href="#rules">Rules</a></li>
        <li><a href="#coordinators">Coordinators</a></li>
        <li><a href="qr-codes.html">QR Code Hub 📱</a></li>
      </ul>
      <div class="nav-actions">
        <a href="#qr-section" class="btn btn-secondary btn-sm">📱 Poster QR</a>
        <a href="${sport.registrationLink}" target="_blank" class="btn btn-primary btn-sm">Register Team</a>
      </div>
    </div>
  </nav>

  <!-- Sport Hero Banner -->
  <header class="sport-hero">
    <div class="container">
      <div class="sport-hero-content">
        <div class="sport-title-block">
          <div class="hero-pill" style="border-color: ${sport.color}; color: #fff; background: rgba(255,255,255,0.06);">
            <span>${sport.icon}</span> ${sport.category} • Ventura 2024-25
          </div>
          <h1>${sport.name} Championship</h1>
          <p class="sport-tagline">${sport.tagline}</p>
          
          <div style="margin: 1.25rem 0;">
            ${categoriesBadges}
          </div>

          <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted);">
            <div>📍 <strong>Venue:</strong> ${sport.venue}</div>
            <div>📅 <strong>Dates:</strong> ${sport.dates}</div>
            <div>⏰ <strong>Timings:</strong> ${sport.timings}</div>
          </div>
        </div>

        <div class="sport-hero-actions">
          ${sport.registrationOptions && sport.registrationOptions.length > 0 ? 
            sport.registrationOptions.map(opt => `
              <a href="${opt.link}" target="_blank" class="btn btn-primary btn-lg" style="width: 100%;">
                📝 ${opt.label}
              </a>
            `).join('') :
            `<a href="${sport.registrationLink}" target="_blank" class="btn btn-primary btn-lg" style="width: 100%;">
              📝 Register Team (Google Form)
            </a>`
          }
          ${sport.rulebookPdf && sport.rulebookPdf !== '#' ? `
          <a href="${sport.rulebookPdf}" download="${sport.id}-rulebook.pdf" target="_blank" class="btn btn-secondary btn-lg" style="width: 100%; background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.25);">
            📥 Download Rulebook (PDF)
          </a>
          <a href="#rules" class="btn btn-secondary btn-sm" style="width: 100%; border-style: dashed; font-size: 0.82rem;">
            📋 View On-Page Rules
          </a>
          ` : `
          <a href="#rules" class="btn btn-secondary btn-lg" style="width: 100%;">
            📋 View Rulebook
          </a>
          `}
          <button class="btn btn-secondary btn-print-poster" style="width: 100%;">
            🖨️ Print Sport Poster
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content Layout with Core Sections -->
  <main class="container">
    
    <!-- Quick Nav Tabs -->
    <div class="tabs-nav">
      <button class="tab-btn active" data-tab="tab-schedule">📅 Schedule & Timings</button>
      <button class="tab-btn" data-tab="tab-rules">📜 Rules & Regulations</button>
      <button class="tab-btn" data-tab="tab-coordinators">👥 Coordinators</button>
      ${sport.gallery && sport.gallery.length > 0 ? '<button class="tab-btn" data-tab="tab-gallery">📸 Action Gallery (4)</button>' : ''}
      <button class="tab-btn" data-tab="tab-qr">📱 Scan / Share QR Code</button>
    </div>

    <div class="detail-grid">
      
      <!-- Primary Column: Tab Panes -->
      <div>
        
        <!-- Tab 1: Schedule & Venue Timings -->
        <div id="tab-schedule" class="tab-pane" style="display: block;">
          <div class="card-box" id="schedule">
            <h3><span>📅</span> Match Schedule & Venue Timings</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem;">
              Reporting time is strictly 15 minutes prior to the scheduled slot.
            </p>
            <div class="timeline">
              ${scheduleRows}
            </div>
          </div>
        </div>

        <!-- Tab 3: Rules & Regulations -->
        <div id="tab-rules" class="tab-pane" style="display: none;">
          <div class="card-box" id="rules">
            <h3><span>📜</span> Official Rules & Guidelines</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem;">
              Participants must abide by the collegiate sports code of conduct.
            </p>
            <ul class="rules-list">
              ${rulesList}
            </ul>
            ${cricketPlayoffCard}
            ${volleyballPlayoffCard}
            ${carromMatchCard}

            ${sport.rulebookPdf && sport.rulebookPdf !== '#' ? `
            <div style="margin-top: 2rem; padding: 1.25rem; background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
              <div>
                <strong style="display: block; color: #fff; font-size: 0.95rem;">✅ Official Signed Rulebook Available</strong>
                <span style="font-size: 0.82rem; color: var(--text-muted);">Download the official PDF document with complete bylaws, format breakdown, and committee sign-off.</span>
              </div>
              <div style="display: flex; gap: 8px;">
                <a href="${sport.rulebookPdf}" target="_blank" class="btn btn-secondary btn-sm">👁️ View PDF</a>
                <a href="${sport.rulebookPdf}" download="${sport.id}-rulebook.pdf" class="btn btn-primary btn-sm">📥 Download Rulebook (PDF)</a>
              </div>
            </div>
            ` : `
            <div style="margin-top: 2rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px dashed var(--border-color); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: gap;">
              <div>
                <strong style="display: block;">Need the complete official Rulebook?</strong>
                <span style="font-size: 0.82rem; color: var(--text-muted);">Download the signed PDF document with full bylaws and bracket diagrams.</span>
              </div>
              <a href="#" class="btn btn-secondary btn-sm" onclick="alert('Rulebook PDF link will be updated with final faculty signature before event.'); return false;">📥 Download PDF</a>
            </div>
            `}
          </div>
        </div>

        <!-- Tab 4: Coordinators -->
        <div id="tab-coordinators" class="tab-pane" style="display: none;">
          <div class="card-box" id="coordinators">
            <h3><span>👥</span> Student Coordinators & In-Charge</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem;">
              Reach out to any of the student coordinators below for match slot inquiries, reporting, or protests.
            </p>
            <div class="coordinator-grid">
              ${coordinatorCards}
            </div>
          </div>
        </div>

        ${sport.gallery && sport.gallery.length > 0 ? `
        <!-- Tab: Action Gallery -->
        <div id="tab-gallery" class="tab-pane" style="display: none;">
          <div class="card-box">
            <h3><span>📸</span> Action Gallery & Highlights</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem;">
              Championship action shots and ground moments for ${sport.name}.
            </p>
            <div class="gallery-grid">
              ${sport.gallery.map(g => `
                <div class="gallery-card">
                  <img src="${g.url}" alt="${g.caption}" loading="lazy">
                  <div class="gallery-caption">${g.caption}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        ` : ''}

        <!-- Tab 5: QR Code Details -->
        <div id="tab-qr" class="tab-pane" style="display: none;">
          <div class="card-box">
            <h3><span>📱</span> Dedicated QR Code for ${sport.name}</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem;">
              Place this QR code on physical campus notices, cafeteria flyers, or social media stories.
            </p>
            <div style="text-align: center;">
              <div class="qr-img-wrap" style="width: 240px; height: 240px;">
                <img src="assets/images/qr/${sport.id}-qr.png" alt="${sport.name} QR Code">
              </div>
              <div style="margin: 1rem 0;">
                <a href="assets/images/qr/${sport.id}-qr.png" download="${sport.id}-qr.png" class="btn btn-primary">Download High-Res QR PNG</a>
                <a href="assets/images/qr/${sport.id}-qr.svg" download="${sport.id}-qr.svg" class="btn btn-secondary">Download Vector SVG</a>
              </div>
            </div>
          </div>
        </div>

      
        ${sport.gallery && sport.gallery.length > 0 ? `
        <!-- Prominent 4-Photo Showcase -->
        <div class="card-box" style="margin-top: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 8px;">
            <h3 style="margin: 0;"><span>📸</span> ${sport.name} Action Highlights (4 Photos)</h3>
            <span style="font-size: 0.8rem; color: var(--accent-orange); font-weight: 600;">Ventura 2024-25</span>
          </div>
          <div class="gallery-grid">
            ${sport.gallery.map(g => `
              <div class="gallery-card">
                <img src="${g.url}" alt="${g.caption}" loading="lazy">
                <div class="gallery-caption">${g.caption}</div>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

      </div>

      <!-- Secondary Column: QR Poster Card & Fast Links -->
      <aside>
        
        <!-- Live Poster & Scan Box -->
        <div class="qr-poster-box" id="qr-section" style="margin-bottom: 1.75rem;">
          <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; letter-spacing: 0.08em; text-transform: uppercase;">IIIT VADODARA • VENTURA</span>
          <h4 style="font-size: 1.4rem; font-weight: 900; margin: 4px 0;">${sport.icon} ${sport.name.toUpperCase()}</h4>
          <p>Scan to view this page directly on your phone camera.</p>
          
          <div class="qr-img-wrap">
            <img src="assets/images/qr/${sport.id}-qr.png" alt="${sport.name} Poster QR Code">
          </div>

          <div style="font-family: monospace; font-size: 0.75rem; color: #475569; background: #f1f5f9; padding: 6px; border-radius: 6px; margin-bottom: 1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            https://iiitv-ventura.web.app/${sport.slug}
          </div>

          <div class="qr-actions">
            <a href="assets/images/qr/${sport.id}-qr.png" download="${sport.id}-qr.png" class="btn btn-primary btn-sm" style="background: #0f172a;">📥 Download Poster QR</a>
            <button class="btn btn-secondary btn-sm btn-print-poster" style="color: #0f172a; border-color: #cbd5e1;">🖨️ Print Venue Poster</button>
            <button class="btn btn-secondary btn-sm" style="color: #0f172a; border-color: #cbd5e1;" onclick="copyLinkToClipboard(window.location.href, this)">🔗 Copy Share Link</button>
          </div>
        </div>

        <!-- Venue Summary Card -->
        <div class="card-box">
          <h4 style="font-size: 1.1rem; margin-bottom: 1rem;">📍 Venue Quick Guide</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
            <strong>Location:</strong> ${sport.venue}<br>
            <strong>Registration Deadline:</strong> ${sport.registrationDeadline}<br>
            <strong>Equipment:</strong> Provided by Institute Sports Council.
          </p>
          ${sport.registrationOptions && sport.registrationOptions.length > 0 ?
            sport.registrationOptions.map(opt => `
              <a href="${opt.link}" target="_blank" class="btn btn-primary btn-sm" style="width: 100%; margin-top: 6px;">📝 ${opt.label}</a>
            `).join('') :
            `<a href="${sport.registrationLink}" target="_blank" class="btn btn-primary btn-sm" style="width: 100%;">Submit Team Entry</a>`
          }
        </div>

      </aside>

    </div>
  </main>

  <!-- Footer with Other Sports Navigation -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h4>VENTURA 2024-25</h4>
          <p>Official ${sport.name} Championship page. Indian Institute of Information Technology Vadodara (IIITV).</p>
          <div style="margin-top: 0.75rem; font-size: 0.84rem; color: var(--text-muted);">
            <div><strong>Sports Committee Sec:</strong> Aman (📞 <a href="tel:8318567785" style="color: #38bdf8;">8318567785</a>)</div>
            <div>✉️ <a href="mailto:sports.committee@iiitvadodara.ac.in" style="color: var(--accent-orange);">sports.committee@iiitvadodara.ac.in</a></div>
          </div>
          <div style="margin-top: 1rem;">
            <a href="index.html" class="btn btn-secondary btn-sm">← Back to Main Ventura Hub</a>
          </div>
        </div>

        <div class="footer-links" style="grid-column: span 2;">
          <h5>Explore Other Sports at Ventura</h5>
          <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            ${otherSportsLinks}
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2024–2025 IIIT Vadodara Sports Council. Each sport page has a dedicated QR code for instant mobile access.</p>
      </div>
    </div>
  </footer>

  <!-- Mobile Bottom Quick Bar -->
  <div class="mobile-bar">
    <a href="index.html"><span>🏠</span> Hub</a>
    <a href="#schedule" class="active"><span>📅</span> Schedule</a>
    <a href="#rules"><span>📜</span> Rules</a>
    <a href="#coordinators"><span>👥</span> Contact</a>
    <a href="#qr-section"><span>📱</span> QR</a>
  </div>

  <script src="assets/js/sports-data.js"></script>
  <script src="assets/js/app.js"></script>
</body>
</html>`;
}

// Generate all 8 pages
for (const key of Object.keys(SPORTS_DATA)) {
  const sport = SPORTS_DATA[key];
  const htmlContent = generateSportPage(sport);
  const outPath = path.join(__dirname, '..', sport.slug);
  fs.writeFileSync(outPath, htmlContent);
  console.log(`Generated ${sport.slug} successfully.`);
}
