const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');

const cleanHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VENTURA 2024-25 | Annual Sports Fest | IIIT Vadodara</title>
  <meta name="description" content="Official Portal for Ventura - Annual Sports Meet of Indian Institute of Information Technology Vadodara (IIITV). Schedules, rules, coordinators, and QR codes for all 8 sports.">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220%22%20width=%22100%22%20height=%22100%22><text y=%22.9em%22 font-size=%2290%22>🏆</text></svg>">
</head>
<body>

  <!-- Ambient background glow -->
  <div class="bg-mesh">
    <div class="mesh-blob blob-1"></div>
    <div class="mesh-blob blob-2"></div>
    <div class="mesh-blob blob-3"></div>
  </div>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="nav-container">
      <a href="index.html" class="brand-link">
        <div class="brand-logo-badge">V</div>
        <div class="brand-text">
          <h1>VENTURA <span>IIIT Vadodara Sports</span></h1>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="#sports" class="active">Sports (8)</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="qr-codes.html">QR Code Hub 📱</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <a href="qr-codes.html" class="btn btn-secondary btn-sm">Scan / QR Hub</a>
        <a href="#sports" class="btn btn-primary btn-sm">Register Team</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="hero">
    <div class="container">
      <div class="hero-pill">
        <span>🏆</span> IIIT Vadodara Annual Sports Championship • 18th Oct – 6th Nov
      </div>
      <h2>
        IGNITE THE SPIRIT <br>
        <span class="gradient-text">CLAIM THE GLORY</span>
      </h2>
      <p class="tagline">
        Welcome to Ventura — the premier athletic showdown of IIIT Vadodara. Scan any sport's QR code on campus banners or browse below for schedules, rules, coordinators, and registration.
      </p>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#sports" class="btn btn-primary btn-lg">Explore 8 Sports</a>
        <a href="qr-codes.html" class="btn btn-secondary btn-lg">📱 Download All QR Codes</a>
      </div>

      <!-- Quick Stats -->
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-number">8</div>
          <div class="stat-label">Major Sports</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">450+</div>
          <div class="stat-label">Student Athletes</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">4</div>
          <div class="stat-label">Days of Action</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1</div>
          <div class="stat-label">Champion Trophy</div>
        </div>
      </div>
    </div>
  </header>

  <!-- 8 Sports Grid Section -->
  <section id="sports" class="container" style="padding-top: 3rem;">
    <div class="section-title">
      <div>
        <h3>Championship Sports</h3>
        <p>Select any sport below to view its venue timings, rules, coordinators, and QR code.</p>
      </div>
      <a href="qr-codes.html" class="btn btn-secondary btn-sm">
        <span>🖨️</span> Print Posters & QR Codes
      </a>
    </div>

    <div class="sports-grid">

      <!-- 1. Badminton -->
      <div class="sport-card">
        <div class="sport-card-header">
          <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=700&q=80" alt="Badminton" class="sport-card-img">
          <div class="sport-card-overlay"></div>
          <div class="sport-card-icon">🏸</div>
          <span class="sport-card-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Register by 15 Oct</span>
        </div>
        <div class="sport-card-body">
          <h4>Badminton</h4>
          <p class="sport-card-tagline">Singles, Doubles & Mixed Doubles tournament at Aloka Sports Academy.</p>
          <div class="sport-card-meta">
            <div class="meta-row">
              <span class="icon">📍</span> <span>Aloka Sports Academy (Buses Provided)</span>
            </div>
            <div class="meta-row">
              <span class="icon">📅</span> <span>18 & 20 Oct | After 2 PM / 6 PM</span>
            </div>
          </div>
          <div class="sport-card-footer">
            <a href="badminton.html" class="btn btn-primary btn-sm" style="width: 100%;">View Details & Schedule</a>
            <button class="btn-qr-quick" title="View QR Code" onclick="openSportQRModal('badminton')">📱</button>
          </div>
        </div>
      </div>

      <!-- 2. Cricket -->
      <div class="sport-card">
        <div class="sport-card-header">
          <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=700&q=80" alt="Cricket" class="sport-card-img">
          <div class="sport-card-overlay"></div>
          <div class="sport-card-icon">🏏</div>
          <span class="sport-card-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Registration Open</span>
        </div>
        <div class="sport-card-body">
          <h4>Cricket</h4>
          <p class="sport-card-tagline">Inter-batch T10 Championship & heavy tennis ball showdown.</p>
          <div class="sport-card-meta">
            <div class="meta-row">
              <span class="icon">📍</span> <span>CRPF Ground</span>
            </div>
            <div class="meta-row">
              <span class="icon">📅</span> <span>24th & 31st Oct | 8 AM – 6 PM</span>
            </div>
          </div>
          <div class="sport-card-footer">
            <a href="cricket.html" class="btn btn-primary btn-sm" style="width: 100%;">View Details & Schedule</a>
            <button class="btn-qr-quick" title="View QR Code" onclick="openSportQRModal('cricket')">📱</button>
          </div>
        </div>
      </div>

      <!-- 3. Athletics -->
      <div class="sport-card">
        <div class="sport-card-header">
          <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80" alt="Athletics" class="sport-card-img">
          <div class="sport-card-overlay"></div>
          <div class="sport-card-icon">🏃</div>
          <span class="sport-card-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Registration Open</span>
        </div>
        <div class="sport-card-body">
          <h4>Athletics & Gym</h4>
          <p class="sport-card-tagline">Track & Field, Gym events & Tug of War (Team & Solo challenge).</p>
          <div class="sport-card-meta">
            <div class="meta-row">
              <span class="icon">📍</span> <span>CRPF Ground & Institute Premises</span>
            </div>
            <div class="meta-row">
              <span class="icon">📅</span> <span>Morning & Evening Sessions</span>
            </div>
          </div>
          <div class="sport-card-footer">
            <a href="athletics.html" class="btn btn-primary btn-sm" style="width: 100%;">View Details & Schedule</a>
            <button class="btn-qr-quick" title="View QR Code" onclick="openSportQRModal('athletics')">📱</button>
          </div>
        </div>
      </div>

      <!-- 4. Football -->
      <div class="sport-card">
        <div class="sport-card-header">
          <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=700&q=80" alt="Football" class="sport-card-img">
          <div class="sport-card-overlay"></div>
          <div class="sport-card-icon">⚽</div>
          <span class="sport-card-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Registration Open</span>
        </div>
        <div class="sport-card-body">
          <h4>Football</h4>
          <p class="sport-card-tagline">7v7 clashes on CRPF Ground (25 Oct) and under lights on IIT Ground (01 Nov).</p>
          <div class="sport-card-meta">
            <div class="meta-row">
              <span class="icon">📍</span> <span>CRPF Ground & IIT Ground</span>
            </div>
            <div class="meta-row">
              <span class="icon">📅</span> <span>25 Oct (8am-6pm) & 01 Nov (5pm-9pm)</span>
            </div>
          </div>
          <div class="sport-card-footer">
            <a href="football.html" class="btn btn-primary btn-sm" style="width: 100%;">View Details & Schedule</a>
            <button class="btn-qr-quick" title="View QR Code" onclick="openSportQRModal('football')">📱</button>
          </div>
        </div>
      </div>

      <!-- 5. Volleyball -->
      <div class="sport-card">
        <div class="sport-card-header">
          <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=700&q=80" alt="Volleyball" class="sport-card-img">
          <div class="sport-card-overlay"></div>
          <div class="sport-card-icon">🏐</div>
          <span class="sport-card-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Registration Open</span>
        </div>
        <div class="sport-card-body">
          <h4>Volleyball</h4>
          <p class="sport-card-tagline">Inter-batch championship played during lunch hours at the College Ground.</p>
          <div class="sport-card-meta">
            <div class="meta-row">
              <span class="icon">📍</span> <span>College Ground</span>
            </div>
            <div class="meta-row">
              <span class="icon">📅</span> <span>19 Oct – 06 Nov | During Lunch Hours</span>
            </div>
          </div>
          <div class="sport-card-footer">
            <a href="volleyball.html" class="btn btn-primary btn-sm" style="width: 100%;">View Details & Schedule</a>
            <button class="btn-qr-quick" title="View QR Code" onclick="openSportQRModal('volleyball')">📱</button>
          </div>
        </div>
      </div>

      <!-- 6. Chess -->
      <div class="sport-card">
        <div class="sport-card-header">
          <img src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=700&q=80" alt="Chess" class="sport-card-img">
          <div class="sport-card-overlay"></div>
          <div class="sport-card-icon">♟️</div>
          <span class="sport-card-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Registration Open</span>
        </div>
        <div class="sport-card-body">
          <h4>Chess</h4>
          <p class="sport-card-tagline">Hybrid Online & Offline (Courtyard) rounds during lunch and hostel evenings.</p>
          <div class="sport-card-meta">
            <div class="meta-row">
              <span class="icon">📍</span> <span>Online & Offline (Courtyard) Hybrid</span>
            </div>
            <div class="meta-row">
              <span class="icon">📅</span> <span>19 Oct – 06 Nov | Lunch & Evenings</span>
            </div>
          </div>
          <div class="sport-card-footer">
            <a href="chess.html" class="btn btn-primary btn-sm" style="width: 100%;">View Details & Schedule</a>
            <button class="btn-qr-quick" title="View QR Code" onclick="openSportQRModal('chess')">📱</button>
          </div>
        </div>
      </div>

      <!-- 7. Carrom -->
      <div class="sport-card">
        <div class="sport-card-header">
          <img src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&w=700&q=80" alt="Carrom" class="sport-card-img">
          <div class="sport-card-overlay"></div>
          <div class="sport-card-icon">🎯</div>
          <span class="sport-card-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Registration Open</span>
        </div>
        <div class="sport-card-body">
          <h4>Carrom</h4>
          <p class="sport-card-tagline">Singles & Doubles tournaments in institute premises with AICF standards.</p>
          <div class="sport-card-meta">
            <div class="meta-row">
              <span class="icon">📍</span> <span>Institute Premises</span>
            </div>
            <div class="meta-row">
              <span class="icon">📅</span> <span>From 20th Oct | 01:00 PM – 03:00 PM</span>
            </div>
          </div>
          <div class="sport-card-footer">
            <a href="carrom.html" class="btn btn-primary btn-sm" style="width: 100%;">View Details & Schedule</a>
            <button class="btn-qr-quick" title="View QR Code" onclick="openSportQRModal('carrom')">📱</button>
          </div>
        </div>
      </div>

      <!-- 8. Table Tennis -->
      <div class="sport-card">
        <div class="sport-card-header">
          <img src="https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=700&q=80" alt="Table Tennis" class="sport-card-img">
          <div class="sport-card-overlay"></div>
          <div class="sport-card-icon">🏓</div>
          <span class="sport-card-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Registration Open</span>
        </div>
        <div class="sport-card-body">
          <h4>Table Tennis</h4>
          <p class="sport-card-tagline">Singles & Doubles clashes in College (8 AM-6 PM) and Hostel (8 PM-11 PM).</p>
          <div class="sport-card-meta">
            <div class="meta-row">
              <span class="icon">📍</span> <span>College Premises & Hostel TT Hall</span>
            </div>
            <div class="meta-row">
              <span class="icon">📅</span> <span>20 Oct – 06 Nov | Day & Night Slots</span>
            </div>
          </div>
          <div class="sport-card-footer">
            <a href="table-tennis.html" class="btn btn-primary btn-sm" style="width: 100%;">View Details & Schedule</a>
            <button class="btn-qr-quick" title="View QR Code" onclick="openSportQRModal('table-tennis')">📱</button>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Ventura Venue & Schedule Overview -->
  <section id="schedule" class="container" style="margin-bottom: 4rem;">
    <div class="section-title">
      <div>
        <h3>Festival Schedule at a Glance</h3>
        <p>Day-by-day highlight schedule across campus venues.</p>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
      <div class="card-box" style="margin: 0;">
        <span class="hero-pill" style="margin-bottom: 0.75rem;">Day 1 • 15 Nov</span>
        <h4>Inauguration & Heats</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 8px 0 14px 0;">
          Opening ceremony at Main Ground followed by Cricket League 1, Badminton Round of 16, Football QF1, and Carrom prelims.
        </p>
        <span style="font-size: 0.8rem; color: var(--accent-cyan);">⏰ 08:00 AM – 09:30 PM</span>
      </div>

      <div class="card-box" style="margin: 0;">
        <span class="hero-pill" style="margin-bottom: 0.75rem;">Day 2 • 16 Nov</span>
        <h4>Indoor Sports & Knockouts</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 8px 0 14px 0;">
          Full day Chess Swiss Open, Table Tennis singles/doubles, Volleyball pool clashes, Cricket Semi-Finals, and Football QF2.
        </p>
        <span style="font-size: 0.8rem; color: var(--accent-cyan);">⏰ 09:00 AM – 10:00 PM</span>
      </div>

      <div class="card-box" style="margin: 0;">
        <span class="hero-pill" style="margin-bottom: 0.75rem;">Day 3 • 17 Nov</span>
        <h4>Athletics & Mega Finals</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 8px 0 14px 0;">
          Morning Track & Field (100m, Relay, Shot Put), Badminton Finals, Table Tennis Finals, Volleyball Championship decider.
        </p>
        <span style="font-size: 0.8rem; color: var(--accent-cyan);">⏰ 06:30 AM – 09:00 PM</span>
      </div>

      <div class="card-box" style="margin: 0;">
        <span class="hero-pill" style="margin-bottom: 0.75rem;">Day 4 • 18 Nov</span>
        <h4>Cricket & Football Finals</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 8px 0 14px 0;">
          Grand Cricket Final at 02:00 PM, Football Final under lights at 06:00 PM, followed by the Ventura Trophy Presentation Ceremony.
        </p>
        <span style="font-size: 0.8rem; color: var(--accent-cyan);">⏰ 01:30 PM – 09:30 PM</span>
      </div>
    </div>
  </section>

  <!-- Quick QR Modal -->
  <div id="qrModal" style="display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(10px); z-index: 999; align-items: center; justify-content: center; padding: 1.25rem;">
    <div class="qr-poster-box" style="max-width: 360px; width: 100%; position: relative;">
      <button id="closeQrModal" style="position: absolute; top: 12px; right: 14px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #64748b;">✕</button>
      <h4 id="modalSportName">Sport QR Code</h4>
      <p>Scan with any phone camera or download for campus poster printing.</p>
      
      <div class="qr-img-wrap">
        <img id="modalQrImage" src="" alt="Sport QR Code">
      </div>

      <div style="margin-bottom: 1rem;">
        <input type="text" id="modalSportLink" readonly style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.78rem; color: #334155; background: #f8fafc; text-align: center;">
      </div>

      <div class="qr-actions">
        <a id="modalDownloadBtn" href="#" class="btn btn-primary" download="qr-code.png">Download QR for Poster</a>
        <a href="qr-codes.html" class="btn btn-secondary" style="color: #0f172a; border-color: #cbd5e1;">View All 8 QR Posters</a>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer id="contact" class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h4>VENTURA 2024-25</h4>
          <p>Indian Institute of Information Technology Vadodara (IIITV)<br>
          Gandhinagar Campus / Academic Building, Gujarat, India.</p>
          <div style="margin-top: 1rem; color: var(--text-dim); font-size: 0.82rem;">
            Official Sports Council Helpdesk: <a href="mailto:sports.committee@iiitvadodara.ac.in" style="color: var(--accent-orange);">sports.committee@iiitvadodara.ac.in</a>
          </div>
        </div>

        <div class="footer-links">
          <h5>Outdoor Sports</h5>
          <ul>
            <li><a href="cricket.html">🏏 Cricket (T10)</a></li>
            <li><a href="football.html">⚽ Football (7v7)</a></li>
            <li><a href="athletics.html">🏃 Athletics & Sprints</a></li>
            <li><a href="volleyball.html">🏐 Volleyball</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h5>Indoor Sports</h5>
          <ul>
            <li><a href="badminton.html">🏸 Badminton</a></li>
            <li><a href="table-tennis.html">🏓 Table Tennis</a></li>
            <li><a href="chess.html">♟️ Chess (Rapid)</a></li>
            <li><a href="carrom.html">🎯 Carrom</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2024–2025 IIIT Vadodara Sports Committee • Ventura Annual Meet. Developed for Student Access & QR Poster Scanning.</p>
      </div>
    </div>
  </footer>

  <!-- Mobile Bottom Quick Bar -->
  <div class="mobile-bar">
    <a href="index.html" class="active"><span>🏠</span> Home</a>
    <a href="#sports"><span>🏅</span> Sports</a>
    <a href="#schedule"><span>📅</span> Schedule</a>
    <a href="qr-codes.html"><span>📱</span> QR Hub</a>
  </div>

  <script src="assets/js/sports-data.js"></script>
  <script src="assets/js/app.js"></script>
</body>
</html>
`;

fs.writeFileSync(indexPath, cleanHtml, 'utf8');
console.log('Successfully repaired index.html with clean UTF-8 encoding!');
