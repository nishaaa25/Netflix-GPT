import { useEffect } from "react";
import { options } from "../constants/constant";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  const movieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      options
    );
    const json = await data.json();
    dispatch(addMovieDetails(json));
  };
  // movieDetails();
  useEffect(() => {
    movieDetails();
  }, [movieId]);
};

export default useMovieDetails;
