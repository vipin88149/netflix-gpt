import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./GptSlice";
import configReducer from "./configSlice";
import chatReducer from "./chatSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    chat: chatReducer,
  },
});

export default appStore;
