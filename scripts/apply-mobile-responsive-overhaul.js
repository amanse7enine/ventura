const fs = require('fs');
const path = require('path');

// ============================================================================
// 1. UPDATE ASSETS/CSS/STYLE.CSS
// ============================================================================
const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Replace old responsive section at the bottom with a comprehensive, robust responsive system
const responsiveCssBlock = `
/* ==========================================================================
   Hamburger Button & Mobile Navigation Drawer
   ========================================================================== */
.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: var(--radius-sm);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 110;
  transition: background 0.2s ease;
}

.nav-toggle:hover {
  background: rgba(255, 255, 255, 0.08);
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: center;
}

.nav-toggle.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav-toggle.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.nav-toggle.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Slide-out Mobile Drawer */
.nav-drawer {
  position: fixed;
  top: 0;
  right: -320px;
  width: 300px;
  max-width: 85vw;
  height: 100vh;
  height: 100dvh;
  background: rgba(6, 10, 22, 0.96);
  backdrop-filter: blur(28px) saturate(190%);
  border-left: 1px solid var(--border-color);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.7);
  z-index: 200;
  display: flex;
  flex-direction: column;
  transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.nav-drawer.active {
  right: 0;
}

.nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 190;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.nav-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

.drawer-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-close {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.drawer-close:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.drawer-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex-grow: 1;
}

.drawer-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.drawer-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.drawer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.drawer-links a {
  display: flex;
  align-items: center;
  padding: 0.7rem 0.85rem;
  color: #cbd5e1;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
}

.drawer-links a:hover, .drawer-links a.active {
  color: #fff;
  background: rgba(255, 107, 43, 0.12);
  border-left: 3px solid var(--accent-orange);
}

.drawer-sports-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}

.drawer-sport-pill {
  padding: 7px 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  color: var(--text-muted);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}

.drawer-sport-pill:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
}

.drawer-actions {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Prevent body scroll when drawer open */
body.nav-open {
  overflow: hidden !important;
}

/* ==========================================================================
   Comprehensive Responsive System (320px to 1440px+)
   ========================================================================== */

/* Tablet & Intermediate Screens (<= 1024px) */
@media (max-width: 1024px) {
  .container {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  .footer-brand {
    grid-column: span 2;
  }
}

/* Standard Tablet & Mobile Transition (<= 900px) */
@media (max-width: 900px) {
  .sport-hero-content {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
  .sport-hero-actions {
    min-width: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 8px;
  }
}

/* Mobile & Small Screens (<= 768px) */
@media (max-width: 768px) {
  .navbar {
    padding: 0.75rem 1rem;
  }
  .nav-links {
    display: none !important;
  }
  .nav-toggle {
    display: flex;
  }
  
  /* Compact brand on mobile */
  .brand-logo-badge {
    width: 38px;
    height: 38px;
    font-size: 1.25rem;
  }
  .brand-text h1 {
    font-size: 1.1rem;
  }
  .brand-text span {
    font-size: 0.65rem;
  }

  /* Hero Section Typography */
  .hero {
    padding: 3.5rem 0 2.5rem 0;
  }
  .hero-pill {
    padding: 6px 14px;
    font-size: 0.78rem;
    line-height: 1.4;
    white-space: normal;
    text-align: center;
    max-width: 100%;
  }
  .hero h2 {
    font-size: clamp(1.9rem, 7vw, 3.2rem);
    line-height: 1.1;
    word-break: break-word;
  }
  .hero p.tagline {
    font-size: 0.98rem;
    margin-bottom: 1.75rem;
  }
  
  /* Hero Stats */
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.85rem;
    margin-top: 2rem;
  }
  .stat-item {
    padding: 1rem 0.75rem;
  }
  .stat-number {
    font-size: 1.75rem;
  }

  /* Sports Page Hero */
  .sport-hero {
    padding: 2.5rem 0 2rem 0;
  }
  .sport-title-block h1 {
    font-size: clamp(1.75rem, 6.5vw, 2.5rem);
    gap: 8px;
    word-break: break-word;
  }
  .sport-tagline {
    font-size: 0.98rem;
  }
  .sport-hero-actions {
    grid-template-columns: 1fr;
  }

  /* Tabs Nav */
  .tabs-nav {
    border-radius: var(--radius-md);
    padding: 4px;
    margin-bottom: 1.75rem;
    gap: 4px;
    scrollbar-width: none;
  }
  .tabs-nav::-webkit-scrollbar {
    display: none;
  }
  .tab-btn {
    padding: 0.55rem 1rem;
    font-size: 0.82rem;
    min-height: 42px;
  }

  /* Timeline */
  .timeline-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 1rem 1.15rem;
  }
  .timeline-time {
    display: inline-block;
    padding: 3px 8px;
    background: rgba(0, 242, 254, 0.1);
    border: 1px solid rgba(0, 242, 254, 0.25);
    border-radius: var(--radius-sm);
    font-size: 0.78rem;
  }
  .timeline-desc h5 {
    font-size: 0.98rem;
  }

  /* Coordinators & Card Boxes */
  .card-box {
    padding: 1.25rem;
    border-radius: var(--radius-md);
  }
  .card-box h3 {
    font-size: 1.25rem;
  }
  .coordinator-card {
    padding: 1rem;
  }

  /* Mobile Bottom Navigation Bar */
  .mobile-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px 10px calc(8px + env(safe-area-inset-bottom, 0px));
  }
  .mobile-bar a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.7rem;
    color: var(--text-muted);
    gap: 3px;
    font-weight: 600;
    min-width: 48px;
    min-height: 44px;
    justify-content: center;
  }
  .mobile-bar a.active {
    color: var(--accent-orange);
  }
  body {
    padding-bottom: 70px;
  }

  /* Footer */
  .footer {
    padding: 3rem 0 2rem 0;
    margin-top: 3.5rem;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-brand {
    grid-column: span 1;
  }
}

/* Extra Small Phones (320px - 480px) */
@media (max-width: 480px) {
  .container {
    padding-left: 0.9rem;
    padding-right: 0.9rem;
  }
  .nav-actions {
    gap: 6px;
  }
  .nav-actions .btn {
    padding: 0.4rem 0.65rem;
    font-size: 0.76rem;
  }
  /* On very small screens, hide secondary header button to prevent collision */
  .nav-actions .btn-secondary {
    display: none;
  }
  .btn-lg {
    padding: 0.8rem 1.4rem;
    font-size: 0.95rem;
  }
  .sports-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
  .stat-number {
    font-size: 1.55rem;
  }
  .stat-label {
    font-size: 0.72rem;
  }
  .qr-poster-box {
    padding: 1.25rem 1rem;
  }
  .qr-img-wrap {
    width: min(200px, 100%);
    height: auto;
    aspect-ratio: 1;
  }
}

/* Extreme Narrow Phones (<= 340px: iPhone SE 1st gen) */
@media (max-width: 340px) {
  .hero-stats {
    grid-template-columns: 1fr;
  }
  .brand-text h1 {
    font-size: 0.98rem;
  }
  .brand-text span {
    display: none;
  }
}

/* Touch targets and accessibility */
button, a.btn, .tab-btn, .mobile-bar a {
  touch-action: manipulation;
}

:focus-visible {
  outline: 2px solid var(--accent-orange);
  outline-offset: 3px;
}

/* Accessibility: respect user motion preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

// Replace bottom responsive block
cssContent = cssContent.replace(
  /\/\* ==========================================================================\s*Mobile Bottom Bar & Responsive Styles[\s\S]*$/,
  responsiveCssBlock
);

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('1. Updated assets/css/style.css with complete mobile-first responsive architecture.');

// ============================================================================
// 2. UPDATE ASSETS/JS/APP.JS WITH MOBILE DRAWER & TOUCH LOGIC
// ============================================================================
const appJsPath = path.join(__dirname, '..', 'assets', 'js', 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

const mobileNavJs = `
  initMobileNav();
});

/**
 * Mobile Navigation Drawer & Hamburger Menu
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('navToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('navOverlay');
  const closeBtn = document.getElementById('drawerClose');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    toggleBtn.classList.add('active');
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('nav-open');
  }

  function closeDrawer() {
    toggleBtn.classList.remove('active');
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('nav-open');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close when tapping any drawer link
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}
`;

if (!appJsContent.includes('initMobileNav')) {
  appJsContent = appJsContent.replace(
    '  initDynamicDomainUpdater();\n});',
    mobileNavJs
  );
  fs.writeFileSync(appJsPath, appJsContent, 'utf8');
  console.log('2. Updated assets/js/app.js with mobile nav drawer logic.');
}

// ============================================================================
// 3. UPDATE SCRIPTS/BUILD-SPORTS-PAGES.JS TO INCLUDE HAMBURGER & DRAWER
// ============================================================================
const buildScriptPath = path.join(__dirname, 'build-sports-pages.js');
let buildScriptContent = fs.readFileSync(buildScriptPath, 'utf8');

// Update navbar in build-sports-pages.js
const newNavbarTemplate = `  <!-- Navbar -->
  <nav class="navbar">
    <div class="nav-container">
      <a href="index.html" class="brand-link">
        <div class="brand-logo-badge" style="background: \${sport.color};">V</div>
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
        <a href="\${sport.registrationLink}" target="_blank" class="btn btn-primary btn-sm">Register Team</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Slide-out Drawer -->
  <div class="nav-drawer" id="mobileDrawer">
    <div class="drawer-header">
      <div class="brand-link">
        <div class="brand-logo-badge" style="background: \${sport.color};">V</div>
        <div class="brand-text">
          <h1>VENTURA <span>IIIT Vadodara</span></h1>
        </div>
      </div>
      <button class="drawer-close" id="drawerClose" aria-label="Close Navigation Menu">✕</button>
    </div>
    <div class="drawer-content">
      <div class="drawer-section">
        <span class="drawer-label">Quick Page Navigation</span>
        <ul class="drawer-links">
          <li><a href="index.html">🏠 Home Portal</a></li>
          <li><a href="#schedule">📅 Schedule & Timings</a></li>
          <li><a href="#rules">📜 Rules & Regulations</a></li>
          <li><a href="#coordinators">👥 Student Coordinators</a></li>
          <li><a href="#qr-section">📱 Scan / Poster QR</a></li>
          <li><a href="qr-codes.html">🖨️ QR Distribution Hub</a></li>
        </ul>
      </div>
      <div class="drawer-section">
        <span class="drawer-label">Browse Other Sports</span>
        <div class="drawer-sports-grid">
          <a href="cricket.html" class="drawer-sport-pill">🏏 Cricket</a>
          <a href="football.html" class="drawer-sport-pill">⚽ Football</a>
          <a href="badminton.html" class="drawer-sport-pill">🏸 Badminton</a>
          <a href="volleyball.html" class="drawer-sport-pill">🏐 Volleyball</a>
          <a href="athletics.html" class="drawer-sport-pill">🏃 Athletics</a>
          <a href="chess.html" class="drawer-sport-pill">♟️ Chess</a>
          <a href="table-tennis.html" class="drawer-sport-pill">🏓 Table Tennis</a>
          <a href="carrom.html" class="drawer-sport-pill">🎯 Carrom</a>
        </div>
      </div>
      <div class="drawer-actions">
        <a href="\${sport.registrationLink}" target="_blank" class="btn btn-primary" style="width: 100%;">📝 Register for \${sport.name}</a>
        \${sport.rulebookPdf && sport.rulebookPdf !== '#' ? \`
        <a href="\${sport.rulebookPdf}" download="\${sport.id}-rulebook.pdf" target="_blank" class="btn btn-secondary" style="width: 100%;">📥 Download Rulebook</a>
        \` : ''}
      </div>
    </div>
  </div>
  <div class="nav-overlay" id="navOverlay"></div>
`;

// Replace navbar block in build-sports-pages.js
buildScriptContent = buildScriptContent.replace(
  /  <!-- Navbar -->[\s\S]*?  <\/nav>/,
  newNavbarTemplate
);

// Add mobile-bar bottom navigation to sports pages if not present
const mobileBarSport = `
  <!-- Mobile Bottom Quick Bar for Sports Pages -->
  <div class="mobile-bar">
    <a href="index.html"><span>🏠</span> Hub</a>
    <a href="#schedule" class="active"><span>📅</span> Schedule</a>
    <a href="#rules"><span>📜</span> Rules</a>
    <a href="#coordinators"><span>👥</span> Contact</a>
  </div>
`;

if (!buildScriptContent.includes('Mobile Bottom Quick Bar for Sports Pages')) {
  buildScriptContent = buildScriptContent.replace(
    '  <script src="assets/js/sports-data.js"></script>',
    `${mobileBarSport}\n  <script src="assets/js/sports-data.js"></script>`
  );
}

fs.writeFileSync(buildScriptPath, buildScriptContent, 'utf8');
console.log('3. Updated scripts/build-sports-pages.js with responsive navbar, drawer & mobile tab bar.');

// ============================================================================
// 4. UPDATE INDEX.HTML WITH HAMBURGER & DRAWER
// ============================================================================
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
let indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

const indexNavbarReplacement = `  <!-- Navbar -->
  <nav class="navbar">
    <div class="nav-container">
      <a href="index.html" class="brand-link">
        <div class="brand-logo-badge">V</div>
        <div class="brand-text">
          <h1>VENTURA <span>IIIT Vadodara</span></h1>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="#sports">All Sports</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="qr-codes.html">QR Code Hub 📱</a></li>
      </ul>
      <div class="nav-actions">
        <a href="qr-codes.html" class="btn btn-secondary btn-sm">Scan / QR Hub</a>
        <a href="#sports" class="btn btn-primary btn-sm">Register Team</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Slide-out Drawer -->
  <div class="nav-drawer" id="mobileDrawer">
    <div class="drawer-header">
      <div class="brand-link">
        <div class="brand-logo-badge">V</div>
        <div class="brand-text">
          <h1>VENTURA <span>IIIT Vadodara</span></h1>
        </div>
      </div>
      <button class="drawer-close" id="drawerClose" aria-label="Close Navigation Menu">✕</button>
    </div>
    <div class="drawer-content">
      <div class="drawer-section">
        <span class="drawer-label">Main Navigation</span>
        <ul class="drawer-links">
          <li><a href="index.html" class="active">🏠 Home Portal</a></li>
          <li><a href="#sports">🏅 All 8 Sports</a></li>
          <li><a href="#schedule">📅 Schedule Overview</a></li>
          <li><a href="qr-codes.html">📱 QR Code Posters</a></li>
          <li><a href="#contact">👥 Student Council Contact</a></li>
        </ul>
      </div>
      <div class="drawer-section">
        <span class="drawer-label">Quick Jump to Sport</span>
        <div class="drawer-sports-grid">
          <a href="cricket.html" class="drawer-sport-pill">🏏 Cricket</a>
          <a href="football.html" class="drawer-sport-pill">⚽ Football</a>
          <a href="badminton.html" class="drawer-sport-pill">🏸 Badminton</a>
          <a href="volleyball.html" class="drawer-sport-pill">🏐 Volleyball</a>
          <a href="athletics.html" class="drawer-sport-pill">🏃 Athletics</a>
          <a href="chess.html" class="drawer-sport-pill">♟️ Chess</a>
          <a href="table-tennis.html" class="drawer-sport-pill">🏓 Table Tennis</a>
          <a href="carrom.html" class="drawer-sport-pill">🎯 Carrom</a>
        </div>
      </div>
      <div class="drawer-actions">
        <a href="#sports" class="btn btn-primary" style="width: 100%;">📝 Register Team</a>
        <a href="qr-codes.html" class="btn btn-secondary" style="width: 100%;">📱 Scan Poster QRs</a>
      </div>
    </div>
  </div>
  <div class="nav-overlay" id="navOverlay"></div>
`;

indexHtmlContent = indexHtmlContent.replace(
  /  <!-- Navbar -->[\s\S]*?  <\/nav>/,
  indexNavbarReplacement
);

// Update Chess and Table Tennis card taglines in index.html
indexHtmlContent = indexHtmlContent.replace(
  'Hybrid Online & Offline (Courtyard) rounds during lunch and hostel evenings.',
  'Single-Elimination Knockout (10+0 Rapid) with Armageddon Tiebreak on Courtyard & Chess.com.'
);

indexHtmlContent = indexHtmlContent.replace(
  'Singles & Doubles clashes in College (8 AM-6 PM) and Hostel (8 PM-11 PM).',
  'Official TENEX Championship • Best of 3 Games to 11 Points across 5 Categories.'
);

fs.writeFileSync(indexHtmlPath, indexHtmlContent, 'utf8');
console.log('4. Updated index.html with hamburger button, drawer, and updated card copy.');

// ============================================================================
// 5. UPDATE QR-CODES.HTML WITH HAMBURGER, DRAWER & RESPONSIVE FIXES
// ============================================================================
const qrHtmlPath = path.join(__dirname, '..', 'qr-codes.html');
let qrHtmlContent = fs.readFileSync(qrHtmlPath, 'utf8');

const qrNavbarReplacement = `  <!-- Navbar -->
  <nav class="navbar">
    <div class="nav-container">
      <a href="index.html" class="brand-link">
        <div class="brand-logo-badge">V</div>
        <div class="brand-text">
          <h1>VENTURA <span>IIIT Vadodara</span></h1>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">← All Sports</a></li>
        <li><a href="index.html#schedule">Schedule</a></li>
        <li><a href="index.html#contact">Contact</a></li>
        <li><a href="qr-codes.html" class="active">QR Hub 📱</a></li>
      </ul>
      <div class="nav-actions">
        <button class="btn btn-primary btn-sm btn-print-poster">🖨️ Print Sheet</button>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Slide-out Drawer -->
  <div class="nav-drawer" id="mobileDrawer">
    <div class="drawer-header">
      <div class="brand-link">
        <div class="brand-logo-badge">V</div>
        <div class="brand-text">
          <h1>VENTURA <span>IIIT Vadodara</span></h1>
        </div>
      </div>
      <button class="drawer-close" id="drawerClose" aria-label="Close Navigation Menu">✕</button>
    </div>
    <div class="drawer-content">
      <div class="drawer-section">
        <span class="drawer-label">Main Navigation</span>
        <ul class="drawer-links">
          <li><a href="index.html">🏠 Home Portal</a></li>
          <li><a href="qr-codes.html" class="active">📱 QR Code Hub</a></li>
          <li><a href="index.html#schedule">📅 Festival Schedule</a></li>
          <li><a href="index.html#contact">👥 Council Contact</a></li>
        </ul>
      </div>
      <div class="drawer-section">
        <span class="drawer-label">Direct Sport Pages</span>
        <div class="drawer-sports-grid">
          <a href="cricket.html" class="drawer-sport-pill">🏏 Cricket</a>
          <a href="football.html" class="drawer-sport-pill">⚽ Football</a>
          <a href="badminton.html" class="drawer-sport-pill">🏸 Badminton</a>
          <a href="volleyball.html" class="drawer-sport-pill">🏐 Volleyball</a>
          <a href="athletics.html" class="drawer-sport-pill">🏃 Athletics</a>
          <a href="chess.html" class="drawer-sport-pill">♟️ Chess</a>
          <a href="table-tennis.html" class="drawer-sport-pill">🏓 Table Tennis</a>
          <a href="carrom.html" class="drawer-sport-pill">🎯 Carrom</a>
        </div>
      </div>
      <div class="drawer-actions">
        <button class="btn btn-primary btn-print-poster" style="width: 100%;">🖨️ Print All Posters</button>
      </div>
    </div>
  </div>
  <div class="nav-overlay" id="navOverlay"></div>
`;

qrHtmlContent = qrHtmlContent.replace(
  /  <!-- Navbar -->[\s\S]*?  <\/nav>/,
  qrNavbarReplacement
);

// Fix .qr-grid style in qr-codes.html
qrHtmlContent = qrHtmlContent.replace(
  /grid-template-columns:\s*repeat\(auto-fill,\s*minmax\(320px,\s*1fr\)\);/,
  'grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));'
);

fs.writeFileSync(qrHtmlPath, qrHtmlContent, 'utf8');
console.log('5. Updated qr-codes.html with hamburger, drawer, and fluid responsive grid.');
