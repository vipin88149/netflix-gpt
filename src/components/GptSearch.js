import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACK_GROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img className="fixed -z-10" src={BACK_GROUND_IMAGE} alt="bg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
