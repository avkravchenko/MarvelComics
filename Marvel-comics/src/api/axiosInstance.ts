import axios from "axios";

const instance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  params: {
    apikey: "a5837db97d72016c81a7a776f4240db9",
  },
});

export default instance;
