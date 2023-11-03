import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOPRATED_MOVIESURL, options } from "../constants/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(TOPRATED_MOVIESURL, options);
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
