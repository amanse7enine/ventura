const fs = require('fs');
const path = require('path');

// 1. Update assets/js/sports-data.js
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sportsDataContent = fs.readFileSync(sportsDataPath, 'utf8');

// Update Football images
sportsDataContent = sportsDataContent.replace(
  /heroImage:\s*"https:\/\/images\.unsplash\.com\/photo-1574629810360-7efbbe195018[^"]*"/,
  'heroImage: "assets/images/real-football-team.jpg"'
);
sportsDataContent = sportsDataContent.replace(
  /gallery:\s*\[[\s\S]*?\],\s*coordinators:/,
  `gallery: [
      { url: "assets/images/real-football-team.jpg", caption: "IIIT Vadodara Football Squad & Team Lineup" },
      { url: "assets/images/real-trophy-winner.jpg", caption: "Championship Trophy Celebration Under Lights" }
    ],
    coordinators:`
);

// Update Athletics images
sportsDataContent = sportsDataContent.replace(
  /heroImage:\s*"https:\/\/images\.unsplash\.com\/photo-1461896836934-ffe607ba8211[^"]*"/,
  'heroImage: "assets/images/real-champions-team.jpg"'
);
// Insert gallery for Athletics if not present
if (!sportsDataContent.includes('real-champions-team.jpg", caption: "IIIT Vadodara Champions with Trophies')) {
  sportsDataContent = sportsDataContent.replace(
    'fixtures: [],\n    coordinators: [\n      { name: "Sarthak",',
    `fixtures: [],
    gallery: [
      { url: "assets/images/real-champions-team.jpg", caption: "IIIT Vadodara Champions with Trophies" },
      { url: "assets/images/real-trophy-winner.jpg", caption: "Gold Trophy Champion Celebration on Field" }
    ],
    coordinators: [
      { name: "Sarthak",`
  );
}

// Update Volleyball images
sportsDataContent = sportsDataContent.replace(
  /heroImage:\s*"https:\/\/images\.unsplash\.com\/photo-1612872087720-bb876e2e67d1[^"]*"/,
  'heroImage: "assets/images/real-trophy-winner.jpg"'
);
if (!sportsDataContent.includes('real-trophy-winner.jpg", caption: "Ventura Championship Trophy Winner')) {
  sportsDataContent = sportsDataContent.replace(
    'fixtures: [],\n    coordinators: [\n      { name: "Aditya",',
    `fixtures: [],
    gallery: [
      { url: "assets/images/real-trophy-winner.jpg", caption: "Ventura Championship Trophy Winner" },
      { url: "assets/images/real-champions-team.jpg", caption: "IIIT Vadodara Winners with Trophies" }
    ],
    coordinators: [
      { name: "Aditya",`
  );
}

// Update Carrom images
sportsDataContent = sportsDataContent.replace(
  /heroImage:\s*"https:\/\/images\.unsplash\.com\/photo-1611195974226-a6a9be9dd763[^"]*"/,
  'heroImage: "assets/images/real-carrom.jpg"'
);
if (!sportsDataContent.includes('real-carrom.jpg", caption: "Inter-Batch Carrom Tournament Matchplay')) {
  sportsDataContent = sportsDataContent.replace(
    'fixtures: [],\n    coordinators: [\n      { name: "Harshit Dhaker",',
    `fixtures: [],
    gallery: [
      { url: "assets/images/real-carrom.jpg", caption: "Inter-Batch Carrom Tournament Matchplay" },
      { url: "assets/images/real-trophy-winner.jpg", caption: "Ventura Trophy Celebration" }
    ],
    coordinators: [
      { name: "Harshit Dhaker",`
  );
}

// Update Table Tennis images
sportsDataContent = sportsDataContent.replace(
  /heroImage:\s*"https:\/\/images\.unsplash\.com\/photo-1534158914592-062992fbe900[^"]*"/,
  'heroImage: "assets/images/real-table-tennis.jpg"'
);
if (!sportsDataContent.includes('real-table-tennis.jpg", caption: "Table Tennis Matchplay at Campus Arena')) {
  sportsDataContent = sportsDataContent.replace(
    'fixtures: [],\n    coordinators: [\n      { name: "Bhavya Prajapati",',
    `fixtures: [],
    gallery: [
      { url: "assets/images/real-table-tennis.jpg", caption: "Table Tennis Matchplay at Campus Arena" },
      { url: "assets/images/real-champions-team.jpg", caption: "IIIT Vadodara Championship Team" }
    ],
    coordinators: [
      { name: "Bhavya Prajapati",`
  );
}

fs.writeFileSync(sportsDataPath, sportsDataContent, 'utf8');
console.log('1. Updated sports-data.js with real photos in heroImages & galleries.');

// 2. Update index.html
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
let indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace card images with real photos
indexHtmlContent = indexHtmlContent.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-1461896836934-ffe607ba8211[^"]*" alt="Athletics" class="sport-card-img">/,
  '<img src="assets/images/real-champions-team.jpg" alt="Athletics" class="sport-card-img">'
);

indexHtmlContent = indexHtmlContent.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-1574629810360-7efbbe195018[^"]*" alt="Football" class="sport-card-img">/,
  '<img src="assets/images/real-football-team.jpg" alt="Football" class="sport-card-img">'
);

indexHtmlContent = indexHtmlContent.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-1612872087720-bb876e2e67d1[^"]*" alt="Volleyball" class="sport-card-img">/,
  '<img src="assets/images/real-trophy-winner.jpg" alt="Volleyball" class="sport-card-img">'
);

indexHtmlContent = indexHtmlContent.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-1611195974226-a6a9be9dd763[^"]*" alt="Carrom" class="sport-card-img">/,
  '<img src="assets/images/real-carrom.jpg" alt="Carrom" class="sport-card-img">'
);

indexHtmlContent = indexHtmlContent.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-1534158914592-062992fbe900[^"]*" alt="Table Tennis" class="sport-card-img">/,
  '<img src="assets/images/real-table-tennis.jpg" alt="Table Tennis" class="sport-card-img">'
);

// Update taglines on cards
indexHtmlContent = indexHtmlContent.replace(
  '7v7 clashes on CRPF Ground (25 Oct) and under lights on IIT Ground (01 Nov).',
  '11-A-Side Tournament with 8 Teams in 2 Groups & Player Auction on CRPF & IIT Grounds.'
);

indexHtmlContent = indexHtmlContent.replace(
  'Track & Field, Gym events & Tug of War (Team & Solo challenge).',
  'Track & Field Sprints, Relays & 2-Pool Tug of War (Best of 3 Pulls).'
);

// Add Campus Action Highlights section before schedule if not already present
const campusMomentsSection = `
  <!-- Real Campus Action Highlights Section -->
  <section class="container" style="margin-bottom: 4rem;">
    <div class="section-title">
      <div>
        <span class="hero-pill" style="margin-bottom: 0.5rem; background: rgba(56, 189, 248, 0.1); border-color: rgba(56, 189, 248, 0.3); color: #38bdf8;">📸 Official Campus Moments</span>
        <h3>Real Ventura Action & Championship Spirit</h3>
        <p>Glimpses of IIIT Vadodara students battling on courts, boards, and grounds.</p>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">
        <div style="height: 190px; overflow: hidden;">
          <img src="assets/images/real-football-team.jpg" alt="IIIT Vadodara Football Squad" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 10px 14px;">
          <strong style="color: #fff; font-size: 0.88rem; display: block;">⚽ IIIT Vadodara Football Squad</strong>
          <span style="font-size: 0.78rem; color: var(--text-muted);">11-A-Side Team Lineup at CRPF Ground</span>
        </div>
      </div>

      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">
        <div style="height: 190px; overflow: hidden;">
          <img src="assets/images/real-table-tennis.jpg" alt="Table Tennis Action" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 10px 14px;">
          <strong style="color: #fff; font-size: 0.88rem; display: block;">🏓 Table Tennis Match Focus</strong>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Intense Arena Action & Fast Smashes</span>
        </div>
      </div>

      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">
        <div style="height: 190px; overflow: hidden;">
          <img src="assets/images/real-carrom.jpg" alt="Carrom Tournament Board Action" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 10px 14px;">
          <strong style="color: #fff; font-size: 0.88rem; display: block;">🎯 Inter-Batch Carrom Clash</strong>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Singles & Doubles Striker Showdown</span>
        </div>
      </div>

      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">
        <div style="height: 190px; overflow: hidden;">
          <img src="assets/images/real-champions-team.jpg" alt="Girls Championship Winners" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 10px 14px;">
          <strong style="color: #fff; font-size: 0.88rem; display: block;">🏆 Champions with Trophies</strong>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Celebrating Victory Under Floodlights</span>
        </div>
      </div>

      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">
        <div style="height: 190px; overflow: hidden;">
          <img src="assets/images/real-trophy-winner.jpg" alt="Gold Trophy Celebration" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 10px 14px;">
          <strong style="color: #fff; font-size: 0.88rem; display: block;">🥇 Ventura Gold Champion</strong>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Proud Trophy Lift at Night Ground</span>
        </div>
      </div>
    </div>
  </section>
`;

if (!indexHtmlContent.includes('Real Ventura Action & Championship Spirit')) {
  indexHtmlContent = indexHtmlContent.replace(
    '  <!-- Ventura Venue & Schedule Overview -->',
    `${campusMomentsSection}\n  <!-- Ventura Venue & Schedule Overview -->`
  );
}

fs.writeFileSync(indexHtmlPath, indexHtmlContent, 'utf8');
console.log('2. Updated index.html with real student photos on cards & new Campus Moments gallery.');
