import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";

const Video = (props) => {
  const { id } = props;
  const trailer = useMovieTrailer(id);
  return (
    <div className="w-full relative top-8 md:-top-12 z-0 ">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&loop=1&mute=1&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="trailer"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
