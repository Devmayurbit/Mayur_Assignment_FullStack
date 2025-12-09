import axios from "axios";

const api = axios.create({
  baseURL: "https://mayurassignmentfullstackflipr.onrender.com/api"
  //        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //        your Render backend URL + /api
});

export default api;
