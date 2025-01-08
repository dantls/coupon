import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.235.12:3333",
});
