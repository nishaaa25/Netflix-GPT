import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POPULAR_MOVIESURL, options } from  "../constants/constant";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIESURL, options);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  });
};

export default usePopularMovies;
