import React from "react";
import useTrendingMovies from "../hooks/useTrendingMovies";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlaying";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryComponent = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();

  const trendingMovies = useSelector((state) => state.movies?.trendingMovies);
  const popularMovies = useSelector((state) => state.movies?.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies?.upcomingMovies);
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  return (
    <div className="w-screen  ml-4 md:ml-8 lg:ml-12 relative -mt-16 md:-mt-36 lg:-mt-48 xl:-mt-64 z-30">
      <MoviesList movies={nowPlayingMovies} title="New Releases" />
      <MoviesList movies={trendingMovies} title="Trending Now" />
      <MoviesList movies={topRatedMovies} title="Top Rated Movies" />
      <MoviesList movies={upcomingMovies} title="Upcoming" />
      <MoviesList movies={popularMovies} title="Popular on Netflix" />
    </div>
  );
};

export default SecondaryComponent;
