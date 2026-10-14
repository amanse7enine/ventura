const fs = require('fs');
const { execSync } = require('child_process');
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const testHtml = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body style="background:#040711; margin:0; padding:0;">
  <nav class="navbar">
    <div class="nav-container">
      <a href="index.html" class="brand-link">
        <div class="brand-logo-badge">V</div>
        <div class="brand-text">
          <h1>VENTURA <span>IIIT Vadodara</span></h1>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="#sports">All Sports</a></li>
      </ul>
      <div class="nav-actions">
        <a href="qr-codes.html" class="btn btn-secondary btn-sm">Scan / QR Hub</a>
        <a href="#sports" class="btn btn-primary btn-sm">Register Team</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>

  <div id="result" style="color:white; font-size:16px; padding:20px;"></div>

  <script>
    const elData = [];
    document.querySelectorAll('.navbar *').forEach(el => {
      const r = el.getBoundingClientRect();
      const s = window.getComputedStyle(el);
      if (r.width > 0 || r.height > 0) {
        elData.push({
          tag: el.tagName,
          class: el.className,
          left: r.left,
          width: r.width,
          right: r.right,
          display: s.display
        });
      }
    });
    document.getElementById('result').innerText = JSON.stringify(elData, null, 2);
  </script>
</body>
</html>
`;

fs.writeFileSync('test-nav-result.html', testHtml);

const out = execSync(`"${EDGE_PATH}" --headless --disable-gpu --window-size=375,812 --dump-dom "http://localhost:3000/test-nav-result.html"`).toString();
const resMatch = out.match(/<div id="result"[^>]*>([\s\S]*?)<\/div>/);
console.log('Result:\n', resMatch ? resMatch[1] : 'No match');
