const fs = require('fs');
const path = require('path');

// 1. Update assets/js/sports-data.js
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sd = fs.readFileSync(sportsDataPath, 'utf8');

// Update Cricket heroImage and add gallery
const cricketHeroOld = 'heroImage: "https://images.unsplash.com/photo-1531415074868-036b107e775a?auto=format&fit=crop&w=1200&q=80",';
const cricketHeroNew = 'heroImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",';

const cricketGallery = `    gallery: [
      { url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80", caption: "Match Atmosphere & Ground Under Lights" },
      { url: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=800&q=80", caption: "Willow, Helmets & Match Gear" },
      { url: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=800&q=80", caption: "Cricket Ball on Match Pitch" },
      { url: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&w=800&q=80", caption: "Wickets, Stumps & Bowling Delivery" }
    ],`;

sd = sd.replace(cricketHeroOld, cricketHeroNew);
if (!sd.includes('Willow, Helmets & Match Gear')) {
  sd = sd.replace('fixtures: [],', 'fixtures: [],\n' + cricketGallery);
}

// Update Football heroImage and add gallery
const fbHeroOld = 'heroImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",';
const fbHeroNew = 'heroImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",';

const fbGallery = `    gallery: [
      { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80", caption: "Evening Match Under Floodlights" },
      { url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80", caption: "Match Football on Turf" },
      { url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80", caption: "High Intensity Scrimmage & Striker Attack" },
      { url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=800&q=80", caption: "Team Spirit & Goal Celebration" }
    ],`;

sd = sd.replace(fbHeroOld, fbHeroNew);
// Clean football fixtures and add gallery
sd = sd.replace(/fixtures:\s*\[[\s\S]*?\],\s*coordinators:/, 'fixtures: [],\n' + fbGallery + '\n    coordinators:');

fs.writeFileSync(sportsDataPath, sd, 'utf8');
console.log('Updated sports-data.js with working hero images and 4 gallery photos for Cricket & Football.');

// 2. Update index.html card images
const indexPath = path.join(__dirname, '..', 'index.html');
let index = fs.readFileSync(indexPath, 'utf8');
index = index.replace(
  'https://images.unsplash.com/photo-1531415074868-036b107e775a?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=700&q=80'
);
index = index.replace(
  'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=700&q=80'
);
fs.writeFileSync(indexPath, index, 'utf8');
console.log('Updated index.html Cricket and Football card images to 200 OK photos.');

// 3. Update repair-index.js
const repPath = path.join(__dirname, 'repair-index.js');
if (fs.existsSync(repPath)) {
  let rep = fs.readFileSync(repPath, 'utf8');
  rep = rep.replace(
    'https://images.unsplash.com/photo-1531415074868-036b107e775a?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=700&q=80'
  );
  rep = rep.replace(
    'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=700&q=80'
  );
  fs.writeFileSync(repPath, rep, 'utf8');
}

// 4. Update assets/css/style.css to include gallery styles
const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');
if (!css.includes('.gallery-grid')) {
  const galleryCss = `
/* Action Photo Gallery (4 Photos) */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
}

.gallery-card {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  aspect-ratio: 4 / 3;
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
  border-color: rgba(255, 255, 255, 0.3);
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.gallery-card:hover img {
  transform: scale(1.06);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem 0.85rem 0.75rem;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 65%, transparent 100%);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
`;
  css += galleryCss;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Added gallery CSS to style.css.');
}

// 5. Update scripts/build-sports-pages.js to render gallery
const buildPath = path.join(__dirname, 'build-sports-pages.js');
let buildCode = fs.readFileSync(buildPath, 'utf8');

// Add gallery tab button to tabs-nav
const oldTabsNav = `<button class="tab-btn" data-tab="tab-coordinators">👥 Coordinators</button>
      <button class="tab-btn" data-tab="tab-qr">📱 Scan / Share QR Code</button>`;

const newTabsNav = `<button class="tab-btn" data-tab="tab-coordinators">👥 Coordinators</button>
      \${sport.gallery && sport.gallery.length > 0 ? '<button class=\"tab-btn\" data-tab=\"tab-gallery\">📸 Action Gallery (4)</button>' : ''}
      <button class="tab-btn" data-tab="tab-qr">📱 Scan / Share QR Code</button>`;

if (buildCode.includes(oldTabsNav)) {
  buildCode = buildCode.replace(oldTabsNav, newTabsNav);
}

// Add gallery tab pane and preview section
const galleryPaneTemplate = `
        \${sport.gallery && sport.gallery.length > 0 ? \`
        <!-- Tab: Action Gallery -->
        <div id="tab-gallery" class="tab-pane" style="display: none;">
          <div class="card-box">
            <h3><span>📸</span> Action Gallery & Highlights</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem;">
              Championship action shots and ground moments for \${sport.name}.
            </p>
            <div class="gallery-grid">
              \${sport.gallery.map(g => \`
                <div class="gallery-card">
                  <img src="\${g.url}" alt="\${g.caption}" loading="lazy">
                  <div class="gallery-caption">\${g.caption}</div>
                </div>
              \`).join('')}
            </div>
          </div>
        </div>
        \` : ''}
`;

const oldCoordinatorsTabEnd = `</div>
        </div>

        <!-- Tab 5: QR Code Details -->`;

const newCoordinatorsTabEnd = `</div>
        </div>
${galleryPaneTemplate}
        <!-- Tab 5: QR Code Details -->`;

if (buildCode.includes(oldCoordinatorsTabEnd)) {
  buildCode = buildCode.replace(oldCoordinatorsTabEnd, newCoordinatorsTabEnd);
}

// Also add a prominent 4-photo preview card below the tabs if gallery exists
const galleryPreviewBlock = `
        \${sport.gallery && sport.gallery.length > 0 ? \`
        <!-- Prominent 4-Photo Showcase -->
        <div class="card-box" style="margin-top: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 8px;">
            <h3 style="margin: 0;"><span>📸</span> \${sport.name} Action Highlights (4 Photos)</h3>
            <span style="font-size: 0.8rem; color: var(--accent-orange); font-weight: 600;">Ventura 2024-25</span>
          </div>
          <div class="gallery-grid">
            \${sport.gallery.map(g => \`
              <div class="gallery-card">
                <img src="\${g.url}" alt="\${g.caption}" loading="lazy">
                <div class="gallery-caption">\${g.caption}</div>
              </div>
            \`).join('')}
          </div>
        </div>
        \` : ''}
`;

const oldMainColEnd = `</div>

      <!-- Secondary Column: QR Poster Card & Fast Links -->`;

if (!buildCode.includes('Action Highlights (4 Photos)')) {
  buildCode = buildCode.replace(oldMainColEnd, galleryPreviewBlock + '\n      </div>\n\n      <!-- Secondary Column: QR Poster Card & Fast Links -->');
}

fs.writeFileSync(buildPath, buildCode, 'utf8');
console.log('Updated scripts/build-sports-pages.js with gallery tab and 4-photo showcase.');
