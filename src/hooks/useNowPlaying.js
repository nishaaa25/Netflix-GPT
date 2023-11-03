// import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { options } from "../constants/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovie(json?.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
