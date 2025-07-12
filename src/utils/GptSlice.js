import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const {toggleGptSearchView} = gptslice.actions;
export default gptslice.reducer;