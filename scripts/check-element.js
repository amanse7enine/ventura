const { execSync } = require('child_process');
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const cmd = `"${EDGE_PATH}" --headless --disable-gpu --dump-dom "http://localhost:3000/index.html"`;
const html = execSync(cmd).toString();
console.log('Includes id="navToggle":', html.includes('id="navToggle"'));
const toggleMatch = html.match(/<button[^>]*nav-toggle[^>]*>[\s\S]*?<\/button>/);
console.log('Toggle HTML:', toggleMatch ? toggleMatch[0] : 'NOT FOUND');
