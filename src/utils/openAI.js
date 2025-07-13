// src/utils/openAI.js
import OpenAI from "openai";
import store from "./appStore";

let openai = null;

export const getOpenAI = () => {
  if (openai) return openai;

  const apiKey = store.getState()?.gpt?.gptKey;

  if (!apiKey) {
    return null;
  }

  openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });

  return openai;
};
