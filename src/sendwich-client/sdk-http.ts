import axios from "axios";

export const sdkHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SENDWICH_API_URL,
});

sdkHttp.interceptors.request.use((config) => {
  return config;
});
