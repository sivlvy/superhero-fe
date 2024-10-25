import axios from "axios";

const BASE_URL = "https://superhero-be.onrender.com";

export const instance = axios.create({
  baseURL: BASE_URL,
});
