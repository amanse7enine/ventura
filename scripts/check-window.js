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
  <div id="result"></div>
  <script>
    document.getElementById('result').innerText = JSON.stringify({
      innerWidth: window.innerWidth,
      outerWidth: window.outerWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyClientWidth: document.body.clientWidth,
      dpr: window.devicePixelRatio
    });
  </script>
</body>
</html>
`;

fs.writeFileSync('test-nav-result.html', testHtml);

const out = execSync(`"${EDGE_PATH}" --headless --disable-gpu --window-size=375,812 --dump-dom "http://localhost:3000/test-nav-result.html"`).toString();
const resMatch = out.match(/<div id="result"[^>]*>([\s\S]*?)<\/div>/);
console.log('Window Dimensions:\n', resMatch ? resMatch[1] : 'No match');
