import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: ["hii there"],
  },
  reducers: {
    changeMessage: (state, action) => {
      state.message.push(action.payload)
    },
  },
});

export const { changeMessage } = chatSlice.actions;

export default chatSlice.reducer;
