const fs = require('fs');
const path = require('path');

// 1. Update assets/js/sports-data.js
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sportsDataContent = fs.readFileSync(sportsDataPath, 'utf8');
sportsDataContent = sportsDataContent.replace(/eventName:\s*"VENTURA 2024-25"/g, 'eventName: "VENTURA 2026-27"');
sportsDataContent = sportsDataContent.replace(/dates:\s*"October - November 2024"/g, 'dates: "October - November 2026"');
fs.writeFileSync(sportsDataPath, sportsDataContent, 'utf8');
console.log('1. Updated sports-data.js year branding.');

// 2. Update scripts/build-sports-pages.js
const buildScriptPath = path.join(__dirname, 'build-sports-pages.js');
let buildScriptContent = fs.readFileSync(buildScriptPath, 'utf8');
buildScriptContent = buildScriptContent.replace(/VENTURA 2024-25/g, 'VENTURA 2026-27');
buildScriptContent = buildScriptContent.replace(/Ventura 2024-25/g, 'Ventura 2026-27');
buildScriptContent = buildScriptContent.replace(/2024-2025/g, '2026-2027');
buildScriptContent = buildScriptContent.replace(/2024–2025/g, '2026–2027');
fs.writeFileSync(buildScriptPath, buildScriptContent, 'utf8');
console.log('2. Updated build-sports-pages.js year branding.');

// 3. Update scripts/generate-rulebooks.js
const rulebooksScriptPath = path.join(__dirname, 'generate-rulebooks.js');
let rulebooksScriptContent = fs.readFileSync(rulebooksScriptPath, 'utf8');
rulebooksScriptContent = rulebooksScriptContent.replace(/Ventura 2024-25/g, 'Ventura 2026-27');
rulebooksScriptContent = rulebooksScriptContent.replace(/VENTURA 2024-25/g, 'VENTURA 2026-27');
rulebooksScriptContent = rulebooksScriptContent.replace(/2024-2025/g, '2026-2027');
rulebooksScriptContent = rulebooksScriptContent.replace(/2024–2025/g, '2026–2027');
fs.writeFileSync(rulebooksScriptPath, rulebooksScriptContent, 'utf8');
console.log('3. Updated generate-rulebooks.js year branding.');

// 4. Update index.html
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
let indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');
indexHtmlContent = indexHtmlContent.replace(/VENTURA 2024-25/g, 'VENTURA 2026-27');
indexHtmlContent = indexHtmlContent.replace(/Ventura 2024-25/g, 'Ventura 2026-27');
indexHtmlContent = indexHtmlContent.replace(/2024-2025/g, '2026-2027');
indexHtmlContent = indexHtmlContent.replace(/2024–2025/g, '2026–2027');
fs.writeFileSync(indexHtmlPath, indexHtmlContent, 'utf8');
console.log('4. Updated index.html year branding.');

// 5. Update qr-codes.html
const qrHtmlPath = path.join(__dirname, '..', 'qr-codes.html');
let qrHtmlContent = fs.readFileSync(qrHtmlPath, 'utf8');
qrHtmlContent = qrHtmlContent.replace(/VENTURA 2024-25/g, 'VENTURA 2026-27');
qrHtmlContent = qrHtmlContent.replace(/Ventura 2024-25/g, 'Ventura 2026-27');
qrHtmlContent = qrHtmlContent.replace(/2024-2025/g, '2026-2027');
qrHtmlContent = qrHtmlContent.replace(/2024–2025/g, '2026–2027');
fs.writeFileSync(qrHtmlPath, qrHtmlContent, 'utf8');
console.log('5. Updated qr-codes.html year branding.');
