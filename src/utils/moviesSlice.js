import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieDetails: null,
    moviesRecommendations: null,
    showTrailer: false,
  },
  reducers: {
    addShowTrailer: (state) => {
      state.showTrailer = !state.showTrailer;
    },
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addRecommendationMovie: (state, action) => {
      state.moviesRecommendations = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addTrendingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addRecommendationMovie,
  addMovieDetails,
  addShowTrailer,
} = movieSlice.actions;
export default movieSlice.reducer;
