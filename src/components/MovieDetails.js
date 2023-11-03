import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import useMovieDetails from "../hooks/useMovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { addShowTrailer } from "../utils/moviesSlice";
import Video from "./Video";

const MovieDetails = ({ movieId }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addShowTrailer());
  };
  useMovieDetails(movieId);
  const movieDetails = useSelector((state) => state.movies?.movieDetails);
  const showTrailer = useSelector((state) => state.movies?.showTrailer);
  // Release Date
  const d = new Date(movieDetails?.release_date);
  const release_date = d.getFullYear();

  // Rating
  const vote = movieDetails?.vote_average.toString();
  return (
    <div>
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        {showTrailer ? (
          <div className="w-[1080px] relative">
            <Video id={movieDetails?.id} />
            <div className="w-full h-full absolute top-0 left-0 bg-white bg-opacity-5"></div>
          </div>
        ) : (
          <div>
            <img
              src={
                "https://image.tmdb.org/t/p/original" +
                movieDetails?.poster_path
              }
              alt="backdrop"
              className="relative w-[100%] h-[100%] object-cover"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-80 flex justify-center items-center ">
              <img
                src={
                  "https://image.tmdb.org/t/p/original" +
                  movieDetails?.poster_path
                }
                alt="poster"
                className=" w-5/12 h-[65vh] object-cover rounded-md"
              />
            </div>
          </div>
        )}
      </div>
      <div className="pt-6 px-6 md:px-12 ">
        <div className="px-2 rounded-sm bg-yellow-600 inline">
          {vote?.slice(0, 1)} ☆
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xl font-bold mb-1">
            {movieDetails?.original_title} ({release_date})
          </p>
          <div className="flex place-items-center gap-3 cursor-pointer">
            <div onClick={handleClick}>
              {showTrailer ? <PauseCircleOutlineIcon fontSize="large" className="transition-0.1s hover:text-[40px]"/> : <PlayCircleOutlineIcon fontSize="large" className="transition-0.1s hover:text-[40px]" />}
            </div>
            <div>
              <AddCircleOutlineRoundedIcon fontSize="large" className="transition-0.1s hover:text-[40px]"/>
            </div>
          </div>
        </div>
        <p className="font-semibold italic text-[13px] mb-4">
          {movieDetails?.tagline}
        </p>
        <p className="font-semibold mb-1">Overview</p>
        <p className="w-11/12 md:w-9/12 text-sm">{movieDetails?.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
