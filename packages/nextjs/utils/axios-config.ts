import axios from "axios";

export const axiosBaseConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});
