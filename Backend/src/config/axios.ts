import axios from "axios";
const AI_SERVICE_URL = process.env.AI_SERVICE_URL ;
const AICall = axios.create({
    baseURL:AI_SERVICE_URL,
    timeout: 300000,
})
if (!AI_SERVICE_URL) {
    throw new Error("AI_SERVICE_URL not defined");
  }
export default AICall