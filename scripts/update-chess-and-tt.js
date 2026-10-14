const fs = require('fs');
const path = require('path');

// 1. Update assets/js/sports-data.js for Chess and Table Tennis
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sportsDataContent = fs.readFileSync(sportsDataPath, 'utf8');

// Chess block
const chessUpdatedBlock = `  chess: {
    id: "chess",
    name: "Chess",
    slug: "chess.html",
    tagline: "Single-Elimination Knockout • 10+0 Rapid • Armageddon Tiebreak",
    category: "Mind Sport",
    icon: "♟️",
    color: "#a855f7", // Purple
    heroImage: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
    venue: "Institute Premises (Courtyard) & Chess.com Hybrid",
    dates: "Registration Till 18th Oct | Matches from 19th Oct",
    timings: "Scheduled Slots (10+0 Rapid Matches)",
    registrationDeadline: "18th October 2026",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe-0iBf2xU76_W-y5L9u8d9j0-B7zL6v7-F5_N0-e8_y1-jQ/viewform",
    rulebookPdf: "assets/docs/chess-rulebook.pdf",
    categoriesList: [
      "Offline Mode (Physical Board at Venue)",
      "Online Mode (Chess.com Verified)",
      "Single-Elimination Rapid Knockout (10+0)"
    ],
    rules: [
      "<strong>Registration & Entry:</strong> Online registration. Registration deadline is <strong>18th October 2026</strong>. Participation fee is <strong>₹20/- per player</strong> (Individual entry). At registration, every player must choose their mode: <strong>Offline</strong> (physical board at venue) or <strong>Online</strong> (on Chess.com with correct username and college email id).",
      "<strong>Tournament Format:</strong> Single-elimination knockout (winner advances, loser is eliminated). Random draw bracket with power of 2 sizing (empty slots filled with byes in Round 1 only, distributed evenly). Rounds proceed from Round 1, Round 2 to Quarter-Finals, Semi-Finals, and the Final.",
      "<strong>Championship Grand Final:</strong> The Final will strictly be played <strong>offline on a physical board</strong> in front of the organizing committee.",
      "<strong>Game Rules & Time Control:</strong> Each match is a single game of chess. Time control is <strong>10 minutes per player with no increment (10+0)</strong>. Colors decided by committee or coin toss. Official FIDE rules apply.",
      "<strong>Touch-Move Rule:</strong> Strict touch-move applies in all offline matches: a piece touched must be moved, and a piece released on a square must stay there.",
      "<strong>Draw & Armageddon Tiebreak:</strong> Draws by agreement are allowed only after move 20 (before that requires arbiter approval). A drawn game is settled immediately by an <strong>Armageddon game</strong>: colors swapped, White gets 5 minutes and Black gets 4 minutes (no increment). If Armageddon is drawn, <strong>Black wins the match</strong>.",
      "<strong>Offline Match Conditions:</strong> Boards, pieces, and digital clocks provided by committee. Players must report to table at scheduled time. More than <strong>5 minutes late = forfeit</strong>. Mobile phones must be switched off and kept away.",
      "<strong>Online Match Conditions:</strong> Played on Chess.com. Designated player creates unrated 10+0 challenge. More than 5 minutes late = forfeit. Winner sends game link/screenshot immediately. <strong>Chess engines or outside assistance strictly prohibited</strong> (cheating leads to immediate disqualification).",
      "<strong>Online vs Offline Matchups:</strong> If players chose the same mode, match played in that mode. If chosen modes differ, the committee decides the mode and informs both players in advance.",
      "<strong>Arbiter & Authority:</strong> The arbiter's decision is final. Misconduct, abusive behavior, or arguing with the arbiter can lead to game loss or disqualification."
    ],
    schedule: [
      { date: "18 Oct", time: "Midnight", stage: "Online Registration Deadline & Bracket Generation", court: "Online Portal", status: "upcoming" },
      { date: "19 Oct - 04 Nov", time: "Scheduled Slots", stage: "Knockout Rounds (10+0 Rapid Single Games)", court: "Courtyard & Chess.com", status: "upcoming" },
      { date: "05 Nov", time: "Evening Slot", stage: "Quarter-Finals & Semi-Finals (10+0 + Armageddon)", court: "Courtyard Arena", status: "upcoming" },
      { date: "06 Nov", time: "Finals Slot", stage: "Grand Championship Final (Offline Physical Board)", court: "Courtyard Arena", status: "upcoming" }
    ],
    fixtures: [],
    coordinators: [
      { name: "Aahan Poddar", role: "Secretary (Sec)", phone: "+91 99580 30019", email: "sports.committee@iiitvadodara.ac.in" },
      { name: "Ritika Meena", role: "Joint Secretary (Jsec)", phone: "+91 72969 14433", email: "sports.committee@iiitvadodara.ac.in" }
    ]
  },`;

// Table Tennis block
const ttUpdatedBlock = `  "table-tennis": {
    id: "table-tennis",
    name: "Table Tennis",
    slug: "table-tennis.html",
    tagline: "Official TENEX Championship • Best of 3 Games to 11 Points • 5 Categories",
    category: "Racquet Sport",
    icon: "🏓",
    color: "#14b8a6", // Teal
    heroImage: "assets/images/real-table-tennis.jpg",
    gallery: [
      { url: "assets/images/real-table-tennis.jpg", caption: "Table Tennis Matchplay at Campus Arena" },
      { url: "assets/images/real-champions-team.jpg", caption: "IIIT Vadodara Championship Team" }
    ],
    venue: "College Premises & Hostel TT Hall",
    dates: "20th Oct – 06th Nov",
    timings: "Day (8:00 AM - 6:00 PM) & Night (8:00 PM - 11:00 PM)",
    registrationDeadline: "Registration Open",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe-0iBf2xU76_W-y5L9u8d9j0-B7zL6v7-F5_N0-e8_y1-jQ/viewform",
    rulebookPdf: "assets/docs/table-tennis-rulebook.pdf",
    categoriesList: [
      "Men's Singles",
      "Men's Doubles",
      "Women's Singles",
      "Women's Doubles",
      "Mixed Doubles (1 Male & 1 Female)"
    ],
    rules: [
      "<strong>Tournament Categories:</strong> Men's Singles, Men's Doubles, Women's Singles, Women's Doubles, and Mixed Doubles (each pair must consist of one male and one female participant).",
      "<strong>Match Format:</strong> Every match will be played as <strong>best of 3 games</strong>, with each game played to <strong>11 points</strong>. The player or pair that wins 2 games wins the match. At 10–10 (deuce), the game continues until one player or pair leads by 2 points.",
      "<strong>Pre-Match Protocol:</strong> Toss conducted by umpire/referee decides initial serve/receive and playing side. A 5-minute warm-up is allowed before play begins. Players must report at least 10 minutes prior.",
      "<strong>Grace Period & Walkovers:</strong> A 10-minute grace period is allowed for late arrivals. If a player/pair fails to arrive within 10 minutes, the opponent is awarded a <strong>walkover victory</strong>.",
      "<strong>Time-Outs:</strong> Each player/pair may request up to two time-outs during a match, subject to the umpire's instructions.",
      "<strong>Service & Ball Release Rule:</strong> The server must release the ball at least <strong>16 cm vertically from the open palm</strong> when serving, as stated in the official TENEX league rulebook. Illegal service will receive warnings and point penalties.",
      "<strong>Faults & Strokes:</strong> A double touch by the same player during a stroke is treated as a fault, and a point is awarded to the opponent.",
      "<strong>Doubles Regulations:</strong> Serve must travel diagonally from server's right half-court to receiver's right half-court. Partners must take turns striking the ball during a rally. Strict serving and receiving order must be followed.",
      "<strong>Tournament Structure & Qualification:</strong> Categories organized into pools, knockout rounds, or a combination. Top performers from pools advance to quarter-finals and playoffs.",
      "<strong>Equipment & Conduct:</strong> Players should bring their own racket and wear suitable sportswear and non-marking footwear. All umpire and referee decisions on match play are final."
    ],
    schedule: [
      { date: "20 Oct - 06 Nov", time: "08:00 AM - 06:00 PM", stage: "Day League Matches (College Premises)", court: "College Premises", status: "upcoming" },
      { date: "20 Oct - 06 Nov", time: "08:00 PM - 11:00 PM", stage: "Night Clashes & Knockouts (Hostel TT Hall)", court: "Hostel TT Hall", status: "upcoming" },
      { date: "06 Nov", time: "Evening Slots", stage: "Singles & Doubles Grand Championship Finals", court: "College TT Arena", status: "upcoming" }
    ],
    fixtures: [],
    coordinators: [
      { name: "Bhavya Prajapati", role: "Secretary (Sec)", phone: "+91 83294 55093", email: "202451033@iiitvadodara.ac.in" },
      { name: "Akshat Chhabra", role: "Joint Secretary (Jsec)", phone: "+91 70503 57190", email: "20251504007@iiitvadodara.ac.in" }
    ]
  },`;

sportsDataContent = sportsDataContent.replace(
  /  chess: \{[\s\S]*?\n  \},/,
  chessUpdatedBlock
);

sportsDataContent = sportsDataContent.replace(
  /  "table-tennis": \{[\s\S]*?\n  \}/,
  ttUpdatedBlock
);

fs.writeFileSync(sportsDataPath, sportsDataContent, 'utf8');
console.log('1. Updated sports-data.js for Chess & Table Tennis.');

// 2. Update scripts/build-sports-pages.js
const buildPagesPath = path.join(__dirname, 'build-sports-pages.js');
let buildPagesContent = fs.readFileSync(buildPagesPath, 'utf8');

const chessCardCode = `  const chessTournamentCard = sport.id === 'chess' ? \`
            <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(168, 85, 247, 0.05); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-md);">
              <h4 style="color: #c084fc; display: flex; align-items: center; gap: 8px; margin: 0 0 0.5rem 0; font-size: 1.05rem;">
                <span>♟️</span> Single-Elimination Knockout & Rapid Format
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                Official 10+0 Time Control, Touch-Move Offline, and Instant Armageddon Tiebreaks.
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 210px), 1fr)); gap: 1rem;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #c084fc;">
                  <strong style="color: #fff; font-size: 0.88rem;">1. 10+0 Rapid Control</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Single game per match.<br>• 10 mins per player (no increment).<br>• Touch-move strictly enforced offline.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #e879f9;">
                  <strong style="color: #fff; font-size: 0.88rem;">2. Armageddon Tiebreak</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Played immediately if drawn.<br>• White gets 5 mins, Black gets 4 mins.<br>• If draw, <strong>Black wins match</strong>.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #38bdf8;">
                  <strong style="color: #fff; font-size: 0.88rem;">3. Offline Final Board</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Hybrid rounds on Courtyard & Chess.com.<br>• Grand Final strictly offline on physical board.<br>• 5-min grace period before forfeit.</p>
                </div>
              </div>
            </div>
  \` : '';
`;

const ttCardCode = `  const tableTennisTournamentCard = sport.id === 'table-tennis' ? \`
            <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(20, 184, 166, 0.05); border: 1px solid rgba(20, 184, 166, 0.25); border-radius: var(--radius-md);">
              <h4 style="color: #2dd4bf; display: flex; align-items: center; gap: 8px; margin: 0 0 0.5rem 0; font-size: 1.05rem;">
                <span>🏓</span> TENEX Table Tennis Championship Rules
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                Official Best of 3 Games to 11 Points • 5 Categories • 16 cm Vertical Service Rule.
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 210px), 1fr)); gap: 1rem;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #2dd4bf;">
                  <strong style="color: #fff; font-size: 0.88rem;">1. Match Structure</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Best of 3 games to 11 points (first to 2).<br>• Deuce at 10-10 requires 2-point lead.<br>• Up to 2 time-outs per match.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #06b6d4;">
                  <strong style="color: #fff; font-size: 0.88rem;">2. 16cm Service & Play</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Ball released min 16cm vertically from open palm.<br>• Double touch = fault (point to opponent).<br>• 10-min grace period before walkover.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #3b82f6;">
                  <strong style="color: #fff; font-size: 0.88rem;">3. Doubles & Mixed</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Diagonal serve (right-to-right).<br>• Alternating hits by teammates during rally.<br>• Non-marking shoes & own racket.</p>
                </div>
              </div>
            </div>
  \` : '';
`;

if (!buildPagesContent.includes('chessTournamentCard')) {
  buildPagesContent = buildPagesContent.replace(
    '  const cricketPlayoffCard =',
    `${chessCardCode}\n${ttCardCode}\n  const cricketPlayoffCard =`
  );

  buildPagesContent = buildPagesContent.replace(
    '            ${carromMatchCard}',
    '            ${carromMatchCard}\n            ${chessTournamentCard}\n            ${tableTennisTournamentCard}'
  );

  fs.writeFileSync(buildPagesPath, buildPagesContent, 'utf8');
  console.log('2. Added chessTournamentCard & tableTennisTournamentCard to build-sports-pages.js.');
}

// 3. Update scripts/generate-rulebooks.js for Chess & Table Tennis
const genRulebooksPath = path.join(__dirname, 'generate-rulebooks.js');
let genRulebooksContent = fs.readFileSync(genRulebooksPath, 'utf8');

const chessHtmlCode = `
// 7. Chess Rulebook HTML
const chessHtml = \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ventura 2k26 - Official Chess Tournament Rulebook | IIIT Vadodara</title>
  <style>
    @page { size: A4; margin: 16mm 14mm; }
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.5;
      font-size: 13px;
      margin: 0;
      padding: 0;
    }
    .header {
      border-bottom: 2px solid #a855f7;
      padding-bottom: 12px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .header-title h1 {
      font-size: 20px;
      margin: 0 0 2px 0;
      color: #0f172a;
      letter-spacing: -0.02em;
    }
    .header-title p {
      margin: 0;
      font-size: 11px;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .badge {
      background: #faf5ff;
      color: #7e22ce;
      border: 1px solid #e9d5ff;
      font-weight: 700;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 9999px;
    }
    h2 {
      font-size: 14px;
      color: #0f172a;
      border-left: 3px solid #a855f7;
      padding-left: 8px;
      margin: 14px 0 6px 0;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    p { margin: 4px 0 8px 0; }
    ul, ol { margin: 4px 0 10px 0; padding-left: 18px; }
    li { margin-bottom: 4px; }
    .grid-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
      font-size: 12px;
    }
    .grid-table th, .grid-table td {
      border: 1px solid #e2e8f0;
      padding: 6px 10px;
      text-align: left;
    }
    .grid-table th {
      background: #faf5ff;
      color: #7e22ce;
      font-weight: 600;
    }
    .highlight-box {
      background: #faf5ff;
      border: 1px solid #e9d5ff;
      border-radius: 6px;
      padding: 10px 12px;
      margin: 10px 0;
      font-size: 12px;
    }
    .sign-row {
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px dashed #cbd5e1;
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: #475569;
    }
  </style>
</head>
<body>

  <div class="header">
    <div class="header-title">
      <h1>RULES FOR VENTURA 2026 CHESS TOURNAMENT</h1>
      <p>Annual Sports Meet • IIIT Vadodara • Ventura 2k26</p>
    </div>
    <div class="badge">Official Rapid Knockout Draft</div>
  </div>

  <h2>1. Registration Rules</h2>
  <ul>
    <li>Registrations will be online.</li>
    <li><strong>Registration deadline:</strong> 18th October 2026.</li>
    <li><strong>Participation fee:</strong> Rs. 20/-</li>
    <li>Entry is individual. One player per entry.</li>
    <li>At registration, every player must choose the mode: <strong>Offline</strong> (physical board at venue) or <strong>Online</strong> (on Chess.com).</li>
    <li>Online players must provide their correct Chess.com username at registration and use only their college email id.</li>
  </ul>

  <h2>2. Tournament Format</h2>
  <ul>
    <li>The tournament is a <strong>single-elimination knockout</strong>. The winner of a match advances; the loser is out.</li>
    <li>The bracket will be drawn randomly by the committee after registration closes.</li>
    <li>The bracket size will be the next power of 2 above the number of players (empty slots filled with byes).</li>
    <li>Byes will be given only in Round 1 and distributed evenly across the bracket. No player gets a bye twice.</li>
    <li>Rounds proceed from Round 1, Round 2 to Quarter-Finals, Semi-Finals, and the Final.</li>
    <li>The <strong>Final will be played offline on a physical board</strong> in front of the committee.</li>
  </ul>

  <h2>3. Game's Rules & Regulation</h2>
  <ul>
    <li>Each match is a single game of chess.</li>
    <li><strong>Time control:</strong> 10 minutes per player with no increment (<strong>10+0</strong>).</li>
    <li>Colors for each match decided by committee or coin toss. All official FIDE rules apply.</li>
    <li><strong>Touch-move rule</strong> applies in offline matches: a piece touched must be moved; released piece must stay.</li>
    <li>The arbiter's decision will be final. Misconduct or arguing with arbiter leads to game loss or disqualification.</li>
  </ul>

  <h2>4. Draw and Tiebreak Rules (Armageddon)</h2>
  <div class="highlight-box">
    <strong>Armageddon Game:</strong> A drawn game will be settled by an Armageddon game played immediately. In Armageddon, colors are swapped. <strong>White gets 5 minutes and Black gets 4 minutes</strong>, with no increment. If the Armageddon game is drawn, <strong>Black wins the match</strong>.
  </div>
  <p>Draws by agreement are allowed only after move 20. Before that, the draw must be approved by the arbiter.</p>

  <h2>5. Offline & Online Playing Conditions</h2>
  <ul>
    <li><strong>Offline Matches:</strong> Boards, pieces, and digital clocks provided by committee. Players must report to table at announced time (more than 5 minutes late loses by forfeit). Mobile phones must be switched off and kept away. Spectators must stay silent.</li>
    <li><strong>Online Matches:</strong> Played on Chess.com. Opponents paired by username; designated player creates 10+0 unrated challenge. More than 5 minutes late loses by forfeit. Winner submits game link/screenshot immediately. <strong>Use of chess engines, databases, or outside assistance strictly prohibited</strong> (disqualification for cheating).</li>
    <li><strong>Matches Between Online and Offline Players:</strong> If chosen modes differ, the committee decides the mode and informs both players in advance.</li>
    <li><strong>No-Show:</strong> Opponent wins by walkover if a player fails to appear. Players not playing due to committee error will receive a fee refund.</li>
  </ul>

  <div class="sign-row">
    <div>
      <strong>Aahan Poddar</strong><br>
      Secretary, Chess<br>
      📞 +91 99580 30019
    </div>
    <div>
      <strong>Ritika Meena</strong><br>
      Joint Secretary, Chess<br>
      📞 +91 72969 14433
    </div>
    <div>
      <strong>Aman</strong><br>
      Secretary, Sports Committee<br>
      📞 83185 67785
    </div>
  </div>

</body>
</html>
\`;
`;

const ttHtmlCode = `
// 8. Table Tennis Rulebook HTML
const tableTennisHtml = \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ventura 2k26 - Official Table Tennis Rulebook | IIIT Vadodara</title>
  <style>
    @page { size: A4; margin: 16mm 14mm; }
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.5;
      font-size: 13px;
      margin: 0;
      padding: 0;
    }
    .header {
      border-bottom: 2px solid #14b8a6;
      padding-bottom: 12px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .header-title h1 {
      font-size: 20px;
      margin: 0 0 2px 0;
      color: #0f172a;
      letter-spacing: -0.02em;
    }
    .header-title p {
      margin: 0;
      font-size: 11px;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .badge {
      background: #f0fdfa;
      color: #0f766e;
      border: 1px solid #ccfbf1;
      font-weight: 700;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 9999px;
    }
    h2 {
      font-size: 14px;
      color: #0f172a;
      border-left: 3px solid #14b8a6;
      padding-left: 8px;
      margin: 14px 0 6px 0;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    p { margin: 4px 0 8px 0; }
    ul, ol { margin: 4px 0 10px 0; padding-left: 18px; }
    li { margin-bottom: 4px; }
    .grid-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
      font-size: 12px;
    }
    .grid-table th, .grid-table td {
      border: 1px solid #e2e8f0;
      padding: 6px 10px;
      text-align: left;
    }
    .grid-table th {
      background: #f0fdfa;
      color: #0f766e;
      font-weight: 600;
    }
    .highlight-box {
      background: #f0fdfa;
      border: 1px solid #ccfbf1;
      border-radius: 6px;
      padding: 10px 12px;
      margin: 10px 0;
      font-size: 12px;
    }
    .sign-row {
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px dashed #cbd5e1;
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: #475569;
    }
  </style>
</head>
<body>

  <div class="header">
    <div class="header-title">
      <h1>VENTURA 2K26 — TABLE TENNIS RULEBOOK</h1>
      <p>Annual Sports Meet • IIIT Vadodara (TENEX Leagues)</p>
    </div>
    <div class="badge">Official Tournament Draft</div>
  </div>

  <h2>1. Tournament Categories</h2>
  <ul>
    <li><strong>Men's Singles:</strong> Individual event for male participants.</li>
    <li><strong>Men's Doubles:</strong> Event for pairs of male participants.</li>
    <li><strong>Women's Singles:</strong> Individual event for female participants.</li>
    <li><strong>Women's Doubles:</strong> Event for pairs of female participants.</li>
    <li><strong>Mixed Doubles:</strong> Each pair must consist of one male and one female participant.</li>
  </ul>

  <h2>2. Match Rules & Format</h2>
  <ul>
    <li>Every match will be played as <strong>best of 3 games</strong>, with each game played to <strong>11 points</strong>. The player or pair that wins 2 games wins the match.</li>
    <li>At 10–10, the game will continue until one player or pair leads by 2 points.</li>
    <li>Before the match, the umpire/referee will conduct a toss to decide the initial serve/receive and playing side.</li>
    <li>A 5-minute warm-up will be allowed before the match begins.</li>
    <li>Players must report to the playing area at least 10 minutes before their scheduled match.</li>
    <li><strong>Grace Period:</strong> A 10-minute grace period is allowed. If still not arrived, the opponent is declared winner by walkover.</li>
    <li>Each player may request up to two time-outs during a match.</li>
  </ul>

  <h2>3. Service & Play</h2>
  <div class="highlight-box">
    <strong>16 cm Service Rule:</strong> The server must release the ball at least <strong>16 cm vertically from the open palm</strong> when serving, as stated in the supplied TENEX league rulebook. Illegal service will receive umpire warnings and point penalties.
  </div>
  <ul>
    <li>A double touch by the same player during a stroke will be treated as a fault (point awarded to opponent).</li>
    <li>The umpire/referee's decision on match play will be final.</li>
  </ul>

  <h2>4. Doubles-Specific Rules</h2>
  <ul>
    <li>In doubles, the serve must travel <strong>diagonally from server's right half-court to receiver's right half-court</strong>.</li>
    <li>Partners must take turns striking the ball during a rally.</li>
    <li>The serving and receiving order must be followed throughout the game.</li>
  </ul>

  <h2>5. Player Conduct & Organization</h2>
  <ul>
    <li>Participants must treat opponents, officials, and volunteers respectfully. Unsporting behaviour leads to penalties or disqualification.</li>
    <li>Players should bring their own racket and wear suitable sportswear and footwear.</li>
    <li>Fixtures and match timings will be shared through the official TENEX WhatsApp group.</li>
  </ul>

  <div class="sign-row">
    <div>
      <strong>Bhavya Prajapati</strong><br>
      Secretary, Table Tennis<br>
      📞 +91 83294 55093
    </div>
    <div>
      <strong>Akshat Chhabra</strong><br>
      Joint Secretary, Table Tennis<br>
      📞 +91 70503 57190
    </div>
    <div>
      <strong>Aman</strong><br>
      Secretary, Sports Committee<br>
      📞 83185 67785
    </div>
  </div>

</body>
</html>
\`;
`;

if (!genRulebooksContent.includes('chessHtml')) {
  // Insert html templates before write HTML rulebooks
  genRulebooksContent = genRulebooksContent.replace(
    '// Write HTML rulebooks',
    `${chessHtmlCode}\n${ttHtmlCode}\n// Write HTML rulebooks`
  );

  // Write chess & tt HTML
  genRulebooksContent = genRulebooksContent.replace(
    'console.log(\'Saved cricket, badminton, volleyball, carrom, football, and athletics HTML rulebooks.\');',
    `const chessHtmlPath = path.join(docsDir, 'chess-rulebook.html');
const tableTennisHtmlPath = path.join(docsDir, 'table-tennis-rulebook.html');
fs.writeFileSync(chessHtmlPath, chessHtml, 'utf8');
fs.writeFileSync(tableTennisHtmlPath, tableTennisHtml, 'utf8');
console.log('Saved cricket, badminton, volleyball, carrom, football, athletics, chess, and table-tennis HTML rulebooks.');`
  );

  // Compile chess & tt PDF
  genRulebooksContent = genRulebooksContent.replace(
    'const athleticsPdfPath = path.join(docsDir, \'athletics-rulebook.pdf\');',
    `const athleticsPdfPath = path.join(docsDir, 'athletics-rulebook.pdf');
const chessPdfPath = path.join(docsDir, 'chess-rulebook.pdf');
const tableTennisPdfPath = path.join(docsDir, 'table-tennis-rulebook.pdf');`
  );

  const finalPdfsGenCode = `
  try {
    console.log('Generating chess-rulebook.pdf via Edge headless...');
    execSync(\`"\${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="\${chessPdfPath}" "file:///\${chessHtmlPath.replace(/\\\\\\\\/g, '/')}"\`);
    console.log('Generated chess-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating chess PDF:', e.message);
  }

  try {
    console.log('Generating table-tennis-rulebook.pdf via Edge headless...');
    execSync(\`"\${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="\${tableTennisPdfPath}" "file:///\${tableTennisHtmlPath.replace(/\\\\\\\\/g, '/')}"\`);
    console.log('Generated table-tennis-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating table-tennis PDF:', e.message);
  }
`;

  genRulebooksContent = genRulebooksContent.replace(
    '  } catch (e) {\n    console.error(\'Error generating athletics PDF:\', e.message);\n  }',
    `  } catch (e) {\n    console.error('Error generating athletics PDF:', e.message);\n  }\n${finalPdfsGenCode}`
  );

  fs.writeFileSync(genRulebooksPath, genRulebooksContent, 'utf8');
  console.log('3. Updated scripts/generate-rulebooks.js for Chess & Table Tennis.');
}
