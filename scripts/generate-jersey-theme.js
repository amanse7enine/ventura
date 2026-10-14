const fs = require('fs');
const path = require('path');

// 1. Generate new assets/css/style.css
const cssContent = `/* ==========================================================================
   VENTURA 2026–27 - IIIT Vadodara Annual Sports Festival Stylesheet
   Theme: Official Sports Committee Jersey Design System
   Colors: White | Cyan (#20A9D6) | Royal Blue (#1455A6) | Deep Navy (#101F45) | Golden Yellow (#F5A623)
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800;900&display=swap');

:root {
  /* Official Jersey Palette */
  --primary-cyan: #20A9D6;
  --sky-blue: #55C7E8;
  --royal-blue: #1455A6;
  --deep-navy: #101F45;
  --golden-yellow: #F5A623;
  --golden-dark: #D98204;
  --pure-white: #FFFFFF;
  --light-bg: #F2F7FA;
  --light-surface: #EBF3F8;
  --card-bg: #FFFFFF;
  --card-bg-subtle: #F8FBFE;
  
  /* Text System */
  --text-main: #101F45;
  --text-secondary: #5D6B7A;
  --text-muted: #64748B;
  --text-dim: #94A3B8;
  --text-white: #FFFFFF;

  /* Borders & Dividers */
  --border-light: #E2EBF2;
  --border-accent: rgba(32, 169, 214, 0.35);
  --border-royal: rgba(20, 85, 166, 0.25);
  --border-gold: rgba(245, 166, 35, 0.4);

  /* Athletic Gradients */
  --gradient-athletic: linear-gradient(135deg, #20A9D6 0%, #1455A6 100%);
  --gradient-jersey: linear-gradient(125deg, #101F45 0%, #1455A6 45%, #20A9D6 100%);
  --gradient-cyan-sky: linear-gradient(135deg, #55C7E8 0%, #20A9D6 100%);
  --gradient-gold: linear-gradient(135deg, #F5A623 0%, #D98204 100%);
  --gradient-banner: linear-gradient(135deg, #101F45 0%, #1455A6 60%, #20A9D6 100%);
  --gradient-card-vignette: linear-gradient(180deg, rgba(16, 31, 69, 0.05) 0%, rgba(16, 31, 69, 0.75) 100%);
  --gradient-subtle: linear-gradient(180deg, #FFFFFF 0%, #F2F7FA 100%);

  /* Border Radii */
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;

  /* Authentic Shadows */
  --shadow-xs: 0 1px 3px rgba(16, 31, 69, 0.06);
  --shadow-sm: 0 4px 12px rgba(16, 31, 69, 0.06);
  --shadow-md: 0 8px 24px rgba(16, 31, 69, 0.08);
  --shadow-lg: 0 16px 40px rgba(16, 31, 69, 0.12);
  --shadow-hover: 0 16px 36px rgba(32, 169, 214, 0.22);
  --shadow-cyan-glow: 0 4px 18px rgba(32, 169, 214, 0.4);
  --shadow-gold-glow: 0 4px 16px rgba(245, 166, 35, 0.4);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: var(--light-bg);
}
::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: var(--radius-full);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--primary-cyan);
}

/* Selection Highlight */
::selection {
  background: var(--primary-cyan);
  color: #FFFFFF;
}

/* Reset & Box Sizing */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: var(--light-bg);
  color: var(--text-main);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: var(--light-bg);
  background-image: 
    radial-gradient(circle at 10% 15%, rgba(32, 169, 214, 0.06) 0%, transparent 40%),
    radial-gradient(circle at 90% 85%, rgba(20, 85, 166, 0.05) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(245, 166, 35, 0.03) 0%, transparent 50%);
  background-attachment: fixed;
}

/* Diagonal Jersey Athletic Stripe Accents (Subtle, never interferes with reading) */
.bg-mesh {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.mesh-blob {
  position: absolute;
  pointer-events: none;
  opacity: 0.12;
  filter: blur(80px);
}
.blob-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--sky-blue) 0%, var(--primary-cyan) 100%);
  top: -150px;
  right: -100px;
}
.blob-2 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--royal-blue) 0%, var(--deep-navy) 100%);
  bottom: 0%;
  left: -200px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', 'Outfit', sans-serif;
  letter-spacing: -0.02em;
  font-weight: 800;
  color: var(--text-main);
  overflow-wrap: break-word;
  word-break: break-word;
}

p {
  color: var(--text-secondary);
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.2s ease;
}

code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  overflow-wrap: break-word;
  word-break: break-all;
}

.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ==========================================================================
   Navigation Bar
   ========================================================================== */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(16px);
  border-bottom: 2px solid rgba(32, 169, 214, 0.18);
  padding: 0.85rem 1.5rem;
  box-shadow: 0 2px 14px rgba(16, 31, 69, 0.06);
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo-badge {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--gradient-athletic);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.45rem;
  font-weight: 900;
  color: #fff;
  box-shadow: 0 4px 14px rgba(32, 169, 214, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  position: relative;
}

.brand-logo-badge::after {
  content: "";
  position: absolute;
  top: -2px;
  right: -2px;
  width: 10px;
  height: 10px;
  background: var(--golden-yellow);
  border-radius: 50%;
  border: 2px solid #FFFFFF;
}

.brand-link:hover .brand-logo-badge {
  transform: scale(1.05) rotate(3deg);
  box-shadow: 0 6px 18px rgba(20, 85, 166, 0.5);
}

.brand-text h1 {
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
  display: flex;
  align-items: center;
  gap: 6px;
  letter-spacing: -0.01em;
  color: var(--deep-navy);
}

.brand-text span {
  font-size: 0.72rem;
  color: var(--royal-blue);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  font-weight: 700;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
}

.nav-links a {
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--text-secondary);
  transition: all 0.2s ease;
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-sm);
  position: relative;
}

.nav-links a:hover {
  color: var(--royal-blue);
  background: rgba(32, 169, 214, 0.08);
}

.nav-links a.active {
  color: var(--royal-blue);
  background: rgba(32, 169, 214, 0.12);
  border: 1px solid rgba(32, 169, 214, 0.3);
  font-weight: 700;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* ==========================================================================
   Buttons & Interactive Elements
   ========================================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.68rem 1.4rem;
  font-size: 0.92rem;
  font-weight: 700;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.01em;
}

.btn-primary {
  background: var(--gradient-athletic);
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(32, 169, 214, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(20, 85, 166, 0.4);
  color: #ffffff;
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-secondary {
  background: #ffffff;
  color: var(--royal-blue);
  border: 1.5px solid rgba(32, 169, 214, 0.4);
  box-shadow: 0 2px 8px rgba(16, 31, 69, 0.04);
}

.btn-secondary:hover {
  background: rgba(32, 169, 214, 0.08);
  border-color: var(--primary-cyan);
  color: var(--deep-navy);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(32, 169, 214, 0.15);
}

.btn-gold {
  background: var(--gradient-gold);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(245, 166, 35, 0.35);
}

.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 166, 35, 0.5);
  color: #ffffff;
}

.btn-sm {
  padding: 0.45rem 0.95rem;
  font-size: 0.82rem;
}

.btn-lg {
  padding: 0.9rem 1.85rem;
  font-size: 1.02rem;
  border-radius: var(--radius-md);
}

.btn-qr-quick {
  background: #ffffff;
  border: 1.5px solid var(--border-light);
  color: var(--text-main);
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-xs);
}

.btn-qr-quick:hover {
  background: rgba(32, 169, 214, 0.1);
  border-color: var(--primary-cyan);
  transform: scale(1.08);
}

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
  background: rgba(32, 169, 214, 0.08);
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2.5px;
  background-color: var(--deep-navy);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: center;
}

.nav-toggle.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background-color: var(--royal-blue);
}
.nav-toggle.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.nav-toggle.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background-color: var(--royal-blue);
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
  background: #ffffff;
  border-left: 2px solid rgba(32, 169, 214, 0.3);
  box-shadow: -10px 0 40px rgba(16, 31, 69, 0.2);
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
  background: rgba(16, 31, 69, 0.45);
  backdrop-filter: blur(4px);
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
  border-bottom: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--light-surface);
}

.drawer-close {
  background: #ffffff;
  border: 1px solid var(--border-light);
  color: var(--deep-navy);
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow-xs);
}

.drawer-close:hover {
  background: rgba(32, 169, 214, 0.1);
  color: var(--royal-blue);
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
  color: var(--royal-blue);
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
  color: var(--text-main);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
}

.drawer-links a:hover, .drawer-links a.active {
  color: var(--royal-blue);
  background: rgba(32, 169, 214, 0.1);
  border-left: 3px solid var(--primary-cyan);
}

.drawer-sports-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}

.drawer-sport-pill {
  padding: 7px 10px;
  background: var(--light-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  color: var(--text-main);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}

.drawer-sport-pill:hover {
  color: var(--royal-blue);
  background: #ffffff;
  border-color: var(--primary-cyan);
  box-shadow: var(--shadow-xs);
}

.drawer-actions {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Prevent body scroll when drawer open */
body.nav-open {
  overflow: hidden !important;
}

/* ==========================================================================
   Hero Section - Inspired by Official Jersey
   ========================================================================== */
.hero {
  position: relative;
  padding: 5rem 0 4rem 0;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(180deg, #FFFFFF 0%, #F2F7FA 100%);
  border-bottom: 1px solid var(--border-light);
}

/* Athletic Jersey Brush Stroke Overlay */
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: -5%;
  width: 50%;
  height: 100%;
  background: linear-gradient(125deg, transparent 40%, rgba(85, 199, 232, 0.08) 45%, rgba(32, 169, 214, 0.12) 55%, rgba(245, 166, 35, 0.12) 70%, transparent 80%);
  transform: skewX(-15deg);
  pointer-events: none;
  z-index: 0;
}

.hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -5%;
  width: 40%;
  height: 60%;
  background: linear-gradient(45deg, transparent 40%, rgba(20, 85, 166, 0.06) 55%, transparent 75%);
  transform: skewX(-12deg);
  pointer-events: none;
  z-index: 0;
}

.hero .container {
  position: relative;
  z-index: 1;
}

.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 18px;
  background: #ffffff;
  border: 1.5px solid rgba(32, 169, 214, 0.4);
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--royal-blue);
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 14px rgba(32, 169, 214, 0.15);
  letter-spacing: 0.02em;
}

.hero h2 {
  font-size: clamp(2.3rem, 5.5vw, 4.4rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
  color: var(--deep-navy);
}

.gradient-text {
  background: linear-gradient(135deg, #1455A6 0%, #20A9D6 55%, #F5A623 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.hero p.tagline {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 680px;
  margin: 0 auto 2.25rem auto;
  line-height: 1.6;
}

/* Hero Stats */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 3.5rem;
}

.stat-item {
  background: #ffffff;
  border: 1.5px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.4rem 1rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-athletic);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-4px);
  border-color: var(--primary-cyan);
  box-shadow: var(--shadow-md);
}

.stat-item:hover::before {
  opacity: 1;
}

.stat-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--deep-navy);
  line-height: 1;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--royal-blue);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ==========================================================================
   Section Title
   ========================================================================== */
.section-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.25rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.section-title h3 {
  font-size: clamp(1.6rem, 3.5vw, 2.3rem);
  letter-spacing: -0.02em;
  color: var(--deep-navy);
  margin-bottom: 6px;
}

.section-title p {
  color: var(--text-secondary);
  font-size: 0.96rem;
}

/* ==========================================================================
   Sports Grid & Athletic Cards
   ========================================================================== */
.sports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 1.75rem;
  margin-bottom: 4rem;
}

.sport-card {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.sport-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary-cyan);
  box-shadow: var(--shadow-hover);
}

.sport-card-header {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: var(--deep-navy);
}

.sport-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.sport-card:hover .sport-card-img {
  transform: scale(1.08);
}

.sport-card-overlay {
  position: absolute;
  inset: 0;
  background: var(--gradient-card-vignette);
}

.sport-card-icon {
  position: absolute;
  top: 14px;
  left: 14px;
  width: 46px;
  height: 46px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.45rem;
  box-shadow: 0 4px 12px rgba(16, 31, 69, 0.15);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.sport-card:hover .sport-card-icon {
  transform: scale(1.1) rotate(-4deg);
}

.sport-card-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 5px 12px;
  border-radius: var(--radius-full);
  font-size: 0.74rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: var(--royal-blue);
  border: 1px solid rgba(32, 169, 214, 0.4);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(16, 31, 69, 0.1);
}

.badge-live {
  background: rgba(239, 68, 68, 0.12) !important;
  color: #dc2626 !important;
  border-color: rgba(239, 68, 68, 0.3) !important;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.live-dot {
  width: 7px;
  height: 7px;
  background-color: #ef4444;
  border-radius: 50%;
  display: inline-block;
  animation: pulse-dot 1.2s infinite;
}

@keyframes pulse-dot {
  0% { transform: scale(0.9); opacity: 0.7; }
  50% { transform: scale(1.4); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0.7; }
}

.sport-card-body {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #ffffff;
}

.sport-card-body h4 {
  font-size: 1.35rem;
  margin-bottom: 6px;
  color: var(--deep-navy);
}

.sport-card-tagline {
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin-bottom: 1.15rem;
  line-height: 1.45;
  flex-grow: 1;
}

.sport-card-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  background: var(--light-surface);
  border-radius: var(--radius-sm);
  margin-bottom: 1.25rem;
  border: 1px solid var(--border-light);
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--text-main);
}

.meta-row .icon {
  font-size: 1rem;
  opacity: 0.85;
  flex-shrink: 0;
}

.sport-card-footer {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

/* ==========================================================================
   Sport Detail Hero Banner
   ========================================================================== */
.sport-hero {
  position: relative;
  padding: 4rem 0 3rem 0;
  background: linear-gradient(135deg, #101F45 0%, #1455A6 70%, #20A9D6 100%);
  color: #ffffff;
  overflow: hidden;
}

.sport-hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: -5%;
  width: 45%;
  height: 100%;
  background: linear-gradient(135deg, transparent 40%, rgba(245, 166, 35, 0.2) 65%, transparent 75%);
  transform: skewX(-15deg);
  pointer-events: none;
}

.sport-hero-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2.5rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.sport-title-block h1 {
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.1;
  margin: 0.6rem 0 1rem 0;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.sport-tagline {
  font-size: 1.1rem;
  color: #E2EBF2;
  max-width: 640px;
  line-height: 1.5;
}

.sport-meta-pills {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  color: #ffffff;
  backdrop-filter: blur(8px);
}

.sport-hero-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 260px;
}

/* ==========================================================================
   Tabs Navigation & Content
   ========================================================================== */
.tabs-nav {
  display: flex;
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 6px;
  margin: 2.5rem 0 2rem 0;
  gap: 6px;
  box-shadow: var(--shadow-sm);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.tab-btn {
  flex: 1;
  padding: 0.75rem 1.25rem;
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-weight: 700;
  font-size: 0.92rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.tab-btn:hover {
  color: var(--royal-blue);
  background: var(--light-surface);
}

.tab-btn.active {
  background: var(--gradient-athletic);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(32, 169, 214, 0.35);
}

.tab-content {
  display: none;
  animation: fadeIn 0.35s ease;
}

.tab-content.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ==========================================================================
   Detail Layout & Reusable Card Boxes
   ========================================================================== */
.detail-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.card-box {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  margin-bottom: 2rem;
}

.card-box h3 {
  font-size: 1.45rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--deep-navy);
}

/* Schedule Timeline */
.schedule-timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 140px 1fr auto;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 1.25rem;
  background: var(--light-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.timeline-item:hover {
  background: #ffffff;
  border-color: var(--primary-cyan);
  box-shadow: var(--shadow-sm);
}

.timeline-time {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 0.88rem;
  color: var(--royal-blue);
}

.timeline-desc h5 {
  font-size: 1.05rem;
  margin-bottom: 3px;
  color: var(--deep-navy);
}

.timeline-desc span {
  font-size: 0.84rem;
  color: var(--text-secondary);
}

/* Rules List */
.rules-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rules-list li {
  position: relative;
  padding-left: 28px;
  font-size: 0.95rem;
  color: var(--text-main);
  line-height: 1.55;
}

.rules-list li::before {
  content: "⚡";
  position: absolute;
  left: 0;
  top: 1px;
  color: var(--golden-yellow);
  font-size: 1rem;
}

/* Category Tags */
.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.category-tags .tag {
  padding: 6px 14px;
  background: var(--light-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--royal-blue);
}

/* Coordinators */
.coordinators-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.coordinator-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 1rem;
  background: var(--light-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.coordinator-card:hover {
  border-color: var(--primary-cyan);
  background: #ffffff;
  box-shadow: var(--shadow-sm);
}

.coordinator-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--gradient-athletic);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.15rem;
  flex-shrink: 0;
}

.coordinator-info h5 {
  font-size: 1rem;
  margin-bottom: 2px;
  color: var(--deep-navy);
}

.coordinator-info p {
  font-size: 0.82rem;
  color: var(--text-secondary);
}

.coordinator-info a {
  color: var(--royal-blue);
  font-weight: 600;
}

.coordinator-info a:hover {
  color: var(--primary-cyan);
  text-decoration: underline;
}

/* ==========================================================================
   QR Poster Box & QR Hub
   ========================================================================== */
.qr-poster-box {
  background: #ffffff;
  border: 2px solid rgba(32, 169, 214, 0.3);
  border-radius: var(--radius-lg);
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: var(--shadow-md);
}

.qr-poster-box h4 {
  font-size: 1.25rem;
  color: var(--deep-navy);
  margin-bottom: 6px;
}

.qr-img-wrap {
  width: 220px;
  height: 220px;
  margin: 1.5rem auto;
  padding: 12px;
  background: #ffffff;
  border: 2px solid var(--border-light);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.qr-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 1.75rem;
  margin-bottom: 4rem;
}

.qr-card {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 1.75rem 1.25rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}

.qr-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-cyan);
  box-shadow: var(--shadow-hover);
}

/* ==========================================================================
   Footer
   ========================================================================== */
.footer {
  background: #ffffff;
  border-top: 2px solid rgba(32, 169, 214, 0.2);
  padding: 4.5rem 0 2rem 0;
  margin-top: 5rem;
  box-shadow: 0 -4px 20px rgba(16, 31, 69, 0.04);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.footer-brand p {
  color: var(--text-secondary);
  font-size: 0.94rem;
  margin: 1rem 0 1.5rem 0;
  max-width: 440px;
  line-height: 1.6;
}

.footer-col h5 {
  font-size: 1.1rem;
  margin-bottom: 1.25rem;
  color: var(--deep-navy);
  font-weight: 800;
  letter-spacing: -0.01em;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  color: var(--text-secondary);
  font-size: 0.92rem;
  font-weight: 500;
}

.footer-links a:hover {
  color: var(--royal-blue);
  transform: translateX(4px);
  display: inline-block;
}

.footer-bottom {
  border-top: 1px solid var(--border-light);
  padding-top: 2rem;
  text-align: center;
  font-size: 0.88rem;
  color: var(--text-secondary);
}

/* Mobile Bottom Tab Bar */
.mobile-bar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  border-top: 1px solid var(--border-light);
  box-shadow: 0 -4px 20px rgba(16, 31, 69, 0.08);
  z-index: 95;
}

/* ==========================================================================
   Comprehensive Mobile-First Responsive System (320px to 1440px+)
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

/* Standard Tablet Transition (<= 900px) */
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
    padding: 0.65rem 1rem;
  }
  .nav-container {
    width: 100%;
    max-width: 100%;
    gap: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand-link {
    gap: 8px;
    min-width: 0;
    flex-shrink: 1;
  }
  .brand-logo-badge {
    width: 38px;
    height: 38px;
    font-size: 1.25rem;
    flex-shrink: 0;
  }
  .brand-text h1 {
    font-size: 1.05rem;
    white-space: nowrap;
  }
  .brand-text span {
    font-size: 0.62rem;
  }
  .nav-links {
    display: none !important;
  }
  .nav-actions {
    flex-shrink: 0;
  }
  .nav-actions .btn {
    display: none !important;
  }
  .nav-toggle {
    display: flex !important;
  }

  /* Hero Section */
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
  }
  .hero p.tagline {
    font-size: 0.98rem;
    margin-bottom: 1.75rem;
  }
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
  }
  .sport-tagline {
    font-size: 0.98rem;
  }
  .sport-hero-actions {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
  .sport-hero-actions .btn {
    width: 100%;
    justify-content: center;
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
    background: rgba(32, 169, 214, 0.12);
    border: 1px solid rgba(32, 169, 214, 0.3);
    border-radius: var(--radius-xs);
    font-size: 0.78rem;
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
    color: var(--text-secondary);
    gap: 3px;
    font-weight: 700;
    min-width: 48px;
    min-height: 44px;
    justify-content: center;
  }
  .mobile-bar a.active {
    color: var(--primary-cyan);
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

/* Extra Small Phones (380px - 480px) */
@media (max-width: 480px) {
  .container {
    padding-left: 0.9rem;
    padding-right: 0.9rem;
  }
  .brand-text span {
    font-size: 0.58rem;
    letter-spacing: 0.04em;
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

/* Compact Narrow Phones (<= 380px: standard small mobile) */
@media (max-width: 380px) {
  .navbar {
    padding: 0.55rem 0.75rem;
  }
  .brand-text span {
    display: none;
  }
  .brand-text h1 {
    font-size: 1rem;
  }
  .brand-logo-badge {
    width: 34px;
    height: 34px;
    font-size: 1.15rem;
  }
}

/* Extreme Narrow Phones (<= 340px: iPhone SE 1st gen / Fold Cover) */
@media (max-width: 340px) {
  .hero-stats {
    grid-template-columns: 1fr;
  }
  .brand-text h1 {
    font-size: 0.92rem;
  }
}

/* Touch Targets & Accessibility */
button, a.btn, .tab-btn, .mobile-bar a {
  touch-action: manipulation;
}

:focus-visible {
  outline: 2px solid var(--primary-cyan);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

fs.writeFileSync(path.join(__dirname, '..', 'assets', 'css', 'style.css'), cssContent);
console.log('1. Generated new assets/css/style.css with Jersey Theme and Responsive Design.');
