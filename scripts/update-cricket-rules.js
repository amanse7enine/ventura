const fs = require('fs');
const path = require('path');

// 1. Update assets/js/sports-data.js
const sportsDataPath = path.join(__dirname, '..', 'assets', 'js', 'sports-data.js');
let sd = fs.readFileSync(sportsDataPath, 'utf8');

const oldCricketBlockRegex = /cricket:\s*\{[\s\S]*?id:\s*"cricket"[\s\S]*?coordinators:\s*\[[\s\S]*?\]\s*\}/;

const newCricketBlock = `cricket: {
    id: "cricket",
    name: "Cricket",
    slug: "cricket.html",
    tagline: "Ventura 2k26 Leather Ball Tournament with Player Auction & Playoff Championship",
    category: "Team Sport",
    icon: "🏏",
    color: "#f59e0b",
    heroImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
    venue: "CRPF Ground",
    dates: "24th & 31st October",
    timings: "08:00 AM – 06:00 PM",
    registrationDeadline: "Registration Open",
    rulebookPdf: "#",
    registrationLink: "https://forms.gle/vFGws841EdGm7BzeA",
    categoriesList: [
      "Leather Ball T10 / T15",
      "Entry: ₹30/- (Refundable if Unsold)",
      "Auction: Gold, Silver & Bronze Tiers",
      "Playoffs: Qualifier, Eliminator & Final"
    ],
    rules: [
      "<strong>Online Registration & Fee:</strong> Registrations are online only. Participation fee is <strong>₹30/- per player</strong> (Participation fee of unsold players will be fully refunded).",
      "<strong>Player Auction System:</strong> Auction will feature 3 player tiers: <strong>Gold, Silver, and Bronze</strong>. Points system will be disclosed prior to the auction. Min/Max player limits per team decided post-registration (teams below minimum quota will be disqualified).",
      "<strong>3-Stage Auction Rounds:</strong><br>• <em>Stage 1:</em> All registered players go under the hammer.<br>• <em>Stage 2:</em> Unsold players from round 1 get one final chance.<br>• <em>Stage 3:</em> Teams provide names for shortlisted final bidding (no further rounds thereafter).",
      "<strong>Match Ball & Equipment:</strong> All matches played with a <strong>Leather Ball</strong>. Match equipment provided by the Sports Committee (optional to bring personal accessories like L-guard, supporter, etc.).",
      "<strong>Pool Format:</strong> 2 Pools with 3 teams in each pool. In the pool stage, each team plays 2 matches against every other team in the same pool.",
      "<strong>Match Overs & Powerplay:</strong><br>• <em>Pool Matches, Qualifier & Eliminator:</em> 10 overs per innings (Powerplay: First 3 overs).<br>• <em>Grand Final:</em> 15 overs per innings (Powerplay: First 5 overs).",
      "<strong>Official Playing Conditions:</strong> Standard ICC rules enforced EXCEPT <strong>NO LBW</strong> and <strong>NO DRS</strong>. Umpire's decision is absolute and final.",
      "<strong>Playoff Qualification Rules:</strong><br>• <em>The Qualifier:</em> Top team from Pool A vs Top team from Pool B. Winner advances directly to the Final.<br>• <em>The Eliminator:</em> Loser of Qualifier vs best-ranked team among remaining teams from both pools.<br>• <em>Grand Final:</em> Winner of Qualifier vs Winner of Eliminator.",
      "<strong>Rule Amendments:</strong> Any additional rules or modifications will be conveyed through the official WhatsApp groups."
    ],
    schedule: [
      { date: "Pre-Tournament", time: "Slot on WhatsApp", stage: "Player Auction: Gold, Silver & Bronze Tiers (3 Rounds)", court: "Campus / Online", status: "upcoming" },
      { date: "24 Oct", time: "08:00 AM – 06:00 PM", stage: "Pool A & Pool B League Matches (10 Overs / 3 Ov Powerplay)", court: "CRPF Ground", status: "upcoming" },
      { date: "31 Oct", time: "08:30 AM – 11:30 AM", stage: "The Qualifier: Top Pool A vs Top Pool B (10 Overs)", court: "CRPF Ground", status: "upcoming" },
      { date: "31 Oct", time: "12:00 PM – 03:00 PM", stage: "The Eliminator: Loser Qualifier vs Best Ranked Pool Team (10 Overs)", court: "CRPF Ground", status: "upcoming" },
      { date: "31 Oct", time: "03:30 PM – 06:00 PM", stage: "Championship Grand Final: Winner Qualifier vs Winner Eliminator (15 Overs / 5 Ov Powerplay)", court: "CRPF Ground", status: "upcoming" }
    ],
    fixtures: [],
    gallery: [
      { url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80", caption: "Match Atmosphere & Ground Under Lights" },
      { url: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=800&q=80", caption: "Willow, Helmets & Match Gear" },
      { url: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=800&q=80", caption: "Cricket Ball on Match Pitch" },
      { url: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&w=800&q=80", caption: "Wickets, Stumps & Bowling Delivery" }
    ],
    registrationOptions: [
      { label: "Player Registration (₹30/-)", link: "https://forms.gle/vFGws841EdGm7BzeA" },
      { label: "Team Registration", link: "https://docs.google.com/forms/d/e/1FAIpQLSdGd6f0-0DmU0b4I-AemjF4FZ8zyDGuzF7zvcmJFcPFV0T-ow/viewform?usp=header" }
    ],
    coordinators: [
      { name: "Abhishek Biban", role: "Secretary", phone: "7627037197" },
      { name: "Rohit Sharma", role: "Joint Secretary", phone: "8349118308" }
    ]
  }`;

sd = sd.replace(oldCricketBlockRegex, newCricketBlock);
fs.writeFileSync(sportsDataPath, sd, 'utf8');
console.log('Updated assets/js/sports-data.js with new cricket rules, schedule & qualification!');
