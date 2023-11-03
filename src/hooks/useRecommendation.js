import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { options } from "../constants/constant";
import { addRecommendationMovie } from "../utils/moviesSlice";

const useRecommendation = (movieId) => {
  const dispatch = useDispatch();
  const getRecommendationMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?&page=1`,
      options
    );
    const json = await data.json();
    dispatch(addRecommendationMovie(json?.results));
  };
  useEffect(() => {
    getRecommendationMovie();
  }, [movieId]);
};

export default useRecommendation;
