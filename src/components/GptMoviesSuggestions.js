import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import Footer from "./Footer";

const GptMoviesSuggestions = () => {
  const { moviesName, moviesResults } = useSelector((state) => state.gptSearch);

  if (!moviesName) return null;

  return (
    <div className="w-full relative z-30">
      <div className="w-11/12 m-auto px-5 ">
        {moviesName.map((movie, index) => {
          return <MoviesList title={movie} movies={moviesResults[index]} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default GptMoviesSuggestions;
