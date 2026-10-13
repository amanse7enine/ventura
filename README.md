# VENTURA - IIIT Vadodara Annual Sports Event Portal 🏆

Official, mobile-optimized sports tournament portal and printable QR Code system for **IIIT Vadodara's Annual Sports Meet (Ventura)**.

---

## 📌 Features Built

1. **8 Dedicated Sports Portals**:
   - 🏸 **Badminton** (`badminton.html`)
   - 🏏 **Cricket** (`cricket.html`)
   - 🏃 **Athletics** (`athletics.html`)
   - ⚽ **Football** (`football.html`)
   - 🏐 **Volleyball** (`volleyball.html`)
   - ♟️ **Chess** (`chess.html`)
   - 🎯 **Carrom** (`carrom.html`)
   - 🏓 **Table Tennis** (`table-tennis.html`)

2. **5 Key Sections per Sport**:
   - 📅 **Match Schedule & Venue Timings**: Round-by-round slots, courts/grounds, and reporting deadlines.
   - 🔥 **Live Fixtures & Results**: Match cards with scores, game status (`LIVE`, `Completed`, `Upcoming`), and winners.
   - 📜 **Rules & Regulations**: BWF/ICC/FIFA/AICF/ITTF compliant tournament rules, walkover policy, and rulebook download link.
   - 👥 **Student Coordinators**: Direct **Phone Call**, **WhatsApp**, and **Email** links for each sport coordinator.
   - 📝 **Team Registration**: Direct Google Form entry links.

3. **📱 QR Code Distribution Hub & Printable Posters (`qr-codes.html`)**:
   - Pre-generated high-resolution PNG & SVG vector QR codes in `assets/images/qr/`.
   - Dedicated printable A4/flyer layout for campus notice boards, cafeteria stands, and venue gates.
   - Built-in **Domain Customizer tool** to test and generate new QR codes when hosted live.

4. **Overall Batch Championship Leaderboard (`index.html`)**:
   - Live points table calculated across batches (CSE, ECE, CS/IT, Freshers, M.Tech/PhD).

---

## 🚀 How to Run & Preview Locally

### Option 1: Direct File Opening
Double-click `index.html` or open any sport page (e.g. `badminton.html`) directly in any web browser (Chrome, Edge, Safari).

### Option 2: Local Web Server
Run with npm:
```bash
npm start
```
Or with Python:
```bash
python -m http.server 8080
```
Open: [http://localhost:8080](http://localhost:8080)

---

## 🛠️ How to Update Scores, Schedules & Coordinators

All event details are centralized in a single configuration file:
👉 `assets/js/sports-data.js`

1. Open `assets/js/sports-data.js`.
2. Edit fixtures, schedules, registration links, or coordinator phone numbers.
3. Run the automated rebuild script:
   ```bash
   npm run build
   ```
   All 8 HTML pages will update instantly with zero manual HTML editing required!

---

## 🌐 Free 2-Minute Deployment (GitHub Pages or Vercel)

### Method A: GitHub Pages
1. Push this folder to a GitHub repository (e.g., `ventura-iiitv`).
2. Go to **Settings** > **Pages** > Select `main` branch / `root`.
3. Your live link will be: `https://<username>.github.io/<repo-name>/`

### Method B: Vercel / Netlify
1. Run `npx vercel` or drag-and-drop this folder into [Netlify Drop](https://app.netlify.com/drop).
2. You receive an instant live HTTPS link ready for all student QR scans!
