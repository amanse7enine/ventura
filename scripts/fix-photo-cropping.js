const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('--- Fixing Photo Cropping Across All Screen Sizes (Phone, Laptop, TV) ---');

// 1. Update assets/css/style.css
let css = fs.readFileSync(path.join(__dirname, '..', 'assets', 'css', 'style.css'), 'utf8');

// Replace .sport-card-header and .sport-card-img
const oldCardHeaderPattern = /\.sport-card-header\s*\{[\s\S]*?\.sport-card-overlay\s*\{[\s\S]*?\}/;
const newCardHeaderCss = `.sport-card-header {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  min-height: 200px;
  overflow: hidden;
  background: radial-gradient(circle at center, #1a2f5a 0%, #0c1833 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sport-card-img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: block;
  z-index: 1;
  cursor: pointer;
}

.sport-card:hover .sport-card-img {
  transform: scale(1.05);
}

.sport-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 31, 69, 0.1) 0%, transparent 50%, rgba(16, 31, 69, 0.25) 100%);
  pointer-events: none;
  z-index: 2;
}`;

css = css.replace(oldCardHeaderPattern, newCardHeaderCss);

// Replace gallery-card and gallery-grid styles
const oldGalleryPattern = /\.gallery-grid\s*\{[\s\S]*?\.gallery-caption\s*\{[\s\S]*?\}/;
const newGalleryCss = `.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
}

.gallery-card {
  background: #ffffff;
  border: 1.5px solid var(--border-light);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.gallery-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary-cyan);
  box-shadow: var(--shadow-hover);
}

.gallery-card-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 10;
  min-height: 190px;
  background: radial-gradient(circle at center, #1a2f5a 0%, #0c1833 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.gallery-card-img-wrap img, .gallery-card img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;
  cursor: pointer;
}

.gallery-card:hover img {
  transform: scale(1.05);
}

.gallery-caption {
  padding: 12px 14px;
  background: #ffffff;
  border-top: 1px solid var(--border-light);
  font-size: 0.85rem;
  color: var(--text-main);
  display: flex;
  flex-direction: column;
  gap: 3px;
}`;

css = css.replace(oldGalleryPattern, newGalleryCss);

// Add Lightbox CSS for full-screen photo viewing on click
const lightboxCss = `
/* ==========================================================================
   Full Photo Lightbox Modal (Tap to View Full Photo Uncropped)
   ========================================================================== */
.photo-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(10, 18, 38, 0.94);
  backdrop-filter: blur(12px);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-lightbox.active {
  display: flex;
  opacity: 1;
}

.photo-lightbox-content {
  position: relative;
  max-width: 92vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-lightbox-img {
  max-width: 100%;
  max-height: 82vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-md);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.15);
}

.photo-lightbox-caption {
  margin-top: 12px;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: center;
  max-width: 600px;
}

.photo-lightbox-close {
  position: absolute;
  top: -45px;
  right: 0;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.photo-lightbox-close:hover {
  background: var(--primary-cyan);
  color: #ffffff;
  transform: scale(1.1);
}
`;

if (!css.includes('.photo-lightbox')) {
  css += '\n' + lightboxCss;
}

fs.writeFileSync(path.join(__dirname, '..', 'assets', 'css', 'style.css'), css);
console.log('✓ Updated assets/css/style.css with uncropped contain aspect ratio and lightbox styling');

// 2. Update index.html action photo gallery cards
let indexHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const oldIndexGallery = indexHtml.match(/<!-- Action Gallery \(Campus Highlights\) -->[\s\S]*?<\/section>/);
if (oldIndexGallery) {
  const newIndexGallery = `<!-- Action Gallery (Campus Highlights) -->
  <section class="container" style="padding-top: 3.5rem; margin-bottom: 2rem;">
    <div class="section-title">
      <div>
        <div class="hero-pill" style="margin-bottom: 0.6rem;">📸 Campus Ground Moments</div>
        <h3>Ventura Action Highlights</h3>
        <p>Real tournament moments from IIIT Vadodara sports grounds and arenas. Click any photo to expand full view.</p>
      </div>
    </div>

    <div class="gallery-grid">
      <div class="gallery-card">
        <div class="gallery-card-img-wrap">
          <img src="assets/images/real-football-team.jpg" alt="IIIT Vadodara Football Squad" class="clickable-photo" data-caption="IIIT Vadodara 11-A-Side Football Squad at CRPF Ground">
        </div>
        <div class="gallery-caption">
          <strong style="color: var(--deep-navy); font-size: 0.92rem; display: block;">⚽ IIIT Vadodara Football Squad</strong>
          <span style="font-size: 0.82rem; color: var(--text-secondary);">11-A-Side Team Lineup at CRPF Ground</span>
        </div>
      </div>

      <div class="gallery-card">
        <div class="gallery-card-img-wrap">
          <img src="assets/images/real-table-tennis.jpg" alt="Table Tennis Action" class="clickable-photo" data-caption="Table Tennis Championship Matchplay Focus">
        </div>
        <div class="gallery-caption">
          <strong style="color: var(--deep-navy); font-size: 0.92rem; display: block;">🏓 Table Tennis Match Focus</strong>
          <span style="font-size: 0.82rem; color: var(--text-secondary);">Intense Arena Action & Fast Smashes</span>
        </div>
      </div>

      <div class="gallery-card">
        <div class="gallery-card-img-wrap">
          <img src="assets/images/real-carrom.jpg" alt="Carrom Tournament Board Action" class="clickable-photo" data-caption="Inter-Batch Carrom Clash - Singles & Doubles Striker Showdown">
        </div>
        <div class="gallery-caption">
          <strong style="color: var(--deep-navy); font-size: 0.92rem; display: block;">🎯 Inter-Batch Carrom Clash</strong>
          <span style="font-size: 0.82rem; color: var(--text-secondary);">Singles & Doubles Striker Showdown</span>
        </div>
      </div>

      <div class="gallery-card">
        <div class="gallery-card-img-wrap">
          <img src="assets/images/real-champions-team.jpg" alt="Girls Championship Winners" class="clickable-photo" data-caption="Girls Championship Winners Celebrating Victory Under Floodlights">
        </div>
        <div class="gallery-caption">
          <strong style="color: var(--deep-navy); font-size: 0.92rem; display: block;">🏆 Champions with Trophies</strong>
          <span style="font-size: 0.82rem; color: var(--text-secondary);">Celebrating Victory Under Floodlights</span>
        </div>
      </div>

      <div class="gallery-card">
        <div class="gallery-card-img-wrap">
          <img src="assets/images/real-trophy-winner.jpg" alt="Gold Trophy Celebration" class="clickable-photo" data-caption="Ventura Gold Champion - Proud Trophy Lift at Night Ground">
        </div>
        <div class="gallery-caption">
          <strong style="color: var(--deep-navy); font-size: 0.92rem; display: block;">🥇 Ventura Gold Champion</strong>
          <span style="font-size: 0.82rem; color: var(--text-secondary);">Proud Trophy Lift at Night Ground</span>
        </div>
      </div>
    </div>
  </section>`;
  indexHtml = indexHtml.replace(oldIndexGallery[0], newIndexGallery);
}

// Add Lightbox HTML container to index.html before </body>
if (!indexHtml.includes('id="photoLightbox"')) {
  const lightboxHtml = `
  <!-- Fullscreen Photo Lightbox -->
  <div class="photo-lightbox" id="photoLightbox" role="dialog" aria-modal="true" aria-label="Photo Lightbox">
    <div class="photo-lightbox-content">
      <button class="photo-lightbox-close" id="lightboxClose" aria-label="Close Lightbox">✕</button>
      <img src="" alt="Enlarged View" class="photo-lightbox-img" id="lightboxImg">
      <div class="photo-lightbox-caption" id="lightboxCaption"></div>
    </div>
  </div>
  `;
  indexHtml = indexHtml.replace('</body>', lightboxHtml + '\n</body>');
}

fs.writeFileSync(path.join(__dirname, '..', 'index.html'), indexHtml);
console.log('✓ Updated index.html with uncropped gallery cards and lightbox');

// 3. Update build-sports-pages.js so gallery cards use .gallery-card-img-wrap and lightbox container
let buildScript = fs.readFileSync(path.join(__dirname, '..', 'scripts', 'build-sports-pages.js'), 'utf8');

// Replace gallery rendering in build-sports-pages.js
buildScript = buildScript.replace(
  /<div class="gallery-card">\s*<img src="\${g\.url}" alt="\${g\.caption}" loading="lazy">\s*<div class="gallery-caption">\${g\.caption}<\/div>\s*<\/div>/g,
  `<div class="gallery-card">
              <div class="gallery-card-img-wrap">
                <img src="\${g.url}" alt="\${g.caption}" class="clickable-photo" data-caption="\${g.caption}" loading="lazy">
              </div>
              <div class="gallery-caption">\${g.caption}</div>
            </div>`
);

// Add lightbox modal before </body> in sport pages template
if (!buildScript.includes('id="photoLightbox"')) {
  const sportLightboxHtml = `
  <!-- Fullscreen Photo Lightbox -->
  <div class="photo-lightbox" id="photoLightbox" role="dialog" aria-modal="true" aria-label="Photo Lightbox">
    <div class="photo-lightbox-content">
      <button class="photo-lightbox-close" id="lightboxClose" aria-label="Close Lightbox">✕</button>
      <img src="" alt="Enlarged View" class="photo-lightbox-img" id="lightboxImg">
      <div class="photo-lightbox-caption" id="lightboxCaption"></div>
    </div>
  </div>
  `;
  buildScript = buildScript.replace('</body>', sportLightboxHtml + '\n</body>');
}

fs.writeFileSync(path.join(__dirname, '..', 'scripts', 'build-sports-pages.js'), buildScript);
console.log('✓ Updated scripts/build-sports-pages.js');

// 4. Update assets/js/app.js to initialize photo lightbox
let appJs = fs.readFileSync(path.join(__dirname, '..', 'assets', 'js', 'app.js'), 'utf8');

const lightboxJs = `
/**
 * Uncropped Photo Lightbox Viewer (Full Visibility on Phone, Laptop, TV)
 */
function initPhotoLightbox() {
  const lightbox = document.getElementById('photoLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg) return;

  function openPhoto(src, caption) {
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePhoto() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach to all sport-card images and gallery images
  document.querySelectorAll('.sport-card-img, .clickable-photo, .gallery-card img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      const caption = img.getAttribute('data-caption') || img.alt || '';
      openPhoto(img.src, caption);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closePhoto);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxImg.parentElement) {
      closePhoto();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closePhoto();
    }
  });
}
`;

if (!appJs.includes('initPhotoLightbox')) {
  appJs = appJs.replace('initMobileNav();', 'initMobileNav();\n  initPhotoLightbox();');
  appJs += '\n' + lightboxJs;
}

fs.writeFileSync(path.join(__dirname, '..', 'assets', 'js', 'app.js'), appJs);
console.log('✓ Updated assets/js/app.js with photo lightbox');

// 5. Rebuild all 8 sports pages
console.log('Regenerating all sports pages...');
execSync('node scripts/build-sports-pages.js', { stdio: 'inherit' });
console.log('✓ Successfully completed photo cropping fixes!');
