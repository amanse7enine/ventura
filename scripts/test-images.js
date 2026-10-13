const fs = require('fs');
const https = require('https');

const index = fs.readFileSync('index.html', 'utf8');
const regex = /<img[^>]+src="([^"]+)"[^>]+class="sport-card-img"/g;
let m;
const urls = [];
while ((m = regex.exec(index)) !== null) {
  urls.push(m[1]);
}

console.log('Found', urls.length, 'card images:');
let pending = urls.length;
urls.forEach((u, i) => {
  https.get(u, res => {
    console.log(i + 1, res.statusCode, u.substring(0, 50));
    if (--pending === 0) process.exit(0);
  }).on('error', err => {
    console.log(i + 1, 'ERR:', err.message);
    if (--pending === 0) process.exit(0);
  });
});
