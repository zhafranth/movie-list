import axios from "axios";

export type ApiResponse<T> = {
  data: T;
};

const apiRequest = axios.create({
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
  baseURL: "https://api.themoviedb.org/3",
});

export default apiRequest;
