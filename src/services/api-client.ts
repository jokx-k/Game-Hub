import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "30790cc1c70f4a85bf8fa32b9234ce7f",
  },
});
