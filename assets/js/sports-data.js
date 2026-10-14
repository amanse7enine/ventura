/**
 * VENTURA - IIIT Vadodara Annual Sports Event
 * Central Data Store for all 8 Sports
 * Easy to update by organizing committee members
 */

const VENTURA_CONFIG = {
  eventName: "VENTURA 2026-27",
  institution: "Indian Institute of Information Technology Vadodara",
  tagline: "Ignite the Spirit, Claim the Glory",
  dates: "October - November 2026",
  venue: "IIIT Vadodara Sports Grounds & Hostels",
  defaultRegistrationForm: "#",
  contactHelpdesk: "sports.committee@iiitvadodara.ac.in",
  sportsSecretary: {
    name: "Aman",
    role: "Secretary, Sports Committee",
    phone: "8318567785",
    email: "sports.committee@iiitvadodara.ac.in"
  }
};

const SPORTS_DATA = {
  badminton: {
    id: "badminton",
    name: "Badminton",
    slug: "badminton.html",
    tagline: "Fast reflexes, thunderous smashes, unyielding agility",
    category: "Racquet Sport",
    icon: "🏸",
    color: "#3b82f6", // Electric blue
    heroImage: "assets/images/badminton-smash.jpg",
    gallery: [
      { url: "assets/images/badminton-smash.jpg", caption: "Explosive Jump Smash on Indoor Wooden Court" },
      { url: "assets/images/badminton-shuttle.jpg", caption: "Tournament Shuttlecock & Professional Racquet Strings" },
      { url: "assets/images/badminton-match.jpg", caption: "Competitive Indoor Arena Matchplay Under Lights" }
    ],
    venue: "Aloka Sports Academy",
    dates: "18th & 20th October",
    timings: "18 Oct: After 2:00 PM & 6:00 PM | 20 Oct: QF, SF & Finals",
    registrationDeadline: "15 October (Strict Deadline)",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc5wa63wqa3j0TqyY99Lj65mN1afhxXdTf-Es7RivRC5UCZXg/viewform?usp=dialog",
    registrationOptions: [
      { label: "Register Men's Singles", link: "https://docs.google.com/forms/d/e/1FAIpQLSc5wa63wqa3j0TqyY99Lj65mN1afhxXdTf-Es7RivRC5UCZXg/viewform?usp=dialog" },
      { label: "Register Women's Singles", link: "https://docs.google.com/forms/d/e/1FAIpQLSfAkgBl29CurSmQQxGRF-Hg6922TGBkhGoB8Vf05xkTlqAkUA/viewform?usp=dialog" },
      { label: "Register Men's Doubles", link: "https://docs.google.com/forms/d/e/1FAIpQLSedMsbMKDFjn2-YcIwdBJkmkVWjydbpFLBXxjDnN_qeu19O7A/viewform?usp=dialog" },
      { label: "Register Mixed Doubles", link: "https://docs.google.com/forms/d/e/1FAIpQLScpQU2SFmMryefzHO9PwkM5hO8uyV5fuIKYVR1w1e2kX_41vw/viewform?usp=dialog" }
    ],
    rulebookPdf: "assets/docs/badminton-rulebook.pdf",
    categoriesList: [
      "Men's Singles",
      "Women's Singles",
      "Men's Doubles",
      "Mixed Doubles"
    ],
    rules: [
      "Tournament Venue: Aloka Sports Academy. Transportation buses provided for all students.",
      "18th October Schedule: Men's Singles & Men's Doubles Round matches (Boys only on 18th Oct).",
      "18th Oct Batches: Senior batches after 2:00 PM | 1st Year freshers after 6:00 PM.",
      "20th October Schedule: Men's QF, SF, Finals, Girls' Singles, and Mixed Doubles matches.",
      "All matches will be conducted as per BWF rules with Yonex Mavis 350 shuttles.",
      "Non-marking shoes are strictly mandatory inside the Aloka wooden courts.",
      "Players must report on time as per bus schedule. Walkover awarded after 10 minutes delay.",
      "Decisions of the match referees and sports committee are final and binding."
    ],
    schedule: [
      { date: "18 Oct", time: "After 02:00 PM", stage: "Senior Batches: Men's Singles & Doubles Rounds", court: "Aloka Sports Academy", status: "upcoming" },
      { date: "18 Oct", time: "After 06:00 PM", stage: "1st Year Freshers: Men's Singles & Doubles Rounds", court: "Aloka Sports Academy", status: "upcoming" },
      { date: "20 Oct", time: "Day Slots", stage: "Quarter-Finals & Semi-Finals (All Categories)", court: "Aloka Sports Academy", status: "upcoming" },
      { date: "20 Oct", time: "Evening Slots", stage: "Girls' Singles, Mixed Doubles & Grand Finals", court: "Aloka Sports Academy", status: "upcoming" }
    ],
    fixtures: [],
    coordinators: [
      { name: "Ipsit", role: "Secretary (Sec)", phone: "+91 91387 05033", email: "202451075@iiitvadodara.ac.in" },
      { name: "Abhishek Patil", role: "Joint Secretary (Jsec)", phone: "+91 83293 82940", email: "20251502002@iiitvadodara.ac.in" }
    ]
  },

  cricket: {
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
    rulebookPdf: "assets/docs/cricket-rulebook.pdf",
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
      { url: "assets/images/real-football-team.jpg", caption: "IIIT Vadodara Football Squad & Team Lineup" },
      { url: "assets/images/real-trophy-winner.jpg", caption: "Championship Trophy Celebration Under Lights" }
    ],
    coordinators: [
      { name: "Abhishek Biban", role: "Secretary", phone: "7627037197" },
      { name: "Rohit Sharma", role: "Joint Secretary", phone: "8349118308" }
    ]
  },

    athletics: {
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
      "<strong>🏃‍♂️ 1. Athletics (Track & Field):</strong><br>• <em>Track Events:</em> 100m, 200m, 4×100m Relay.<br>• <em>Special Event:</em> Hybrid Fitness Challenge.<br>• Step up and prove you're the fastest and strongest on campus.<br>• 👉 <em>Lock in your spot:</em> <a href=\"https://forms.gle/1k6ny1jJvXYc7jLu9\" target=\"_blank\" style=\"color: #38bdf8; text-decoration: underline;\">Track & Field Form</a>",
      "<strong>💥 2. Tug of War (The Ultimate Power Clash):</strong><br>• <em>Team Registrations:</em> Already got your squad? Sign up together and hold the line.<br>• <em>Solo Registrations (No Team? No Problem!):</em> Want to pull but missing a crew? Sign up solo—we'll place you into a powerhouse team!<br>• 👉 <em>Lock in your spot:</em> <a href=\"https://forms.gle/BufA9T4aW2pESp7t5\" target=\"_blank\" style=\"color: #38bdf8; text-decoration: underline;\">Solo Form</a> | <a href=\"https://forms.gle/k6176aWSmQsSodgn9\" target=\"_blank\" style=\"color: #38bdf8; text-decoration: underline;\">Team Form</a>",
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
  },

  football: {
    id: "football",
    name: "Football",
    slug: "football.html",
    tagline: "11-A-Side Football Tournament • 8 Teams • 2 Groups • Auction System",
    category: "Team Sport",
    icon: "⚽",
    color: "#10b981", // Emerald green
    heroImage: "assets/images/real-football-team.jpg",
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
  },

  volleyball: {
    id: "volleyball",
    name: "Volleyball",
    slug: "volleyball.html",
    tagline: "Ventura 2k26 10-Team Volleyball Tournament with Player Auction & Mixed-Gender Squads",
    category: "Team Sport",
    icon: "🏐",
    color: "#06b6d4",
    heroImage: "assets/images/real-trophy-winner.jpg",
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
    gallery: [
      { url: "assets/images/real-trophy-winner.jpg", caption: "Ventura Championship Trophy Winner" },
      { url: "assets/images/real-champions-team.jpg", caption: "IIIT Vadodara Winners with Trophies" }
    ],
    coordinators: [
      { name: "Aditya", role: "Secretary", phone: "9571734643", email: "sports.committee@iiitvadodara.ac.in" },
      { name: "Anshu", role: "Joint Secretary", phone: "8306724203", email: "sports.committee@iiitvadodara.ac.in" }
    ]
  },

    chess: {
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
      "<strong>Online Registration:</strong> Register here for Ventura Chess and get ready to make your move: <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSdIIzpKjugBly36lbGVUJ4pW_dFPRRPTEm95Gq4FFJz7_alaA/viewform\" target=\"_blank\" style=\"color: #38bdf8; text-decoration: underline;\">Official Chess Registration Form</a>.",
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
  },

  carrom: {
    id: "carrom",
    name: "Carrom",
    slug: "carrom.html",
    tagline: "Official Singles & Doubles Championship • Knockout Format",
    category: "Board Sport",
    icon: "🎯",
    color: "#ec4899", // Rose / pink
    heroImage: "assets/images/real-carrom.jpg",
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
    gallery: [
      { url: "assets/images/real-carrom.jpg", caption: "Inter-Batch Carrom Tournament Matchplay" },
      { url: "assets/images/real-trophy-winner.jpg", caption: "Ventura Trophy Celebration" }
    ],
    coordinators: [
      { name: "Harshit Dhaker", role: "Secretary", phone: "8619459354", email: "202451073@iiitvadodara.ac.in" },
      { name: "Aashu Raj", role: "Joint Secretary (Jsec)", phone: "9142879660", email: "20251501003@iiitvadodara.ac.in" }
    ]
  },

    "table-tennis": {
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
  }
};
