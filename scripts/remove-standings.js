const fs = require('fs');
const path = require('path');

// 1. Update index.html
const indexPath = path.join(__dirname, '..', 'index.html');
let index = fs.readFileSync(indexPath, 'utf8');

// Remove navbar link
index = index.replace(/\s*<li><a href="#leaderboard">Leaderboard<\/a><\/li>/, '');

// Remove section
index = index.replace(/\s*<!-- Overall Batch Leaderboard \/ Points Table -->[\s\S]*?<\/section>/, '');

// Update mobile bar
index = index.replace('<a href="#leaderboard"><span>📊</span> Scores</a>', '<a href="#schedule"><span>📅</span> Schedule</a>');

fs.writeFileSync(indexPath, index, 'utf8');
console.log('Updated index.html: Overall Batch Standings removed successfully.');

// 2. Update qr-codes.html
const qrPath = path.join(__dirname, '..', 'qr-codes.html');
let qr = fs.readFileSync(qrPath, 'utf8');
qr = qr.replace('<li><a href="index.html#leaderboard">Leaderboard</a></li>', '<li><a href="index.html#schedule">Schedule</a></li>');
qr = qr.replace('Scan for Overall Leaderboard, All 8 Sports & Fest Schedule', 'Scan for All 8 Sports & Fest Schedule');
fs.writeFileSync(qrPath, qr, 'utf8');
console.log('Updated qr-codes.html: Leaderboard link updated to Schedule.');

// 3. Update repair-index.js
const repPath = path.join(__dirname, 'repair-index.js');
if (fs.existsSync(repPath)) {
  let rep = fs.readFileSync(repPath, 'utf8');
  rep = rep.replace(/\s*<li><a href="#leaderboard">Leaderboard<\/a><\/li>/, '');
  rep = rep.replace(/\s*<!-- Overall Batch Leaderboard \/ Points Table -->[\s\S]*?<\/section>/, '');
  rep = rep.replace('<a href="#leaderboard"><span>📊</span> Scores</a>', '<a href="#schedule"><span>📅</span> Schedule</a>');
  fs.writeFileSync(repPath, rep, 'utf8');
  console.log('Updated scripts/repair-index.js.');
}
