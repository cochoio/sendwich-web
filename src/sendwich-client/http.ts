import axios from "axios";

export const sdkHttp = axios.create({
  baseURL: "https://mini-sendwich.cloudavar.com",
});

sdkHttp.interceptors.request.use((config) => {
  return config;
});
