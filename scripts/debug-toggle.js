const http = require('http');

// Let's do a simple inspection by checking if style.css was loaded by index.html or if cached
const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
console.log('CSS link in index.html:', index.match(/<link[^>]*rel="stylesheet"[^>]*>/g));

// Let's check the position of navToggle
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const toggleBlock = css.substring(css.indexOf('.nav-toggle {'), css.indexOf('.nav-toggle {') + 300);
console.log('toggleBlock:\n', toggleBlock);
