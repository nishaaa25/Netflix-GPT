import React, { useRef, useState } from "react";
import { lang } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { options } from "../constants/constant";
import { addGptMovies } from "../utils/searchSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const configLang = useSelector((state) => state.config.lang);

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      console.log("error");
    }

    // Array of movies provided by openai
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // Calling searchMOvies function for each movies
    const promiseArray = gptMovies.map((movie) => searchMovie(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovies({moviesResults: tmdbResults, moviesName: gptMovies}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="w-full h-full pt-32 relative z-40 mb-4">
        <form
          onSubmit={handleSubmit}
          className="w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 m-auto rounded-sm flex place-items-center bg-white shadow"
        >
          <input
            ref={searchText}
            type="text"
            name="search"
            placeholder={lang[configLang].gptSearchPlaceholder}
            className="w-full p-3 text-black outline-none"
          />
          <button
            className="bg-red-700 hover:bg-opacity-80 text-white py-3 px-4 w-3/12"
            onClick={handleGptSearch}
          >
            {lang[configLang].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
