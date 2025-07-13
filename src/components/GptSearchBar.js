import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptKey, addGptMovieResult } from "../utils/GptSlice";
import { getOpenAI } from "../utils/openAI";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const gptKey = useSelector((store) => store.gpt.gptKey);
  const searchText = useRef(null);
  const gptText = useRef(null);
  const dispatch = useDispatch();

  const handleGptkeyButton = () => {
    dispatch(addGptKey(gptText.current.value));
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchButton = async () => {
    try {
      const openai = getOpenAI();
      if (!openai) {
        alert(" OpenAI is not initialized or invalid.");
        return;
      }
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query" +
        searchText.current.value +
        "only give me name of 5 movies, comma seperated like the example result given ahead Example Result: Don, Gadar, Sholay, Koi mil gya, Golmal";

      const gptResults = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: gptQuery }],
      });

      // const movies = "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Don, Padosan";

      const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");

      // const gptMovies = movies.split(",");

      // const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      // const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      alert("Something went wrong with GPT. Please try again later.");
    }
  };

  return (
    <div className="pt-[10%] flex justify-center opacity-85 ">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        {!gptKey && (
          <>
            <input
              ref={gptText}
              type="text"
              className="p-2 m-4 col-span-9"
              placeholder="gpt key"
            />
            <button
              className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
              onClick={handleGptkeyButton}
            >
              Submit
            </button>
          </>
        )}

        <input
          ref={searchText}
          type="text"
          className="p-2 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
          onClick={handleGptSearchButton}
        >
          {lang[langkey].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
