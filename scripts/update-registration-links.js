const fs = require('fs');
const path = require('path');

const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sportsDataContent = fs.readFileSync(sportsDataPath, 'utf8');

// 1. Update Athletics in sports-data.js
const newAthletics = `  athletics: {
    id: "athletics",
    name: "Athletics & Tug of War",
    slug: "athletics.html",
    tagline: "Track & Field Sprints, Relays & Tug of War • Organized by Gym and Athletics Club, IIIT Vadodara",
    category: "Track & Field",
    icon: "🏃",
    color: "#ef4444", // Crimson red
    heroImage: "assets/images/real-champions-team.jpg",
    venue: "CRPF Ground (Athletics) & Institute Premises (Tug Of War)",
    dates: "15 Oct - 1 Nov (Tug of War) & 31 Oct - 01 Nov (Athletics)",
    timings: "CRPF Ground (Athletics) & Institute Premises (Tug Of War)",
    registrationDeadline: "18 Oct (Tug of War) | 22 Oct (Athletics)",
    registrationLink: "https://forms.gle/1k6ny1jJvXYc7jLu9",
    registrationOptions: [
      { label: "Track & Field (100m, 200m, Relay, Fitness)", link: "https://forms.gle/1k6ny1jJvXYc7jLu9" },
      { label: "Tug of War - Solo Registration", link: "https://forms.gle/BufA9T4aW2pESp7t5" },
      { label: "Tug of War - Team Registration", link: "https://forms.gle/k6176aWSmQsSodgn9" }
    ],
    rulebookPdf: "assets/docs/athletics-rulebook.pdf",
    categoriesList: [
      "Track: 100m, 200m, 4×100m Relay",
      "Special Event: Hybrid Fitness Challenge",
      "Tug of War: Team Sign-ups (Hold the Line)",
      "Tug of War: Solo Sign-ups (Powerhouse Team Allotment)"
    ],
    rules: [
      "<strong>Organizers & Registration:</strong> Organized by the Gym and Athletics Club, IIIT Vadodara. Registrations are officially open for both <strong>Athletics and Tug of War</strong>.",
      "<strong>🏃‍♂️ 1. Athletics (Track & Field):</strong><br>• <em>Track Events:</em> 100m, 200m, 4×100m Relay.<br>• <em>Special Event:</em> Hybrid Fitness Challenge.<br>• Step up and prove you're the fastest and strongest on campus.<br>• 👉 <em>Lock in your spot:</em> <a href=\\"https://forms.gle/1k6ny1jJvXYc7jLu9\\" target=\\"_blank\\" style=\\"color: #38bdf8; text-decoration: underline;\\">Track & Field Form</a>",
      "<strong>💥 2. Tug of War (The Ultimate Power Clash):</strong><br>• <em>Team Registrations:</em> Already got your squad? Sign up together and hold the line.<br>• <em>Solo Registrations (No Team? No Problem!):</em> Want to pull but missing a crew? Sign up solo—we'll place you into a powerhouse team!<br>• 👉 <em>Lock in your spot:</em> <a href=\\"https://forms.gle/BufA9T4aW2pESp7t5\\" target=\\"_blank\\" style=\\"color: #38bdf8; text-decoration: underline;\\">Solo Form</a> | <a href=\\"https://forms.gle/k6176aWSmQsSodgn9\\" target=\\"_blank\\" style=\\"color: #38bdf8; text-decoration: underline;\\">Team Form</a>",
      "<strong>📌 The Rundown:</strong><br>• <em>Venue:</em> CRPF Ground (Athletics) & Institute Premises (Tug Of War).<br>• <em>Dates:</em> 15 Oct – 1 Nov (Tug of War) & 31 Oct – 01 Nov (Athletics).",
      "<strong>⏳ Registration Deadlines:</strong> 18 Oct for Tug of War & 22 Oct for Athletics.",
      "<strong>🏆 Awards:</strong> Medals, prizes, and ultimate campus bragging rights await.",
      "<strong>Mandatory Dress Code:</strong> Sports outfit strictly mandatory to participate in all events. Spikes permitted on designated track lanes.",
      "<strong>Match Conduct:</strong> Referee decisions are final. Tug of war conducted in Best of 3 pulls format."
    ],
    schedule: [
      { date: "15 Oct - 01 Nov", time: "During College Days", stage: "Tug of War: Pool Matches & Playoff Pulls (Solo & Team)", court: "Institute Premises", status: "upcoming" },
      { date: "31 Oct & 01 Nov", time: "Day Slots", stage: "Athletics: 100m, 200m, 4x100m Relay & Hybrid Fitness Challenge", court: "CRPF Ground", status: "upcoming" },
      { date: "01 Nov", time: "Championship Stage", stage: "Grand Finals & Medal Award Ceremony", court: "CRPF Ground / Campus", status: "upcoming" }
    ],
    fixtures: [],
    gallery: [
      { url: "assets/images/real-champions-team.jpg", caption: "IIIT Vadodara Champions with Trophies" },
      { url: "assets/images/real-trophy-winner.jpg", caption: "Gold Trophy Champion Celebration on Field" }
    ],
    coordinators: [
      { name: "Sarthak Rawat", role: "Secretary (Sec)", phone: "+91 74094 02485", email: "sports.committee@iiitvadodara.ac.in" },
      { name: "Yash Bhosle", role: "Joint Secretary (Jsec)", phone: "+91 81808 74428", email: "sports.committee@iiitvadodara.ac.in" }
    ]
  },`;

// Replace athletics block
sportsDataContent = sportsDataContent.replace(
  /athletics:\s*\{[\s\S]*?\n\s*\},(?=\s*football:)/,
  newAthletics
);

// 2. Update Chess in sports-data.js
const newChess = `  chess: {
    id: "chess",
    name: "Chess",
    slug: "chess.html",
    tagline: "Single-Elimination Knockout • 10+0 Rapid • Armageddon Tiebreak",
    category: "Mind Sport",
    icon: "♟️",
    color: "#a855f7", // Purple
    heroImage: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
    venue: "Online & Offline(Courtyard) Hybrid",
    dates: "19th October to 6th November",
    timings: "During Lunch hours & Hostels in evenings",
    registrationDeadline: "Registration Open",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIIzpKjugBly36lbGVUJ4pW_dFPRRPTEm95Gq4FFJz7_alaA/viewform",
    rulebookPdf: "assets/docs/chess-rulebook.pdf",
    categoriesList: [
      "Offline Mode (Physical Board at Courtyard)",
      "Online Mode (Chess.com Verified)",
      "Single-Elimination Rapid Knockout (10+0)"
    ],
    rules: [
      "<strong>Tournament Dates & Timings:</strong> 19th October to 6th November. Matches conducted during lunch hours and in hostels in evenings.",
      "<strong>Venue:</strong> Online & Offline (Courtyard) Hybrid.",
      "<strong>Online Registration:</strong> Register here for Ventura Chess and get ready to make your move: <a href=\\"https://docs.google.com/forms/d/e/1FAIpQLSdIIzpKjugBly36lbGVUJ4pW_dFPRRPTEm95Gq4FFJz7_alaA/viewform\\" target=\\"_blank\\" style=\\"color: #38bdf8; text-decoration: underline;\\">Official Chess Registration Form</a>.",
      "<strong>Tournament Format:</strong> Single-elimination knockout (winner advances, loser is eliminated). Random draw bracket with power of 2 sizing.",
      "<strong>Championship Grand Final:</strong> The Final will strictly be played <strong>offline on a physical board</strong> in front of the organizing committee.",
      "<strong>Game Rules & Time Control:</strong> Each match is a single game of chess. Time control is <strong>10 minutes per player with no increment (10+0)</strong>. Colors decided by committee or coin toss. Official FIDE rules apply.",
      "<strong>Touch-Move Rule:</strong> Strict touch-move applies in all offline matches: a piece touched must be moved, and a piece released on a square must stay there.",
      "<strong>Draw & Armageddon Tiebreak:</strong> Draws by agreement are allowed only after move 20. A drawn game is settled immediately by an <strong>Armageddon game</strong>: colors swapped, White gets 5 minutes and Black gets 4 minutes (no increment). If Armageddon is drawn, <strong>Black wins the match</strong>.",
      "<strong>Offline Match Conditions:</strong> Boards, pieces, and digital clocks provided by committee. Players must report to table at scheduled time. More than <strong>5 minutes late = forfeit</strong>. Mobile phones must be switched off and kept away.",
      "<strong>Online Match Conditions:</strong> Played on Chess.com. Designated player creates unrated 10+0 challenge. More than 5 minutes late = forfeit. Winner sends game link/screenshot immediately. <strong>Chess engines or outside assistance strictly prohibited</strong>.",
      "<strong>Arbiter & Authority:</strong> The arbiter's decision is final. Misconduct, abusive behavior, or arguing with the arbiter can lead to game loss or disqualification."
    ],
    schedule: [
      { date: "19 Oct - 04 Nov", time: "Lunch & Evenings", stage: "Knockout Rounds (10+0 Rapid Single Games)", court: "Courtyard & Online Hybrid", status: "upcoming" },
      { date: "05 Nov", time: "Evening Slot", stage: "Quarter-Finals & Semi-Finals (10+0 + Armageddon)", court: "Courtyard Arena", status: "upcoming" },
      { date: "06 Nov", time: "Finals Slot", stage: "Grand Championship Final (Offline Physical Board)", court: "Courtyard Arena", status: "upcoming" }
    ],
    fixtures: [],
    coordinators: [
      { name: "Aahan Poddar", role: "Secretary (Sec)", phone: "+91 99580 30019", email: "sports.committee@iiitvadodara.ac.in" },
      { name: "Ritika Meena", role: "Joint Secretary (Jsec)", phone: "+91 72969 14433", email: "sports.committee@iiitvadodara.ac.in" }
    ]
  },`;

// Replace chess block
sportsDataContent = sportsDataContent.replace(
  /chess:\s*\{[\s\S]*?\n\s*\},(?=\s*carrom:)/,
  newChess
);

// 3. Update Table Tennis in sports-data.js
const newTT = `  "table-tennis": {
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
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd5lMwsnbUFTXZCduRMI1rZWZ6vtXhSZDVPm-ueJRLggqsqYQ/viewform",
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

// Replace table-tennis block
sportsDataContent = sportsDataContent.replace(
  /"table-tennis":\s*\{[\s\S]*?\n\s*\}/,
  newTT
);

fs.writeFileSync(sportsDataPath, sportsDataContent, 'utf8');
console.log('Successfully updated sports-data.js for Athletics, Chess, and Table Tennis.');
