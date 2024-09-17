import React from "react";
import useRecommendation from "../hooks/useRecommendation";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addShowTrailer } from "../utils/moviesSlice";

const RecommendedMovie = ({ movieId }) => {
  const dispatch = useDispatch();
  const showTrailer = useSelector((state) => state.movies?.showTrailer);

  // Recommended Movies
  useRecommendation(movieId);
  const recommendedMovies = useSelector(
    (state) => state.movies?.moviesRecommendations
  );

  // Handle Click for trailer
  const handleClick = () => {
    if (showTrailer === true) {
      dispatch(addShowTrailer());
    }
  };

  return (
    <div className="relative flex justify-center md:justify-start items-center gap-1 flex-wrap w-full mt-4 ">
      {recommendedMovies &&
        recommendedMovies.map((movie) => {
          const { poster_path, original_title, overview, id, vote_average } =
            movie;
          const vote = vote_average.toString();
          return (
            <Link to={`/movie/${id}`}>
              <div
                key={id}
                className="w-[245px] h-[370px] mx-1 relative bg-[#2f2f2f] rounded-md overflow-hidden mb-2"
                onClick={handleClick}
              >
                <div className="relative w-full h-[180px] overflow-hidden">
                  <img
                    src={"https://image.tmdb.org/t/p/original" + poster_path}
                    alt="backdrop"
                    className="relative w-[100%] h-[100%] object-cover"
                  />
                  <div className="w-full h-full p-2 absolute top-0 left-0 bg-black bg-opacity-80 flex justify-center items-center ">
                    <img
                      src={"https://image.tmdb.org/t/p/original" + poster_path}
                      alt="poster"
                      className=" w-5/12 h-[100%] object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="p-3 text-[#d2d2d2] ">
                  <div className="flex justify-between mb-2">
                    <p className="text-md font-semibold">
                      {original_title.length > 20
                        ? original_title.slice(0, 20) + "..."
                        : original_title}
                    </p>
                    <div className="px-2 rounded-sm bg-yellow-600 inline">
                      {vote?.slice(0, 1)} ☆
                    </div>
                  </div>
                  <p className="text-sm font-semibold ">
                    {overview.slice(0, 150) + "."}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default RecommendedMovie;
