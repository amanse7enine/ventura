const fs = require('fs');

const files = ['athletics.html', 'chess.html', 'table-tennis.html'];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log('=== ' + file + ' ===');
  const formLinks = content.match(/href="https:\/\/(?:docs\.google\.com\/forms|forms\.gle)[^"]+"/g) || [];
  console.log('Form Links count:', formLinks.length);
  [...new Set(formLinks)].forEach(l => console.log('  ', l));
  const phones = content.match(/(?:99580\s*30019|72969\s*14433|83294\s*55093|70503\s*57190|74094\s*02485|81808\s*74428)/g) || [];
  console.log('Phones found:', [...new Set(phones)]);
});
