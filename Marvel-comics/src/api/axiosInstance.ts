import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const instance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  params: {
    apikey: "a5837db97d72016c81a7a776f4240db9",
  },
  adapter: cache.adapter,
});

export default instance;
