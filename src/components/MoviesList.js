import React from "react";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const MoviesList = ({ movies, title }) => {
  return (
    <div className="text-white mt-12">
      <p className="text-2xl font-semibold mb-2">{title}</p>
      <div className="flex gap-3 overflow-x-scroll custom-scrollbar justify-start items-center ">
        {movies &&
          movies.map((movie) => {
            return (
              movie.poster_path && (
                <div key={movie.id}>
                  <MovieCard
                    imgUrl={movie.poster_path}
                    id={movie.id}
                    title={movie.original_title}
                  />
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default MoviesList;
