import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    gptKey: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
    addGptKey: (state, action) => {
      state.gptKey = action.payload;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult, addGptKey } =
  gptslice.actions;
export default gptslice.reducer;
