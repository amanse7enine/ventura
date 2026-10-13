const fs = require('fs');
const path = require('path');

// 1. Update assets/js/sports-data.js for Badminton
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sportsDataContent = fs.readFileSync(sportsDataPath, 'utf8');

// Update Badminton heroImage & insert gallery
sportsDataContent = sportsDataContent.replace(
  /heroImage:\s*"https:\/\/images\.unsplash\.com\/photo-1626224583764-f87db24ac4ea[^"]*",/,
  `heroImage: "assets/images/badminton-smash.jpg",
    gallery: [
      { url: "assets/images/badminton-smash.jpg", caption: "Explosive Jump Smash on Indoor Wooden Court" },
      { url: "assets/images/badminton-shuttle.jpg", caption: "Tournament Shuttlecock & Professional Racquet Strings" },
      { url: "assets/images/badminton-rally.jpg", caption: "High-Speed Reflexes & Backhand Return" },
      { url: "assets/images/badminton-match.jpg", caption: "Competitive Indoor Arena Matchplay Under Lights" }
    ],`
);

fs.writeFileSync(sportsDataPath, sportsDataContent, 'utf8');
console.log('1. Updated sports-data.js with badminton gallery and local heroImage.');

// 2. Update index.html
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
let indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Update badminton card image
indexHtmlContent = indexHtmlContent.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-1626224583764-f87db24ac4ea[^"]*" alt="Badminton" class="sport-card-img">/,
  '<img src="assets/images/badminton-smash.jpg" alt="Badminton" class="sport-card-img">'
);

// Add Badminton photo to the Campus Moments gallery if not already present
if (!indexHtmlContent.includes('badminton-smash.jpg') && indexHtmlContent.includes('Real Ventura Action & Championship Spirit')) {
  const badmintonCardHtml = `
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">
        <div style="height: 190px; overflow: hidden;">
          <img src="assets/images/badminton-smash.jpg" alt="Badminton Action Smash" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 10px 14px;">
          <strong style="color: #fff; font-size: 0.88rem; display: block;">🏸 Badminton Jump Smash</strong>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Aloka Sports Academy Wooden Arena</span>
        </div>
      </div>
  `;
  indexHtmlContent = indexHtmlContent.replace(
    '<div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">\n        <div style="height: 190px; overflow: hidden;">\n          <img src="assets/images/real-football-team.jpg"',
    `${badmintonCardHtml}\n      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">\n        <div style="height: 190px; overflow: hidden;">\n          <img src="assets/images/real-football-team.jpg"`
  );
}

fs.writeFileSync(indexHtmlPath, indexHtmlContent, 'utf8');
console.log('2. Updated index.html with badminton image.');
