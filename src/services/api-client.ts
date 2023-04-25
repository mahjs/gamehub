import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aaa26fa8ad7141c79e4c3031b107e3f1",
  },
});
