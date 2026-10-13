const fs = require('fs');
const path = require('path');

// 1. Update assets/js/sports-data.js
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sd = fs.readFileSync(sportsDataPath, 'utf8');

const oldVolleyballBlockRegex = /volleyball:\s*\{[\s\S]*?id:\s*"volleyball"[\s\S]*?coordinators:\s*\[[\s\S]*?\]\s*\}/;

const newVolleyballBlock = `volleyball: {
    id: "volleyball",
    name: "Volleyball",
    slug: "volleyball.html",
    tagline: "Ventura 2k26 10-Team Volleyball Tournament with Player Auction & Mixed-Gender Squads",
    category: "Team Sport",
    icon: "🏐",
    color: "#06b6d4",
    heroImage: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80",
    venue: "College Ground",
    dates: "19th October to 6th November",
    timings: "During lunch hours",
    registrationDeadline: "Ongoing Registration",
    registrationLink: "https://forms.gle/kqg9ZGWcMRLr2RQk6",
    rulebookPdf: "assets/docs/volleyball-rulebook.pdf",
    categoriesList: [
      "10 Teams (2 Pools of 5)",
      "Participation Fee: ₹30/- (Refundable)",
      "Auction: Gold, Silver & Bronze Tiers",
      "Mandatory: Min 1 Girl on Court & Squad"
    ],
    rules: [
      "<strong>Online Registration & Fee:</strong> Registrations will be online. Participation fee is <strong>₹30/- per player</strong> (Participation fee paid by unsold players will be refunded).",
      "<strong>Squad Composition & Mandatory Girl Player:</strong> Each team will consist of <strong>7 players</strong>. At least <strong>1 girl is mandatory in every team</strong>. The minimum and maximum number of players per team will follow the team-size rule announced by the organising committee. A team that does not meet the required team composition, including the mandatory girl player, may be disqualified under tournament rules.",
      "<strong>Player Auction System:</strong> Auction date and time will be announced by the organising committee. Players will be divided into three categories: <strong>Gold, Silver, and Bronze</strong>. The points system will be announced before the auction.",
      "<strong>3-Stage Auction Rounds:</strong><br>• <em>Stage 1:</em> Auction of all registered players.<br>• <em>Stage 2:</em> Auction of all unsold players from the first stage (one more chance in 2nd stage; no further auction round held thereafter).<br>• <em>Stage 3:</em> Each team may submit names of selected players for another auction (limit announced after 2nd stage).",
      "<strong>Match & Court Rules:</strong> Matches will follow standard indoor volleyball rules, except for tournament-specific changes announced by the committee. Each team will consist of <strong>7 players at a time in the court and minimum 1 girl is mandatory in the court</strong>. Teams must follow official match rules. The referee's decision will be final.",
      "<strong>Tournament Structure (10 Teams):</strong> There will be <strong>2 pools, with 5 teams in each pool</strong>. Each team will play every other team in its own pool once (4 pool matches per team). Pool A and Pool B standings will be calculated separately.",
      "<strong>Match Format & Set Scores:</strong><br>• <em>Pool Matches:</em> Best of 3 sets (<strong>15 - 15 - 21</strong> points).<br>• <em>Semi-Finals:</em> Best of 3 sets (<strong>21 - 21 - 25</strong> points).<br>• <em>Grand Final:</em> Best of 5 sets (<strong>21 - 21 - 21 - 21 - 25</strong> points). Match duration, court, and substitutions will follow committee guidelines.",
      "<strong>Semi-Finals & Final Qualification:</strong><br>• The top 2 teams from each pool qualify for the semi-finals.<br>• <em>Semi-Final 1:</em> Pool A 1st Place vs Pool B 2nd Place.<br>• <em>Semi-Final 2:</em> Pool B 1st Place vs Pool A 2nd Place.<br>• <em>Grand Final:</em> Winners of both semi-finals advance to the Final. (The two semi-final losers may play a 3rd-place match if scheduled).",
      "<strong>Pool Ranking & Tie-Breaks:</strong> Pool standings determined by match wins. If teams are tied, tie-break criteria announced before the tournament (such as set ratio and point ratio) will apply. Updates will be communicated through official WhatsApp groups."
    ],
    schedule: [
      { date: "Pre-Tournament", time: "Slot on WhatsApp", stage: "Volleyball Player Auction: Gold, Silver & Bronze Tiers (3 Stages)", court: "Campus / Online", status: "upcoming" },
      { date: "19 Oct - 02 Nov", time: "Lunch Hours", stage: "Pool A & Pool B League Matches (Best of 3 sets: 15-15-21)", court: "College Ground", status: "upcoming" },
      { date: "04 Nov", time: "Lunch Hours", stage: "Semi-Final 1: Pool A 1st Place vs Pool B 2nd Place (Best of 3 sets: 21-21-25)", court: "College Ground", status: "upcoming" },
      { date: "05 Nov", time: "Lunch Hours", stage: "Semi-Final 2: Pool B 1st Place vs Pool A 2nd Place (Best of 3 sets: 21-21-25)", court: "College Ground", status: "upcoming" },
      { date: "06 Nov", time: "Lunch Hours", stage: "Volleyball Championship Grand Final (Best of 5 sets: 21-21-21-21-25)", court: "College Ground", status: "upcoming" }
    ],
    fixtures: [],
    coordinators: [
      { name: "Aditya", role: "Secretary", phone: "9571734643", email: "sports.committee@iiitvadodara.ac.in" },
      { name: "Anshu", role: "Joint Secretary", phone: "8306724203", email: "sports.committee@iiitvadodara.ac.in" }
    ]
  }`;

sd = sd.replace(oldVolleyballBlockRegex, newVolleyballBlock);
fs.writeFileSync(sportsDataPath, sd, 'utf8');
console.log('Updated assets/js/sports-data.js with new Volleyball rules and data.');

// 2. Update scripts/build-sports-pages.js to add visual qualification card for Volleyball
const buildPath = path.join(__dirname, 'build-sports-pages.js');
let buildCode = fs.readFileSync(buildPath, 'utf8');

const volleyballCardSnippet = `
  const volleyballPlayoffCard = sport.id === 'volleyball' ? \`
            <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(6, 182, 212, 0.05); border: 1px solid rgba(6, 182, 212, 0.25); border-radius: var(--radius-md);">
              <h4 style="color: #06b6d4; display: flex; align-items: center; gap: 8px; margin: 0 0 0.5rem 0; font-size: 1.05rem;">
                <span>⚡</span> Tournament Structure & Playoff System (10 Teams)
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                10 Teams divided into 2 Pools of 5 teams. 7 on court (min 1 girl mandatory). Top 2 from each pool advance to Semi-Finals.
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #06b6d4;">
                  <strong style="color: #fff; font-size: 0.88rem;">1. Pool Stage (Best of 3 Sets)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">Pool A (5 Teams) & Pool B (5 Teams).<br>• Sets: <strong>15 - 15 - 21</strong> points.<br>• 4 pool matches each; top 2 qualify.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #38bdf8;">
                  <strong style="color: #fff; font-size: 0.88rem;">2. Semi-Finals (Best of 3 Sets)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• <em>SF 1:</em> Pool A 1st vs Pool B 2nd<br>• <em>SF 2:</em> Pool B 1st vs Pool A 2nd<br>• Sets: <strong>21 - 21 - 25</strong> points.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #10b981;">
                  <strong style="color: #fff; font-size: 0.88rem;">3. Grand Final (Best of 5 Sets)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">Winner SF 1 vs Winner SF 2.<br>• Sets: <strong>21 - 21 - 21 - 21 - 25</strong>.<br>• <span style="color: #06b6d4;">Champion:</span> Crowned Ventura 2k26 Victor!</p>
                </div>
              </div>
            </div>
  \` : '';
`;

if (!buildCode.includes('volleyballPlayoffCard')) {
  buildCode = buildCode.replace('const rulesList = sport.rules.map', volleyballCardSnippet + '\n  const rulesList = sport.rules.map');
  buildCode = buildCode.replace('${cricketPlayoffCard}', '${cricketPlayoffCard}\n            ${volleyballPlayoffCard}');
  fs.writeFileSync(buildPath, buildCode, 'utf8');
  console.log('Added volleyballPlayoffCard to build-sports-pages.js.');
}

// 3. Update scripts/generate-rulebooks.js to generate Volleyball HTML and PDF
const genRulebooksPath = path.join(__dirname, 'generate-rulebooks.js');
let genCode = fs.readFileSync(genRulebooksPath, 'utf8');

const volleyballHtmlTemplate = `
// 3. Volleyball Rulebook HTML
const volleyballHtml = \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ventura 2k26 - Official Volleyball Rulebook | IIIT Vadodara</title>
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
      border-bottom: 2px solid #06b6d4;
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
      background: #cffafe;
      color: #0e7490;
      border: 1px solid #a5f3fc;
      font-weight: 700;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 9999px;
    }
    h2 {
      font-size: 14px;
      color: #0f172a;
      border-left: 3px solid #06b6d4;
      padding-left: 8px;
      margin: 14px 0 6px 0;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    p { margin: 4px 0 8px 0; }
    ul, ol { margin: 4px 0 10px 0; padding-left: 18px; }
    li { margin-bottom: 4px; }
    .table-box {
      width: 100%;
      border-collapse: collapse;
      margin: 8px 0 12px 0;
      font-size: 12px;
    }
    .table-box th, .table-box td {
      border: 1px solid #e2e8f0;
      padding: 6px 10px;
      text-align: left;
    }
    .table-box th {
      background: #f8fafc;
      font-weight: 700;
      color: #334155;
    }
    .highlight-card {
      background: #ecfeff;
      border: 1px solid #a5f3fc;
      border-radius: 6px;
      padding: 10px 12px;
      margin: 8px 0;
    }
    .sign-row {
      margin-top: 24px;
      border-top: 1px dashed #cbd5e1;
      padding-top: 14px;
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
      <h1>🏐 VOLLEYBALL TOURNAMENT — OFFICIAL RULEBOOK</h1>
      <p>VENTURA 2k26 • INDIAN INSTITUTE OF INFORMATION TECHNOLOGY VADODARA</p>
    </div>
    <div class="badge">OFFICIAL & FINAL</div>
  </div>

  <h2>1. Registration Rules</h2>
  <ul>
    <li><strong>Online Registration:</strong> Registrations will be strictly online via the official Ventura portal.</li>
    <li><strong>Participation Fee:</strong> <strong>Rs. 30/- per player</strong>.</li>
    <li><strong>Fee Refund Policy:</strong> Participation fees paid by unsold players will be <strong>fully refunded</strong>.</li>
  </ul>

  <h2>2. Auction Details & Squad Composition</h2>
  <ul>
    <li><strong>Auction Schedule:</strong> Auction date and time will be announced by the organising committee.</li>
    <li><strong>Team Composition:</strong> Each team will consist of <strong>7 players</strong>.</li>
    <li><strong>Mandatory Female Player:</strong> <strong>At least 1 girl is mandatory in every team squad and on the court at all times.</strong></li>
    <li><strong>Team Size Rule:</strong> Minimum and maximum number of players per team will follow the team-size rule announced by the organising committee. A team that does not meet the required team composition, including the mandatory girl player, may be <strong>disqualified</strong> under the tournament rules.</li>
    <li><strong>Player Categories:</strong> Players will be divided into three categories: <strong>Gold, Silver, and Bronze</strong>. The points system will be announced before the auction.</li>
    <li><strong>3-Stage Auction Process:</strong>
      <ol>
        <li><strong>First Stage:</strong> Auction of all registered players.</li>
        <li><strong>Second Stage:</strong> Auction of all unsold players from the first stage (unsold players get one more chance; no further auction round held after that).</li>
        <li><strong>Third Stage:</strong> Each team may submit names of selected players for another auction (limit announced after the second stage).</li>
      </ol>
    </li>
  </ul>

  <h2>3. Game Rules and Regulations</h2>
  <ul>
    <li>Matches will follow standard indoor volleyball rules, except for tournament-specific changes announced by the organising committee.</li>
    <li><strong>Court Presence:</strong> Each team will consist of <strong>7 players at a time in the court and minimum 1 girl is mandatory in the court</strong>.</li>
    <li>Teams must follow official match rules.</li>
    <li><strong>Authority:</strong> The referee's decision will be absolute and final.</li>
  </ul>

  <h2>4. Match Format & Set Scores</h2>
  <table class="table-box">
    <thead>
      <tr>
        <th>Tournament Stage</th>
        <th>Format</th>
        <th>Set Point Breakdown</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Pool Matches</strong></td>
        <td>Best of 3 Sets</td>
        <td><strong>15 – 15 – 21</strong> Points</td>
      </tr>
      <tr>
        <td><strong>Semi-Finals</strong></td>
        <td>Best of 3 Sets</td>
        <td><strong>21 – 21 – 25</strong> Points</td>
      </tr>
      <tr>
        <td><strong>Championship Grand Final</strong></td>
        <td><strong>Best of 5 Sets</strong></td>
        <td><strong>21 – 21 – 21 – 21 – 25</strong> Points</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size: 11px; color: #64748b;">* The organising committee may announce match-duration, court, substitution, or other event-specific rules before the tournament.</p>

  <h2>5. Tournament Structure & Qualification (10 Teams)</h2>
  <div class="highlight-card">
    <ul>
      <li><strong>2 Pools Allocation:</strong> 10 teams divided into <strong>2 Pools (Pool A & Pool B)</strong> with 5 teams in each pool.</li>
      <li><strong>Round-Robin Matches:</strong> Each team will play every other team in its own pool once (<strong>4 pool matches per team</strong>).</li>
      <li><strong>Pool Standings:</strong> Pool A and Pool B standings will be calculated separately based on match wins.</li>
      <li><strong>Semi-Finals Qualification:</strong> The <strong>top 2 teams from each pool</strong> will qualify for the semi-finals:
        <br>• <strong>Semi-Final 1:</strong> Pool A 1st Place vs Pool B 2nd Place.
        <br>• <strong>Semi-Final 2:</strong> Pool B 1st Place vs Pool A 2nd Place.
      </li>
      <li><strong>Finals:</strong> The winners of both semi-finals will qualify for the Final. (The two semi-final losers may play a 3rd-place match if scheduled).</li>
    </ul>
  </div>

  <h2>6. Pool Ranking & Tie-Breaks</h2>
  <ul>
    <li>Pool standings will be determined by match wins.</li>
    <li>If teams are tied, the organising committee will apply tie-break criteria announced before the tournament, such as set ratio and point ratio.</li>
    <li><strong>NOTE:</strong> The organising committee may introduce or revise rules when necessary. Any updates will be communicated through the official WhatsApp groups.</li>
  </ul>

  <div class="sign-row">
    <div>
      <strong>Aditya</strong><br>
      Secretary, Volleyball<br>
      📞 95717 34643
    </div>
    <div>
      <strong>Anshu</strong><br>
      Joint Secretary, Volleyball<br>
      📞 83067 24203
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

if (!genCode.includes('volleyballHtml')) {
  // Insert volleyballHtml definition before Write HTML rulebooks
  genCode = genCode.replace('// Write HTML rulebooks', volleyballHtmlTemplate + '\n// Write HTML rulebooks');

  // Add volleyball writing and compilation
  const oldWriteBlock = `fs.writeFileSync(cricketHtmlPath, cricketHtml, 'utf8');
fs.writeFileSync(badmintonHtmlPath, badmintonHtml, 'utf8');
console.log('Saved cricket-rulebook.html and badminton-rulebook.html');`;

  const newWriteBlock = `fs.writeFileSync(cricketHtmlPath, cricketHtml, 'utf8');
fs.writeFileSync(badmintonHtmlPath, badmintonHtml, 'utf8');
const volleyballHtmlPath = path.join(docsDir, 'volleyball-rulebook.html');
fs.writeFileSync(volleyballHtmlPath, volleyballHtml, 'utf8');
console.log('Saved cricket, badminton, and volleyball HTML rulebooks.');`;

  genCode = genCode.replace(oldWriteBlock, newWriteBlock);

  // Add volleyball PDF compilation
  const oldPdfBlock = `const badmintonPdfPath = path.join(docsDir, 'badminton-rulebook.pdf');`;
  const newPdfBlock = `const badmintonPdfPath = path.join(docsDir, 'badminton-rulebook.pdf');
const volleyballPdfPath = path.join(docsDir, 'volleyball-rulebook.pdf');`;

  genCode = genCode.replace(oldPdfBlock, newPdfBlock);

  const oldGenEnd = `console.log('Generated badminton-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating badminton PDF:', e.message);
  }
}`;

  const newGenEnd = `console.log('Generated badminton-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating badminton PDF:', e.message);
  }

  try {
    console.log('Generating volleyball-rulebook.pdf via Edge headless...');
    execSync(\`"\${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="\${volleyballPdfPath}" "file:///\${volleyballHtmlPath.replace(/\\\\\\\\/g, '/')}"\`);
    console.log('Generated volleyball-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating volleyball PDF:', e.message);
  }
}`;

  genCode = genCode.replace(oldGenEnd, newGenEnd);

  fs.writeFileSync(genRulebooksPath, genCode, 'utf8');
  console.log('Updated scripts/generate-rulebooks.js to generate volleyball rulebook.');
}

// 4. Update index.html volleyball card tagline
const indexPath = path.join(__dirname, '..', 'index.html');
let index = fs.readFileSync(indexPath, 'utf8');
index = index.replace(
  'Inter-batch championship played during lunch hours at the College Ground.',
  '10 Teams in 2 Pools with Player Auction & Mixed-Gender Squads (Min 1 Girl Mandatory).'
);
fs.writeFileSync(indexPath, index, 'utf8');
console.log('Updated index.html volleyball card tagline.');
