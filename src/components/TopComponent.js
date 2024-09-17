import React from "react";
import { useSelector } from "react-redux";
import Video from "./Video";
import VideoDetails from "./VideoDetails";
const TopComponent = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[2];
  const {original_title, overview, release_date, vote_average} = mainMovie;
  return (
    <div className="bg-black bg-opacity-40 relative w-full ">
      <VideoDetails title={original_title}  overview={overview} release={release_date} rating={vote_average.toString().slice(0,3)}/>
      <Video id={mainMovie?.id} />
    </div>
  );
};

export default TopComponent;
