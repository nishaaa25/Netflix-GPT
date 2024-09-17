import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import GptSearch from "./GptSearch";
import TopComponent from "./TopComponent";
import useNowPlayingMovies from "../hooks/useNowPlaying";
import SecondaryComponent from "./SecondaryComponent.js";

const Browse = () => {
  useNowPlayingMovies();

  const isActive = useSelector((state) => state.gptSearch.isGptSearchActive);

  return (
    <div>
      <Header />
      {isActive ? (
        <GptSearch />
      ) : (
        <div className="pb-16">
          <TopComponent />
          <SecondaryComponent />
        </div>
      )}
    </div>
  );
};

export default Browse;
