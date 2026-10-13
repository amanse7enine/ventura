const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const sports = [
  { id: 'badminton', name: 'Badminton', file: 'badminton.html' },
  { id: 'cricket', name: 'Cricket', file: 'cricket.html' },
  { id: 'athletics', name: 'Athletics', file: 'athletics.html' },
  { id: 'football', name: 'Football', file: 'football.html' },
  { id: 'volleyball', name: 'Volleyball', file: 'volleyball.html' },
  { id: 'chess', name: 'Chess', file: 'chess.html' },
  { id: 'carrom', name: 'Carrom', file: 'carrom.html' },
  { id: 'table-tennis', name: 'Table Tennis', file: 'table-tennis.html' },
  { id: 'hub', name: 'Ventura Main Portal', file: 'index.html' }
];

// Default placeholder base URL for pre-generated images
const defaultBaseUrl = 'https://iiitv-ventura.web.app';

async function generateQRCodes() {
  const qrDir = path.join(__dirname, '..', 'assets', 'images', 'qr');
  if (!fs.existsSync(qrDir)) {
    fs.mkdirSync(qrDir, { recursive: true });
  }

  for (const sport of sports) {
    const targetUrl = `${defaultBaseUrl}/${sport.file}`;
    const svgPath = path.join(qrDir, `${sport.id}-qr.svg`);
    const pngPath = path.join(qrDir, `${sport.id}-qr.png`);

    // Generate SVG (crisp vector)
    const svgString = await QRCode.toString(targetUrl, {
      type: 'svg',
      color: {
        dark: '#0f172a',
        light: '#ffffff'
      },
      margin: 2
    });
    fs.writeFileSync(svgPath, svgString);

    // Generate PNG (high resolution for print)
    await QRCode.toFile(pngPath, targetUrl, {
      width: 600,
      margin: 2,
      color: {
        dark: '#0B1120',
        light: '#FFFFFF'
      }
    });

    console.log(`Generated QR for ${sport.name} -> ${targetUrl}`);
  }
}

generateQRCodes().catch(console.error);
