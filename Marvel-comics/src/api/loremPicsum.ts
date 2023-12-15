import axios from "axios";

const loremPicsum = axios.create({
  baseURL: "https://picsum.photos/v2/list",
});

export default loremPicsum;
