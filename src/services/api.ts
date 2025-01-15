import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.164.12:3333",
});
