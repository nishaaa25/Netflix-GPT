import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";

const GptSearch = () => {
  return (
      <div className="w-full relative bg-[#181818] min-h-screen ">
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </div>
  );
};

export default GptSearch;
