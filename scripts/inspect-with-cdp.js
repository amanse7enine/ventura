const { execSync } = require('child_process');

// Let's launch Edge headless with remote debugging port to inspect DOM properties
const { spawn } = require('child_process');
const http = require('http');

const edge = spawn("C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", [
  "--headless",
  "--remote-debugging-port=9222",
  "--window-size=375,812",
  "http://localhost:3000/index.html"
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://localhost:9222/json');
    const tabs = await listRes.json();
    console.log('Tabs:', tabs.map(t => ({ title: t.title, url: t.url, ws: t.webSocketDebuggerUrl })));
    
    // We can evaluate JS via CDP
    const wsUrl = tabs[0].webSocketDebuggerUrl;
    const WebSocket = require('ws'); // might not be installed, let's see if we can use CDP HTTP
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    edge.kill();
  }
}, 2000);
