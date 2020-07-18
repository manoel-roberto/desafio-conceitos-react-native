import axios from "axios";

const api = axios.create({
  baseURL: "http://127.18.79.93:3333",
});

export default api;
