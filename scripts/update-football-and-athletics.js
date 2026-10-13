const fs = require('fs');
const path = require('path');

// 1. Update assets/js/sports-data.js
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sportsDataContent = fs.readFileSync(sportsDataPath, 'utf8');

// Athletics updated block
const athleticsUpdatedBlock = `  athletics: {
    id: "athletics",
    name: "Athletics & Tug of War",
    slug: "athletics.html",
    tagline: "Track & Field Sprints, Relays & Inter-Pool Tug of War (Best of 3 Pulls)",
    category: "Track & Field",
    icon: "🏃",
    color: "#ef4444", // Crimson red
    heroImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    venue: "CRPF Ground (Athletics) & Institute Premises (Tug of War)",
    dates: "College Days & Fest Weekend",
    timings: "Scheduled Slots Announced on WhatsApp",
    registrationDeadline: "Registration Open",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdO7i29-6uN1eD270U9_wJ1y-eB-zDdf8_y4w_gJ7v0e8N-jQ/viewform",
    registrationOptions: [
      { label: "Individual Athletics (₹20/event)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdO7i29-6uN1eD270U9_wJ1y-eB-zDdf8_y4w_gJ7v0e8N-jQ/viewform" },
      { label: "4x100m Relay Registration (₹80/team)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdO7i29-6uN1eD270U9_wJ1y-eB-zDdf8_y4w_gJ7v0e8N-jQ/viewform" },
      { label: "Tug of War Registration (₹100/team)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdO7i29-6uN1eD270U9_wJ1y-eB-zDdf8_y4w_gJ7v0e8N-jQ/viewform" }
    ],
    rulebookPdf: "assets/docs/athletics-rulebook.pdf",
    categoriesList: [
      "Track Sprints & Field Events (₹20/event)",
      "4x100m Relay (₹80/team)",
      "Tug of War Boys & Girls (₹100/team - 5v5)"
    ],
    rules: [
      "<strong>Registration & Entry Fees:</strong> Registrations will be conducted online. Participation fee is <strong>₹20/- per individual event</strong>, <strong>₹80/- for 4x100m relay</strong>, and <strong>₹100/- for tug of war</strong>. For solo registrations, random teams will be allotted as per the registrations.",
      "<strong>Tug of War Venue & Schedule:</strong> Tug of war will be held in the institute premises during college days. Matches will be conducted between 2 different pools (for boys and girls separately).",
      "<strong>Tug of War Squad Composition:</strong> Each team will consist of <strong>5 players</strong>. Every registered player should be present on the day of their match.",
      "<strong>Athletics Venue & Timing System:</strong> Athletics events will be held on the <strong>CRPF ground</strong>. It will be conducted in slots with the best timing becoming the winner. Finals will be decided on the basis of top best timings.",
      "<strong>Mandatory Dress Code:</strong> Sports outfit is strictly mandatory to participate in all events. Spikes are permitted for track sprints on designated track lanes.",
      "<strong>Tournament Structure (Tug of War):</strong> There will be <strong>2 pools for both girls and boys</strong>. Each team will play every other team in its own pool once. Pool A and Pool B standings will be calculated separately.",
      "<strong>Tug of War Match Format:</strong><br>• <em>Pool Matches:</em> Best of 3 pulls.<br>• <em>Semi-Finals:</em> Best of 3 pulls.<br>• <em>Final:</em> Best of 3 pulls.",
      "<strong>Playoffs & Qualification (Tug of War):</strong> The top 2 teams from each pool qualify for the semi-finals.<br>• <em>Semi-Final 1:</em> Pool A 1st place vs Pool B 2nd place.<br>• <em>Semi-Final 2:</em> Pool B 1st place vs Pool A 2nd place.<br>• Winners of both semi-finals advance to the Final. (The two semi-final losers may play a 3rd-place match if scheduled).",
      "<strong>Pool Standings & Tie-Breaks:</strong> Pool standings determined by match wins. If teams are tied, tie-break criteria announced before the tournament will apply.",
      "<strong>Authority & Communication:</strong> The referee's decision will be final. The organising committee may introduce or revise rules when necessary; all updates will be communicated through official WhatsApp groups."
    ],
    schedule: [
      { date: "College Days", time: "Slot Announced on WhatsApp", stage: "Tug of War League Matches (Best of 3 pulls)", court: "Institute Premises", status: "upcoming" },
      { date: "Fest Weekend", time: "Morning & Afternoon Slots", stage: "Athletics Track Heats & Sprints (Best Timings)", court: "CRPF Ground", status: "upcoming" },
      { date: "Fest Weekend", time: "Evening Slots", stage: "Tug of War & Athletics Finals Showdown", court: "CRPF Ground / Campus", status: "upcoming" }
    ],
    fixtures: [],
    coordinators: [
      { name: "Sarthak", role: "Secretary (Sec)", phone: "+91 74094 02485", email: "sports.committee@iiitvadodara.ac.in" },
      { name: "Yash", role: "Joint Secretary (Jsec)", phone: "+91 81808 74428", email: "sports.committee@iiitvadodara.ac.in" }
    ]
  },`;

// Football updated block
const footballUpdatedBlock = `  football: {
    id: "football",
    name: "Football",
    slug: "football.html",
    tagline: "11-A-Side Football Tournament • 8 Teams • 2 Groups • Auction System",
    category: "Team Sport",
    icon: "⚽",
    color: "#10b981", // Emerald green
    heroImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    venue: "CRPF Ground (25 Oct) & IIT Ground (01 Nov)",
    dates: "25th October & 1st November 2026",
    timings: "25 Oct: 08:00 AM–12:00 PM & 02:00 PM–06:00 PM | 01 Nov: 04:30 PM–09:00 PM",
    registrationDeadline: "Registration Open",
    registrationLink: "https://forms.gle/gnLKUJyStiTKPjJ57",
    rulebookPdf: "assets/docs/football-rulebook.pdf",
    categoriesList: [
      "11-A-Side Championship (8 Teams)",
      "Group A & Group B League",
      "Semi-Finals & Grand Final"
    ],
    rules: [
      "<strong>Eligibility & Registration:</strong> Participation is restricted to IIIT Vadodara students. Player registration will be conducted online with a participation fee of <strong>₹20 per player</strong>.",
      "<strong>Team Ownership & Auction:</strong> There will be <strong>8 team owners</strong> (paying ₹200 per owner). Owners do not play for the teams they own. Owners select their team captain. Team formation takes place through an <strong>Auction on Wednesday, 21 October 2026</strong>.",
      "<strong>Squad Composition:</strong> Each team must have a squad of <strong>13–15 players</strong>, including substitutes. <strong>11 players take the field</strong> for an 11-a-side match. The minimum number of players required to start or continue a match will be decided by the organizing committee.",
      "<strong>Tournament Dates, Venues & Timings:</strong><br>• <em>Sunday, 25 October 2026:</em> CRPF Ground (8:00 AM–12:00 PM and 2:00 PM–6:00 PM; Break from 12:00 PM to 2:00 PM).<br>• <em>Sunday, 1 November 2026:</em> IIT Ground (4:30 PM–9:00 PM).",
      "<strong>Group-Stage Structure:</strong> 8 teams divided into two groups of four: <strong>Group A and Group B</strong>. Shortened schedule: each team plays 2 group-stage matches. Group-stage matches may end in a draw.",
      "<strong>Points System & Ranking:</strong> Win: 3 points, Draw: 1 point, Loss: 0 points. If tied, tie-breakers in order: Goal difference, goals scored, then head-to-head result.",
      "<strong>Semi-Finals & Final:</strong> Top 2 teams from each group qualify.<br>• <em>Semi-Final 1:</em> Group A 1st place (A1) vs Group B 2nd place (B2).<br>• <em>Semi-Final 2:</em> Group B 1st place (B1) vs Group A 2nd place (A2).<br>• Winners qualify for the Final. No third-place match will be played.",
      "<strong>Match Duration & Tie Resolution:</strong><br>• <em>Group Stage & Semi-Finals:</em> Two halves of 20 minutes each (5 min half-time break).<br>• <em>Final:</em> Two halves of 25 minutes each (5 min half-time break).<br>• <em>Tied Knockouts:</em> Decided by penalty shootout (standard 5 kicks per team, then sudden death).",
      "<strong>Game Rules & Substitutions:</strong> Standard football rules apply. Standard offside rule applies. <strong>Rolling substitutions permitted</strong>, with a maximum of 3 players substituted per team per match. Players must comply with referee decisions.",
      "<strong>Discipline & Walkovers:</strong> Referee's on-field decision is final. 2 yellow cards = red card (player leaves, team continues with one fewer player). <strong>No grace period</strong> for late arrivals; failure to appear results in a <strong>3–0 walkover</strong>.",
      "<strong>Awards:</strong> Winner and runner-up trophies will be awarded."
    ],
    schedule: [
      { date: "21 Oct", time: "Evening Slot", stage: "Team Formation & Player Auction (8 Team Owners)", court: "Institute / Online", status: "upcoming" },
      { date: "25 Oct", time: "08:00 AM - 12:00 PM", stage: "Group Stage Round 1 (CRPF Ground)", court: "CRPF Ground", status: "upcoming" },
      { date: "25 Oct", time: "12:00 PM - 02:00 PM", stage: "Mid-Day Rest Interval & Lunch Break", court: "CRPF Ground", status: "upcoming" },
      { date: "25 Oct", time: "02:00 PM - 06:00 PM", stage: "Group Stage Round 2 (CRPF Ground)", court: "CRPF Ground", status: "upcoming" },
      { date: "01 Nov", time: "04:30 PM - 07:00 PM", stage: "Semi-Finals: A1 vs B2 & B1 vs A2 (IIT Ground)", court: "IIT Ground", status: "upcoming" },
      { date: "01 Nov", time: "07:30 PM - 09:00 PM", stage: "Grand Championship Final (IIT Ground)", court: "IIT Ground", status: "upcoming" }
    ],
    fixtures: [],
    gallery: [
      { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80", caption: "Evening Match Under Floodlights" },
      { url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80", caption: "Match Football on Field Turf" },
      { url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80", caption: "High Intensity Scrimmage & Striker Attack" },
      { url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=800&q=80", caption: "Team Spirit & Goal Celebration" }
    ],
    coordinators: [
      { name: "Mohit Shekhawat", role: "Secretary (Sec)", phone: "", email: "202451109@iiitvadodara.ac.in" },
      { name: "Shikhar Singh", role: "Joint Secretary (Jsec)", phone: "", email: "20251504070@iiitvadodara.ac.in" }
    ]
  },`;

sportsDataContent = sportsDataContent.replace(
  /  athletics: \{[\s\S]*?\n  \},/,
  athleticsUpdatedBlock
);

sportsDataContent = sportsDataContent.replace(
  /  football: \{[\s\S]*?\n  \},/,
  footballUpdatedBlock
);

fs.writeFileSync(sportsDataPath, sportsDataContent, 'utf8');
console.log('Updated sports-data.js for Athletics and Football.');

// 2. Update scripts/build-sports-pages.js
const buildPagesPath = path.join(__dirname, 'build-sports-pages.js');
let buildPagesContent = fs.readFileSync(buildPagesPath, 'utf8');

const footballCardCode = `  const footballTournamentCard = sport.id === 'football' ? \`
            <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-md);">
              <h4 style="color: #10b981; display: flex; align-items: center; gap: 8px; margin: 0 0 0.5rem 0; font-size: 1.05rem;">
                <span>⚡</span> 11-A-Side Tournament & Playoff Format (8 Teams)
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                8 Teams divided into Group A & Group B. 11 on field (squad 13-15). Top 2 from each group advance to Semi-Finals.
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #10b981;">
                  <strong style="color: #fff; font-size: 0.88rem;">1. Group Stage (20 Min Halves)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Sunday, 25 Oct at CRPF Ground.<br>• 2 matches per team; Win=3, Draw=1, Loss=0.<br>• Tie-break: GD > Goals Scored > Head-to-Head.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #38bdf8;">
                  <strong style="color: #fff; font-size: 0.88rem;">2. Semi-Finals (20 Min Halves)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Sunday, 1 Nov at IIT Ground.<br>• SF 1: Group A 1st vs Group B 2nd.<br>• SF 2: Group B 1st vs Group A 2nd.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #f59e0b;">
                  <strong style="color: #fff; font-size: 0.88rem;">3. Grand Final (25 Min Halves)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Sunday, 1 Nov at IIT Ground.<br>• Tied knockout: Penalty shootout (5 kicks + sudden death).<br>• Winner & Runner-up Trophies awarded.</p>
                </div>
              </div>
            </div>
  \` : '';
`;

const athleticsCardCode = `  const athleticsTournamentCard = sport.id === 'athletics' ? \`
            <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-md);">
              <h4 style="color: #ef4444; display: flex; align-items: center; gap: 8px; margin: 0 0 0.5rem 0; font-size: 1.05rem;">
                <span>⚡</span> Tug of War & Athletics Competition Structure
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                Official 2-Pool Tug of War League & CRPF Ground Track Timings.
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #ef4444;">
                  <strong style="color: #fff; font-size: 0.88rem;">1. Tug of War (5v5 - Best of 3)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• 2 Pools (Separate for Boys & Girls).<br>• 5 Players per team.<br>• Pool matches & Finals: <strong>Best of 3 pulls</strong>.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #f97316;">
                  <strong style="color: #fff; font-size: 0.88rem;">2. Athletics (Best Timings)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• Venue: CRPF Ground.<br>• Conducted in timing slots.<br>• Winner decided by top recorded timings.</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #10b981;">
                  <strong style="color: #fff; font-size: 0.88rem;">3. Entry Fees & Playoff Path</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin: 6px 0 0 0; line-height: 1.5;">• ₹20/individual, ₹80/relay, ₹100/tug of war.<br>• Tug of War: Top 2 from each pool advance to SF (A1 vs B2, B1 vs A2).<br>• Sports outfit mandatory.</p>
                </div>
              </div>
            </div>
  \` : '';
`;

if (!buildPagesContent.includes('footballTournamentCard')) {
  buildPagesContent = buildPagesContent.replace(
    '  const cricketPlayoffCard =',
    `${footballCardCode}\n${athleticsCardCode}\n  const cricketPlayoffCard =`
  );

  buildPagesContent = buildPagesContent.replace(
    '            ${cricketPlayoffCard}',
    '            ${cricketPlayoffCard}\n            ${footballTournamentCard}\n            ${athleticsTournamentCard}'
  );

  fs.writeFileSync(buildPagesPath, buildPagesContent, 'utf8');
  console.log('Added footballTournamentCard & athleticsTournamentCard to build-sports-pages.js.');
}

// 3. Update scripts/generate-rulebooks.js
const genRulebooksPath = path.join(__dirname, 'generate-rulebooks.js');
let genRulebooksContent = fs.readFileSync(genRulebooksPath, 'utf8');

const footballHtmlCode = `
// 5. Football Rulebook HTML
const footballHtml = \`<!DOCTYPE html>
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
\`;
`;

const athleticsHtmlCode = `
// 6. Athletics & Tug of War Rulebook HTML
const athleticsHtml = \`<!DOCTYPE html>
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
\`;
`;

if (!genRulebooksContent.includes('footballHtml')) {
  // Insert html templates before write HTML rulebooks
  genRulebooksContent = genRulebooksContent.replace(
    '// Write HTML rulebooks',
    `${footballHtmlCode}\n${athleticsHtmlCode}\n// Write HTML rulebooks`
  );

  // Write football & athletics HTML
  genRulebooksContent = genRulebooksContent.replace(
    'console.log(\'Saved cricket, badminton, volleyball, and carrom HTML rulebooks.\');',
    `const footballHtmlPath = path.join(docsDir, 'football-rulebook.html');
const athleticsHtmlPath = path.join(docsDir, 'athletics-rulebook.html');
fs.writeFileSync(footballHtmlPath, footballHtml, 'utf8');
fs.writeFileSync(athleticsHtmlPath, athleticsHtml, 'utf8');
console.log('Saved cricket, badminton, volleyball, carrom, football, and athletics HTML rulebooks.');`
  );

  // Compile football & athletics PDF
  genRulebooksContent = genRulebooksContent.replace(
    'const carromPdfPath = path.join(docsDir, \'carrom-rulebook.pdf\');',
    `const carromPdfPath = path.join(docsDir, 'carrom-rulebook.pdf');
const footballPdfPath = path.join(docsDir, 'football-rulebook.pdf');
const athleticsPdfPath = path.join(docsDir, 'athletics-rulebook.pdf');`
  );

  const morePdfsGenCode = `
  try {
    console.log('Generating football-rulebook.pdf via Edge headless...');
    execSync(\`"\${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="\${footballPdfPath}" "file:///\${footballHtmlPath.replace(/\\\\\\\\/g, '/')}"\`);
    console.log('Generated football-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating football PDF:', e.message);
  }

  try {
    console.log('Generating athletics-rulebook.pdf via Edge headless...');
    execSync(\`"\${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="\${athleticsPdfPath}" "file:///\${athleticsHtmlPath.replace(/\\\\\\\\/g, '/')}"\`);
    console.log('Generated athletics-rulebook.pdf successfully!');
  } catch (e) {
    console.error('Error generating athletics PDF:', e.message);
  }
`;

  genRulebooksContent = genRulebooksContent.replace(
    '  } catch (e) {\n    console.error(\'Error generating carrom PDF:\', e.message);\n  }',
    `  } catch (e) {\n    console.error('Error generating carrom PDF:', e.message);\n  }\n${morePdfsGenCode}`
  );

  fs.writeFileSync(genRulebooksPath, genRulebooksContent, 'utf8');
  console.log('Updated scripts/generate-rulebooks.js to generate football and athletics rulebooks.');
}
