const fs = require('fs');
const content = fs.readFileSync('assets/js/sports-data.js', 'utf8');

const fn = new Function(content + '\nreturn SPORTS_DATA;');
const SPORTS_DATA = fn();

for (const [key, sport] of Object.entries(SPORTS_DATA)) {
  console.log(`=== ${sport.name} (${key}) ===`);
  sport.coordinators.forEach(c => {
    console.log(`  ${c.name} [${c.role}] - Phone: ${c.phone || 'NONE'} | Email: ${c.email || 'NONE'}`);
  });
}
