export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDNiYTgyMmFlZWNmNmViZTVlYjFlMTE1OTQ0ODU2ZiIsInN1YiI6IjY1Mzg5ZmExOWMyNGZjMDBlMzNhODA1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Y7TKiehZ1BY7zUbgg6HyjoF0gkcBC31imZrFOp93QQ",
  },
};

export const TRENDING_MOVIESURL =
  "https://api.themoviedb.org/3/trending/movie/day?&page=1";

export const POPULAR_MOVIESURL =
  "https://api.themoviedb.org/3/movie/popular?&page=2";

export const TOPRATED_MOVIESURL =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";

export const UPCOMING_MOVIESURL =
  "https://api.themoviedb.org/3/movie/upcoming?&page=2";

export const TOP_TVSHOWSURL = "https://api.themoviedb.org/3/tv/popular?&page=1";

export const GPTSEARCHBG_URL =
  "https://i.pinimg.com/564x/7e/d8/b0/7ed8b050d6d62aa79729e9ae1d02493f.jpg";

export const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
};

export const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  marathi: {
    search: "शोध",
    gptSearchPlaceholder: "तुम्हाला आज काय बघायला आवडेल?",
  },
  punjabi: {
    search: "ਖੋਜ",
    gptSearchPlaceholder: "ਤੁਸੀਂ ਅੱਜ ਕੀ ਦੇਖਣਾ ਚਾਹੋਗੇ?",
  },
  spanish: {
    search: "buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
};

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
  { identifier: "punjabi", name: "Punjabi" },
  { identifier: "spanish", name: "Spanish" },
];

// export const chatGptAPI_KEY = "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";
export const chatGptAPI_KEY = "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";
// export const chatGptAPI_KEY = "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";