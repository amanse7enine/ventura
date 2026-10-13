const fs = require('fs');
const path = require('path');

const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sd = fs.readFileSync(sportsDataPath, 'utf8');

const fbGallery = `    fixtures: [],
    gallery: [
      { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80", caption: "Evening Match Under Floodlights" },
      { url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80", caption: "Match Football on Field Turf" },
      { url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80", caption: "High Intensity Scrimmage & Striker Attack" },
      { url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=800&q=80", caption: "Team Spirit & Goal Celebration" }
    ],`;

const oldFbFixturesRegex = /fixtures:\s*\[[\s\S]*?id:\s*"FB-0[0-9]"[\s\S]*?\],/;
sd = sd.replace(oldFbFixturesRegex, fbGallery);
fs.writeFileSync(sportsDataPath, sd, 'utf8');
console.log('Successfully set football gallery and empty fixtures in sports-data.js!');
