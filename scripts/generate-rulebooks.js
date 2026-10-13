const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const docsDir = path.join(__dirname, '..', 'assets', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// 1. Cricket Rulebook HTML
const cricketHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ventura 2k26 - Official Cricket Rulebook | IIIT Vadodara</title>
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
      border-bottom: 2px solid #f59e0b;
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
      background: #fef3c7;
      color: #b45309;
      border: 1px solid #fde68a;
      font-weight: 700;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 9999px;
    }
    h2 {
      font-size: 14px;
      color: #0f172a;
      border-left: 3px solid #f59e0b;
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
      background: #fffbeb;
      border: 1px solid #fde68a;
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
      <h1>🏏 CRICKET TOURNAMENT — OFFICIAL RULEBOOK</h1>
      <p>VENTURA 2k26 • INDIAN INSTITUTE OF INFORMATION TECHNOLOGY VADODARA</p>
    </div>
    <div class="badge">OFFICIAL & FINAL</div>
  </div>

  <h2>1. General Tournament Overview</h2>
  <p>The Ventura 2k26 Cricket Championship is an inter-batch tournament played with a <strong>Leather Ball</strong> under strict playing guidelines, featuring player auctions, round-robin pool stages, and an IPL-style playoff qualification format.</p>
  <ul>
    <li><strong>Venue:</strong> CRPF Ground</li>
    <li><strong>Tournament Dates:</strong> 24th & 31st October (08:00 AM – 06:00 PM)</li>
    <li><strong>Match Ball:</strong> High-grade <strong>Leather Ball</strong> (provided by Sports Committee)</li>
    <li><strong>Kit & Equipment:</strong> Full tournament equipment provided. Players may bring personal protective gear (L-guard, supporter, personal bat).</li>
  </ul>

  <h2>2. Registration & Participation Fee</h2>
  <ul>
    <li><strong>Online Registration:</strong> All entries must be registered via the official Ventura online portal.</li>
    <li><strong>Participation Fee:</strong> <strong>₹30/- per player</strong>.</li>
    <li><strong>Unsold Player Protection:</strong> The participation fee of any player who remains unsold across all auction rounds will be <strong>100% refunded</strong>.</li>
  </ul>

  <h2>3. Player Auction System & Details</h2>
  <ul>
    <li><strong>Player Tiers:</strong> Registered players will be categorized into three tiers: <strong>Gold, Silver, and Bronze</strong> based on verified skill profile.</li>
    <li><strong>Points System:</strong> Team bidding purse and points allocations will be announced prior to the auction.</li>
    <li><strong>Squad Limits:</strong> Minimum and maximum squad caps per team will be finalized post-registration. Any team failing to draft the minimum player count as per the rule will be <strong>disqualified</strong>.</li>
    <li><strong>3-Stage Auction Process:</strong>
      <ol>
        <li><strong>Stage 1 (Primary Round):</strong> All registered players go under the hammer.</li>
        <li><strong>Stage 2 (Unsold Round):</strong> All unsold players from Round 1 get one final opportunity.</li>
        <li><strong>Stage 3 (Shortlisted Nominations):</strong> Each team submits specific player names (limit defined after Round 2) for re-auction. No further auction rounds will be held after Stage 3.</li>
      </ol>
    </li>
  </ul>

  <h2>4. Match Formats, Overs & Powerplay</h2>
  <table class="table-box">
    <thead>
      <tr>
        <th>Stage / Match</th>
        <th>Overs Per Innings</th>
        <th>Mandatory Powerplay</th>
        <th>Bowler Max Quota</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Pool Stage Matches</strong></td>
        <td>10 Overs</td>
        <td>First 3 Overs</td>
        <td>Max 2 overs per bowler</td>
      </tr>
      <tr>
        <td><strong>The Qualifier</strong></td>
        <td>10 Overs</td>
        <td>First 3 Overs</td>
        <td>Max 2 overs per bowler</td>
      </tr>
      <tr>
        <td><strong>The Eliminator</strong></td>
        <td>10 Overs</td>
        <td>First 3 Overs</td>
        <td>Max 2 overs per bowler</td>
      </tr>
      <tr>
        <td><strong>Championship Grand Final</strong></td>
        <td><strong>15 Overs</strong></td>
        <td><strong>First 5 Overs</strong></td>
        <td>Max 3 overs per bowler</td>
      </tr>
    </tbody>
  </table>

  <h2>5. Tournament Structure & Pool Matches</h2>
  <ul>
    <li><strong>Pool Allocation:</strong> 6 teams divided into <strong>2 Pools (Pool A & Pool B)</strong> with 3 teams in each pool.</li>
    <li><strong>Pool Round-Robin:</strong> In the pool stage, each team will play <strong>2 matches</strong> against every other team in the same pool.</li>
  </ul>

  <h2>6. Playoff Qualification Rules</h2>
  <div class="highlight-card">
    <ol>
      <li><strong>The Qualifier:</strong> The top-ranked team from Pool A plays against the top-ranked team from Pool B.</li>
      <li><strong>Direct Final Entry:</strong> The <strong>winner of the Qualifier</strong> advances directly to the Championship Grand Final.</li>
      <li><strong>Second Chance:</strong> The <strong>loser of the Qualifier</strong> will play in <strong>The Eliminator</strong>.</li>
      <li><strong>The Eliminator:</strong> Played between the <strong>loser of the Qualifier</strong> and the <strong>best-ranked team</strong> among the remaining teams from both pools.</li>
      <li><strong>Grand Final:</strong> The <strong>winner of the Eliminator</strong> qualifies for the Final against the Winner of the Qualifier.</li>
    </ol>
  </div>

  <h2>7. Playing Rules & Exceptions</h2>
  <ul>
    <li>All standard ICC playing conditions apply with college ground local boundary rules.</li>
    <li><strong>EXCEPTIONS:</strong> Strictly <strong>NO LBW</strong> and <strong>NO DRS</strong>.</li>
    <li><strong>Umpire Authority:</strong> The on-field umpire's decision is absolute and final. Any dissent will attract immediate penalty points.</li>
    <li><strong>Amendments:</strong> Any situational updates or new guidelines will be conveyed directly through official WhatsApp groups.</li>
  </ul>

  <div class="sign-row">
    <div>
      <strong>Abhishek Biban</strong><br>
      Secretary, Cricket Committee<br>
      📞 76270 37197
    </div>
    <div>
      <strong>Rohit Sharma</strong><br>
      Joint Secretary, Cricket Committee<br>
      📞 83491 18308
    </div>
    <div>
      <strong>Aman</strong><br>
      Secretary, Sports Committee<br>
      📞 83185 67785
    </div>
  </div>

</body>
</html>
`;

// 2. Badminton Rulebook HTML
const badmintonHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ventura 2026-27 - Official Badminton Rulebook | IIIT Vadodara</title>
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
      border-bottom: 2px solid #3b82f6;
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
      background: #dbeafe;
      color: #1d4ed8;
      border: 1px solid #bfdbfe;
      font-weight: 700;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 9999px;
    }
    h2 {
      font-size: 14px;
      color: #0f172a;
      border-left: 3px solid #3b82f6;
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
      background: #eff6ff;
      border: 1px solid #bfdbfe;
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
      <h1>🏸 BADMINTON TOURNAMENT — OFFICIAL RULEBOOK</h1>
      <p>VENTURA 2026-27 • INDIAN INSTITUTE OF INFORMATION TECHNOLOGY VADODARA</p>
    </div>
    <div class="badge">OFFICIAL & FINAL</div>
  </div>

  <h2>1. Tournament Overview & Venue</h2>
  <p>The Ventura Badminton Tournament is organized as an official collegiate tournament at the high-standard indoor wooden courts of <strong>Aloka Sports Academy</strong>.</p>
  <ul>
    <li><strong>Venue:</strong> Aloka Sports Academy (Indoor Wooden Courts)</li>
    <li><strong>Tournament Dates:</strong> 18th & 20th October</li>
    <li><strong>Transportation:</strong> College buses provided for all participants between campus and Aloka Sports Academy.</li>
    <li><strong>Official Shuttles:</strong> High-grade Yonex Mavis 350 nylon shuttles will be used for all official ties.</li>
  </ul>

  <h2>2. Categories & Registration</h2>
  <ul>
    <li><strong>Categories:</strong>
      <ol>
        <li>Men's Singles</li>
        <li>Women's Singles</li>
        <li>Men's Doubles</li>
        <li>Mixed Doubles</li>
      </ol>
    </li>
    <li><strong>Registration Deadline:</strong> <strong>15th October (Strict Deadline)</strong>. No entries entertained post-deadline.</li>
    <li><strong>Doubles Pairing:</strong> Both partners must be finalized prior to submitting registration.</li>
  </ul>

  <h2>3. Date & Batch Match Schedule</h2>
  <table class="table-box">
    <thead>
      <tr>
        <th>Date</th>
        <th>Slot / Batch</th>
        <th>Events Scheduled</th>
        <th>Participation Guidelines</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>18th October</strong></td>
        <td>After 02:00 PM</td>
        <td>Men's Singles & Men's Doubles (Rounds)</td>
        <td>Senior Batches (2nd, 3rd, 4th Year, Postgrads)</td>
      </tr>
      <tr>
        <td><strong>18th October</strong></td>
        <td>After 06:00 PM</td>
        <td>Men's Singles & Men's Doubles (Rounds)</td>
        <td><strong>1st Year Freshers Only</strong></td>
      </tr>
      <tr>
        <td colspan="4" style="background: #fef2f2; color: #991b1b; font-size: 11px; padding: 6px 10px;">
          ⚠️ <strong>Night Travel Safety Policy:</strong> On 18th October, only boys will participate as girls are not permitted to travel to Aloka Sports Academy at night.
        </td>
      </tr>
      <tr>
        <td><strong>20th October</strong></td>
        <td>Full Day Championship</td>
        <td>Quarter-Finals, Semi-Finals, Grand Finals, <strong>Girls' Singles</strong> & <strong>Mixed Doubles</strong></td>
        <td>All Qualified Players across all batches</td>
      </tr>
    </tbody>
  </table>

  <h2>4. Match Playing Rules & Standards</h2>
  <ul>
    <li><strong>BWF Standards:</strong> All matches conducted strictly under Badminton World Federation (BWF) 21-point rally scoring system.</li>
    <li><strong>Footwear Regulation:</strong> <strong>Non-marking badminton shoes are strictly mandatory</strong> inside the Aloka wooden hall. Players with running shoes or black soles will not be allowed on court.</li>
    <li><strong>Reporting & Walkover:</strong> Players must report 15 minutes before scheduled match slot. Walkover awarded if player fails to appear within 10 minutes of court call.</li>
    <li><strong>Referee Decision:</strong> The decision of the chief umpire and sports committee is absolute and binding.</li>
  </ul>

  <div class="sign-row">
    <div>
      <strong>Ipsit</strong><br>
      Secretary, Badminton<br>
      📞 91387 05033
    </div>
    <div>
      <strong>Abhishek Patil</strong><br>
      Joint Secretary, Badminton<br>
      📞 83293 82940
    </div>
    <div>
      <strong>Aman</strong><br>
      Secretary, Sports Committee<br>
      📞 83185 67785
    </div>
  </div>

</body>
</html>
`;


// 3. Volleyball Rulebook HTML
const volleyballHtml = `<!DOCTYPE html>
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
`;


// 4. Carrom Rulebook HTML
const carromHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ventura 2k26 - Official Carrom Tournament Rulebook | IIIT Vadodara</title>
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
      border-bottom: 2px solid #ec4899;
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
      background: #fdf2f8;
      color: #be185d;
      border: 1px solid #fbcfe8;
      font-weight: 700;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 9999px;
    }
    h2 {
      font-size: 14px;
      color: #0f172a;
      border-left: 3px solid #ec4899;
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
      background: #fdf2f8;
      color: #be185d;
      font-weight: 600;
    }
    .highlight-box {
      background: #fdf2f8;
      border: 1px solid #fbcfe8;
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
      <h1>CARROM TOURNAMENT RULEBOOK</h1>
      <p>Annual Sports Fest • IIIT Vadodara (GN) • Ventura 2k26</p>
    </div>
    <div class="badge">Official Tournament Draft</div>
  </div>

  <p><em>This rulebook sets out the playing conditions, conduct expectations, and match procedures for the annual sports fest. The Sports Committee should announce any tournament-specific choices before matches begin.</em></p>

  <h2>1. Tournament Categories</h2>
  <ul>
    <li><strong>Singles:</strong> One player competes against one player.</li>
    <li><strong>Doubles:</strong> Two players compete as a team against another team of two.</li>
    <li>Open to eligible B.Tech, MCA, and M.Tech students across all batches, subject to the event registration notice.</li>
  </ul>

  <h2>2. Match Format & Reporting</h2>
  <ul>
    <li>The default format is <strong>knockout</strong> unless the organizers announce otherwise.</li>
    <li>Each match is recommended to be <strong>best of three boards</strong>; the first player/team to win two boards wins the match.</li>
    <li>The final may be <strong>best of five boards</strong> if announced in advance.</li>
    <li>The organizers will publish the draw, schedule, venue, and reporting time.</li>
    <li>A player/team that does not report within the announced grace period may forfeit the match.</li>
  </ul>

  <h2>3. Equipment and Seating</h2>
  <ul>
    <li>The organizers will provide the board, carrom men, and striker, unless stated otherwise.</li>
    <li>In singles, players sit opposite one another. In doubles, teammates sit opposite one another.</li>
    <li>Use only the striker approved for the event.</li>
    <li>Players must not lift, tilt, shake, or move the board during play.</li>
  </ul>

  <h2>4. Basic Playing Rules</h2>
  <ul>
    <li>The referee determines who starts, by toss or another announced method.</li>
    <li>The striker must be placed within the player's permitted baseline area and flicked with a finger.</li>
    <li>Pushing, throwing, or otherwise propelling the striker illegally is not permitted.</li>
    <li>A player continues their turn after legally pocketing one or more of their own carrom men; otherwise, the turn passes to the opponent.</li>
    <li>Players must not touch or reposition carrom men by hand or with another object during play.</li>
    <li>If a coin or striker leaves the board, stop play and ask the referee to restore the position under the event's adopted rules.</li>
  </ul>

  <h2>5. Queen (Red Carrom Man)</h2>
  <div class="highlight-box">
    <strong>Queen Rules:</strong> The red carrom man is called the Queen. The Queen must be covered by legally pocketing one of the player's/team's own carrom men on the same turn or the next eligible turn, as determined by the adopted rules. If the Queen is not covered, it is returned to the centre in accordance with the referee's ruling. Players should ask the referee to clarify any Queen-related situation before play resumes.
  </div>

  <h2>6. Fouls and Penalties</h2>
  <ul>
    <li><strong>Pocketing the striker</strong> is a foul.</li>
    <li>Making an illegal strike, playing from outside the permitted area, or striking out of turn may be called a foul.</li>
    <li>Improperly touching or moving carrom men, disturbing the board, or deliberately distracting an opponent is not allowed.</li>
    <li>The turn ends after a foul. Where required by the adopted rules, a previously pocketed carrom man is returned as a <strong>penalty coin</strong>.</li>
    <li>The referee will apply the announced penalty consistently. The exact penalty procedure should be confirmed before the tournament.</li>
  </ul>

  <h2>7. Scoring</h2>
  <table class="grid-table">
    <thead>
      <tr>
        <th>Outcome</th>
        <th>Points Awarded</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Winning a Board</td>
        <td>1 point for each opposing carrom man left on the board.</td>
      </tr>
      <tr>
        <td>Pocketing & Covering Queen</td>
        <td>3 additional points (subject to scoring rules announced before play).</td>
      </tr>
      <tr>
        <td>Foul (Striker Pocketed / Illegal Strike)</td>
        <td>Turn ends; 1 penalty coin returned to centre if applicable.</td>
      </tr>
    </tbody>
  </table>
  <p>The organizers must confirm whether they will use this simplified scoring or the full official scoring system before the event starts. Any scoring objection must be raised before the next board begins.</p>

  <h2>8. Doubles-Specific Rules</h2>
  <ul>
    <li>Both teammates must be registered and eligible participants.</li>
    <li>Teammates sit opposite each other and take turns in the order directed by the referee.</li>
    <li>Teammates may communicate between turns but must not distract an opponent during a strike.</li>
    <li>Substitutions after a match begins are not allowed unless explicitly approved by the organizers.</li>
  </ul>

  <h2>9. Conduct and Sportsmanship</h2>
  <ul>
    <li>Treat opponents, teammates, referees, and organizers respectfully.</li>
    <li>Abusive language, cheating, intentional distraction, or unsporting behaviour may result in a warning or disqualification.</li>
    <li>Spectators must not interfere with an ongoing match. Raise concerns politely and promptly with the referee.</li>
  </ul>

  <h2>10. Disputes, Disqualification & Organizer Checklist</h2>
  <ul>
    <li>Raise an objection immediately after the incident and before the next turn begins.</li>
    <li>The referee may pause play briefly to hear the issue and make a ruling. Repeated misconduct or refusal to follow instructions leads to disqualification.</li>
    <li><strong>Checklist:</strong> Organizers confirm whether the final is best of three or five boards, announce grace period, time limit per board, and assign referees.</li>
  </ul>

  <h2>11. Final Authority</h2>
  <p>Participation implies acceptance of the announced tournament rules. The Sports Committee may make reasonable operational changes and will communicate them before they affect play. The referee's on-board decisions are final for the event, subject to any appeal procedure announced by the Sports Committee.</p>
  <p style="text-align: center; font-weight: bold; margin: 12px 0; color: #be185d;">
    "Play fair. Respect your opponent. Let your skills decide the winner!"
  </p>

  <div class="sign-row">
    <div>
      <strong>Harshit Dhaker</strong><br>
      Secretary, Carrom<br>
      📞 86194 59354
    </div>
    <div>
      <strong>Aashu Raj</strong><br>
      Joint Secretary, Carrom<br>
      📞 91428 79660
    </div>
    <div>
      <strong>Aman</strong><br>
      Secretary, Sports Committee<br>
      📞 83185 67785
    </div>
  </div>

</body>
</html>
`;


// 5. Football Rulebook HTML
const footballHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ventura 2k26 - Official Football Tournament Rulebook | IIIT Vadodara</title>
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
      border-bottom: 2px solid #10b981;
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
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
      font-weight: 700;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 9999px;
    }
    h2 {
      font-size: 14px;
      color: #0f172a;
      border-left: 3px solid #10b981;
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
      background: #ecfdf5;
      color: #047857;
      font-weight: 600;
    }
    .highlight-box {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
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
      <h1>FOOTBALL TOURNAMENT RULEBOOK</h1>
      <p>IIIT Vadodara • Official Tournament Rules • Ventura 2k26</p>
    </div>
    <div class="badge">11-A-Side • 8 Teams • 2 Groups</div>
  </div>

  <h2>Tournament at a Glance</h2>
  <table class="grid-table">
    <tbody>
      <tr><td><strong>Organizer</strong></td><td>IIIT Vadodara</td></tr>
      <tr><td><strong>Eligibility</strong></td><td>IIIT Vadodara students only</td></tr>
      <tr><td><strong>Registration Fee</strong></td><td>Online registration • ₹20 per player</td></tr>
      <tr><td><strong>Team Owners</strong></td><td>8 owners • ₹200 per owner • owners do not play</td></tr>
      <tr><td><strong>Squad Size</strong></td><td>13–15 players per team, including substitutes (11 on field)</td></tr>
    </tbody>
  </table>

  <h2>1. Registration & Team Formation Rules</h2>
  <ul>
    <li>Player registration will be conducted online. Participation fee is <strong>₹20 per player</strong>.</li>
    <li>Each team owner will pay <strong>₹200</strong>. Owners are not eligible to play for the teams they own.</li>
    <li>Owners will select their team captain.</li>
    <li>Team formation will take place through an auction on <strong>Wednesday, 21 October 2026</strong>.</li>
    <li>Each team must have a squad of <strong>13–15 players</strong>, including substitutes. Eleven players take the field for an 11-a-side match.</li>
  </ul>

  <h2>2. Tournament Dates, Venues & Timings</h2>
  <table class="grid-table">
    <thead>
      <tr><th>Date</th><th>Venue</th><th>Event Window</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Sunday, 25 October 2026</td>
        <td>CRPF Ground</td>
        <td>8:00 AM – 12:00 PM &amp; 2:00 PM – 6:00 PM (Break 12:00–2:00 PM)</td>
      </tr>
      <tr>
        <td>Sunday, 1 November 2026</td>
        <td>IIT Ground</td>
        <td>4:30 PM – 9:00 PM (Under Lights)</td>
      </tr>
    </tbody>
  </table>

  <h2>3. Match Format & Qualification</h2>
  <ul>
    <li><strong>8 Teams, 2 Groups:</strong> Group A and Group B (4 teams each). Shortened schedule: each team plays 2 group-stage matches.</li>
    <li><strong>Points System:</strong> Win: 3 points | Draw: 1 point | Loss: 0 points.</li>
    <li><strong>Tie-Breakers:</strong> Goal difference, then goals scored, then head-to-head result.</li>
    <li><strong>Semi-Finals:</strong> Top 2 teams from each group qualify.<br>
      • <em>Semi-Final 1:</em> Group A 1st place (A1) vs Group B 2nd place (B2).<br>
      • <em>Semi-Final 2:</em> Group B 1st place (B1) vs Group A 2nd place (A2).
    </li>
    <li>The winners of both semi-finals qualify for the Final. No third-place match will be played.</li>
  </ul>

  <h2>4. Match Duration & Tie Resolution</h2>
  <ul>
    <li><strong>Group-Stage & Semi-Finals:</strong> Two halves of <strong>20 minutes</strong> each. Half-time break: 5 minutes.</li>
    <li><strong>Grand Final:</strong> Two halves of <strong>25 minutes</strong> each. Half-time break: 5 minutes.</li>
    <li><strong>Tied Knockout Matches:</strong> Decided by a standard penalty shootout (5 kicks per team, followed by sudden death).</li>
  </ul>

  <h2>5. Game Rules, Substitutions & Discipline</h2>
  <ul>
    <li>Matches follow standard football rules. The standard <strong>offside rule applies</strong>.</li>
    <li><strong>Rolling Substitutions:</strong> Permitted with a maximum of three players substituted per team per match.</li>
    <li><strong>Discipline:</strong> 2 yellow cards in the same match result in a red card (player leaves, team plays with one fewer).</li>
    <li><strong>Strict Kickoff:</strong> Teams must be ready at scheduled time. No grace period provided. Failure to appear results in a <strong>3–0 walkover</strong>.</li>
    <li>Winner and runner-up trophies will be awarded.</li>
  </ul>

  <div class="sign-row">
    <div>
      <strong>Mohit Shekhawat</strong><br>
      Secretary, Football<br>
      ✉️ 202451109@iiitvadodara.ac.in
    </div>
    <div>
      <strong>Shikhar Singh</strong><br>
      Joint Secretary, Football<br>
      ✉️ 20251504070@iiitvadodara.ac.in
    </div>
    <div>
      <strong>Aman</strong><br>
      Secretary, Sports Committee<br>
      📞 83185 67785
    </div>
  </div>

</body>
</html>
`;


// 6. Athletics & Tug of War Rulebook HTML
const athleticsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ventura 2k26 - Tug of War & Athletics Rulebook | IIIT Vadodara</title>
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
      border-bottom: 2px solid #ef4444;
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
      background: #fef2f2;
      color: #b91c1c;
      border: 1px solid #fecaca;
      font-weight: 700;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 9999px;
    }
    h2 {
      font-size: 14px;
      color: #0f172a;
      border-left: 3px solid #ef4444;
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
      background: #fef2f2;
      color: #b91c1c;
      font-weight: 600;
    }
    .highlight-box {
      background: #fef2f2;
      border: 1px solid #fecaca;
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
      <h1>RULES FOR TUG OF WAR & ATHLETICS</h1>
      <p>Annual Sports Meet • IIIT Vadodara • Ventura 2k26</p>
    </div>
    <div class="badge">Official Tournament Bylaws</div>
  </div>

  <h2>1. Registration Rules & Fees</h2>
  <ul>
    <li>Registrations will be online.</li>
    <li><strong>Participation Fees:</strong>
      <ul>
        <li>₹20/- per individual event</li>
        <li>₹100/- for Tug of War (5 players)</li>
        <li>₹80/- for 4x100m Relay</li>
      </ul>
    </li>
    <li>For solo registrations, random teams will be allotted as per the registrations.</li>
  </ul>

  <h2>2. Game Rules and Regulations</h2>
  <ul>
    <li><strong>Tug of War:</strong> Held in the institute premises during college days. League matches between 2 different pools. Each team will consist of <strong>5 players</strong>. Every player should be present on the day of their match.</li>
    <li><strong>Athletics:</strong> Held on <strong>CRPF ground</strong>. It will be conducted in slots with the best timing becoming the winner.</li>
    <li><strong>Mandatory Outfit:</strong> Sports outfit is mandatory to participate.</li>
    <li><strong>Authority:</strong> The referee's decision will be final.</li>
  </ul>

  <h2>3. Match Format & Tournament Structure</h2>
  <div class="highlight-box">
    <strong>Tug of War League:</strong> There will be 2 pools for both girls and boys. Each team will play every other team in its own pool once. Pool A and Pool B standings calculated separately.
  </div>
  <ul>
    <li><strong>Match Format (Tug of War):</strong>
      <ul>
        <li>Pool matches: <strong>Best of 3 pulls</strong></li>
        <li>Semi-finals: <strong>Best of 3 pulls</strong></li>
        <li>Final: <strong>Best of 3 pulls</strong></li>
      </ul>
    </li>
    <li><strong>Match Format (Athletics):</strong> Races will be done in slots. Final will be decided on the basis of top best timings.</li>
  </ul>

  <h2>4. Qualification & Tie-Breaks</h2>
  <ul>
    <li><strong>Playoffs:</strong> The top 2 teams from each pool qualify for the semi-finals:
      <ul>
        <li><em>Semi-Final 1:</em> Pool A 1st place vs Pool B 2nd place</li>
        <li><em>Semi-Final 2:</em> Pool B 1st place vs Pool A 2nd place</li>
      </ul>
    </li>
    <li>The winners of both semi-finals will qualify for the Final. (The two semi-final losers may play a third-place match if scheduled).</li>
    <li><strong>Pool Ranking & Tie-Breaks:</strong> Pool standings determined by match wins. If teams are tied, tie-break criteria announced before tournament will apply.</li>
  </ul>

  <p><em>NOTE: The organising committee may introduce or revise rules when necessary. Any updates will be communicated through the official WhatsApp groups.</em></p>

  <div class="sign-row">
    <div>
      <strong>Sarthak</strong><br>
      Secretary, Athletics<br>
      📞 74094 02485
    </div>
    <div>
      <strong>Yash</strong><br>
      Joint Secretary, Athletics<br>
      📞 81808 74428
    </div>
    <div>
      <strong>Aman</strong><br>
      Secretary, Sports Committee<br>
      📞 83185 67785
    </div>
  </div>

</body>
</html>
`;

// Write HTML rulebooks
const cricketHtmlPath = path.join(docsDir, 'cricket-rulebook.html');
const badmintonHtmlPath = path.join(docsDir, 'badminton-rulebook.html');
fs.writeFileSync(cricketHtmlPath, cricketHtml, 'utf8');
fs.writeFileSync(badmintonHtmlPath, badmintonHtml, 'utf8');
const volleyballHtmlPath = path.join(docsDir, 'volleyball-rulebook.html');
fs.writeFileSync(volleyballHtmlPath, volleyballHtml, 'utf8');
const carromHtmlPath = path.join(docsDir, 'carrom-rulebook.html');
fs.writeFileSync(carromHtmlPath, carromHtml, 'utf8');
const footballHtmlPath = path.join(docsDir, 'football-rulebook.html');
const athleticsHtmlPath = path.join(docsDir, 'athletics-rulebook.html');
fs.writeFileSync(footballHtmlPath, footballHtml, 'utf8');
fs.writeFileSync(athleticsHtmlPath, athleticsHtml, 'utf8');
console.log('Saved cricket, badminton, volleyball, carrom, football, and athletics HTML rulebooks.');

// Compile to PDF using Edge headless
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const cricketPdfPath = path.join(docsDir, 'cricket-rulebook.pdf');
const badmintonPdfPath = path.join(docsDir, 'badminton-rulebook.pdf');
const volleyballPdfPath = path.join(docsDir, 'volleyball-rulebook.pdf');
const carromPdfPath = path.join(docsDir, 'carrom-rulebook.pdf');
const footballPdfPath = path.join(docsDir, 'football-rulebook.pdf');
const athleticsPdfPath = path.join(docsDir, 'athletics-rulebook.pdf');

if (fs.existsSync(edgePath)) {
  try {
    console.log('Generating cricket-rulebook.pdf via Edge headless...');
    execSync(`"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${cricketPdfPath}" "file:///${cricketHtmlPath.replace(/\\\\/g, '/')}"`);
    console.log('Generated cricket-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating cricket PDF:', e.message);
  }

  try {
    console.log('Generating badminton-rulebook.pdf via Edge headless...');
    execSync(`"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${badmintonPdfPath}" "file:///${badmintonHtmlPath.replace(/\\\\/g, '/')}"`);
    console.log('Generated badminton-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating badminton PDF:', e.message);
  }

  try {
    console.log('Generating volleyball-rulebook.pdf via Edge headless...');
    execSync(`"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${volleyballPdfPath}" "file:///${volleyballHtmlPath.replace(/\\\\/g, '/')}"`);
    console.log('Generated volleyball-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating volleyball PDF:', e.message);
  }

  try {
    console.log('Generating carrom-rulebook.pdf via Edge headless...');
    execSync(`"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${carromPdfPath}" "file:///${carromHtmlPath.replace(/\\\\/g, '/')}"`);
    console.log('Generated carrom-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating carrom PDF:', e.message);
  }

  try {
    console.log('Generating football-rulebook.pdf via Edge headless...');
    execSync(`"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${footballPdfPath}" "file:///${footballHtmlPath.replace(/\\\\/g, '/')}"`);
    console.log('Generated football-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating football PDF:', e.message);
  }

  try {
    console.log('Generating athletics-rulebook.pdf via Edge headless...');
    execSync(`"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${athleticsPdfPath}" "file:///${athleticsHtmlPath.replace(/\\\\/g, '/')}"`);
    console.log('Generated athletics-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating athletics PDF:', e.message);
  }


}
