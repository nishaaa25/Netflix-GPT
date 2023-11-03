import OpenAI from "openai";
import { chatGptAPI_KEY } from "../constants/constant";

const openai = new OpenAI({
  apiKey: chatGptAPI_KEY,
  dangerouslyAllowBrowser: true
});

export default openai;
