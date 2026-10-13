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
      { url: "assets/images/badminton-rally.jpg", caption: "High-Speed Reflexes & Backhand Return" },
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
    tagline: "Track & Field Sprints, Relays & Inter-Pool Tug of War (Best of 3 Pulls)",
    category: "Track & Field",
    icon: "🏃",
    color: "#ef4444", // Crimson red
    heroImage: "assets/images/real-champions-team.jpg",
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
    gallery: [
      { url: "assets/images/real-champions-team.jpg", caption: "IIIT Vadodara Champions with Trophies" },
      { url: "assets/images/real-trophy-winner.jpg", caption: "Gold Trophy Champion Celebration on Field" }
    ],
    coordinators: [
      { name: "Sarthak", role: "Secretary (Sec)", phone: "+91 74094 02485", email: "sports.committee@iiitvadodara.ac.in" },
      { name: "Yash", role: "Joint Secretary (Jsec)", phone: "+91 81808 74428", email: "sports.committee@iiitvadodara.ac.in" }
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
    tagline: "The battle of wits, grand tactics and supreme minds",
    category: "Mind Sport",
    icon: "♟️",
    color: "#8b5cf6", // Purple / Violet
    heroImage: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
    venue: "Online & Offline (Courtyard) Hybrid",
    dates: "19th October to 6th November",
    timings: "During Lunch hours & Hostels in evenings",
    registrationDeadline: "Registration Open",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScQcpJ2ybJvl2K78HVP7WCsAuNovzBY3embcvi8Q7YV-SdfSw/viewform?usp=header",
    rulebookPdf: "#",
    categoriesList: [
      "Hybrid Swiss Open Rounds",
      "Courtyard Offline Arena",
      "Blitz & Rapid Knockouts"
    ],
    rules: [
      "Hybrid tournament format: Matches played Online & Offline (Courtyard).",
      "Scheduled daily during lunch hours on campus and in hostels during the evening.",
      "Time controls and pairing announcements managed via official tournament links.",
      "FIDE Rapid & Blitz rules apply with fair play monitoring for online games.",
      "Touch-move rule strictly observed for in-person courtyard boards.",
      "Arbiters' decisions on illegal moves and clock discrepancies are final."
    ],
    schedule: [
      { date: "19 Oct - 06 Nov", time: "Lunch Hours", stage: "Courtyard In-Person Rounds", court: "Campus Courtyard", status: "upcoming" },
      { date: "19 Oct - 06 Nov", time: "Evenings", stage: "Hostel & Online Evening Matches", court: "Online / Hostels", status: "upcoming" },
      { date: "06 Nov", time: "Finals Slot", stage: "Grand Championship Finals & Blitz Showdown", court: "Courtyard Arena", status: "upcoming" }
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
    tagline: "Spin, speed and split-second smashes on the green table",
    category: "Racquet Sport",
    icon: "🏓",
    color: "#14b8a6", // Teal
    heroImage: "assets/images/real-table-tennis.jpg",
    venue: "College Premises (8 AM - 6 PM) & Hostel (8 PM - 11 PM)",
    dates: "20 Oct to 6 Nov",
    timings: "8:00 AM – 6:00 PM in College | 8:00 PM – 11:00 PM in Hostel",
    registrationDeadline: "Registration Open",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd5lMwsnbUFTXZCduRMI1rZWZ6vtXhSZDVPm-ueJRLggqsqYQ/viewform?usp=dialog",
    rulebookPdf: "#",
    categoriesList: [
      "Men's Singles Championship",
      "Women's Singles Championship",
      "Open Doubles Tournament"
    ],
    rules: [
      "Venues: College Premises (8 AM - 6 PM) and Hostel Hall (8 PM - 11 PM).",
      "Stag 3-star 40+ seamless plastic balls will be used for all official ties.",
      "Service toss must be at least 16 cm vertically upwards from open palm.",
      "All matches: Best of 5 games (11 points per game; 2-point lead required to win).",
      "Expedite system will be introduced if a game remains unfinished after 10 minutes.",
      "Players must use ITTF-approved rubbers (Red and Black on opposite sides)."
    ],
    schedule: [
      { date: "20 Oct - 06 Nov", time: "08:00 AM - 06:00 PM", stage: "Day Matches (College Premises)", court: "College Premises", status: "upcoming" },
      { date: "20 Oct - 06 Nov", time: "08:00 PM - 11:00 PM", stage: "Night Matches (Hostel TT Hall)", court: "Hostel TT Hall", status: "upcoming" },
      { date: "06 Nov", time: "Evening Slots", stage: "Singles & Doubles Grand Finals", court: "College TT Arena", status: "upcoming" }
    ],
    fixtures: [],
    gallery: [
      { url: "assets/images/real-table-tennis.jpg", caption: "Table Tennis Matchplay at Campus Arena" },
      { url: "assets/images/real-champions-team.jpg", caption: "IIIT Vadodara Championship Team" }
    ],
    coordinators: [
      { name: "Bhavya Prajapati", role: "Secretary (Sec)", phone: "+91 83294 55093", email: "202451033@iiitvadodara.ac.in" },
      { name: "Akshat Chhabra", role: "Joint Secretary (Jsec)", phone: "+91 70503 57190", email: "20251504007@iiitvadodara.ac.in" }
    ]
  }
};
