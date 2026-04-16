// ── Movie Database ───────────────────────────────────────────────────────────
const MOVIES = [
  // Action
  { title: "The Dark Knight",        year: 2008, rating: 9.0, genre: "Action", emoji: "🦇", desc: "Batman faces the anarchic Joker in a gripping battle for Gotham's soul." },
  { title: "Mad Max: Fury Road",      year: 2015, rating: 8.1, genre: "Action", emoji: "🚗", desc: "A post-apocalyptic chase epic fueled by fire, chrome, and fury." },
  { title: "John Wick",               year: 2014, rating: 7.4, genre: "Action", emoji: "🔫", desc: "A retired hitman unleashes hell after a very personal loss." },
  { title: "Die Hard",                year: 1988, rating: 8.2, genre: "Action", emoji: "💥", desc: "A New York cop battles terrorists inside a Los Angeles skyscraper." },
  { title: "Mission: Impossible – Fallout", year: 2018, rating: 7.7, genre: "Action", emoji: "🪂", desc: "Ethan Hunt races against time to prevent a global catastrophe." },
  { title: "Top Gun: Maverick",       year: 2022, rating: 8.3, genre: "Action", emoji: "✈️", desc: "Maverick returns to push the limits in a daring training mission." },

  // Sci-Fi
  { title: "Inception",               year: 2010, rating: 8.8, genre: "Sci-Fi", emoji: "🌀", desc: "A thief infiltrates dreams to plant an idea deep in a target's mind." },
  { title: "Interstellar",            year: 2014, rating: 8.7, genre: "Sci-Fi", emoji: "🪐", desc: "Astronauts travel beyond the galaxy to find humanity a new home." },
  { title: "The Matrix",              year: 1999, rating: 8.7, genre: "Sci-Fi", emoji: "💊", desc: "A hacker discovers the world is a simulation — and fights to free it." },
  { title: "Arrival",                 year: 2016, rating: 7.9, genre: "Sci-Fi", emoji: "🛸", desc: "A linguist deciphers an alien language with world-changing implications." },
  { title: "Blade Runner 2049",       year: 2017, rating: 8.0, genre: "Sci-Fi", emoji: "🌧️", desc: "A blade runner uncovers a secret that could destabilize civilization." },
  { title: "Ex Machina",              year: 2014, rating: 7.7, genre: "Sci-Fi", emoji: "🤖", desc: "A programmer tests the consciousness of a humanoid AI — with dark results." },

  // Drama
  { title: "The Shawshank Redemption",year: 1994, rating: 9.3, genre: "Drama", emoji: "🏛️", desc: "Two imprisoned men bond over years, finding solace and eventual redemption." },
  { title: "The Godfather",           year: 1972, rating: 9.2, genre: "Drama", emoji: "🌹", desc: "The aging patriarch of an organized crime dynasty transfers control." },
  { title: "Forrest Gump",            year: 1994, rating: 8.8, genre: "Drama", emoji: "🏃", desc: "A kind-hearted man witnesses and influences several defining moments of history." },
  { title: "Schindler's List",        year: 1993, rating: 9.0, genre: "Drama", emoji: "🕯️", desc: "Oskar Schindler saves Polish Jews from the Holocaust during WWII." },
  { title: "Whiplash",                year: 2014, rating: 8.5, genre: "Drama", emoji: "🥁", desc: "An ambitious drummer faces a brutal music instructor at a conservatory." },
  { title: "12 Angry Men",            year: 1957, rating: 9.0, genre: "Drama", emoji: "⚖️", desc: "A jury deliberates the fate of a young man accused of murder." },

  // Comedy
  { title: "The Grand Budapest Hotel",year: 2014, rating: 8.1, genre: "Comedy", emoji: "🏨", desc: "A legendary concierge and his lobby boy navigate a murder mystery." },
  { title: "Superbad",                year: 2007, rating: 7.6, genre: "Comedy", emoji: "🍺", desc: "Two inseparable friends try to make the most of their last days before college." },
  { title: "Knives Out",              year: 2019, rating: 7.9, genre: "Comedy", emoji: "🔪", desc: "A brilliant detective investigates the death of a wealthy crime novelist." },
  { title: "The Princess Bride",      year: 1987, rating: 8.1, genre: "Comedy", emoji: "⚔️", desc: "A farmhand rescues his true love in a fairy-tale adventure packed with wit." },
  { title: "What We Do in the Shadows",year:2014, rating: 7.6, genre: "Comedy", emoji: "🧛", desc: "A mockumentary following four vampire roommates in modern Wellington." },
  { title: "Parasite",                year: 2019, rating: 8.5, genre: "Comedy", emoji: "🪲", desc: "A poor family schemes to leech off a wealthy household — with dark twists." },

  // Horror
  { title: "Get Out",                 year: 2017, rating: 7.7, genre: "Horror", emoji: "👁️", desc: "A Black man uncovers a disturbing secret about his girlfriend's family." },
  { title: "Hereditary",              year: 2018, rating: 7.3, genre: "Horror", emoji: "🏚️", desc: "A family unravels after the death of their secretive grandmother." },
  { title: "A Quiet Place",           year: 2018, rating: 7.5, genre: "Horror", emoji: "🤫", desc: "A family must live in near-total silence to avoid blind, noise-hunting creatures." },
  { title: "The Shining",             year: 1980, rating: 8.4, genre: "Horror", emoji: "🪓", desc: "A writer and his family become caretakers of a haunted isolated hotel." },
  { title: "It Follows",              year: 2014, rating: 6.8, genre: "Horror", emoji: "👣", desc: "After a strange encounter, a young woman is pursued by an unstoppable supernatural entity." },
  { title: "Midsommar",               year: 2019, rating: 7.1, genre: "Horror", emoji: "🌸", desc: "A couple travels to Sweden for a festival that turns sinister and surreal." },

  // Romance
  { title: "Titanic",                 year: 1997, rating: 7.9, genre: "Romance", emoji: "🚢", desc: "A poor artist and a socialite fall in love aboard the ill-fated ocean liner." },
  { title: "La La Land",              year: 2016, rating: 8.0, genre: "Romance", emoji: "🎷", desc: "A jazz musician and an aspiring actress fall in love in modern-day Los Angeles." },
  { title: "Pride & Prejudice",       year: 2005, rating: 7.8, genre: "Romance", emoji: "📖", desc: "Elizabeth Bennet navigates love and class in 19th-century England." },
  { title: "Before Sunrise",          year: 1995, rating: 8.1, genre: "Romance", emoji: "🌅", desc: "Two strangers meet on a train and spend one magical night in Vienna." },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: 8.3, genre: "Romance", emoji: "💭", desc: "A man erases memories of his ex — only to fall for her again." },
  { title: "Call Me by Your Name",    year: 2017, rating: 7.9, genre: "Romance", emoji: "🍑", desc: "A summer romance unfolds between a teenager and an older graduate student in Italy." },

  // Animation
  { title: "Spirited Away",           year: 2001, rating: 9.3, genre: "Animation", emoji: "🐉", desc: "A young girl enters a magical spirit world while her parents are transformed." },
  { title: "Spider-Man: Into the Spider-Verse", year: 2018, rating: 8.4, genre: "Animation", emoji: "🕷️", desc: "Miles Morales becomes Spider-Man across a multiverse of heroes." },
  { title: "WALL-E",                  year: 2008, rating: 8.4, genre: "Animation", emoji: "🤖", desc: "A lonely robot falls in love and sparks a chain of events to save humanity." },
  { title: "Princess Mononoke",       year: 1997, rating: 8.4, genre: "Animation", emoji: "🐺", desc: "An exiled warrior fights in a war between forest gods and industrialization." },
  { title: "The Lion King",           year: 1994, rating: 8.5, genre: "Animation", emoji: "🦁", desc: "A young lion prince flees his kingdom after his father's murder." },
  { title: "Coco",                    year: 2017, rating: 8.4, genre: "Animation", emoji: "💀", desc: "A boy accidentally ends up in the Land of the Dead on Día de Muertos." },

  // Thriller
  { title: "Se7en",                   year: 1995, rating: 8.6, genre: "Thriller", emoji: "🔦", desc: "Two detectives hunt a serial killer who uses the seven deadly sins as motifs." },
  { title: "Gone Girl",               year: 2014, rating: 8.1, genre: "Thriller", emoji: "🎭", desc: "A husband becomes the prime suspect when his wife goes missing on their anniversary." },
  { title: "Parasite",                year: 2019, rating: 8.5, genre: "Thriller", emoji: "🪲", desc: "Class warfare ignites when a poor family infiltrates a rich household." },
  { title: "Prisoners",               year: 2013, rating: 8.1, genre: "Thriller", emoji: "🔐", desc: "A desperate father takes matters into his own hands when his daughter disappears." },
  { title: "Zodiac",                  year: 2007, rating: 7.7, genre: "Thriller", emoji: "♌", desc: "Detectives and journalists obsess over the Zodiac Killer's taunting ciphers." },
  { title: "No Country for Old Men",  year: 2007, rating: 8.2, genre: "Thriller", emoji: "💼", desc: "A hunter stumbles upon drug money and is pursued by a relentless killer." },
];

// ── Genre Map (keywords → genre) ─────────────────────────────────────────────
const GENRE_KEYWORDS = {
  "Action":    ["dark knight","mad max","john wick","die hard","mission impossible","top gun","avengers","batman","fast","furious","james bond","007"],
  "Sci-Fi":    ["inception","interstellar","matrix","arrival","blade runner","ex machina","alien","star wars","dune","gravity","her","2001"],
  "Drama":     ["shawshank","godfather","forrest gump","schindler","whiplash","12 angry men","spotlight","moonlight","there will be blood"],
  "Comedy":    ["grand budapest","superbad","knives out","princess bride","shadows","parasite","ferris bueller","groundhog day","bridesmaids"],
  "Horror":    ["get out","hereditary","quiet place","shining","it follows","midsommar","conjuring","sinister","us","halloween"],
  "Romance":   ["titanic","la la land","pride","before sunrise","eternal sunshine","call me by your name","notebook","about time","500 days"],
  "Animation": ["spirited away","spider-man","wall-e","mononoke","lion king","coco","finding nemo","toy story","frozen","howl","up"],
  "Thriller":  ["se7en","seven","gone girl","prisoners","zodiac","no country","silence of the lambs","parasite","oldboy","memento"],
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function detectGenre(input) {
  const lower = input.toLowerCase().trim();
  for (const [genre, keywords] of Object.entries(GENRE_KEYWORDS)) {
    if (keywords.some(kw => lower.includes(kw))) return genre;
  }
  return null;
}

function getRecommendations(genre, excludeTitle) {
  return MOVIES
    .filter(m => m.genre === genre && m.title.toLowerCase() !== excludeTitle.toLowerCase())
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);
}

function buildCard(movie, index) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.style.animationDelay = `${index * 70}ms`;
  card.innerHTML = `
    <div class="card-poster">${movie.emoji}</div>
    <div class="card-body">
      <div class="card-title">${movie.title}</div>
      <p class="card-desc">${movie.desc}</p>
      <div class="card-meta">
        <span class="card-year">${movie.year}</span>
        <span class="card-rating">${movie.rating.toFixed(1)}</span>
      </div>
    </div>`;
  return card;
}

// ── DOM Refs ─────────────────────────────────────────────────────────────────
const input         = document.getElementById("movieInput");
const btn           = document.getElementById("recommendBtn");
const errorMsg      = document.getElementById("errorMsg");
const resultsSection= document.getElementById("resultsSection");
const resultsTitle  = document.getElementById("resultsTitle");
const genreTag      = document.getElementById("genreTag");
const movieGrid     = document.getElementById("movieGrid");

// ── Core Logic ────────────────────────────────────────────────────────────────
function recommend() {
  const query = input.value.trim();

  // Reset UI
  errorMsg.classList.add("hidden");
  resultsSection.classList.add("hidden");
  movieGrid.innerHTML = "";

  if (!query) {
    showError("Please enter a movie title first.");
    return;
  }

  const genre = detectGenre(query);

  if (!genre) {
    showError(`Hmm, we don't recognize "${query}". Try a popular title like Inception, Titanic, or The Shining.`);
    return;
  }

  const recs = getRecommendations(genre, query);

  if (!recs.length) {
    showError("No recommendations found. Try a different movie!");
    return;
  }

  genreTag.textContent = genre.toUpperCase();
  resultsTitle.textContent = `Because you like "${toTitleCase(query)}", you might enjoy…`;
  recs.forEach((m, i) => movieGrid.appendChild(buildCard(m, i)));

  resultsSection.classList.remove("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.classList.remove("hidden");
  // Re-trigger animation
  errorMsg.style.animation = "none";
  void errorMsg.offsetWidth;
  errorMsg.style.animation = "";
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
}

// ── Events ────────────────────────────────────────────────────────────────────
btn.addEventListener("click", recommend);
input.addEventListener("keydown", e => { if (e.key === "Enter") recommend(); });
