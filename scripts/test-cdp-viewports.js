const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

async function run() {
  const testDir = path.join(__dirname, '..', 'test-screenshots');
  if (!fs.existsSync(testDir)) fs.mkdirSync(testDir, { recursive: true });

  console.log('Starting Edge with remote debugging...');
  const edge = spawn(EDGE_PATH, [
    '--headless',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    'about:blank'
  ]);

  // Wait for port to open
  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 250));
    try {
      const res = await fetch('http://127.0.0.1:9222/json');
      const data = await res.json();
      if (data && data[0] && data[0].webSocketDebuggerUrl) {
        wsUrl = data[0].webSocketDebuggerUrl;
        break;
      }
    } catch {}
  }

  if (!wsUrl) {
    console.error('Failed to connect to Edge CDP');
    edge.kill();
    return;
  }

  console.log('Connected to Edge via WebSocket at:', wsUrl);
  const ws = new WebSocket(wsUrl);

  let idCounter = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise((resolve) => ws.onopen = resolve);

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send('Page.enable');
  await send('DOM.enable');

  const testCases = [
    { page: 'index.html', name: 'mobile-small', width: 320, height: 600, mobile: true },
    { page: 'index.html', name: 'mobile-375', width: 375, height: 812, mobile: true },
    { page: 'chess.html', name: 'mobile-375', width: 375, height: 812, mobile: true },
    { page: 'table-tennis.html', name: 'mobile-375', width: 375, height: 812, mobile: true },
    { page: 'qr-codes.html', name: 'mobile-375', width: 375, height: 812, mobile: true },
    { page: 'index.html', name: 'desktop', width: 1440, height: 900, mobile: false }
  ];

  for (const tc of testCases) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: tc.width,
      height: tc.height,
      deviceScaleFactor: 2,
      mobile: tc.mobile
    });

    await send('Page.navigate', { url: `http://localhost:3000/${tc.page}` });
    await new Promise(r => setTimeout(r, 600));

    // Check overflow and elements
    const evalRes = await send('Runtime.evaluate', {
      expression: `({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        toggleVisible: !!document.getElementById('navToggle') && window.getComputedStyle(document.getElementById('navToggle')).display !== 'none',
        toggleRect: document.getElementById('navToggle') ? document.getElementById('navToggle').getBoundingClientRect() : null
      })`,
      returnByValue: true
    });

    const info = evalRes.result.value;
    console.log(`[${tc.page} @ ${tc.width}x${tc.height}] Overflow: ${info.hasOverflow ? 'YES (ISSUE!)' : 'NONE (PASS)'} | Toggle visible: ${info.toggleVisible} | Toggle rect:`, info.toggleRect);

    // Capture screenshot
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const imgBuffer = Buffer.from(shot.data, 'base64');
    const outName = `${tc.page.replace('.html', '')}-${tc.name}-cdp.png`;
    fs.writeFileSync(path.join(testDir, outName), imgBuffer);
    console.log(`  Saved screenshot: ${outName} (${(imgBuffer.length / 1024).toFixed(1)} KB)`);
  }

  // Also test hamburger drawer click!
  console.log('\nTesting hamburger drawer click interaction on 375px...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    mobile: true
  });
  await send('Page.navigate', { url: 'http://localhost:3000/index.html' });
  await new Promise(r => setTimeout(r, 500));

  await send('Runtime.evaluate', {
    expression: `document.getElementById('navToggle').click()`
  });
  await new Promise(r => setTimeout(r, 400));

  const drawerState = await send('Runtime.evaluate', {
    expression: `({
      drawerActive: document.getElementById('mobileDrawer').classList.contains('active'),
      overlayActive: document.getElementById('navOverlay').classList.contains('active'),
      bodyLocked: document.body.classList.contains('nav-open')
    })`,
    returnByValue: true
  });
  console.log('Drawer opened state:', drawerState.result.value);

  const drawerShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(testDir, 'index-drawer-opened-cdp.png'), Buffer.from(drawerShot.data, 'base64'));
  console.log('Saved drawer open screenshot: index-drawer-opened-cdp.png');

  ws.close();
  edge.kill();
  console.log('\nAll CDP tests finished successfully!');
}

run().catch(err => {
  console.error('CDP test failed:', err);
  process.exit(1);
});
