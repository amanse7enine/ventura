const fs = require('fs');
const path = require('path');

// 1. Update assets/js/sports-data.js
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sportsDataContent = fs.readFileSync(sportsDataPath, 'utf8');

const carromUpdatedBlock = `  carrom: {
    id: "carrom",
    name: "Carrom",
    slug: "carrom.html",
    tagline: "Official Singles & Doubles Championship • Knockout Format",
    category: "Board Sport",
    icon: "🎯",
    color: "#ec4899", // Rose / pink
    heroImage: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&w=1200&q=80",
    venue: "Institute Premises",
    dates: "From 20th Oct",
    timings: "01:00 PM – 03:00 PM",
    registrationDeadline: "Registration Open",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScUW9LNPyS1EtKJ-JcF_T2884Mid-UaDolH4jT27K84haHBlQ/viewform?usp=publish-editor",
    registrationOptions: [
      { label: "Carrom Singles Registration", link: "https://docs.google.com/forms/d/e/1FAIpQLScUW9LNPyS1EtKJ-JcF_T2884Mid-UaDolH4jT27K84haHBlQ/viewform?usp=publish-editor" },
      { label: "Carrom Doubles Registration", link: "https://docs.google.com/forms/d/e/1FAIpQLSckxKcpl3ljd9Fnb5ogxKYB5Y9HFrK5G3GrKJRbUTRbYqp_AQ/viewform?usp=publish-editor" }
    ],
    rulebookPdf: "assets/docs/carrom-rulebook.pdf",
    categoriesList: [
      "Carrom Singles Championship",
      "Carrom Doubles League"
    ],
    rules: [
      "<strong>Tournament Categories:</strong> Singles (1 player vs 1 player) and Doubles (2 players vs 2 players). Open to eligible B.Tech, MCA, and M.Tech students across all batches.",
      "<strong>Match Format & Draw:</strong> Knockout tournament format. Matches are recommended Best of 3 boards (first to win 2 boards wins the match). Grand Final may be Best of 5 boards. Participants not reporting within the announced grace period will forfeit.",
      "<strong>Equipment & Seating:</strong> Organizers provide tournament board, carrom men, and approved striker. In singles, opponents sit opposite each other; in doubles, teammates sit opposite each other. Players must not lift, tilt, shake, or move the board during play.",
      "<strong>Basic Playing Rules:</strong> Toss / referee method decides who starts. Striker must be placed within permitted baseline area and flicked with a finger (pushing, throwing, or illegal propelling is strictly prohibited). Turn continues after legally pocketing own coin; otherwise passes to opponent. Touching or repositioning coins by hand is forbidden. Referee restores coins leaving the board.",
      "<strong>The Queen (Red Coin):</strong> The red carrom man is the Queen. The Queen must be covered by legally pocketing one of player's/team's own carrom men on the same turn or the next eligible turn. If uncovered, the Queen is returned to the center by the referee.",
      "<strong>Fouls & Penalties:</strong> Pocketing the striker is a foul. Making an illegal strike, playing outside the baseline, striking out of turn, or disturbing the board ends the turn. Where required, a previously pocketed carrom man is returned to the center as a penalty coin.",
      "<strong>Scoring System:</strong> A board is won when a player/team legally pockets all their own carrom men, subject to the Queen rule. Winner receives 1 point for each opposing carrom man left on board. Legally pocketing and covering the Queen awards 3 additional points. Any scoring objections must be raised before the next board begins.",
      "<strong>Doubles Regulations:</strong> Both teammates must be registered and eligible. Teammates sit opposite and take turns in referee-directed order. Teammates may communicate between turns, but must never distract an opponent during a strike. Substitutions mid-match are not permitted.",
      "<strong>Conduct & Sportsmanship:</strong> Respect opponents, teammates, referees, and organizers. Abusive language, cheating, or intentional distraction leads to warning or disqualification. Spectators must not interfere with matches.",
      "<strong>Disputes & Final Authority:</strong> Objections must be raised immediately before the next turn starts. Referee on-board decisions are final for the event. Sports Committee – IIITV (GN) holds final operational and administrative authority."
    ],
    schedule: [
      { date: "From 20 Oct", time: "01:00 PM - 03:00 PM", stage: "Singles & Doubles Opening Knockout Rounds (Best of 3 Boards)", court: "Institute Premises", status: "upcoming" },
      { date: "Ongoing", time: "01:00 PM - 03:00 PM", stage: "Quarter-Finals & Semi-Finals (Best of 3 Boards)", court: "Institute Premises", status: "upcoming" },
      { date: "Finals Day", time: "01:00 PM - 03:00 PM", stage: "Carrom Championship Grand Finals (Best of 5 Boards)", court: "Institute Premises", status: "upcoming" }
    ],
    fixtures: [],
    coordinators: [
      { name: "Harshit Dhaker", role: "Secretary", phone: "8619459354", email: "202451073@iiitvadodara.ac.in" },
      { name: "Aashu Raj", role: "Joint Secretary (Jsec)", phone: "9142879660", email: "20251501003@iiitvadodara.ac.in" }
    ]
  },`;

sportsDataContent = sportsDataContent.replace(
  /  carrom: \{[\s\S]*?\n  \},/,
  carromUpdatedBlock
);
fs.writeFileSync(sportsDataPath, sportsDataContent, 'utf8');
console.log('Updated assets/js/sports-data.js with new Carrom rules and data.');

// 2. Update scripts/build-sports-pages.js
const buildPagesPath = path.join(__dirname, 'build-sports-pages.js');
let buildPagesContent = fs.readFileSync(buildPagesPath, 'utf8');

const carromMatchCardCode = `  const carromMatchCard = sport.id === 'carrom' ? \`
            <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(236, 72, 153, 0.05); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: var(--radius-md);">
              <h4 style="color: #ec4899; display: flex; align-items: center; gap: 8px; margin: 0 0 0.5rem 0; font-size: 1.05rem;">
                <span>🎯</span> Tournament Format & Board Rules
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                Official Singles & Doubles Knockout Tournament. Conducted in Institute Premises.
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #ec4899;">
                  <strong style="color: #fff; font-size: 0.88rem;">1. Knockout Structure</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Singles (1v1) & Doubles (2v2).<br>• Opening & Quarters: <strong>Best of 3 Boards</strong> (first to 2).<br>• Grand Final: <strong>Best of 5 Boards</strong>.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #f43f5e;">
                  <strong style="color: #fff; font-size: 0.88rem;">2. Queen & Covering Rule</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Queen (Red): <strong>+3 Points</strong>.<br>• Must be covered on same or next eligible turn.<br>• If uncovered, returned to center by referee.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #10b981;">
                  <strong style="color: #fff; font-size: 0.88rem;">3. Scoring & Penalties</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• <strong>1 point</strong> per opposing coin left on board.<br>• Pocketing striker = Foul + 1 penalty coin.<br>• Referee on-board decision final.</p>
                </div>
              </div>
            </div>
  \` : '';
`;

if (!buildPagesContent.includes('carromMatchCard')) {
  buildPagesContent = buildPagesContent.replace(
    '  const volleyballPlayoffCard =',
    `${carromMatchCardCode}\n  const volleyballPlayoffCard =`
  );

  buildPagesContent = buildPagesContent.replace(
    '            ${volleyballPlayoffCard}',
    '            ${volleyballPlayoffCard}\n            ${carromMatchCard}'
  );

  fs.writeFileSync(buildPagesPath, buildPagesContent, 'utf8');
  console.log('Added carromMatchCard to build-sports-pages.js.');
}

// 3. Update scripts/generate-rulebooks.js
const genRulebooksPath = path.join(__dirname, 'generate-rulebooks.js');
let genRulebooksContent = fs.readFileSync(genRulebooksPath, 'utf8');

const carromHtmlCode = `
// 4. Carrom Rulebook HTML
const carromHtml = \`<!DOCTYPE html>
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
\`;
`;

if (!genRulebooksContent.includes('carromHtml')) {
  // Insert carromHtml before writing HTML rulebooks
  genRulebooksContent = genRulebooksContent.replace(
    '// Write HTML rulebooks',
    `${carromHtmlCode}\n// Write HTML rulebooks`
  );

  // Write carrom HTML
  genRulebooksContent = genRulebooksContent.replace(
    'console.log(\'Saved cricket, badminton, and volleyball HTML rulebooks.\');',
    `const carromHtmlPath = path.join(docsDir, 'carrom-rulebook.html');
fs.writeFileSync(carromHtmlPath, carromHtml, 'utf8');
console.log('Saved cricket, badminton, volleyball, and carrom HTML rulebooks.');`
  );

  // Compile carrom PDF
  genRulebooksContent = genRulebooksContent.replace(
    'const volleyballPdfPath = path.join(docsDir, \'volleyball-rulebook.pdf\');',
    `const volleyballPdfPath = path.join(docsDir, 'volleyball-rulebook.pdf');
const carromPdfPath = path.join(docsDir, 'carrom-rulebook.pdf');`
  );

  const carromPdfGenCode = `
  try {
    console.log('Generating carrom-rulebook.pdf via Edge headless...');
    execSync(\`"\${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="\${carromPdfPath}" "file:///\${carromHtmlPath.replace(/\\\\\\\\/g, '/')}"\`);
    console.log('Generated carrom-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating carrom PDF:', e.message);
  }
`;

  genRulebooksContent = genRulebooksContent.replace(
    '  } catch (e) {\n    console.error(\'Error generating volleyball PDF:\', e.message);\n  }',
    `  } catch (e) {\n    console.error('Error generating volleyball PDF:', e.message);\n  }\n${carromPdfGenCode}`
  );

  fs.writeFileSync(genRulebooksPath, genRulebooksContent, 'utf8');
  console.log('Updated scripts/generate-rulebooks.js to generate carrom rulebook.');
}
